import NextAuth  from 'next-auth'
import GithubProvider from "next-auth/providers/github"
export const authOpt={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET,
        })
    ]

}

const handler = NextAuth(authOpt);

export { handler as GET, handler as POST };