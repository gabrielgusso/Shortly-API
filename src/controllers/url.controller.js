import { connection } from "../dataBase/db.js"
import { nanoid } from "nanoid"

export async function urlController(req, res, next) {
  const { url } = req.body
  const { userId } = res.locals.session

  const shortUrl = nanoid()

  try {
    await connection.query(
      'INSERT INTO shorten (url, "shortUrl", "userId") VALUES ($1, $2, $3)',
      [url, shortUrl, userId]
    )

    res.send({ shortUrl }).status(201)
  } catch (err) {
    res.send(err).status(400)
  }
}
