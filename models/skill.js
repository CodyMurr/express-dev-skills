const skills = [
    {id: 561, technology: 'HTML', type: 'Document/Markup', concepts: ['Semantics', 'Elements/Tags', 'Forms', 'Tables']},
    {id: 860, technology: 'CSS', type: 'Stylesheet', concepts: ['Responsive Design', 'Flexbox', 'Grid', 'Animations', 'Specificity']},
    {id: 730, technology: 'Javascript', type: 'Object Oriented Scripting', concepts: ['DOM Manipulation', 'OOP', 'Dynamic Webpage Rendering']},
];

module.exports = {
    getAll, 
    getOne
}

function getOne(id) {
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}