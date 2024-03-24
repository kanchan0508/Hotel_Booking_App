import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ChatBubble from "../components/chatbubble";


interface Props {
  childern: React.ReactNode;
}

const Layout = ({ childern }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <SearchBar />
      </div>
      <div className="container mx-auto py-10 flex-1"> {childern}</div>
      <ChatBubble/>
      <Footer />
    </div>
  );
};

export default Layout;
