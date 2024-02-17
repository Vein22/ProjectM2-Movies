const {renderCards, failData} = require("./renderCards")

let solicitud = $.get("https://students-api.2.us-1.fl0.io/movies")
.done(renderCards)
.fail(failData);
  
 
