class LRUCache {
  constructor(size) {
    this.size = size || 0;
    this.cache = new Map();
  }

  put(key, value) {
    const hasKey = this.cache.has();
    if (hasKey) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value);
    }
    return 1;
  }

  get(key) {
    const hasKey = this.cache.has();
    if (hasKey) {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    }
    return -1;
  }

  items() {
    return this.cache.entries();
  }
}
