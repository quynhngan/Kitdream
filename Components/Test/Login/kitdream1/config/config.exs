use Mix.Config

config :kitdream, ecto_repos: [Kitdream.Repo]

import_config "#{Mix.env}.exs"
