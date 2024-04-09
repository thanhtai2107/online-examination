package com.example.examination.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import java.util.Date;

@Getter
public class AddTeacherReq {
    @NotNull
    @NotBlank
    private String fullname;
    @Email
    private String email;
    @NotNull
    private String gender;
    @NotNull
    private Date dateOfBirth;

}
