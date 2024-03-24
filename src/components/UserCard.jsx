export default function UserCard({ users }) {
  return (
    <div>
      {users.users &&
        users.users.map((user, i) => {
          return (
            <li key={i}>
              <h3>User: {user.username}</h3>
              <img className="image" src={user.avatar_url} />
              <p>Name: {user.name}</p>
            </li>
          );
        })}
    </div>
  );
}
