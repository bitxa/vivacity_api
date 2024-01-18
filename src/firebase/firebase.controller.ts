import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  NotFoundException,
  Query,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FirebaseService } from './firebase.service';
import { Response } from 'express';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any, @Body('path') path: string) {
    const bucket = this.firebaseService.getStorage().bucket();
    const filename = `uploads/${path}/${file.originalname}`;
    const fileUpload = bucket.file(filename);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      stream.on('error', (error) => reject(error));
      stream.on('finish', () => {
        fileUpload.makePublic().then(() => {
          console.log(filename);
          resolve(`https://storage.googleapis.com/${bucket.name}/${filename}`);
        });
      });
      stream.end(file.buffer);
    });
  }

  @Get('file')
  async getFileByPath(
    @Query('fullPath') fullPath: string,
    @Res() response: Response,
  ) {
    const bucket = this.firebaseService.getStorage().bucket();
    const file = bucket.file(`uploads/${fullPath}`);

    const [fileExists] = await file.exists();
    if (!fileExists) {
      throw new NotFoundException('File not found');
    }

    const readStream = file.createReadStream();

    readStream.on('error', (error) => {
      response.status(500).send(error + 'Error streaming the file');
    });

    readStream.pipe(response);
  }
}
