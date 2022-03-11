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

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="pt-0 sm:pt-4">
        <div className="py-12 mt-10 bg-gray-50 sm:pb-16">
          <div className="relative">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <dl className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-2">
                <StatBlock
                  statText="~600B"
                  title="Euro Daily Spending"
                  icon={fuelIcon}
                  text="each day by the West to Russia for fossil fuel imports"
                  onClick={() => setOpen(true)}
                />
                <StatBlock
                  statText="~5-10"
                  icon={bulletsIcon}
                  title="Pieces of Ammunition"
                  text="per hour are payed for by the average western household's heating"
                  onClick={() => setOpen(true)}
                />
                <StatBlock
                  statText={`${daysFromStart}th`}
                  icon={conflictIcon}
                  title="Day of the Invasion"
                  text="since Putin decided to attack a sovereign state and start this war"
                  onClick={() => setOpen(true)}
                />
                <Modal open={open} setOpen={setOpen} />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
