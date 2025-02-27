import mongoose, { Document, Schema } from "mongoose";
import { IDoodad } from "./doodad-model";

export interface IWidget extends Document {
  name: string;
  description: string;
  slug: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  doodads: IDoodad[];
}

export const widgetSchema = new Schema<IWidget>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

widgetSchema.virtual("doodads", function doodads() {
  return this.models.doodadModel.find({ widget: this._id });
});
