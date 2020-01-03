'use strict'

const api = require('./api.js')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// READ INDEX / GET ALL BOOKS
const indexBooks = function (event) {
  event.preventDefault()
  api
    .index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// SHOW BOOK / GET ONE BOOK
const showBook = function (event) {
  event.preventDefault()
  api
    .show()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const addHandlers = event => {
  $('.show').on('submit', showBook)
  $('.index').on('submit', indexBooks)
}

module.exports = {
  addHandlers
}
