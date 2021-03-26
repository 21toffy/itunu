import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useCase } from "../../hooks";
import Spinner from "../../components/spinner/Spiner";
 

const AllAssets = () => {
  const { getCaseAssets, state } = useCase();
  const { assets, loading } = state;

  useEffect(() => {
    getCaseAssets();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div class="d-flex flex-column p-3 m-3 bg-white shadow-sm rounded animated flipInX delay-4">
        <div class="text-uppercase text-tracked text-muted mb-2">
          Asset Overview
        </div>

        <div class="d-flex justify-content-between">
          <div>
            <span class="text-size-2 text-monospace">All Assets</span>
          </div>
          <div class="text-success pl-3 pt-1">
            <i class="fas fa fa-long-arrow-alt-up"></i>
            <span class="text-monospace">Value:</span>
            <div class="small text-muted">vs last week</div>
          </div>
        </div>
      </div>

      <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              {/* <th onClick={() => getCases()} scope="col"> */}
              <th scope="col">Asset Type</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assets?.length > 0 ? (
              assets.map((asset, index) => (
                <tr>
                  <td>{asset.type}</td>
                  <td>{asset.name}</td>
                  <td>{asset.description}</td>
                  <td>{asset.location}</td>
                  <Link class="nav-link" to={`/asset/${asset.id}`}>
                    <a className="btn btn-dark btn-sm color-white">View</a>
                  </Link>
                </tr>
              ))
            ) : (
              <h2>loadinh</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAssets;
