import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  //* ManyToOne: Many images can have one product
  @ManyToOne(() => Product, ({ images }) => images, { onDelete: 'CASCADE' })
  product: Product;
}
