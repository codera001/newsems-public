import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

const useSessionDataStore = create((set) => ({
    SessionData: null,
    setSessionData: (newSessionData) => {
        set({ SessionData: newSessionData });
    },
}));

export default useSessionDataStore;
