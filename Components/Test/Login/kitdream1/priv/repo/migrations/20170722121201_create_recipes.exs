defmodule Kitdream.Repo.Migrations.CreateRecipes do
  use Ecto.Migration

  def change do
    create table(:recipes) do
      add :name, :string, size: 256, null: false
      add :description, :text
      add :category, :string, size: 128
      add :difficuty, :string, size: 64
      add :preparation_time, :integer
      add :image_url, :string
      add :number_of_servings, :integer, default: 1, null: false

      timestamps()
    end
  end
end
