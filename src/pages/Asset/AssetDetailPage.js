import React, { useState, useEffect } from "react";
import { useCase, useAuth } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";
import "./Asset.scoped.css";
import { Link } from "react-router-dom";

const AssetDetailPage = (props) => {
  const {
    getAssetDetail,
    state,
    getCase,
    updateCaseAssets,
    caseDetail,
  } = useCase();
  const { authState } = useAuth();
  console.log(authState.currentUser);

  const assetId = props.match.params.id;

  // console.log(caseDetail[0]);

  const { assetDetail, loading } = state;

  useEffect(() => {
    getCase(caseDetail?.id);
    getAssetDetail(assetId);
  }, []);

  const [datas, setDatas] = useState({
    _method: "PUT",
    name: "",
    description: "",
    location: "",
    type: "",
  });
  const id = state?.caseDetail?.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCaseAssets(datas, assetId);
  };

  const onChange = (e) =>
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });

  if (loading) {
    return <Spinner />;
  }
  return (
    <div classNamename="main-content">
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div class="card card-hover">
            <div class="card-block">
              <div class="row align-items-left">
                <div class="col-8">
                  <h5 className="font-strong  text-dark m-b-10 m-t-10">
                    Case:{" "}
                    <small className="pr-1 text-muted">
                      {state?.caseDetail?.name}
                    </small>
                  </h5>
                  <h5 className="font-strong text-dark  m-b-10 m-t-10">
                    Legacy Id:{" "}
                    <small className="pr-1 text-muted">
                      {state?.caseDetail?.legacy_id}
                    </small>
                  </h5>
                </div>
              </div>
            </div>
            <div class="card-footer text-dark bg--purple">
              <div class="row align-items-center">
                <div class="col-9">
                  <h6 class="text-dark m-b-0">
                    Expiry Date: {state?.caseDetail?.expiring_date}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-hover">
            <div class="card-block">
              <div class="row text-dark">
                <h5 className="font-strong  text-dark m-b-10 m-t-10">
                  Legacy Id:{" "}
                  <small className="pr-3 text-muted">
                    {state?.caseDetail?.legacy_id}
                  </small>
                </h5>
                <h5 className="font-strong text-dark  m-b-10 m-t-10">
                  Status:{" "}
                  <small className="pr-3 text-muted">
                    {state?.caseDetail?.status}
                  </small>
                </h5>
                <br />

                <br />
              </div>
              <Link to={`/case/${assetDetail?.case_id}`}>
                <button className="btn btn-info btn-rounded m-b-5">
                  <i className="fa fa-arrow-left" />
                  Back To Case
                </button>
              </Link>
            </div>
            <div class="card-footer text-dark bg--purple">
              <div class="row align-items-center">
                <div class="col-9">
                  <h6 class="text-dark m-b-0">
                    Creation Date: {state?.caseDetail?.created_at}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-7">
          <div className="ibox">
            <div className="ibox-body">
              <ul className="nav nav-tabs tabs-line">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#tab-1"
                    data-toggle="tab"
                  >
                    <i className="ti-bar-chart" /> Asset Overview
                  </a>
                </li>
                {authState?.currentUser?.role !== "FOREFEITURE" ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="#tab-2" data-toggle="tab">
                    <i className="ti-settings" /> Edit Asset
                  </a>
                </li>
                )}
                {authState?.currentUser?.role !== "EVALUATION" ? null : (
                  <li className="nav-item">
                    <a className="nav-link" href="#tab-3" data-toggle="tab">
                      <i className="ti-bar-chart" /> Evaluate Asset
                    </a>
                  </li>
                )}
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="" style={{ borderRight: "1px solid #eee;" }}>
                    <h6 className="m-b-20 m-t-10 text-muted">
                      {" "}
                      <span className="pr-3 text-dark">Name:</span>
                      {assetDetail?.name}
                    </h6>

                    <h6 className="m-b-20 m-t-10 text-muted">
                      {" "}
                      <span className="pr-3 text-dark">Location:</span>
                      {assetDetail?.location}
                    </h6>
                    <small className="m-b-20 m-t-10 text-muted">
                      {" "}
                      <span className="pr-3 text-dark">Description:</span>
                      {assetDetail?.description}
                    </small>
                    <h6 className="m-b-20 m-t-10 text-muted">
                      {" "}
                      <span className="pr-3 text-dark">
                        Status:{" "}
                        <span className="badge badge-success">
                          {" "}
                          {assetDetail?.status} status
                        </span>
                      </span>
                    </h6>

                    <h6 className="m-b-20 m-t-10 text-muted">
                      {" "}
                      <span className="pr-3 text-dark">Value:₦ 20,000</span>
                    </h6>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2">
                  <form onSubmit={handleSubmit}>
                    <div className="row" />
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        onChange={onChange}
                        id="name"
                        name="name"
                        value={datas.name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Description"
                        onChange={onChange}
                        id="description"
                        name="desciption"
                        value={datas.desciption}
                      />
                    </div>

                    <div className="form-group">
                      <label>Location</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="location"
                        onChange={onChange}
                        id="location"
                        name="location"
                        value={datas.location}
                      />
                    </div>

                    <div className="form-group">
                      <label>Type</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type"
                        onChange={onChange}
                        id="type"
                        name="type"
                        value={datas.type}
                      />
                    </div>

                    <div className="form-group">
                      <label className="ui-checkbox">
                        <input type="checkbox" />
                        <span className="input-span" />
                        Remamber me
                      </label>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-default" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* 2nd tab ends */}

                {/* 3rd tab starts */}
                {authState?.currentUser?.role !== "EVALUATION" ? null : (
                  <div className="tab-pane fade" id="tab-3">
                    <form onSubmit={handleSubmit}>
                      <div className="row" />
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          onChange={onChange}
                          id="name"
                          name="name"
                          value={datas.name}
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Description"
                          onChange={onChange}
                          id="description"
                          name="desciption"
                          value={datas.desciption}
                        />
                      </div>

                      <div className="form-group">
                        <button className="btn btn-default" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {/* 3rd tab ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailPage;
