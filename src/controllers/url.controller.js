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

export async function urlIdController(req, res, next) {
  const id = req.params.id

  try {
    const shorten = await connection.query(
      "SELECT * FROM shorten WHERE id=$1",
      [id]
    )
    if (!shorten.rows[0]) {
      res.sendStatus(404)
      return
    }

    res.send(shorten.rows[0])

  } catch (err) {
    res.send(err).status(400)
  }
}


export async function urlOpenController(req, res, next) {
    const shortUrl = req.params.shortUrl
  
    try {
      const shorten = await connection.query(
        'SELECT * FROM shorten WHERE "shortUrl"=$1',
        [shortUrl]
      )
      if (!shorten.rows[0]) {
        res.sendStatus(404)
        return
      }
  
      res.redirect(301, shorten.rows[0].url)
  
    } catch (err) {
      res.send(err).status(400)
    }
  }
