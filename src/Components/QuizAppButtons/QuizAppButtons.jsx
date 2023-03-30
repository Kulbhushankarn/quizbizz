import React from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../../data/questions.json'
import { HandleShowResult } from '../../utils';
import { localStorageKey } from '../../constants';

export default function QuizAppButtons({
    showCorrectIncorrectValidation,
    currentQuestionNumber,
    handleNextQuestionChange,
    quizResult,
}) {
    const navigate = useNavigate();
    return (
        <>
            {showCorrectIncorrectValidation.length > 0 &&
                currentQuestionNumber < data.length && (
                    <button onClick={handleNextQuestionChange}>Next Question</button>
                )}
            {/* Displaying the result button after all the questions are attempted*/}
            {showCorrectIncorrectValidation.length > 0 &&
                currentQuestionNumber === data.length && (
                    <button
                        onClick={() => {
                            HandleShowResult(localStorageKey, quizResult);
                            navigate("/Score");
                        }}
                    >
                        Show Result
                    </button>
                )}
        </>
    )
}