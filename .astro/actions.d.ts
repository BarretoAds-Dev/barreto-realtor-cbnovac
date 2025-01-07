declare module "astro:actions" {
	type Actions = typeof import("/Users/barretoads/OnamuPublicidad-Development/barreto-realtor-cbnovac/src/actions/index.ts")["server"];

	export const actions: Actions;
}