import { urlSchema } from "../schemas/url.schema.js"

export async function urlMiddleware(req, res, next) {
  const url = req.body

  const validation = urlSchema.validate(url, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

  next()
}
