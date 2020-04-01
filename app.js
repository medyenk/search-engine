const express = require('express');
const app = express(); //to execute the express.
const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public')); //make express aware of the static folder public and views
app.use(express.static('views'));









app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})