export const storyLinkMapper = (link?: any) => {
	if (!link) return "";

	let cachedUrl = link?.cached_url || "";

	// TODO: Temp fix till site is fully updated to use relative links
	// if the cached_url has the full domain, remove it and make it relative
	if (cachedUrl.startsWith("https://localhost:4321/")) {
		cachedUrl = cachedUrl.replace("https://localhost:4321/", "");
	}

	return `${link?.linktype === "url" ? "" : "/"}${cachedUrl}`;
};
