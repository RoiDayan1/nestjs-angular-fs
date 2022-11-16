import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get('/gallery')
  getGallery() {
    return this.imagesService.getGallery();
  }

  @Get('/album/:id')
  getAlbum(@Param('id') id: string) {
    return this.imagesService.getAlbum(id);
  }
}
