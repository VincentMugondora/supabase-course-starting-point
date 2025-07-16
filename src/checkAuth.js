import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCheckAuth = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        const isAuthenticated = false; 

        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);
};

export default useCheckAuth;
