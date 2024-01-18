import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column()
  location: string;

  @Column()
  date: Date;

  @Column()
  startTime: string; // Stored as string, format can be HH:mm

  @Column()
  endTime: string; // Stored as string, format can be HH:mm

  @Column('text')
  description: string;

  @Column('simple-json')
  mapCoordinates: { lat: number; lng: number }; // Storing as JSON
}
