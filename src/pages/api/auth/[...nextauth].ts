import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { SessionOptions } from 'next-auth';

// https://next-auth.js.org/providers/credentials#example---username--password
export default NextAuth({
  providers: [
    CredentialProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials!.username === process.env.NEXTAUTH_USERNAME && credentials!.password === process.env.NEXTAUTH_PASSWORD) {
          return Promise.resolve({ id: '1', name: 'David' });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  } as unknown as SessionOptions, // Cast session configuration to SessionOptions type
});
