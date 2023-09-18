from flask import jsonify
from app import app, db, Note


@app.route('/api/notes', methods=['GET'])
def get_notes():
	notes = Note.query.all()
	notes_data = [{'id': note.id, 'title': note.title, 'content': note.content} for note in notes]
	return jsonify(notes_data)


# Add more routes for CRUD operations as needed

if __name__ == '__main__':
	app.run()
