defmodule Kitdream.Repo.Migrations.CreateRecipeIngredients do
  use Ecto.Migration

  def change do
    create table(:recipe_ingredients) do
      add :recipe_id, references(:recipes, on_delete: :delete_all)
      add :ingredient_id, references(:ingredients, on_delete: :delete_all)

      add :units_of_measurement, :string
      add :number_of_units, :float, null: false

      timestamps()
    end

    create index(:recipe_ingredients, [:recipe_id, :ingredient_id])
  end
end
