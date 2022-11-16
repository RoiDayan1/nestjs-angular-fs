import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Image } from './images.interface';
import { filter } from 'lodash';

@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}

  async getGallery(): Promise<Image[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Image[]>(
        'https://jsonplaceholder.typicode.com/photos',
      ),
    );
    return data;
  }

  async getAlbum(id: string): Promise<Image[]> {
    const images = await this.getGallery();
    return filter(images, { albumId: Number(id) });
  }
}
