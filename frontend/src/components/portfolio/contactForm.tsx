import { Mail, MessageSquare, Send, User } from "lucide-react";
import React, { useState } from "react";
import SocialLinks from "./socialLink";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    form.submit();
    setIsSubmitting(false);
  };
  return (
    <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        Get in Touch
      </h2>
      <p className="text-gray-400">
        Have something to discuss? Send me a message and let&apos;s talk.
      </p>

      <form
        action="https://formsubmit.co/hojiakbarnasriddinov2006@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="relative group">
          <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none"
            required
          />
        </div>
        <div className="relative group">
          <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none"
            required
          />
        </div>
        <div className="relative group">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none h-[9.9rem]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl"
        >
          <Send className="size-6" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <SocialLinks />
    </div>
  );
};

export default ContactForm;
