import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FfaUsersItemInterface, Icategories } from "../interfaces";

interface TabState {
    currentCategory: Icategories;
    modalData: FfaUsersItemInterface | null;
}

interface Actions {
    setCurrentCategory: (value: Icategories) => void;
    setModalData: (value: FfaUsersItemInterface | null) => void;
}

const storeAPI: StateCreator<TabState & Actions, [["zustand/devtools", never]]> = (set) =>({
    currentCategory: 'all',
    modalData: null,
    
    setCurrentCategory: (value: Icategories) => set(({
        currentCategory: value
    }), false, 'setCategories' ),
    setModalData: (value: FfaUsersItemInterface | null) => set(({
        modalData: value
    }), false, 'setModalData' )
});

export const useTabStore = create<TabState & Actions>()(
    persist(
        devtools(storeAPI, { name: "tab-store" }),
        { name: "tab-store" }
    )
);