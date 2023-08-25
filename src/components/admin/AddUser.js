import React, { useEffect, useState } from "react";
import axios from "axios";

const getRoleAdd = async (token) => {
  try {
    const response = await axios.get(`http://wlp.howizbiz.com/api/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const AddUser = () => {
  const [listRoleAdd, setListRoleAdd] = useState([]);
  const token = localStorage.getItem("token");

  // State value input
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  // State validate
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");

  const validateInputs = () => {
    setNameError("");
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setRoleError("");

    let isValid = true;

    if (!name) {
      setNameError("Trường tên không được bỏ trống");
      isValid = false;
    }

    if (!username) {
      setUsernameError("Trường tên đăng nhập không được bỏ trống");
      isValid = false;
    }

    if (!email) {
      setEmailError("Trường email không được bỏ trống");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Trường mật khẩu không được bỏ trống");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Trường mật khẩu phải có ít nhất 8 ký tự");
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Mật khẩu xác nhận không khớp");
      isValid = false;
    }

    if (selectedRoles.length === 0) {
      setRoleError("Quyền người dùng không được để trống");
      isValid = false;
    }

    return isValid;
  };

  useEffect(() => {
    if (token) {
      getRoleAdd(token).then((roles) => {
        // console.log(roles.data);
        setListRoleAdd(roles.data);
      });
    }
  }, [token]);

  const handleAddUser = () => {
    const url = "http://wlp.howizbiz.com/api/users";

    // const roleIds = Array.from(
    //   document.getElementById("cboQuyen").selectedOptions
    // ).map((option) => option.value);

    if (!validateInputs()) {
      return;
    }

    const newUser = {
      name: name,
      username: username,
      email: email,
      mobile: phone,
      password: password,
      password_confirmation: confirmPassword,
      role_ids: selectedRoles,
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="input-label">Mật khẩu</label>
                <div className="error-message mt-2">{passwordError}</div>
              </div>

              <div className="input flex-column">
                <input
                  type="password"
                  className="input-field"
                  id="confirm-pwd"
                  name="confirm-pwd"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label className="input-label">Xác nhận mật khẩu</label>
                <div className="error-message mt-2">{confirmPasswordError}</div>
              </div>

              <label className="pt-3">Quyền</label>
              <div className="input pt-0 flex-column">
                <select
                  name="roles"
                  id="cboQuyen"
                  multiple
                  value={selectedRoles}
                  onChange={(e) =>
                    setSelectedRoles(
                      [...e.target.options]
                        .filter((option) => option.selected)
                        .map((option) => option.value)
                    )
                  }
                >
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
