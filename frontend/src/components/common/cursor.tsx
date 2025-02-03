"use client";

import React, { useEffect } from "react";

const Cursor: React.FC = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      document.body.style.cursor = "none";
    }
  }, []);

  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>(".cursor");
    const cursorBorder =
      document.querySelector<HTMLDivElement>(".cursor-border");

    if (!cursor || !cursorBorder) return;

    const moveCursor = (e: MouseEvent) => {
      document.body.style.cursor = "none";

      const { clientX: x, clientY: y } = e;
      const cursorSize = cursor.clientWidth / 2;
      const borderSize = cursorBorder.clientWidth / 2 + cursor.clientWidth / 4;

      cursor.animate(
        [{ transform: `translate(${x - cursorSize}px, ${y - cursorSize}px)` }],
        {
          duration: 100,
          fill: "forwards",
        }
      );

      cursorBorder.animate(
        [{ transform: `translate(${x - borderSize}px, ${y - borderSize}px)` }],
        {
          duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
          fill: "forwards",
          delay: 50,
        }
      );

      const target = document.elementFromPoint(x, y) as HTMLElement;
      if (!target) return;

      const focusElement = target.closest("a, button, label, nav, li");

      if (focusElement) {
        cursorBorder.classList.add("focus");
      } else {
        cursorBorder.classList.remove("focus");
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-border"></div>
    </>
  );
};

export default Cursor;
