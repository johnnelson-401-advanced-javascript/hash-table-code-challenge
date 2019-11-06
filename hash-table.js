
const DEFAULT_HASH = size => key =>
  key.split('')
    .reduce((acc, letter, i) =>
      acc += letter.charCodeAt(0) + i, 0) % size;

class HashTable {
  constructor(size = 42, hashAlgorithm = DEFAULT_HASH) {
    this.bucket = new Array(size).fill([]);
    this.hashAlgorithm = hashAlgorithm(size);
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }

  add(key, value) {
    let index = this.hash(key);
    if(!this.bucket[index]) this.bucket[index].push([key, value]);
    else this.bucket[index] = ([key, value]);
    return index;
  }

  get(key) {
    let index = this.hash(key);
    if(!this.bucket[index]) {
      return null;
    } else {
      for(let i = 0; i < this.bucket.length; i++) {
        if(this.bucket[i][0] === key)
          return this.bucket[i][1];
      }
    }
  }

  contains(key) {
    if(this.get(key) === null) {
      return false;
    } else {
      return true;
    }
  }

}

module.exports = HashTable;