import React from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";

function Login(props) {
  const [input_login, setLogin] = React.useState({
    email: "",
    pass: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setLogin((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  return (
    <div className={clsx("col-8", "mx-auto", styles.container)}>
      <div className={clsx("row")}>
        <h3 className={clsx("col-12")}>Log In</h3>
        <div className={clsx("col-12", styles.extra)}>
          <p className={clsx("col-4")} style={{ marginLeft: "2rem" }}>
            Using social network accounts
          </p>
          <p className={clsx("col-4")} style={{ marginLeft: "17%" }}>
            Using Money choices account
          </p>
        </div>
        <div className={clsx("col-6", styles.col1)}>
          <p
            className={clsx("col-8", "text-danger")}
            style={{ marginLeft: "2rem" }}
          >
            <i
              className="fa-brands fa-google"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Connect with Google
          </p>
          <p
            className={clsx("col-8", "text-primary")}
            style={{ marginLeft: "2rem" }}
          >
            <i
              className="fa-brands fa-facebook"
              style={{ marginRight: "0.1rem" }}
            ></i>{" "}
            Connect with Facebook
          </p>
        </div>
        <form action="" className={clsx("col-6", styles.col2)}>
          <input
            name="email"
            value={input_login.email}
            type="email"
            placeholder="Email"
            required
            style={{ marginLeft: "1rem" }}
            onChange={handleChange}
          ></input>
          <input
            name="pass"
            value={input_login.pass}
            type="password"
            placeholder="Password"
            required
            style={{ marginLeft: "1rem" }}
            onChange={handleChange}
          ></input>
          <a href="/" style={{ marginLeft: "45%", marginRight: "1rem" }}>
            Forgot your password?
          </a>
          <button
            type="submit"
            className="col-10"
            onClick={(event) => {
              props.login(input_login);
              event.preventDefault();
            }}
          >
            Log in
          </button>
          <p className={styles.register}>
            Don't have a account?
            <a
              href="#"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => {
                props.changeCheck(false);
              }}
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
function Register(props) {
  const [input_register, setRes] = React.useState({
    email: "",
    pass: "",
    confpass: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setRes((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  }
  return (
    <div className={clsx("col-8", "mx-auto", styles.container)}>
      <div className={clsx("row")}>
        <h3 className={clsx("col-12")}>Register</h3>
        <div className={clsx("col-12", styles.extra)}>
          <p className={clsx("col-4")} style={{ marginLeft: "2rem" }}>
            Using social network accounts
          </p>
          <p className={clsx("col-4")} style={{ marginLeft: "17%" }}>
            Create Money choices account
          </p>
        </div>
        <div className={clsx("col-6", styles.col1)}>
          <p
            className={clsx("col-8", "text-danger")}
            style={{ marginLeft: "2rem" }}
          >
            <i
              className="fa-brands fa-google"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Connect with Google
          </p>
          <p
            className={clsx("col-8", "text-primary")}
            style={{ marginLeft: "2rem" }}
          >
            <i
              className="fa-brands fa-facebook"
              style={{ marginRight: "0.1rem" }}
            ></i>{" "}
            Connect with Facebook
          </p>
        </div>
        <form action="" className={clsx("col-6", styles.col2)}>
          <input
            name="email"
            type="email"
            value={input_register.email}
            placeholder="Email"
            required
            style={{ marginLeft: "1rem" }}
            onChange={handleChange}
          ></input>
          <input
            name="pass"
            type="password"
            value={input_register.pass}
            placeholder="Password"
            required
            style={{ marginLeft: "1rem" }}
            onChange={handleChange}
          ></input>
          <input
            name="confpass"
            value={input_register.confpass}
            type="password"
            placeholder="Confirm password"
            required
            style={{ marginLeft: "1rem" }}
            onChange={handleChange}
          ></input>

          <button
            type="submit"
            className="col-10"
            onClick={(event) => {
              props.register(input_register);
              event.preventDefault();
            }}
          >
            Register
          </button>
          <p className={styles.register}>
            Have you an account?
            <a
              href="#"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => props.changeCheck(true)}
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
function Home() {
  const [check, setCheck] = React.useState(true);

  const changeCheck = (flag) => {
    setCheck(flag);
  };
  const register = async (data) => {
    console.log("data register: ", data);
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    const res = await axios.post("http://localhost:5000/", data, {
      headers,
    });
    console.log("Sent data", res);
  };
  const login = async (data) => {
    console.log("data login: ", data);
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    const res = await axios.post("http://localhost:5000/", data, {
      headers,
    });
    console.log("Sent data", res);
  };
  return (
    <div className={clsx("container-fuild", styles.content)}>
      <h1 className="text-sm-start text-break fs-4 fw-light">
        Save money to help you get the most out of our Rich life
      </h1>
      <h2 className="text-sm-start">MONEY CHOICES</h2>
      <img src="/assets/pictures/home.jpg" alt="home"></img>
      <div className={clsx("container-fuild", styles.footer)}>
        {check ? (
          <Login login={login} changeCheck={changeCheck} />
        ) : (
          <Register register={register} changeCheck={changeCheck} />
        )}
        <div className={styles.copyright}>
          <p>Copyright 2022. All Rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
