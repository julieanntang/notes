class NotesController < ApplicationController
  def index
    puts "index called"
    notes = Note.all
    render component: "Notes", props: { notes: notes }
  end

  def new
    render component: "NewNote"
  end

  def create
    # this creates a note in memory
    note = Note.new(note_params)
    if note.save
      #go back to index page
      redirect_to notes_path
    else
      # handle invalid input here
    end
  end

  private
  def note_params
    params.require(:note).permit(:title, :description)
  end
end
