import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { Items } from 'src/interfaces/items/Items.interface';

@Injectable()
export class ItemsService {
  constructor(private httpService: HttpService) {}

  async compareItems(ids: string): Promise<Items[]> {
    const observable = this.httpService
      .get(`${process.env.NJS_ML_API}/items?ids=${ids}`)
      .pipe(map((response) => response.data));

    const result = await lastValueFrom(observable);

    if (!result || ids.split(',')?.length < 2) {
      throw new BadRequestException(
        'You need select at least 2 items to compare',
      );
    }

    return result;
  }
}
