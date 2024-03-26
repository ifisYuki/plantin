import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      questionText: "Q1: A New Role Emerges: Arabidopsis thaliana is taking on a new role in the city. Which one does it embrace?",
      options: ["Urban Greenery Ambassador, greening up concrete jungles.", "Botanical Artwork Character, splashed across city murals.", "Ph.D. Journey Companion, thriving alongside students in the libraries.",],
      image: "https://yukizhuyue.com/wp-content/uploads/2024/03/01.png",
    },
    {
      questionText: "Q2: The Artistic Pursuit: What's the latest creative project Arabidopsis has been spotted participating in?",
      options: ["Serving as a Watercolor Painting Inspiration for local artists.", "Doubling as a Street-Side Botanical Star in an indie film.", "Being a Muse for a Genetics Model Excellence photography series."],
      image: "https://yukizhuyue.com/wp-content/uploads/2024/03/02.png",
    },
    {
      questionText: "Q3: Unexpected Talent: Arabidopsis has revealed a hidden talent that has everyone buzzing. What is it?",
      options: ["Thriving in unexpected places, like a Street-Side Botanical Star.", "Demonstrating remarkable resilience, a true Sustainable Agriculture Contributor.", "Sporting an unusual color variation as a Phenotypic Variation Showcase."],
      image: "https://yukizhuyue.com/wp-content/uploads/2024/03/03.png",
    },
    {
        questionText: "Q4: Arabidopsis Around Town: If Arabidopsis could pick a favorite city spot to hang out, where would you most likely find it?",
        options: ["Cozied up in a quiet corner of a Public Transport Vehicle.", "Adding a touch of green as an Urban Greenery Ambassador in a bustling square.", "Nestled among books and busy students, acting as a Research Lab Morale Booster."],
        image: "https://yukizhuyue.com/wp-content/uploads/2024/03/04.png",
    },
  ];

  const handleOptionChange = (optionIndex) => {
    setCurrentQuestion((prevCurrentQuestion) =>
      prevCurrentQuestion < questions.length - 1 ? prevCurrentQuestion + 1 : 0
    );
  };

  const { questionText, options, image } = questions[currentQuestion];

  return (
    <div className="quiz">
      <div className="quiz__imageContainer">
        <img src={image} alt="Quiz context" className="quiz__image" />
      </div>
      <div className="quiz__question">
        <h2>{questionText}</h2>
      </div>
      <div className="quiz__options">
        {options.map((option, index) => (
          <label className="quiz__option" key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => handleOptionChange(index)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
