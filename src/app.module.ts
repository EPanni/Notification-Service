import { Module } from '@nestjs/common';
import { DatabaseModule } from './application/infra/database/database.module';
import { HttpModule } from './application/infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
