const axios = require("axios");

const {renderCards, failData} = require("./renderCards")

    const solicitud = async() => {
        try {
            const data = await axios.get("http://localhost:3000/movies")
            renderCards(data.data);
        } catch (error) {
            console.error(error)
            failData()
        }
    }

    solicitud();
 
