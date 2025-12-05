// GitHub API integration for real data
const GITHUB_USERNAME = 'saidElamri';
const CACHE_PREFIX = 'saidos_github_cache_';
const CACHE_DURATION = 3600 * 1000; // 1 hour

// Helper to fetch with cache
async function fetchWithCache(key, url) {
  const cacheKey = CACHE_PREFIX + key;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${key}`);
    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
    return data;
  } catch (error) {
    console.error(`GitHub API error (${key}):`, error);
    if (cached) return JSON.parse(cached).data; // Return stale data if fetch fails
    return null;
  }
}

// Fetch user profile
export async function fetchGitHubProfile() {
  return await fetchWithCache('profile', `https://api.github.com/users/${GITHUB_USERNAME}`);
}

// Fetch user repositories
export async function fetchGitHubRepos() {
  const repos = await fetchWithCache('repos', `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
  
  if (!repos) return null;

  return repos.map(repo => ({
    id: repo.id,
    title: repo.name,
    desc: repo.description || 'No description available',
    tech: [repo.language].filter(Boolean),
    github: repo.html_url,
    link: repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated: repo.updated_at,
  }));
}

// Fetch contribution data
export async function fetchGitHubActivity() {
  const events = await fetchWithCache('activity', `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`);

  if (!events) return null;
  
  return events.slice(0, 5).map(event => ({
    type: event.type,
    repo: event.repo.name,
    date: event.created_at,
  }));
}

// Custom hook for GitHub data
import { useState, useEffect } from 'react';

export function useGitHubData() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileData, reposData, activityData] = await Promise.all([
          fetchGitHubProfile(),
          fetchGitHubRepos(),
          fetchGitHubActivity(),
        ]);
        
        setProfile(profileData);
        setRepos(reposData);
        setActivity(activityData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return { profile, repos, activity, loading, error };
}
