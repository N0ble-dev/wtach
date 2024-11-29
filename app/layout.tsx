import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Suspense } from "react";
// import Loading from "./loading";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CATazine",
  description: "catzine Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <NavBar />
        <section className=" pt-36 pb-20 lg:pt-52">{children}</section>
        {/* <Suspense fallback={<Loading />}>
        </Suspense> */}
        <Footer />
      </body>
    </html>
  );
}
