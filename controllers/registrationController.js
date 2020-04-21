const express = require("express");
const router = express.Router();
const db = require("../models");




router.get('/', (req,res)=>{
    db.Registration.findAll().then( dbRegistration=> {
        res.json(dbRegistration);
    })
});

router.post('/', (req,res)=>{
    db.Registration.create({
        first_year: req.body.first_year,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthdate: req.body.birthdate,
        grade_in_school: req.body.grade_in_school,
        t_shirt_size: req.body.t_shirt_size,
        buddy_request: req.body.buddy_request,
        registered_girl_scout: req.body.registered_girl_scout,
        registration_confirmed: req.body.registration_confirmed,
        troop_number: req.body.troop_number,
        service_unit_number: req.body.service_unit_number,
        authorized_release_names: req.body.authorized_release_names
    }).then(newRegistration => {
        res.status(200).json(newRegistration);
    })
    
});




module.exports = router;