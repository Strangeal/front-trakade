import { UserProps } from "../../Types";
import instance from "./axios";

const createNewUser = async (user: UserProps) => {
  return await instance.post("/users/tokens/sign_up", user);
};

const singInUser = async (user: UserProps) => {
  return await instance.post("/users/tokens/sign_in", user);
};
