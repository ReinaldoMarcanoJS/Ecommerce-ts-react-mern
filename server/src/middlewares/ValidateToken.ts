// import  jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from 'express';
// import  { TOKEN_SECRET } from "../config"

// const authRequire = (req: Request, res: Response, next: NextFunction) => {
//     const { token } = req.cookies;
//     if (!token) return res.status(401).json({ message: "no token, autorization denied" });

//     jwt.verify(token, TOKEN_SECRET, (err: unknown,user: ) => {
//         if (err) return res.status(403).json({ message: "invalid token" });
//         req.params.user = user;
//         next()
//     })
//     next()
// }
// export {authRequire}
