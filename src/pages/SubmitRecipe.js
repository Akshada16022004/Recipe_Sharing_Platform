import React, { useState } from "react";
import "../App.css";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", { title, description, image });
  };

  return (
    <div className="submit-recipe-container">
      <div className="submit-box">
        <h2>Submit Your Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Recipe Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit">Submit Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitRecipe;