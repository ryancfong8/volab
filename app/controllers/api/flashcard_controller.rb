class Api::FlashcardController < ApplicationController
  def create
    @flashcard  = flashcard.new(flashcard_params)

    if @flashcard.save
      render :show
    else
      render json: @flashcard.errors.full_messages, status: 422
    end
  end

  def destroy
    @flashcard = flashcard.find(params[:id])
    @flashcard.destroy
    render :show
  end

  def index
    @flashcards = flashcards
    render :index
  end

  def show
    @flashcard = flashcard.find(params[:id])
  end

  def update
    @flashcard = flashcard.find(params[:id])
    if @flashcard.update(flashcard_params)
      render :show
    end
  end

  private

  def flashcard_params
    params.require(:flashcard).permit(:word, :pic, :definition, :sentence, :origin, :deck_id, :tier_id)
  end

end
