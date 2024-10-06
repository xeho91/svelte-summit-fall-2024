import { defineShikiSetup } from "@slidev/types";
import { transformerMetaWordHighlight, transformerNotationWordHighlight } from "@shikijs/transformers";

export default defineShikiSetup(() => {
	return {
		langs: [
			//
            "js",
			"svelte",
			"sh",
			"typescript",
		],
		transformers: [
			//
            transformerMetaWordHighlight(),
			transformerNotationWordHighlight(),
		],
	};
});
