import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMotorcycleRideTest1737197923819 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'motorcycle_ride_tests',
        columns: [
          {
            name: 'motorcycleRideTestId',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'motorcycleId',
            type: 'varchar',
          },
          {
            name: 'driverId',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'testDuration',
            type: 'int',
          },
          {
            name: 'incidentReport',
            type: 'text',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('motorcycle_ride_tests');
  }
}
