defmodule Kitdream.Repo.Migrations.CreateIngredients do
  use Ecto.Migration

  def change do
    create table(:ingredients) do
      add :name, :string, size: 256, null: false
      add :description, :text
      add :image_url, :string
      add :units_of_measurement, :string, size: 48

      timestamps()
    end
  end
end
