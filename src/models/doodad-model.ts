import mongoose, { Document, Schema } from "mongoose";

// Interface for Doodad document
export interface IDoodad extends Document {
  name: any;
  description: any;
  widget: any;
  price: any;
  image: any;
  reviewDate: any;
  created: any;
  modfied: any;
}

// Create the schema
export const doodadSchema = new Schema<IDoodad>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  widget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Widget",
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true, // Note: image is required unlike in the Widget model
  },
  reviewDate: {
    type: Date,
    required: false,
  },
  created: {
    type: Date,
    required: true,
  },
  modfied: {
    type: Date,
    required: true,
  },
});
