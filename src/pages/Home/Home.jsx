import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import gfm from 'remark-gfm';

const pageTitle = "Welcome to Brown's Undergraduate Physics Journal Club!"

const pageContent = `
### What is Journal Club?
Journal club is an organization designed to equip undergraduate students 
(particularly first and second years) with the tools they need to engage
with modern research and find research opportunities at Brown or beyond. We
begin from the very basics (what are the basic branches of physics?) and teach
skills like how to navigate the arXiv, LaTeX, and Python, alongside more
physics-oriented talks by Brown students, faculty, and friends. Foundationally,
our goals are to make physics research more inclusive by making skills that are
often simply assumed in research environments easier to access. Starting
research can be daunting, and courses don't always teach the non-physics skills
you need (and rarely do they teach *all* the physics skills you need), so both of
us felt the need for an organization that was dedicated to bridging this gap.

### Where and when does Journal Club meet?
Journal Club meets every other Wednesday at 6 PM. Locations are announced on a 
meeting-by-meeting basis via our mailing list, but we try to stick to Barus &
Holley lecture halls.

### How do I join Journal Club?
Email Lucas at [lucas_brito@brown.edu](mailto:lucas_brito@brown.edu) to 
be added to our mailing list. 

### Where can I view past meetings' materials?
See [Notes/Slides](#/notes-slides)!

### I'm interested in learning a specific topic... 
You can check [Notes/Slides](#/notes-slides) to see what we've gone over so far.
If you can't find what you're looking for, you can [Request a Topic](#/request)!
`

export default class Home extends React.Component {
    render() {
        return <>
        <h2 className="pageTitle">{pageTitle}</h2>
        <ReactMarkdown>{pageContent}</ReactMarkdown>
        </>
    }
}