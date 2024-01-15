import React from 'react';

const Results = ({ answers, questions }) => {
    return (
        <div>
            <h3>Results:</h3>
            {Object.keys(answers).map(key => {
                const question = questions.find(q => q.id.toString() === key);
                let answerExplanation = question?.explanation;


                if (typeof answerExplanation === 'object' && answerExplanation !== null) {
                    answerExplanation = answerExplanation[answers[key]];
                }

                return (
                    <div key={key}>
                        <p><strong>Question {key}:</strong> {question.text}</p>
                        <p><strong>Meaning:</strong> {answerExplanation}</p>
                        <p><strong>Your answer:</strong> {answers[key]}</p>
                    </div>
                );
            })}
        </div>

    );
};

export default Results;
