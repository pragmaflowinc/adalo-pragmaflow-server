import {MigrationInterface, QueryRunner} from "typeorm";

export class VimeoVideos1643474082666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE "VimeoVideos" (
            "id" SERIAL PRIMARY KEY, 
            "title" character varying NOT NULL UNIQUE, 
            "description" character varying NOT NULL, 
            "videoUrl" character varying NOT NULL, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
          );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "VimeoVideos"`);
    }

}
