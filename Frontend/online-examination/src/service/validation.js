export default function validation(values) {
  const errors = {};

  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (Object.keys(values).includes("fullname") && values.fullname === "") {
    errors.fullname = "Vui lòng nhập họ tên";
  }
  if (
    Object.keys(values).includes("email") &&
    !email_pattern.test(values.email)
  ) {
    errors.email = "Vui lòng nhập đúng định dạng";
  } else if (Object.keys(values).includes("email") && values.email === "") {
    errors.email = "Vui lòng nhập email";
  }
  if (Object.keys(values).includes("password") && values.password === "") {
    errors.password = "Vui lòng nhập mật khẩu";
  } else if (
    Object.keys(values).includes("password") &&
    !password_pattern.test(values.password)
  ) {
    errors.password = "Vui lòng nhập đúng định dạng";
  }
  if (Object.keys(values).includes("gender") && values.gender === "") {
    errors.gender = "Vui lòng chọn giới tính";
  }
  if (
    Object.keys(values).includes("dateOfBirth") &&
    values.dateOfBirth === ""
  ) {
    errors.dateOfBirth = "Vui lòng chọn ngày sinh";
  }

  return errors;
}
