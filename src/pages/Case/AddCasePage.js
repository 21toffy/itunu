import React, { useState } from "react";
import { useCase } from "../../hooks";
import "./CaseDetail.css";

const AddCasePage = (props) => {
  // const { createACase, state } = useCase();
  // const caseId = props.match.params.caseId;

  const { createACase, state } = useCase();

  const [values, setValues] = useState({
    name: "",
    legacy_id: "",
    expiring_date:""
  });

  // const [expiring_date, setExpiring_date] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createACase(values);
    console.log(values);
  };

  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  console.log(values.expiring_date);

  
  return (
    <div classname="main-content">
      <br></br>
      <br></br>
      <section class="statis mt-4 text-center">
        <div class="row text-white ">
          <div class="col-md-6 col-lg-3 mb-4  mb-lg-0">
            <div class="box  bg-primary p-3">
              <i class="far fa-folder-open pr-1"></i>
              <h3>5,154</h3>
              <p class="lead">View Alll Cases</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="box bg-danger p-3">
              <i class="uil-user"></i>
              <h3>245</h3>
              <p class="lead">Cases Nearing Expiration</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
            <div class="box bg-warning p-3">
              <i class="uil-shopping-cart"></i>
              <h3>5,154</h3>
              <p class="lead">forefieted Cases</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box bg-success p-3">
              <i class="uil-feedback"></i>
              <h3>5,154</h3>
              <p class="lead">Cass Evaluated</p>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        <div class="col-md-7 bod">
            <h1>Case details</h1>

            <h5>
              <strong>Case Name:</strong> Name
            </h5>
            <h5>
              <strong>Case NamLegacy Id:</strong> id
            </h5>
            <h5>
              <strong>Expiry Date:</strong> 21/34/9384
            </h5>
            <h5>
              <strong>Status:</strong> Initial Forfeiture
            </h5>
            <h5>
              <strong>Agent:</strong> Initial
            </h5>
        </div>
        <div class="col-md-5">
          <form onSubmit={handleSubmit}>
            <h1> Create Case </h1>

            <label for="legacy_id">Legacy ID</label>
            <input
              type="text"
              onChange={onChange}
              id="legacy_id"
              name="legacy_id"
              value={values.lagacy_id}
            />

            <label for="name">Case Name:</label>
            <input
              type="text"
              onChange={onChange}
              id="name"
              name="name"
              value={values.name}
            />

            <label for="expiring_date">Epiry Date:</label>
            <input
              type="date"
              onChange={onChange}
              id="expiring_date"
              name="expiring_date"
              value={values.expiring_date}
              data-date-format="yy-mm-dd"
            />

            <button type="submit">Create Case</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCasePage;
