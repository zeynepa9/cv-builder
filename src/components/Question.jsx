import React, { forwardRef } from 'react';

const Question = forwardRef(({ question, answer, onAnswerChange, onEnterPress }, ref) => {
  // function to show question text and info if exists
  const renderQuestionText = () => {
    // if question has explanation, show it bold
    if (question.info) {
      return (
        <>
          <p><strong>{question.info}</strong></p>
          <p>{question.text}</p>
        </>
      );
    } else {
      return <p>{question.text}</p>;
    }
  };

  const handleTextKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      if (onEnterPress) onEnterPress(); // call onEnterPress when enter is pressed
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnterPress();
    }
  };

  const renderInputField = () => {
    return (
      <input
        type="text"
        value={answer || ''}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
        onKeyDown={handleTextKeyDown}
        ref={ref} // add ref to input field
      />
    );
  };

  return (
    <div>
      {renderQuestionText()} {/* show question text */}
      {renderInputField()} {/* show input field */}
    </div>
  );
});

export default Question;

