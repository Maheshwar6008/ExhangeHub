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
    title: {
        default: "Exchange Online Training | MS-203",
        template: "%s | Exchange Online | Exchange Training",
    },
    description:
        "Comprehensive Microsoft Exchange Online training platform for MS-203: Microsoft 365 Messaging certification. Master mail flow, transport rules, message hygiene, migration, and Exchange administration.",
    keywords: [
        "Microsoft Exchange Online",
        "MS-203",
        "Microsoft 365 Messaging",
        "Exchange Administration",
        "Mail Flow",
        "Transport Rules",
        "Message Hygiene",
        "Exchange Migration",
        "Microsoft 365",
    ],
    authors: [{ name: "Maheshwar" }],
    openGraph: {
        title: "Exchange Online Training Platform | MS-203",
        description:
            "Master Microsoft Exchange Online administration and messaging with our comprehensive MS-203 training program",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-950 text-dark-50`}
            >
                {children}
            </body>
        </html>
    );
}
