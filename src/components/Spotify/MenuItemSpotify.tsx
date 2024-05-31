import type { MenuItem, Song } from "../../types";

type MenuItemSpotifyProps = {
  item: MenuItem;
};

export default function MenuItemSpotify({ item }: MenuItemSpotifyProps) {
  const { album, image } = item;
  return (
    <div className="w-96 h-96 bg-transparent group perspective max-sm:h-60 ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/40 w-full h-full rounded-xl overflow-hidden inset-0 backface-hidden px-8 pb-8 max-sm:pb-2 max-sm:px-4 ">
          <img
            src={image}
            alt=""
            className=" absolute inset-0 object-cover backface-hidden w-full h-full rounded-xl"
          />
          <div className="backface-hidden absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-xl font-bold text-white max-sm:text-xs">
            {album}
          </h3>
        </div>

        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full  overflow-hidden rounded-xl text-white">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-18 ">
            {typeof item.songs === "string" ? (
              <></>
            ) : Array.isArray(item.songs) ? (
              <div>
                {item.songs.map((songs: Song, index: number) => (
                  <div key={index} className="text-black">
                    {" "}
                    <a href={songs.url} rel="noreferrer" target="_blank ">
                      {songs.name}
                    </a>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
