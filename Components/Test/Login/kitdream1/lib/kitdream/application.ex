defmodule Kitdream.Application do
  @moduledoc """
  The Kitdream Application Service.

  The kitdream system business domain lives in this application.

  Exposes API to clients such as the `Kitdream.Web` application
  for use in channels, controllers, and elsewhere.
  """
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    Supervisor.start_link([
      supervisor(Kitdream.Repo, []),
    ], strategy: :one_for_one, name: Kitdream.Supervisor)
  end
end
