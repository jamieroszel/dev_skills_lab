module.exports = {
    getAll
};

const skills = [
    {skill: 'Javascript', level: 5},
    {skill: 'HTML5', level: 5},
    {skill: 'CSS3', level: 5}
];

function getAll() {
    return skills;
}