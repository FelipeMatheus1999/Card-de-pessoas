const PersonCard = ({ name, age, country }) => {
  return (
    <div className="userCard">
      <span>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>country: {country}</p>
      </span>
    </div>
  );
};

export default PersonCard;
