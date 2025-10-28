import {Module} from '@nestjs/common';
import {MathService} from './math.service';

@Module({
    providers: [
        {
            provide: MathService,
            useClass: MathService,
        },
        {
            provide: 'PI',
            useValue: 3.1416,
        },
        {
            provide: 'RANDOM_NUMBER',
            useFactory: () => Math.floor(Math.random() * 100),
        },
    ],
    exports: [MathService, 'PI', 'RANDOM_NUMBER'],
})
export class MathModule {}