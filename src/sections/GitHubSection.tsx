import { useEffect, useState } from 'react';
import { ExternalLink, GitFork, Github, Loader2, Search, Star } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROFILE } from '../data/profile';
import {
  fetchGitHubProfileAndRepos,
  type GitHubFetchResult,
} from '../services/githubService';

export function GitHubSection() {
  const configuredHandle = PROFILE.githubUsername.trim();
  const [inputHandle, setInputHandle] = useState(configuredHandle);
  const [activeHandle, setActiveHandle] = useState(configuredHandle);
  const [data, setData] = useState<GitHubFetchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeHandle) {
      setData(null);
      setError(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchGitHubProfileAndRepos(activeHandle, controller.signal)
      .then((res) => {
        setData(res);
      })
      .catch((err: unknown) => {
        if ((err as Error).name === 'AbortError') return;
        setData(null);
        setError(err instanceof Error ? err.message : 'Unable to load GitHub profile.');
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [activeHandle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = inputHandle.trim().replace(/^@/, '');
    if (!cleaned) {
      setError('Enter a GitHub username to fetch live public repositories.');
      return;
    }
    setActiveHandle(cleaned);
  };

  return (
    <section
      id="github"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-8">
        <SectionHeader
          index="02"
          kicker="Open Source & Repositories"
          title="GitHub Workspace"
          subtitle="Live GitHub REST API integration. No fabricated contribution counts, star counts, or repository stats are displayed—only verified public data when a GitHub username is connected."
          accent="violet"
        />

        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          {/* Interactive Lookup / Connect Bar */}
          <div className="flex flex-col gap-4 border-b border-white/[0.06] pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d0bcff]">
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>
                  {configuredHandle
                    ? `Connected Account: @${configuredHandle}`
                    : 'GitHub Handle Not Configured in Profile'}
                </span>
              </div>
              <p className="text-sm text-[#b9cacb]">
                {configuredHandle
                  ? 'Showing live repositories fetched from GitHub.'
                  : 'Set githubUsername in src/data/profile.ts, or preview any public GitHub profile live below.'}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="github-username-input" className="sr-only">
                GitHub username
              </label>
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#849495]"
                  aria-hidden="true"
                />
                <input
                  id="github-username-input"
                  type="text"
                  value={inputHandle}
                  onChange={(e) => setInputHandle(e.target.value)}
                  placeholder="Enter GitHub username..."
                  className="h-11 w-full rounded-full border border-white/10 bg-[#111319] pr-4 pl-10 font-mono text-sm text-[#e2e2ea] placeholder-[#849495] focus:border-[#00f2fe] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d0bcff] px-5 text-sm font-semibold text-[#23005c] transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d0bcff]"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Fetching</span>
                  </>
                ) : (
                  <span>Load Profile</span>
                )}
              </button>
            </form>
          </div>

          {/* States: Error / Loading / Data / Unconfigured */}
          {error ? (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-[#ffb4ab]/30 bg-[#93000a]/20 p-4 text-sm text-[#ffb4ab]"
            >
              {error}
            </div>
          ) : null}

          {loading ? (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-36 animate-pulse rounded-xl bg-[#191c21] p-5"
                />
              ))}
            </div>
          ) : data ? (
            <div className="mt-6 space-y-6">
              {/* Live User Header */}
              <div className="flex flex-col justify-between gap-4 rounded-xl bg-[#111319] p-5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={data.user.avatar_url}
                    alt={`${data.user.login} GitHub avatar`}
                    referrerPolicy="no-referrer"
                    className="h-14 w-14 rounded-full object-cover ring-1 ring-[#00f2fe]/40"
                  />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#e2e2ea]">
                      {data.user.name || data.user.login}
                    </h3>
                    <p className="font-mono text-xs text-[#00f2fe]">@{data.user.login}</p>
                    {data.user.bio ? (
                      <p className="mt-1 text-xs text-[#b9cacb]">{data.user.bio}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-4 font-mono text-xs text-[#b9cacb] tabular-nums">
                    <span>
                      <strong className="text-[#e2e2ea]">{data.user.public_repos}</strong> Repos
                    </span>
                    <span>
                      <strong className="text-[#e2e2ea]">{data.user.followers}</strong> Followers
                    </span>
                  </div>
                  <a
                    href={data.user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#282a30] px-4 text-xs font-semibold text-[#e2e2ea] transition-colors hover:bg-[#33353b] hover:text-[#00f2fe]"
                  >
                    <span>Open GitHub</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Repositories Grid */}
              {data.repos.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {data.repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col justify-between rounded-xl bg-[#191c21] p-5 transition-colors hover:bg-[#282a30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="truncate font-mono text-sm font-semibold text-[#00f2fe]">
                            {repo.name}
                          </h4>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#849495]" />
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#b9cacb]">
                          {repo.description || 'No repository description provided.'}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#849495] tabular-nums">
                        <span>{repo.language || 'Code'}</span>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-3 w-3" aria-hidden="true" />
                            {repo.stargazers_count}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork className="h-3 w-3" aria-hidden="true" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#b9cacb]">
                  No public repositories returned for this account.
                </p>
              )}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-[#111319] p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[#00f2fe]">
                  Coding Identity
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#b9cacb]">
                  Exploring AI research agents, data science workflows, Microsoft Azure, and
                  collaborative Android team engineering.
                </p>
              </div>
              <div className="rounded-xl bg-[#111319] p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[#d0bcff]">
                  Verified Profile Link
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#b9cacb]">
                  No GitHub URL was included in the LinkedIn export. Update{' '}
                  <code className="font-mono text-[#e2e2ea]">githubUsername</code> in{' '}
                  <code className="font-mono text-[#e2e2ea]">src/data/profile.ts</code> to bind
                  your live profile.
                </p>
              </div>
              <div className="rounded-xl bg-[#111319] p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[#7bd0ff]">
                  Connect Directly
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#b9cacb]">
                  Want to collaborate on a repository or hackathon build? Reach out via LinkedIn or
                  email below.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
