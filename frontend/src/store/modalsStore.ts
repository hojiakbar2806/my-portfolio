import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IntroModalState {
  isIntroSeen: boolean;
  closeIntro: () => void;
}

export const useIntroModalStore = create<IntroModalState>()(
  persist(
    (set) => ({
      isIntroSeen: false,
      closeIntro: () => set({ isIntroSeen: true }),
    }),
    { name: "intro" }
  )
);
