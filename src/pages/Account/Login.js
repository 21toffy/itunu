import React, { useState, useEffect } from "react";
import "./Auth.css";
import { useAuth, useAlert } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";
import { Route, useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const { login, state, loading, clearErrors, error, onLoad } = useAuth();
  const history = useHistory();
  const { alerts, setAlert } = useAlert();
  console.log(state);
  // abonuoha@gmail.com

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (state.isAuthenticated) {
      history.push("/")
    }
  }, [history, state.isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (!state.error) {
      setAlert(
        "Something is Wrong. Make Sure you are connected to the internet",
        "danger"
      );
      clearErrors();
    } else if (
      state?.error === "UnAuthenticated" ||
      state?.error === "Email or password does not match any account" ||
      state?.error === "Unauthorized"
    ) {
      setAlert(state?.error, "danger");
      clearErrors();
    } else {
      setAlert(state?.message, "success");
      console.log(state?.error);
      clearErrors();
    }

    login(values);
  };

  // const x = clearErrors();
  // x
  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className="">
      <div className="custom-form row justify-content-md-center .bg-form bg-form">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="h2-login text-center">
            Account <span className="h2-span">Login</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                onChange={onChange}
                name="email"
                value={values.email}
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                onChange={onChange}
                name="password"
                value={values.password}
              />
            </div>

            <p className="text-center">
              <button
                type="submit"
                class="btn submit-form btn-lg btn-block btn-sm"
              >
                {state.loading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {state.loading && <span>logging In</span>}
                {!state.loading && (
                  <span>
                    {" "}
                    Login &nbsp; <i class="fas fa-arrow-right" />
                  </span>
                )}

                {/* Submit &nbsp; <i class="fas fa-arrow-right" /> */}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
