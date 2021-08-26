import mongoose from "mongoose";

const db = mongoose
    .connect("mongodb+srv://hernan:3999257Pt@cluster0.pcnlm.mongodb.net/saintJudeDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(db => console.log('DB is connected: '))
    .catch(err => console.log('ERROR: ', err));

export default db;