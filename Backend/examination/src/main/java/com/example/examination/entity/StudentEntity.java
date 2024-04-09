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
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String gender;
    private Date dateOfBirth;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseEntity course;
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
