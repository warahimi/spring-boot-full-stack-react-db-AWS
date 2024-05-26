import React from "react";
import Challenge from "./Challenge";

export default function ChallengeList({ challenges }) {
  return (
    <div>
      {challenges.map((challenge) => (
        <Challenge key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}
