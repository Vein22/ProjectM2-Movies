const axios = require("axios");

const {renderCards, failData} = require("./renderCards")

    const solicitud = async() => {
        try {
            const data = await axios.get("https://students-api.2.us-1.fl0.io/movies")
            renderCards(data.data);
        } catch (error) {
            failData()
        }
    }

    solicitud();
 
