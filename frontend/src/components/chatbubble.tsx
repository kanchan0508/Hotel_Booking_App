import { useEffect } from "react";

const ChatBubble: React.FC = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://www.chatbase.co/embed.min.js";
      script.setAttribute("chatbotId", "e8WgTlIHDRCx0b6-cO6Eq");
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;
      document.head.appendChild(script);
  
      return () => {
        // Clean up function to remove the script when the component is unmounted
        document.head.removeChild(script);
      };
    }, []);
  
    return null; // Chat bubble will be injected by the script
  };
  
  export default ChatBubble;