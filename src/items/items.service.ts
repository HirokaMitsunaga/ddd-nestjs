import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ItemsService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }
  async findById(id: string): Promise<Item> {
    const found = await this.prismaService.item.findUnique({
      where: {
        id: id,
      },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createItemDto: CreateItemDto, userId: string): Promise<Item> {
    const { name, price, description } = createItemDto;

    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
        userId,
      },
    });
  }

  async updateStatus(id: string): Promise<Item> {
    return await this.prismaService.item.update({
      data: {
        status: 'SOLD_OUT',
      },
      where: {
        id: id,
      },
    });
  }
  async delete(id: string, userId: string) {
    return await this.prismaService.item.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
  }
}
