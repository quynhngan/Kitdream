defmodule Kitdream.Repo.Migrations.CreateAdminUser do
  use Ecto.Migration

  def change do
    create table(:admin_users) do
      add :name, :string
      add :email, :string
      # authenticatable
      add :password_hash, :string

      timestamps()
    end
    create unique_index(:admin_users, [:email])
  end
end
