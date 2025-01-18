import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle, MotorcycleModel } from '../entities/motorcycle.mongo.entity';
import { ModelModel } from '../entities/model.mongo.entity';  
import { CompanyModel } from '../entities/company.entity-mongodb';  
import mongoose from 'mongoose'; 

export class MotorcycleMapper {
  static async toDomain(motorcycleEntity: IMotorcycle): Promise<Motorcycle> {
    const modelEntity = await ModelModel.findById(motorcycleEntity.modelId);  
    const companyEntity = await CompanyModel.findById(motorcycleEntity.companyId);  
    
    if (!modelEntity || !companyEntity) {
      throw new Error("Model or Company not found.");
    }

    return new Motorcycle(
      motorcycleEntity.motorcycleId,   
      (modelEntity._id as mongoose.Types.ObjectId).toString(), 
      motorcycleEntity.mileage,        
      motorcycleEntity.status,         
      (companyEntity._id as mongoose.Types.ObjectId).toString()  
    );
  }

  static toModel(motorcycle: Motorcycle): IMotorcycle {
    return new MotorcycleModel({
      motorcycleId: motorcycle.motorcycleId,
      modelId: motorcycle.modelId,  
      mileage: motorcycle.mileage,
      status: motorcycle.status,
      companyId: motorcycle.companyId, 
    });
  }
}
