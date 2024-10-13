import { Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";




export class LoggingMiddleware implements NestMiddleware {
  logger = new Logger('Response')
  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl: url } = req;
    const reqTime =  new Date().getTime();

    res.on('finish', () => {

        const { statusCode } = res;
        const resTime = new Date().getTime();

        if(statusCode === 200 || statusCode === 201){
            this.logger.log(`Logging Middleware => ${ip} ${method} ${url} ${statusCode} ${resTime - reqTime}ms`);
        }
    });

    next();
  }
}