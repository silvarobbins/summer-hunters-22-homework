import { buildSchema } from 'graphql';
import { Context } from '../types/global';

export const graphQLSchema = buildSchema(`
  type Character {
    id: Int!
    name: String!
    age: Int!
    description: String!
    energy: Int!
    happiness: Int!
    health: Int!
    hunger: Int!
  }

  type Query {
    characters: [Character]
  }
  type Mutation {
    updateStats(id: Int!, energy: Int!, happiness: Int!, health: Int!, hunger: Int!): Character
  }
`);

// Passing in ctx to all resolvers for dependency injection
// All resolvers have access to all handlers and globals
export const createResolvers = (ctx: Context) => ({
  characters: () => ctx.handlers.character.getAll(ctx, {}),
  updateStats: (input: {id: number, energy: number}) => ctx.handlers.character.updateStats(ctx, input)
});