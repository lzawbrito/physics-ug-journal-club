import pythonCC from './Notes/python-crash-course.md'
import introSlides from './Slides/meeting1.pdf'

export const notesSlides = [
    {
        date: "10/20", 
        topic: "Python Crash Course",
        notes: {
            id: "python-crash-course",
            file: pythonCC
        }
    },
    {
        date: "10/6", 
        topic: "Introduction",
        slides: {
            file: introSlides
        }
    }
]


export async function getData(id) {
    var content = ""
    for (let i in notesSlides) {
        if (!(notesSlides[i].hasOwnProperty('notes'))){
            continue
        }
        if (notesSlides[i].notes.id === id) {
            await fetch(notesSlides[i].notes.file).then(response => response.text()).then(text => content = text)
        }
    }
    return content
}
