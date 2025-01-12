export class MotorcyclePart {
    partId: string;
    name: string;
    description?: string; 
    stockQuantity: number;
    cost: number;
    lowStockAlert: boolean;
  
    constructor(partId: string, name: string, description: string | undefined, stockQuantity: number, cost: number, lowStockAlert: boolean) {
      this.partId = partId;
      this.name = name;
      this.description = description;
      this.stockQuantity = stockQuantity;
      this.cost = cost;
      this.lowStockAlert = lowStockAlert;
    }
  
  }
  