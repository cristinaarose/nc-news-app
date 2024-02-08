import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function User() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return <p>Currently logged in as: {loggedInUser.username}</p>;
}
