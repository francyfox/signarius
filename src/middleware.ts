import { useDirectus } from "@app/const";
import { sequence } from "astro/middleware";

const guardRoutes = ["dashboard"];

export interface SgnLocales {
  hasGuard: boolean;
  isAuth: boolean;
}

export async function auth(request, cookies) {
  const sdk = useDirectus;
  sdk.storage.set("auth_token", cookies?.sgn_auth_token);
  sdk.storage.set("auth_expires", cookies?.sgn_expires);

  const user = await sdk.users.me.read();

  return user;
}
async function validation({ locals, request, redirect }, next) {
  const response = await next();
  const hasGuard = new RegExp(guardRoutes.join("|")).test(request.url);
  const mapCookie = request.headers.get("cookie")?.split(";");
  const cookies = mapCookie
    ? mapCookie.reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        acc[key] = value;
        return acc;
      }, {})
    : null;
  locals.isAuth = !!cookies?.sgn_auth_token;

  if (hasGuard) {
    locals.hasGuard = true;

    try {
      await auth(request, cookies);
    } catch (e) {
      return redirect("/403");
    }
  }

  return response;
}

export const onRequest = sequence(validation);
