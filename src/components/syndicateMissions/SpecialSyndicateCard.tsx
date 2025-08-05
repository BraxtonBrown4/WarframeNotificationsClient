import type { CustomSyndicateBounty } from "./SyndicateTypes";

export default function SpecialSyndicateCard({ bounty, index }: { bounty: CustomSyndicateBounty, index: number }) {
    return (
        <div className="bg-gray-900 text-white font-mono text-xs border border-gray-500 w-full max-w-md m-2 min-h-48 flex">
            {bounty.challenge.icon && (
                <div className="w-1/2 h-full flex items-center justify-center pr-3">
                    <img 
                        src={bounty.challenge.icon} 
                        alt="Challenge Icon" 
                        className="max-w-full max-h-full object-contain filter"
                    />
                </div>
            )}
            
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-sm mb-1 break-words text-[#b5a66e]">
                        {bounty.challenge.name}
                    </h4>
                </div>

                <div className="flex flex-col mb-2">
                    <h4 className="text-gray-300 text-xs mb-2">
                        Bounty Rank: {index + 1}
                    </h4>
                </div>
                
                <div className="flex-1">
                    <p className="text-gray-300 text-xs mb-2">
                        {bounty.challenge.description}
                    </p>
                    
                    {bounty.challenge.flavour && (
                        <p className="text-gray-400 text-xs italic mb-2">
                            {bounty.challenge.flavour}
                        </p>
                    )}
                </div>
                
                <span className="text-xs text-gray-400 mt-2">
                    Node: {bounty.node}
                </span>
            </div>
        </div>
    );
} 