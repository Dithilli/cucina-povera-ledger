import { marked } from "marked";

// Render trusted, in-repo markdown (the challenge docs) to HTML. These docs are
// authored content, not user input, so direct HTML injection is safe here. Do
// NOT feed user-supplied text through this without sanitizing first.
marked.setOptions({ gfm: true, breaks: false });

export function renderMarkdown(src: string): string {
  return marked.parse(src) as string;
}
