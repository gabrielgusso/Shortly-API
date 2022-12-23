import { connection } from "../dataBase/db.js"

export async function rankingController(req, res) {

  try {
    const ranking = await connection.query(
      `SELECT s."userId", u.name, COUNT(s.url) AS "linksCounter", SUM(s."viewsCounter") AS "visitCount" 
      FROM shorten s JOIN users u ON s."userId" = u.id
      GROUP BY u.name, s."userId"
      ORDER BY "visitCount" DESC LIMIT 10`
    )
    
    res.send(ranking.rows)
  } catch (err) {
    res.send(err).status(400)
  }
}


