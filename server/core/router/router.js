const express = require('express');
const router = express.Router();

router.use(
    require('../../modules/dogs/dogs.routes')
);

module.exports = router;