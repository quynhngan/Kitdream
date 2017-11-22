use Mix.Config

# Configure your database
config :kitdream, Kitdream.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "kitdream_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
