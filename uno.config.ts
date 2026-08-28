import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind4,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			mode: 'mask',
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetTypography(),
		presetWebFonts()
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives(),
		transformerCompileClass({ classPrefix: 'omni-' })
	]
});
