export interface Experiment {
  title: string;
  description: string;
  tags: string[];
  status: "live" | "prototype" | "experiment";
  demoUrl?: string;
  icon: string;
}

export const experiments: Experiment[] = [
  {
    title: "Document Q&A with RAG",
    description:
      "Upload a document and ask questions using retrieval-augmented generation. Leveraging vector search to provide context-aware answers.",
    tags: ["LangChain", "FAISS", "OpenAI API", "Streamlit"],
    status: "prototype",
    icon: "📄",
  },
  {
    title: "Image Classification Playground",
    description:
      "Upload an image and run inference using a pre-trained PyTorch model to predict labels and confidence scores in real-time.",
    tags: ["PyTorch", "TorchVision", "Gradio", "Computer Vision"],
    status: "live",
    icon: "👁️",
  },
  {
    title: "Semantic Search Demo",
    description:
      "Search through documents using semantic similarity based on sentence embeddings and vector search for more relevant results.",
    tags: ["Sentence Transformers", "FAISS", "NLP", "Streamlit"],
    status: "experiment",
    icon: "🔍",
  },
  {
    title: "Model Explainability Visualizer",
    description:
      "Visualize how machine learning models make predictions using SHAP feature importance to uncover the 'black box' of AI.",
    tags: ["SHAP", "Scikit-learn", "Pandas", "Machine Learning"],
    status: "prototype",
    icon: "📊",
  },
];
