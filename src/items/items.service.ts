import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ItemsService {
  constructor(private prismaService: PrismaService) {}
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }
  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;

    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      },
    });
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = 'SOLD_OUT';
    return item;
  }
  delete(id: string) {
    return this.items.filter((item) => item.id !== id);
  }
}
