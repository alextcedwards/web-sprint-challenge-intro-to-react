import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px yellow;

  h1 {
    color: yellow;
  }
`;

const App = () => {
  const [swData, getSWData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        getSWData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp>
      <div className="App">
        <h1 className="Header">Characters</h1>
        {swData.map((element) => {
          return <Character key={element.name} data={element} />;
        })}
      </div>
    </StyledApp>
  );
};

export default App;
