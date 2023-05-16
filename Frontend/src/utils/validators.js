export class ValidateLoginForm {
  constructor(mail, password) {
    this.mail = mail;
    this.password = password;
  }

  // Validate Password

  validatePassword() {
    return this.password && this.password.length > 8;
  }

  // Validate Mail
  validateEmail() {
    var re = /\S+@\S+\.\S+/;
    return re.test(this.mail);
  }

  // Valid

  isValidate() {
    return this.validateEmail() && this.validatePassword();
  }
}
