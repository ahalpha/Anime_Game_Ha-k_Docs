---
title: Bkebi-GC
editLink: true
---

# Player

Modify various mechanics related to the character.

## Attack Effects

> Enhance character attack and damage effects.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Multi-Hit Mode`**</font>](#multi-hit-mode-hotkeys), [<font>**`Multi-Target`**</font>](#multi-target-hotkeys), and [<font>**`Multi-Animation`**</font>](#multi-animation-hotkeys).

---

### Multi-Hit Mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Multiplies your attack count.

- There are three modes: [<font>**`Multiplier`**</font>](#multiplier), [<font>**`One-Punch Mode`**</font>](#one-punch-mode),and [<font>**`Randomize Multiplier`**</font>](#randomize-multiplier-hotkeys).

- It will take effect only if the [<font>**`Enabled`**</font>](#enabled-hotkeys) hotkeys above is checked.

### Multiplier

Attack count multiplier.

- Only takes effect if [<font>**`One-Punch Mode`**</font>](#one-punch-mode) and [<font>**`Randomize Multiplier`**</font>](#randomize-multiplier-hotkeys) are off.

- Using this function may be at risk.
  
- Optional Range: `2 ~ 1000`

![Muliti-Hit_Mode.gif](/cheat/bkebi-gc/image/Muliti-Hit_Mode.gif)

### One-Punch Mode

Calculate how many attacks are needed to kill an enemy based on their HP.

- Will override the effect of the [<font>**`Multiplier`**</font>](#multiplier) above.

- Will override the effect of the [<font>**`Randomize Multiplier`**</font>](#randomize-multiplier-hotkeys) below.

- Maximum 200 multiplier for one attack.

![One-Punch_Mode.gif](/cheat/bkebi-gc/image/One-Punch_Mode.gif)

### Randomize Multiplier <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Randomize multiplier between min and max multiplier.

- Will override the effect of the [<font>**`Multiplier`**</font>](#multiplier) above.

- Only takes effect if [<font>**`One-Punch Mode`**</font>](#one-punch-mode) is off.

#### Min Multiplier

Sets the minimum value for the Randomize Multiplier.

- Optional Range: `1 ~ 1000`

#### Max Multinlier

Sets the maximum value for the Randomize Multiplier.

- Optional Range: `2 ~ 1000`

![Randomize_Mulitiplier.gif](/cheat/bkebi-gc/image/Randomize_Mulitiplier.gif)

---

### Multi-Target <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

All valid targets around initial target will be hit base on setting.

- Damage numbers will only appear on initial target. 

- Similar to ID damage effect.

#### Radius (m)

Set the effective range of [<font>**`Multi-Target`**</font>](#multi-target-hotkeys).

- Optional Range: `5 ~ 50`

![Multi-Target.gif](/cheat/bkebi-gc/image/Multi-Target.gif)

---

### Multi-Animation <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Make animations such as global attacks play repeatedly and cause damage multiple times.

- Can act on any entity.

- In CO-OP Mode, it is only valid for entities within a certain range when becoming a [<font>**`CO-OP Master`**</font>](/en_US/hack/resources/CO-OP_Master).

- Using this function may be at risk.

#### Animation Multiplier

Configure to how many times it will update the animation state.

- Optional Range: `1 ~ 150`

#### OnlyPlayer

Make [<font>**`Multi-Animation`**</font>](#multi-animation-hotkeys), [<font>**`Weapon Infusion`**</font>](#weapon-infusion), and [<font>**`CritcalHit`**</font>](#critcalHit) only work on the currently character and not on entities.

![Multi-Animation.gif](/cheat/bkebi-gc/image/Multi-Animation.gif)

---

### Attack Speed <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

The character speeds up the character while attacking.

- If it is turned off when the character is attacking, the character will always maintain the speed when attacking.

#### Speed Multiplier

Set the speed multiplier of the character when attacking.

- Optional Range: `1 ~ 5`

![Attack_Speed.gif](/cheat/bkebi-gc/image/Attack_Speed.gif)

---

### Custom Element <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Allows you to customize the element type of damage.

- There are three modes: [<font>**`RandomElementType`**</font>](#randomelementtype)、[<font>**`ElementType`**</font>](#elementtype)以及[<font>**`Queued Element`**</font>](#queued-element-hotkeys)。

- To close this function, you need to reload the scene.

### RandomElementType

Randomly select the type of element that causes damage.

- Will override the effect of the [<font>**`ElementType`**</font>](#elementtype) below.

- Randomly Options: `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

![RandomElementType.gif](/cheat/bkebi-gc/image/RandomElementType.gif)

### ElementType

Sets the type of element that deals damage.

- Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

![ElementType.png](/cheat/bkebi-gc/image/ElementType.png)

### Queued Element <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Customize the order of element types that deal damage.

- Will override the effect of the [<font>**`ElementType`**</font>](#elementtype) below.

#### Add

Adds the element selected by [<font>**`ElementType`**</font>](#elementtype) to the end of the list.

#### Cleat

Clear all items in the list.

#### Remove Last

Delete the last item in the list.

![Queued_Element.gif](/cheat/bkebi-gc/image/Queued_Element.gif)

### Auto reset queue if no attacks (Reset time (ms) )

After switching elements once, it takes a set time before the next switch can be performed.

- Optional Range: `1000 ~ 600000`

### Delayed move to next element (Delay Time (ms) )

After switching elements once, it takes a set time before switching next time.

- Optional Range: `1 ~ 1000`

---

### Auto weakspot

Make some monsters be in the main position when they are attacked by bow and arrow characters.

- This function does not work in the current version.

---

### CritcalHit

Make every Hit is Critcal.

- Cannot take effect on characters with negative crit rate, such as Kokomi.

- Currently causing certain characters to be unable to deal damage.

- If enabled [<font>**`OnlyPlayer`**</font>](#onlyplayer), it will only work for the current character.

![CritcalHit.gif](/cheat/bkebi-gc/image/CritcalHit.gif)

---

### Weapon Infusion <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Infuse the weapons of one-handed swords, two-handed swords, and polearm characters with the specified element.

- In the CO-OP Mode, the weapon infusion effect can only be seen by yourself.

- Infusion with effects but no color: `Dendro` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

### RandomElementType

Randomly selects the elemental type for [<font>**`Weapon Infusion`**</font>](#weapon-infusion).

- Will override the effect of the [<font>**`ElementType`**</font>](#elementtype-1) below.

- Randomly Options: `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

#### ElementType

Sets the elemental type for [<font>**`Weapon Infusion`**</font>](#weapon-infusion).

- Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

![Weapon_Infusion.gif](/cheat/bkebi-gc/image/Weapon_Infusion.gif)

## Auto Run

> Automatically move towards the front of the camera.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Auto Run`**</font>](#auto-run)。

- Actions such as walking, running, and jumping of the character will appear abnormal.

### Speed

Sets the speed of [<font>**`Auto Run`**</font>](#auto-run).

- Optional Range: `0.01 ~ 1000`

![Auto_Run.gif](/cheat/bkebi-gc/image/Auto_Run.gif)

## Constellation Modifier

> ???<font color=ffffff>Activates all constellation for the selected character.???</font>

:::info
From Bkebi-1.0.2 onwards, this function is only available for Debug builds.
:::

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

???<font color=ffffff>Enables Constellation Modifier .???</font>

- ???<font color=ffffff>It may be necessary to re-deploy the character in the party setup or switch maps to take effect.???</font>

- ???<font color=ffffff>Only a few constellation are effective, and the effective constellation can be referred to: (@Strigger) [Info] Working Constellations 。???</font>

### Custom Constellation

???

- ???<font color=ffffff>Using this function may be at risk.???</font>

### Constellation

???<font color=ffffff>Select a character to activate all of its constellations.???</font>

- ???<font color=ffffff>Available Options: Ayaka Jean Lisa Barbara Kaeya Diluc Razor Amber Venti Xiangling Beidou Xingqiu Xiao Ningguang Klee Zhongli Fischl Bennett Tartaglia Noel Qiqi Chongyun Ganyu Albedo Diona Mona Keqing Sucrose Xinyan Rosaria HuTao Kazuha Feiyan Yoimiya Thoma Eula Shogun Sayu Kokomi Gorou Sara Itto Yae Heizou Yelan Aloy Shenhe Yunjin Shinobu Ayato Collei Collei Tighnari Nilou Cyno Candace Nahida Layla Wanderer Faruzan Yaoyao Alhaitham Dehya Mika ???</font>

## Cooldown Effects

> Set the cooldown effect related to cooldown (such as skills, bow charge, etc.).

### Max Burst Energy <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Removes energy requirement for elemental bursts.

- Still not in a state of full energy all the time, energy can be accumulated and the energy will be emptied after using the elemental burst.

- The full energy status of all characters will be displayed on the right. Sometimes it will not be full energy but will display a charged state.

![Max_Burst_Energy.png](/cheat/bkebi-gc/image/Max_Burst_Energy.png)

### Reduce Skill/Burst Cooldown <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

The cooldowns time for elemental skills and bursts is `Set value`-1s.

- Optional Range: `1 ~ 6`

![Reduce_Skill-Burst_Cooldown.gif](/cheat/bkebi-gc/image/Reduce_Skill-Burst_Cooldown.gif)

### No Sprint Cooldown <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Removes delay in-between sprints.

![No_Sprint_Cooldown.gif](/cheat/bkebi-gc/image/No_Sprint_Cooldown.gif)

### Instant Bow Charge <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Disable cooldown of bow charge.

- Some characters may have to wait a while before starting to charge their bow.

- Currently causes Fischl to be unable to shoot arrows.

- If Instant Bow Charge doesn't work: Please click here to report the issue on [this Discord server](https://discord.com/channels/1026295403282436097/1073216872931151922) .

![Instant_Bow_Charge.gif](/cheat/bkebi-gc/image/Instant_Bow_Charge.gif)

### Ability Log [DEBUG]

Global ability log.

- Only the most recent 50 entries are logged.

## Enhanced Movement

> Enhanced mechanics related to character movement.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Enhanced Movement`**</font>](#enhanced-movement).

---

### Jump Boost <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Increases the character's jump height.

- Affects the falling speed of the character.

#### Apply Mid-air

You can use `Space` to increase the height of the character when deploying the glider.

#### Vertical Velocity

The speed at which the character jumps, rises, and falls.

- Optional Range: `1 ~ 100`

---

### Blink Movement

Use the shortcut keys to instantly move forward a certain distance. You can also press `W` `S` `A` `D` to specify the direction of movement.

- Set [<font>**`Blink Hotkey`**</font>](#blink-hotkey) to enable this feature.

- Effective when the character is on the ground and using glider.

- In CO-OP Mode, other players cannot see your frequent Blink behavior.

#### Blink Hotkey

Set the hotkey to use [<font>**`Blink Movement`**</font>](#blink-movement).

- Default Hotkeys: `Home`

#### Target Entities

Will be blink to [<font>**`Default Targets`**</font>](#default-targets) and [<font>**`Target In ESP`**</font>](#target-in-esp) around.

#### Blink Distance

Sets the maximum distance for one [<font>**`Blink Movement`**</font>](#blink-movement).

- Optional Range: `1 ~ 10`

#### Detect range

Sets the effective range for[<font>**`Target Entities`**</font>](#target-entities).

- Optional Range: `1 ~ 40`

#### Manual Target Hotkey

Blink to the hotkeys next to the entity.

- When the set hotkey is not `None`, it will use the [<font>**`Manual Target Hotkey`**</font>](#manual-target-hotkey) to blink to the entity instead of using the [<font>**`Blink Hotkey`**</font>](#blink-hotkey) at the same time as the normal blink.

- When the set hotkey is `None`, the entity will be flashed with [<font>**`Blink Hotkey`**</font>](#blink-hotkey) at the same time as the normal blink.

#### Target In ESP

Whether to set ESP items or entities as blink targets.

#### Exceed Distance

[<font>**`Blink Distance`**</font>](#blink-distance) will be ignored for [<font>**`Target Entities`**</font>](#target-entities)。

- Using this function may be at risk.

#### Default Targets

Will blink to entities of the type present in the list.

#### Add

Add an entity type to the [<font>**`Default Targets`**</font>](#default-targets) list.

- Available Options: `None` `Avatar` `Monster` `Bullet` `AttackPhyisicalUnit` `AOE` `Camera` `EnviroArea` `Equip` `MonsterEquip` `Grass` `Level` `NPC` `TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `DropItem` `Field` `Gadget` `Water` `GatherPoint` `GatherObject` `AirflowField` `SpeedupField` `Gear` `Chest` `EnergyBall` `ElemCrystal` `Timeline` `Worktop` `Team` `Platform` `AmberWind` `EnvAnimal` `SealGadget` `Tree` `Bush` `QuestGadget` `Lightning` `RewardPoint` `RewardStatue` `MPLevel` `WindSeed` `MpPlayRewardPoint` `ViewPoint` `RemoteAvatar` `GeneralRewardPoint` `PlayTeam` `OfferingGadget` `EyePoint` `MiracleRing` `Foundation` `WidgetGadget` `Vehicle` `DangerZone` `EchoShell` `HomeGatherObject` `Projector` `Screen` `CustomTile` `FishPool` `FishRod` `CustomGadget` `RoguelikeOperatorGadget` `ActivitylnteractGadget` `BlackMud` `SubEquip` `UllnteractGadget` `NightCrowGadget` `Partner` `DeshretObeliskGadget` `CoinCollectLevelGadget` `PlaceHolder`

#### Remove

Remove this type from the list.

#### Target Indicator

Set target indicator.

#### Show Crosshair

Show a visual indicator to the nearest entity.

#### Color

Sets the color of the visual indicator.

#### Radius

Sets the line length of the visual indicator.

#### Fill

Sets the opacity of the visual indicator fill.

#### Stroke

Sets the line width of the visual indicator.

#### Use Custom Directional Keys

Whether to use a custom hotkey to control the direction of [<font>**`Blink Movement`**</font>](#blink-movement).

- Available Settings: Forward HotKey | Back HotKey | Left HotKey | Left HotKey

## Fall-Control

> Allows the character to use `W` `S` `A` `D` horizontal displacement when falling.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`Fall-Control`**</font>](#fall-control)。

### Speed

Sets the horizontal movement speed of the character when falling.

- Optional Range: `0 ~ 100`

![Fall-Control.gif](/cheat/bkebi-gc/image/Fall-Control.gif)

## Ga Teammate

> ???<font color=ffffff>Allows you to damage other players.???</font>

:::info
This function is only available for Debug builds.
:::

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

???<font color=ffffff>Enables Ga Teammate .???</font>

- ???<font color=ffffff>Object damage type.???</font>

### InitObi

???<font color=ffffff>Object that loads the other player's entity.???</font>

### ResetObi

???<font color=ffffff>Clear loaded objects.???</font>

## God Mode

> Prevents the character from taking damage.

### God Mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

So that the character will not receive any damage from monsters and the environment.

- Does not accumulate Sheer Cold and some mechanics like it.

![God_Mode.gif](/cheat/bkebi-gc/image/God_Mode.gif)

#### Conditional

Precondition for enabling [<font>**`God Mode`**</font>](#god -mode-hotkeys).

#### Minimum Health

[<font>**`God Mode`**</font>](#god-mode-hotkeys) can only be triggered when the set percentage exceeds the current character's HP percentage.

- Optional Range: `0.1 ~ 100`

![Minimum_Health.png](/cheat/bkebi-gc/image/Minimum_Health.png)

#### Missing Attack Rate

Sets the percentage chance of triggering [<font>**`God Mode`**</font>](#god-mode-hotkeys).

- Optional Range: `0 ~ 100`

### Undead <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Immune to environmental damage, and dodge all numerical damage greater than the current HP of the current character.

- This feature may not work against certain attacks.

### No Fall <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Anti-fall damage.

![No_Fall.gif](/cheat/bkebi-gc/image/No_Fall.gif)

## Infinite Stamina

> Make the character's stamina no longer decrease.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Make sprinting, climbing, swimming, and flying no longer consume stamina.

- Sometimes it may cause inability to sprint, climb, fly, etc. You need to restart the game to recover.

![Infinite_Stamina.png](/cheat/bkebi-gc/image/Infinite_Stamina.png)

#### Move Sync Packet Replacement

This mode prevents sending server packets with stamina cost actions like sprinting, climbing, flying, etc.

- When online, teammates will see your character behave abnormally, such as blink, walking in water, etc.

## No-Clip

> Replace the original movement mechanism so that the character can move freely in the world.

### Enabled <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Enables [<font>**`No-Clip`**</font>](#no-clip).

- In CO-OP Mode, you will see other players move abnormally.

- Other players may not be able to see you flying in the air but just walking on the ground.

- Default Hotkeys: `W` - Forward Movement | `S` - Back Movement | `A` - Left Movement | `D` - Right Movement | `Space` - Ascend Movement (relative to avatar view/direction)  | `LCtrl` - Descend Movement (relative to avatar view/direction)  

![No-Clip.gif](/cheat/bkebi-gc/image/No-Clip.gif)

### No Animation <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Allows the character to maintain action states such as standing, falling, swimming, and flying when [<font>**`No-Clip`**</font>](#no-clip).

- You need to enable No-Clip in the standing state to use actions such as attacks.

![No_Animation.png](/cheat/bkebi-gc/image/No_Animation.png)

### Speed

Set the speed of No-Clip.

- Optional Range: `2 ~ 100`

### Camera-relative movement

When using `W` `S` `A` `D` or [<font>**`Use Custom Keys`**</font>](#use-custom-keys) controls are relative to the camera direction instead of the character facing.

### Alternate No-clip

Hold down `LCtrl` or [<font>**`Use Custom Keys`**</font>](#use-custom-keys) in [<font>**`No-Clip`**</font>](#no-clip) will use the lower [<font>**`Alt Speed`**</font>](#alt-speed) and use the lower [<font>**`Speed`**</font>](#speed-2)。

### Alt Speed

Set an alternate speed.

- Optional Range: `2 ~ 100`

### Velocity mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Add gravity to the character to simulate the real way of movement to solve some walking through the model problem.

- It can solve the problem that the character can only move forward when [<font>**`No Animation`**</font>](#no-animation-hotkeys) and [<font>**`Camera-relative movement`**</font>](#camera-relative-movement) are not enabled.

### Freeflight mode <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Don't remove collisions.

- You may not be able to traverse some collisions at too low a speed.

![Freeflight_mode.gif](/cheat/bkebi-gc/image/Freeflight_mode.gif)

### Use Custom Keys

Sets a hotkey for [<font>**`No-Clip`**</font>](#no-clip).

Available Settings: Forward HotKey | Left HotKey | Back HotKey | Right HotKey | Ascend Hotkey | Descend HotKey | Alt Speed Key

### DragBackBypass <font size="2" color="#5FC3E4">&nbsp;&lt;Hotkeys&gt;&nbsp;</font>

Prevent being dragged back by the server due to excessive speed.

## Remote Utility

> Remotely perform some special requests.

### Crafting

Execute a combine request without a alchemy table.

#### Condense Resin

Quickly combine a Condense Resin.

- If the combine is successful, it will be directly entered into the Inventory without any prompt.

#### Spawn Alchemy Table

Instantly spawns a Alchemy Table in front of you.

![Spawn_Alchemy_Table.png](/cheat/bkebi-gc/image/Spawn_Alchemy_Table.png)

#### Hoykeys

Sets related hotkeys for [<font>**`Crafting`**</font>](#crafting).

Available Settings: Condense Resin | Spawn Alchemy Table

#### Custom Combine

Custom Combine.

#### Combine ID

Combine is performed using a custom [<font>**`Combine ID`**</font>](#combine-id).

- The [<font>**`Combine ID`**</font>](#combine-id) can be obtained in the `combineId` column in [CombineExcelConfigData](/hack/resources/CombineExcelConfigData).

#### Count

Sets the count of combine.

- Optional Range: `1 ~ 100`

#### Combine

Use the current character to do [<font>**`Count`**</font>](#count) combine with [<font>**`Combine ID`**</font>](#combine-id).

- If the combine is successful, it will be directly entered into the Inventory without any prompt.

---

### Summon NPC

Summon NPC.

#### Katheryne

Instantly spawns a Katheryne in front of you.

#### Wagner

Instantly spawns a Wagner(Mondstadt's Blacksmith) in front of you.

#### Cat Prince

Instantly spawns a Prince(The Cat's Tail Owner) in front of you.

#### Hotkeys

Sets related hotkeys for [<font>**`Summon NPC`**</font>](#summon-npc).

Available Settings: Katheryne | Wagner | Cat Prince

---

### Open UI Page

Show some UI page directly.

- It may cause the game to crash when used in some UI (such as Inventory, Adventurer Handbook, Craft, Forge, Settings).

#### Open Paimon Menupage

Open Paimon menupage.

#### Open Cooking Page

Open cooking page.

#### Hoykeys

Sets related hotkeys for [<font>**`Open UI Page`**</font>](#open-ui-page).

Available Settings: Open Paimon Menupage | Open Cooking Page

---

### Enter Domains

???<font color=ffffff>Quickly enter the domains.???</font>

- ???<font color=ffffff>Using this function may be at risk.???</font>

#### Domains ID

???<font color=ffffff>Set Domains ID.???</font>

#### Enter

???<font color=ffffff>Enter the domains.???</font>

---

### Worship Statue

Offer Oculi up without relying to the Statue.

#### Oculus type

Set the type of Oculus that needs to be offer.

- Available Options: `Anemoculos` `Geoculus` `Electroculus` `Dendroculus`

#### Worship!

Offer [<font>**`Count`**</font>](#count-1) of the selected type of Oculus.

- After the offer is successful, the number of Oculus will be consumed without any prompt.

#### Count

The count to be offered.

- Optional Range: `1 ~ 666`

---

### Change Traveler Element

Makes the Traveler quickly resonate with the set element without relying on the Statue.

- Statues that require the current world to be enabled for resonance: 
  - Statues of The Seven - Anemo: Windrise, Mondstadt
  - Statues of The Seven - Geo: Dihua Marsh, Liyue
  - Statues of The Seven - Electro: Ritou, Inazuma
  - Statues of The Seven - Dendro: Gandharva Ville, Sumeru
- Unable to resonate in Domains, Enkanomiya, and The Chasm: Underground Mines.

#### ElementType (Resonance!)

Sets the element type for resonance.

- Available Options: `Wind` `Rock` `Electric` `Grass`

#### Hoykeys

Use hotkeys to quickly resonate to set element types.

- Available Settings: ResonanceWind | ResonanceWind | ResonanceElectric | ResonanceGrass

![Change_Traveler_Element.gif](/cheat/bkebi-gc/image/Change_Traveler_Element.gif)