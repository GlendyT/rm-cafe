import type { MenuItem } from "../../types";

type MenuItemYoutubeProps = {
  item: MenuItem;
};

export default function MenuItemYoutube({ item }: MenuItemYoutubeProps) {
  return (
    <button className="border-2 hover:bg-red-700 hover:text-white  border-gray-500 p-1 flex">
      <a href={item.name} target="_blank" rel="noopener noreferrer">
        {item.description}
      </a>
    </button>
  );
}
