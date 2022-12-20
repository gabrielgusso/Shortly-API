import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { connection } from "../dataBase/db.js"
import { authSignInSchema, authSignUpSchema } from "../schemas/auth.schema.js"

export async function signUpAuthController(req, res) {
  const auth = req.body
  const { name, email, password } = auth

  const validation = authSignUpSchema.validate(auth, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

  const newPassword = bcrypt.hashSync(password, 10)

  try {
    await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [
      name, email, newPassword
    ])
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    es.sendStatus(400)
  }
}

export async function signInAuthController(req, res) {

}
