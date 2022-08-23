const HTTP_CODES = {
  INTERNAL_SERVER_ERROR: 500,
  OK:200,
  CREATED:201,
  NOT_FOUND:404,
  UNPROCESSABLE_ENTITY:422
}

module.exports = {
  notFound: (res, message) => {
    return res.status(HTTP_CODES.NOT_FOUND).send({
      message
    })
  },
  success: (res, data) => {
    return res.json(data)
  },
  internalServerError: (res, message) => {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({
      message
    })
  },
  unprocessableEntity: (res, message) => {
    return res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).send({
      message
    })
  }
}
