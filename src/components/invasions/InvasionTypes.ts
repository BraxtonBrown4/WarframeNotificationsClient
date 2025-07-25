export interface CountedItems {
    count: number;
    type: string;
    key?: string;
}

 export interface Reward {
    asString: string;
    color: number;
    countedItems: CountedItems[];
    credits: number;
    itemString: string;
    items: string[];
    thumbnail: string;
}

export interface Faction {
    faction: string;
    factionKey: string;
    reward: Reward;
}

export interface Invasion {
    id: string;
    activation: string;
    expiry: string;
    startString: string;
    active: boolean;
    attacker: Faction;
    attackerReward?: Reward;
    attackingFaction: string;
    completed: boolean;
    completion: number;
    count: number;
    defender: Faction;
    defenderReward?: Reward;
    defendingFaction: string;
    desc: string;
    eta: string;
    node: string;
    nodeKey: string;
    requiredRuns: number;
    rewardTypes: string[];
    vsInfestation: boolean;
}