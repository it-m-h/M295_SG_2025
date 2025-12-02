import { Router } from 'express'
import type { Request, Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Alle Cars anziegen ')
})

router.get('/:id', (req: Request, res: Response) => {
  res.status(200).send('Car mit id ' + req.params.id)
})

router.post('/', (req: Request, res: Response) => {
  res.status(200).send('Ich will neues Auto mnachen')
})

router.put('/:id', (req: Request, res: Response) => {
  res.status(200).send('Ich will update machen mit id ' + req.params.id)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.status(200).send('Ich will delete machen mit id ' + req.params.id)
})


export default router