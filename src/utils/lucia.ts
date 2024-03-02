import { Lucia, TimeSpan } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "@/utils/prisma";
import { GitHub } from "arctic";
import { cookies } from "next/headers";
import { cache } from "react";

import type { Session, User } from "lucia";

// For nodejs version <= 18.x
// import { webcrypto } from "node:crypto";
// globalThis.crypto = webcrypto as Crypto;

export const lucia = new Lucia(new PrismaAdapter(prisma.session, prisma.user), {
  sessionCookie: {
    expires: false,
    attributes: { secure: process.env.NODE_ENV === "production" },
  },
  sessionExpiresIn: new TimeSpan(7, "d"),
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      githubId: attributes.github_id,
      username: attributes.username,
    };
  },
});

// Github oauth
export const github = new GitHub(
  process.env.GITHUB_CLIENT_ID!,
  process.env.GITHUB_CLIENT_SECRET!
);

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  github_id: number;
  username: string;
}

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch {}
    return result;
  }
);
