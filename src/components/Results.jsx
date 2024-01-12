import React from 'react';

const Results = ({ answers }) => {
  // Burada cevapların anlamlarını ve sonuçları gösteren mantığı ekleyeceksiniz.
  return (
    <div>
      <h3>Results:</h3>
      {/* Burada answers objesini döngüye alarak sonuçları gösterin */}
      {Object.keys(answers).map(key => (
        <p key={key}>{`Question ${key}: ${answers[key]}`}</p>
      ))}
    </div>
  );
};

export default Results;
