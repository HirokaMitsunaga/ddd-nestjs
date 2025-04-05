import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  //外部からもPrismaを使えるように以下を設定
  exports: [PrismaService],
})
export class PrismaModule {}
