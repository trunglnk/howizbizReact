import React, { useEffect, useState } from "react";
import axios from "axios";

const getRoleAdd = async (token) => {
  try {
    const response = await axios.get(`http://wlp.howizbiz.com/api/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const AddUser = () => {
  const [listRoleAdd, setListRoleAdd] = useState([]);
  const token = localStorage.getItem("token");

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");

  useEffect(() => {
    if (token) {
      getRoleAdd(token).then((roles) => {
        // console.log(roles.data);
        setListRoleAdd(roles.data);
      });
    }
  }, [token]);

  const handleAddUser = () => {
    const url = "http://wlp.howizbiz.com/api/users"; // Replace with the appropriate endpoint
    const name = document.getElementById("nameUser").value;
    const username = document.getElementById("usernameUser").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("mobile").value;
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("confirm-pwd").value;

    const roleIds = Array.from(
      document.getElementById("cboQuyen").selectedOptions
    ).map((option) => option.value);

    // Kiểm tra mật khẩu và mật khẩu xác nhận
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    // Validation checks
    if (!name) {
      setNameError("Trường tên không được bỏ trống");
      return;
    }

    if (!username) {
      setUsernameError("Trường tên đăng nhập không được bỏ trống");
      return;
    }

    if (!email) {
      setEmailError("Trường email không được bỏ trống");
      return;
    }

    if (!password) {
      setPasswordError("Trường mật khẩu không được bỏ trống");
      return;
    }

    if (roleIds.length === 0) {
      setRoleError("Quyền người dùng không được để trống");
      return;
    }

    // Clear error messages if no validation errors
    setNameError("");
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setRoleError("");

    const newUser = {
      name: name,
      username: username,
      email: email,
      mobile: phone,
      password: password,
      password_confirmation: confirmPassword,
      role_ids: roleIds,
    };

    axios
      .post(url, newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        // Call a function to refresh user data or update UI accordingly
        alert("Thêm mới User thành công!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="modal" id="addModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Thêm mới người dùng</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <form className="card-form">
              <div className="input flex-column">
                <input
                  type="text"
                  className="input-field"
                  id="nameUser"
                  name="name"
                  required
                />
                <label className="input-label">Tên hiển thị</label>
                <div className="error-message mt-2">{nameError}</div>
              </div>

              <div className="input flex-column">
                <input
                  type="text"
                  className="input-field"
                  id="usernameUser"
                  name="username"
                  required
                />
                <label className="input-label">Tên đăng nhập</label>
                <div className="error-message mt-2">{usernameError}</div>
              </div>

              <div className="input flex-column">
                <input
                  type="email"
                  className="input-field"
                  id="email"
                  name="email"
                  required
                />
                <label className="input-label">Email</label>
                <div className="error-message mt-2">{emailError}</div>
              </div>

              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  id="mobile"
                  name="mobile"
                  required
                />
                <label className="input-label">Điện thoại</label>
              </div>

              <div className="input flex-column">
                <input
                  type="password"
                  className="input-field"
                  id="pwd"
                  name="pwd"
                  required
                />
                <label className="input-label">Mật khẩu</label>
                <div className="error-message mt-2">{passwordError}</div>
              </div>

              <div className="input">
                <input
                  type="password"
                  className="input-field"
                  id="confirm-pwd"
                  name="confirm-pwd"
                  required
                />
                <label className="input-label">Xác nhận mật khẩu</label>
              </div>

              <label className="pt-3">Quyền</label>
              <div className="input pt-0 flex-column">
                <select name="roles" id="cboQuyen" multiple>
                  {listRoleAdd.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="error-message mt-2">{roleError}</div>
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
              id="addUserBtn"
              onClick={handleAddUser}
            >
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
