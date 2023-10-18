import {
  Entity,
  PrimaryColumn,
  Generated,
  OneToMany,
  JoinColumn,
  Relation,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { RetailerUser } from '../RetailerUser/RetailerUser.js';
import { Industry, LoyaltyType } from './Retailer.types.js';
import { UserStampPoint } from '../UserStampPoint/UserStampPoint.js';
import { Location } from '../Location/Location.js';
import { Stamp } from '../Stamp/Stamp.js';
import { Point } from '../Point/Point.js';

@Entity()
export class Retailer {
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
  businessName: string;

  @Column()
  businessPhoneNumber: string;

  @Column({
    type: 'enum',
    enum: Industry,
  })
  industry: Industry;

  @Column()
  category: string;

  @OneToMany(() => Location, (location) => location.retailerId)
  @JoinColumn()
  locations: Location[];

  @ManyToOne(() => RetailerUser, (retailerUser) => retailerUser.retailers)
  @JoinColumn({
    name: 'retailerUserId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_retailer_retailer_user_id',
  })
  retailerUser: Relation<RetailerUser>;

  @Column()
  retailerUserId: string;

  @OneToMany(() => Stamp, (stamp) => stamp.retailer)
  @JoinColumn()
  stamps: Stamp[];

  @OneToMany(() => Point, (Point) => Point.retailerId)
  @JoinColumn()
  points: Point[];

  @Column({ type: 'enum', enum: LoyaltyType })
  public loyaltyType: LoyaltyType;
}
