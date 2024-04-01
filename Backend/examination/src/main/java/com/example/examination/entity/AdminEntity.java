package com.example.examination.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AdminEntity {

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
