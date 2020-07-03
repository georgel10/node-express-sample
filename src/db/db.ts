import { connect, connection} from 'mongoose';

export function connectDB() {
    connect('mongodb://localhost:27017/sample', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.on('connecting', () => {
        console.log('connecting to Database...');
    });

    connection.on('error', async (error: Error) => {
        console.error('Error in Database connection: ' + error);
    });

    connection.on('connected', () => {
        console.log(`Database connected`);
    });

    connection.once('open', () => {
        console.log('Database connection opened!');
    });

    connection.on('reconnected', () => {
        console.log('Database reconnected!');
    });

    connection.on('disconnected', () => {
        console.log('Database disconnected!');
    });
}
