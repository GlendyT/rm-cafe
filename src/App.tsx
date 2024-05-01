import { useState } from "react";
import MenuItemSpotify from "./components/MenuItemSpotify";
import MenuItemYoutube from "./components/MenuItemYoutube";
import MenuItemiTunes from "./components/MenuItemiTunes";

import { menuItemsSpotify, menuItemsYoutube, menuItemsiTunes } from "./data/db";

function App() {
  const [showSpotify, setShowSpotify] = useState(false); // Estado para controlar la visibilidad de MenuItemSpotify
  const [showYoutube, setShowShowYoutube] = useState(false); // Estado para controlar la visibilidad de MenuItemSpotify
  const [showiTunes, setShowiTunes] = useState(false); // Estado para controlar la visibilidad de MenuItemSpotify

  return (
    <>
      <header className=" bg-gray-400 py-2">
        <h1 className="text-center text-4xl uppercase font-bold">
          Joonnie´s Cafe
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-8 grid md:grid-cols-3">
        <div className="p-5">
          <h2 className="text-2xl font-black text-center ">First Day</h2>
          <div
            className="space-y-3 mt-4 grid justify-center bg-green-300 p-2"
            onClick={() => setShowSpotify(true)} // Manejador de evento para mostrar MenuItemSpotify al hacer clic
          >
            {showSpotify && // Renderiza MenuItemSpotify solo si showSpotify es true
              menuItemsSpotify.map((item) => (
                <MenuItemSpotify key={item.id} item={item} />
              ))}
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-black text-center">Second Day</h2>
          <div
            className="space-y-3 mt-4 grid justify-center bg-red-300 p-2"
            onClick={() => setShowShowYoutube(true)}
          >
            {showYoutube &&
              menuItemsYoutube.map((item) => (
                <MenuItemYoutube key={item.id} item={item} />
              ))}
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-black text-center">Third Day</h2>
          <div className="space-y-3 mt-4 grid justify-center bg-orange-300 p-2">
            {menuItemsiTunes.map((item) => (
              <MenuItemiTunes key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
