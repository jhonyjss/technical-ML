import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { ISearchResults } from 'src/interfaces/search/ISearchResult.interface';
import { IQuery } from 'src/interfaces/search/IQuery.interface';

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {}

  async findAll(q: IQuery): Promise<ISearchResults[]> {
    const observable = this.httpService
      .get<ISearchResults[]>(`${process.env.NJS_ML_API}/sites/MLB/search`, {
        params: q,
      })
      .pipe(map((response) => response.data));

    const result = await lastValueFrom(observable);

    if (!result) {
      throw new BadRequestException('No results from findAll SearchService');
    }

    return result;
  }
}
