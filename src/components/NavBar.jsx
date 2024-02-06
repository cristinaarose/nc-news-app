import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <span>
        <Link className="link" to={"/articles"}>
          Articles
        </Link>

        <Link className="link" to={"/"}>
          Home
        </Link>
      </span>
    </nav>
  );
}
