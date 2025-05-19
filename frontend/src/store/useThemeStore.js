import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("synksage-theme") || "synthwave",
  setTheme: (theme) => {
    localStorage.setItem("synksage-theme",theme)
    set({theme})
  },
}))