import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateMotorcyclePartOrder1737197876885 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'motorcycle_part_orders',
        columns: [
          {
            name: 'orderId',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'partId',
            type: 'uuid',
          },
          {
            name: 'cost',
            type: 'decimal',
          },
          {
            name: 'orderDate',
            type: 'timestamp',
          },
          {
            name: 'deliveryDate',
            type: 'timestamp',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'motorcycle_part_orders',
      new TableForeignKey({
        columnNames: ['partId'],
        referencedColumnNames: ['partId'],
        referencedTableName: 'motorcycle_parts', 
        onDelete: 'CASCADE', 
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('motorcycle_part_orders');
    const foreignKey = table!.foreignKeys.find(fk => fk.columnNames.indexOf('motorcyclePartId') !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey('motorcycle_part_orders', foreignKey);
    }

    await queryRunner.dropTable('motorcycle_part_orders');
  }
}

