import { it, vi } from 'vitest'
import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'

import { showError } from './dom'

// get html path in current working directory
const htmlDocPath = path.join(process.cwd(), 'index.html')
// read html file and convert it to a string
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
// render html page virtually
document.write(htmlDocumentContent)
vi.stubGlobal('document', document)

it('first test', () => {
  showError('test')
})
