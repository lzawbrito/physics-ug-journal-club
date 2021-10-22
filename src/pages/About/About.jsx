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
he is interested in songwriting, hardcore punk, skateboarding, and philosophy.
He also manages this site, so if you have any suggestions please reach out to
him!

### Past Co-Heads 
**Adam Tropper**: Adam co-founded the club in 2020. He is an NSF Graduate 
Research Fellow and is currently studying high energy as a PhD candidate at 
Harvard. During his time at Brown, Adam worked with Professor JiJi Fan on 
various applications of random matrix theory to physics beyond the standard 
model, both in the context of the mass generation via the Higgs mechanism and 
early universe cosmology. Outside of physics, Adam enjoys cooking, listening to 
music, and spending time outdoors. 
`

export default class Home extends React.Component {
    render() {
        return <>
        <h2 className="pageTitle">{pageTitle}</h2>
        <ReactMarkdown>{pageContent}</ReactMarkdown>
        </>
    }
}