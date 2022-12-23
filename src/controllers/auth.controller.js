import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { connection } from "../dataBase/db.js"

export async function signUpAuthController(req, res) {
  const { name, email, password } = req.body

  const newPassword = bcrypt.hashSync(password, 10)
  
  try {
    
    await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [
      name, email, newPassword
    ])

    res.sendStatus(200)
  } catch (err) {
    res.send(err).status(400)
  }
}

export async function signInAuthController(req, res) {
  const { email, password } = req.body

  try {
    const userFounded = await connection.query("SELECT * FROM users WHERE email=$1", [
     email
    ])

    if (!userFounded.rows[0]) {
      return res.sendStatus(404)
    }

    const passwordCompared = bcrypt.compareSync(password, userFounded.rows[0].password)
    
    if (!passwordCompared) {
      return res.sendStatus(401)
    }
    const token = uuid()

     await connection.query('INSERT INTO session ("userId", token) VALUES ($1, $2)', [
     userFounded.rows[0].id, token
    ])
    
    res.send(token)
  } catch (err) {
    res.send(err).status(400)
  }
}
