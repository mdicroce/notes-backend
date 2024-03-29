const mongoose = require('mongoose');
const {MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV} = process.env;

const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI;

const connectNow = () => {
    mongoose.connect(conectionString,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(
        console.log("connection")
    )
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectNow