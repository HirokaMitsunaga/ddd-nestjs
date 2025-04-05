import { Get, Injectable } from '@nestjs/common';
import { Item } from './items.mode';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  @Get()
  findAll(): Item[] {
    return this.items;
  }
  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
