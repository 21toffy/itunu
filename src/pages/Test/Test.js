import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Test() {
    return (
        <div>
            <Layout>
            <div className="container-fluid">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body font-weight-bold">ALL CASES</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body font-weight-bold">FINAL CASES</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body font-weight-bold">RESOLVED CASES</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body font-weight-bold">CLOSED CASES</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header text-dark">
                  <i className="fas fa-table mr-1 " />
                  View All Cases
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr>
                          <td>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                        <tr>
                          <td>Airi Satou</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                        <tr>
                          <td>Donna Snider</td>
                          <td>Customer Support</td>
                          <td>New York</td>
                          <td>27</td>
                          <td>2011/01/25</td>
                          <td>$112,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </Layout>
          
        </div>
    )
}
