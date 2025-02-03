import React, { FC } from "react";

const Shadow: FC<{ opacity?: number }> = ({ opacity = 25 }) => {
  return (
    <div
      style={{ opacity: `${opacity}%` }}
      className="absolute -inset-6 z-0 hidden sm:block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
      <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
    </div>
  );
};

export default Shadow;
