import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";

import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Counter } from "./components/Counter";

import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Sponge",
      last: "Bob",
    },
  ];

  return (
    <>
      <Greet name={"Babbu"} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to you</Heading>
      </Oscar>
      <Button handleClick={() => alert("button clicked")} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid white", padding: "1rem" }} />

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </>
  );
}

export default App;
