defmodule Kitdream.Repo.Migrations.CreateUserRecipes do
  use Ecto.Migration

  def change do
    create table(:user_recipes) do
      add :user_id, references(:users, on_delete: :delete_all)
      add :recipe_id, references(:recipes, on_delete: :delete_all)

      add :number_of_servings, :float, null: false
      add :note, :text

      timestamps()
    end

    create index(:user_recipes, [:user_id, :recipe_id])
  end
end
