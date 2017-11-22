# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Kitdream.Repo.insert!(%Kitdream.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Kitdream.{Repo, AdminUser, Recipe, Ingredient, RecipeIngredient}

Repo.delete_all AdminUser
AdminUser.changeset(%AdminUser{}, %{name: "Quynh Ngan", email: "quynhngan178@gmail.com", password: "0123456", password_confirmation: "0123456"})
|> Repo.insert!

# Ingredients
butter = Repo.insert!(%Ingredient{name: "Butter", units_of_measurement: "Tablespoon"})
ripe_banana = Repo.insert!(%Ingredient{name: "Ripe Banana"})
large_egg = Repo.insert!(%Ingredient{name: "Large Egg"})
sugar = Repo.insert!(%Ingredient{name: "Sugar"}, units_of_measurement: "Cup")
all_purpose_flour = Repo.insert!(%Ingredient{name: "All-purpose Flour", units_of_measurement: "Cup"})
baking_soda = Repo.insert!(%Ingredient{name: "Baking Soda", units_of_measurement: "Tablespoon"})
baking_powder = Repo.insert!(%Ingredient{name: "Baking Powder", units_of_measurement: "Tablespoon"})
kosher_salt = Repo.insert!(%Ingredient{name: "Kosher Salt", units_of_measurement: "Teaspoon"})
chia_seeds = Repo.insert!(%Ingredient{name: "Chia Seed", units_of_measurement: "Tablespoon"})
pork = Repo.insert!(%Ingredient{name: "Port", units_of_measurement: "Gam"})
fish_sauce = Repo.insert!(%Ingredient{name: "Fish Sauce", units_of_measurement: "Tablespoon"})
soy_sauce = Repo.insert!(%Ingredient{name: "Soy Sauce", units_of_measurement: "Tablespoon"})
garlic = Repo.insert!(%Ingredient{name: "Garlic", units_of_measurement: "Clove"})
lime_juice = Repo.insert!(%Ingredient{name: "Lime Juice", units_of_measurement: "Tablespoon"})
corn_starch = Repo.insert!(%Ingredient{name: "Corn Starch", units_of_measurement: "Teaspoon"})
vinegar = Repo.insert!(%Ingredient{name: "Vinegar", units_of_measurement: "Tablespoon"})
rice_noodles = Repo.insert!(%Ingredient{name: "Rice Noodles", units_of_measurement: "Ounce"})
lean_beef_sirloin = Repo.insert!(%Ingredient{name: "Lean Beef Sirloin", units_of_measurement: "Ounce"})
onion = Repo.insert!(%Ingredient{name: "Onion"})
ginger = Repo.insert!(%Ingredient{name: "Ginger"})
low_sodium_beef_broth = Repo.insert!(%Ingredient{name: "Low-sodium Beef Broth", units_of_measurement: "Cup"})
star_anise_pod = Repo.insert!(%Ingredient{name: "Star Anise Pod"})
cinnamon_stick = Repo.insert!(%Ingredient{name: "Cinnamon Stick"})
scallion = Repo.insert!(%Ingredient{name: "Scallion"})
jalapeno_pepper = Repo.insert!(%Ingredient{name: "Jalapeno Pepper"})
fresh_cilantro = Repo.insert!(%Ingredient{name: "Fresh Cilantro", units_of_measurement: "Cup"})
fresh_bean_sprouts = Repo.insert!(%Ingredient{name: "Fresh Bean Sprouts", units_of_measurement: "Cup"})
non_fat_milk = Repo.insert!(%Ingredient{name: "Non-fat Milk", units_of_measurement: "Cup"})
greek_yagurt = Repo.insert!(%Ingredient{name: "Greek Yagurt", units_of_measurement: "Cup"})
ice_cube = Repo.insert!(%Ingredient{name: "Ice Cube", units_of_measurement: "Cup"})
unsweetened_coconut = Repo.insert!(%Ingredient{name: "Unsweetened Coconut", units_of_measurement: "Cup"})
mango = Repo.insert!(%Ingredient{name: "Mango"})
vanilla = Repo.insert!(%Ingredient{name: "Vanilla", units_of_measurement: "Teaspoon"})
honey = Repo.insert!(%Ingredient{name: "Honey", units_of_measurement: "Tablespoon"})
semisweet_chocolate = Repo.insert!(%Ingredient{name: "Semisweet Chocolate", units_of_measurement: "Ounce"})
bittersweet_chocolate = Repo.insert!(%Ingredient{name: "Bittersweet Chocolate", units_of_measurement: "Ounce"})
package_of_hot_pot_seasoning = Repo.insert!(%Ingredient{name: "Package of Hotpot Seasoning"})
lemon_grass = Repo.insert!(%Ingredient{name: "Lemon Grass", units_of_measurement: "Piece"})
black_pepper = Repo.insert!(%Ingredient{name: "Black Pepper", units_of_measurement: "Teaspoon"})
red_hot_chili = Repo.insert!(%Ingredient{name: "Red Hot Chili", units_of_measurement: "Teaspoon"})
ice = Repo.insert!(%Ingredient{name: "Ice"})
mint_sprig = Repo.insert!(%Ingredient{name: "Mint Sprig"})
club_soda = Repo.insert!(%Ingredient{name: "Club Soda"})
light_rum = Repo.insert!(%Ingredient{name: "Light Rum", units_of_measurement: "Ounce"})
lime = Repo.insert!(%Ingredient{name: "Lime", units_of_measurement: "Slice"})
chicken_bouillon_powder  = Repo.insert!(%Ingredient{name: "Chicken Bouillon Powder", units_of_measurement: "Cup"})
cooking_oil = Repo.insert!(%Ingredient{name: "Cooking Oil", units_of_measurement: "Cup"})
cilantro_leaves = Repo.insert!(%Ingredient{name: "Cilantro Leaves", units_of_measurement: "Cup"})
water = Repo.insert!(%Ingredient{name: "Water", units_of_measurement: "Cup"})
roasted_peanut = Repo.insert!(%Ingredient{name: "Roasted Peanut", units_of_measurement: "Cup"})
sesame_seed = Repo.insert!(%Ingredient{name: "Sesame Seed", units_of_measurement: "Cup"})
coconut_ice_cream  = Repo.insert!(%Ingredient{name: "Coconut Ice-cream", units_of_measurement: "Cup"})
instant_espresso_powder = Repo.insert!(%Ingredient{name: "Instant Espresso Powder", units_of_measurement: "Teaspoon"})
chicken_wing = Repo.insert!(%Ingredient{name: "Chicken Wing"})

# Recipes
banana_chia_seed_bread = Repo.insert!(%Recipe{
  name: "Banana Chia Seed Bread",
  image_url: "https://i.imgur.com/6CgHcJR.jpg",
  difficuty: "medium",
  category: "dessert",
  preparation_time: 60,
  recipe_ingredients: [
    %RecipeIngredient{units_of_measurement: ripe_banana.units_of_measurement, number_of_units: 3.0, ingredient_id: ripe_banana.id},
    %RecipeIngredient{units_of_measurement: butter.units_of_measurement, number_of_units: 3.0, ingredient_id: butter.id},
    %RecipeIngredient{units_of_measurement: large_egg.units_of_measurement, number_of_units: 1.0, ingredient_id: large_egg.id},
    %RecipeIngredient{units_of_measurement: sugar.units_of_measurement, number_of_units: 0.75, ingredient_id: sugar.id},
    %RecipeIngredient{units_of_measurement: all_purpose_flour.units_of_measurement, number_of_units: 2.0, ingredient_id: all_purpose_flour.id},
    %RecipeIngredient{units_of_measurement: baking_soda.units_of_measurement, number_of_units: 1.0, ingredient_id: baking_soda.id},
    %RecipeIngredient{units_of_measurement: baking_powder.units_of_measurement, number_of_units: 1.0, ingredient_id: baking_powder.id},
    %RecipeIngredient{units_of_measurement: kosher_salt.units_of_measurement, number_of_units: 0.5, ingredient_id: kosher_salt.id},
    %RecipeIngredient{units_of_measurement: chia_seeds.units_of_measurement, number_of_units: 2.0, ingredient_id: chia_seeds.id},
  ]
})

vietnamese_noodle_salad = Repo.insert!(%Recipe{
  name: "Vietnamese Noodle Salad",
  difficuty: "easy",
  category: "main",
  preparation_time: 50,
  image_url: "https://i.imgur.com/6dybxFV.jpg",
  recipe_ingredients: [
    %RecipeIngredient{units_of_measurement: pork.units_of_measurement, number_of_units: 500.0, ingredient_id: pork.id},
    %RecipeIngredient{units_of_measurement: fish_sauce.units_of_measurement, number_of_units: 1.0, ingredient_id: fish_sauce.id},
    %RecipeIngredient{units_of_measurement: soy_sauce.units_of_measurement, number_of_units: 1.0, ingredient_id: soy_sauce.id},
    %RecipeIngredient{units_of_measurement: garlic.units_of_measurement, number_of_units: 2.0, ingredient_id: garlic.id},
    %RecipeIngredient{units_of_measurement: lime_juice.units_of_measurement, number_of_units: 1.0, ingredient_id: lime_juice.id},
    %RecipeIngredient{units_of_measurement: lemon_grass.units_of_measurement, number_of_units: 1.0, ingredient_id: lemon_grass.id},
    %RecipeIngredient{units_of_measurement: corn_starch.units_of_measurement, number_of_units: 1.0, ingredient_id: corn_starch.id},
    %RecipeIngredient{units_of_measurement: sugar.units_of_measurement, number_of_units: 0.25, ingredient_id: sugar.id},
    %RecipeIngredient{units_of_measurement: chicken_bouillon_powder.units_of_measurement, number_of_units: 0.25, ingredient_id: chicken_bouillon_powder.id},
    %RecipeIngredient{units_of_measurement: vinegar.units_of_measurement, number_of_units: 2.0, ingredient_id: vinegar.id},

  ]
})

vietnamese_pho = Repo.insert!(%Recipe{
	name: "vietnamese Pho",
  difficuty: "medium",
  category: "main",
  preparation_time: 40,
	image_url: "https://i.imgur.com/xqHzxVa.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: rice_noodles.units_of_measurement, number_of_units: 8.0, ingredient_id: rice_noodles.id},
		%RecipeIngredient{units_of_measurement: lean_beef_sirloin.units_of_measurement, number_of_units: 12.0, ingredient_id: lean_beef_sirloin.id},
		%RecipeIngredient{units_of_measurement: onion.units_of_measurement, number_of_units: 1.0, ingredient_id: onion.id},
		%RecipeIngredient{units_of_measurement: ginger.units_of_measurement, number_of_units: 1.0, ingredient_id: ginger.id},
		%RecipeIngredient{units_of_measurement: low_sodium_beef_broth.units_of_measurement, number_of_units: 5.0, ingredient_id: low_sodium_beef_broth.id},
		%RecipeIngredient{units_of_measurement: star_anise_pod.units_of_measurement, number_of_units: 5.0, ingredient_id: star_anise_pod.id},
		%RecipeIngredient{units_of_measurement: cinnamon_stick.units_of_measurement, number_of_units: 1.0, ingredient_id: cinnamon_stick.id},
		%RecipeIngredient{units_of_measurement: scallion.units_of_measurement, number_of_units: 4.0, ingredient_id: scallion.id},
		%RecipeIngredient{units_of_measurement: jalapeno_pepper.units_of_measurement, number_of_units: 2.0, ingredient_id: jalapeno_pepper.id},
		%RecipeIngredient{units_of_measurement: fish_sauce.units_of_measurement, number_of_units: 4.0, ingredient_id: fish_sauce.id},
		%RecipeIngredient{units_of_measurement: fresh_bean_sprouts.units_of_measurement, number_of_units: 1.0, ingredient_id: fresh_bean_sprouts.id},
	]
})

mango_smoothie = Repo.insert!(%Recipe{
	name: "Mango Smoothie",
  difficuty: "easy",
  category: "drink",
  preparation_time: 15,
	image_url: "https://i.imgur.com/2xRHLH8.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: non_fat_milk.units_of_measurement, number_of_units: 1.0, ingredient_id: non_fat_milk.id},
		%RecipeIngredient{units_of_measurement: greek_yagurt.units_of_measurement, number_of_units: 1.0, ingredient_id: greek_yagurt.id},
		%RecipeIngredient{units_of_measurement: ice_cube.units_of_measurement, number_of_units: 0.5, ingredient_id: ice_cube.id},
		%RecipeIngredient{units_of_measurement: ripe_banana.units_of_measurement, number_of_units: 1.0, ingredient_id: ripe_banana.id},
		%RecipeIngredient{units_of_measurement: mango.units_of_measurement, number_of_units: 1.0, ingredient_id: mango.id},
		%RecipeIngredient{units_of_measurement: unsweetened_coconut.units_of_measurement, number_of_units: 0.125, ingredient_id: unsweetened_coconut.id},
		%RecipeIngredient{units_of_measurement: vanilla.units_of_measurement, number_of_units: 1.0, ingredient_id: vanilla.id},
		%RecipeIngredient{units_of_measurement: honey.units_of_measurement, number_of_units: 1.0, ingredient_id: honey.id},
		%RecipeIngredient{units_of_measurement: chia_seeds.units_of_measurement, number_of_units: 1.0, ingredient_id: chia_seeds.id},
	]
})
chocolate_lava_cake = Repo.insert!(%Recipe{
	name: "Chocolate Lava Cakes",
  difficuty: "hard",
  category: "dessert",
  preparation_time: 60,
	image_url: "https://i.imgur.com/7D0nNyh.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: butter.units_of_measurement, number_of_units: 1.0, ingredient_id: butter.id},
		%RecipeIngredient{units_of_measurement: bittersweet_chocolate.units_of_measurement, number_of_units: 2.0, ingredient_id: bittersweet_chocolate.id},
		%RecipeIngredient{units_of_measurement: semisweet_chocolate.units_of_measurement, number_of_units: 2.0, ingredient_id: semisweet_chocolate.id},
		%RecipeIngredient{units_of_measurement: sugar.units_of_measurement, number_of_units: 1.25, ingredient_id: sugar.id},
		%RecipeIngredient{units_of_measurement: large_egg.units_of_measurement, number_of_units: 5.0, ingredient_id: large_egg.id},
		%RecipeIngredient{units_of_measurement: vanilla.units_of_measurement, number_of_units: 1.0, ingredient_id: vanilla.id},
		%RecipeIngredient{units_of_measurement: all_purpose_flour.units_of_measurement, number_of_units: 0.5, ingredient_id: all_purpose_flour.id},
	]
})

vietnamese_braised_fish_cooked_in_a_clay_pot = Repo.insert!(%Recipe{
	name: "Vietnamese Braised Fish Cooked in a Clay Pot",
  difficuty: "hard",
  category: "main",
  preparation_time: 60,
	image_url: "https://i.imgur.com/VxIwEMt.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: package_of_hot_pot_seasoning.units_of_measurement, number_of_units: 1.0, ingredient_id: package_of_hot_pot_seasoning.id},
		%RecipeIngredient{units_of_measurement: pork.units_of_measurement, number_of_units: 200.0, ingredient_id: pork.id},
		%RecipeIngredient{units_of_measurement: ginger.units_of_measurement, number_of_units: 1.0, ingredient_id: ginger.id},
		%RecipeIngredient{units_of_measurement: onion.units_of_measurement, number_of_units: 5.0, ingredient_id: onion.id},
		%RecipeIngredient{units_of_measurement: garlic.units_of_measurement, number_of_units: 5.0, ingredient_id: garlic.id},
		%RecipeIngredient{units_of_measurement: lemon_grass.units_of_measurement, number_of_units: 1.0, ingredient_id: lemon_grass.id},
		%RecipeIngredient{units_of_measurement: black_pepper.units_of_measurement, number_of_units: 0.5, ingredient_id: black_pepper.id},
		%RecipeIngredient{units_of_measurement: red_hot_chili.units_of_measurement, number_of_units: 3.0, ingredient_id: red_hot_chili.id},
	]
})

mojito = Repo.insert!(%Recipe{
	name: "Mojito",
  difficuty: "easy",
  category: "drink",
  preparation_time: 5,
	image_url: "https://i.imgur.com/rMnzVPQ.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: light_rum.units_of_measurement, number_of_units: 6.0, ingredient_id: light_rum.id},
		%RecipeIngredient{units_of_measurement: mint_sprig.units_of_measurement, number_of_units: 12.0, ingredient_id: mint_sprig.id},
		%RecipeIngredient{units_of_measurement: lime_juice.units_of_measurement, number_of_units: 6.0, ingredient_id: lime_juice.id},
		%RecipeIngredient{units_of_measurement: sugar.units_of_measurement, number_of_units: 4.0, ingredient_id: sugar.id},
		%RecipeIngredient{units_of_measurement: club_soda.units_of_measurement, number_of_units: 1.0, ingredient_id: club_soda.id},
		%RecipeIngredient{units_of_measurement: lime.units_of_measurement, number_of_units: 4.0, ingredient_id: lime.id},
	]
})

vietnamese_lime_chicken_wing = Repo.insert!(%Recipe{
	name: "Vietnamese Lime Chicken Wings",
  difficuty: "medium",
  category: "main",
  preparation_time: 30,
	image_url: "https://i.imgur.com/YnOAPIl.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: chicken_bouillon_powder.units_of_measurement, number_of_units: 0.5, ingredient_id: chicken_bouillon_powder.id},
		%RecipeIngredient{units_of_measurement: red_hot_chili.units_of_measurement, number_of_units: 0.5, ingredient_id: red_hot_chili.id},
		%RecipeIngredient{units_of_measurement: honey.units_of_measurement, number_of_units: 0.5, ingredient_id: honey.id},
		%RecipeIngredient{units_of_measurement: cooking_oil.units_of_measurement, number_of_units: 0.5, ingredient_id: cooking_oil.id},
		%RecipeIngredient{units_of_measurement: onion.units_of_measurement, number_of_units: 0.5, ingredient_id: onion.id},
		%RecipeIngredient{units_of_measurement: vinegar.units_of_measurement, number_of_units: 0.25, ingredient_id: vinegar.id},
		%RecipeIngredient{units_of_measurement: lime.units_of_measurement, number_of_units: 20.0, ingredient_id: lime.id},
		%RecipeIngredient{units_of_measurement: chicken_wing.units_of_measurement, number_of_units: 24.0, ingredient_id: chicken_wing.id},
		%RecipeIngredient{units_of_measurement: cilantro_leaves.units_of_measurement, number_of_units: 1.0, ingredient_id: cilantro_leaves.id},
		%RecipeIngredient{units_of_measurement: roasted_peanut.units_of_measurement, number_of_units: 1.0, ingredient_id: roasted_peanut.id},
	]
})

sweet_banana_and_coconut_milk_soup = Repo.insert!(%Recipe{
	name: "Sweet Banana and Coconut Milk Soup",
  difficuty: "hard",
  category: "dessert",
  preparation_time: 35,
	image_url: "https://i.imgur.com/1xnJtiM.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: unsweetened_coconut.units_of_measurement, number_of_units: 1.0, ingredient_id: unsweetened_coconut.id},
		%RecipeIngredient{units_of_measurement: water.units_of_measurement, number_of_units: 1.0, ingredient_id: water.id},
		%RecipeIngredient{units_of_measurement: sugar.units_of_measurement, number_of_units: 0.5, ingredient_id: sugar.id},
		%RecipeIngredient{units_of_measurement: ripe_banana.units_of_measurement, number_of_units: 3.0, ingredient_id: ripe_banana.id},
		%RecipeIngredient{units_of_measurement: sesame_seed.units_of_measurement, number_of_units: 1.0, ingredient_id: sesame_seed.id},
	]
})

vietnamese_iced_voffee_milkshake = Repo.insert!(%Recipe{
	name: "Vietnamese Iced Coffee Milkshake",
  difficuty: "easy",
  category: "drink",
  preparation_time: 5,
	image_url: "https://i.imgur.com/MLLXKDD.jpg",
	recipe_ingredients: [
		%RecipeIngredient{units_of_measurement: coconut_ice_cream.units_of_measurement, number_of_units: 1.5, ingredient_id: coconut_ice_cream.id},
		%RecipeIngredient{units_of_measurement: non_fat_milk.units_of_measurement, number_of_units: 0.25, ingredient_id: non_fat_milk.id},
		%RecipeIngredient{units_of_measurement: instant_espresso_powder.units_of_measurement, number_of_units: 1.5, ingredient_id: instant_espresso_powder.id},
	]
})
