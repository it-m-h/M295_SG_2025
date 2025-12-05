import type { Request, Response, NextFunction } from 'express'
import * as repo from '../repo/carsRepo.js'
import type { CarInput } from '../types/car.js'

export async function getAllCars(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await repo.list()
    res.json(data)
  } catch (err) { next(err) }
}

export async function getCarById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id)
    if (!Number.isFinite(id))
      return res.status(400).json({ fehler: 'Ungültige ID' })
    const car = await repo.findById(id)
    if (!car) return res.status(404).json({ fehler: 'Nicht gefunden' })
    res.json(car)
  } catch (err: unknown) {
    next(err)
  }
}


export async function updateCar(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id)
    if (!Number.isFinite(id))
      return res.status(400).json({ fehler: 'Ungültige ID' })
    const v = validateCarInput(req.body)
    if (!v.ok) return res.status(400).json({ fehler: v.errors })
    const updated = await repo.replace(id, v.value!)
    if (!updated) return res.status(404).json({ fehler: 'Nicht gefunden' })
    res.json(updated)
  } catch (err: unknown) {
    next(err)
  }
}

export async function createCar(req: Request, res: Response, next: NextFunction) {
  try {
    const v = validateCarInput(req.body)
    if (!v.ok) return res.status(400).json({ fehler: v.errors })
    const car = await repo.create(v.value!)
    // Location-Header setzen (Best Practice)
    res.status(201).location(`/api/cars/${car.id}`).json(car)
  } catch (err) { next(err) }
}


export async function deleteCar(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id)
    if (!Number.isFinite(id))
      return res.status(400).json({ fehler: 'Ungültige ID' })
    const ok = await repo.remove(id)
    if (!ok) return res.status(404).json({ fehler: 'Nicht gefunden' })
    res.status(204).send('erfolgreich gelöscht') 
  } catch (err: unknown) {
    next(err)
  }
}



function validateCarInput(body: any): { ok: boolean; errors?: string[]; value?: CarInput } {
  const errors: string[] = []
  const brand = typeof body?.brand === 'string' ? body.brand.trim() : ''
  const model = typeof body?.model === 'string' ? body.model.trim() : ''
  const year  = Number(body?.year)

  if (!brand) errors.push('Feld "brand" ist erforderlich (string).')
  if (!model) errors.push('Feld "model" ist erforderlich (string).')
  if (!Number.isFinite(year) || year < 1886) errors.push('Feld "year" muss eine gültige Zahl sein (>= 1886).')

  if (errors.length) return { ok: false, errors }
  return { ok: true, value: { brand, model, year } }
}
