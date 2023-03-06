import express, { response } from "express";
import merchant_model from "./merchant_model";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.status(200).send("Hl oo world");
});

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers"
    );
    next();
});

app.get("/", (req, res) => {
    merchant_model
        .getMerchants()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

app.post('/merchants', (req, res) => {
    merchant_model
        .createMerchant(req.body)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

app.delete('/merchants/:id', (req, res) => {
    merchant_model
        .deleteMerchant(req.params.id)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

app.listen(PORT, () => {
    console.log("App running");
});
