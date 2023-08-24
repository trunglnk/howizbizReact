// import React, { useState } from "react";
import qr from "../img/qr.png";
import Result from "./Result";
import SideBar from "./SideBar";
import { FilterProvider } from "./FilterContext";


const MainContent = () => {
  return (
    <FilterProvider>
    <section className="main-content">
      <div className="nav-menu">
        <div className="export-ex float-end me-4">
          <i className="bx bx-spreadsheet" title="Xuất excel"></i>
        </div>
        <div className="container">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link text-uppercase rounded-0 d-flex align-items-center active"
                data-bs-toggle="pill"
                href="#home"
              >
                <i className="bx bxs-grid me-2 i-icon"></i>Lưới
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase rounded-0 d-flex align-items-center"
                data-bs-toggle="pill"
                href="#menu1"
              >
                <i className="bx bx-menu me-2 i-icon"></i>Bảng
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase rounded-0 d-flex align-items-center"
                data-bs-toggle="pill"
                href="#menu2"
              >
                <i className="bx bx-bar-chart-alt-2 me-2 i-icon"></i>Thống kê
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row container-fluid">
      {/* SIDEBAR */}
        <div className="col-lg-2 side-bar p-0">
          <div className="menu-left-container">
          <SideBar></SideBar>

          </div>
        </div>

        {/* CONTENT */}
        <div className="col-lg-10 content-left">
          {/* Kết quả */}
          <div className="tab-content">
            <div id="home" className="tab-pane p-0 m-0 active">
              <br />

                  <Result></Result>

              <div className="break-line mt-10"></div>

              <div className="other-result">
                <h3 className="total-results mb-0">Kết quả khác</h3>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col p-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="species-desc d-flex justify-content-between">
                          <div className="species-info">
                            <p className="species-character mb-2">
                              Động vật - Ngành dây sống
                            </p>
                            <h3 className="species-name">Rùa da</h3>
                            <p className="science-name fst-italic">
                              Dermochelys coriacea{" "}
                            </p>
                          </div>
                          <div className="species-qr">
                            <img src={qr} alt="" height="80" width="80" />
                          </div>
                        </div>
                        <div className="species-status d-flex justify-content-between align-items-center">
                          <div className="status-desc">
                            <i className="fa-solid fa-circle-question icon-status"></i>
                            Chưa xác định
                          </div>

                          <div className="red-list">
                            <button
                              type="button"
                              className="btn btn-red-list pink"
                            >
                              CR
                            </button>
                            <button
                              type="button"
                              className="btn btn-red-list red"
                            >
                              VU
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button id="myBtn" className="btn-see-more mb-3">
                    Tải thêm
                  </button>
                </div>
              </div>
            </div>
            <div id="menu1" className="tab-pane fade">
              <br />
              <div className="table-result">
                <h3 className="total-results mb-0">Kết quả(367)</h3>
                <br />
                <table className="table table-hover table-content">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Tên khoa học</th>
                      <th>Hiện trạng</th>
                      <th>Danh mục</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="break-line mt-10"></div>

              <div className="table-other-result">
                <h3 className="total-results mb-0">Kết quả khác</h3>
                <br />
                <table className="table table-hover table-content">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Tên khoa học</th>
                      <th>Hiện trạng</th>
                      <th>Danh mục</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bách tán đài loan</td>
                      <td>Taiwania cryptomerioides</td>
                      <td>Chưa xác định</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="see-more text-center">
                  <button id="myBtn" className="btn-see-more mb-3">
                    Tải thêm
                  </button>
                </div>
              </div>
            </div>
            <div id="menu2" className="tab-pane fade">
              <br />
              <h3 className="total-results mb-0">Kết quả khác</h3>
              <br />
              <div
                id="myPlot"
                style={{ width: "100%", maxWidth: "700px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FilterProvider>
  );
};

export default MainContent;
