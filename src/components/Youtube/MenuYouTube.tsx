import { menuItemsYoutube } from "../../data/db";
import MenuItemYoutube from "./MenuItemYoutube";

type MenuYoutubeProps = {
  showYoutube: boolean;
  handleClick: (service: string) => void;
};

export default function MenuYouTube({
  showYoutube,
  handleClick,
}: MenuYoutubeProps) {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl font-black text-center">INDIGO</h2>
        <div
          className="space-y-3 mt-4 grid justify-center bg-red-300 p-8"
          onClick={() => handleClick("youtube")}
        >
          {showYoutube &&
            menuItemsYoutube.map((item) => (
              <MenuItemYoutube key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
}
