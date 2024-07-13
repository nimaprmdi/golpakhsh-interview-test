import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export function AuthLayouts<P extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     toast.info("You are not logged in");
    //     navigate("/");
    //   }
    // }, [isLoggedIn, navigate]);

    useEffect(() => {
      if (!isLoggedIn) {
        toast.info("You are not logged in");
        navigate("/");
      }
    }, [location]);

    if (!isLoggedIn) {
      return null; // or a loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}
