defmodule Kitdream.Ingredient do
  use Ecto.Schema
  import Ecto.Changeset

  schema "ingredients" do
    field :name, :string
    field :description, :string
    field :units_of_measurement, :string
    field :image_url, :string

    many_to_many :recipes, Kitdream.Recipe, join_through: "recipe_ingredients"

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :units_of_measurement, :image_url])
    |> validate_required([:name])
  end
end
