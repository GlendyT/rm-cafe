
import MenuSpotify from "./components/Spotify/MenuSpotify";

function App() {

  return (
    <>
      <header className=" bg-gray-400 py-2">
        <h1 className="text-center text-4xl uppercase font-bold">
          Joonnie´s Cafe
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-8 flex justify-center">
        <MenuSpotify  />
      </main>
    </>
  );
}

export default App;
