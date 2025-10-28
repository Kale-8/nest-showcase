import { Module } from '@nestjs/common';
import { MathModule } from '../math/math.module';
import { SharedModule } from '../shared/shared.module';
import { HelloService } from './hello.service';

@Module({
  imports: [MathModule, SharedModule],
  providers: [HelloService],
})
export class HelloModule {}
