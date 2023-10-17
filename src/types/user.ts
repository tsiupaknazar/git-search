export type LocalGithubUser = {
  login: string,
  avatar: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter: string,
  repos: number,
  followers: number,
  following: number,
  created: string,
}

export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter_username: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
}

export type GithubRepository = {
  id: number;
  name: string;
  full_name: string;
  owner: GithubUser;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  homepage: string;
};

export type GithubRepositoryItem = {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
};



export type GithubError = {
  message: string,
  documentation_url: string,
}
