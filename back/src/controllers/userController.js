const userController = (req, res) => {
    res.status(200)
    .send("Estamos enviando información de USERS")
}

module.exports = {
    userController,
};