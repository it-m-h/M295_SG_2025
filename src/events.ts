// ESM-Import des Kernmoduls "events"
// (Sie können 'events' oder 'node:events' verwenden)
import { EventEmitter } from 'node:events'

// Eine gemeinsame Emitter-Instanz exportieren
export const emitter = new EventEmitter()

// Listener registrieren
emitter.on('begruessung', (name: string) => {
    console.log(`Hallo, ${name}!`)
})

// Helfer zum Auslösen des Ereignisses
export function sagHallo(name: string) {
  emitter.emit('begruessung', name)
}
