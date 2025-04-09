import { useEffect,useRef } from "react";
import { connectionWithSocket } from "./utils/wssConnection/wssConnection";
function App() {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    connectionWithSocket();
  },[]);
  return (
    <div className="App">
      video-chat-frontend
    </div>
  );
}

export default App;
