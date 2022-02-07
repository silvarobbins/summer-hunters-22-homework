import { Character, Handler } from '../../types/global';

export const updateStats: Handler<unknown, Character[] | Error> = (ctx, _input: any) =>
  new Promise((resolve, reject) => {
    return ctx.globals.db.run('UPDATE character SET energy = $energy, happiness = $happiness, health = $health, hunger = $hunger WHERE id = $id', {
      $energy:_input.energy,
      $happiness: _input.happiness,
      $health: _input.health,
      $hunger: _input.hunger,
      $id:_input.id,
    });
  });
