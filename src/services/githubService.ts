export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  company: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
}

export interface GitHubFetchResult {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export async function fetchGitHubProfileAndRepos(
  username: string,
  signal?: AbortSignal
): Promise<GitHubFetchResult> {
  const clean = username.trim().replace(/^@/, '');
  if (!clean || !/^[a-zA-Z0-9-]+$/.test(clean)) {
    throw new Error('Please enter a valid GitHub username (letters, numbers, and hyphens only).');
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(clean)}`, {
    headers,
    signal,
  });

  if (userRes.status === 404) {
    throw new Error(`No GitHub account found for "${clean}".`);
  }
  if (userRes.status === 403) {
    throw new Error('GitHub API rate limit reached. Please try again shortly.');
  }
  if (!userRes.ok) {
    throw new Error(`GitHub API error (${userRes.status}).`);
  }

  const user: GitHubUser = await userRes.json();

  const reposRes = await fetch(
    `https://api.github.com/users/${encodeURIComponent(clean)}/repos?sort=updated&per_page=6`,
    { headers, signal }
  );

  if (!reposRes.ok) {
    return { user, repos: [] };
  }

  const repos: GitHubRepo[] = await reposRes.json();
  return { user, repos };
}
