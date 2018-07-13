import React from 'react';

import './landing-page-description.css';

export default function landingPageDescription() {
  return (
    <div className="landing-page-description"> 
      <div className="opacity-background">
        <p> Create an account and start learning!</p>
        <p> It's that simple! Input an answer, hit submit! </p>
        <p> If your guess is correct, you'll see a message saying so and your score tally increment!</p> 
        <p>If your guess is incorrect, you'll see a message saying so, and your score will remain unchanged!</p>
      </div>
    </div>
  );
}