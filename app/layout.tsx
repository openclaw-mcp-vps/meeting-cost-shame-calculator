import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeting Cost Shame Calculator",
  description: "Show real-time meeting costs to attendees. Stop wasting money on unnecessary meetings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="112f389e-8b0c-4709-bfd2-4a7fbec01e72"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
