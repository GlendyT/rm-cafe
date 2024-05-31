export type MenuItem = {
  id: number;
  album: string;
  image: string;
  songs: string | Song[];
};

export type Song = {
  name: string,
  url: string
}