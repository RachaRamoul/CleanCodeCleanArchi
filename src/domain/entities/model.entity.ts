// domain/entities/model.entity.ts

export class Model {
  constructor(
    public modelId: string,
    public name: string,
    public manufacturer: string,  // Assurez-vous que cette propriété existe ici
    public maintenanceFrequency: number,
  ) {}
}
