import { Skill } from "../models/skill.js"


function index(req, res) {
  Skill.find({})
  .then(skills=> {
    res.render('skills/index', {
      skills: skills,
      time: req. time
    })
  })
  .catch(error=> {
    console.log(error);
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create (req,res) {
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/skills')
  })
}

function show (req,res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show',{
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}



export {
	index,
  newSkill as new,
  create,
  show
}