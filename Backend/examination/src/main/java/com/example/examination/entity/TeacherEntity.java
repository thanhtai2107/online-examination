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
public class TeacherEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String gender;
    private Date dateOfBirth;
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
