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
public class CourseEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Date dateCreated;
    private int status;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private TeacherEntity teacherEntity;
}
