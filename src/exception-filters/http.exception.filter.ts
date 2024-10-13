import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

import { Request, Response } from 'express';



@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
   logger = new Logger();
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    this.logger.error(`Http Exception filter: ${request.method} ${request.originalUrl} ${status} error ${exception.message}`);

    const errorDetails = exception.getResponse() as Record<string, any>;
    response.status(status).json({
      statusCode: status,
      errorDetails,
      timestamp: new Date().toISOString(),
    });
  }
}