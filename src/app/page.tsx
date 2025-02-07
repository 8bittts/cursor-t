import Link from "next/link";
import { Github, MessageSquare, ImageIcon, Users, Mic } from "lucide-react";

// Card data for better maintainability
const TEMPLATE_CARDS = [
  {
    title: "AI Chat App",
    icon: MessageSquare,
    iconColor: "text-blue-600",
    description: "An intelligent conversational app powered by AI models, featuring real-time responses and seamless integration with Next.js and various AI providers."
  },
  {
    title: "AI Image Generation App",
    icon: ImageIcon,
    iconColor: "text-purple-600",
    description: "Create images from text prompts using AI, powered by the Replicate API and Next.js."
  },
  {
    title: "Social Media App",
    icon: Users,
    iconColor: "text-green-600",
    description: "A feature-rich social platform with user profiles, posts, and interactions using Firebase and Next.js."
  },
  {
    title: "Voice Notes App",
    icon: Mic,
    iconColor: "text-red-600",
    description: "A voice-based note-taking app with real-time transcription using Deepgram API, Firebase integration for storage, and a clean, simple interface built with Next.js."
  }
];

// Reusable card component
const TemplateCard = ({ title, icon: Icon, iconColor, description }: {
  title: string;
  icon: typeof MessageSquare;
  iconColor: string;
  description: string;
}) => (
  <div className="border-2 border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors shadow-sm">
    <h3 className="text-xl font-semibold flex items-center gap-2">
      <Icon className={`w-5 h-5 ${iconColor}`} />
      {title}
    </h3>
    <p className="mt-2 text-sm text-gray-600">
      {description}
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-50 to-orange-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,146,56,0.15),transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(56,189,255,0.15),transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),transparent_60%)] opacity-70" />
      </div>

      {/* Header */}
      <header className="w-full border-b bg-white/75 backdrop-blur-sm fixed top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold">
            Cursor Template
          </span>
          <Link 
            href="https://github.com/8bittts/cursor-template"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            Download
          </Link>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-24 max-w-7xl mx-auto w-full">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center border-2 border-gray-200 p-4 font-mono rounded-md shadow-sm">
            Choose a template path from the /paths/ folder to get started..
          </h2>
        </div>

        <div className="text-center my-12">
          <h1 className="text-6xl font-bold">( * ^ *) ノシ</h1>
          <h2 className="text-2xl font-light text-gray-500 pt-4">
            Page will be replaced when you start your project.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEMPLATE_CARDS.map((card, index) => (
            <TemplateCard key={index} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}
