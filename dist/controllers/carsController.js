import * as repo from '../repo/carsRepo.js';
export async function getAllCars(req, res, next) {
    try {
        const data = await repo.list();
        res.json(data);
    }
    catch (err) {
        next(err);
    }
}
export async function createCar(req, res, next) {
    try {
        const v = validateCarInput(req.body);
        if (!v.ok)
            return res.status(400).json({ fehler: v.errors });
        const car = await repo.create(v.value);
        // Location-Header setzen (Best Practice)
        res.status(201).location(`/api/cars/${car.id}`).json(car);
    }
    catch (err) {
        next(err);
    }
}
function validateCarInput(body) {
    const errors = [];
    const brand = typeof body?.brand === 'string' ? body.brand.trim() : '';
    const model = typeof body?.model === 'string' ? body.model.trim() : '';
    const year = Number(body?.year);
    if (!brand)
        errors.push('Feld "brand" ist erforderlich (string).');
    if (!model)
        errors.push('Feld "model" ist erforderlich (string).');
    if (!Number.isFinite(year) || year < 1886)
        errors.push('Feld "year" muss eine gültige Zahl sein (>= 1886).');
    if (errors.length)
        return { ok: false, errors };
    return { ok: true, value: { brand, model, year } };
}
//# sourceMappingURL=carsController.js.map