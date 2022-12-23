import { connection } from "../dataBase/db.js"

export default async function tokenValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
  
    if (!token) return res.sendStatus(401)

    const session = await connection.query(
      "SELECT * FROM session WHERE token=$1",
      [token]
    )
    if (!session.rows[0]) {
      res.sendStatus(401)
      return
    }
  
    res.locals.session = session.rows[0]

    next()
  }