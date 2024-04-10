package com.example.examination.dto;

public record QuestionDTO(
         Long id,
         String question,
         String firstAnswer,
         String secondAnswer,
         String thirdAnswer,
         String fourthAnswer,
         String correctAnswer,
         Long examId
) {
}
