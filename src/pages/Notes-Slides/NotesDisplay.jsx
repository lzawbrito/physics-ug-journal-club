import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import gfm from 'remark-gfm';
import { notesSlides, getData } from './NotesSlidesArchive'


export default class NotesDisplay extends React.Component {
    state = {externalData: null}
	notes = null;
	componentWillMount() {
		for (let i in notesSlides) {
			if (!(notesSlides[i].hasOwnProperty('notes'))){
				continue
			}
			if (notesSlides[i].notes.id === this.props.id) {
				this.notes = notesSlides[i];
			}
		}
	}
    async componentDidMount() {
		const response = await getData(this.props.id);
		this.setState({externalData: response})
	}
    render() {
        if (this.state.externalData === null) {
			return <>
			<p>Loading notes...</p>
			</>
		} else {
			return <>
				<ReactMarkdown
				remarkPlugins={[remarkMath, gfm]}
				rehypePlugins={[rehypeKatex]}
				linkTarget={"_target"}>
					{this.state.externalData}
				</ReactMarkdown>
			</>
		}
    }
}