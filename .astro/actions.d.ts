declare module "astro:actions" {
	type Actions = typeof import("/Users/barretoads/Barretoads-Dev-Development/barreto-realtor-cbnovac/src/actions/index.ts")["server"];

	export const actions: Actions;
}