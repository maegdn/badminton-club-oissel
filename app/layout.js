import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "O'Bad - Oissel Badminton",
  description: "Rejoins le club de badminton de Oissel.",
  keywords: [
    "badminton",
    "club",
    "sports",
    "tournois",
    "inscription",
    "raquette",
    "sport",
    "association",
    "oissel"
  ],
  authors: [{ name: "Oissel Badminton" }],
  openGraph: {
    title: "O'bad, club de badminton de Oissel",
    description:
      "Toutes les informations sur le club de badminton de Oissel sont ici. Rejoignez-nous !",
    url: "https://badminton-club-oissel.vercel.app"
  },
  robots: "index, follow",
  other: {
    "google-site-verification": "LJFzKAQH4-jY1N0mlxV3gF-gKpsWPos2NuNdUtT5-Cs"
  }
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
