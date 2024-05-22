import { useEffect } from "react";
import { loggedInTestApi, logoutApi } from "../api/auth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const onClickLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());
    } catch (error: any) {
      console.log("error");
      console.log(
        error?.response?.data || "Unable to login please try again later!!"
      );
    }
  };

  // write a useEffect to run an api on page render but in for once
  useEffect(() => {
    (async () => {
      try {
        await loggedInTestApi();
      } catch (error: any) {
        console.log("error");
        console.log(
          error?.response?.data || "Unable to login please try again later!!"
        );
      }
    })();
  }, []);
  return (
    <div
      style={{
        margin: "5%",
      }}
    >
      Home
      <button onClick={onClickLogout}>logout</button>
      <div style={{ margin: "3%", width: "100%", display: "flex", gap: "10px" }}>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    </div>
  );
};

export default Home;
