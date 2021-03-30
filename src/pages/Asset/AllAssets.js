import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useCase } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";

const AllAssets = () => {
  const { getAllAssets, state } = useCase();
  const { assets, loading } = state;

  useEffect(() => {
    getAllAssets();
  }, []);

  var allAssets = assets?.length;
  // console.log(ret)
  var val = [];
  var fort = []

  
  // assets.forEach(i => if(i.status)
  //    arr.push(i));

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
                  <h6 class="text-dark">Number Of Assets</h6>
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-purple">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: {allAssets}</h4>
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
                  <h6 class="text-dark">Returned Assets</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-green">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: </h4>
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
                  <h6 class="text-dark">Total Asset Valuation</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-blue">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total: </h4>
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
                  <h6 class="text-dark">Forfeited Assets</h6>
                </div>
                <div class="col-4 text-right">
                  <i class="fa fa-file-text-o f-28" />
                </div>
              </div>
            </div>
            <div class="card-footer bg-c-red">
              <div class="row align-items-center">
                <div class="col-9">
                  <h4 class="text-white m-b-0">Total : </h4>
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
              <h4 class="card-title"> Assets</h4>
              <h6 class="card-subtitle" />
            </div>
            <div class="ml-auto">
              {/* <Link to="/all-assets">
                <a className="btn mini">view</a>
              </Link> */}
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table v-middle mb-0">
            <thead>
              <tr>
                <th class="border-top-0 font-medium border-bottom-0">
                  Asset Type
                </th>

                <th class="border-top-0 font-medium border-bottom-0">Name</th>
                <th class="border-top-0 font-medium border-bottom-0">
                  Description
                </th>
                <th class="border-top-0 font-medium border-bottom-0">
                  Location
                </th>
                <th class="border-top-0 font-medium border-bottom-0">Status</th>
                <th class="border-top-0 font-medium border-bottom-0">Action</th>
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
                      <label class="label label-danger">{asset.status}status</label>
                    </td>
                    <td>
                      <Link class="nav-link" to={`/asset/${asset.id}`}>
                        <a className="btn btn-dark btn-sm  text-white">View</a>
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

export default AllAssets;
