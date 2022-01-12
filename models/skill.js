const skills = [
    {id: 01, project: 'Simon', deployed: true},
    {id: 02, project: 'Rock-Paper-Scissors', deployed: false},
    {id: 03, project: 'Tic-Tac-Toe', deployed: false},
    {id: 04, project: 'Portfolio Page', deployed: false},
    {id: 05, project: 'Magic Doodle Board', deployed: false},
    {id: 06, project: 'Simple JS Calculator', deployed: false},
    {id: 07, project: 'Concentration', deployed: false},
    {id: 08, project: 'Express Dev Skills App', deployed: false},
];

module.exports = {
    getAll, 
    getOne
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}