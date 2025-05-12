import React, { useState, useEffect } from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name?: string;
}

// Blacklist of contributors to exclude
const EXCLUDED_CONTRIBUTORS = ['pre-commit-ci', 'pre-commit-ci[bot]', 'dependabot', 'dependabot[bot]'];

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await fetch('https://api.github.com/repos/PTB-MR/mrpro/contributors');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Unexpected data format from GitHub API');
        }

        const