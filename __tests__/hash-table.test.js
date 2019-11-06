const HashTable = require('../hash-table');

describe('Tests Hashtable functionality', () => {

  it('Makes a new Hash using a key', () => {
    const hashtable = new HashTable();
    expect(hashtable.hash('test')).toBe(34);
  });
  
  it('Adds and Gets a key from the Hashtable', () => {
    const hashtable = new HashTable();
    hashtable.add('42', 'life, the universe, and everything');
    expect(hashtable.get('42')).toEqual('life, the universe, and everything');
  });

  it('Tests contains method of Hashtable', () => {
    const hashtable = new HashTable();
    hashtable.add('42', 'How many roads must a man walk down');
    expect(hashtable.contains('42')).toBe(true);
  });


});