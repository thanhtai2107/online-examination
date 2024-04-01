package com.example.examination.response;

import com.example.examination.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class AuthenticationResponse {
    private String token;
    private UserDTO userDTO;
}
