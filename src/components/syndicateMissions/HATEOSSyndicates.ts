import type { SpecialSyndicateMission, SpecialChallengeMetadata, Languages, CustomSyndicate } from "./SyndicateTypes";

export async function getSpecialSyndicateMissions(): Promise<CustomSyndicate> {

    try {
        const browseWF: string = "https://browse.wf/"

        const res = await fetch("https://oracle.browse.wf/bounty-cycle")

        const syndicateMissions: SpecialSyndicateMission = await res.json()

        return {
            ...syndicateMissions,
            bounties: {
                ZarimanSyndicate: await Promise.all(syndicateMissions.bounties.ZarimanSyndicate.map(async (b) => {
                    try {
                        const res = await fetch(`${browseWF}${b.challenge}`)
                        const metaData: SpecialChallengeMetadata = await res.json()

                        const nameRes = await fetch(`${browseWF}${metaData.name}`)
                        const name: Languages = await nameRes.json()

                        const descriptionRes = await fetch(`${browseWF}${metaData.description}`)
                        const description: Languages = await descriptionRes.json()

                        const completedDescription: string = description.en.replace("|COUNT|", String(metaData.requiredCount))

                        const flavourRes = await fetch(`${browseWF}${metaData.flavour}`)
                        const flavour: Languages = await flavourRes.json()

                        return {
                            node: b.node,
                            challenge: {
                                ...metaData,
                                name: name.en,
                                description: completedDescription,
                                flavour: flavour.en,
                                icon: browseWF + metaData.icon,
                                requiredCount: metaData.requiredCount
                            }
                        }
                    } catch (e: unknown) {
                        if (e instanceof Error) {
                            throw new Error(`Failed to fetch: ${e.message}`);
                        } else {
                            throw new Error(`Failed to fetch: ${String(e)}`);
                        }
                    }
                })),
                EntratiLabSyndicate: await Promise.all(syndicateMissions.bounties.EntratiLabSyndicate.map(async (b) => {
                    try {
                        const res = await fetch(`${browseWF}${b.challenge}`)
                        const metaData: SpecialChallengeMetadata = await res.json()

                        const nameRes = await fetch(`${browseWF}${metaData.name}`)
                        const name: Languages = await nameRes.json()

                        const descriptionRes = await fetch(`${browseWF}${metaData.description}`)
                        const description: Languages = await descriptionRes.json()

                        const completedDescription: string = description.en.replace("|COUNT|", String(metaData.requiredCount))

                        const flavourRes = await fetch(`${browseWF}${metaData.flavour}`)
                        const flavour: Languages = await flavourRes.json()

                        return {
                            node: b.node,
                            challenge: {
                                ...metaData,
                                name: name.en,
                                description: completedDescription,
                                flavour: flavour.en,
                                icon: browseWF + metaData.icon,
                                requiredCount: metaData.requiredCount
                            }
                        }
                    } catch (e: unknown) {
                        if (e instanceof Error) {
                            throw new Error(`Failed to fetch: ${e.message}`);
                        } else {
                            throw new Error(`Failed to fetch: ${String(e)}`);
                        }
                    }
                })),
                HexSyndicate: await Promise.all(syndicateMissions.bounties.HexSyndicate.map(async (b) => {
                    try {
                        const res = await fetch(`${browseWF}${b.challenge}`)
                        const metaData: SpecialChallengeMetadata = await res.json()

                        const nameRes = await fetch(`${browseWF}${metaData.name}`)
                        const name: Languages = await nameRes.json()

                        const descriptionRes = await fetch(`${browseWF}${metaData.description}`)
                        const description: Languages = await descriptionRes.json()

                        const completedDescription: string = description.en
                        .replace("|COUNT|", String(metaData.requiredCount))
                        .replace(/\|OPEN_COLOR\||\|CLOSE_COLOR\|/g, "")
                        .replace("|ALLY|", "Hex")

                        const flavourRes = await fetch(`${browseWF}${metaData.flavour}`)
                        const flavour: Languages = await flavourRes.json()

                        const completedFlavour: string = flavour.en
                        .replace(/\|OPEN_COLOR\||\|CLOSE_COLOR\|/g, "")
                        .replace("|ALLY|", "Hex")

                        return {
                            node: b.node,
                            challenge: {
                                ...metaData,
                                name: name.en,
                                description: completedDescription,
                                flavour: completedFlavour,
                                icon: browseWF + metaData.icon,
                                requiredCount: metaData.requiredCount
                            }
                        }
                    } catch (e: unknown) {
                        if (e instanceof Error) {
                            throw new Error(`Failed to fetch: ${e.message}`);
                        } else {
                            throw new Error(`Failed to fetch: ${String(e)}`);
                        }
                    }
                }))
            }
        }
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            throw new Error(`Failed to fetch: ${e.message}`);
        } else {
            throw new Error(`Failed to fetch: ${String(e)}`);
        }
    }
}