import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {

  return (
    <>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Korean</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    </>
  );
}
