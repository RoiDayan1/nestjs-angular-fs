import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [PostsModule, ImagesModule],
})
export class AppModule {}
