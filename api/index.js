import express from 'express'
import { docPageDataShort, docPageData } from '../static/data.ts'

const app = express()

const getContent = (dataRoot) => dataRoot.data.content.docBodyElements

app.get('/docPageDataShort', (req, res) => {
  res.send(getContent(docPageDataShort))
})

app.get('/docPageData', (req, res) => {
  res.send(getContent(docPageData))
})

module.exports = app
