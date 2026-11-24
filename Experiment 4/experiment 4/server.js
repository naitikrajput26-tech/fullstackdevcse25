import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.static("."));


// GET all requests
app.get("/api/requests", (req, res) => {

    const data = fs.readFileSync("requests.json", "utf-8");

    const requests = JSON.parse(data);

    res.json(requests);
});


// GET request by ID
app.get("/api/requests/:id", (req, res) => {

    const data = fs.readFileSync("requests.json", "utf-8");

    const requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    const request = requests.find(r => r.id === id);

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});


// POST - Add request
app.post("/api/requests", (req, res) => {

    const data = fs.readFileSync("requests.json", "utf-8");

    const requests = JSON.parse(data);

    const newRequest = {
        id: requests.length + 1,
        name: req.body.name,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.json(newRequest);
});


// PUT - Update request
app.put("/api/requests/:id", (req, res) => {

    const data = fs.readFileSync("requests.json", "utf-8");

    const requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    const request = requests.find(r => r.id === id);

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    request.name = req.body.name || request.name;
    request.email = req.body.email || request.email;
    request.category = req.body.category || request.category;
    request.description = req.body.description || request.description;
    request.priority = req.body.priority || request.priority;

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.json(request);
});


// DELETE request
app.delete("/api/requests/:id", (req, res) => {

    const data = fs.readFileSync("requests.json", "utf-8");

    let requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    requests = requests.filter(r => r.id !== id);

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.json({
        message: "Request deleted successfully"
    });
});


// Start server
app.listen(5000, () => {

    console.log("Server running at http://localhost:5000");

});