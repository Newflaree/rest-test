const mongoose = require( 'mongoose' );

const dbConnection = async() => {
  try {
    await mongoose.connect( process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log( 'DataBase ONLINE' );

  } catch ( err ) {
    console.log( err );
    throw new Error( 'Failed to start database' );

  } 
}

module.exports = {
  dbConnection
}
