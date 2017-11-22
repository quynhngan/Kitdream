defmodule Kitdream.UserSession do
  use Ecto.Schema
  import Ecto.Changeset

  alias Kitdream.User

  schema "user_sessions" do
    field :token, :string
    field :active, :boolean, default: true

    belongs_to :user, User

    timestamps()
  end

  def changeset(struct, params) do
    struct
    |> cast(params, [:active])
    |> put_token()
  end

  defp put_token(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: _} ->
        put_change(changeset, :token, SecureRandom.urlsafe_base64())
      _ ->
        changeset
    end
  end
end
