import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          const data = await res.json().catch(() => ({}));

          if (!res.ok) {
            throw new Error(data.message || "Invalid credentials");
          }

          // Map the response to a user object
          return {
            id: data.id,
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            image: data.image,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // On login — add tokens and user info
      if (user) {
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          image: user.image,
        };
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      // When session is updated (trigger: "update")
      if (trigger === "update" && session?.user) {
        token.user = session.user;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
};
