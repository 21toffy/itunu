import React, { useState, useEffect } from "react";
import "../Case/CaseDetail.css";
// import "./save.css";

import { Link } from "react-router-dom";
import { useCase } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";
import { useDash } from "../../hooks";

const ForefietedCases = () => {
    const {
        getInitial,
        initialstate,
        getFinal,
        getResolved,
        getClosed,
      } = useDash();
      const { closed, resolved, initial, final } = initialstate;


      useEffect(() => {
    
        getInitial();
        getFinal();
        getResolved();
        getClosed();
      }, []);


  const allfinalCount = final?.length;
  const allresolvedCount = resolved?.length;
  const allclosedCount = closed?.length;
  const allinitialCount = initial?.length;


    return (
        <div class="cardo">
        <div class="card-body">
          <div class="d-md-flex align-items-center">
            <div>
              <h4 class="card-title"> Forefeited Cases </h4>
              <h6 class="card-subtitle">{allfinalCount}</h6>
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
              {final?.length > 0 ? (
                final.map((cas, index) => (
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
    )
}

export default ForefietedCases
