from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///scratch_1.sql"
db = SQLAlchemy(app)


class Note(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(100))
	content = db.Column(db.Text)

	def __repr__(self):
		return f"<Note {self.id}>"


@app.route("/api/notes", methods=["POST"])
def create_note():
	data = request.json
	title = data.get("title")
	content = data.get("content")

	note = Note(title=title, content=content)
	db.session.add(note)
	db.session.commit()

	return jsonify({"message": "Note created successfully"})
