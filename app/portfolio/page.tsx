// app/portfolio/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioContent from "./PortfolioContent";

export const metadata = {
  title: "Portfolio - TechMeUp | Our Client Success Stories",
  description: "Explore our portfolio of successful projects across various industries including home services, security, beauty, entertainment, and technology.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* <Header /> */}
      <PortfolioContent />
      <Footer />
    </>
  );
}