import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMotorCyclePart1737197893979 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'motorcycle_parts',
        columns: [
          {
            name: 'partId',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cost',
            type: 'decimal',
          },
          {
            name: 'stockQuantity',
            type: 'int',
          },
          {
            name: 'lowStockAlert',
            type: 'boolean',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true, 
            default: "''", 
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('motorcycle_parts');
  }
}
