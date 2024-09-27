import "@/app/stylesheets/index.scss"
import { ThemeProvider } from "@/app/hooks/contexts/themeContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Matheus Picoli | Portfólio"
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
    return (
        <ThemeProvider>
            <html lang="pt-br">
                <body>
                    {props.children}
                </body>
            </html>
        </ThemeProvider>
    )
}
