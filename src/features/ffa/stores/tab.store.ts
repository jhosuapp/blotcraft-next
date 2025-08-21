import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FfaUsersItemInterface, Icategories, IrequestType } from "../interfaces";

interface TabState {
    currentCategory: Icategories;
    modalData: FfaUsersItemInterface | null;
    showModal: boolean;
    requestType: 'ffa-diamond' | 'ffa-netherite';
}

interface Actions {
    setCurrentCategory: (value: Icategories) => void;
    setShowModal: (value: boolean) => void;
    setModalData: (value: FfaUsersItemInterface | null) => void;
    setRequestType: (value: IrequestType) => void;
}

const storeAPI: StateCreator<TabState & Actions, [["zustand/devtools", never]]> = (set) =>({
    currentCategory: 'deaths',
    modalData: null,
    showModal: false,
    requestType: 'ffa-diamond',
    
    setCurrentCategory: (value: Icategories) => set(({
        currentCategory: value
    }), false, 'setCategories' ),
    setShowModal: (value: boolean) => set(({
        showModal: value
    }), false, 'setCategories' ),
    setModalData: (value: FfaUsersItemInterface | null) => set(({
        modalData: value
    }), false, 'setModalData' ),
    setRequestType: (value: IrequestType) => set(({
        requestType: value
    }), false, 'setRequestType' )
});

export const useTabStore = create<TabState & Actions>()(
    persist(
        devtools(storeAPI, { name: "tab-store" }),
        { name: "tab-store" }
    )
);