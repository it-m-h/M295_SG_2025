// Einheitliche Typen für Autos
export interface Car {
  id: number
  brand: string
  model: string
  year: number
}

// Eingabedaten für POST/PUT (Omit schliesst id aus dem Type aus)
export type CarInput = Omit<Car, 'id'>