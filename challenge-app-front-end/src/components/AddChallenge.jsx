import axios from "axios";
import React, { useState } from "react";

export default function AddChallenge({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://challengeapp2-env.eba-shfw4zac.us-west-2.elasticbeanstalk.com/challenges",
        {
          month,
          description,
        }
      );
      setMonth("");
      setDescription("");
      onChallengeAdded();
    } catch (error) {
      console.error("Error adding the challenge");
    }
  };
  return (
    <div className="card my-5">
      <div className="card-header">Add New Challenge</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">
              Month:{" "}
            </label>
            <input
              type="text"
              id="month"
              name="month"
              placeholder="Enter Month. eg. Jan"
              className="form-control"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
