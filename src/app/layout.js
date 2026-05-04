import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SkillSphereNavbar from "@/components/SkillSphereNavbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere | Learn. Grow. Succeed.",
  description: "SkillSphere is a modern online learning platform where you can explore courses, learn new skills, and grow your career with expert-led content and interactive learning experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <SkillSphereNavbar></SkillSphereNavbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
