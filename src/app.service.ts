import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sum(a: number, b: number): number {
    return a + b
  }

  sub(a: number, b: number): number {
    return a - b
  }

  times(a: number, b: number): number {
    return a * b
  }

  sumX(a: number, b: number): number {
    return a + b + a
  }

}
