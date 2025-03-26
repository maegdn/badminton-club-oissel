import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Club de Badminton d'Oissel",
  description: "Rejoins le club de badminton de Oissel",
  keywords: [
    "badminton",
    "club",
    "sports",
    "tournois",
    "inscription",
    "raquette",
    "sport",
    "association",
  ],
  authors: [{ name: "Oissel Badminton" }],
  openGraph: {
    title: "Site du Club de Badminton de Oissel",
    description: "Venez rejoindre le club de badminton de Oissel",
    url: "https://badminton-club-oissel.vercel.app",
  },
  robots: "index, follow",
  other: {
    "google-site-verification": "LJFzKAQH4-jY1N0mlxV3gF-gKpsWPos2NuNdUtT5-Cs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
