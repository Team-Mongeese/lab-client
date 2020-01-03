'use strict'
const config = require('../config')
const apiUrl = config.apiUrl
const booksUrl = apiUrl + '/books'

const index = function() {
  return $.ajax({
    url: booksUrl
  })
}

const show = function(id) {
  return $.ajax({
    url: booksUrl + '/' + id
  })
}

module.exports = {
  index,
  show
}