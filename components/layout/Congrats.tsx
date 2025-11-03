"use client";

import confetti from "canvas-confetti";
import { Button } from "../ui/button";

export default function Congrats() {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 360,
    });
  };
  return (
    <>
      <section id="congrats">
        <h2 className="text-sm text-secondary font-black">Congratulations!</h2>

        <div className="my-4">
          You made it to the end, press the button to treat yourself!
        </div>

        <Button variant="outline" onClick={handleConfetti}>
          Celebrate!
        </Button>
      </section>
    </>
  );
}
