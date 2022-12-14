import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Post } from './posts.interface';

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService) {}

  async getPosts(): Promise<Post[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
      ),
    );
    return data;
  }
}
