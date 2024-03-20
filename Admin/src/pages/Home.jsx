import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import WidgetSm from '../components/widgetSm/WidgetSm'
import WidgetLg from '../components/widgetLg/WidgetLg'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'

const home = () => {
  return (
    <div className="container-scroller">
     
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="row">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 className="font-weight-bold">Welcome Aamir</h3>
                    <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3 unread alerts!</span></h6>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="justify-content-end d-flex">
                      <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                        <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card tale-bg">
                  <div className="card-people mt-auto">
                    <img src="images/dashboard/people.svg" alt="people" />
                    <div className="weather-info">
                      <div className="d-flex">
                        <div>
                          <h2 className="mb-0 font-weight-normal"><i className="icon-sun mr-2"></i>31<sup>C</sup></h2>
                        </div>
                        <div className="ml-2">
                          <h4 className="location font-weight-normal">Bangalore</h4>
                          <h6 className="font-weight-normal">India</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin transparent">
                <div className="row">
                  <div className="col-md-6 mb-4 stretch-card transparent">
                  <FeaturedInfo />
                  </div>
                  <div className="col-md-6 mb-4 stretch-card transparent">
                    <div className="card card-dark-blue">
                      <div className="card-body">
                        <p className="mb-4">Total Bookings</p>
                        <p className="fs-30 mb-2">61344</p>
                        <p>22.00% (30 days)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                    <div className="card card-light-blue">
                      <div className="card-body">
                        <p className="mb-4">Number of Meetings</p>
                        <p className="fs-30 mb-2">34040</p>
                        <p>2.00% (30 days)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 stretch-card transparent">
                    <div className="card card-light-danger">
                      <div className="card-body">
                        <p className="mb-4">Number of Clients</p>
                        <p className="fs-30 mb-2">47033</p>
                        <p>0.22% (30 days)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <p className="card-title">Order Details</p>
                    <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                    <div className="d-flex flex-wrap mb-5">
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Order value</p>
                        <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                      </div>
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Orders</p>
                        <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                      </div>
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Users</p>
                        <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted">Downloads</p>
                        <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <div className="d-flex justify-content-between">
                      <p className="card-title">Sales Report</p>

                    </div>
                    <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <WidgetLg />
               
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">To Do Lists</h4>
                    <div className="list-wrapper pt-2">
                      <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Meeting with Urban Team
                              <i className="input-helper"></i></label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" checked="" />
                              Duplicate a project for new customer
                              <i className="input-helper"></i></label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Project meeting with CEO
                              <i className="input-helper"></i></label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" checked="" />
                              Follow up of team zilla
                              <i className="input-helper"></i></label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Level up for Antony
                              <i className="input-helper"></i></label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="add-items d-flex mb-0 mt-2">
                      <input type="text" className="form-control todo-list-input" placeholder="Add new task" />
                      <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent"><i className="icon-circle-plus"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title mb-0">Projects</p>
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th className="pl-0  pb-2 border-bottom">Places</th>
                            <th className="border-bottom pb-2">Orders</th>
                            <th className="border-bottom pb-2">Users</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="pl-0">Kentucky</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">65</span>(2.15%)</p></td>
                            <td className="text-muted">65</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Ohio</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">54</span>(3.25%)</p></td>
                            <td className="text-muted">51</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Nevada</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">22</span>(2.22%)</p></td>
                            <td className="text-muted">32</td>
                          </tr>
                          <tr>
                            <td className="pl-0">North Carolina</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">46</span>(3.27%)</p></td>
                            <td className="text-muted">15</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Montana</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">17</span>(1.25%)</p></td>
                            <td className="text-muted">25</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Nevada</td>
                            <td><p className="mb-0"><span className="font-weight-bold mr-2">52</span>(3.11%)</p></td>
                            <td className="text-muted">71</td>
                          </tr>
                          <tr>
                            <td className="pl-0 pb-0">Louisiana</td>
                            <td className="pb-0"><p className="mb-0"><span className="font-weight-bold mr-2">25</span>(1.32%)</p></td>
                            <td className="pb-0">14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 stretch-card grid-margin">
                <WidgetSm />
              </div>
            </div>
            <div className="row">

            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default home