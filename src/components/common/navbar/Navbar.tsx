import Slogan from "../Slogan";
import NavLinks from "./NavLinks";

interface NavbarProps {
  isPrimary?: boolean;
}

const Navbar = ({ isPrimary = true }: NavbarProps) => {
  return (
    <nav className="bg-white relative z-30">
      <Slogan isPrimary={isPrimary} />

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
