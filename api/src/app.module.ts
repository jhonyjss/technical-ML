import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    SearchModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CategoriesModule,
    ItemsModule,
  ],
})
export class AppModule {}
