import StatBlock from "./statBlock";

import fuelIcon from "../images/fuel_icon.png";
import bulletsIcon from "../images/bullets_icon.png";
import conflictIcon from "../images/conflict_icon.png";

export default function Cards() {
  return (
    <div>
      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="md:grid md:grid-cols-3 md:gap-2">
                  <StatBlock
                    statText="~600B"
                    title="Euro Daily Spending"
                    icon={fuelIcon}
                    text="each day by the West to Russia for fossil fuel imports"
                  ></StatBlock>
                  <StatBlock
                    statText="~5-10"
                    icon={bulletsIcon}
                    title="Pieces of Ammunition"
                    text="per hour are payed for by the average western household's heating"
                  ></StatBlock>
                  <StatBlock
                    statText="13th"
                    icon={conflictIcon}
                    title="Day of the Invasion"
                    text="since Putin decided to attack a sovereign state and start this war"
                  ></StatBlock>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
