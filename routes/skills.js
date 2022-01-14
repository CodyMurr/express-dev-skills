var express = require('express');
const { route } = require('.');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
