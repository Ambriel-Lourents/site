declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}

export interface GearItem {
  name: string;
  category: string;
  link: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  alt: string;
} 