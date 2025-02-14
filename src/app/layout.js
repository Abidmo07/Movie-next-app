

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Provider from "./Provider";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB-movie-app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Header />
          <NavBar/>
          <Search/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
