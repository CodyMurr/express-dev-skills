let skills = [
    {id: 561, technology: 'HTML', type: 'Document/Markup', concepts: ['Semantics', 'Elements/Tags', 'Forms', 'Tables']},
    {id: 860, technology: 'CSS', type: 'Stylesheet', concepts: ['Responsive Design', 'Flexbox', 'Grid', 'Animations', 'Specificity']},
    {id: 730, technology: 'Javascript', type: 'Object Oriented Programming', concepts: ['DOM Manipulation', 'Dynamic Webpage Rendering']},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
}

function create(skill) {
    skill.id = Date.now() % 1000;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}