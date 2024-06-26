import { ThemeProvider } from "../components/theme-provider";
import { DM_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { ModeToggle } from "../components/SchemeSelector";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Isimeme Whyte",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} dark:bg-black`}>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
