import React from "react";

export default function Challenge({ challenge }) {
  return (
    <div>
      <h5>{challenge.id}</h5>
      <h5>{challenge.month}</h5>
      <p>{challenge.description}</p>
    </div>
  );
}
