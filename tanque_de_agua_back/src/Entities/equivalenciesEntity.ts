import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Double } from "typeorm";

@Entity()
export class Equivalencies {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: 'double' })
    equivalenciade1a2!: number;
    @Column()
    unidad_medida1!: string;
    @Column({ type: 'double' })
    equivalenciade2a1!: number;
    @Column()
    unidad_medida2!: string;
    
    @CreateDateColumn()
    createdAt!: Date;
}