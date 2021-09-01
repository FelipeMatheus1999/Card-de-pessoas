// import './App.css';
import "./App.css";
import PersonCard from "./components/PersonCard";
import "./components/PersonCard/style.css";

function App() {
  const users = [
    { name: "Felipe", age: 21, country: "Brasil" },
    { name: "Joe", age: 18, country: "USA" },
    { name: "Caio", age: 26, country: "Brasil" },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <PersonCard
          name={users[0].name}
          age={users[0].age}
          country={users[0].country}
        />
        <PersonCard
          name={users[1].name}
          age={users[1].age}
          country={users[1].country}
        />
        <PersonCard
          name={users[2].name}
          age={users[2].age}
          country={users[2].country}
        />
      </div>
    </div>
  );
}

export default App;
