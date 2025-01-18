import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle, MotorcycleModel } from '../entities/motorcycle.entity-mongodb';
import { ModelModel } from '../entities/model.entity-mongodb';  
import { CompanyModel } from '../entities/company.entity-mongodb';  
import mongoose from 'mongoose'; 

export class MotorcycleMapper {
  static async toDomain(motorcycleEntity: IMotorcycle): Promise<Motorcycle> {
    const modelEntity = await ModelModel.findById(motorcycleEntity.modelId);  
    const companyEntity = await CompanyModel.findById(motorcycleEntity.companyId);  
    
    if (!modelEntity) {
      throw new Error("Model not found.");
    }else if(!companyEntity){
      throw new Error("Company not found.");
    }

    return new Motorcycle(
      motorcycleEntity.id,   
      (modelEntity._id as mongoose.Types.ObjectId).toString(), 
      motorcycleEntity.mileage,        
      motorcycleEntity.status,         
      (companyEntity._id as mongoose.Types.ObjectId).toString()  
    );
  }

  static toModel(motorcycle: Motorcycle): IMotorcycle {
    return new MotorcycleModel(motorcycle);
  }
}
