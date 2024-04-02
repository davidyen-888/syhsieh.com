import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: { username: string; password: string }, req: NextApiRequest) {
        if (credentials.username === process.env.NEXTAUTH_USERNAME && credentials.password === process.env.NEXTAUTH_PASSWORD) {
          return Promise.resolve({ name: 'David' });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
});
