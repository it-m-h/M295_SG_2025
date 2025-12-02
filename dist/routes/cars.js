import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.status(200).send('Alle Cars anziegen ');
});
router.get('/:id', (req, res) => {
    res.status(200).send('Car mit id ' + req.params.id);
});
router.post('/', (req, res) => {
    res.status(200).send('Ich will neues Auto mnachen');
});
router.put('/:id', (req, res) => {
    res.status(200).send('Ich will update machen mit id ' + req.params.id);
});
router.delete('/:id', (req, res) => {
    res.status(200).send('Ich will delete machen mit id ' + req.params.id);
});
export default router;
//# sourceMappingURL=cars.js.map