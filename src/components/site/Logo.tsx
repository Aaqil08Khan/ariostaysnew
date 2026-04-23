import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

export function Logo() {
  return (
    <Link to="/" className="flex items-center h-full">
      <img
        src={logo}
        alt="Ario Stays"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </Link>
  );
}