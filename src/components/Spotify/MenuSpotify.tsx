import MenuItemSpotify from "./MenuItemSpotify";
import { menuItemsSpotify } from "../../data/db";

export default function MenuSpotify() {
  return (
    <>
      <div className="mt-6 pb-8 text-white">
        <h2 className="text-2xl font-black text-center "></h2>
        <div className="grid grid-cols-3 gap-2 max-sm:flex max-sm:flex-col max-2xl:grid-cols-2">
          
          {menuItemsSpotify.map((item) => (
            <MenuItemSpotify key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
