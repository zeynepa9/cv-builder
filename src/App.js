import React, { useState, useRef, useEffect } from 'react';
import questions from '../src/components/data/questions';
import Question from './components/Question';
import Results from './components/Results';
import './styles/App.css';

const App = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const questionRefs = useRef(questions.map(() => React.createRef()));


  // const handleAnswerChange = (questionId, answer) => {
  //   setAnswers({ ...answers, [questionId]: answer });
  // };

  // const handleEnterPress = (index) => {
  //   const nextIndex = index + 1;
  //   if (nextIndex < questions.length) {
  //     questionRefs.current[nextIndex].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     questionRefs.current[nextIndex].current.focus();

  //   }
    
  // };


  const handleEnterPress = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < questions.length) {
      questionRefs.current[nextIndex].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      questionRefs.current[nextIndex].current.focus();
    } else if (nextIndex === questions.length) {
      // scroll when I press enter on the last question
      window.scrollTo(0, window.scrollY + 70); // scroll 70px down
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true); // Eğer tüm sorular yanıtlandıysa sonuçları göster.
    } else {
    alert("Lütfen tüm soruları yanıtlayın.");
    }
  };
  



  return (
    <div className="App">
       <div className="app-background"></div>
      <div className="overlay"></div>
      <div className="content">
      {!showResults ? (
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
             <div className="page" key={question.id}>
            <Question
              key={question.id}
              ref={questionRefs.current[index]}
              question={question}
              answer={answers[question.id]}
              onAnswerChange={(id, answer) => setAnswers({ ...answers, [id]: answer })}
              onEnterPress={() => handleEnterPress(index)}
            />
           </div>
          ))}
          
          <button class="button-36" type="submit">Submit</button>
        </form>
      ) : (
        <Results answers={answers} questions={questions} />
      )}
      
      </div>
    </div>
  );
};


export default App;
