import React, { useState, useRef, useEffect } from 'react';
import questions from '../src/components/data/questions';
import Question from './components/Question';
import Results from './components/Results';


const App = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const questionRefs = useRef(questions.map(() => React.createRef()));

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // const handleEnterPress = (index) => {
  //   const nextIndex = index + 1;
  //   if (nextIndex < questions.length) {
  //     // Eğer sonraki soru metin girdisi içeriyorsa, o soruya odaklan.
  //     if (questions[nextIndex].type === 'text') {
  //       questionRefs.current[nextIndex].current.focus();
  //     }
  //   } else {
  //     // Eğer bu son soruysa ve Enter'a basıldıysa, sonuçları göster.
  //     setShowResults(true);
  //   }
  // };

  



  const handleSubmit = (e) => {
    e.preventDefault(); // Form gönderimini engeller.
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true); // Eğer tüm sorular yanıtlandıysa sonuçları göster.
    } else {
    alert("Lütfen tüm soruları yanıtlayın.");
    }
  };
  



  return (
    <div className="App">
      {!showResults ? (
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <Question
              key={question.id}
              ref={questionRefs.current[index]}
              question={question}
              answer={answers[question.id]}
              onAnswerChange={handleAnswerChange}
              // onEnterPress={() => handleEnterPress(index)}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <Results answers={answers} questions={questions} />
      )}
    </div>
  );
};


export default App;
