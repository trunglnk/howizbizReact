import React, { useEffect, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import ReactPaginate from "react-paginate";

const TableUser = ({searchInput, searchRole }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState([]);
  const [selectPage, setSelectPage] = useState(10)
  

  const getUser = async (page) => {
    try {
      const response = await axios.get(
        `http://wlp.howizbiz.com/api/users?paginate=true&page=${page}&perpage=${selectPage}&with=roles,createdBy,provinces&search=${searchInput}&role_id=${searchRole}`
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadPage = async (page) => {
    const items = await getUser(page);
    // console.log(items.pagination.total);
    // const listData = items.list;
    setUserInfo(items.list);
    setCurrentPage(page);
    setTotal(items.pagination.total);
    setTotalPages(items.pagination.total / selectPage);
  };

  // useEffect(() => {
  //   getUser().then((users) => {
  //     console.log(users);
  //     setUserInfo(users.list);
  //   });
  // }, []);

  useEffect(() => {
    handleLoadPage(currentPage);
  }, [currentPage, selectPage, searchInput, searchRole]);

  const handlePageChange = (selectedPage) => {
    handleLoadPage(selectedPage.selected + 1);
  };

  const formatDate = (dateString) => {
    const parts = dateString.split(" ");
    if (parts.length >= 1) {
      return parts[0];
    }
    return dateString;
  };

  const handleSelectChange = (e) => {
    const newSelectPage = e.target.value;
    // console.log("Select value changed:", newSelectPage);
    setSelectPage(newSelectPage);
    // setCurrentPage(1); 
    // handleLoadPage(1); 
  };


  return (
    <div className="col-lg-12 mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Tên hiển thị</th>
            <th>Tên đăng nhập</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Quyền</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="table">
          {userInfo.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.mobile}</td>
              <td>
                <label className="switch">
                  <input className="checked" type="checkbox" defaultChecked/>
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                {item.roles.map((role, index) => (
                  <span
                    className="role mx-1 px-2 py-1"
                    style={{
                      backgroundColor: role.meta.color,
                      borderColor: "rgb(205, 229, 255)",
                      color: "rgb(60, 64, 67)",
                      caretColor: "rgb(60, 64, 67)",
                    }}
                    key={role.id}
                  >
                    {role.name}
                  </span>
                ))}
              </td>
              <td>{formatDate(item.created_at)}</td>
              <td>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modalEdit"
                  className="btn-action"
                >
                  <BiSolidPencil />
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  className="btn-action"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div className="flex-grow-0 pl-4"> 1-10/{total} </div>
        <div className="pagination d-flex justify-content-center">
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel={"‹"}
            nextLabel={"›"}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
        <select id="limit-item" style={{height: "30px"}} value={selectPage} onChange={handleSelectChange}>
          <option value="5">
            5 / trang
          </option>
          <option value="10" defaultValue >10/ trang</option>
          <option value="25" >25 / trang</option>
          <option value="50" >50 / trang</option>
        </select>
      </div>
    </div>
  );
};

export default TableUser;
