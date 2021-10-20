import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import gfm from 'remark-gfm';

const pageTitle = "About Journal Club"

const pageContent = `
### Co-Heads
**Alex Jacoby** ([alex_jacoby@brown.edu](mailto:alex_jacoby@brown.edu)):

**Lucas Brito** ([lucas_brito@brown.edu](mailto:lucas_brito@brown.edu)): Lucas 
is a sophomore concentrating in Mathematical Physics and Computer Science. 
He has done research in observational cosmology, computational biophysics, 
and most recently in computational condensed matter physics. Outside of physics, 
he is interested in songwriting, skateboarding, and philosophy. 

### Past Co-Heads 
**Adam Tropper**: Adam co-founded the club in 2020. He is currently researching 
high energy theory as a PhD candidate at Harvard. 
`

export default class Home extends React.Component {
    render() {
        return <>
        <h2 className="pageTitle">{pageTitle}</h2>
        <ReactMarkdown>{pageContent}</ReactMarkdown>
        </>
    }
}