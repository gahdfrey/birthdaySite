// import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
// import "./globals.css";
import "./globals.css"; // Ensure you import your global styles

export const metadata: Metadata = {
  title: "HappyBirthdayJulsbaby",
  description: "Birthday website",
  icons: {
    icon: "/IMG_1978.jpg", // Corrected favicon path
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/IMG_1978.jpg" />
      </head>
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
