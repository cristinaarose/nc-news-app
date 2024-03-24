import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import "../../styling/NavBar.css";

export default function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul className="navUnorderedList">
        <li>
          <Link className="navList" to={"/articles"}>
            Articles
          </Link>
        </li>

        <li>
          <Link className="navList" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="navList" to={"/users"}>
            Users
          </Link>
        </li>
        <li>
          <Link className="navList" to={"/topics"}>
            Topics
          </Link>
        </li>
        <li className="loggedInUser">Logged in as: {loggedInUser.username}</li>
      </ul>
    </nav>
  );
}
