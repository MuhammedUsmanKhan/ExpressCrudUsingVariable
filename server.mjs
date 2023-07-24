import express from 'express'
const app = express()
const port = 3001
import path from 'path';
const __dirname = path.resolve();
//app.use(express.json());

import V1Route from './versions/ApiV1/apiv1.mjs'
import V2Route from './versions/ApiV2/apiv2.mjs'

app.use(express.json())

app.use('/api/v1',V1Route)
app.use('/api/v2',V2Route)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})