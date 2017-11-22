use Mix.Config

# Configure your database
config :kitdream, Kitdream.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "quynhngan",
  password: "0123456",
  database: "kitdream_dev",
  hostname: "localhost",
  pool_size: 10
