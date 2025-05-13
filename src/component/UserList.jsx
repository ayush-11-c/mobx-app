import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="User">
          <UserCard name={user.name.first} img={user.picture.large} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
