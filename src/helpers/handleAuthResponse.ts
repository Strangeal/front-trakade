import { AxiosResponse } from "axios";

export const handleAuthResponse = async (response: AxiosResponse<any, any>) => {
  const { data } = response;
  localStorage.setItem("token", data.token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem("user", JSON.stringify(data.resource_owner));
};
