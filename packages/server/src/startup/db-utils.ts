import { Database } from 'sqlite3';

export const createTables = (db: Database) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS character (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      age INTEGER DEFAULT 0,
      energy INTEGER DEFAULT 10,
      happiness INTEGER DEFAULT 10,
      health INTEGER DEFAULT 10,
      hunger INTEGER DEFAULT 0
    )
  `;
  return new Promise((resolve, reject) => {
    return db.run(sql, (result: unknown, err: any) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export const seedDatabase = (db: Database) => {
  var characters = [
  {
    name: 'Porcu',
    age: 0,
    description: 'Wild beast',
    energy: 10,
    happiness: 10,
    health: 10,
    hunger: 0
  }]

  return new Promise((resolve, reject) => {
    for (let i = 0 ; i < characters.length ; i++) {
      console.log(characters[i])
      db.run(
        `INSERT INTO character (name, age, description, energy, happiness, health, hunger) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        Object.values(characters[i]),
        (result: unknown, err: any) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
    };
  });
};
