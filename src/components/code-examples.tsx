"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeExample {
  title: string;
  description: string;
  code: string;
  highlight: string;
  provider: string;
}

const codeExamples: CodeExample[] = [
  {
    title: "Auto-Summarization",
    description:
      "Automatically generate summaries when documents are saved to MongoDB",
    code: `import { aiPlugin } from "@jmndao/mongoose-ai";

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String
});

// Add AI summarization
articleSchema.plugin(aiPlugin, {
  ai: {
    model: "summary",
    provider: "openai", // or "anthropic"
    field: "aiSummary",
    credentials: { apiKey: process.env.OPENAI_API_KEY }
  }
});

const Article = mongoose.model("Article", articleSchema);

// AI summary generated automatically on save
const article = new Article({
  title: "The Future of AI",
  content: "Artificial intelligence is transforming..."
});

await article.save();
console.log(article.aiSummary.summary); // Auto-generated summary`,
    highlight: "Auto-processing",
    provider: "OpenAI/Anthropic",
  },
  {
    title: "Function Calling",
    description:
      "AI automatically classifies content and fills document fields",
    code: `import { aiPlugin, createAdvancedAIConfig, QuickFunctions } from "@jmndao/mongoose-ai";

const reviewSchema = new mongoose.Schema({
  productName: String,
  reviewText: String,
  sentiment: String,    // AI fills this
  rating: Number,       // AI fills this  
  tags: [String]        // AI fills this
});

reviewSchema.plugin(aiPlugin, {
  ai: createAdvancedAIConfig({
    apiKey: process.env.OPENAI_API_KEY,
    provider: "openai",
    model: "summary",
    field: "aiSummary",
    advanced: { enableFunctions: true },
    functions: [
      QuickFunctions.updateField("sentiment", ["positive", "negative", "neutral"]),
      QuickFunctions.scoreField("rating", 1, 5),
      QuickFunctions.manageTags("tags")
    ]
  })
});

// AI automatically analyzes and classifies
const review = new Review({
  productName: "Wireless Headphones",
  reviewText: "Amazing sound quality!"
});

await review.save();
console.log(review.sentiment); // "positive" 
console.log(review.rating);    // 4
console.log(review.tags);      // ["sound-quality", "audio"]`,
    highlight: "Smart classification",
    provider: "OpenAI/Anthropic",
  },
  {
    title: "Semantic Search",
    description:
      "Search documents by meaning with vector embeddings and MongoDB Atlas Vector Search",
    code: `const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String
});

// Enable semantic search with vector embeddings
productSchema.plugin(aiPlugin, {
  ai: createAdvancedAIConfig({
    apiKey: process.env.OPENAI_API_KEY,
    provider: "openai",
    model: "embedding",    // Enables semantic search
    field: "searchEmbedding",
    vectorSearch: {
      enabled: true,       // Auto-detects MongoDB Atlas
      indexName: "product_search",
      autoCreateIndex: true
    }
  })
});

const Product = mongoose.model("Product", productSchema);

// Search by meaning, not just keywords
const results = await Product.semanticSearch(
  "portable audio equipment with good bass",
  { 
    limit: 5,
    threshold: 0.7,
    filter: { category: "electronics" }
  }
);

// Finds relevant products by understanding intent
results.forEach(result => {
  console.log(\`\${result.document.name}: \${result.similarity}\`);
});`,
    highlight: "Vector search",
    provider: "OpenAI + MongoDB Atlas",
  },
  {
    title: "Local LLM (Privacy + Zero Cost)",
    description:
      "Use local Ollama models for complete privacy and zero API costs",
    code: `import { createOllamaConfig } from "@jmndao/mongoose-ai";

const documentSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String
});

// Use local Ollama for privacy and zero cost
documentSchema.plugin(aiPlugin, {
  ai: createOllamaConfig({
    model: "summary",
    field: "aiSummary",
    chatModel: "llama3.2",    // Local model
    advanced: { enableFunctions: true },
    functions: [
      QuickFunctions.updateField("category", ["tech", "business", "personal"])
    ]
  })
});

// Setup: ollama pull llama3.2
// No API keys needed, 100% local processing

const doc = new Document({
  title: "Privacy-First AI",
  content: "Process sensitive data locally..."
});

await doc.save(); // Processed locally, $0.00 cost
console.log(doc.aiSummary.summary);
console.log(doc.category); // AI classified locally`,
    highlight: "Privacy + Free",
    provider: "Ollama (Local)",
  },
];

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="examples" className="py-24 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-crisp">
            See It In Action
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance text-crisp">
            Real examples of intelligent document processing with mongoose-ai
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          <div className="lg:col-span-2 space-y-4">
            {codeExamples.map((example, index) => (
              <div
                key={index}
                className={`group p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 scale-[1.02]"
                    : "bg-slate-800/30 border-2 border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/50 hover:scale-[1.01]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white leading-tight text-crisp flex-1">
                      {example.title}
                    </h3>
                    <div className="flex-shrink-0 flex flex-col gap-2">
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs lg:text-sm font-medium rounded-full border border-purple-500/30 whitespace-nowrap">
                        {example.highlight}
                      </span>
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-600/30 whitespace-nowrap">
                        {example.provider}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed text-crisp">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <div className="bg-slate-950/80 border-2 border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800/50 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-slate-400 font-mono text-sm">
                      {codeExamples[activeTab].title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}
                      .js
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-2 px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 text-sm rounded-md transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <pre className="p-6 md:p-8 text-sm md:text-base overflow-x-auto bg-slate-950/50 h-full overflow-y-auto">
                  <code className="text-slate-200 font-mono whitespace-pre-wrap leading-relaxed text-crisp">
                    {codeExamples[activeTab].code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
