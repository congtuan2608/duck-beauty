import { H3EventContext } from "h3";

declare module "h3" {
  interface H3EventContext {
    user?: {
      id: string;
      username: string;
      email: string;
    };
  }
}
