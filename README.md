# M295_SG_2025 - Tag 3
295 Backend für Applikationen realisieren

## Rückblick, was bereits erledigt wurde:
- Grundlegendes Setup des Projekts
    - dependencies installieren (Express, Mongoose, Multer, Swagger UI)
    - Projektstruktur erstellen (Ordner für Routen, Modelle, Controller, Middleware)
    - devDependencies einrichten (Nodemon für automatischen Neustart)
    - prettier konfigurieren für konsistente Codeformatierung
    - linting konfigurieren (ESLint)
- Erstellung der grundlegenden API-Endpunkte (Routing)
    - GET, POST, PUT, DELETE Endpunkte für Cars 
- Integration von Middleware (Multer für Dateiuploads)
    - file upload handling 
- Testen der API-Endpunkte mit Postman


## Server start & API trennen

    - Server - Skript in eine eigene Datei auslagern (server.ts)
    - APP - Skript in eine eigene Datei auslagern (app.ts)
    - Konfiguration in eine eigene Datei auslagern (config.ts)
    - package.json Skript anpassen um den Server zu starten ("cars": "tsc && node ./dist/server.js")
    - testen ob der Server weiterhin funktioniert (npm run cars & http://localhost:5000/getCar)

## Datenbanken (Kap.10)

    - sqlite3 - Dateibasierte Speicherung
    - CRUD Operationen umsetzen mit sqlite3
    - fakultativ: Nutzung von Prisma als ORM

## Swagger UI & Postman (Kap.15)

    - Testing der API-Endpunkte mit Swagger UI
    - Testing der API-Endpunkte mit Postman 

## Nächste Schritte:

    - Erweiterte Fehlerbehandlung und Validierung der Daten hinzufügen (Kap.9 & 13)