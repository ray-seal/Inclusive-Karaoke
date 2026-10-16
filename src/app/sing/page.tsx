
import { Karaoke } from "@/components/Karaoke";
import { weWishYouMerryChristmas } from "@/data/we-wish-you-a-merry-christmas";
import { twelveDaysOfChristmas } from "@/data/twelve-days-of-christmas";

export default function SingPage() {
  return (
    <Karaoke
      songs={[
        twelveDaysOfChristmas,
        weWishYouMerryChristmas,
      ]}
    />
  );
}
