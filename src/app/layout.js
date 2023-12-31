import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Generated by Cyberavangelists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black-900">
        <Nav />
        <Aside>{children}</Aside>
        <Footer />
      </body>
    </html>
  );
}
