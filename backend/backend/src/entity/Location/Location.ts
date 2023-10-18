import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { Retailer } from '../Retailer/Retailer';
import { UserStampPoint } from '../UserStampPoint/UserStampPoint';

@Entity()
export class Location {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  postalCode: string;

  @Column()
  country: string;

  @Column('int', { nullable: true })
  unit: number;

  @ManyToOne(() => Retailer, (retailer) => retailer.locations)
  @JoinColumn({
    name: 'retailerId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_location_retailer_id',
  })
  retailerId: Relation<Retailer>;

  @OneToMany(
    () => UserStampPoint,
    (userStampPoint) => userStampPoint.locationId
  )
  @JoinColumn()
  userRetailerPoints: UserStampPoint[];
}
