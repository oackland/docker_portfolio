import flask

import app


@app.app.route('/api/notes', methods=['POST'])
def create_note():
	data = flask.request.json
	title = data.get('title')
	content = data.get('content')

	note = app.Note(title=title, content=content)
	app.db.session.add(note)
	app.db.session.commit()

	return flask.jsonify({'message': 'Note created successfully'})
