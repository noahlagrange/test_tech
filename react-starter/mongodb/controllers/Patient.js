const Humeur = require("../models/Patient")


exports.createPatient = (req, res) => {
    const humeur = new Humeur(req.body)
    humeur.save().then((humeur) => {
        return res.status(201).json(humeur)
    })
    .catch((error) => {return res.status(400).json({error})});
}

exports.getonePatient = (req, res) => {
    const id = req.params.id;

    Humeur.findOne({_id: id})
    .then((patient) => {return res.status(200).json(patient)})
    .catch((error) => {return res.status(400).json({error})});
}

exports.getallPatient = (req, res) => {
    Humeur.find()
    .then((patient) => {return res.status(200).json({patient})})
    .catch((error) => {return res.status(400).json({error})});
}

exports.deletePatient = (req, res) => {
    const id = req.params.id;

    Humeur.deleteOne({_id: id})
    .then((patient) => {return res.status(200).json({patient})})
    .catch((error) => {return res.status(400).json({error})});
}
