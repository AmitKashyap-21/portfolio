const GITHUB_GRAPHQL = "https://api.github.com/graphql";

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string } | null;
  updatedAt: string;
}

export interface GitHubData {
  repos: GitHubRepo[];
  totalContributions: number;
}

const PINNED_REPOS_QUERY = `
query {
  user(login: "amitkashyap") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          updatedAt
        }
      }
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
  }
}`;

export async function fetchGitHubData(): Promise<GitHubData> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // Return mock data when no token is available
    return getMockData();
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      console.error("GitHub API error:", res.status);
      return getMockData();
    }

    const json = await res.json();
    const user = json.data?.user;

    if (!user) return getMockData();

    return {
      repos: user.pinnedItems.nodes as GitHubRepo[],
      totalContributions:
        user.contributionsCollection.contributionCalendar.totalContributions,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return getMockData();
  }
}

function getMockData(): GitHubData {
  return {
    repos: [
      {
        name: "enterprise-rag-system",
        description: "Production RAG pipeline with hybrid search and LLM orchestration",
        url: "https://github.com/amitkashyap/enterprise-rag-system",
        stargazerCount: 42,
        forkCount: 8,
        primaryLanguage: { name: "Python", color: "#3572A5" },
        updatedAt: new Date().toISOString(),
      },
      {
        name: "agentic-workflow",
        description: "Multi-agent AI system with autonomous task decomposition",
        url: "https://github.com/amitkashyap/agentic-workflow",
        stargazerCount: 35,
        forkCount: 5,
        primaryLanguage: { name: "Python", color: "#3572A5" },
        updatedAt: new Date().toISOString(),
      },
      {
        name: "ml-recommendation-engine",
        description: "Real-time recommendation engine with collaborative filtering",
        url: "https://github.com/amitkashyap/ml-recommendation-engine",
        stargazerCount: 28,
        forkCount: 6,
        primaryLanguage: { name: "Python", color: "#3572A5" },
        updatedAt: new Date().toISOString(),
      },
      {
        name: "cv-inference-pipeline",
        description: "Real-time computer vision inference with YOLO and PyTorch",
        url: "https://github.com/amitkashyap/cv-inference-pipeline",
        stargazerCount: 19,
        forkCount: 3,
        primaryLanguage: { name: "Python", color: "#3572A5" },
        updatedAt: new Date().toISOString(),
      },
      {
        name: "portfolio-website",
        description: "Personal portfolio built with Next.js, TailwindCSS, Framer Motion",
        url: "https://github.com/amitkashyap/portfolio-website",
        stargazerCount: 12,
        forkCount: 2,
        primaryLanguage: { name: "TypeScript", color: "#3178c6" },
        updatedAt: new Date().toISOString(),
      },
      {
        name: "fastapi-ml-serving",
        description: "Production ML model serving with FastAPI and MLflow",
        url: "https://github.com/amitkashyap/fastapi-ml-serving",
        stargazerCount: 15,
        forkCount: 4,
        primaryLanguage: { name: "Python", color: "#3572A5" },
        updatedAt: new Date().toISOString(),
      },
    ],
    totalContributions: 847,
  };
}
