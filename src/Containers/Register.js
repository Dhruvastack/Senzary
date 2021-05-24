import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "../css/Authentication.css";
import logo from "../assets/logo-dark.png";
import { createRegistration } from "../Stores/Auth/actions";

import { useDispatch } from "react-redux";

export const Register = () => {
  const [register,setRegister] =useState({email:"",firstName:"",lastName:"",recaptchaResponse:""})






  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  console.log("handle", register);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRegistration(register));
    console.log("handle>>>", register);
  };







  return (
    <>
      <div className="app-content content bg-full-screen-image blank-page">
        <div className="content-header row"></div>
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-body">
            <section className="row flexbox-container">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                  <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                    <div className="card-header border-0 pb-0">
                      <div className="card-title text-center">
                        <img src={logo} alt="branding logo" />
                      </div>
                      <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>Easily Using</span>
                      </h6>
                    </div>
                    <div className="card-content">
                      <div className="text-center">
                        <Link
                          to="#"
                          className="btn btn-social-icon  btn-outline-facebook"
                        >
                          <span className="la la-facebook" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-social-icon  btn-outline-twitter"
                        >
                          <span className="la la-twitter" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-social-icon  btn-outline-linkedin"
                        >
                          <span className="la la-linkedin font-medium-4" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-social-icon  btn-outline-github"
                        >
                          <span className="la la-github font-medium-4" />
                        </Link>
                      </div>
                      <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                        <span>OR Using Email</span>
                      </p>
                      <div className="card-body">
                        <form className="form-horizontal" onSubmit={handleSubmit}>
                          <div className="row">
                          <fieldset className="col form-group position-relative has-icon-left">
                            <input
                              type="text"
                              className="form-control disable-outline"
                              id="first-name"
                              name="firstName"
                              placeholder="First Name"
                              required
                              autoComplete="off"
                              value={register.firstName}
                              onChange={handleChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-user" />
                            </div>
                          </fieldset>
                          <fieldset className="col form-group position-relative has-icon-left">
                          <input
                              type="text"
                              className="form-control disable-outline"
                              id="last-name"
                              name="lastName"
                              placeholder="Last Name"
                              required
                              autoComplete="off"
                              value={register.lastName}
                              onChange={handleChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-user" />
                            </div>
                          </fieldset>
                          </div>
                         
                          <fieldset className="form-group position-relative has-icon-left">
                          <input
                              type="email"
                              className="form-control disable-outline"
                              id="email"
                              name="email"
                              required
                              placeholder="Email"
                              autoComplete="off"
                              value={register.email}
                              onChange={handleChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-envelope" />
                            </div>
                          </fieldset>
                          <fieldset className="form-group position-relative has-icon-left">
                            <input
                              type="password"
                              className="form-control disable-outline"
                              id="user-password"
                              placeholder="Create Password"
                              required
                              autoComplete="off"
                              value={register.password}
                              onChange={handleChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-key" />
                            </div>
                          </fieldset>

                          <fieldset className="form-group position-relative has-icon-left">
                            <input
                              type="password"
                              className="form-control"
                              id="user-password"
                              placeholder="Repeat Password"
                              required
                            />
                            <div className="form-control-position">
                              <i className="la la-key" />
                            </div>
                          </fieldset>
                          <div className="form-group row">
                            <div className="col-sm-6 col-12 text-center text-sm-left ">
                              <fieldset>
                                <div
                                  className="icheckbox_square-blue"
                                  style={{ position: "relative" }}
                                >
                                  <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="chk-remember"
                                    style={{ position: "absolute", 
                                   
                                    display: "block",
                                    width: "22px",
                                    height: "22px",
                                  
                                    background: "rgb(255, 255, 255)",
                                    border: 0,
                                 
                                  
                                  }}
                                  />
                                  <label htmlFor="remember-me">
                                  {" "}
                                  Remember Me
                                </label>
                                </div>

                          
                               
                              </fieldset>
                            </div>
                            <div className="col-sm-6 col-12 float-sm-left text-center text-sm-right">
                              <Link
                                to="recover-password.html"
                                className="card-link"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-outline-info w-100"
                          >
                            <i className="la la-user" /> Register
                          </button>
                        </form>
                      </div>
                      <div className="card-body">
                        <Link to="/" className="btn btn-outline-danger w-100">
                          <i className="ft-unlock" />
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
