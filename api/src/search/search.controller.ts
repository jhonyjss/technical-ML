import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { IQuery } from 'src/interfaces/search/IQuery.interface';
import { ApiQuery } from '@nestjs/swagger';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiQuery({ name: 'q', example: 'roupas' })
  @ApiQuery({ name: 'offset', required: false, example: 2 })
  @ApiQuery({ name: 'limit', required: false, example: 20 })
  findAll(@Query() query: IQuery) {
    return this.searchService.findAll(query);
  }
}
