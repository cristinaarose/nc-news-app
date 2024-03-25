import UserCard from "./UserCard";
export default function UserList({ users }) {
  return (
    <>
      <h2>User list:</h2>
      <ul>
        <UserCard users={users} />
      </ul>
    </>
  );
}
