import { useQuery } from "@tanstack/react-query";

interface Reward {
    [key: string]: unknown;
}

interface Invasion {
    id: string;
    activation: string;
    expiry: string;
    startString: string;
    active: boolean;
    attacker: Reward;
    attackerReward: Reward;
    attackingFaction: string;
    completed: boolean;
    completion: unknown[];
    count: number;
    defender: Reward;
    defenderReward: Reward;
    defendingFaction: string;
    desc: string;
    eta: string;
    node: string;
    nodeKey: string;
    requiredRuns: number;
    rewardTypes: string[];
    vsInfestation: boolean;
}


export const Invasions = () => {

    const { data: invasions, isLoading } = useQuery<Invasion[]>({
        queryKey: ['Invasions'],
        queryFn: () =>
            fetch("https://api.warframestat.us/pc/invasions").then(res => res.json()),
    });

    return (<div className="flex justify-center items-center w-full h-full">
        <h2>Invasions</h2>
        {
            isLoading ? <h2>Loading...</h2> : (
                invasions?.map(i => (
                    <div key={i.id}>
                        
                    </div>
                ))
            )
        }
    </div>
    )
}