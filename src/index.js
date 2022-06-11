import app from './app.js';
import { sequelize } from './database/database.js';

const PORT = 9901;

// Server initialization
const server = async () => {
    try {
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

    } catch (error) {
        console.error('Unable to connect to server', error);
    }
};

server();