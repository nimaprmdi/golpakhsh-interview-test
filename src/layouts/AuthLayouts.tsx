import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export function AuthLayouts<P extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        toast.info("You are not logged in");
        navigate("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}
