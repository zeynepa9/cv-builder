import React, { useState } from 'react';
import questions from '../src/components/data/questions';
import Question from './components/Question';
import Results from './components/Results';


const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completedQuestions, setCompletedQuestions] = useState([]);

  const handleNextStep = (answer) => {
    const newAnswers = { ...answers, [currentStep + 1]: answer };
    setAnswers(newAnswers);
    setCompletedQuestions(completedQuestions.concat(
      <Question 
        key={currentStep}
        question={questions[currentStep]} 
        answer={answer}
        readOnly={true}
      />
    ));
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="App">
      <div className="completed-questions">
        {completedQuestions}
      </div>
      {currentStep < questions.length ? (
        <Question 
          key={currentStep}
          question={questions[currentStep]} 
          onNext={handleNextStep}
          readOnly={false}
        />
      ) : (
        <Results answers={answers} />
      )}
    </div>
  );
};

export default App;

