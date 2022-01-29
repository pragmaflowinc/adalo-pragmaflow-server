import {MigrationInterface, QueryRunner} from "typeorm";

export class Feedback1643490871450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE "Feedback" (
            "id" SERIAL PRIMARY KEY, 
            "email" character varying, 
            "subject" character varying, 
            "content" character varying, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
          );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Feedback"`);
    }

}
