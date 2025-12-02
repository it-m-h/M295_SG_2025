// Einfache In-Memory-Datenbasis (später durch DB ersetzbar)
let _cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2018 },
    { id: 2, brand: 'VW', model: 'Golf', year: 2020 }
];
let _nextId = 3;
export async function list() {
    return _cars;
}
export async function findById(id) {
    return _cars.find(c => c.id === id) ?? null;
}
export async function create(input) {
    const car = { id: _nextId++, ...input };
    _cars.push(car);
    return car;
}
export async function replace(id, input) {
    const idx = _cars.findIndex(c => c.id === id);
    if (idx === -1)
        return null;
    const updated = { id, ...input };
    _cars[idx] = updated;
    return updated;
}
export async function remove(id) {
    const before = _cars.length;
    _cars = _cars.filter(c => c.id !== id);
    return _cars.length < before;
}
//# sourceMappingURL=carsRepo.js.map