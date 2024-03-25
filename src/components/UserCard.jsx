import "../../styling/UserCard.css";

export default function UserCard({ users }) {
  return (
    <div>
      {users.users &&
        users.users.map((user, i) => {
          return (
            <>
              <div className="flex-container-user">
                <div>
                  <img className="avatar" src={user.avatar_url} />
                </div>
                <section>
                  <h3 className="heading">{user.username}</h3>
                  <p>Name: {user.name}</p>
                  <button className="button">Login as me!</button>
                </section>
              </div>
            </>
          );
        })}
    </div>
  );
}
