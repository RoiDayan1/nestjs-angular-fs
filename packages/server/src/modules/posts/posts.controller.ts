import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/posts')
  getPosts() {
    return this.postsService.getPosts();
  }
}
