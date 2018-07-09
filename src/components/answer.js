import React from 'react';

export default function Answer(props){
  return <section>
    <h2>{props.isCorrect ? 'Correct' : 'Incorrect'}</h2>
    </section>;
}


