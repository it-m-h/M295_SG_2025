import { openDb } from '@src/lib/ensureDatabase.js'
import type { Car, CarInput } from '../types/car.js'

// Einfache In-Memory-Datenbasis (später durch DB ersetzbar)
let _cars: Car[] = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2018 },
  { id: 2, brand: 'VW', model: 'Golf', year: 2020 },
]

let _nextId = 3

export async function list(): Promise<Car[]> {
  const db = await openDb()
  return await new Promise<Car[]>((resolve, reject) => {
    db.all(
      'SELECT * FROM cars ORDER BY id ASC',
      [],
      (err, rows) => (err ? reject(err) : resolve(rows as Car[]))
    )
  })

  //return _cars
}

export async function findById(id: number): Promise<Car | null> {
  return _cars.find((c) => c.id === id) ?? null
}

export async function create(input: CarInput): Promise<Car> {
  const car: Car = { id: _nextId++, ...input }
  _cars.push(car)
  return car
}

export async function replace(
  id: number,
  input: CarInput
): Promise<Car | null> {
  const idx = _cars.findIndex((c) => c.id === id)
  if (idx === -1) return null
  const updated: Car = { id, ...input }
  _cars[idx] = updated
  return updated
}

export async function remove(id: number): Promise<boolean> {
  const before = _cars.length
  _cars = _cars.filter((c) => c.id !== id)
  return _cars.length < before
}
