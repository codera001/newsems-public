import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

const useAlllangDataStore = create((set) => ({
    AlllangData: null,
    setAlllangData: (newAlllangData) => {
        set({ AlllangData: newAlllangData });
    },
}));

export default useAlllangDataStore;
