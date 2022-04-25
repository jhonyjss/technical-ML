import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiQuery({
    name: 'ids',
    required: true,
    example: 'MLB2045690967,MLB2007448619',
  })
  compareItems(@Query('ids') ids: string) {
    return this.itemsService.compareItems(ids);
  }
}
