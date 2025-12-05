import { openDb } from '@src/lib/ensureDatabase.js'
import type { Car, CarInput } from '../types/car.js'

export async function list(): Promise<Car[]> {
  const db = await openDb()
  return await new Promise<Car[]>((resolve, reject) => {
    db.all('SELECT * FROM cars ORDER BY id ASC', [], (err, rows) =>
      err ? reject(err) : resolve(rows as Car[])
    )
  })
}

export async function findById(id: number): Promise<Car | null> {
  const db = await openDb()
  return await new Promise<Car | null>((resolve, reject) => {
    db.get(
      'SELECT id, brand, model, year FROM cars WHERE id = ?',
      [id],
      (err, row) => (err ? reject(err) : resolve(row ? (row as Car) : null))
    )
  })
}

export async function create(input: CarInput): Promise<Car> {
  const db = await openDb()
  return await new Promise<Car>((resolve, reject) => {
    db.run(
      'INSERT INTO cars (brand, model, year) VALUES (?, ?, ?)',
      [input.brand, input.model, input.year],
      function (err) {
        if (err) return reject(err)
        resolve({ id: this.lastID, ...input })
      }
    )
  })
}

export async function replace(
  id: number,
  input: CarInput
): Promise<Car | null> {
  const db = await openDb()
  return await new Promise<Car | null>((resolve, reject) => {
    db.run(
      'UPDATE cars SET brand = ?, model = ?, year = ? WHERE id = ?',
      [input.brand, input.model, input.year, id],
      function (err) {
        if (err) return reject(err)
        resolve(this.changes === 0 ? null : { id, ...input })
      }
    )
  })
}

export async function remove(id: number): Promise<boolean> {
  const db = await openDb()
  return await new Promise<boolean>((resolve, reject) => {
    db.run('DELETE FROM cars WHERE id = ?', [id], function (err) {
      if (err) return reject(err)
      resolve(this.changes > 0)
    })
  })
}
