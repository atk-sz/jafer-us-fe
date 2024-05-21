import { useEffect } from "react";
import { loggedInTestApi, logoutApi } from "../api/auth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth";

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
    <div>
      Home
      <button onClick={onClickLogout}>logout</button>
    </div>
  );
};

export default Home;
