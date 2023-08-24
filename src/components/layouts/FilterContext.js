import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState([]);

  return (
    <FilterContext.Provider
      value={{ selectedStatus, setSelectedStatus, selectedProvinces, setSelectedProvinces }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
