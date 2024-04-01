package request;

import java.util.Date;

public record AdminRegisterReq(
        String email,
        String password,
        String fullname,
        String gender,
        Date dateOfBirth
) {
}
