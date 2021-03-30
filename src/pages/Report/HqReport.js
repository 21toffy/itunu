import React, { useState, useEffect } from "react";
import "../Case/CaseDetail.css";
import { Button, Card, Accordion } from "react-bootstrap";

// approved_at: null
// approved_by: null
// case_id: 1
// created_at: "2021-03-26T05:57:27.000000Z"
// deleted_at: null
// id: 1
// old_status: "INITIAL_FORFEITURE"
// requested_at: "2021-03-26 05:57:27"
// requested_by: "Abel"
// status: "CLOSED"
// updated_at: "2021-03-26T05:57:27.000000Z"
// __proto__: Object

// {
//   "id": 6,
//   "case_id": 1,
//   "old_status": "CLOSED",
//   "status": "RESORVED",
//   "requested_by": "Abel",
//   "requested_at": "2021-03-27 08:42:17",
//   "approved_by": null,
//   "approved_at": null,
//   "deleted_at": null,
//   "created_at": "2021-03-27T08:42:17.000000Z",
//   "updated_at": "2021-03-27T08:42:17.000000Z"
// },

// approved_at: null
// approved_by: null
// case_id: 1
// created_at: "2021-03-26T05:57:27.000000Z"
// deleted_at: null
// id: 1
// old_status: "INITIAL_FORFEITURE"
// requested_at: "2021-03-26 05:57:27"
// requested_by: "Abel"
// status: "CLOSED"
// updated_at: "2021-03-26T05:57:27.000000Z"

import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spiner";
import { useDash, useCase } from "../../hooks";
import CaseDetail from "../Case/CaseDetail";

const HqReport = (props) => {
  const { state, getHistory, historyDetail, loading } = useDash();

  const { getCase, CaseState } = useCase();
  const cd = CaseState.caseDetail;
  console.log(cd);

  const caseId = props.match.params.id;

  // const { historyDetail, loading } = state;

  console.log(historyDetail);
  useEffect(() => {
    getHistory(caseId);
    getCase(caseId);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div classNamename="main-content">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="ibox">
            <div className="ibox-body text-left">
              <div className="m-t-20" />
              <h6 className="font-strong m-b-10 m-t-10">
                Case Name:{" "}
                <small className="pr-3 text-muted">{cd?.name}</small>
              </h6>
              <h6 className="font-strong m-b-10 m-t-10">
                Expiry Date:{" "}
                <small className="pr-3 text-muted">{cd?.expiring_date}</small>
              </h6>

              <div>
                <Link to={`/case/${caseId}`}>
                  <button className="btn btn-info btn-rounded m-b-5">
                    <i className="fa fa-arrow-left" />
                    Go To Case
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="ibox">
            <div className="ibox-body">
              <h6 className="font-strong m-b-10 m-t-10">
                Legacy Id:{" "}
                <small className="pr-3 text-muted">{cd?.legacy_id}</small>
              </h6>
              <h6 className="font-strong m-b-10 m-t-10">
                Status:{" "}
                <small className="pr-3 text-muted">{cd?.status}</small>
              </h6>
              <h6 className="font-strong m-b-10 m-t-10">
                Updated AT:{" "}
                <small className="pr-3 text-muted">
                  {cd?.last_status_at}
                </small>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="ibox">
            <div className="ibox-body">
              <ul className="nav nav-tabs tabs-line">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#tab-1"
                    data-toggle="tab"
                  >
                    <i className="ti-bar-chart" /> Case History
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="" style={{ borderRight: "1px solid #eee;" }}>
                    <div class="container">
                      <div class="my-4 example-normal" />
                      <div className="row">
                        {historyDetail?.length > 0
                          ? historyDetail.map((hd, index) => (
                              <div className="col-md-6 text-dark" key={index}>
                                <Accordion defaultActiveKey="0">
                                  <Card>
                                    <Accordion.Toggle
                                      as={Card.Header}
                                      variant="link"
                                      eventKey="0"
                                    >
                                      <span className="text-dark text-bold">
                                        updated from {hd.old_status} to{" "}
                                        {hd.status}{" "}
                                      </span>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                      <Card.Body>
                                        <h6 className="font-strong text-dark m-b-10 m-t-10">
                                          Updated by:{" "}
                                          <small className="pr-3 text-muted">
                                            {hd?.requested_by}
                                          </small>
                                        </h6>
                                        <h6 className="font-strong text-dark m-b-10 m-t-10">
                                          Updated at:{" "}
                                          <small className="pr-3 text-muted">
                                            {hd?.requested_at}
                                          </small>
                                        </h6>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2">
                  <form action="javascript:void(0)">
                    <div className="row" />
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Description"
                      />
                    </div>

                    <div className="form-group">
                      <label>Location</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="location"
                      />
                    </div>

                    <div className="form-group">
                      <label>Type</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type"
                      />
                    </div>

                    <div className="form-group">
                      <label className="ui-checkbox">
                        <input type="checkbox" />
                        <span className="input-span" />
                        Remember me
                      </label>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-default" type="button">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HqReport;
