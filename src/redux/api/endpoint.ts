import { UserProps } from "../../Types";
import instance from "./axios";

export const createNewUser = async (user: UserProps) => {
  return await instance.post("/users/tokens/sign_up", user);
};

export const singInUser = async (user: UserProps) => {
  return await instance.post("/users/tokens/sign_in", user);
};
