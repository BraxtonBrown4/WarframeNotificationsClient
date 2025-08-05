import type { SyndicateMission } from "./SyndicateTypes";

export default function RegularSyndicateCard({ mission }: { mission: SyndicateMission }) {
    return (
        <div className="bg-gray-900 text-white font-mono text-xs border border-gray-500 w-full max-w-md m-2">
            <div className="px-3 py-2 flex flex-col items-center">
                <span className="font-bold text-gray-100 text-sm">{mission.syndicate}</span>
            </div>

            <div className="px-3 py-2">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-100 font-bold text-sm">ETA: {mission.eta}</span>
                    </div>
                </div>
                
                <div className="text-gray-300 text-xs mb-2">
                    <p>Nodes: {mission.nodes.join(', ')}</p>
                </div>
                
                <div className="text-gray-400 text-xs">
                    <p>Expires: {new Date(mission.expiry).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
} 