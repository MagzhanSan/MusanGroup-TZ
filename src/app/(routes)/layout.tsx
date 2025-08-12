import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kapital.kz - Новости Казахстана | Экономика, Финансы, Бизнес",
  description:
    "Актуальные новости Казахстана: экономика, финансы, бизнес, государство, технологии. Деловой портал с последними событиями в стране и мире.",
  keywords: [
    "новости Казахстана",
    "экономика",
    "финансы",
    "бизнес",
    "государство",
    "технологии",
  ],
  openGraph: {
    title: "Kapital.kz - Новости Казахстана",
    description:
      "Актуальные новости Казахстана: экономика, финансы, бизнес, государство, технологии.",
    type: "website",
    url: "https://kapital.kz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  );
}
