import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { ICategories } from 'src/interfaces/categories/ICategories.interface';

@Injectable()
export class CategoriesService {
  constructor(private httpService: HttpService) {}

  async findAll(): Promise<ICategories[]> {
    const observable = this.httpService
      .get(`${process.env.NJS_ML_API}/sites/MLB/categories`)
      .pipe(map((response) => response.data));

    const result = await lastValueFrom(observable);

    if (!result) {
      throw new BadRequestException(
        'No Categories from findAll CategoriesService',
      );
    }

    return result;
  }
}
