import React from "react";
import Typewriter from "typewriter-effect";
import data from '../../data.json'
function Type() {
  return (
    <Typewriter
      options={{
        strings: data.jobheadlines,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
