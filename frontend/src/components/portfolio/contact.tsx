"use client";

import { Sparkles } from "lucide-react";
import CommentSection from "./comment";
import ContactForm from "./contactForm";

export const Contact: React.FC = () => {
  return (
    <div className="w-full container">
      <div className="relative text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Contact
        </h2>
        <p className="mt-2 text-gray-400 text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Got a question? Send me a message, and I&apos;ll get back to you soon.
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="Contact">
        <ContactForm />
        <CommentSection />
      </div>
    </div>
  );
};
