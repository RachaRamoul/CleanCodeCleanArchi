"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcyclePartOrder = void 0;
class MotorcyclePartOrder {
    constructor(orderId, motorcyclePart, orderDate, cost, deliveryDate) {
        this.orderId = orderId;
        this.motorcyclePart = motorcyclePart;
        this.orderDate = orderDate;
        this.cost = cost;
        this.deliveryDate = deliveryDate;
    }
}
exports.MotorcyclePartOrder = MotorcyclePartOrder;
