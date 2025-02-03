"use client";

import React, { useEffect, useRef } from "react";

export const Background: React.FC = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  useEffect(() => {
    let requestId: number;

    const handleScroll = () => {
      const newScroll = window.scrollY;

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;

        const initialPos = initialPositions[index];

        const xOffset = Math.sin(newScroll / 150 + index * 0.6) * 320;
        const yOffset = Math.cos(newScroll / 150 + index * 0.6) * 50;

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.2s ease-out";
      });

      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    requestId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [initialPositions]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    blobRefs.current[index] = el;
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0">
        <div
          ref={setRef(0)}
          className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
        ></div>
        <div
          ref={setRef(1)}
          className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
        ></div>
        <div
          ref={setRef(2)}
          className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
        ></div>
        <div
          ref={setRef(3)}
          className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
        ></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};
