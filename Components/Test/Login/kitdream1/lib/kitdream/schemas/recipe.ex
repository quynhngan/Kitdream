defmodule Kitdream.Recipe do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  schema "recipes" do
    field :name, :string
    field :description, :string
    field :number_of_servings, :integer
    field :category, :string
    field :difficuty, :string
    field :preparation_time, :integer
    field :image_url, :string

    has_many :recipe_ingredients, Kitdream.RecipeIngredient, on_delete: :delete_all
    many_to_many :ingredients, Kitdream.Ingredient, join_through: "recipe_ingredients"
    many_to_many :user, Kitdream.User, join_through: "user_recipes"

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :number_of_servings, :image_url, :preparation_time])
    |> validate_required([:name, :number_of_servings])
    |> cast_assoc(:recipe_ingredients, require: true)
  end

  def search(category, preparation_time, difficuty) do
    query = Kitdream.Recipe
    if category do
      query = from recipe in query, where: recipe.category == ^category
    end
    if preparation_time do
      query = from recipe in query, where: recipe.preparation_time == ^preparation_time
    end
    if difficuty do
      query = from recipe in query, where: recipe.difficuty == ^difficuty
    end
    Kitdream.Repo.all(from recipe in query, select: recipe)
  end
end
