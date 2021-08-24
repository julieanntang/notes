class NotesController < ApplicationController
  def index
    notes = Note.all
    render component: "Notes", props: { notes: notes }
  end
end
