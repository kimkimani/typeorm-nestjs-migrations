import { MigrationInterface, Table, QueryRunner } from "typeorm"

export class Task1696523336681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tasks",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: "title",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "isCompleted",
                    type: "boolean",
                    isNullable: false,
                    default: false,
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
