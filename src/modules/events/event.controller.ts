/* eslint-disable @typescript-eslint/no-unused-vars */
// src/events/event.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '../../entities/event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() eventData: Event) {
    return this.eventService.create(eventData);
  }
}
