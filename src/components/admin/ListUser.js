import React, { useState } from "react";
import "./ListUser.css";
import TableUser from "./TableUser";
import ListRole from "./ListRole";
import AddUser from "./AddUser";

const ListUser = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchRole, setSearchRole] = useState("")
  // console.log(searchRole);
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  let abc = "";
  return (
    <div className="container-fluid p-0 quanli-user">
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex justify-content-between w-100">
          <a
            href={abc}
            className="navbar-brand ms-2 d-flex align-items-center"
            style={{ fontWeight: "600" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
            <img
              src={"http://wlp.howizbiz.com/static/img/logo.png"}
              width="40"
              height="40"
              className="d-inline-block align-top mx-2"
              alt=""
              style={{ height: "100%" }}
            />
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </a>
          <a
            href={abc}
            className="navbar-brand account d-flex align-items-center "
            id="user-logined"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt=""
            />
            KienTrung
          </a>
        </div>
      </nav>

      <section className="main-content" id="main-user">
        <div className="row">
          <div
            className="col-lg-2 p-0"
            style={{ borderRight: "2px solid #ccc" }}
          >
            <div className="list-group rounded-0">
              <a
                href={abc}
                className="border-0 list-group-item list-group-item-action ps-4"
              >
                <i className="bx bxs-user-rectangle me-3"></i>Khách hàng
              </a>
              <a
                href={abc}
                className="border-0 list-group-item list-group-item-action ps-4 active"
              >
                <i className="bx bxs-user me-3"></i>Người dùng
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="title-page mt-3">
              <div className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt="user"
                  width="40"
                  height="40"
                />
                <p className="h5 ms-2">Người dùng</p>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-between mt-3 p-0">
                  <input
                    className="input-elevated w-50"
                    id="search-input"
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc số điện thoại"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                  />

                  <button
                    type="button"
                    className="button-add me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#addModal"
                  >
                    <span className="button__text">Thêm mới</span>
                    <span className="button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        height="24"
                        fill="none"
                        className="svg"
                      >
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                      </svg>
                    </span>
                  </button>

                  {/* MODAL ADD */}
                  <AddUser></AddUser>
                  {/* END MODAL ADD */}

                  {/* MODAL EDIT */}
                  <div className="modal" id="modalEdit">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Cập nhật người dùng</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body">
                          <form id="form-edit">
                            <div className="input">
                              <input
                                type="text"
                                className="input-field"
                                id="edit-name"
                                name="name"
                                required
                              />
                              <label className="input-label">
                                Tên hiển thị
                              </label>
                            </div>

                            <div className="input">
                              <label>Tên đăng nhập</label>
                              <input
                                type="text"
                                className="input-field disabled"
                                id="edit-username"
                                name="username"
                                disabled
                              />
                              {/* <label className="input-label">Tên đăng nhập</label> */}
                            </div>

                            <div className="input">
                              <label>Email</label>
                              <input
                                type="email"
                                className="input-field disabled"
                                id="edit-email"
                                name="email"
                                disabled
                              />
                              {/* <label className="input-label">Email</label> */}
                            </div>

                            <div className="input">
                              <input
                                type="text"
                                className="input-field"
                                id="edit-mobile"
                                name="mobile"
                              />
                              <label className="input-label">Điện thoại</label>
                            </div>

                            <label className="pt-3">Quyền</label>
                            <div className="mb-3">
                              <select id="edit-cboQuyen" multiple></select>
                            </div>
                          </form>
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Hủy
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="update-btn"
                            data-bs-dismiss="modal"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4 pb-2 list-filter mx-0">
                  <div className="col-lg-2">
                    <form>
                      <select className="form-select" id="filter-status">
                        <option>--Trạng thái--</option>
                        <option value="">Toàn bộ</option>
                        <option value="1">Hoạt động</option>
                        <option value="0">Vô hiệu</option>
                      </select>
                    </form>
                  </div>
                  <div className="col-lg-2">
                    <form>
                      {/* Filter Role */}
                      <ListRole setSearchRole={setSearchRole} searchRole={searchRole}></ListRole>
                      {/*End Filter Role */}
                    </form>
                  </div>
                  <div className="col-lg-2">
                    <input
                      id="startDate"
                      className="form-control"
                      type="date"
                      placeholder="Ngày bắt đầu"
                    />
                    <div className="date-messages">Ngày bắt đầu</div>
                  </div>
                  <div className="col-lg-2">
                    <input
                      id="endDate"
                      className="form-control"
                      type="date"
                      placeholder="Ngày kết thúc"
                    />
                    <div className="date-messages">Ngày kết thúc</div>
                  </div>
                </div>
                {/* BODY TABLE */}
                <TableUser searchInput={searchInput} searchRole={searchRole}></TableUser>
                {/* END BODY TABLE */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal" id="deleteModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header delete">
              <h4 className="modal-title">Bạn có chắc chắn xóa không?</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Modal body */}
            <div className="modal-body" id="body-delete">
              Modal body..
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="delete"
                value=""
                data-bs-dismiss="modal"
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END POPUP DELETE */}

      {/* CARD USER */}
      <div
        className="card position-absolute"
        id="card"
        style={{
          width: "300px",
          top: "46px",
          right: "20px",
          zIndex: 999,
          boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.5)",
          display: "none",
        }}
      >
        {/* END CARD USER */}
      </div>

      {/* PROFILE */}
      <section
        className="main-content"
        id="main-profile"
        style={{ display: "none" }}
      >
        <div className="row">
          <div
            className="col-lg-2 p-0"
            style={{ borderRight: "2px solid #ccc" }}
          >
            <div className="avatar mt-5" id="avt-profile">
              {/* Conten */}
            </div>
            <div className="image-text text-center pt-2">
              <p className="text-capitalize">
                Dung lượng tối đa là 1MB
                <br />
                Chỉ hỗ trợ PNG, JPEG, JPG
              </p>
            </div>
            <h5 className="ms-4">Tài khoản của tôi</h5>
            <div className="list-group rounded-0">
              <a
                href={abc}
                className="border-0 list-group-item list-group-item-action ps-4 active"
              >
                <i className="bx bxs-food-menu me-3"></i>Hồ sơ
              </a>
              <a
                href={abc}
                className="border-0 list-group-item list-group-item-action ps-4 "
              >
                <i className="bx bxs-edit-alt me-3"></i>Đổi mật khẩu
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="title-page mt-3">
              <div className="d-flex align-items-center">
                <p className="h5 ms-2">Thông tin cá nhân</p>
              </div>
              <div className="card" style={{ width: "600px" }}>
                <div className="card-header d-flex">
                  <div className="img-us">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="content-image">
                    <h4>Hồ sơ</h4>
                    <p>Thông tin cơ bản như tên và ảnh của bạn</p>
                  </div>
                </div>
                <div className="card-body">
                  <form id="form-profile">
                    <div className="mb-3 mt-3">
                      <label className="form-label">Tên hiển thị:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name-show"
                        name="nameShow"
                        defaultValue=""
                      />
                    </div>
                    <div className="mb-3 mb-3">
                      <label className="form-label">Số điện thoại</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        defaultValue=""
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Lưu
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUser;
