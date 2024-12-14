export class Model {
    modelId: string;
    name: string;
    maintenanceFrequency: number; // in km
  
    constructor(modelId: string, name: string, maintenanceFrequency: number) {
      this.modelId = modelId;
      this.name = name;
      this.maintenanceFrequency = maintenanceFrequency;
    }
  
  }
  