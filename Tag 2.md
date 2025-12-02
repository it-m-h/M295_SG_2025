# Tag2

## git - branch

 Branches erstellen und wechseln
```shell
git branch <branch-name>
git checkout <branch-name>
# oder in einem Schritt
git checkout -b <branch-name>
```

![VSCode Statusbar](/assets/Pasted%20image%2020251202084157.png)

![VSCode Bottom Left](/assets/Pasted%20image%2020251202084321.png)


## dependencies / devDependencies / scripts


## RESTful - API / Routing

- JSON als Datenformat
- HTTP-Methoden: GET, POST, PUT, DELETE
- Endpunkte strukturieren: /ressource/:id
- Statuscodes verwenden: 200, 201, 400, 404, 500
- Success- und Error-Antworten standardisieren

Auftrag: JSON antworten mit Statuscodes definieren !

EXAMPLE:
- success: true oder false
- status: HTTP-Statuscode noch einmal im Body
- message: kurze, lesbare Meldung
- data: eigentliche Nutzdaten (Objekt oder Array)
- errors: Details zu Fehlern (z. B. Validierung)
- meta: Zusatzinfos (Pagination usw.)
  
Beispiel: GET /autos/1 (Einzelnes Auto, 200 OK)
```json
{
  "success": true,
  "status": 200,
  "message": "Auto erfolgreich geladen.",
  "data": {
    "id": 1,
    "marke": "VW",
    "modell": "Golf",
    "baujahr": 2020,
    "kennzeichen": "ZH 12345",
    "created_at": "2025-12-02T09:00:00Z",
    "updated_at": "2025-12-02T09:10:00Z"
  },
  "errors": null,
  "meta": {}
}
```

Daten übertragen

```js
// index.ts
const app = express()
// Body-Parser Middleware
app.use(express.json())
// urlencoded Middleware
app.use(express.urlencoded({ extended: true }))
```

```js
// routes/cars.ts
router.post('/', (req: Request, res: Response) => {
  let htmlText = 'Ich will neues Auto mnachen<br>'

  // felder aus req.body lesen und ausgeben
  console.log(req.body)
  let Name = req.body.name
  htmlText += `Name: ${Name} <br>`
  res.status(200).send(htmlText)

  /* TIPP: in Postman bei Body als raw und JSON formatieren
    {
        "name": "Hans Muster"
    } 
    */
})
```

## Middleware / Multer

- Middleware: Funktionen, die Anfragen bearbeiten, bevor sie die Route erreichen.
- Multer: Middleware für das Hochladen von Dateien in Express.js.
- Installation: `npm install multer`
- Konfiguration: Speicherort, Dateinamen, Filter.
- Verwendung in Routen: `files('datei')`.

Example siehe **src/index.ts** und **src/routes/files.ts**


Dateinamen in Postman
![[assets/Pasted image 20251202125534.png]]

UPLOAD in Postman

![[assets/Pasted image 20251202125449.png]]


## Git - Tag & Version


```shell
git tag
git tag -a v2.0 -m "my version day 2.0"
git push origin --tags
git tag
```

Create new Release:
![[assets/Pasted image 20251202130259.png]]

