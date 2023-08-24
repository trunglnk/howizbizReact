import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFilterContext } from "./FilterContext";

const getStatus = async () => {
  try {
    const response = await axios.get(
      `http://wlp.howizbiz.com/api/loaihientrangs`
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProvinces = async () => {
  try {
    const response = await axios.get(`http://wlp.howizbiz.com/api/provinces`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const SideBar = () => {
  const [status, setStatus] = useState([]);
  const [province, setProvince] = useState([]);
  // const [selectedStatus, setSelectedStatus] = useState([]); 
  // const [selectedProvinces, setSelectedProvinces] = useState([]); 
  const { selectedStatus, setSelectedStatus, selectedProvinces, setSelectedProvinces } = useFilterContext();
  useEffect(() => {
    getStatus().then((items) => {
      // console.log(items);
      setStatus(items);
    });

    getProvinces().then((items) => {
      // console.log(items);
      setProvince(items);
    });
  }, []);

  const [activeLists, setActiveLists] = useState({
    1: true,
    2: false,
  });

  const handleListClick = (index) => {
    setActiveLists((prevActiveLists) => ({
      ...prevActiveLists,
      [index]: !prevActiveLists[index],
    }));
  };

  const handleCheckboxChange = (e, type) => {
    const value = e.target.value;
    if (type === "status") {
      setSelectedStatus((prevSelectedStatus) =>
        prevSelectedStatus.includes(value)
          ? prevSelectedStatus.filter((item) => item !== value)
          : [...prevSelectedStatus, value]
      );
    } else if (type === "province") {
      setSelectedProvinces((prevSelectedProvinces) =>
        prevSelectedProvinces.includes(value)
          ? prevSelectedProvinces.filter((item) => item !== value)
          : [...prevSelectedProvinces, value]
      );
    }
  };

  // console.log("Selected Status:", selectedStatus);
  // console.log("Selected Provinces:", selectedProvinces);

  return (
    <div className="side-menu">
      <div className="title-side-menu">
        <h4 className="m-0">BỘ LỌC</h4>
        <span>
          <i className="fa-solid fa-circle-question"></i>
        </span>
      </div>
      <hr className="m-0" />

      <div className="menu-list">
        <h3 className="side-list-title" onClick={() => handleListClick(1)}>
          <i
            className={`fa-solid fa-caret-right ${
              activeLists[1] ? "ro-90" : ""
            }`}
          ></i>
          <span>Hiện trạng loài</span>
        </h3>
        <form className="formList">
          <ul
            id="currentStatus"
            className={`list-ul list-unstyled ${
              activeLists[1] ? "active" : ""
            }`}
          >
            {status.map((sttItem, index) => (
              <li key={sttItem.id}>
                <input className="inCheck" type="checkbox" value={sttItem.id} onChange={(e) => handleCheckboxChange(e, "status")}/>{" "}
                {sttItem.ten}
              </li>
            ))}
          </ul>
        </form>
      </div>

      <div className="menu-list">
        <h3 className="side-list-title" onClick={() => handleListClick(2)}>
          <i
            className={`fa-solid fa-caret-right ${
              activeLists[2] ? "ro-90" : ""
            }`}
          ></i>
          <span>Địa giới hành chính</span>
        </h3>
        <form className="formList">
          <ul
            id="provinces"
            className={`list-ul list-unstyled ${
              activeLists[2] ? "active" : ""
            }`}
          >
            {province.map((prvItem, index) => (
              <li key={prvItem.id}>
                <input className="inCheck" type="checkbox" value={prvItem.id} onChange={(e) => handleCheckboxChange(e, "province")}/>{" "}
                {prvItem.name}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
