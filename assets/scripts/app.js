'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const bookEvents = require('./book/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  bookEvents.addHandlers()
})
