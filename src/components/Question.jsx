import React, { forwardRef } from 'react';

const Question = forwardRef(({ question, answer, onAnswerChange, onEnterPress }, ref) => {
  // Sorunun metnini göstermek için kullanılan fonksiyon
  const renderQuestionText = () => {
    // Eğer question bir açıklama (info) içeriyorsa, bu açıklamayı bold olarak göster
    if (question.info) {
      return (
        <>
          <p><strong>{question.info}</strong></p> {/* Burada açıklama bold olarak gösteriliyor */}
          <p>{question.text}</p>
        </>
      );
    } else {
      return <p>{question.text}</p>;
    }
  };

  const handleTextKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Form gönderimini engelle.
      if (onEnterPress) onEnterPress(); // Enter'a basıldığında onEnterPress'i çağır.
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Form gönderimini engelle.
      // Eğer metin alanındaysa ve onEnterPress tanımlıysa, onEnterPress fonksiyonunu çağır.
      if (question.type === 'text' && onEnterPress) {
        onEnterPress();
      }
    }
  };


  // Radyo butonları veya metin alanını render etmek için kullanılan fonksiyon
  const renderInputField = () => {
    if (question.type === 'radio') {
      return (
        question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option.value}
              checked={answer === option.value}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            onKeyDown={handleKeyDown} // Sadece metin alanları için onKeyDown olayı
            />
            {option.label}
          </label>
        ))
      );
    } else {
      return (
        <input
          ref={ref}
          type="text"
          value={answer || ''}
          onChange={(e) => onAnswerChange(question.id, e.target.value)}
        //   onKeyDown={onEnterPress}
          onKeyDown={handleTextKeyDown} // Sadece metin alanları için onKeyDown olayı
        />
      );
    }
  };




  return (
    <div>
      {renderQuestionText()} {/* Soru metnini ve varsa açıklamayı göster */}
      {renderInputField()} {/* Girdi alanını göster */}
    </div>
  );
});

export default Question;
