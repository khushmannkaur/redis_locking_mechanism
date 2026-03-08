import { createClient } from 'redis';

// Use the URL from Render's environment variables
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});

redisClient.on('error', (err) => console.error('Redis Error:', err));

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('✅ Redis Connected');
    } catch (err) {
        console.error('❌ Redis Connection Failed:', err);
    }
};

// This export MUST exist for lock.util.js to work
export { redisClient, connectRedis };
