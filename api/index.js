import express from 'express'
import { docPageDataShort, docPageData } from './documentPageData/data.ts'

const app = express()

const content = (dataRoot) => dataRoot.data.content.docBodyElements;

app.get('/docPageDataShort', (req, res) => {
  res.send(content(docPageDataShort))
})

app.get('/docPageData', (req, res) => {
  res.send(content(docPageData))
})

module.exports = app

