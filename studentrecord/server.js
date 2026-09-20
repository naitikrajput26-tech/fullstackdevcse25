import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {

        fs.readFile("index.html", "utf8", (err, data) => {

            if (err) {
                res.end("Error loading page");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
    else if (req.method === "POST" && req.url === "/add-student") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = new URLSearchParams(body);

            const student = {
                name: data.get("name"),
                roll: data.get("roll"),
                course: data.get("course"),
                email: data.get("email")
            };

            fs.readFile("students.json", "utf8", (err, file) => {

                let students = [];

                if (!err && file) {
                    students = JSON.parse(file);
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    err => {

                        if (err) {
                            res.end("Error saving student");
                            return;
                        }

                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });
    }

    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {
                res.end("Error reading students");
                return;
            }

            const students = JSON.parse(data);

            let html = "<h1>Student Records</h1>";

            students.forEach(student => {
                html += `
                    <p>                   Name: ${student.name}<br>
                    Roll Number: ${student.roll}<br>
                    Course: ${student.course}<br>
                    Email: ${student.email}
                    </p>
                    <hr>
                `;
            });

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(html);
        });
    }

    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

