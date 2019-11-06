const HashTable = require('../hash-table');

describe('Tests Hashtable functionality', () => {
  it('Adds and Gets a key from the Hashtable', () => {

    const hashtable = new HashTable();
    hashtable.add('42', 'life, the universe, and everything');
    expect(hashtable.get('42')).toEqual('life, the universe, and everything');
  });

  
});