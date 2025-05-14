import { create } from "zustand";

export const useFoodStore = create((set) => ({
  foods: [],
  total: 0,
  limit: 7,
  skip: 0,

  setFoods: (foods) => set({ foods }),
  setTotal: (total) => set({ total }),
  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
}));
