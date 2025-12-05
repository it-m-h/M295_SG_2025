import { Router } from 'express'
import * as ctrl from '../controllers/carsController.js'

const router = Router()

router.get('/', ctrl.getAllCars)

router.get('/:id', ctrl.getCarById)

router.post('/', ctrl.createCar)

router.put('/:id', ctrl.updateCar)

router.delete('/:id', ctrl.deleteCar)

export default router
