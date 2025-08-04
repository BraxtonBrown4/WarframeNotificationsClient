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
