import { MigrationInterface, QueryRunner } from "typeorm";

export class Component1643405135483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "Component" (
        "id" SERIAL PRIMARY KEY, 
        "componentId" character varying NOT NULL UNIQUE, 
        "name" character varying NOT NULL, 
        "libraryName" character varying NOT NULL, 
        "description" character varying NOT NULL, 
        "githubUrl" character varying NOT NULL, 
        "youtubeUrl" character varying NOT NULL, 
        "icon" character varying NOT NULL, 
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Component"`);
  }
}
