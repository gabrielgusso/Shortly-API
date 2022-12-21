import { urlSchema } from "../schemas/url.schema.js"
import { connection } from "../dataBase/db.js"

export async function urlMiddleware(req, res, next) {
  const url = req.body
  const token = res.locals.token

  const validation = urlSchema.validate(url, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

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
