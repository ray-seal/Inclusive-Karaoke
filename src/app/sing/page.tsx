
import { Karaoke } from "@/components/Karaoke";
import { testSong } from "@/data/test-song";
import { weWishYouMerryChristmas } from "@/data/we-wish-you-a-merry-christmas";

export default function SingPage() {
  return (
    <Karaoke songs={[testSong, weWishYouMerryChristmas]} />
  );
}
