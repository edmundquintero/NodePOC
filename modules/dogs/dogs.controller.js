/**
 * 
 */
const DOGS = require('../../mocks/dogs.json');

/**
 * 
 */
class DogController {
    static get(req, res){
        return res.status(200).json(DOGS);
    }
}

module.exports = DogController;