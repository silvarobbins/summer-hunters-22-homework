import { Character, Handler } from '../../types/global';

export const ageCharacter: Handler<unknown, Character[] | Error> = (ctx, _input: any) =>
  new Promise((resolve, reject) => {
    return ctx.globals.db.run('UPDATE character SET age = $age WHERE id = $id', {
      $age: _input.age,
      $id:_input.id,
    });
  });
