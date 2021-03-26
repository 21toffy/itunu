import React, { useState, useEffect } from "react";
import "../Case/CaseDetail.css";
// import "./save.css";

import { Link } from "react-router-dom";
import { useCase } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";
import { useDash } from "../../hooks";

export const DashboardInitial = () => {
  const { getCases, state, createACase } = useCase();

  const {
    getInitial,
    initialstate,
    getFinal,
    getResolved,
    getClosed,
  } = useDash();

  console.log(initialstate);

  const { cases, loading } = state;
  console.log(state)

  const { closed, resolved, initial, final } = initialstate;

  const [values, setValues] = useState({
    name: "",
    legacy_id: "",
    expiring_date: "",
  });

  console.log(initialstate);
  const handleSubmit = (e) => {
    e.preventDefault();
    createACase(values);
  };
  // getCases();
  useEffect(() => {
    getCases();

    getInitial();
    getFinal();
    getResolved();
    getClosed();
  }, []);

  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

  const allCasesCount = cases?.length;

  const allfinalCount = final?.length;
  const allresolvedCount = resolved?.length;
  const allclosedCount = closed?.length;
  const allinitialCount = initial?.length;

  // this.setState({ value: '' });

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-block">
              <div class="row align-items-center">
                <div class="col-8">
                  <h6 class="text-dark">All Cases</h6>
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-purple">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: {allCasesCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-block">
              <div class="row align-items-center">
                <div class="col-8">
                  <h6 class="text-dark">Resolved Cases</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-green">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: {allresolvedCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-block">
              <div class="row align-items-center">
                <div class="col-8">
                  <h6 class="text-dark">Final Cases</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-blue">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: {allfinalCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card">
            <div class="card-block">
              <div class="row align-items-center">
                <div class="col-8">
                  <h6 class="text-dark">Closed Cases</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-red">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: {allclosedCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cardo">
        <div class="card-body">
          <div class="d-md-flex align-items-center">
            <div>
              <h4 class="card-title"> All Cases </h4>
              <h6 class="card-subtitle">{allCasesCount}</h6>
            </div>
            <div class="ml-auto">
              <Link to="/all-assets">
                <a className="btn mini">view</a>
              </Link>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table v-middle mb-0">
            <thead>
              <tr>
                <th class="border-top-0 font-medium border-bottom-0">Name</th>

                <th class="border-top-0 font-medium border-bottom-0">
                  Legacy ID
                </th>
                <th class="border-top-0 font-medium border-bottom-0">
                  Expiry Date
                </th>
                <th class="border-top-0 font-medium border-bottom-0">Status</th>
                <th class="border-top-0 font-medium border-bottom-0">Action</th>
              </tr>
            </thead>
            <tbody>
              {cases?.length > 0 ? (
                cases.map((cas, index) => (
                  <tr key={index}>
                    <td>
                      <h6 class="m-b-0 font-16">{cas.name}</h6>
                    </td>

                    <td>{cas.legacy_id}</td>
                    <td>{cas.expiring_date}</td>
                    <td>
                      <label class="label label-danger">{cas.status}</label>
                    </td>
                    <td>
                      <Link to={`/case/${cas.id}`}>
                        <a className="btn mini">view</a>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <h6 class="m-b-0 font-16">No Data</h6>
                  </td>

                  <td>No Data</td>
                  <td>No Data</td>
                  <td>
                    <label class="label label-danger">No Data</label>
                  </td>
                  <td>
                    <Link>
                      <a className="btn mini">No Data</a>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default DashboardInitial;
