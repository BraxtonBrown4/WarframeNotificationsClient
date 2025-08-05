import { useState } from "react";
import type { SyndicateMission } from "./SyndicateTypes";
import RegularSyndicateCard from "./RegularSyndicateCard";
import PlanetarySyndicateCard from "./PlanetarySyndicateCard";

interface RegularSyndicateMissionsProps {
    SyndicateMissions: SyndicateMission[] | undefined;
    isLoading: boolean;
}

export default function RegularSyndicateMissions({ SyndicateMissions, isLoading }: RegularSyndicateMissionsProps) {
    const [selectedPlanetarySyndicate, setSelectedPlanetarySyndicate] = useState<'Ostrons' | 'Entrati' | 'Solaris United'>('Ostrons');

    return (
    <>
        <div className="flex flex-col items-center w-full h-full">
            <h2 className="w-full max-w-2xl m-4 text-3xl border-b-2 border-white pb-2">PLANETARY SYNDICATE MISSIONS</h2>
            
            {/* Planetary Syndicate Filter */}
            <div className="flex justify-center gap-4 mb-4">
                <button
                    onClick={() => setSelectedPlanetarySyndicate('Ostrons')}
                    className={`px-4 py-2 rounded ${selectedPlanetarySyndicate === 'Ostrons' ? 'bg-[#b5a66e] text-[#b5a66e] font-bold shadow-lg' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Ostrons
                </button>
                <button
                    onClick={() => setSelectedPlanetarySyndicate('Entrati')}
                    className={`px-4 py-2 rounded ${selectedPlanetarySyndicate === 'Entrati' ? 'bg-[#b5a66e] text-[#b5a66e] font-bold shadow-lg' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Entrati
                </button>
                <button
                    onClick={() => setSelectedPlanetarySyndicate('Solaris United')}
                    className={`px-4 py-2 rounded ${selectedPlanetarySyndicate === 'Solaris United' ? 'bg-[#b5a66e] text-[#b5a66e] font-bold shadow-lg' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Solaris United
                </button>
            </div>

            {
                isLoading ? <h2>Loading...</h2> : (
                    SyndicateMissions?.map((mission) => {
                        const planetarySyndicate = mission.syndicate.toLocaleLowerCase() === "ostrons" ||
                        mission.syndicate.toLocaleLowerCase() === "entrati" ||
                        mission.syndicate.toLocaleLowerCase() === "solaris united"

                        const matchesFilter = mission.syndicate === selectedPlanetarySyndicate;

                        return mission.active && mission.jobs.length + mission.nodes.length > 0 && planetarySyndicate && matchesFilter && <PlanetarySyndicateCard key={mission.id} mission={mission} />
                    }
                    )
                )
            }
        </div>

        <div className="flex flex-col items-center w-full h-full">
            <h2 className="w-full max-w-2xl m-4 text-3xl border-b-2 border-white pb-2">REGULAR SYNDICATE MISSIONS</h2>
            {
                isLoading ? <h2>Loading...</h2> : (
                    SyndicateMissions?.map((mission) => {
                        const planetarySyndicate = mission.syndicate.toLocaleLowerCase() === "ostrons" ||
                        mission.syndicate.toLocaleLowerCase() === "entrati" ||
                        mission.syndicate.toLocaleLowerCase() === "solaris united"

                        return mission.active && mission.jobs.length + mission.nodes.length > 0 && !planetarySyndicate && <RegularSyndicateCard key={mission.id} mission={mission} />
                    }
                    )
                )
            }
        </div>
    </>
    );
} 