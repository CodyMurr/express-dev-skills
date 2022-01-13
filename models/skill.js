const skills = [
    {technology: 'HTML', type: 'Front-End', concepts: ['Semantics', 'Elements/Tags', 'Forms', 'Tables']},
    {technology: 'CSS', type: 'Front-end', concepts: ['Responsive Design', 'Flexbox', 'Grid', 'Animations', 'Specificity']},
    {technology: 'Javascript', type: 'Full Stack', concepts: ['DOM Manipulation', 'OOP', 'Dynamic Webpage Rendering']},
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