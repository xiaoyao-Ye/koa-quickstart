import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    username: string;

    @Column()
    date: Date;

    @Column()
    content: string;
}