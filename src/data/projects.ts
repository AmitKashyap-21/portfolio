export interface Project {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  impact: string[];
  tags: string[];
  github?: string;
  demo?: string;
  category: "ml" | "genai" | "fullstack" | "cv";
  accentColor: "blue" | "purple" | "green";
  badge?: string;
  // Detail page fields
  description: string;
  summary: string;
  architecture: string;
  technologies: string[];
  metrics: string[];
  deployment: string;
}

export const projects: Project[] = [
  {
    slug: "enterprise-rag-system",
    title: "Enterprise RAG System",
    problem:
      "Enterprise companies struggle with outdated documentation. Knowledge is scattered across PDFs, databases, and wikis — support teams spend 30+ minutes finding answers per ticket.",
    solution:
      "Built a production-grade RAG pipeline that ingests all documentation sources, creates dense embeddings, and uses hybrid vector + keyword search with LLM-powered response generation.",
    impact: [
      "40% faster support response",
      "3 enterprise clients",
      "$500K ARR",
    ],
    summary:
      "Production-grade Retrieval-Augmented Generation pipeline for enterprise document Q&A with hybrid search and LLM orchestration.",
    description:
      "Built a scalable RAG system that processes enterprise documents, generates embeddings, and serves precise answers using hybrid vector + keyword search with LLM-powered response generation.",
    tags: ["LangChain", "FAISS", "OpenAI", "FastAPI", "Python"],
    github: "https://github.com/amitkashyap",
    category: "genai",
    accentColor: "blue",
    badge: "Featured",
    architecture:
      "Document Ingestion → Chunking (RecursiveCharacterTextSplitter) → Embedding Generation (OpenAI Ada-002) → Vector Store (FAISS) → Hybrid Retriever (BM25 + Dense) → LLM Response Generation (GPT-4) → FastAPI Serving Layer",
    technologies: [
      "LangChain",
      "FAISS",
      "OpenAI API",
      "FastAPI",
      "Python",
      "Docker",
      "Redis",
    ],
    metrics: [
      "94% retrieval accuracy on internal benchmarks",
      "< 2s average response time",
      "Handles 10K+ documents",
      "99.5% uptime in production",
    ],
    deployment:
      "Containerized with Docker, deployed on cloud infrastructure with Redis caching layer and horizontal scaling via load balancer.",
  },
  {
    slug: "autonomous-agentic-workflow",
    title: "Autonomous Agent Framework",
    problem:
      "Every team building autonomous agents rewrites the same scaffolding: planning, tool use, memory, error handling. No reusable patterns existed — wasting 2-4 weeks per project.",
    solution:
      "Created an open-source framework with composable components for planning (ReAct, function calling), tool use with validation, memory management, and built-in observability.",
    impact: [
      "200+ GitHub stars",
      "50+ contributors",
      "1,000+ developers using it",
    ],
    summary:
      "Multi-agent AI system with autonomous task decomposition, reasoning chains, and tool-use capabilities for complex workflow automation.",
    description:
      "Designed and implemented a multi-agent framework where specialized AI agents collaborate to solve complex tasks through autonomous reasoning, tool use, and iterative refinement.",
    tags: ["LangChain", "GPT-4", "Python", "React", "WebSocket"],
    github: "https://github.com/amitkashyap",
    category: "genai",
    accentColor: "purple",
    architecture:
      "Orchestrator Agent → Task Decomposer → Specialized Agents (Research, Analysis, Code Generation) → Tool Integration Layer (Web Search, Code Executor, Database) → Result Aggregator → User Interface (React + WebSocket)",
    technologies: [
      "LangChain",
      "OpenAI GPT-4",
      "Python",
      "React",
      "WebSocket",
      "Redis",
      "PostgreSQL",
    ],
    metrics: [
      "85% task completion rate on complex workflows",
      "3x faster than manual process",
      "Handles 15+ tool integrations",
      "Visual reasoning trace for debugging",
    ],
    deployment:
      "Deployed as microservices architecture with WebSocket real-time updates, Redis task queue, and React-based monitoring dashboard.",
  },
  {
    slug: "realtime-recommendation-engine",
    title: "Real-Time ML Pipeline",
    problem:
      "Batch ML predictions introduce 30-minute latency. For real-time recommendations, this kills user experience. Traditional inference servers can't handle traffic spikes at reasonable cost.",
    solution:
      "Built a distributed ML inference pipeline using Kubernetes for orchestration, Kafka for streaming, and custom batching logic with auto-scaling for efficient GPU utilization.",
    impact: [
      "100K+ predictions daily",
      "<100ms latency",
      "99.9% uptime",
    ],
    summary:
      "Scalable collaborative filtering and content-based recommendation system serving personalized suggestions in real-time.",
    description:
      "Built a hybrid recommendation engine combining collaborative filtering with content-based approaches, optimized for real-time inference with model versioning and A/B testing capabilities.",
    tags: ["PyTorch", "Scikit-learn", "FastAPI", "Redis", "MLflow"],
    github: "https://github.com/amitkashyap",
    category: "ml",
    accentColor: "green",
    architecture:
      "Data Pipeline (Kafka) → Feature Engineering → Model Training (PyTorch + Scikit-learn) → Model Registry (MLflow) → Inference Server (FastAPI) → Caching Layer (Redis) → A/B Testing Framework",
    technologies: [
      "PyTorch",
      "Scikit-learn",
      "FastAPI",
      "Redis",
      "MLflow",
      "Kafka",
      "Docker",
    ],
    metrics: [
      "23% improvement in click-through rate",
      "< 50ms inference latency",
      "Handles 100K+ users",
      "Model refresh every 4 hours",
    ],
    deployment:
      "MLflow model registry with automated versioning, FastAPI serving with Redis caching, Kafka streaming pipeline for real-time feature updates.",
  },
];
