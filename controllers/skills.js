//************************** */
// Import Dependencies
//************************** */
// Import our skill model
const Skill = require("../models/skill")


//************************** */
// Controller Functions
//************************** */

// Index function for getting all skills and rendering view
const index = (req, res) => {
    res.render("skills/index", {
        skills: Skill.getAll(),
        time: req.time
    })
}

// Show function for getting one skill and rendering view
const show = (req, res) => {
    //return the template skills/show.ejs
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })

}

// newSkill(new) function for rendering new skill form
function newSkill (req, res){
    res.render(`skills/new`)
}

// create function for creating a new skill and redirecting to index
function create(req, res){
    console.log(req.body)
    req.body.done = false
    Skill.create(req.body)
    res.redirect('/skills')
}

// deleteSkill(delete) function for deleting a skill and redirecting to index
function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

//************************** */
// Export Controller
//************************** */

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}