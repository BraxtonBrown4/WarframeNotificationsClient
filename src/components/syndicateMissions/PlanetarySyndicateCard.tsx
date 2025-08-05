import type { SyndicateMission } from "./SyndicateTypes";

export default function PlanetarySyndicateCard({ mission }: { mission: SyndicateMission }) {
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
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-100 font-bold text-sm">Jobs: {mission.jobs.length}</span>
                    </div>
                </div>
                <div className="mb-3">
                    <h4 className="text-gray-300 font-bold text-xs mb-2">Available Jobs:</h4>
                    {mission.jobs.map((job) => (
                        <div key={job.type} className="mb-3 p-2 bg-gray-800 rounded border border-gray-600">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-sm">{job.type}</span>
                                <span className="text-xs text-gray-400">MR {job.minMR}+</span>
                            </div>
                            
                            <div className="mb-2">
                                <span className="text-gray-300 text-xs">Enemy Level:</span>
                                <span className="text-white text-xs ml-1">
                                    {job.enemyLevels[0]} - {job.enemyLevels[1]}
                                </span>
                            </div>
                            
                            <div className="mb-2">
                                <span className="text-gray-300 text-xs">Rewards:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {job.rewardPool.map((reward, rewardIndex) => (
                                        <span key={rewardIndex} className="bg-green-600 px-2 py-1 rounded text-xs">
                                            {reward}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="text-right">
                                <span className="text-gray-300 text-xs">Expires:</span>
                                <span className="text-white text-xs ml-1">
                                    {new Date(job.expiry).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-gray-400 text-xs">
                    <p>Expires: {new Date(mission.expiry).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
} 