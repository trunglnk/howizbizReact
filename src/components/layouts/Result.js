import React, { useEffect, useState } from "react";
import qr from "../img/qr.png";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useFilterContext } from "./FilterContext";
import LazyLoad from "react-lazy-load";
import { Oval as Loader } from "react-loader-spinner"; 


const Result = () => {
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { selectedStatus, selectedProvinces } = useFilterContext();

  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (page) => {
    try {
      setLoading(true);
      let query = `http://wlp.howizbiz.com/api/loaicongbo?paginate=true&page=${page}&perpage=18`;

      if (selectedStatus.length > 0) {
        query += `&loaihientrang_ids[]=${selectedStatus.join(
          "&loaihientrang_ids[]="
        )}`;
      }

      if (selectedProvinces.length > 0) {
        if (selectedStatus.length === 0) {
          query += `&province_ids[]=${selectedProvinces.join(
            "&province_ids[]="
          )}`;
        } else {
          query += `&province_ids[]=${selectedProvinces.join(
            "&province_ids[]="
          )}`;
        }
      }

      // console.log("API Query:", query); 
      // console.log("selectedStatus:", selectedStatus);
      // console.log("selectedProvinces:", selectedProvinces);

      const response = await axios.get(query);
      // console.log(response.data.list);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleLoadPage = async (page) => {
    const items = await getData(page);
    // console.log(items.pagination.total);
    const listData = items.list;
    setSpecies(listData);
    setCurrentPage(page);
    setTotal(items.pagination.total);
    setTotalPages(items.pagination.total / 18);
  };

  useEffect(() => {
    handleLoadPage(currentPage);
  }, [currentPage, selectedStatus, selectedProvinces]);

  // useEffect(() => {
  //   setTotalPages(41);
  // }, []);

  const handlePageChange = (selectedPage) => {
    handleLoadPage(selectedPage.selected + 1);
  };

  return (
    <div className="result">
      <h3 className="total-results mb-0">Kết quả({total})</h3>
      {loading ? ( // Conditionally render the loading spinner
        <div className="loading-spinner py-4">
          <Loader type="Oval" color="#00BFFF" height={30} width={30} />
        </div>
      ) : (
        <div className="row">
          {species.map.length > 0 &&
            species.map((item, index) => (
              <div
                key={item.id}
                className="col-sm-12 col-md-6 col-lg-4 col p-3"
              >
                <div className="card">
                  <LazyLoad height={256} width={488} threshold={0.75}>
                    <div className="card-img">
                      <img
                        src={
                          item.attachments[0] && item.attachments[0].path
                            ? `http://wlp.howizbiz.com${item.attachments[0].path}`
                            : "http://wlp.howizbiz.com/static/img/image3.2ffc6960.png"
                        }
                        className="card-img-top"
                        alt="..."
                        height="256"
                      />
                    </div>
                  </LazyLoad>
                  <div className="card-body" style={{ height: "175.59px" }}>
                    <div className="species-desc d-flex justify-content-between">
                      <div className="species-info">
                        <p className="species-character mb-2">
                          {item.kingdom.ten} - {item.phylumn.ten ? item.phylumn.ten : item.phylumn.ten_khoa_hoc}
                        </p>
                        <h3 className="species-name">{item.ten}</h3>
                        <p className="science-name fst-italic">
                          {item.ten_khoa_hoc}{" "}
                        </p>
                      </div>
                      <div className="species-qr">
                        <img src={qr} alt="" height="80" width="80" />
                      </div>
                    </div>
                    <div className="species-status d-flex justify-content-between align-items-center">
                      <div className="status-desc">
                        {item.loai_hien_trang &&
                        item.loai_hien_trang.ten === null ? (
                          <i
                            className="fa-solid fa-arrow-up"
                            style={{ color: "#c53434", fontSize: "18px" }}
                          ></i>
                        ) : item.loai_hien_trang &&
                          item.loai_hien_trang.ten === "Giảm dần" ? (
                          <i
                            className="fa-solid fa-arrow-down"
                            style={{
                              color: "#c53434",
                              fontSize: "28px",
                              marginRight: "10px",
                            }}
                          ></i>
                        ) : (
                          <i className="fa-solid fa-circle-question icon-status"></i>
                        )}

                        {item.loai_hien_trang
                          ? item.loai_hien_trang.ten
                          : " Chưa xác định"}
                      </div>

                      <div className="red-list">
                        {item.sach_dos[0] && item.sach_dos[0].ma_danh_muc ? (
                          <button
                            type="button"
                            className="btn btn-red-list pink mx-2"
                          >
                            {item.sach_dos[0].ma_danh_muc}
                          </button>
                        ) : (
                          " "
                        )}

                        {item.iucns[0] && item.iucns[0].ma_danh_muc ? (
                          <button
                            type="button"
                            className="btn btn-red-list red"
                          >
                            {item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
                          </button>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
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
    </div>
  );
};

export default Result;
