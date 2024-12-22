import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();

    const status = exception instanceof HttpException ? exception.getStatus() : 500;
    const message = exception instanceof HttpException ? exception.message : 'Internal server error';
    const errorDetails = exception instanceof HttpException ? exception.getResponse() as Record<string, any> : { message: 'Unexpected error occurred' };

    // Log the error
    this.logger.error(`Http Exception filter: ${request?.method ?? 'UNKNOWN METHOD'} ${request?.originalUrl ?? 'UNKNOWN URL'} ${status} error: ${message}`);

    // Check if the response object has the status function (i.e., it is an Express Response)
    if (typeof response.status === 'function') {
      response.status(status).json({
        statusCode: status,
        errorDetails,
        timestamp: new Date().toISOString(),
        path: request?.originalUrl ?? 'UNKNOWN URL',
      });
    } else {
      // If it's not an HTTP response, just log the error
      this.logger.error('The context does not support a typical HTTP response.');
    }
  }
}
