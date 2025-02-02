import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: IPortalProps) => {
  const portalRoot = document.getElementById("modal-portal");
  return portalRoot && createPortal(children, portalRoot);
};

export default Portal;
