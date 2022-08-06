const {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} = require("typeorm");

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
