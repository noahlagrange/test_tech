const express = require('express');
const router = express.Router();
const prodctrl = require("../controllers/Humeur")

router.post('/', prodctrl.createHumeur);

router.get('/:id', prodctrl.getoneHumeur);

router.get('/', prodctrl.getallHumeurs);

router.get('/patient/:id', prodctrl.getallHumeursOf);

router.delete('/:id', prodctrl.deleteHumeur);

module.exports = router;