let skills = [
    {id: 561, technology: 'HTML', type: 'Document/Markup'},
    {id: 860, technology: 'CSS', type: 'Stylesheet'},
    {id: 730, technology: 'Javascript', type: 'Object Oriented Programming'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, newSkill);
  }

function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
}

function create(skill, concept) {
    skill.id = Date.now() % 1000;
    skills.push(skill);
    skills.concepts.push(concept);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}