import {Injectable} from '@nestjs/common';
import * as os from 'os';

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

    getServerInfo(): object {
        return {
            hostname: os.hostname(),
            osType: os.type(),
            platform: os.platform(),
            arch: os.arch(),
            uptime: os.uptime(),
            totalMemoryMB: (os.totalmem() / 1024 / 1024).toFixed(2),
            freeMemoryMB: (os.freemem() / 1024 / 1024).toFixed(2),
            cpuCount: os.cpus().length,
        };
    }


}
