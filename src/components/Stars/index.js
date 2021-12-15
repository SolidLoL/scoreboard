import React, { useState, Fragment, useEffect } from "react";

export const Stars = ({ score }) => {
  const [stars, setStars] = useState();

  useEffect(() => {
    const scoretostars = !(typeof score === "number" && score <= 0)
      ? Math.round((5 / 100) * score)
      : 0;
    let r = [];
    for (let i = 0; i < 5; i++) {
      if (i < scoretostars) {
        r[i] = "star";
      } else {
        console.log(`La cuenta es ${i}`)
        console.log(`La operacion de estrellas ${((5 / 100) * score) % 1}`)
        if(i > scoretostars ){

        }
        r[i] = ((5 / 100) * score) % 1 > 0.49 ? "star_half" : "star_outline";
      }
    }
    setStars(r);
  }, []);
  console.log(score);
  return (
    <Fragment>
      {stars?.map((e, i) => (
        <span className="material-icons" key={i}>
          {e}
        </span>
      ))}
    </Fragment>
  );
};
