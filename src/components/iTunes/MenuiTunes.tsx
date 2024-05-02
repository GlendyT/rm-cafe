import { menuItemsiTunes } from "../../data/db";
import MenuItemiTunes from "./MenuItemiTunes";

type MenuiTunesProps = {
  showiTunes: boolean;
  handleClick: (service: string) => void;
};

export default function MenuiTunes({
  showiTunes,
  handleClick,
}: MenuiTunesProps) {
  return (
    <>
      {" "}
      <div className="p-5">
        <h2 className="text-2xl font-black text-center">RPWP</h2>
        <div
          className="space-y-3 mt-4 grid justify-center bg-orange-300 p-8"
          onClick={() => handleClick("itunes")}
        >
          {showiTunes &&
            menuItemsiTunes.map((item) => (
              <MenuItemiTunes key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
}
