import React from "react";
import Challenge from "./Challenge";

export default function ChallengeList({ challenges }) {
  return (
    <div className="list-group">
      {challenges.map((challenge) => (
        <Challenge key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}
