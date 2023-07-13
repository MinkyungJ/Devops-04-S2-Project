'use strict'

const fp = require('fastify-plugin')
const { MONGO_HOSTNAME, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env

module.exports = fp(async function (fastify, opts) {
  const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOSTNAME}:27017/?authMechanism=DEFAULT`
  console.log(url)

  fastify.register(require('@fastify/mongodb'), {
      forceClose: true,
      url: url
  })
})