import React from "react";
import ReactMarkdown from "react-markdown";
import TopicForm from './TopicForm'

const pageTitle = "Request a Topic"

const content = `Here you can request a topic for us to go over in a Journal 
Club meeting!`

export default class Requests extends React.Component {
	render() {
		return <>
        <h2 className="pageTitle">{pageTitle}</h2>
		<ReactMarkdown>
			{content}
		</ReactMarkdown>
		<TopicForm></TopicForm>
		</>
	}
}