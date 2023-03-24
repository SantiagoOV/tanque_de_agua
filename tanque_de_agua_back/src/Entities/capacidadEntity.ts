import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, Double } from "typeorm";
import { Historical } from "./historicalEntity";

@Entity()
export class Capabilities {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'double' })
    capability!: number;

    @Column()
    unidad_medida!: string;
    
    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Historical, historical => historical.capabilities)
    historical!: Historical[];
}