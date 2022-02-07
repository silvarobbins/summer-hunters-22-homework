import { Character, Handler } from '../../types/global';

export const addCharacter: Handler<unknown, Character[] | Error> = (ctx, _input: any) =>
  new Promise((resolve, reject) => {
    return ctx.globals.db.run(`INSERT INTO character (name, description) VALUES ($name, $description)`, {
      $name: _input.name,
      $description: _input.description,
    }
    );
});