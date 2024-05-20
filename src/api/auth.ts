import api from "./index";

export const login = async (email: string, password: string) => {
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