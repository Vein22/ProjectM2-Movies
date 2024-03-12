const axios = require("axios");


const solicitud2 = async(formData) => {
    try {
        console.log(formData);
        const response = await axios.post("http://localhost:3000/movies", formData);
        console.log("Datos enviados al backend:", response.data);
    } catch (error) {
        console.error("Error al enviar datos al backend:", error);
    }
}



module.exports = solicitud2;
