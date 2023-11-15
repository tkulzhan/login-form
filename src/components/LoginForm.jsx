import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Spinner from "./Spinner";
import logo from "../logo.svg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const mockFetch = async (email, password) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email !== "example@gmail.com" || password !== "ILx^KwrhGpZf&IY5") {
          setLoading(false);
          resolve(false);
        } else {
          setLoading(false);
          resolve(true);
        }
      }, 2000);
    });
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const res = await mockFetch(email, password);
    if (res) {
      navigate("/success")
    } else {
      navigate("/failure")
    }
  };

  if (loading) {
    return <Spinner />
  }
  return (
    <form id={styles["login-form"]}>
      <div id={styles["login-form-left"]}>
        <img id={styles["logo"]} src={logo} alt="logo" />
        <div style={{ marginBottom: 24 }}>
          <p>This is my React login form.</p>
          <p>It is good looking and responsive.</p>
        </div>
      </div>
      <div id={styles["login-form-right"]}>
        <h1>Sign in</h1>
        <div className={styles["form-column"]}>
          <input
            className={styles["form-input"]}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
            required
          />
          <input
            className={styles["form-input"]}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <div
            className={`${styles["flex"]} ${styles["row"]} ${styles["space_between"]}`}
            style={{ marginTop: 10 }}
          >
            <div className={`${styles["flex"]} ${styles["row"]}`}>
              <div className={styles["checkbox"]}>
                <input name="remember" value="true" type="checkbox" />
              </div>
              <a>Remember me</a>
            </div>
            <a href="/forgot-password" className={styles["forgot"]}>
              Forgot password?
            </a>
          </div>
          <button className={styles["form-btn"]} onClick={onSubmit}>
            Sign in
          </button>
          <a href="register">Don't have an account? Sign up!</a>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
