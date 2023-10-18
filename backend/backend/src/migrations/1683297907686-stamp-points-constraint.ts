import { MigrationInterface, QueryRunner } from 'typeorm';

export class StampPointsConstraint1683297907686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction();
    try {
      await queryRunner.query(
        `ALTER TABLE "userStampPoint" ADD CONSTRAINT "stampId_or_pointId" CHECK (("stampId" IS NULL AND "pointId" IS NOT NULL) OR ("stampId" IS NOT NULL AND "pointId" IS NULL))`
      );

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction();

    try {
      await queryRunner.query(
        'ALTER TABLE "userStampPoint" DROP CONSTRAINT "stampId_or_pointId"'
      );

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    }
  }
}
