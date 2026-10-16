import { Karaoke } from "@/components/Karaoke";
import { testSong } from "@/data/test-song";

export default function SingPage() {
  return <Karaoke songs={[testSong]} />;
}
