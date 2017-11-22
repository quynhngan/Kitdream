defmodule Kitdream.Repo.Migrations.CreateUserSessions do
  use Ecto.Migration

  def change do
    create table(:user_sessions) do
      add :token, :string
      add :active, :boolean, default: true

      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:user_sessions, [:token])
    create index(:user_sessions, [:user_id])
  end
end
