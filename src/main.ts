import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HelloService } from './hello/hello.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const helloService = app.get(HelloService);
  console.log(helloService.greet('Kale'));

  await app.close();
}
bootstrap();
