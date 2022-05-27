const router = require('express').Router();
const noteNavi = require('../api-routes/note-navi');

router.use(noteNavi);

module.exports = router;