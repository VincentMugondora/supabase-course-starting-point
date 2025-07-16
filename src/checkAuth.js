import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "./supabase";

const useCheckAuth = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        supabase.auth.getUser().then(response => {
            if (response.data.user === null) {
                navigate("login")
            }
    }, [navigate]);

        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);
};

export default useCheckAuth;
