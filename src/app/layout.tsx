import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/components/ThemeProvider";

const firaSans = Fira_Sans({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = siteConfig.nextMetada;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${firaSans.className}`}>
      <body className="flex flex-col min-h-screen mt-16">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
