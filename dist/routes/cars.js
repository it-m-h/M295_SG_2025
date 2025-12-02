import { Router } from 'express';
import * as ctrl from '../controllers/carsController.js';
const router = Router();
// GET /api/cars        -> alle 
router.get('/', ctrl.getAllCars);
router.get('/:id', (req, res) => {
    res.status(200).send('Car mit id ' + req.params.id);
});
// POST /api/cars       -> neu erstellen
router.post('/', ctrl.createCar);
router.put('/:id', (req, res) => {
    res.status(200).send('Ich will update machen mit id ' + req.params.id);
});
router.delete('/:id', (req, res) => {
    res.status(200).send('Ich will delete machen mit id ' + req.params.id);
});
export default router;
//# sourceMappingURL=cars.js.map