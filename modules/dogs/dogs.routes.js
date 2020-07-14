const express = require('express');
const router = express.Router();

const dogRouter = express.Router();

dogRouter.route('/')
    .get(DogController.get);

router.use('/dogs', dogRouter);

module.exports - router;