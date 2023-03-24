import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Double } from "typeorm";

@Entity()
export class CapabilitiesInterface {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ type: 'double' })
    capability!: number;

    @Column()
    unidad_medida!: string;
    
    @CreateDateColumn()
    createdAt!: Date;
}