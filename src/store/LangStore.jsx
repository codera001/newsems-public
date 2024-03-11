import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

const useLangStore = create((set) => ({
  langData: "English",
  setLangData: (newLangData) => {
    set({ langData: newLangData });
  },
}));

export default useLangStore;
