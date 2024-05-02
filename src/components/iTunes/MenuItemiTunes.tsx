import type { MenuItem } from "../../types"

type MenuItemiTunesProps = {
    item : MenuItem
}

export default function MenuItemiTunes({item}: MenuItemiTunesProps) {
  return (
    <button className="border-2 hover:bg-red-500 hover:text-white border-gray-500 p-1 flex">
        <a href={item.name} target="_blank" rel="noopener noreferrer">{item.description}</a>
    </button>
  )
}
