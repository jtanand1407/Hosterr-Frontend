import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col gap-16 px-3 py-2 md:min-h-screen">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
