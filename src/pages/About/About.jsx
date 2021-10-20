import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import gfm from 'remark-gfm';

const pageTitle = "About Journal Club"

const pageContent = `
### Co-Heads
**Alex Jacoby**: [alex_jacoby@brown.edu](mailto:alex_jacoby@brown.edu)

**Lucas Brito**: [lucas_brito@brown.edu](mailto:lucas_brito@brown.edu)
`

export default class Home extends React.Component {
    render() {
        return <>
        <h2 className="pageTitle">{pageTitle}</h2>
        <ReactMarkdown>{pageContent}</ReactMarkdown>
        </>
    }
}