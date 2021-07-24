import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    this.sum(2, 3)
    this.sub(2, 3)
    this.sumX(2, 3)
    this.times(2, 3)

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
