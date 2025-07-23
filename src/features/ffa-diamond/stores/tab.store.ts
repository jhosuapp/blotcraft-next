import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FfaUsersItemInterface, Icategories } from "../interfaces";

interface TabState {
    currentCategory: Icategories;
    modalData: FfaUsersItemInterface | null;
    showModal: boolean;
}

interface Actions {
    setCurrentCategory: (value: Icategories) => void;
    setShowModal: (value: boolean) => void;
    setModalData: (value: FfaUsersItemInterface | null) => void;
}

const storeAPI: StateCreator<TabState & Actions, [["zustand/devtools", never]]> = (set) =>({
    currentCategory: 'deaths',
    modalData: null,
    showModal: false,
    
    setCurrentCategory: (value: Icategories) => set(({
        currentCategory: value
    }), false, 'setCategories' ),
    setShowModal: (value: boolean) => set(({
        showModal: value
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