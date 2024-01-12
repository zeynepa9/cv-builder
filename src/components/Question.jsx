import React, { useState, useEffect } from 'react';

const Question = ({ question, onNext, answer: initialAnswer, readOnly }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (initialAnswer) {
      setAnswer(initialAnswer);
    }
  }, [initialAnswer]);

  const handleChange = (event) => {
    if (!readOnly) {
      setAnswer(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!readOnly) {
      onNext(answer);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{question.text}</p>
      <input 
        type="text" 
        value={answer} 
        onChange={handleChange} 
        disabled={readOnly}
      />
      {!readOnly && <button type="submit">Next</button>}
    </form>
  );
};

export default Question;
