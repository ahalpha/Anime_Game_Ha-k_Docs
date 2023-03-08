---
title: Bkebi-GC
editLink: true
---

# World

Events related to the world.

### Open Team Immediately <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

There will no longer be a 2-second out-of-combat wait time when opening the Party Setup.

![Open_Team_Immediately.gif](/cheat/bkebi-gc/image/Open_Team_Immediately.gif)

### Skip Enhance Animation

Skip Weapon and Artifact level up animations and dialogs.

![Skip_Enhance_Animation.gif](/cheat/bkebi-gc/image/Skip_Enhance_Animation.gif)

#### Show Level-Up Dialog For Substat Rolls

Shows the level up dialog when the Artifact is enhancement success to `+4` `+8` `+12` `+16` `+20`.

![Show_Level-Up_Dialog_For_Substat_Rolls.png](/cheat/bkebi-gc/image/Show_Level-Up_Dialog_For_Substat_Rolls.png)

### Dumb Enemies <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

All monsters will not initiate any attack on the player.

- In CO-OP Mode, it only takes effect when you become the [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master).

![Dumb_Enemies.gif](/cheat/bkebi-gc/image/Dumb_Enemies.gif)

### Freeze Enemies <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Stop the movement of all monsters.

- In CO-OP Mode, it only works when you become [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master), but you will not be hit by monsters under any circumstances.

![Freeze_Enemies.gif](/cheat/bkebi-gc/image/Freeze_Enemies.gif)

### Permanent Elemental Sight <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Elemental Sight will remain enabled.

![Permanent_Elemental_Sight.png](/cheat/bkebi-gc/image/Permanent_Elemental_Sight.png)

## Auto Challenge

> Automatically collect challenge gadgets such as elemental particles.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Challenge`**</font>](#auto_challenge).

![Auto_Challenge.gif](/cheat/bkebi-gc/image/Auto_Challenge.gif)

### Destroy Bomb <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Auto destroy bombbarrel.

- Using this function may be at risk.

![Destroy_Bomb.gif](/cheat/bkebi-gc/image/Destroy_Bomb.gif)

### Range

Set the effective range of [<font>**`Auto Challenge`**</font>](#auto_challenge).

- Optional Range: `0 ~ 300`

### Delay

Set intervals to collect or detonate challenge gadgets.

- Optional Range: `0 ~ 2000`

### Custom Challenge

Collect the specified gadgets.

#### Enable Custom Challenge <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Challenge`**</font>](#auto_challenge).

#### Display Name

Set the name of this item in the list.

#### Gadget ID

Set the [<font>**`Gadget ID`**</font>](#gadget-id) of the gadgets to be collected.

- The [<font>**`Gadget ID`**</font>](#gadget-id) of surrounding props can be obtained in the `ID` column in [Debug - Entity Manager - Entity List](/cheat/bkebi-gc/09_debug#entity-list).

#### Add

Add an item named [<font>**`Display Name`**</font>](#display_name) This item is used to collect gadgets with ID [<font>**`Gadget ID`**</font>](#gadget-id).

## Auto Cook

> Quickly complete cooking operations.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Cook`**</font>](#auto-cook).

![Auto_Cook.gif](/cheat/bkebi-gc/image/Auto_Cook.gif)

### Fast Proficiency <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Quickly complete manual cooking.

![Fast_Proficiency.gif](/cheat/bkebi-gc/image/Fast_Proficiency.gif)

### Count Item

Set the amount of manual cooking.

- Optional Range: `1 ~ 100`

### Quality

Sets the final quality of food for manual cooking.

- Available Options: `Delicious` `Normal` `Suspicious`

## Auto Destroy Objects

> Automatically destroy some objects.

:::warning
Using this function may be at risk.
:::

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Destroy Objects`**</font>](#auto_destroy_objects).

- Available Options: 
  - `Ores` Ores and variants, e.g. electro crystals, marrows, etc.<font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>
  - `Shields` The shields of Mage and Churl and the elemental immunity of slimes.<font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>
  - `Doodads` Barrels, boxes, vases, etc.<font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>
  - `Special Objects` Destroy Ancient Rime, Large and Small Rock Piles.<font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>
  - `Special Chests` Destroy Chests with Brambles, Frozen, or In Rocks.<font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>
    - This item may destroy Leyline making them invisible!

#### Range (m)

Sets the effective range of [<font>**`Auto Destroy Objects`**</font>](#auto_destroy_objects).

- Optional Range: `1 ~ 15`

![Auto_Destroy_Objects.gif](/cheat/bkebi-gc/image/Auto_Destroy_Objects.gif)

## Auto Fish

> A hooked fish goes directly to the Inventory.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Fish`**</font>](#auto-fish).

#### Catch Delay (ms)

Determines the [<font>**`Catch Delay (ms)`**</font>](#catch-delay-ms) time after the fishing rod is thrown to make the hooked fish enter the inventory.

- Too short may result in fish not being hooked and unable to enter the inventory.

- Optional Range: `500 ~ 4000`

![Auto_Fish.gif](/cheat/bkebi-gc/image/Auto_Fish.gif)

### Recast rod

Resets the casting state, allowing you to continue fishing without recasting.

- There is no prompt when resetting the throwing state.

#### Recast Delay (ms)

Set the interval time for each reset of the throwing state.

- Optional Range: `100 ~ 4000`

## Auto Loot

> Automatically collect various items such as materials, treasure chests, and god pupils.

:::warning
Using this function may be at risk.
:::

### Auto-Pickup

Automatically picks up dropped items, materials, etc.

- Similar to pressing `F` automatically.

![Auto-Pickup.gif](/cheat/bkebi-gc/image/Auto-Pickup.gif)

#### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto-Pickup`**</font>](#auto-pickup).

#### Auto disable when bag is full <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Auto disable [<font>**`Auto-Pickup`**</font>](#auto-pickup) when bag is full.

### Auto-Treasure

Automatically interact with selected events.

![Auto-Treasure.gif](/cheat/bkebi-gc/image/Auto-Treasure.gif)

#### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto-Treasure`**</font>](#auto-treasure)。

- Available Options:  
  - `Chests` Common, precious, luxurious, etc.
  - `Leyline` Mora/XP, overworld/Trounce bosses, etc.
  - `Search Points` Marked as Investigate/Search, etc.
  - `Search Points` Valid quest interact points.
  - `Others` Book Pages, Spincrystals, etc.

### Custom Pickup Range

Increase your pick-up range.

- You can pick up the Oculus directly. You can also configure filter picking in [<font>**`Pickup Filter`**</font>](#pickup-filter).

- Interactive events such as treasure chests will not be displayed in the pickup list, but they can be picked up by [<font>**`Auto-Treasure`**</font>](#auto-treasure).

![Custom_Pickup_Range.png](/cheat/bkebi-gc/image/Custom_Pickup_Range.png)

#### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Custom Pickup Range`**</font>](#custom-pickup-range).

- If you need to enable [<font>**`Auto-Pickup`**</font>](#auto-pickup) or [<font>**`Auto-Treasure`**</font>](#auto-treasure) at the same time, please Make sure to turn on [<font>**`Custom Pickup Range`**</font>](#custom-pickup-range) after these two.

- Otherwise, items within the set range may not be picked up automatically.

#### Range (m)

Set the effective range of [<font>**`Custom Pickup Range`**</font>](#custom-pickup-range).

- Optional Range: `0.5 ~ 40`

### Looting Speed

Set the speed of collection.

#### Delay Time (ms)

Set the interval time between each collection of items.

- Optional Range: `0 ~ 1000`

### Looting delay fluctuation

Set the interval between each collection of items as `Random interval`.

- `Random Interval` = [<font>**`Delay Time (ms)`**</font>](#delay-Time-ms) ~ {[<font>**`Delay Time (ms)`**</font>](#delay-Time-ms)+[<font>**`Delay range +(ms)`**</font>](#delay-range-ms)}

#### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**Looting delay fluctuation`**</font>](#Looting-delay-fluctuation)。

#### Delay range +(ms)

Set random delay range.

### Pickup Filter

Filter certain collection items for auto loot.

#### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Pickup Filter`**</font>](#pickup_filter)。

- Unselected collection items will not be automatically picked up when enabled.

- Available Options: 
  
  - `Animals` Fish, Lizard, Frog, Flying animals.
  - `Drop Items` Material, Mineral, Artifact.
  - `Resources` Everything beside Animals and Drop Items (Plants, Books, etc).
  - `Oculus` All Oculus.

## Auto Puzzle

> Autocomplete some special events.

### Auto Puzzle <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Puzzle`**</font>](#auto_puzzle).

- Unable to unlock puzzle that require a specified order.

- Cannot be used together with [<font>**`Custom Element`**</font>](en_US/cheat/bkebi-gc/01_player#custom_element_hotkeys), otherwise functions such as Auto Puzzle, Kill Aura Crash Damage Mode, etc. will fail.

#### General

- Available Options: 
  - `Plants` Auto destroys Dandelion Seed, Sakura Bloom, etc.
  - `Seelie` Touch Seelie once to return it to its original position.
  - `Elemental Monument` Auto activates Elemental Monument.
  - `Torch Puzzle` Auto activates the torch.
  - `Floating Anemo Slime` Auto destroys floating anemo slime.
  - `Bloatty Floatty` Auto destroy Bloatty Floatty.
  - `Windmill Mechanism` Auto activates Windmill.
  - `锅` ???<font color=ffffff>Auto ignites the pot.???</font>
  - `火炬` ???
  - `Parametric Transformer` Auto charging Parametric Transformer.
  - `Daily Commission` Auto resolve some daily commission such as clean stain, fallen leaves and etc.
    - `Modify Balloon cart speed` (Time Scale) et the speed of the Balloon cart.
      - Using this function may be at risk.
      - Optional Range: `0.5 ~ 50`

#### Mondstadt

- Available Options: 
  - `Snow Pile` ???

#### Liyue

- Available Options: 
  - `Geo Puzzle` Will spawn the rock seed around the puzzle, need pickup it and activate by yourself.

#### Inazuma

- Available Options: 
  - `Electro Seelie` Electro Seelie within the range will be automatically homed.
  - `Lightning Strike Probe` Auto-normalize Lightning Strike Probe.
  - `「雷石」` ???
  - `电气传导` ???

#### Sumeru

- Available Options: 
  - `Dendro Rock` Auto unlock stones sealed by grass elements.
  - `Dendro Pile` Auto puzzle of bouncy mushrooms, stones entwined with vines, star mushrooms, poisonous gas mushrooms, three-way seeds, and dream flowers.
  - `众叶觉蕊` ???
  - `Sumeru Puzzlesthe` Auto activate Valaya.
  - `the Tumor of the Withering` Auto clear the Tumor of the Withering.
  - `松散的沙堆` ???

#### Range (m)

Set the effective range of [<font>**`Auto Puzzle`**</font>](#auto_puzzle).

- Optional Range: `1 ~ 150`

#### Delay Time (ms)

Set the interval time between each puzzle solving.

- Optional Range: `500 ~ 10000`

## Auto Talk

> Automatically skip dialogue when interacting with NPCs.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Talk`**</font>](#auto-talk)。

### Toggle Hotkey

Set the hotkey for [<font>**`Auto Talk`**</font>](#auto-talk) to take effect when held down.

- When the set hotkey is not `None`, [<font>**`Auto Talk`**</font>](#auto-talk) is enabled only when [<font>**`Toggle Hotkey`**</font>](#toggle-hotkey) is held down.

- When the set hotkey is `None`, [<font>**`Auto Talk`**</font>](#auto-talk) will always be enabled.

- If you need to switch to take effect, set this to `None` and set the button in [Hotkeys - Auto Talk - Auto Talk](/cheat/bkebi-gc/07_hotkeys#auto-talk-1) .

### Auto-select Dialog <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Auto-select dialog。

- Only the first dialog will be selected.

#### Exclude Katheryne/Tubby/Wagner <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Dialogue options are not automatically selected when talking to Katheryne/Tubby/Wagner.

![Exclude_Katheryne-Tubby-Wagner.png](/cheat/bkebi-gc/image/Exclude_Katheryne-Tubby-Wagner.png)

### Fast Dialog <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Speeds up game while talking.

#### Time Speed

Sets the game speed when talking.

- Optional Range: `2 ~ 50`

### Force Skip Cutscene

Automatically skips game cutscenes.

- Prevents black screen issues caused by fast dialog.

### Skip CG

Automatically skips game movies.

## Auto Tree Farm

> Automatically collects surrounding trees.

:::warning
Using this function may be at risk.
:::

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Tree Farm`**</font>](#auto-tree-farm).

#### Attack Delay (ms)

The time interval before each tree starts to be felled.

- Optional Range: `0 ~ 1000`

#### Repeat Delay (ms)

The time interval between each cut.

- Optional Range: `500 ~ 1000`

#### Attacks per Tree

Set the number of attacks per tree.

- It is recommended to set it to `10` and below to avoid risks caused by excessive logging.

- Set to `0` for unlimited.

- Will reset after game restart.

- Optional Range: `0 ~ 100`

#### Range (m)

Set the effective range of [<font>**`Auto Tree Farm`**</font>](#auto-tree-farm).

- Optional Range: `1 ~ 15`

![Auto_Tree_Farm.gif](/cheat/bkebi-gc/image/Auto_Tree_Farm.gif)

## Elemental Aura

> Constantly apply an element to targets around you.

### Enable Elemental Aura <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Elemental Aura`**</font>](#elemental-aura).

- The Elemental Mastery to which the element is attached is relative to the current character.

- Will pull up the hatred of the attached monster.

- In CO-OP Mode, it only takes effect when becoming [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master) .

![Elemental_Aura.gif](/cheat/bkebi-gc/image/Elemental_Aura.gif)

### Only Hostile/Aggro

It only takes effect monsters targetting/aggro towards you.

### Try Hit Objects

Elemental aura will also try to hit objects around you.

### Smart Element

Automatically select elements based on the type of element required by the entity.

[<font>**`Monster Applied Element`**</font>](#monster-applied-element) and [<font>**`Object Applied Element`**</font>](#object-applied-element) are overridden for required entities.

### Monster Applied Element

Sets the type of element applied to monster.

- Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

### Object Applied Element

Sets the type of element applied to object.

- Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

### Aura Range

Set the effective range of [<font>**`Elemental Aura`**</font>](#elemental-aura).

- Optional Range: `5 ~ 100`

### Queue Delay (ms)

Find the target interval.

- Optional Range: `0 ~ 1000`

### Apply Interval (ms)

Applies elements to the target interval.

- Optional Range: `100 ~ 10000`

### Durability

Sets element attachment time and strength.

- Optional Range: `1 ~ 1000`

## Game Speed

> Speed up all game mechanics.

:::warning
Using this function may be at risk.
:::

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Game Speed`**</font>](#game-speed)。

- In CO-OP Mode, it only takes effect when you become the [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master).

- When the CO-OP Mode is in effect, monsters behave abnormally in the eyes of other players and may not be able to hit teammates after the speed exceeds `4`.

### Hotkey

Set the hotkey for [<font>**`Game Speed`**</font>](#game-speed) to take effect when held down.

- Default Hotkeys: `CapsLock`

- When the set hotkey is not `None`, [<font>**`Game Speed`**</font>](#game-speed) is enabled only when [<font>**`Hotkey`**</font>](#otkey) is held down.

- When the set hotkey is `None`, [<font>**`Game Speed`**</font>](#game-speed) will always be enabled.

- If you need to switch to take effect, set this to `None` and set the button in [Hotkeys - Game Speed](/cheat/bkebi-gc/07_hotkeys#game-speed) .

### Multiplier

Set the multiplier of [<font>**`Game Speed`**</font>](#game-speed).

- Optional Range: `0 ~ 20`

## Kill Aura

> Automatically kills all creatures within range.

### Enable Kill Aura <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Kill Aura`**</font>](#kill-aura).

- There are two modes: [<font>**`Crash Damage Mode`**</font>](#crash-damage-mode-hotkeys) and [<font>**`Instant Death Mode`**</font>](#instant-death-mode-hotkeys)。

- In CO-OP Mode, it only takes effect when becoming [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master).

### Use AFK Attack <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Use Teleport to attack monsters within the distance of the monster.

- Using this function may be at risk.

- This function does not work in the current version.

#### Teleport Delay (ms)

The delay between each transfer.

#### Detection radius (m)

Set the detection range of [<font>**`Use AFK Attack`**</font>](#use-afk-attack).

- It is recommended to be larger than the [<font>**`Kill Range`**</font>](#kill-range), otherwise there will be no targets within the range and the teleportation will not be possible.

### Crash Damage Mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Attacks with fall damage.

- White / No critical damage value prompt.

- Enabling `Auto Destroy Objects - Shields` may cause this feature to not work.<font size="2" color="#b6b6ba">&nbsp;[Build Fixed]&nbsp;</font>

#### Damage Value

Sets the damage value of the attack.

- Optional Range: `0 ~ 10000000`

#### Percent mode (Kill times) <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

The specified number of kills is based on the damage value inferred from the target's maximum blood volume to attack.

- Optional Range: `1 ~ 100`

![Crash_Damage_Mode.gif](/cheat/bkebi-gc/image/Crash_Damage_Mode.gif)

### Instant Death Mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Clear entities directly.

- No damage value prompt.

- May not generate drops.

- Can getbuggy withbosses like PMA and Hydro Hypo.

![Instant_Death_Mode.gif](/cheat/bkebi-gc/image/Instant_Death_Mode.gif)

### Crash Attack Delay (ms)

Set the interval time between each search for the target.

- Optional Range: `0 ~ 1000`

### Crash Repeat Delay (ms)

Set the interval time between each attack.

- Optional Range: `100 ~ 2000`

### Kill Range

Set the effective range of [<font>**`Kill Aura`**</font>](#kill-aura).

- Optional Range: `5 ~ 100`

### Only Hostile/Aggro

It only takes effect monsters targetting/aggro towards you.

## Mob Vacuum

> Selected mobs within range will move directly in front of the player.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Mob Vacuum`**</font>](#mob-vacuum).

- It may not be effective for interactions such as Sweet Flower.

- Most of the adsorption effects in CO-OP Mode are only visible to you.

![Mob_Vacuum.gif](/cheat/bkebi-gc/image/Mob_Vacuum.gif)

### Monsters (Include Monsters) <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Whether it works on monsters.

- Available Options: 
  - `Common` Common enemies.
  - `Elite` Elite enemies.
  - `Boss` World and Trounce boss enemies.

### Animals (Include Animals) <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Whether it works on animals.

- Available Options: 
  - `Droppers` Animals you need to kill before collecting.
  - `Pick-ups` Animals you can immediately collect, but may include fish from fishing spots. 
  - `NPCs` Creatures that cannot be attacked.

### Instant Vacuum

Causes the vacuum object to immediately move directly in front of the player.

### Only Hostile/Aggro

It only takes effect monsters targetting/aggro towards you.

### Remove Collider <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Removes the hitbox of all entities so that you cannot be pushed by any mobs.

### Speed

Set the vacuum speed.

- Optional Range: `1 ~ 15`

### Radius (m)

Set the effective range of [<font>**`Mob Vacuum`**</font>](#mob-vacuum).

- Optional Range: `5 ~ 150`

### Distance (m)

Sets the distance mobs vacuum to directly in front of the player.

- Optional Range: `0.5 ~ 10`

## Monster Changer

> Replaces the spawned creature with the specified creature.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Monster Changer`**</font>](#monster-changer).

- Replaces mobs on native mob load.

- Mob health and drops are not replaced.

- In CO-OP Mode, the replaced creature model is only visible to you, and other players can only see the model before the replacement.

- In CO-OP Mode, the attacks and skills of monsters can only be replaced when you become the [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master) .

![Monster_Changer.png](/cheat/bkebi-gc/image/Monster_Changer.png)

### Exclude animal

Don't change animals such as dog, cat, pigeon and etc.

### Custom Monsterld (Monsterld Go to view)

The `Monsterld` after custom replacement.

- `Monsterld` can be obtained in [GM Handbook](/hack/resources/GM_Handbook) .

- Optional Range: `1 ~ 1000000000`

### Monster

Use built-in mobs without using [<font>**`Custom Monsterld`**</font>](#custom-monsterid).

- Available Options: `Hilichurl` `HilichurlShooter` `HilichurlGrenadier` `StonehideLawachurl` `DendroSamachurl` `LargeDendroSlime` `LargeAnemoSlime` `LargeElectroSlime` `MutantElectroSlime` `LargeCryoSlime` `LargeHydroSlime` `LargePyroSlime` `LargeGeoSlime` `AbyssLector_VioletLightning` `ShogunateInfantry` `Beisht` `Stormterror` `LupusBoreasDominatorOfWolves` `Childe_EleventhoftheFatuiHarbingers` `Childe_DelusionUnleashed` `Childe` `Azhdaha` `LaSignora` `Lasignora_CrimsonWitchOfEmbers` `RaidenShogun` `RaidenEi` `MagatsuMitakeNarukamiNoMikoto` `Nada` `Nada_2`

## Skip XumiMusic

> ???<font color=ffffff>Can be quickly completed when completing certain puzzle with Vintage Lyre.???</font>

:::info
soon...
:::

### Enabled

???<font color=ffffff>Enables Skip XumiMusic 。???</font>

### AnyKey

???<font color=ffffff>Use any key to complete puzzle playing.???</font>

### OneTapSkip

???<font color=ffffff>Press any key to directly complete the puzzle playing.???</font>

## Vacuum Loot

> Selected loot within range will move directly in front of the player.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Vacuum Loot`**</font>](#vacuum-loot).

- It may make it impossible to pick up the Apple, Sunsettia, Onikabuto, Crystalfly, Bird Egg, etc. that were originally on the tree after adsorption.

![Vacuum_Loot.gif](/cheat/bkebi-gc/image/Vacuum_Loot.gif)

### Delay Time (ms)

The interval between each movement of the dropped item.

- Optional Range: `0 ~ 1000`

### Radius (m)

Sets the effective range for common items.

- Optional Range: `5 ~ 100`

### Mob Drop Radius (m)

Sets the effective range for mob drop items.

- Optional Range: `5 ~ 100`

### Distance (m)

Sets how far in front of the player the drop will vacuum to.

- Optional Range: `1 ~ 10`

### Loot Types

Select an item that works on [<font>**`Vacuum Loot`**</font>](#vacuum-loot).

- Available Options: 
  - Equipment: `Artifact` `Bow` `Catalyst` `Claymore` `Sword` `Pole`
  - Featured: `Item Drops`
  - Living: `Crystal Core` `Meat` `Crab` `Eel` `Lizard Tail` `Fish`
  - Mineral: `Amethyst Lump Drop` `Crystal Chunk Drop` `Electro Crystal Drop` `Iron Chunk Drop` `Noctilucous Jade Drop` `Magical Crystal Chunk Drop` `Scarlet Quartz Drop` `Starsilver Drop` `White Iron Chunk Drop`
  - Plant: `Apple` `Cabbage` `Carrot Drop` `Potato` `Radish Drop` `Sunsettia` `Wheat`
