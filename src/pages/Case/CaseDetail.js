import React, { useState, useEffect } from "react";
import { useCase, useAuth } from "../../hooks";
import { Link } from "react-router-dom";
import "./CaseDetail?.css";
import Spinner from "../../components/spinner/Spiner";

const CaseDetail = (props) => {
  const {
    state,
    getCase,
    updateCaseItem,
    getCaseAssets,
    createAnAsset,
    setCurrent,
    clearCurrent,
  } = useCase();
  const caseId = props.match.params.id;



  const {
    state: { currentUser },
  } = useAuth();


  const { loading, assets, caseDetail } = state;
  console.log(state.caseDetail);
  const [values, setValues] = useState({
    name: "",
    description: "",
    location: "",
    type: "",
  });

  const [datas, setDatas] = useState({
    _method: "PUT",
    name: "",
    legacy_id: "",
    expiring_date: "",
  });

  useEffect(() => {
    getCase(caseId);
    getCaseAssets(caseId);
  }, []);
  // const id = state.cases.id;
  const id = state?.caseDetail?.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCaseItem(datas, caseId);
  };

  const assetSubmit = (e) => {
    e.preventDefault();

    values.case_id = id;
    createAnAsset(values);
    setValues({
      name: "",
      description: "",
      location: "",
      type: "",
    });
  };


  console.log(currentUser?.role);
  const onChangeCase = (e) =>
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });

  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  if (loading) {
    return <Spinner />;
  }
  return (
    <div classname="main-content">
      <br />
      <br />

      <div className="row">
        {/* case detail card starts */}

        <div
          class="col-md-5 d-flex flex-column p-3 m-3 bg-white shorten-card shadow-sm rounded animated flipInX delay-8"
          style={{ borderTop: "4px solid #151B54" }}
        >
          <div class="text-uppercase text-tracked text-muted mb-2">
            Case details
          </div>
          <div>
            <h5 class="mx-1  pb-3 justify-content-start">
              <small /> Case Name:<small>&nbsp;&nbsp;{caseDetail?.name}</small>
            </h5>
          </div>
          <div>
            <h5 class="mx-1  pb-3 justify-content-start">
              <small> </small>LegacyID:
              <small>&nbsp;&nbsp;{caseDetail?.legacy_id}</small>
            </h5>
          </div>
          <div>
            <h5 class="mx-1  pb-3 justify-content-start">
              <small />
              Expiry Date:
              <small>&nbsp;&nbsp;{caseDetail?.expiring_date}</small>
            </h5>
          </div>
          <div>
            <h5 class="mx-1  pb-3 justify-content-start">
              <small />
              Status:<small>&nbsp;&nbsp;{caseDetail?.status}</small>
            </h5>
           {
             currentUser?.role === "FORFEITURE" ?
             
             <input
             type="button"
             class="modal-buttons"
             data-toggle="modal"
             data-target="#addCase"
             value="Edit Case"
             data-backdrop="false"
             data-dismiss="modal"
           />
           :
           null
           }

            {/* case detail modal starts */}
            <div
              class="modal fade"
              id="addCase"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Edit Case
                    </h5>
                    <p
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </p>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                      <h3> Update Case </h3>

                      <label for="name">Case Name:</label>
                      <input
                        type="text"
                        onChange={onChangeCase}
                        id="name"
                        name="name"
                        value={datas.name}
                      />

                      <label for="legacy_id">Legacy ID</label>
                      <input
                        type="text"
                        onChange={onChangeCase}
                        id="legacy_id"
                        name="legacy_id"
                        value={datas.legacyid}
                      />

                      <label for="expiring_date">Epiry Date:</label>
                      <input
                        type="date"
                        onChange={onChangeCase}
                        id="expiring_date"
                        name="expiring_date"
                        value={datas.expirydate}
                      />
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit">Update Case</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* case detail card stops */}

        {/* add asset card start */}
        <div class="col-md-6 d-flex flex-column p-3 m-3  shorten-card rounded animated flipInX delay-8">
          <div className="row">
            <div className="col-md-6">
              <div class="spec-card-1 counter-card-2">
                <div class="card-block-big">
                  <div class="">
                    <div class="col-6 text-left">
                      <div class="counter-card-text">
                        <smal class="mx-1  pb-3 justify-content-start">
                          Assets {state?.assets?.length}
                        </smal>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div class="spec-card-1 counter-card-2">
                <div class="card-block-big">
                  <div class="row">
                    <div class="col-6 text-left">
                      <div class="counter-card-text">Valued At ₦21,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="col-md-12">
              <div class="spec-card-1 counter-card-2">
                <div class="card-block-big">
                  <div class="row">
                    <div class="col-6 text-left">
                      <div class="counter-card-text">
                        <div class="text-uppercase text-tracked text-muted mb-2">
                          Case Assets Overview

                          {
             currentUser?.role === "FORFEITURE" ?
             
             <input
             type="button"
             class="modal-buttons"
             data-toggle="modal"
             data-target="#addAsset"
             value="Add Asset"
             data-backdrop="false"
             data-dismiss="modal"
           />
           :
           null
           }

                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* asset modal starts */}

            <div
              class="modal fade"
              id="addAsset"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add Asset
                    </h5>
                    <p
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </p>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={assetSubmit}>
                      <h5> Add asset </h5>

                      <label for="name">Asset Name:</label>
                      <input
                        type="text"
                        onChange={onChange}
                        id="name"
                        name="name"
                        value={values.name}
                        required
                      />

                      <label for="description">Description</label>
                      <input
                        type="text"
                        onChange={onChange}
                        id="description"
                        name="description"
                        value={values.description}
                        required
                      />

                      <label for="expiring_date">Location:</label>
                      <input
                        type="text"
                        onChange={onChange}
                        id="location"
                        name="location"
                        value={values.location}
                        required
                      />

                      <label for="type">Property Type</label>
                      <input
                        type="text"
                        onChange={onChange}
                        id="type"
                        name="type"
                        value={values.type}
                        required
                      />

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit">Add assets</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* asset modal ends */}
          </div>
        </div>
        {/* asset details ends */}
      </div>

      <div className="pt-5">
        <div class="cardo mb-4">
          <div class="card-body">
            <div class="d-md-flex align-items-center">
              <div>
                <h4 class="card-title"> {state?.assets?.length} Assets</h4>
                <h6 class="card-subtitle" />
              </div>
              <div class="ml-auto">
                {/* <Link to="/all-assets">
                <a className="btn mini">view</a>
              </Link> */}
              </div>
            </div>
          </div>

          <div class="projects-inner">
            <div class="table-responsive">
              <table class="table v-middle mb-0">
                <thead>
                  <tr>
                    <th class="border-top-0 font-medium border-bottom-0">
                      Asset Type
                    </th>

                    <th class="border-top-0 font-medium border-bottom-0">
                      Name
                    </th>
                    <th class="border-top-0 font-medium border-bottom-0">
                      Description
                    </th>
                    <th class="border-top-0 font-medium border-bottom-0">
                      Location
                    </th>
                    <th class="border-top-0 font-medium border-bottom-0">
                      Status
                    </th>
                    <th class="border-top-0 font-medium border-bottom-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assets?.length > 0 ? (
                    assets.map((asset, index) => (
                      <tr key={index}>
                        <td>
                          <h6 class="m-b-0 font-16">{asset.type}</h6>
                        </td>

                        <td>{asset.name}</td>
                        <td>{asset.description}</td>
                        <td>{asset.location}</td>
                        <td>
                          <label class="label label-danger">
                            {asset.status}status
                          </label>
                        </td>
                        <td>
                          <Link class="nav-link" to={`/asset/${asset.id}`}>
                            <a className="btn btn-dark btn-sm  text-white">
                              View
                            </a>
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
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
