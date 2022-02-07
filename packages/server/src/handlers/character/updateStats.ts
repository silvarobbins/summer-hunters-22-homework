import { Character, Handler } from '../../types/global';
import { getAll } from './getAll';

export const updateStats: Handler<unknown, Character[] | Error> = (ctx, _input: any) =>
  new Promise((resolve, reject) => {
    ctx.globals.db.run('UPDATE character SET age = $age, energy = $energy, happiness = $happiness, health = $health, hunger = $hunger WHERE id = $id', {
      $age: _input.age,
      $energy:_input.energy,
      $happiness: _input.happiness,
      $health: _input.health,
      $hunger: _input.hunger,
      $id:_input.id,
    }, (err) => {
      if (err) {
        reject(err);
      }
      ctx.globals.db.all('SELECT * FROM character', [], (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    });
  });
