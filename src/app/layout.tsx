import "@/app/stylesheets/index.scss"
import { ThemeProvider } from "@/app/hooks/contexts/themeContext"
import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import ScrollToTopButton from "@/app/components/utils/ScrollToTopButton"

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
                    <ScrollToTopButton />
                    <Navbar />
                    {props.children}
                </body>
            </html>
        </ThemeProvider>
    )
}
