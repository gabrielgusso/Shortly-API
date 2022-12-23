import { connection } from "../dataBase/db.js"

export async function rankingController(req, res) {

  try {
    const ranking = await connection.query(
      `SELECT u.id, u.name, COUNT(s.url) AS "linksCounter", SUM(s."viewsCounter") AS "visitCount" 
      FROM users u LEFT JOIN shorten s ON s."userId" = u.id
      GROUP BY u.id, s."userId"
      ORDER BY "visitCount" DESC NULLS LAST LIMIT 10`
    )
    
    res.send(ranking.rows)
  } catch (err) {
    res.send(err).status(400)
  }
}


