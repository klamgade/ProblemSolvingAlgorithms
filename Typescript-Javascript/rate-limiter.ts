class RateLimiter {
    private readonly maxTokens: number;
    private readonly fillRate: number;
    private tokens: number;
    private lastRefillTime: number;

    constructor(maxTokens: number, fillRate: number) {
        if (maxTokens <= 0 || fillRate <= 0) {
            throw new Error("maxTokens and fillRate must be positive numbers.");
        }

        this.maxTokens = maxTokens;
        this.fillRate = fillRate;
        this.tokens = maxTokens; // Initialize with a full bucket
        this.lastRefillTime = Date.now(); // Store timestamp in milliseconds
    }

    private refill(): void {
        try {
            const now = Date.now();
            const elapsedTime = (now - this.lastRefillTime) / 1000; // Convert ms to seconds
            const newTokens = elapsedTime * this.fillRate;

            // Ensure tokens do not exceed the maximum limit
            this.tokens = Math.min(this.maxTokens, this.tokens + newTokens);
            this.lastRefillTime = now;
        } catch (error) {
            console.error("Error in refill method:", error);
        }
    }

    public consume(desiredTokens: number): boolean {
        if (desiredTokens <= 0) {
            console.warn("Invalid token request:", desiredTokens);
            return false;
        }

        this.refill(); // Ensure tokens are updated before checking availability

        if (desiredTokens > this.tokens) {
            console.warn(`Rate limit exceeded: Requested ${desiredTokens}, Available ${this.tokens}`);
            return false; // Not enough tokens available
        }

        this.tokens -= desiredTokens;
        console.info(`Consumed ${desiredTokens} tokens. Remaining: ${this.tokens}`);
        return true;
    }
}


const rateLimiter = new RateLimiter(10, 2);
console.log(rateLimiter.consume(5)); // true
console.log(rateLimiter.consume(6)); // false
console.log(rateLimiter.consume(10)); // false