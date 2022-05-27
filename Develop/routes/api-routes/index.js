const router = require('express').Router();
const noteNavi = require('./note-navi');

router.use(noteNavi);

module.exports = router;