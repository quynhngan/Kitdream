defmodule Kitdream.RecipeIngredient do
  use Ecto.Schema
  import Ecto.Changeset

  schema "recipe_ingredients" do
    field :units_of_measurement, :string
    field :number_of_units, :float

    belongs_to :recipe, Kitdream.Recipe
    belongs_to :ingredient, Kitdream.Ingredient

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:recipe_id, :ingredient_id, :units_of_measurement, :number_of_units])
    |> validate_required([:number_of_units])
  end
end
