export default async function imgFinder(url: string): Promise<string> {
    try {
        const stringArray: string[] = url.split("/");

        let keyword: string = stringArray.pop()?.replaceAll("-", "%20") || "";

        keyword = keyword.replace(".png", "");

        const res = await fetch(`https://api.warframestat.us/items/search/${keyword}`);
        const data = await res.json();

        stringArray.push(data[0].imageName);

        return stringArray.join("/");
    } catch (e: unknown) {
        if (e instanceof Error) {
            throw new Error(e.message);
        } else {
            throw new Error("Unknown error in imgFinder");
        }
    }
}
