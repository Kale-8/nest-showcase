import { Inject, Injectable } from '@nestjs/common';
import { MathService } from '../math/math.service';
import { LoggerService } from '../shared/logger.service';

@Injectable()
export class HelloService {
  constructor(
    private readonly mathService: MathService,
    private readonly logger: LoggerService,
    @Inject('PI') private readonly pi: number,
    @Inject('RANDOM_NUMBER') private readonly random: number,
  ) {}

  greet(name: string) {
    this.logger.log(`Calculating something for ${name}...`);
    const sum = this.mathService.add(5, 10);
    this.logger.log(`Sum is ${sum}, π is ${this.pi}, and random is ${this.random}`);
    return `Hello ${name}! Your lucky number is ${this.random}.`;
  }
}
