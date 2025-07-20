import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Icategories } from "../interfaces";

interface TabState {
    currentCategory: Icategories;
}

interface Actions {
    setCurrentCategory: (value: Icategories) => void;
}

const storeAPI: StateCreator<TabState & Actions, [["zustand/devtools", never]]> = (set) =>({
    currentCategory: 'deaths',
    
    setCurrentCategory: (value: Icategories) => set(({
        currentCategory: value
    }), false, 'setCategories' )
});

export const useTabStore = create<TabState & Actions>()(
    persist(
        devtools(storeAPI, { name: "tab-store" }),
        { name: "tab-store" }
    )
);