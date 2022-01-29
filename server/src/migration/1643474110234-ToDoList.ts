import {MigrationInterface, QueryRunner} from "typeorm";

export class ToDoList1643474110234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE "ToDoList" (
            "id" SERIAL PRIMARY KEY, 
            "title" character varying NOT NULL UNIQUE, 
            "description" character varying NOT NULL, 
            "status" character varying NOT NULL, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
          );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ToDoList"`);
    }

}
