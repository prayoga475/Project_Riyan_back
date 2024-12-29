const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./config');
const cors = require('cors')
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 3001;

//middleware
app.use(cors())
app.use(bodyParser.json());

//routes
app.use('/api', contactRoutes);


//Sinkronisasi database dan server
sequelize.sync({force:false})//set "true" untuk reset database mode dev
.then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
})

.catch((error) => {
    console.error('Unnable to sync database:', error);
});