import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  @Get()
  findAll() {
    return 'this is items service';
  }
}
