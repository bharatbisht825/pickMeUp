import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;  // first name of the user

  @Column()
  last_name!: string; // last name of the user

  @Column()
  org_name!: string;  // name of organization

  @Column()
  branch_address!: string; // floor or tower number

  @Column()
  branch_city!: string;  // city of organization

  @Column()
  branch_pincode!: string;  // pincode of organization



 @Column({ type: "geometry", spatialFeatureType: "Point", srid: 4326 })
  org_coordinates!: object; 

  
}   