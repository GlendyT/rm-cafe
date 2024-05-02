import MenuItemSpotify from "./MenuItemSpotify";
import { menuItemsSpotify } from "../../data/db";


type MenuSpotifyProps = {
  showSpotify: boolean;
  handleClick: (service: string) => void;
};

export default function MenuSpotify({
  showSpotify,
  handleClick,
}: MenuSpotifyProps) {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl font-black text-center ">MONO</h2>
        <div
          className="space-y-3 mt-4 grid justify-center bg-green-300 p-8"
          onClick={() => handleClick("spotify")}
        >
          {showSpotify &&
            menuItemsSpotify.map((item) => (
              <MenuItemSpotify key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
}
