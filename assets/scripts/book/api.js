'use strict'
const config = require('../config')
const apiUrl = config.apiUrl
const booksUrl = apiUrl + '/books'

const index = function() {
  return $.ajax({
    url: url
  })
}

const show = function(id) {
  return $.ajax({
    url: url + '/' + id
  })
}

module.exports = {
  index,
  show
}