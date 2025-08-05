export interface MissionJob {
  id: string;
  rewardPool: string[];
  type: string;
  enemyLevels: [number, number];
  standingStages: number[];
  minMR: number;
  expiry: string;
};

export interface SyndicateMission {
  id: string;
  activation: string;
  startString: string;
  expiry: string;
  active: boolean;
  syndicate: string;
  syndicateKey: string;
  nodes: string[];
  jobs: MissionJob[];
  eta: string;
};

export interface SpecialMissionChallenge {
  node: string;
  challenge: string;
};

export interface SpecialBounties {
  ZarimanSyndicate:SpecialMissionChallenge[];
  EntratiLabSyndicate:SpecialMissionChallenge[];
  HexSyndicate:SpecialMissionChallenge[];
};

export interface SpecialSyndicateMission {
  expiry: number;
  rot: string;
  vaultRot: string;
  zarimanFaction: string;
  bounties: SpecialBounties;
};

export interface SpecialChallengeMetadata {
  name: string;
  description: string;
  flavour: string;
  icon: string;
  requiredCount: number;
}

export interface Languages {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  ja: string;
  ko: string;
  pl: string;
  pt: string;
  ru: string;
  tc: string;
  th: string;
  tr: string;
  uk: string;
  zh: string;
}

// Custom interface matching the return structure of getSpecialSyndicateMissions
export interface CustomChallenge {
  name: string;        // English translation
  description: string; // English translation
  flavour: string;     // English translation
  icon: string;
  requiredCount: number;
}

export interface CustomSyndicateBounty {
  node: string;
  challenge: CustomChallenge;
}

export interface CustomSyndicateBounties {
  ZarimanSyndicate: CustomSyndicateBounty[];
  EntratiLabSyndicate: CustomSyndicateBounty[];
  HexSyndicate: CustomSyndicateBounty[];
}

export interface CustomSyndicate {
  expiry: number;
  rot: string;
  vaultRot: string;
  zarimanFaction: string;
  bounties: CustomSyndicateBounties;
}


