import StatBlock from "./statBlock";
import { useState } from "react";
import fuelIcon from "../images/fuel_icon.png";
import bulletsIcon from "../images/bullets_icon.png";
import conflictIcon from "../images/conflict_icon.png";
import Modal from "./modal";

export default function Cards() {
  const dateWarStarted = new Date(1645671600 * 1000);
  const Difference_In_Time = new Date().getTime() - dateWarStarted.getTime();
  const daysFromStart = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

  const nth = function(d) {
    const dString = String(d);
    const last = +dString.slice(-2);
    if (last > 3 && last < 21) return 'th';
    switch (last % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <div>
      <div className="pt-0 sm:pt-4">
        <div className="py-12 mt-10 bg-gray-50 sm:pb-16">
          <div className="relative">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <dl className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-2">
                <StatBlock
                  statText="~1bln"
                  title="Dollar Daily Spending"
                  icon={fuelIcon}
                  text="By the EU alone for Russian fossil fuel imports"
                  onClick={() => {
                    setModalIndex(0);
                    setOpen(true);
                  }}
                />
                <StatBlock
                  statText="> 24"
                  icon={bulletsIcon}
                  title="Russian AK-47 Bullets"
                  text="per day are payed for by the average western household's heating"
                  onClick={() => {
                    setModalIndex(1);
                    setOpen(true);
                  }}
                />
                <StatBlock
                  statText={`${daysFromStart}${nth(daysFromStart)}`}
                  icon={conflictIcon}
                  title="Day of the Invasion"
                  text="since Putin decided to attack a sovereign state unprovoked and start his war"
                  onClick={() => {
                    setModalIndex(2);
                    setOpen(true);
                  }}
                />
                <Modal open={open} setOpen={setOpen} index={modalIndex} />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
