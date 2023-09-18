import {useState}   from 'react';
const TextNotes = () => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form className="add-note">
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    rows={3}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Add notes..."
                />
            </form>
        </div>
    )
}
export default TextNotes
