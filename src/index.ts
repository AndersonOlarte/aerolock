import app from './app';

const PORT = 80;

function main() {
    try {
        app.listen(PORT);
        console.log('Server listening port: ', PORT);
    } catch (error) {
        
    }
}

main();