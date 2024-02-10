import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./RandomNumberGenerator.css"

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RandomNumberGenerator = ({ min, max }) => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber(min, max));

  const handleGenerateNumber = () => {
    setRandomNumber(getRandomNumber(min, max));
  };

  return (
    <div className="container">
      <h2>Generated numbers from 1 to 100</h2>
      <p style={{ color: 'blue', fontSize: '24px' }}>Generated Number: {randomNumber}</p>
      <Button  onClick={handleGenerateNumber} variant="contained">
        Generate Number
      </Button>
    </div>
  );
};

export default RandomNumberGenerator;
