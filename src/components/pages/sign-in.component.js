import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/sign-in.css";
import { UserSignIn } from "../../auth/user.auth";

export default function Homepage() {
  const submitSignin = async(e) => {
    e.preventDefault();
    const submitBtnEl = document.querySelector(".primary-button[type='submit']");
    submitBtnEl.innerHTML = "Signing in...";

    const userEmail = document.querySelector("#user-email").value;
    const userPass = document.querySelector("#user-password").value;
    const signInReponse = await UserSignIn(userEmail, userPass);
    if (signInReponse) {
      window.location.href = "/";
    }
    submitBtnEl.innerHTML = "Sign in";
  }
  return (
    <div className="sign-in__container">
      <div className="sign-in__form">
      <h1>Sign in</h1>
      <Form onSubmit={submitSignin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              autoFocus
              id="user-email"
              required
              type="email"
              aria-label="User email address"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="user-password"
            required
            type="password"
          />
        </Form.Group>
        <a href="/sign-up">Create an account</a>
        <div>
          <button type="submit" className="primary-button">
            Sign in
          </button>
        </div>
      </Form>
      </div>
    </div>
  );
}
