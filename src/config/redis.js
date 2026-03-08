// Use the REDIS_URL from your environment variables
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Handle Redis connection errors
redisClient.on('error', (err) => {
    console.error('Redis Error:', err);
});

// Function to connect to Redis
const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('✅ Redis Connected');
    } catch (err) {
        console.error('❌ Failed to connect to Redis:', err);
    }
};
