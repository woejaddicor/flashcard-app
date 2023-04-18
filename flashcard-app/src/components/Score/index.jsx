import React from "react";

export default function Score({ score, total }) {
  return (
    <div>
      <h1>Quiz Result</h1>
      <p>You scored {score} out of {total}!</p>
      {/* render additional information about the user's performance */}
    </div>
  );
}