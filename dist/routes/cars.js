import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.status(200).send('Alle Cars anzeigen ');
});
router.get('/:id', (req, res) => {
    res.status(200).send('Car mit id ' + req.params.id);
});
router.post('/', (req, res) => {
    let htmlText = 'Ich will neues Auto mnachen<br>';
    // felder aus req.body lesen und ausgeben
    console.log(req.body);
    let Name = req.body.name;
    htmlText += `Name: ${Name} <br>`;
    res.status(200).send(htmlText);
    /* TIPP: in Postman bei Body als raw und JSON formatieren
      {
          "name": "Hans Muster"
      }
      */
});
router.put('/:id', (req, res) => {
    res.status(200).send('Ich will update machen mit id ' + req.params.id);
});
router.delete('/:id', (req, res) => {
    res.status(200).send('Ich will delete machen mit id ' + req.params.id);
});
export default router;
//# sourceMappingURL=cars.js.map