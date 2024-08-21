import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OtpToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: string;

  @Column({ type: 'varchar', width: 6 })
  otp_code: string;

  @Column({ type: 'date' })
  expires_at: string;

  @Column()
  is_used: boolean;

  @Column({ type: 'date' })
  created_at: string;
}
