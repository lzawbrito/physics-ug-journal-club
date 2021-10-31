import React from "react";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import './TopicForm.css';

export default class Requests extends React.Component {
	render() {
		return <>
        <div>
        <form action="https://formspree.io/f/xgerbzea" method="POST">
        <label>Name (Optional) </label>
        <input type="text" id="name" name="name" placeholder="Your name." 
        />

        <label>Email (Optional) </label>
        <input type="email" id="email" name="email" placeholder="Your email." 
        />


        <label>Topic</label>
        <textarea id="message" name="message" placeholder="Write something..."
        ></textarea>
        <input type="submit" value="Submit" />
        </form>
        </div>
		</>
	}
}