const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function show(req, res) {
    const skill = Skill.getOne(req.params.technology);
    res.render('skills/show', {skill});
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}