import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  console.log(loggedInUser, "<<<<<");
  return (
    <nav className="navbar">
      <span>
        <Link className="link" to={"/articles"}>
          Articles
        </Link>

        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/users"}>
          Users
        </Link>
        <Link className="link" to={"/topics"}>
          Topics
        </Link>
        <p>Logged in as: {loggedInUser.username}</p>
      </span>
    </nav>
  );
}
