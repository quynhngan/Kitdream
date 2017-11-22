defmodule Kitdream.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :full_name, :string
      add :email, :string, null: false
      add :encrypted_password, :string

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
