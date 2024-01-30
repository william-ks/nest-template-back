import { Module } from '@nestjs/common';
import { UserRoutesModule } from './User/user-routes.module';

@Module({
  imports: [UserRoutesModule],
  controllers: [],
  providers: [],
})
export class RoutesModule {}
