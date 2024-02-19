const axios = require("axios");

const {renderCards, failData} = require("./renderCards")

    const solicitud = async() => {
        try {
            const data = await axios.get("https://henry-movie-dev-sgtm.3.us-1.fl0.io")
            renderCards(data.data);
        } catch (error) {
            failData()
        }
    }

    solicitud();
 
