import type { MenuItem } from "../../types";

type MenuItemSpotifyProps = {
  item: MenuItem;
  
};

export default function MenuItemSpotify({ item }: MenuItemSpotifyProps) {
  return (
    <button className="border-2 hover:bg-green-700 hover:text-white  border-gray-500 p-1 flex ">
      <a href={item.name} target="_blank" rel="noopener noreferrer">
        {item.description}
      </a>
    </button>
  );
}
