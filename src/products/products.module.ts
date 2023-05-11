import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductImage } from './entities';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AuthModule } from './../auth/auth.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage]),AuthModule],
  exports: [
    ProductsService,
    // Is typical that we need to use a repository (in this case Product and ProductImage repositories)
    // In an external module, so we can export it and use it anywhere we need
    TypeOrmModule,
  ],
})
export class ProductsModule {}
