# M295_SG_2025
295 Backend für Applikationen realisieren

Kompetenz
Implementiert mittels vorgegebener Technologie eine Back-End-Schnittstelle, welche aktuelle Schnittstellen-Standards einhält.

Objekt
Back-End-Schnittstelle (z.B. Spring Boot oder Node.js). Dokumentation der Back-End-Schnittstelle. Zum Beispiel: Verwaltung einer Todo-Liste.


# 📚 Kursziel

- **HZ1**: Richtet die lokale Entwicklungs- und Laufzeitumgebung so ein, dass ein vorgegebenes Projekt entwickelt werden kann. `[g5.1]`
- **HZ2**: Implementiert und dokumentiert mittels vorgegebener Technologie eine effiziente und strukturierte Back-End-Schnittstelle zur Verwaltung (Create, Read, Update, Delete) einer existierenden Datenquelle. Nutzt dabei aktuelle Schnittstellen-Standards und hält sich an relevante Vorgaben. `[g5.2]`
- **HZ3**: Überprüft Zwischenergebnisse mit den Anforderungen (funktional, nicht-funktional, Sicherheit) und nimmt laufend Korrekturen vor. `[g5.4, g6.3, g6.4, g6.5, g6.6, g6.7, g6.8]`
- **HZ4**: Hält vorgegebene Coderichtlinien ein und überprüft laufend deren Einhaltung. `[g5.5]`
- **HZ5**: Legt Änderungen und Erweiterungen der Implementierung übersichtlich und zuverlässig in einem Softwareverwaltungssystem ab. `[g5.6]`
- **HZ6**: Implementiert im Back-End einen aktuellen Authentifizierungsmechanismus und schützt mindestens einen Bereich des Back-Ends vor anonymen Zugriffen. `[g3.2, g3.4]`

# 1. Einführung in Node.js

```shell
npm init -y
# copy package.json from Manual
npm install
# Eslint - initialisieren
npx eslint --init
```
# Update Dependencies
```shell
# aktuellen stand prüfen der Abhängigkeiten
npm outdated
# veraltete Abhängigkeiten aktualisieren
npm update
# Alle auf „neueste Major“ heben
npx npm-check-updates -u
npm install

# Abhängigkeiten überprüfen
npm run typecheck     # TS-Typen
npm run lint          # ESLint
npm run build         # tsc-Build
npm run dev / start   # App starten
```


```shell
npm install express

npm install --save-dev @types/node
# typescript installieren
sudo npm install -g typescript
# Version prüfen
tsc ---version
# TypeScript kompilieren
tsc 
# Webserver starten
node dist/index.js
```



# Jiti
npx jiti ist ein TS/ESM-Interpreter, der TypeScript- und moderne JavaScript-Dateien ohne Kompilieren sofort ausführt.

Sie müssen keinen tsc-Build machen und auch keine .js-Dateien erzeugen.

```shell
# Jiti - global installieren
npm install -g jiti
# Jiti - run
jiti src/index.ts
# lokal , nicht global installiert: npx jiti src/index.ts
```