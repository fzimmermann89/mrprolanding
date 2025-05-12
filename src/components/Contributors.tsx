import React, { useEffect, useState } from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name?: string;
}

// Blacklist of contributors to exclude
const EXCLUDED_CONTRIBUTORS = ['pre-commit-ci', 'dependabot', 'dependabot[bot]'];

async function getContributors() {
  try {
    const response = await fetch('https://api.github.com/repos/PTB-MR/mrpro/contributors');
    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error('Unexpected data format from GitHub API:', data);
      return [];
    }

    const filteredContributors = data.filter(
      (contributor: Contributor) => !EXCLUDED_CONTRIBUTORS.includes(contributor.login)
    );

    // Fetch real names for each contributor
    const contributorsWithNames = await Promise.all(
      filteredContributors.map(async (contributor: Contributor) => {
        try {
          const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`);
          const userData = await userResponse.json();
          return { ...contributor, name: userData.name || contributor.login };
        } catch (error) {
          return { ...contributor, name: contributor.login };
        }
      })
    );

    return contributorsWithNames;
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    getContributors().then(setContributors);
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-4">Contributors</h3>
      <div className="flex flex-wrap gap-2">
        {contributors.map((contributor) => (
          <a
            key={contributor.login}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            title={contributor.name}
          >
            <img
              src={contributor.avatar_url}
              alt={`${contributor.name}'s avatar`}
              className="w-10 h-10 rounded-full hover:ring-2 hover:ring-blue-500 transition-all duration-150"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contributors;