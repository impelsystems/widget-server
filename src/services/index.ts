import { WidgetService } from "./WidgetsService";
import { DoodadService } from "./DoodadService";

export const createServices = (models: any) => ({
  widgets: new WidgetService(models),
  doodads: new DoodadService(models),
});
