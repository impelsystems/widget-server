import { IWidget, widgetSchema } from "./widgetModel";
import { IDoodad, doodadSchema } from "./doodad-model";
import mongoose from "mongoose";

export const createModels = (db: mongoose.Connection) => ({
  widgetModel: db.model<IWidget>("Widget", widgetSchema),
  doodadModel: db.model<IDoodad>("Doodad", doodadSchema),
});
