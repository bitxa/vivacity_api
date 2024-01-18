import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsJSON,
  IsUrl,
  IsArray,
} from 'class-validator';

export class EventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  startTime: string; // Assuming format like 'HH:mm'

  @IsNotEmpty()
  @IsString()
  endTime: string; // Assuming format like 'HH:mm'

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsJSON()
  mapCoordinates: string; // JSON string containing { lat: number, lng: number }

  @IsOptional()
  @IsUrl()
  mainPhotoUrl?: string; // URL for the main photo

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  galleryUrls?: string[]; // Array of URLs
}
