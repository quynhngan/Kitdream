defmodule Kitdream.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias Kitdream.{UserSession, Recipe}

  schema "users" do
    field :full_name, :string
    field :email, :string
    field :password, :string, virtual: true
    field :encrypted_password, :string

    has_many :user_sessions, UserSession, on_delete: :delete_all
    many_to_many :recipes, Recipe, join_through: "user_recipes"

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:full_name, :email, :password])
    |> validate_required([:email, :password])
    |> unique_constraint(:email)
    |> put_password_hash()
  end

  def registration_changeset(model, params) do
    model
    |> changeset(params)
    |> Ecto.Changeset.put_assoc(:user_sessions, [UserSession.changeset(%UserSession{}, %{})])
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end
end
