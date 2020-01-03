'use strict'
const url = "https://wdi-library-api.herokuapp.com/books"

const index = function() {
  return $.ajax({
    url,
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