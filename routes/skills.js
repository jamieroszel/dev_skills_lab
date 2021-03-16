//************************** */
// Create a New Router
//************************** */
const express = require("express")
const router = express.Router();

//************************** */
// Import Model
//************************** */
const skillsCtrl = require("../controllers/skills")

//************************** */
// Routes
//************************** */
// get request to /skills
router.get("/", skillsCtrl.index)
// get request to /skills/new
router.get("/new", skillsCtrl.new)
// get request to /skills/1, /skills/2, etc.
router.get("/:id", skillsCtrl.show)
// post request to /skills/
router.post("/", skillsCtrl.create)
// delete request to /skills/:id
router.delete("/:id", skillsCtrl.delete)

//************************** */
// Export Router
//************************** */

module.exports = router;