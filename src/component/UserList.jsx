import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={`${user.name.first} ${user.name.last}`}
          img={user.picture.large}
        />
      ))}
    </div>
  );
};

export default UserList;
