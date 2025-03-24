import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // ...existing code...
    Providers.Credentials({
      // ...existing code...
      authorize: async (credentials) => {
        // ...existing code...
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  // ...existing code...
  pages: {
    signIn: '/auth/signin',
    // ...existing code...
  },
  // ...existing code...
  callbacks: {
    async session(session, user) {
      // ...existing code...
      return session;
    },
    async jwt(token, user) {
      // ...existing code...
      return token;
    }
  }
});
