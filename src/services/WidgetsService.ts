import { IWidget } from "../models/widgetModel";

export class WidgetService {
  constructor(private readonly models: any) {}

  async createWidget(widget: IWidget): Promise<IWidget> {
    widget.slug = widget.name.toLowerCase().replace(/ /g, "-");

    return this.models.widgetModel.create(widget);
  }

  async getWidgets(): Promise<IWidget[]> {
    return this.models.widgetModel.find();
  }

  async getWidgetById(id: string): Promise<IWidget | null> {
    return this.models.widgetModel.findById(id);
  }

  async updateWidget(id: string, widget: IWidget): Promise<IWidget | null> {
    return this.models.widgetModel.findByIdAndUpdate(id, widget, { new: true });
  }

  async deleteWidget(id: string): Promise<boolean> {
    return this.models.widgetModel.findByIdAndDelete(id);
  }
}
