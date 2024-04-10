package com.example.examination.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errorMap.put(error.getField(), error.getDefaultMessage());
        });
        return errorMap;
    }
    @ExceptionHandler(UserException.class)
    public ResponseEntity<ApiError> handleBussinessException(UserException e) {
        ApiError apiError = new ApiError(400, e.getMessage(), new Date());
        return new ResponseEntity<ApiError>(apiError, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(TeacherException.class)
    public ResponseEntity<ApiError> handleBusinessException(TeacherException e) {
        ApiError apiError = new ApiError(400, e.getMessage(), new Date());
        return new ResponseEntity<ApiError>(apiError, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(StudentException.class)
    public ResponseEntity<ApiError> handleBusinessException(StudentException e) {
        ApiError apiError = new ApiError(400, e.getMessage(), new Date());
        return new ResponseEntity<ApiError>(apiError, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(CourseException.class)
    public ResponseEntity<ApiError> handleBusinessException(CourseException e) {
        ApiError apiError = new ApiError(400, e.getMessage(), new Date());
        return new ResponseEntity<ApiError>(apiError, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(ExamException.class)
    public ResponseEntity<ApiError> handleBusinessException(ExamException e) {
        ApiError apiError = new ApiError(400, e.getMessage(), new Date());
        return new ResponseEntity<ApiError>(apiError, HttpStatus.BAD_REQUEST);
    }
}
