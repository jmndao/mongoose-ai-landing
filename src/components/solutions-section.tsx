import {
  ShoppingCart,
  FileText,
  Headphones,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  useCases: string;
}

const realWorldSolutions: Solution[] = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce & Product Management",
    description:
      "Automatically analyze product descriptions, categorize items, extract key features, and generate SEO-friendly summaries.",
    features: [
      "Auto-categorize products by description",
      "Extract product features and specifications",
      "Generate SEO-optimized summaries",
      "Semantic product search",
    ],
    useCases: "Product catalogs, inventory management, search optimization",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Management & Publishing",
    description:
      "Process articles, blog posts, and documents with automatic summarization, topic extraction, and content classification.",
    features: [
      "Auto-generate article summaries",
      "Extract topics and keywords",
      "Classify content by category",
      "Find similar articles",
    ],
    useCases: "CMS platforms, news sites, knowledge bases, documentation",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Customer Support & Feedback",
    description:
      "Analyze support tickets, customer reviews, and feedback with sentiment analysis and priority classification.",
    features: [
      "Sentiment analysis on reviews",
      "Priority scoring for tickets",
      "Auto-categorize support issues",
      "Extract customer insights",
    ],
    useCases: "Support systems, review platforms, feedback analysis",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Human Resources & Recruitment",
    description:
      "Process resumes, job descriptions, and employee feedback with intelligent matching and classification.",
    features: [
      "Resume parsing and categorization",
      "Job-candidate matching",
      "Skills extraction",
      "Employee feedback analysis",
    ],
    useCases: "ATS systems, HR platforms, talent management",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Business Intelligence & Analytics",
    description:
      "Transform business documents, reports, and communications into structured insights and actionable data.",
    features: [
      "Report summarization",
      "Key metrics extraction",
      "Trend identification",
      "Document classification",
    ],
    useCases: "Business reports, market research, competitive analysis",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Legal & Compliance",
    description:
      "Process legal documents, contracts, and compliance materials with privacy-first local processing using Ollama.",
    features: [
      "Contract analysis and summarization",
      "Compliance categorization",
      "Risk assessment scoring",
      "100% local processing for privacy",
    ],
    useCases: "Legal tech, compliance management, document review",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Real-World Applications
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance">
            See how mongoose-ai powers intelligent document processing across
            industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realWorldSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-slate-950/50 border-2 border-slate-800/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all group hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {solution.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-slate-300 text-sm flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Use Cases
                </span>
                <p className="text-slate-300 text-sm mt-1">
                  {solution.useCases}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Build?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Start with any MongoDB schema and add intelligent processing in
              minutes
            </p>
            <div className="bg-slate-950/50 border border-slate-700/50 rounded-xl p-4 font-mono text-left">
              <code className="text-blue-400 text-sm">
                npm install @jmndao/mongoose-ai
                <br />
                <span className="text-slate-400">
                  {"// Add AI to any schema in 3 lines"}
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
