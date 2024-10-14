// event-emitter.service.ts
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventEmitterService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  // Emit an event to check if a course exists
  async checkCourseExist(courseId: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.eventEmitter.emit('course.exists.check', courseId, resolve);
    });
  }


}
