const PersonCard = ({ name, age, country }) => {
  return (
    <div className="userCard">
      <span>
        <p>Dev: {name}</p>
        <p>Idade: {age}</p>
        <p>País: {country}</p>
      </span>
    </div>
  );
};

export default PersonCard;
