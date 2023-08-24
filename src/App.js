import "../node_modules/bootstrap/dist/css//bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./App.css";
import Login from "./components/login/Login";
import Layout from "./components/layouts/Layout";
import MainContent from "./components/layouts/MainContent";
import { Routes, Route } from "react-router-dom";
import ListUser from "./components/admin/ListUser.js";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainContent></MainContent>
            </Layout>
          }
        ></Route>
        <Route path="/dang-nhap" element={<Login></Login>}></Route>
        <Route path="/user" element={<ListUser></ListUser>}></Route>

      </Routes>
    </>
  );
}

export default App;
