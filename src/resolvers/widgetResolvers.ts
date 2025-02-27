export const widgetResolvers = {
  Query: {
    widgets: async (_, { filter }, { services }) => {
      return services.widgets.getWidgets(filter);
    },
  },
  Mutation: {
    createWidget: async (_, { input }, { services }) => {
      return services.widgets.createWidget(input);
    },
    updateWidget: async (_, { id, input }, { services }) => {
      return services.widgets.updateWidget(id, input);
    },
    deleteWidget: async (_, { id }, { services }) => {
      return services.widgets.deleteWidget(id);
    },
  },
  Widget: {
    price: async (widget, _, { services }) => {
      let price = 0;

      for (const doodad of widget.doodads) {
        const doodadItem = await services.doodads.getDoodadById(doodad);

        price += doodadItem.price;
      }

      return price;
    },
  },
};
