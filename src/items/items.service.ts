import { Get, Injectable } from '@nestjs/common';
import { Item } from './items.mode';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  @Get()
  findAll() {
    return 'this is items service';
  }
  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
