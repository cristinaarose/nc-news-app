import "../../styling/UserCard.css";

export default function UserCard({ users }) {
  return (
    <div>
      {users.users &&
        users.users.map((user, i) => {
          return (
            <>
              <div className="flex-container">
                <div>
                  <img className="avatar" src={user.avatar_url} />
                </div>
                <section>
                  <h3>{user.username}</h3>
                  <p>Name: {user.name}</p>
                </section>
              </div>
            </>
          );
        })}
    </div>
  );
}
