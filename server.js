const express = require("express");
const app = express();



app.get("/api", function(req, res){
res.json({"name" : "John"})
})

app.listen(3000, function(){
console.log("App is running on 3000")
})
