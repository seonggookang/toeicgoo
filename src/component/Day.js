import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  console.log(useParams());
  console.log(useLocation());

  const day = Number(useParams().day);
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
