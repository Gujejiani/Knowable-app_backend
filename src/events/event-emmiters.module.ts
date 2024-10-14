// event-emitters.module.ts
import { Module, DynamicModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventEmitterService } from './event-emiter.service';


@Module({})
export class EventEmittersModule {
  static register(serviceName: 'courses' | 'notifications'): DynamicModule {
    let selectedService;

    // Decide which service to use based on the argument TODO: Implement the notifications service
    switch (serviceName) {
      case 'courses':
        selectedService = EventEmitterService;
        break;
      case 'notifications':
        selectedService = EventEmitterService;
        break;
      default:
        throw new Error('Invalid service name');
    }

    return {
      module: EventEmittersModule,
      imports: [EventEmitterModule.forRoot()],
      providers: [selectedService],
      exports: [selectedService],
      
    };
  }
}
