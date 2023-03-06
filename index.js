import express from "express"

const app = express()
const PORT = 3001

app.get("/", (req, res) => {
    res.status(200).send("Hl oo world")
})

app.listen(PORT, () => {
    console.log("App running")
})