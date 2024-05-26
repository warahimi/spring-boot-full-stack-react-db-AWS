import axios from "axios";
import React, { useState } from "react";

export default function AddChallenge({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", {
        month,
        description,
      });
      setMonth("");
      setDescription("");
      onChallengeAdded();
    } catch (error) {
      console.error("Error adding the challenge");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Month: </label>
          <input
            type="text"
            id="month"
            name="month"
            placeholder="Enter Month"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
