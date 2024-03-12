const app = require("./src/server")
const conDb = require("./src/config/conDb")

conDb().then((res) => {
    app.listen(3000, () => {
        console.log("Server listening on port 3000");
    });
})
.catch((err) => {
    console.log("Failed to connect to database");
});

