class TimeLimitedCache {
    map = new Map();
    constructor() {
     
    }
    
    set(key: number, value: number, duration: number): boolean {
        const has = this.map.has(key);
        if (has) {
           clearTimeout(this.map.get(key).ref);
        }
        this.map.set(key, {
            value,
            ref: setTimeout(() => this.map.delete(key), duration)
        });
        return has;
    }   
    
    get(key: number): number {
        return this.map.has(key) ? this.map.get(key).value : -1;
    }
    
    count(): number {
        return this.map.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */