import UserCard from "./UserCard";
export default function UserList({ users }) {
  return (
    <>
      <h2>Users List</h2>
      <ul>
        <UserCard users={users} />
      </ul>
    </>
  );
}
