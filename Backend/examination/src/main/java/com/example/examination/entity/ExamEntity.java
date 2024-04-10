package com.example.examination.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ExamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int totalTime;
    private Date dateCreated;
    private int status;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseEntity course;
}
