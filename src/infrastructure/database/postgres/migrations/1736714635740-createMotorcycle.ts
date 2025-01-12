import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMotorcycle1736715235615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "motorcycles",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "motorcycleId",
                        type: "varchar",
                        isNullable: false,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "modelId",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "mileage",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["AVAILABLE", "IN_MAINTENANCE", "RENTED", "DECOMMISSIONED"],
                        isNullable: false,
                    },
                    {
                        name: "companyId",
                        type: "uuid",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("motorcycles");
    }
}
