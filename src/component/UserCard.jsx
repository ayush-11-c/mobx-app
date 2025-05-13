const UserCard = ({ name, img }) => {
  return (
    <div className="user-card">
      <img className="user-card-img" src={img} alt={name} />
      <div className="user-card-name">{name}</div>
    </div>
  );
};
export default UserCard;
