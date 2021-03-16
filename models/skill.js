//************************** */
// Our Skills - The Data
//************************** */ 

const skills = [
    {text: 'HTML5'},
    {text: 'CSS3'},
    {text: 'Javascript'}
   ];
 
 //************************** */
 // Model Functions (functions to update, delete, find, create data)
 //************************** */
 
   // get all the skills
   function getAll() {
    return skills;
   }
 
   // Define function to get one skill
   function getOne(index){
      return skills[index];
   }
 
   // function to add a skill
   function create(skill){
      skills.push(skill)
   }
 
   // function to remove one skill
   function deleteOne(id){
      skills.splice(id, 1)
   }
 
 //************************** */
 // Exporting Our Model
 //************************** */
   module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
   };