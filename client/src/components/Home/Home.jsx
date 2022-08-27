import React from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={clsx("container-fuild", styles.content)}>
      <h1 className="text-sm-start text-break fs-4 fw-light">
        Save money to help you get the most out of our Rich life
      </h1>
      <h2 className="text-sm-start">MONEY CHOICES</h2>
      <img src="/assets/pictures/home.jpg" alt="home"></img>
      <div className={clsx("container-fuild", styles.footer)}>
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
                  class="fa-brands fa-facebook"
                  style={{ marginRight: "0.1rem" }}
                ></i>{" "}
                Connect with Facebook
              </p>
            </div>
            <form action="" className={clsx("col-6", styles.col2)}>
              <input
                type="email"
                placeholder="Email"
                required
                style={{ marginLeft: "1rem" }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                required
                style={{ marginLeft: "1rem" }}
              ></input>
              <a href="/" style={{ marginLeft: "45%", marginRight: "1rem" }}>
                Forgot your password?
              </a>
              <button type="submit" className="col-10">
                Log in
              </button>
              <p className={styles.register}>
                Don't have a account?
                <a href="/" style={{ marginLeft: "0.5rem" }}>
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright 2022. All Rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
