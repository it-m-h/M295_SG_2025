import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Datumspräfix generieren
function generatePrefix() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')

  return `${y}.${m}.${d}.${hh}.${mm}_`
}

// Eigene Multer-Storage-Konfiguration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')   // Ordner
  },
  filename: (req, file, cb) => {
    const prefix = generatePrefix()
    const original = file.originalname
    cb(null, prefix + original)
  }
})

const upload = multer({ storage })

const router = Router()

// Funktion, die 1 oder mehrere Dateien verarbeiten kann
function handleUpload(req: Request, res: Response) {
  const files = req.files as Express.Multer.File[]
  const file = req.file as Express.Multer.File

  if (!file && (!files || files.length === 0)) {
    return res.status(400).json({ fehler: 'Keine Datei hochgeladen' })
  }

  if (file) {
    return res.status(200).json({
      nachricht: 'Eine Datei erfolgreich hochgeladen',
      datei: file
    })
  }

  return res.status(200).json({
    nachricht: 'Mehrere Dateien erfolgreich hochgeladen',
    dateien: files
  })
}

// Eine einzige Route – erkennt single + multi automatisch
router.post('/', upload.any(), handleUpload)

// Route um alle Dateien als json zurückzugeben
router.get('/', (req: Request, res: Response) => {
  const uploadDir = path.join(process.cwd(), 'uploads')

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ fehler: 'Fehler beim Lesen des Upload-Verzeichnisses' })
    }

    const fileList = files.map((fileName) => ({
      datei: fileName
    }))

    return res.status(200).json({ dateien: fileList })
  })
})

export default router
