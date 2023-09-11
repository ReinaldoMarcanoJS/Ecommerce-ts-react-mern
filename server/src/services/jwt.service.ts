import { TOKEN_SECRET } from "../config";
import jwt from "jsonwebtoken";

type props = {
  payload: Object;
};

async function createAccessToken({ payload }: props) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { payload: payload.toString() },
      TOKEN_SECRET,
      {
        expiresIn: "2 days",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
}

export { createAccessToken };
