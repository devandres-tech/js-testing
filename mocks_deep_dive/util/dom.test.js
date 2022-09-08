import { beforeEach, expect, it, vi } from 'vitest'
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
// replace it globally
vi.stubGlobal('document', document)

beforeEach(() => {
  // render html page virtually and override it
  document.body.innerHTML = ''
  document.write(htmlDocumentContent)
})

it('should add an error paragraph to the id="errors" element', () => {
  showError('Test')

  const errorsElement = document.getElementById('errors')
  const errorParagraph = errorsElement.firstElementChild

  expect(errorParagraph).not.toBeNull()
})

it('should not contain an error paragraph initially', () => {
  const errorsElement = document.getElementById('errors')
  const errorParagraph = errorsElement.firstElementChild

  expect(errorParagraph).toBeNull()
})
