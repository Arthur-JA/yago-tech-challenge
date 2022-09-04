import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './configuration';
import { FrontModule } from './front/front.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.dbUrl, config.dbOptions),
    FrontModule,
  ],
})
export class AppModule {}
