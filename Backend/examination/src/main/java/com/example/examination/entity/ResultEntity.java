package com.example.examination.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double score;
    private Date dateCreated;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentEntity studentEntity;
    @ManyToOne
    @JoinColumn(name = "exam_id")
    private ExamEntity examEntity;
}
