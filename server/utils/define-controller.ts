import {
  defineEventHandler,
  type EventHandler,
  type EventHandlerRequest,
  type EventHandlerResponse,
  type H3Event,
} from "h3";
import { v7 as uuid } from "uuid";

type FuncHandler<Request, Response> = EventHandler<
  Request extends EventHandlerRequest ? Request : EventHandlerRequest,
  Request extends EventHandlerRequest ? Response : Request
>;

type ControllerConfig = {
  middlewares?: Array<(event: H3Event) => Promise<unknown> | unknown>;
};

export function defineController<
  Request = EventHandlerRequest,
  Response = EventHandlerResponse
>(handler: FuncHandler<Request, Response>, config?: ControllerConfig) {
  return defineEventHandler(async (event: H3Event) => {
    const requestId = uuid();
    try {
      console.log(`[Controller][${requestId}][${event.path}] \nStarted`);

      // ✨ Run all middlewares in order
      if (config?.middlewares?.length) {
        for (const middleware of config.middlewares) {
          await middleware(event);
        }
      }

      const response = await handler(event);

      console.log(`[Controller][${requestId}][${event.path}] \nFinished`);
      return response;
    } catch (error) {
      console.log(`[Controller][${requestId}][${event.path}] \nError:`);

      if (error instanceof Error) {
        throw createError({
          status: (error as ReturnType<typeof createError>)?.statusCode || 500,
          message: error.message,
        });
      }
      throw createError({
        status: 500,
        message: "An server error occurred.",
      });
    }
  });
}
