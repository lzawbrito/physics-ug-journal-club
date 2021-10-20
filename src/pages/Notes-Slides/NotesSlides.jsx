import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import gfm from 'remark-gfm';
import { notesSlides } from './NotesSlidesArchive'
import './NotesTable.css'
import NotesDisplay from './NotesDisplay'
import { Link } from "react-router-dom";


const pageTitle = "Notes/Slides"

const pageContent = `
Here you can find notes and/or slides from previous meetings. 
`

function generateLink(e) {
    if (e == null) {
        return "N/A"
    } else {
        return <Link to={`/notes-slides/${e.id}`}>Read</Link>
    }
}

function generateSlideLink(e) {
    if (e == null) {
        return "N/A"
    } else {
        return <a target="_blank" href={e.file}>View</a>
    }
}


function generateTableRow(item) {
    return <tr>
        <td>{item.date}</td>
        <td>{item.topic}</td>
        <td>{generateLink(item.notes)}</td>
        <td>{generateSlideLink(item.slides)}</td>
    </tr>
}

const notesSlidesTable = notesSlides.map(generateTableRow)


export default class Home extends React.Component {
    render() {
        return <>
        <h2 className="pageTitle">{pageTitle}</h2>
        <ReactMarkdown>{pageContent}</ReactMarkdown>
        <table>
            <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Notes</th>
                <th>Slides</th>
            </tr>
            {notesSlidesTable}
        </table>
        </>
    }
}