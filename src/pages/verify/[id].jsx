'use Client'
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const VerifyEmail = () => {
    const url = "https://api.diginums.com/api" + "/verify/email";
    const router = useRouter();
    // Accessing the query parameters
    const { id } = router.query;

    const verify = async () => {
        try {
            const res = await axios.get(url, {
                timeout: 30000,
                params: {
                    apikey: id,
                },
            });
            toast.success("Verified")
            router.push("/login")

        } catch (error) {
            router.push("/login")
            toast.error("error")
        }
    };

    useEffect(() => {
        if (id) {
            verify()
        }

    }, [id])

    return (
        <div></div>
    )
}
export default VerifyEmail