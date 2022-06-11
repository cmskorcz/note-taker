const router = require('express').Router()

const { notes } = require('../../db/notes.json')

router.get('/notes', (req, res) => {
    res.json(notes);
})

module.exports = router