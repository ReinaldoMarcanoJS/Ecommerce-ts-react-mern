import jwt from "jsonwebtoken";
const TOKEN_SECRET = process.env.TOKEN_SECRET
type props = {
  payload: Object;
};

async function createAccessToken({ payload }: props) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { payload: payload.toString() },
      `${TOKEN_SECRET}`,
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
