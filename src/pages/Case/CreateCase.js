import React, { useState, useEffect, createRef } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spiner";

import { useCase, useAlert } from "../../hooks";
import "./CaseDetail.css";

const CreateCase = () => {

  const { state, createACase } = useCase();
  const { cases, loading } = state;
  const { alerts, setAlert } =useAlert();

  console.log(state)
  const [values, setValues] = useState({
    name: "",
    legacy_id: "",
    expiring_date: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    createACase(values);
    if (state?.error) {
      setAlert(state?.error, "danger");
      console.log(state?.error);
    } else {
		setAlert("Case Added Successfully", "success" );
    }

    setValues({
      name: "",
      legacy_id: "",
      expiring_date: "",
    })
  };


  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  
   
  return (
    <div>
      <div className="custom-form row justify-content-md-center">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="h2-login pl-5">
            <span className="h2-span">Add Case</span>
          </h2>
          <div class="container">
            {/* <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information"> */}
            <form onSubmit={handleSubmit}>
              {/* <h3 class="text-center">Add Case</h3> */}

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Case Name:</label>
                    <input
                      type="text"
                      onChange={onChange}
                      id="name"
                      name="name"
                      value={values.name}
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Legacy ID:</label>
                    <input
                     type="text"
                     onChange={onChange}
                     id="legacy_id"
                     name="legacy_id"
                     value={values.lagacy_id}
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Expiry Date</label>
                    <input
                     type="date"
                     onChange={onChange}
                     id="expiring_date"
                     name="expiring_date"
                     value={values.expiring_date}
                      
                    />
                  </div>
                </div>
              </div>
              {/* <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Gender:</label>
                                <select name="gender" class="form-control" value="" required />
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div> */}

              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                  <div class="form-group">
                    <p className="text-center">
                      <button
                        type="submit"
                        class="btn submit-form btn-lg btn-block btn-sm"
                      >
                       
                        {loading && (
                                <i
                                    className="fa fa-refresh fa-spin"
                                    style={{ marginRight: "5px" }}
                                    />
                                )}
                                {loading && <span>Submitting Case</span>}
                                {!loading && <span> Submit &nbsp; <i class="fas fa-arrow-right"></i></span>}
                      </button>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CreateCase;

{
  /* <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span clas sName="sr-only">Loading...</span>
  </Button> */
}
