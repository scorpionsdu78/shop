import type {Item} from '../../models/item.ts'

export default (): Promise<Item[]> => {
  return Promise.resolve([
    {
      name: "Bead of Nourishment",
      source: "XDMG",
      page: 235,
      freeRules2024: true,
      rarity: "common",
      wondrous: true,
      entries: [
        "This flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of Rations."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      miscTags: [
        "CF/W",
        "CNS"
      ]
    },
    {
      name: "Bead of Nourishment",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Bead of Nourishment|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This spongy, flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of rations."
      ],
      miscTags: [
        "CF/W",
        "CNS"
      ]
    },
    {
      name: "Bead of Refreshment",
      source: "XDMG",
      page: 235,
      rarity: "common",
      wondrous: true,
      entries: [
        "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Bead of Refreshment",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Bead of Refreshment|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This spongy, flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Boots of False Tracks",
      source: "XDMG",
      page: 239,
      rarity: "common",
      wondrous: true,
      entries: [
        "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size."
      ],
      lootTables: [
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Boots of False Tracks",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Boots of False Tracks|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
      ]
    },
    {
      name: "Bottle of Boundless Coffee",
      source: "SCC",
      page: 38,
      rarity: "common",
      wondrous: true,
      entries: [
        "This metal bottle carries delicious, warm coffee. The bottle comes with a stopper, which is attached to the bottle by a little chain. Even when open, the bottle won't accept any liquid other than the coffee it produces. The coffee inside is always comfortably warm, and none of the heat can be felt through the bottle.",
        "Each time you drink the coffee, roll a {@dice d20}. On a 1, the bottle refuses to dispense coffee for the next hour. If you pour coffee from the bottle, rather than drinking from it, the coffee vanishes the moment it leaves the bottle."
      ]
    },
    {
      name: "Breathing Bubble",
      source: "EGW",
      page: 266,
      otherSources: [
        {
          source: "CRCotN",
          page: 213
        }
      ],
      rarity: "common",
      wondrous: true,
      entries: [
        "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet.",
        "The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn."
      ]
    },
    {
      name: "Candle of the Deep",
      source: "XDMG",
      page: 242,
      rarity: "common",
      wondrous: true,
      entries: [
        "The flame of this candle isn't extinguished when immersed in water. It gives off light and heat like a normal candle."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Candle of the Deep",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Candle of the Deep|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
      ]
    },
    {
      name: "Cartographer's Map Case",
      source: "AI",
      page: 20,
      rarity: "common",
      wondrous: true,
      entries: [
        {
          type: "entries",
          name: "Map of Shortcuts",
          entries: [
            "At rank 3, your map case becomes a common magic item. In addition to storing normal maps, your cartographer's map case can be used to generate a special map identifying a shortcut. You can use your action to make a {@dc 15} Wisdom ({@skill Perception}) check, with a success revealing a map buried in your cartographer's map case noting a relevant shortcut. Your travel time is reduced by half while you follow that route. If you succeed at the check by 5 or more, the map includes notes on the terrain, granting you advantage on the next ability check you make to travel through the mapped area in the next hour. Once you use this feature, you cannot use it again until you finish a long rest."
          ]
        },
        {
          type: "entries",
          name: "Map of the Moment",
          entries: [
            "Starting at rank 3, you can use an action to make a {@dc 15} Wisdom ({@skill Perception}) check and search your cartographer's map case to find a map either related to your current mission or inspiring a new one. On a success, you find a map with a prominent landmark. The map has information on the natural terrain within one mile of the landmark. Once you use this feature, you cannot use it again until dawn seven days later.",
            {
              type: "table",
              caption: "Possible Map Mission Landmarks",
              colLabels: [
                "d8",
                "Landmark"
              ],
              colStyles: [
                "col-2 text-center",
                "col-10"
              ],
              rows: [
                [
                  "1",
                  "The Ancient Sarcophagus of Gerald Smith"
                ],
                [
                  "2",
                  "A tree labeled \"This tree\""
                ],
                [
                  "3",
                  "\"The Last Resting Place of My Rich Brother that is Also a Bear Cave\""
                ],
                [
                  "4",
                  "A range of peaks known as the Slightly Wobbly Spires"
                ],
                [
                  "5",
                  "An ever-flowing, nonmagical spigot of pure, clear water in the middle of nowhere"
                ],
                [
                  "6",
                  "A cave filled with screaming bioluminescent worms"
                ],
                [
                  "7",
                  "The most haunted forest for ten miles in any direction"
                ],
                [
                  "8",
                  "A huge pile of rocks with no other rocks within sight"
                ]
              ]
            }
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Charlatan's Die",
      source: "XDMG",
      page: 243,
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      entries: [
        "Whenever you roll this six-sided die, you can control which number it rolls."
      ],
      lootTables: [
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Charlatan's Die",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Charlatan's Die|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      entries: [
        "Whenever you roll this six-sided die, you can control which number it rolls."
      ]
    },
    {
      name: "Chest of Preserving",
      source: "WDMM",
      page: 139,
      rarity: "common",
      wondrous: true,
      weight: 25,
      entries: [
        "Food and other perishable items do not age or decay while inside a Chest of Preserving. The chest is 2½ feet long, 1½ feet wide, and 1 foot tall with a half-barrel lid. The chest has a lock, which can be picked with {@item thieves' tools|PHB} and a successful {@dc 15} Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical."
      ]
    },
    {
      name: "Cleansing Stone",
      source: "ERLW",
      page: 276,
      rarity: "common",
      wondrous: true,
      entries: [
        "A cleansing stone is a sphere 1 foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person.",
        "Such stones are often embedded in pedestals in public squares in Aundair or in high-end Ghallanda inns."
      ]
    },
    {
      name: "Cloak of Billowing",
      source: "XDMG",
      page: 244,
      rarity: "common",
      wondrous: true,
      entries: [
        "While wearing this cloak, you can take a {@variantrule Bonus Action|XPHB} to make it billow dramatically for 1 minute."
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of Billowing",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Cloak of Billowing|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While wearing this cloak, you can use a bonus action to make it billow dramatically."
      ]
    },
    {
      name: "Cloak of Many Fashions",
      source: "XDMG",
      page: 245,
      rarity: "common",
      wondrous: true,
      entries: [
        "While wearing this cloak, you can take a {@variantrule Bonus Action|XPHB} to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of Many Fashions",
      source: "XGE",
      page: 136,
      reprintedAs: [
        "Cloak of Many Fashions|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties."
      ],
      hasFluffImages: true
    },
    {
      name: "Clockwork Amulet",
      source: "XDMG",
      page: 245,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      charges: 1,
      entries: [
        "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. Faint ticking and whirring noises emanate from within.",
        "When you make an attack roll while wearing the amulet, you can forgo rolling the {@dice d20} to get a 10 on the die. Once used, this property can't be used again until the next dawn."
      ],
      lootTables: [
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Clockwork Amulet",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Clockwork Amulet|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.",
        "When you make an attack roll while wearing the amulet, you can forgo rolling the {@dice d20} to get a 10 on the die. Once used, this property can't be used again until the next dawn."
      ]
    },
    {
      name: "Clothes of Mending",
      source: "XDMG",
      page: 245,
      rarity: "common",
      wondrous: true,
      entries: [
        "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way."
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ]
    },
    {
      name: "Clothes of Mending",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Clothes of Mending|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way."
      ]
    },
    {
      name: "Coin of Delving",
      source: "EGW",
      page: 266,
      rarity: "common",
      wondrous: true,
      entries: [
        "This scintillating copper coin sheds dim light in a 5-foot radius. If dropped a distance greater than 5 feet, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone."
      ],
      light: [
        {
          dim: 5
        }
      ]
    },
    {
      name: "Common Glamerweave",
      source: "ERLW",
      page: 277,
      rarity: "common",
      wondrous: true,
      entries: [
        "Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth."
      ]
    },
    {
      name: "Cuddly Strixhaven Mascot",
      source: "SCC",
      page: 38,
      rarity: "common",
      wondrous: true,
      entries: [
        "Representing one of the mascots of Strixhaven, this soft, Tiny, magic toy is perfect for cuddling. If you press it to your arm, shoulder, or leg as an action, the toy stays attached there for 1 hour or until you use an action to remove it.",
        "The toy can also be used to fight off fear. When you make a saving throw to avoid or end the {@condition frightened} condition on yourself, you can give yourself advantage on the roll if the toy is on your person. You must decide to do so before rolling the {@dice d20}. If the save succeeds, you can't use the toy in this way until you finish a long rest."
      ]
    },
    {
      name: "Dark Shard Amulet",
      source: "XDMG",
      page: 248,
      rarity: "common",
      reqAttune: "by a warlock",
      reqAttuneTags: [
        {
          class: "warlock"
        }
      ],
      wondrous: true,
      weight: 1,
      focus: [
        "Warlock"
      ],
      entries: [
        "This amulet is fashioned from a shard of resilient material originating from an otherworldly realm. While you are wearing it, you gain the following benefits.",
        {
          type: "entries",
          name: "Spellcasting Focus",
          entries: [
            "You can use the amulet as a {@variantrule Spellcasting Focus|XPHB} for your Warlock spells."
          ]
        },
        {
          type: "entries",
          name: "Unknown Spell",
          entries: [
            "As a {@action Magic|XPHB} action, you can try to cast a cantrip that you don't know. The cantrip must be on the Warlock spell list and have a casting time of an action, and you make a {@dc 10} Intelligence ({@skill Arcana|XPHB}) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast it is wasted. In either case, you can't use this property again until you finish a {@variantrule Long Rest|XPHB}."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Dark Shard Amulet",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Dark Shard Amulet|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      reqAttune: "by a warlock",
      reqAttuneTags: [
        {
          class: "warlock"
        }
      ],
      wondrous: true,
      focus: [
        "Warlock"
      ],
      entries: [
        "This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:",
        {
          type: "list",
          items: [
            "You can use the amulet as a spellcasting focus for your warlock spells.",
            "You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a {@dc 10} Intelligence ({@skill Arcana}) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest."
          ]
        }
      ]
    },
    {
      name: "Doublet of Dramatic Demise",
      source: "TDCSR",
      page: 195,
      rarity: "common",
      wondrous: true,
      entries: [
        "This striking satin jacket allows you to make the most of your dying moments. When you drop to 0 hit points while wearing this doublet, you do not fall {@condition unconscious}. Instead, you are {@condition incapacitated} and your speed becomes 0, but you can speak and communicate.",
        "You make death {@quickref saving throws|PHB|2|1} as normal, but if you roll a 1 on the {@dice d20}, you swoon with a loud gasp and die instantly."
      ]
    },
    {
      name: "Dread Helm",
      source: "XDMG",
      page: 254,
      rarity: "common",
      wondrous: true,
      entries: [
        "While you're wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow."
      ],
      lootTables: [
        "Armaments - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Dread Helm",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Dread Helm|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This fearsome steel helm makes your eyes glow red while you wear it."
      ],
      hasFluffImages: true
    },
    {
      name: "Ear Horn of Hearing",
      source: "XDMG",
      page: 256,
      rarity: "common",
      wondrous: true,
      entries: [
        "While held up to your ear, this horn suppresses the effects of the {@condition Deafened|XPHB} condition on you."
      ],
      lootTables: [
        "Implements - Common|XDMG",
        "Relics - Common|XDMG"
      ]
    },
    {
      name: "Ear Horn of Hearing",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Ear Horn of Hearing|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While held up to your ear, this horn suppresses the effects of the {@condition deafened} condition on you, allowing you to hear normally."
      ]
    },
    {
      name: "Earring of Message",
      source: "CRCotN",
      page: 212,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4 + 1}",
      charges: 5,
      entries: [
        "The blue crystal of this earring is wrapped with delicate copper wire. The earring has 5 charges. While wearing it, you can use an action to expend 1 charge and cast the {@spell message} spell. The earring regains {@dice 1d4 + 1} expended charges daily at dawn."
      ],
      attachedSpells: [
        "message"
      ],
      hasFluffImages: true
    },
    {
      name: "Enduring Spellbook",
      source: "XDMG",
      page: 257,
      rarity: "common",
      wondrous: true,
      entries: [
        "This spellbook, along with anything written on its pages, can't be damaged by fire or water. In addition, the spellbook doesn't deteriorate with age."
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ]
    },
    {
      name: "Enduring Spellbook",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Enduring Spellbook|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age."
      ]
    },
    {
      name: "Ersatz Eye",
      source: "XDMG",
      page: 259,
      rarity: "common",
      wondrous: true,
      entries: [
        "This magical eye replaces a real one that was lost or removed. While the Ersatz Eye is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the Ersatz Eye as a {@action Magic|XPHB} action, and it can't be removed against your will while you are alive."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Ersatz Eye",
      source: "XGE",
      page: 137,
      otherSources: [
        {
          source: "EGW"
        }
      ],
      reprintedAs: [
        "Ersatz Eye|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye."
      ]
    },
    {
      name: "Everbright Lantern",
      source: "ERLW",
      page: 277,
      rarity: "common",
      wondrous: true,
      entries: [
        "This bullseye lantern contains an Eberron dragonshard that sheds light comparable to that produced by a {@spell continual flame} spell. An everbright lantern sheds light in a 120-foot cone; the closest 60 feet is bright light, and the farthest 60 feet is dim light."
      ],
      light: [
        {
          bright: 60,
          dim: 120,
          shape: "cone"
        }
      ]
    },
    {
      name: "Feather Token",
      source: "ERLW",
      page: 277,
      rarity: "common",
      wondrous: true,
      entries: [
        "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical."
      ]
    },
    {
      name: "Hat of Vermin",
      source: "XDMG",
      page: 267,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This hat has 3 charges. While holding the hat, you can take a {@action Magic|XPHB} action to expend 1 charge and summon your choice of a {@creature Bat|XMM}, a {@creature Frog|XMM}, or a {@creature Rat|XMM}. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is {@variantrule Indifferent [Attitude]|XPHB|Indifferent} toward you and other creatures, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 {@variantrule Hit Points|XPHB}. The hat regains all expended charges daily at dawn."
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Hat of Vermin",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Hat of Vermin|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a {@creature bat}, a {@creature frog}, or a {@creature rat}. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn."
      ]
    },
    {
      name: "Hat of Wizardry",
      source: "XDMG",
      page: 267,
      rarity: "common",
      reqAttune: "by a wizard",
      reqAttuneTags: [
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      focus: [
        "Wizard"
      ],
      entries: [
        "This cone-shaped hat is adorned with moons and stars. While you are wearing it, you gain the following benefits.",
        {
          type: "entries",
          name: "Spellcasting Focus",
          entries: [
            "You can use the hat as a {@variantrule Spellcasting Focus|XPHB} for your Wizard spells."
          ]
        },
        {
          type: "entries",
          name: "Unknown Spell",
          entries: [
            "As a {@action Magic|XPHB} action, you can try to cast a cantrip that you don't know. The cantrip must be on the Wizard spell list and have a casting time of an action, and you make a {@dc 10} Intelligence ({@skill Arcana|XPHB}) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a {@variantrule Long Rest|XPHB}."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Hat of Wizardry",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Hat of Wizardry|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      reqAttune: "by a wizard",
      reqAttuneTags: [
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      focus: [
        "Wizard"
      ],
      entries: [
        "This antiquated, cone—shaped hat is adorned with gold crescent moons and stars. While you are wearing it, you gain the following benefits:",
        {
          type: "list",
          items: [
            "You can use the hat as a spellcasting focus for your wizard spells.",
            "You can try to cast a cantrip that you don't know. The cantrip must be on the wizard spell list, and you must make a {@dc 10} Intelligence ({@skill Arcana}) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest."
          ]
        }
      ]
    },
    {
      name: "Heward's Handy Spice Pouch",
      source: "XDMG",
      page: 269,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      entries: [
        "This belt pouch appears empty and has 10 charges. While holding the pouch, you can take a {@action Magic|XPHB} action to expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains {@dice 1d6 + 4} expended charges daily at dawn."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Heward's Handy Spice Pouch",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Heward's Handy Spice Pouch|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      entries: [
        "This belt pouch appears empty and has 10 charges. While holding the pouch, you can use an action to expend 1 of its charges, speak the name of any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains {@dice 1d6 + 4} expended charges daily at dawn."
      ]
    },
    {
      name: "Horn of Silent Alarm",
      source: "XDMG",
      page: 270,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 4,
      entries: [
        "This horn has 4 charges and regains {@dice 1d4} expended charges daily at dawn. As a {@action Magic|XPHB} action, you can blow the horn while expending 1 charge. One creature of your choice hears the horn's blare, provided that creature is within 600 feet of the horn. No other creature hears the horn."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Horn of Silent Alarm",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Horn of Silent Alarm|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 4,
      entries: [
        "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horn's blare, provided the creature is within 600 feet of the horn and not {@condition deafened}. No other creature hears sound coming from the horn. The horn regains {@dice 1d4} expended charges daily at dawn."
      ]
    },
    {
      name: "Illuminator's Tattoo",
      source: "TCE",
      page: 129,
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo features beautiful calligraphy, images of writing implements, and the like.",
        {
          type: "entries",
          name: "Tattoo Attunement",
          entries: [
            "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
            "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
          ]
        },
        {
          type: "entries",
          name: "Magical Scribing",
          entries: [
            "While this tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.",
            "As an action, you can touch a piece of writing up to one page in length and speak a creature's name. The writing becomes {@condition invisible} to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can't be used again until the next dawn."
          ]
        }
      ]
    },
    {
      name: "Instrument of Illusions",
      source: "XDMG",
      page: 271,
      rarity: "common",
      wondrous: true,
      entries: [
        "While you are playing this {@item musical instrument|XPHB}, you can take a {@action Magic|XPHB} action to create harmless, illusory visual effects within a 5-foot {@variantrule Emanation [Area of Effect]|XPHB|Emanation} originating from the instrument. If you are a Bard, the size of the {@variantrule Emanation [Area of Effect]|XPHB|Emanation} increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of Illusions",
      source: "XGE",
      page: 137,
      reprintedAs: [
        "Instrument of Illusions|XDMG"
      ],
      type: "INS",
      tier: "minor",
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing."
      ]
    },
    {
      name: "Instrument of Scribing",
      source: "XDMG",
      page: 271,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This {@item musical instrument|XPHB} has 3 charges and regains all expended charges daily at dawn. While you are playing it, you can take a {@action Magic|XPHB} action to expend 1 charge and write a magical message on a nonmagical object or surface that you can see within 30 feet of yourself. The message can be up to six words long and is written in a language you know. If you are a Bard, you can scribe an additional seven words and make the message glow faintly, allowing it to be seen in nonmagical {@variantrule Darkness|XPHB}. Casting the {@spell Dispel Magic|XPHB} spell on the message erases it. Otherwise, the message fades away after 24 hours."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Instrument of Scribing",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Instrument of Scribing|XDMG"
      ],
      type: "INS",
      tier: "minor",
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting {@spell dispel magic} on the message erases it. Otherwise, the message fades away after 24 hours.",
        "The instrument regains all expended charges daily at dawn."
      ]
    },
    {
      name: "Keycharm",
      source: "ERLW",
      page: 277,
      rarity: "common",
      reqAttune: "by a creature with the Mark of Warding",
      reqAttuneTags: [
        {
          race: "dwarf (mark of warding)|erlw"
        }
      ],
      wondrous: true,
      entries: [
        "This small stylized key plays a vital role in the work of House Kundarak. If you cast the {@spell alarm}, {@spell arcane lock}, or {@spell glyph of warding} spell, you can tie the effect to the keycharm so that whoever holds it receives the notification from the {@spell alarm} spell, bypasses the lock of the {@spell arcane lock} spell, or avoids triggering the glyph placed by the {@spell glyph of warding} spell. In addition, the holder (who needn't be attuned to the item) can take an action to end any one spell tied to it, provided the holder knows the command word you set for ending the tied spells. The keycharm can have up to three tied spells at one time."
      ]
    },
    {
      name: "Lantern of Tracking",
      source: "IDRotF",
      page: 314,
      rarity: "common",
      wondrous: true,
      entries: [
        "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.",
        "Each lantern of tracking is designed to track down a certain type of creature, which is determined by rolling on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.",
        {
          type: "table",
          caption: "Lantern of Tracking",
          colLabels: [
            "1d10",
            "Creature Type"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "Aberrations"
            ],
            [
              "2",
              "Celestials"
            ],
            [
              "3",
              "Constructs"
            ],
            [
              "4",
              "Dragons"
            ],
            [
              "5",
              "Elementals"
            ],
            [
              "6",
              "Fey"
            ],
            [
              "7",
              "Fiends"
            ],
            [
              "8",
              "Giants"
            ],
            [
              "9",
              "Monstrosities"
            ],
            [
              "10",
              "Undead"
            ]
          ]
        }
      ],
      light: [
        {
          bright: 30,
          dim: 60
        }
      ]
    },
    {
      name: "Lock of Trickery",
      source: "XDMG",
      page: 275,
      rarity: "common",
      wondrous: true,
      entries: [
        "This lock appears to be an ordinary {@item Lock|XPHB} (of the type described in chapter 6 of the {@book Player's Handbook|XPHB}) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have {@variantrule Disadvantage|XPHB}."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Lock of Trickery",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Lock of Trickery|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This lock appears to be an ordinary lock (of the type described in chapter 5 of the Player's Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have disadvantage."
      ]
    },
    {
      name: "Masque Charm",
      source: "SCC",
      page: 127,
      rarity: "common",
      wondrous: true,
      entries: [
        "A masque charm is a small silver pin. While wearing this charm, you can use an action to cast the {@spell disguise self} spell ({@dc 13} to discern the disguise). Once the spell is cast, it can't be cast from the charm again until the next sunset. When casting the spell, you can have the spell last for its normal 1 hour duration or for 6 hours. If you choose the 6-hour duration, the charm becomes nonmagical when the spell ends. In either case, the spell ends if the charm is removed from you."
      ],
      attachedSpells: [
        "disguise self"
      ]
    },
    {
      name: "Masquerade Tattoo",
      source: "TCE",
      page: 131,
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo appears on your body as whatever you desire.",
        {
          type: "entries",
          name: "Tattoo Attunement",
          entries: [
            "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
            "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
          ]
        },
        {
          type: "entries",
          name: "Fluid Ink",
          entries: [
            "As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of art that covers all your skin."
          ]
        },
        {
          type: "entries",
          name: "Disguise Self",
          entries: [
            "As an action, you can use the tattoo to cast the {@spell disguise self} spell ({@dc 13} to discern the disguise). Once the spell is cast from the tattoo, it can't be cast from the tattoo again until the next dawn."
          ]
        }
      ],
      attachedSpells: [
        "disguise self"
      ]
    },
    {
      name: "Medal of Muscle",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "You can squeeze this medal tightly in the palm of your hand as an action. Doing so gives you advantage on Strength checks and Strength saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ]
    },
    {
      name: "Medal of the Conch",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      modifySpeed: {
        equal: {
          swim: "walk"
        }
      },
      entries: [
        "When you use an action to rub this medal, you gain a swimming speed equal to your walking speed for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ]
    },
    {
      name: "Medal of the Horizonback",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "When you would be hit by an attack, you can use your reaction to increase your AC by 5 until the start of your next turn, including against the triggering attack. You must be wearing the medal and able to see the creature that made the triggering attack to use this property. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ]
    },
    {
      name: "Medal of the Maze",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "When you use an action to trace the maze inscribed on this medal, you gain advantage on Wisdom checks and know the quickest route to the end of any nonmagical path or maze for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ],
      hasFluffImages: true
    },
    {
      name: "Medal of the Meat Pie",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "You gain {@dice 2d4 + 2} temporary hit points when you use an action to press this medal to your mouth. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
        "While magical, this medal is slightly warm to the touch (as if it's fresh from the oven) and smells faintly of baked pie crust."
      ]
    },
    {
      name: "Medal of the Wetlands",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "When you use an action to trace the edge of this medal, {@quickref difficult terrain||3} doesn't cost you extra movement for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ]
    },
    {
      name: "Medal of Wit",
      source: "CRCotN",
      page: 214,
      rarity: "common",
      wondrous: true,
      entries: [
        "You can press this medal to your temple as an action. Doing so gives you advantage on Intelligence checks and Intelligence saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
      ]
    },
    {
      name: "Mind Crystal (Subtle)",
      source: "PaBTSO",
      page: 218,
      rarity: "common",
      wondrous: true,
      entries: [
        "This gemstone contains a crystallized bit of spellcasting magic.",
        "When you cast a spell that has a casting time of 1 action while holding the mind crystal, you can modify the spell in the way described below. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use the mind crystal, it becomes a nonmagical gem worth 50 gp.",
        {
          type: "entries",
          name: "Modify Spell",
          entries: [
            "You cast the spell without any somatic or verbal components for this casting."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Moodmark Paint",
      source: "GGR",
      page: 180,
      rarity: "common",
      wondrous: true,
      entries: [
        "This thick, black paint is stored in a small jar, containing enough paint to apply moodmarks to one creature. The paint is dabbed on the face in spots or markings that often resemble the eyes of insects or spiders. Applying the paint in this way takes 1 minute.",
        "For the next 8 hours, the marks change to reflect your mental state. A creature that can see you and makes a successful {@dc 10} Wisdom ({@skill Insight}) check can discern whether you are happy, sad, angry, disgusted, surprised, or afraid, as well as the main source of that emotion. For example, you might communicate fear caused by a monster you just saw around the corner, grief at the loss of a friend, or happiness derived from pride in your performance in combat. A dark elf has advantage on this check."
      ],
      hasFluffImages: true
    },
    {
      name: "Mystery Key",
      source: "XDMG",
      page: 280,
      rarity: "common",
      wondrous: true,
      entries: [
        "A question mark is worked into the head of this key. The key has a {@chance 5} chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Mystery Key",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Mystery Key|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "A question mark is worked into the head of this key. The key has a {@chance 5} chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
      ]
    },
    {
      name: "Orb of Direction",
      source: "XDMG",
      page: 283,
      scfType: "arcane",
      rarity: "common",
      wondrous: true,
      weight: 3,
      entries: [
        "This orb can be used as an Arcane Focus.",
        "While holding this orb, you can take a {@action Magic|XPHB} action to determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Orb of Direction",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Orb of Direction|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      weight: 3,
      entries: [
        "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane."
      ],
      hasFluffImages: true
    },
    {
      name: "Orb of Gonging",
      source: "WDMM",
      page: 174,
      rarity: "common",
      wondrous: true,
      weight: 5,
      entries: [
        "This common wondrous item is a hollow, 5-inch-diameter orb that weighs 5 pounds. Its outer shell is composed of notched bronze rings, which can be turned so that the notches line up. Aligning the notches requires an action, and doing so causes the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 feet."
      ]
    },
    {
      name: "Orb of Time",
      source: "XDMG",
      page: 284,
      scfType: "arcane",
      rarity: "common",
      wondrous: true,
      weight: 3,
      entries: [
        "This orb can be used as an Arcane Focus.",
        "While holding the orb, you can take a {@action Magic|XPHB} action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Orb of Time",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Orb of Time|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      weight: 3,
      entries: [
        "While holding this orb, you can use an action to determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane."
      ]
    },
    {
      name: "Perfume of Bewitching",
      source: "XDMG",
      page: 284,
      rarity: "common",
      wondrous: true,
      entries: [
        "This tiny vial contains magic perfume, enough for one use. You can take a {@action Magic|XPHB} action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have {@variantrule Advantage|XPHB} on all Charisma ({@skill Deception|XPHB} and {@skill Persuasion|XPHB}) checks made to influence a creature within 5 feet of yourself."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Perfume of Bewitching",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Perfume of Bewitching|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic."
      ]
    },
    {
      name: "Pipe of Remembrance",
      source: "GoS",
      page: 229,
      rarity: "common",
      wondrous: true,
      entries: [
        "This long, delicate wooden pipe features a bowl made from smooth river stone. When the pipe is lit, smoke exhaled from it does not dissipate, instead lingering around the bearer. After 10 minutes, the smoke forms moving shapes that reenact the bearer's most impressive and heroic achievements for 5 minutes. When this realistic performance is complete, the smoke dissipates. The pipe can't be used this way again until the next dawn."
      ]
    },
    {
      name: "Pipe of Smoke Monsters",
      source: "XDMG",
      page: 285,
      rarity: "common",
      wondrous: true,
      entries: [
        "While smoking this pipe, you can take a {@action Magic|XPHB} action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Pipe of Smoke Monsters",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Pipe of Smoke Monsters|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
      ],
      hasFluffImages: true
    },
    {
      name: "Pole of Angling",
      source: "XDMG",
      page: 286,
      rarity: "common",
      wondrous: true,
      entries: [
        "This item functions as a Pole. While holding it, you can take a {@action Magic|XPHB} action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole."
      ],
      lootTables: [
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Pole of Angling",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Pole of Angling|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole."
      ]
    },
    {
      name: "Pole of Collapsing",
      source: "XDMG",
      page: 286,
      rarity: "common",
      wondrous: true,
      entries: [
        "This item functions as a Pole. While holding it, you can take a {@action Magic|XPHB} action to collapse it into a 1-foot-long rod for ease of storage (the pole's weight doesn't change) or cause the 1-foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows."
      ],
      lootTables: [
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Pole of Collapsing",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Pole of Collapsing|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The pole's weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows."
      ],
      hasFluffImages: true
    },
    {
      name: "Pot of Awakening",
      source: "XDMG",
      page: 289,
      rarity: "common",
      wondrous: true,
      entries: [
        "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an {@creature Awakened Shrub|XMM} at the end of that time. When the shrub awakens, its roots break the pot, destroying it.",
        "The awakened shrub is {@variantrule Friendly [Attitude]|XPHB|Friendly} toward you and obeys your commands. Absent commands from you, it does nothing."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ]
    },
    {
      name: "Pot of Awakening",
      source: "XGE",
      page: 138,
      otherSources: [
        {
          source: "IMR",
          page: 95
        }
      ],
      reprintedAs: [
        "Pot of Awakening|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an {@creature awakened shrub} at the end of that time. When the shrub awakens, its roots break the pot, destroying it.",
        "The awakened shrub is friendly toward you. Absent commands from you, it does nothing."
      ]
    },
    {
      name: "Potion of Climbing",
      source: "DMG",
      page: 187,
      srd: true,
      reprintedAs: [
        "Potion of Climbing|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "common",
      modifySpeed: {
        equal: {
          climb: "walk"
        }
      },
      entries: [
        "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength ({@skill Athletics}) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
      ],
      lootTables: [
        "Magic Item Table A"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Climbing",
      source: "XDMG",
      page: 287,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "common",
      weight: 0.5,
      modifySpeed: {
        equal: {
          climb: "walk"
        }
      },
      entries: [
        "When you drink this potion, you gain a {@variantrule Climb Speed|XPHB} equal to your {@variantrule Speed|XPHB} for 1 hour. During this time, you have {@variantrule Advantage|XPHB} on Strength ({@skill Athletics|XPHB}) checks to climb.",
        "This potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Comprehension",
      source: "WDMM",
      page: 62,
      reprintedAs: [
        "Potion of Comprehension|XDMG"
      ],
      type: "P",
      rarity: "common",
      entries: [
        "When you drink this potion, you gain the effect of a {@spell comprehend languages} spell for 1 hour. This liquid is a clear concoction with bits of salt and soot swirling in it."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Comprehension",
      source: "XDMG",
      page: 287,
      type: "P|XPHB",
      rarity: "common",
      weight: 0.5,
      entries: [
        "When you drink this potion, you gain the effect of the {@spell Comprehend Languages|XPHB} spell for 1 hour.",
        "This potion's liquid is a clear concoction with bits of salt and soot swirling in it."
      ],
      attachedSpells: [
        "comprehend languages|xphb"
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Healing",
      source: "DMG",
      page: 187,
      srd: true,
      otherSources: [
        {
          source: "PHB",
          page: 153
        }
      ],
      reprintedAs: [
        "Potion of Healing|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "common",
      weight: 0.5,
      value: 5000,
      entries: [
        "You regain {@dice 2d4 + 2} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
      ],
      lootTables: [
        "Magic Item Table A"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Healing",
      source: "XDMG",
      page: 288,
      freeRules2024: true,
      otherSources: [
        {
          source: "XPHB",
          page: 228
        }
      ],
      type: "P|XPHB",
      rarity: "common",
      weight: 0.5,
      value: 5000,
      entries: [
        "This potion is a magic item. As a {@variantrule Bonus Action|XPHB}, you can drink it or administer it to another creature within 5 feet of yourself. The creature that drinks the magical red fluid in this vial regains {@dice 2d4 + 2} {@variantrule Hit Points|XPHB}. The potion's red liquid glimmers when agitated."
      ],
      lootTables: [
        "Implements - Common|XDMG",
        "Relics - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Watchful Rest",
      source: "WDMM",
      page: 62,
      type: "P",
      rarity: "common",
      entries: [
        "When you drink this potion, you gain the following benefits for the next 8 hours: magic can't put you to sleep, and you can remain awake during a long rest and still gain its benefits. This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Pressure Capsule",
      source: "GoS",
      page: 229,
      rarity: "common",
      wondrous: true,
      entries: [
        "This small capsule is made of beeswax blended with sand and a variety of enchanted water plants. A creature who consumes a pressure capsule ignores the effects of swimming at depths greater than 100 feet (see \"{@book Unusual Environments|dmg|5|Unusual Environments}\" in chapter 5 of the Dungeon Master's Guide)."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Prosthetic Limb",
      source: "TCE",
      page: 134,
      otherSources: [
        {
          source: "ERLW",
          page: 278
        },
        {
          source: "EGW"
        }
      ],
      reprintedAs: [
        "Prosthetic Limb|XDMG"
      ],
      rarity: "common",
      wondrous: true,
      entries: [
        "This item replaces a lost limb-a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die."
      ],
      hasFluffImages: true
    },
    {
      name: "Prosthetic Limb",
      source: "XDMG",
      page: 290,
      rarity: "common",
      wondrous: true,
      entries: [
        "This magic item replaces a lost limb—a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a {@action Magic|XPHB} action, and it can't be removed against your will while you are alive."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Rival Coin",
      source: "XDMG",
      page: 296,
      rarity: "common",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 1,
      charges: 1,
      entries: [
        "This gold coin has a creature embossed on each side. The two depicted creatures must be famous rivals or enemies of each other. For example, a Rival Coin might show {@book Iggwilv|XDMG|8|Iggwilv} on one side and {@book Mordenkainen|XDMG|8|Mordenkainen} on the other, or {@book Venger|XDMG|8|Venger} on one side and {@book Tiamat|XDMG|8|Tiamat} on the other. One of these figures is on the \"heads\" side of the coin, the other on the \"tails\" side.",
        "The coin has 1 charge and regains its expended charge daily at dawn. You can take a {@action Magic|XPHB} action to toss the coin, expending its charge. Roll any die to determine whether the coin comes up heads (on an even number) or tails (on an odd number). The roll also determines the effect:",
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              type: "item",
              name: "Heads",
              entries: [
                "Target one creature you can see within 60 feet of yourself. The target makes a {@dc 13} Wisdom saving throw. On a failed save, the target takes {@damage 2d4} Psychic damage and has {@variantrule Disadvantage|XPHB} on the next attack roll it makes before the end of its next turn. On a successful save, the target takes half as much damage only."
              ]
            },
            {
              type: "item",
              name: "Tails",
              entries: [
                "You take {@damage 1d4} Psychic damage."
              ]
            }
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Rope of Mending",
      source: "XDMG",
      page: 302,
      rarity: "common",
      wondrous: true,
      entries: [
        "This 50-foot coil of rope can repair itself when cut into any number of smaller pieces. As a {@action Magic|XPHB} action, you can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A Rope of Mending is forever shortened if a section of it is lost or destroyed."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Rope of Mending",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Rope of Mending|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "You can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed."
      ]
    },
    {
      name: "Ruby of the War Mage",
      source: "XDMG",
      page: 302,
      rarity: "common",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      focus: true,
      entries: [
        "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a Simple or Martial weapon as a {@variantrule Spellcasting Focus|XPHB} for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as a {@action Magic|XPHB} action, the weapon is destroyed, or your {@variantrule Attunement|XPHB} to the ruby ends."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ]
    },
    {
      name: "Ruby of the War Mage",
      source: "XGE",
      page: 138,
      reprintedAs: [
        "Ruby of the War Mage|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      focus: true,
      entries: [
        "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an {@spell antimagic field} causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends."
      ]
    },
    {
      name: "Scribe's Pen",
      source: "ERLW",
      page: 278,
      rarity: "common",
      reqAttune: "by a creature with the Mark of Scribing",
      reqAttuneTags: [
        {
          race: "gnome (mark of scribing)|erlw"
        }
      ],
      wondrous: true,
      entries: [
        "You can use this pen to write on any surface. You decide whether the writing is visible or {@condition invisible}, but the writing is always visible to a person with the Mark of Scribing.",
        "Any creature with the Mark of Scribing can use an action to touch the {@condition invisible} writing, making it visible to all.",
        "If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days."
      ]
    },
    {
      name: "Sekolahian Worshiping Statuette",
      source: "GoS",
      page: 229,
      rarity: "common",
      wondrous: true,
      entries: [
        "Skillfully carved from sandstone, this 1-foot-tall statuette depicts a shark twisting through the water with its mouth open. If any Tiny sea-dwelling animal is within 1 inch of the statuette's mouth, the shark flashes to life and deals 1 piercing damage to it. The shark can deal damage in this way no more than once per hour."
      ]
    },
    {
      name: "Shield of Expression",
      source: "XDMG",
      page: 303,
      baseItem: "shield|xphb",
      type: "S|XPHB",
      rarity: "common",
      weight: 6,
      ac: 2,
      entries: [
        "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a {@variantrule Bonus Action|XPHB} to alter the face's expression."
      ],
      lootTables: [
        "Armaments - Common|XDMG",
        "Relics - Common|XDMG"
      ]
    },
    {
      name: "Shield of Expression",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Shield of Expression|XDMG"
      ],
      type: "S",
      tier: "minor",
      rarity: "common",
      weight: 6,
      ac: 2,
      entries: [
        "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the face's expression."
      ]
    },
    {
      name: "Shiftweave",
      source: "ERLW",
      page: 279,
      rarity: "common",
      wondrous: true,
      entries: [
        "When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties."
      ]
    },
    {
      name: "Spell Scroll (1st Level)",
      source: "DMG",
      page: 200,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Spell Scroll (Level 1)|XDMG"
      ],
      type: "SC|DMG",
      tier: "minor",
      rarity: "common",
      entries: [
        "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
        "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11. On a failed check, the spell disappears from the scroll with no other effect.",
        "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
        "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}.",
        "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a {@dc 11} Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
      ],
      spellScrollLevel: 1,
      lootTables: [
        "Magic Item Table A"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spell Scroll (Cantrip)",
      source: "DMG",
      page: 199,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Spell Scroll (Cantrip)|XDMG"
      ],
      type: "SC|DMG",
      tier: "minor",
      rarity: "common",
      entries: [
        "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
        "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 10. On a failed check, the spell disappears from the scroll with no other effect.",
        "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
        "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}."
      ],
      spellScrollLevel: 0,
      lootTables: [
        "Magic Item Table A"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spell Scroll (Cantrip)",
      source: "XDMG",
      page: 305,
      freeRules2024: true,
      otherSources: [
        {
          source: "XPHB",
          page: 228
        }
      ],
      type: "SC|XPHB",
      rarity: "common",
      value: 3000,
      entries: [
        "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn't lost.",
        "If the spell is on your spell list but of a higher level than you can normally cast, you make a {@dc 10} ability check using your spellcasting ability to determine whether you cast the spell. On a failed check, the spell disappears from the scroll with no other effect.",
        "If the spell requires a saving throw or an attack roll, the spell save DC is 13, and the attack bonus is {@hit 5}.",
        {
          type: "entries",
          name: "Copying a Scroll into a Spellbook",
          entries: [
            "A Wizard spell on a Spell Scroll can be copied into a spellbook. When a cantrip is copied in this way, the copier must succeed on a {@dc 10} Intelligence ({@skill Arcana|XPHB}). On a successful check, the spell is copied. Whether the check succeeds or fails, the Spell Scroll is destroyed."
          ]
        }
      ],
      spellScrollLevel: 0,
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Spell Scroll (Level 1)",
      source: "XDMG",
      page: 305,
      freeRules2024: true,
      otherSources: [
        {
          source: "XPHB",
          page: 228
        }
      ],
      type: "SC|XPHB",
      rarity: "common",
      value: 5000,
      entries: [
        "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn't lost.",
        "If the spell is on your spell list but of a higher level than you can normally cast, you make a {@dc 11} ability check using your spellcasting ability to determine whether you cast the spell. On a failed check, the spell disappears from the scroll with no other effect.",
        "If the spell requires a saving throw or an attack roll, the spell save DC is 13, and the attack bonus is {@hit 5}.",
        {
          type: "entries",
          name: "Copying a Scroll into a Spellbook",
          entries: [
            "A Wizard spell on a Spell Scroll can be copied into a spellbook. When a level 1 spell is copied in this way, the copier must succeed on a {@dc 11} Intelligence ({@skill Arcana|XPHB}). On a successful check, the spell is copied. Whether the check succeeds or fails, the Spell Scroll is destroyed."
          ]
        }
      ],
      spellScrollLevel: 1,
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Spellshard",
      source: "ERLW",
      page: 279,
      rarity: "common",
      wondrous: true,
      entries: [
        "This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that's no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within.",
        "While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank \"pages\" in the shard requires {@status concentration} (as if {@status concentration||concentrating} on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it.",
        "A wizard can use a spellshard as a spellbook, with the usual cost in gold and time to \"scribe\" a spell into the shard."
      ]
    },
    {
      name: "Spellwrought Tattoo (1st Level)",
      source: "TCE",
      page: 135,
      rarity: "common",
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo contains a single {@filter 1st level spell|spells|level=1}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
        "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spellwrought Tattoo (Cantrip)",
      source: "TCE",
      page: 135,
      rarity: "common",
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo contains a single {@filter cantrip|spells|level=0}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
        "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spyglass of Clairvoyance",
      source: "AI",
      page: 19,
      rarity: "common",
      wondrous: true,
      entries: [
        "At rank 2, your Head Office-supplied spyglass becomes a common magic item. As an action, you can look through the spyglass of clairvoyance at a location within 1 mile of you that is obstructing your view, such as a mountain, castle, or forest. You must then succeed on a {@dc 15} Wisdom check using {@item cartographer's tools|phb} to map the natural terrain found within three miles of that chosen point. You do not gain any knowledge of creatures, structures, or anything other than natural terrain. This property of the spyglass cannot be used again until the next dawn."
      ]
    },
    {
      name: "Staff of Adornment",
      source: "XDMG",
      page: 306,
      type: "M|XPHB",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V|XPHB"
      ],
      mastery: [
        "Topple|XPHB"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      staff: true,
      entries: [
        "If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ]
    },
    {
      name: "Staff of Adornment",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Staff of Adornment|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      staff: true,
      entries: [
        "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place."
      ]
    },
    {
      name: "Staff of Birdcalls",
      source: "XDMG",
      page: 307,
      type: "M|XPHB",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V|XPHB"
      ],
      mastery: [
        "Topple|XPHB"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      staff: true,
      entries: [
        "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a {@action Magic|XPHB} action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll {@dice 1d20}. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Staff of Birdcalls",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Staff of Birdcalls|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      staff: true,
      entries: [
        "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.",
        "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever."
      ]
    },
    {
      name: "Staff of Flowers",
      source: "XDMG",
      page: 308,
      type: "M|XPHB",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V|XPHB"
      ],
      mastery: [
        "Topple|XPHB"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      staff: true,
      entries: [
        "This wooden staff has 10 charges. While holding it, you can take a {@action Magic|XPHB} action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll {@dice 1d20}. On a 1, the staff turns into flower petals and is lost forever."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Relics - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Staff of Flowers",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Staff of Flowers|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      staff: true,
      entries: [
        "This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mildscented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff turns into flower petals and is lost forever."
      ]
    },
    {
      name: "Strixhaven Pennant",
      source: "SCC",
      page: 39,
      rarity: "common",
      wondrous: true,
      entries: [
        "This magic pennant bears the symbol of Strixhaven or one of its colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. While you wave the pennant, the symbol on it glitters, and the pennant sheds bright light in a 10-foot-radius and dim light for an additional 10 feet."
      ],
      light: [
        {
          bright: 10,
          dim: 20
        }
      ]
    },
    {
      name: "Talking Doll",
      source: "XDMG",
      page: 315,
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While this doll is within 5 feet of you, you can spend a {@variantrule Short Rest|XPHB} telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your {@variantrule Attunement|XPHB} to the doll ends."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Talking Doll",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Talking Doll|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
      ],
      hasFluffImages: true
    },
    {
      name: "Tankard of Sobriety",
      source: "XDMG",
      page: 315,
      rarity: "common",
      wondrous: true,
      entries: [
        "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison."
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Tankard of Sobriety",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Tankard of Sobriety|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison."
      ]
    },
    {
      name: "Thermal Cube",
      source: "IDRotF",
      page: 316,
      rarity: "common",
      wondrous: true,
      entries: [
        "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius)."
      ]
    },
    {
      name: "Unbreakable Arrow",
      source: "XGE",
      page: 139,
      type: "A",
      tier: "minor",
      rarity: "common",
      entries: [
        "This arrow can't be broken, except when it is within an {@spell antimagic field}."
      ],
      hasFluffImages: true
    },
    {
      name: "Veteran's Cane",
      source: "XDMG",
      page: 318,
      rarity: "common",
      wondrous: true,
      entries: [
        "As a {@variantrule Bonus Action|XPHB}, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, you must be holding the item."
      ],
      lootTables: [
        "Armaments - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Veteran's Cane",
      source: "XGE",
      page: 139,
      reprintedAs: [
        "Veteran's Cane|XDMG"
      ],
      tier: "minor",
      rarity: "common",
      wondrous: true,
      entries: [
        "When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical."
      ]
    },
    {
      name: "Voting Kit",
      source: "AI",
      page: 22,
      rarity: "common",
      wondrous: true,
      entries: [
        "At rank 4, your voting kit becomes a common magic item that conceals an extradimensional space. As a bonus action, you can place one tool kit that you are proficient with into the voting kit, or can remove it. No other type of object can be placed into the extradimensional space. A creature searching the voting kit finds and extracts the tool kit with a successful {@dc 20} Intelligence ({@skill Investigation}) or Wisdom ({@skill Perception}) check.",
        "Additionally, you can use the voting kit to cast {@spell charm person} (save {@dc 15}). This property of the kit can't be used again until the next dawn."
      ],
      attachedSpells: [
        "charm person"
      ]
    },
    {
      name: "Vox Seeker",
      source: "EGW",
      page: 270,
      rarity: "common",
      wondrous: true,
      entries: [
        "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying {@creature Vox Seeker|EGW} stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed."
      ]
    },
    {
      name: "Wand of Conducting",
      source: "XDMG",
      page: 319,
      type: "WD|XDMG",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can take a {@action Magic|XPHB} action to expend 1 charge and create orchestral music by waving it around. The music can be heard out to 120 feet and ends when you stop waving the wand.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll {@dice 1d20}. On a 1, a sad tuba sound plays as the wand crumbles into dust and is destroyed."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Wand of Conducting",
      source: "XGE",
      page: 140,
      reprintedAs: [
        "Wand of Conducting|XDMG"
      ],
      type: "WD|DMG",
      tier: "minor",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.",
        "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed."
      ]
    },
    {
      name: "Wand of Pyrotechnics",
      source: "XDMG",
      page: 321,
      type: "WD|XDMG",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can take a {@action Magic|XPHB} action to expend 1 charge and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll {@dice 1d20}. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed."
          ]
        }
      ],
      lootTables: [
        "Arcana - Common|XDMG",
        "Implements - Common|XDMG"
      ]
    },
    {
      name: "Wand of Pyrotechnics",
      source: "XGE",
      page: 140,
      reprintedAs: [
        "Wand of Pyrotechnics|XDMG"
      ],
      type: "WD|DMG",
      tier: "minor",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.",
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed."
      ]
    },
    {
      name: "Wand of Scowls",
      source: "XGE",
      page: 140,
      type: "WD|DMG",
      tier: "minor",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a {@dc 10} Charisma saving throw or be forced to scowl for 1 minute.",
        "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand transforms into a {@item wand of smiles|xge}."
      ]
    },
    {
      name: "Wand of Smiles",
      source: "XGE",
      page: 140,
      type: "WD|DMG",
      tier: "minor",
      rarity: "common",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a {@dc 10} Charisma saving throw or be forced to smile for 1 minute.",
        "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand transforms into a {@item wand of scowls|xge}."
      ]
    },
    {
      name: "Wand Sheath",
      source: "ERLW",
      page: 279,
      rarity: "common",
      reqAttune: "by a warforged",
      reqAttuneTags: [
        {
          race: "warforged|erlw"
        }
      ],
      wondrous: true,
      entries: [
        "A wand sheath clamps onto your arm and imparts the following benefits:",
        {
          type: "list",
          items: [
            "The wand sheath can't be removed from you while you're attuned to it.",
            "You can insert a wand into the sheath as an action. The sheath can hold only one wand at a time.",
            "You can retract or extend a wand from the sheath as a bonus action. While the wand is extended, you can use it as if you were holding it, but your hand remains free."
          ]
        },
        "If a sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand count as a single magic item with regard to the number of magic items you can attune to. If you remove the wand from the sheath, your attunement to the wand ends."
      ]
    }
  ] as Item[])
}
