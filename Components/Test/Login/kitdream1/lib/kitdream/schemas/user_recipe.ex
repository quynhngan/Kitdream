defmodule Kitdream.UserRecipe do
  use Ecto.Schema
  import Ecto.Changeset

  schema "user_recipes" do
    field :number_of_servings, :float
    field :note, :string

    belongs_to :user, Kitdream.User
    belongs_to :recipe, Kitdream.Recipe

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:user_id, :recipe_id, :number_of_servings, :note])
    |> validate_required([:user_id, :recipe_id])
  end
end
