import { connection } from "../dataBase/db.js"

export async function rankingController(req, res) {

  try {
    const ranking = await connection.query(
      `SELECT * FROM shorten ORDER BY "viewsCounter" DESC LIMIT 10`
    )
    
    res.send(ranking.rows)
  } catch (err) {
    res.send(err).status(400)
  }
}


