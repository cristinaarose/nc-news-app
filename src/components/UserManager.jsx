import UserList from "./UserList";
import { getAllUsers } from "../../api";
import { useEffect, useState } from "react";
import User from "./User";

export default function UserManager() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  else {
    return (
      <>
        <User />
        <UserList users={users} />
      </>
    );
  }
}
