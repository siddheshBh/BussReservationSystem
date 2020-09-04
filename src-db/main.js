const express = require("express");
const app = express();
const multer = require("multer");


const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const add = require("./db.add.user")


app.post("/auth-user", async (req, res) => {
    try {
        const input = req.body;
        const resu = await add.authenticateUser(input);
        console.log(resu);
        res.json({ opr: true });
    }
    catch (err) {
        console.log(err);
        res.json({ opr: false });
    }
});

app.post("/adduser", (req, res) => {
    try {
        const input = req.body;
        console.log(input)
        let result = add.adduser(input);
        console.log(result)

        res.json({
            message: "success"
        })
    } catch (err) {
        res.json({
            message: "Failure"
        })
    }

});

app.post("/update", async (req, res) => {
    try {
        const input = req.body;

        await add.updateuser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});


app.listen(3000);