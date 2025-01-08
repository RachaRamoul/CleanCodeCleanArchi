"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcyclePart = void 0;
class MotorcyclePart {
    constructor(partId, name, description, stockQuantity, cost, lowStockAlert) {
        this.partId = partId;
        this.name = name;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.cost = cost;
        this.lowStockAlert = lowStockAlert;
    }
}
exports.MotorcyclePart = MotorcyclePart;
