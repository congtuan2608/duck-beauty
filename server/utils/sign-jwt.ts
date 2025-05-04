import { SignJWT, errors, jwtVerify, type JWTPayload } from "jose";
import type { H3Event } from "h3";
const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function signJwt(
  payload: JWTPayload,
  optional?: {
    expiresIn?: string;
  }
) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(optional?.expiresIn || "1h")
    .sign(secret);
}

export async function verifyJwt(token: string) {
  return jwtVerify(token, secret);
}

export async function verifyToken(event: H3Event) {
  const auth = getHeader(event, "authorization");

  if (!auth?.startsWith("Bearer ")) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  const accessToken = auth.split(" ")[1];
  try {
    const { payload } = await jwtVerify(accessToken, secret);
    event.context.user = payload as typeof event.context.user; // gán user cho context
  } catch (err) {
    if (err instanceof errors.JWTExpired) {
      throw createError({ statusCode: 401, message: "Token expired" });
    }
    throw createError({ statusCode: 401, message: "Invalid token" });
  }
}
