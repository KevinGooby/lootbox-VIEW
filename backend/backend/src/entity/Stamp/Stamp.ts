import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Retailer } from '../Retailer/Retailer';
import { UserStampPoint } from '../UserStampPoint/UserStampPoint';

@Entity()
@Index('retailerId_name-unique', ['retailerId', 'name'], { unique: true })
export class Stamp {
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
  name: string;

  @Column('int', { array: true })
  redemptionCheckpoints: number[];

  @Column()
  discountPercentage: number;

  @Column('int')
  visitsNeededPerRedemption: number;

  @ManyToOne(() => Retailer, (retailer) => retailer.stamps)
  @JoinColumn({
    name: 'retailerId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_stamp_retailer_id',
  })
  retailer: Relation<Retailer>;

  @Column()
  retailerId: string;

  @OneToMany(() => UserStampPoint, (userStampPoint) => userStampPoint.stampId)
  @JoinColumn()
  userStampPoints: UserStampPoint[];
}
