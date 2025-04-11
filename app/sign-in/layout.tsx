// app/sign-in/layout.tsx
import {Metadata} from "next"

export const metadata: Metadata = {
    title: "Login",
    description: "If you have an account already - Login",
}

export default function SignInLayout({children}: {children: React.ReactNode}) {
    return <main>{children}</main>
}
