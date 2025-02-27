import { IDoodad } from "../models/doodad-model";

export class DoodadService {
  constructor(private readonly models: any) {}

  async createDoodad(doodad: IDoodad): Promise<IDoodad> {
    return this.models.doodadModel.create(doodad);
  }

  async getDoodads(filter: any): Promise<IDoodad[]> {
    return this.models.doodadModel.find(filter);
  }

  async getDoodadById(id: string): Promise<IDoodad | null> {
    return this.models.doodadModel.findById(id);
  }

  async updateDoodad(id: string, doodad: IDoodad): Promise<IDoodad | null> {
    return this.models.doodadModel.findByIdAndUpdate(id, doodad, { new: true });
  }

  async setPrice(id: string, price: number): Promise<IDoodad | null> {
    return this.models.doodadModel.findByIdAndUpdate(
      id,
      { price },
      { new: true }
    );
  }

  async setImage(id: string, image: string): Promise<IDoodad | null> {
    return this.models.doodadModel.findByIdAndUpdate(
      id,
      { image },
      { new: true }
    );
  }

  async deleteDoodad(id: string): Promise<boolean> {
    return this.models.doodadModel.findByIdAndDelete(id);
  }
}
