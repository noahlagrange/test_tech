const Humeur = require("../models/Humeur")

exports.createHumeur = (req, res) => {
    const humeur = new Humeur(req.body)
    humeur.save().then((humeur) => {
        return res.status(201).json(humeur)
    })
    .catch((error) => {return res.status(400).json({error})});
}

exports.getoneHumeur = (req, res) => {
    const id = req.params.id;
    Humeur.findOne({_id: id})
    .then((humeur) => {return res.status(200).json(humeur)})
    .catch((error) => {return res.status(400).json({error})});
}

exports.getallHumeurs = (req, res) => {
    Humeur.find()
    .then((humeurs) => {return res.status(200).json({humeurs})})
    .catch((error) => {return res.status(400).json({error})});
}

exports.getallHumeursOf = (req, res) => {
    const id = req.params.id;

    Humeur.find({id_patient: id})
    .then((humeursof) => {return res.status(200).json({humeursof})})
    .catch((error) => {return res.status(400).json({error})});
}

exports.deleteHumeur = (req, res) => {
    const id = req.params.id;

    Humeur.deleteOne({_id: id})
    .then((humeur) => {return res.status(200).json({humeur})})
    .catch((error) => {return res.status(400).json({error})});
}
