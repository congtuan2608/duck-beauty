import { logout } from "#app-auth/server/services/auth";

export default defineController(
  async (event) => {
    await logout(event.context.user!.id);
  },
  // Require a accessToken (send back 401 if no `accessToken` in the request)
  { middlewares: [verifyToken] }
);
