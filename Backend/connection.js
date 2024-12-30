const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aminaas968:aminanilu@cluster0.fljqp.mongodb.net/amina?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
        });
