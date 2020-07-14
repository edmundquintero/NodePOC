/**
 * 
 */
const DOGS = require('../../mocks/dogs.json');

/**
 * 
 */
class DogController {
    static get(req, res){
        res.status(200).json(DOGS);
    }
}