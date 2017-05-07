class Api::FlashcardController < ApplicationController
  def create
    @flashcard  = Flashcard.new(flashcard_params)

    if @flashcard.save
      render :show
    else
      render json: @flashcard.errors.full_messages, status: 422
    end
  end

  def destroy
    @flashcard = Flashcard.find(params[:id])
    @flashcard.destroy
    render :show
  end

  def index
    @flashcards = Flashcard.all
    render :index
  end

  def show
    @flashcard = Flashcard.find(params[:id])
  end

  def update
    @flashcard = Flashcard.find(params[:cardId])
    if @flashcard.update_attribute(:tier_id, params[:tierId])
      render :show
    end
  end

  private

  def flashcard_params
    params.require(:flashcard).permit(:word, :pic, :definition, :sentence, :origin, :deck_id, :tier_id)
  end

end
