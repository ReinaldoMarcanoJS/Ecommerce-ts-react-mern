import dbUser from "../models/user.model";

const getDetailUser = async (email: string) => {
  const response = await dbUser.findOne({ email });
  return response;
};

export { getDetailUser };
