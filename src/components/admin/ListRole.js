import React, { useEffect, useState } from "react";
import axios from "axios";

const getRole = async (token) => {
  
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

const ListRole = ({ searchRole ,setSearchRole }) => {
  const [listRole, setListRole] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getRole(token).then((roles) => {
        // console.log(roles.data);
        setListRole(roles.data);
      });
    }
  }, [token]);

  const handleSelectRole = (e) => {
    const newSelectRole = e.target.value;
    setSearchRole(newSelectRole);
  }

  return (
    <select className="form-select" id="filter-role" value={searchRole} onChange={handleSelectRole}>
      <option value="">--Quyền--</option>
      {listRole.map((role) => (
        <option key={role.id} value={role.id}>
          {role.name}
        </option>
      ))}
    </select>
  );
};

export default ListRole;
