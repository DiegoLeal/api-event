import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from '../service/event.service';
import { Event } from '@prisma/client';

@Controller('api/v1')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getAllEvent(): Promise<Event[]> {
    return this.eventService.getAllEvent();
  }

  @Post()
  async createEvent(@Body() postData: Event): Promise<Event> {
    return this.eventService.createEvent(postData);
  }

  @Get(':id')
  async getEvent(@Param('id') id: number): Promise<Event | null> {
    return this.eventService.getEvent(id);
  }

  @Put(':id')
  async Update(@Param('id') id: number): Promise<Event> {
    return this.eventService.updateEvent(id);
  }

  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<Event> {
    return this.eventService.deleteEvent(id);
  }
}
