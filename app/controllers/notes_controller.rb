class NotesController < ApplicationController
  def index
    render component: "Notes"
  end
end
