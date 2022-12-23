import { connection } from "../dataBase/db.js"

export async function userController(req, res) {
  const { userId } = res.locals.session

  try {
    const userData = await connection.query(
      `SELECT u.id, u.name, SUM(s."viewsCounter") AS "visitCount",
      json_agg(s.*) AS "shortenedUrls"
       FROM users u
       JOIN shorten s
       ON u.id = s."userId"
       WHERE u.id = $1
       GROUP BY u.id, s."userId";`,
      [userId]
    )
    
    res.send(userData.rows[0])
  } catch (err) {
    res.send(err).status(400)
  }
}


