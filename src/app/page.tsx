import { Karaoke } from "@/components/Karaoke";
import { testSong } from "@/data/test-song";

export default function Home() {
  return <Karaoke songs={[testSong]} />;
}
