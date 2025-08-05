import { useState } from "react";
import type { CustomSyndicate } from "./SyndicateTypes";
import SpecialSyndicateCard from "./SpecialSyndicateCard";

interface SpecialSyndicateMissionsProps {
    specialSyndicateMissions: CustomSyndicate | undefined;
    isLoading: boolean;
}

export default function SpecialSyndicateMissions({ specialSyndicateMissions, isLoading }: SpecialSyndicateMissionsProps) {
    const [selectedSyndicate, setSelectedSyndicate] = useState<'ZarimanSyndicate' | 'EntratiLabSyndicate' | 'HexSyndicate'>('ZarimanSyndicate');

    return (
        <div className="flex flex-col items-center w-full h-full">
            <h2 className="w-full max-w-2xl m-4 text-3xl border-b-2 border-white pb-2">SPECIAL SYNDICATE MISSIONS</h2>
            
            {/* Syndicate Type Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <button
                    onClick={() => setSelectedSyndicate('ZarimanSyndicate')}
                    className={`px-4 py-2 rounded ${selectedSyndicate === 'ZarimanSyndicate' ? 'bg-[#b5a66e] text-[#b5a66e]' : 'bg-gray-700 text-white'}`}
                >
                    Zariman
                </button>
                <button
                    onClick={() => setSelectedSyndicate('EntratiLabSyndicate')}
                    className={`px-4 py-2 rounded ${selectedSyndicate === 'EntratiLabSyndicate' ? 'bg-[#b5a66e] text-[#b5a66e]' : 'bg-gray-700 text-white'}`}
                >
                    Entrati Lab
                </button>
                <button
                    onClick={() => setSelectedSyndicate('HexSyndicate')}
                    className={`px-4 py-2 rounded ${selectedSyndicate === 'HexSyndicate' ? 'bg-[#b5a66e] text-[#b5a66e]' : 'bg-gray-700 text-white'}`}
                >
                    Hex
                </button>
            </div>

            {
                isLoading ? <h2>Loading...</h2> : (
                    specialSyndicateMissions?.bounties[selectedSyndicate]?.map((bounty, index) => 
                        <SpecialSyndicateCard key={index} bounty={bounty} />
                    )
                )
            }
        </div>
    );
} 