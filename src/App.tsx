import { useState } from "react";
import MenuSpotify from "./components/Spotify/MenuSpotify";
import MenuYouTube from "./components/Youtube/MenuYouTube";
import MenuiTunes from "./components/iTunes/MenuiTunes";

function App() {
  const [showSpotify, setShowSpotify] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showiTunes, setShowiTunes] = useState(false);
  const [changeBack, setChangeBack] = useState(false);

  const handleClick = (service: string) => {
    setShowSpotify(service === "spotify");
    setShowYoutube(service === "youtube");
    setShowiTunes(service === "itunes");
    setChangeBack(!changeBack);
  };
  // Estado para controlar la visibilidad de MenuItemSpotify

  return (
    <>
      <header className=" bg-gray-400 py-2">
        <h1 className="text-center text-4xl uppercase font-bold">
          Joonnie´s Cafe
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-8 grid md:grid-cols-3 ">
        <MenuSpotify showSpotify={showSpotify} handleClick={handleClick} />
        <MenuYouTube showYoutube={showYoutube} handleClick={handleClick} />
        <MenuiTunes showiTunes={showiTunes} handleClick={handleClick} />
      </main>
    </>
  );
}

export default App;
