import api from "./index";

export const registerApi = async (name: string, email: string, password: string) => {
  return await api.post(
    "/register",
    {
      name,
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const loginApi = async (email: string, password: string) => {
  return await api.post(
    "/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const logoutApi = async () => {
  return await api.post(
    "/logout", {}, { withCredentials: true, }
  );
};

export const loggedInTestApi = async () => {
  return await api.get("/", {
    withCredentials: true,
  });
}