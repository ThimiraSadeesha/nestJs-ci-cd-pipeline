import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): { status: string; uptime: number; timestamp: string } {
    return {
      status: 'OK',
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    };
  }


}
