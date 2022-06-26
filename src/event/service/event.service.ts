import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getAllEvent(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async getEvent(id: number): Promise<Event | null> {
    return this.prisma.event.findUnique({ where: { id: Number(id) } });
  }

  async createEvent(data: Event): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  async updateEvent(id: number): Promise<Event> {
    return this.prisma.event.update({
      where: { id: Number(id) },
      data: { completed: true },
    });
  }

  async deleteEvent(id: number): Promise<Event> {
    return this.prisma.event.delete({
      where: { id: Number(id) },
    });
  }
}
