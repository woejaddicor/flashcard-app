import React, { useState, useEffect } from "react";

export default function FrenchPage() {
  const [phrases, setPhrases] = useState([]);

  async function fetchData() {
    const response = await fetch("/phrases.json");
    const data = await response.json();
    setPhrases(data.french);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>French Page</h1>
      <ul>
        {phrases.map((phrase) => (
          <li key={phrase.phrase}>{phrase.phrase} - {phrase.translation}</li>
        ))}
      </ul>
    </div>
  );
}
