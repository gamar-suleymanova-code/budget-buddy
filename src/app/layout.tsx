import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "BudgetBuddy",
  description: "BudgetBuddy is a user-friendly savings app designed to help individuals track their expenses and income. With intuitive features for adding and managing transactions, BudgetBuddy allows users to monitor their daily, weekly, and monthly spending habits. The app includes visual charts to provide insights into financial trends and aids users in achieving their savings goals. Currently, I'm working on the front end deveopment of the project, so other links are not yet provided.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
