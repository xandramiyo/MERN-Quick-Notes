import './NoteItem.css'

export default function NoteItem({note}) {
	return (
		<>
			<div className="flex col note-ctr">
				<div className="date">
					{ new Date(note.createdAt).toLocaleString()}
				</div>
				<div className="content">
					{note.text}
				</div>
            </div>
		</>
	)
}