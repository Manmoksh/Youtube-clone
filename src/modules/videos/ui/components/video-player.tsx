"use client";
import MuxPlayer from "@mux/mux-player-react";
import { THUMBNAIL_FALLBACK } from "../../constants";
interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}
export const VideoPlayerSkeleton = () => {
  return (
    <div className="aspect-video bg-zinc-400 rounded-xl animate-pulse"></div>
  );
};
export const VideoPlayer = ({
  playbackId,
  autoPlay,
  thumbnailUrl,
  onPlay,
}: VideoPlayerProps) => {
  //   if (!playbackId) return null;
  return (
    <MuxPlayer
      playbackId={playbackId || ""}
      poster={thumbnailUrl || THUMBNAIL_FALLBACK}
      playerInitTime={0}
      autoPlay={autoPlay}
      thumbnailTime={0}
      className="w-full h-full object-contain"
      accentColor="#FF2056"
      onPlay={onPlay}
    />
  );
};
