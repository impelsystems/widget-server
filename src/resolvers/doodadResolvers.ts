export const doodadResolvers = {
  Query: {
    doodads: (_, args) => ({ ...args }),
  },
  Doodads: {
    list: async (_, { filter }, { services }) => {
      return services.doodads.getDoodads(filter);
    },
    count: async (_, { filter }, { services }) => {
      return services.doodads.getDoodadsCount(filter);
    },
  },
  Mutation: {
    createDoodad: async (_, { input }, { services }) => {
      return services.doodads.createDoodad(input);
    },
    doodad: (_, args) => ({ ...args }),
  },
  DoodadMutation: {
    update: ({ id }, input, { services }) =>
      services.doodads.updateDoodad(id, input),
    setPrice: ({ id }, price, { services }) =>
      services.doodads.setPrice(id, price),
    setImage: ({ id }, image, { services }) =>
      services.doodads.setImage(id, image),
    delete: ({ id }, _, { services }) => services.doodads.deleteDoodad(id),
  },
};
