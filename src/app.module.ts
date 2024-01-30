import { Module } from '@nestjs/common';
import { RoutesModule } from './api/routes.module';

@Module({
  imports: [RoutesModule],
})
export class AppModule {}
