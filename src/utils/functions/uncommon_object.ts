import type {Item} from '../../models/item.ts'

export default (): Promise<Item[]> => {
  return Promise.resolve([

    {
      name: "+1 All-Purpose Tool",
      source: "TCE",
      page: 119,
      rarity: "uncommon",
      reqAttune: "by an artificer",
      reqAttuneTags: [
        {
          class: "artificer|tce"
        }
      ],
      wondrous: true,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      focus: [
        "Artificer"
      ],
      entries: [
        "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the {@book Player's Handbook|PHB} for a list of {@item artisan's tools|PHB}). Whatever form the tool takes, you are proficient with it.",
        "While holding this tool, you gain a +1 bonus to the spell attack rolls and the saving throw DCs of your artificer spells.",
        "As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn."
      ]
    },
    {
      name: "+1 Amulet of the Devout",
      source: "TCE",
      page: 119,
      rarity: "uncommon",
      reqAttune: "by a cleric or paladin",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "paladin"
        }
      ],
      wondrous: true,
      weight: 1,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      entries: [
        "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a +1 bonus to spell attack rolls and the saving throw DCs of your spells.",
        "While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn."
      ]
    },
    {
      name: "+1 Arcane Grimoire",
      source: "TCE",
      page: 120,
      rarity: "uncommon",
      reqAttune: "by a wizard",
      reqAttuneTags: [
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      weight: 3,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      focus: [
        "Wizard"
      ],
      entries: [
        "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.",
        "You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1."
      ]
    },
    {
      name: "+1 Bloodwell Vial",
      source: "TCE",
      page: 122,
      rarity: "uncommon",
      reqAttune: "by a sorcerer",
      reqAttuneTags: [
        {
          class: "sorcerer"
        }
      ],
      wondrous: true,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      focus: [
        "Sorcerer"
      ],
      entries: [
        "To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells.",
        "In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn."
      ]
    },
    {
      name: "+1 Dragonhide Belt",
      source: "FTD",
      page: 23,
      rarity: "uncommon",
      reqAttune: "by a monk",
      reqAttuneTags: [
        {
          class: "monk"
        }
      ],
      wondrous: true,
      entries: [
        "This finely detailed belt is made of dragonhide. While wearing it, you gain a +1 bonus to the saving throw DCs of your ki features. In addition, you can use an action to regain ki points equal to a roll of your Martial Arts die. You can't use this action again until the next dawn."
      ]
    },
    {
      name: "+1 Moon Sickle",
      source: "TCE",
      page: 133,
      baseItem: "sickle|PHB",
      type: "M",
      rarity: "uncommon",
      reqAttune: "by a druid or ranger",
      reqAttuneTags: [
        {
          class: "druid"
        },
        {
          class: "ranger"
        }
      ],
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L"
      ],
      dmg1: "1d4",
      dmgType: "S",
      bonusWeapon: "+1",
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      focus: [
        "Druid",
        "Ranger"
      ],
      entries: [
        "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a +1 bonus to attack and damage rolls made with it, and you gain a +1 bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.",
        "When you cast a spell that restores hit points, you can roll a {@dice d4} and add the number rolled to the amount of hit points restored, provided you are holding the sickle."
      ]
    },
    {
      name: "+1 Rhythm-Maker's Drum",
      source: "TCE",
      page: 134,
      type: "INS",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      weight: 3,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      entries: [
        "While holding this {@item drum|PHB}, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your bard spells.",
        "As an action, you can play the {@item drum|PHB} to regain one use of your Bardic Inspiration feature. This property of the {@item drum|PHB} can't be used again until the next dawn."
      ]
    },
    {
      name: "+1 Rod of the Pact Keeper",
      source: "DMG",
      page: 197,
      reprintedAs: [
        "+1 Rod of the Pact Keeper|XDMG"
      ],
      type: "RD|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a warlock",
      reqAttuneTags: [
        {
          class: "warlock"
        }
      ],
      weight: 2,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      entries: [
        "While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your warlock spells.",
        "In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest."
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "+1 Rod of the Pact Keeper",
      source: "XDMG",
      page: 301,
      type: "RD|XDMG",
      rarity: "uncommon",
      reqAttune: "by a warlock",
      reqAttuneTags: [
        {
          class: "warlock"
        }
      ],
      weight: 2,
      bonusSpellAttack: "+1",
      bonusSpellSaveDc: "+1",
      entries: [
        "While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your {@filter Warlock spells|spells|class=Warlock}.",
        "In addition, you can regain one spell slot as a {@action Magic|XPHB} action while holding the rod. You can't use this property again until you finish a {@variantrule Long Rest|XPHB}."
      ]
    },
    {
      name: "+1 Wand of the War Mage",
      source: "DMG",
      page: 212,
      srd: true,
      reprintedAs: [
        "+1 Wand of the War Mage|XDMG"
      ],
      type: "WD|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      weight: 1,
      bonusSpellAttack: "+1",
      entries: [
        "While you are holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore {@quickref Cover||3||half cover} when making a spell attack."
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "+1 Wand of the War Mage",
      source: "XDMG",
      page: 322,
      freeRules2024: true,
      type: "WD|XDMG",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      weight: 1,
      bonusSpellAttack: "+1",
      entries: [
        "While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore {@variantrule Cover|XPHB|Half Cover} when making a spell attack roll."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ]
    },
    {
      name: "+1 Wraps of Unarmed Power",
      source: "XDMG",
      page: 325,
      rarity: "uncommon",
      wondrous: true,
      bonusWeapon: "+1",
      entries: [
        "While wearing these wraps, you have a +1 bonus to attack rolls and damage rolls made with your Unarmed Strikes. Those strikes deal your choice of Force damage or their normal damage type."
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ]
    },
    {
      name: "+1 Wraps of Unarmed Prowess",
      source: "BMT",
      page: 69,
      reprintedAs: [
        "+1 Wraps of Unarmed Power|XDMG"
      ],
      rarity: "uncommon",
      wondrous: true,
      bonusWeapon: "+1",
      entries: [
        "While you're wearing these cloth wraps, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage, and you gain a +1 bonus to the attack and damage rolls of your unarmed strikes."
      ]
    },
    {
      name: "Alchemy Jug",
      source: "DMG",
      page: 150,
      reprintedAs: [
        "Alchemy Jug|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 12,
      entries: [
        "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
        "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
        "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
        {
          type: "table",
          colLabels: [
            "Liquid",
            "Max Amount"
          ],
          colStyles: [
            "col-2",
            "col-10"
          ],
          rows: [
            [
              "Acid",
              "8 ounces"
            ],
            [
              "Basic poison",
              "½ ounce"
            ],
            [
              "Beer",
              "4 gallons"
            ],
            [
              "Honey",
              "1 gallon"
            ],
            [
              "Mayonnaise",
              "2 gallons"
            ],
            [
              "Oil",
              "1 quart"
            ],
            [
              "Vinegar",
              "2 gallons"
            ],
            [
              "Water, fresh",
              "8 gallons"
            ],
            [
              "Water, salt",
              "12 gallons"
            ],
            [
              "Wine",
              "1 gallon"
            ]
          ]
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CF/W"
      ],
      hasFluffImages: true
    },
    {
      name: "Alchemy Jug",
      source: "XDMG",
      page: 227,
      rarity: "uncommon",
      wondrous: true,
      weight: 12,
      entries: [
        "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty.",
        "You can take a {@action Magic|XPHB} action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a {@action Utilize|XPHB} action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
        "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
        {
          type: "table",
          caption: "Alchemy Jug Liquids",
          colStyles: [
            "col-6",
            "col-6"
          ],
          colLabels: [
            "Liquid",
            "Max. Amount"
          ],
          rows: [
            [
              "Acid",
              "8 ounces"
            ],
            [
              "Basic Poison",
              "4 ounces"
            ],
            [
              "Beer",
              "4 gallons"
            ],
            [
              "Honey",
              "1 gallon"
            ],
            [
              "Mayonnaise",
              "2 gallons"
            ],
            [
              "Oil",
              "1 quart"
            ],
            [
              "Vinegar",
              "2 gallons"
            ],
            [
              "Water, fresh",
              "8 gallons"
            ],
            [
              "Water, salt",
              "12 gallons"
            ],
            [
              "Wine",
              "1 gallon"
            ]
          ]
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CF/W"
      ],
      hasFluffImages: true
    },
    {
      name: "Alchemy Jug (Blue)",
      source: "CM",
      page: 144,
      rarity: "uncommon",
      wondrous: true,
      weight: 12,
      entries: [
        "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
        "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
        "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
        {
          type: "table",
          colStyles: [
            "col-6 text-center",
            "col-6 text-center"
          ],
          colLabels: [
            "Liquid",
            "Max Amount"
          ],
          rows: [
            [
              "Beer",
              "4 gallons"
            ],
            [
              "Boiling Hot Tea",
              "1 quart"
            ],
            [
              "Honey",
              "1 gallon"
            ],
            [
              "Mayonnaise",
              "2 gallons"
            ],
            [
              "Oil",
              "quart"
            ],
            [
              "Vinegar",
              "2 gallons"
            ],
            [
              "Water, fresh",
              "8 gallons"
            ],
            [
              "Water, salt",
              "12 gallons"
            ],
            [
              "Wine",
              "1 gallon"
            ]
          ]
        }
      ],
      miscTags: [
        "CF/W"
      ]
    },
    {
      name: "Alchemy Jug (Orange)",
      source: "CM",
      page: 144,
      rarity: "uncommon",
      wondrous: true,
      weight: 12,
      entries: [
        "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
        "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
        "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
        {
          type: "table",
          colStyles: [
            "col-6 text-center",
            "col-6 text-center"
          ],
          colLabels: [
            "Liquid",
            "Max Amount"
          ],
          rows: [
            [
              "Beer",
              "4 gallons"
            ],
            [
              "Honey",
              "1 gallon"
            ],
            [
              "Mayonnaise",
              "2 gallons"
            ],
            [
              "Oil",
              "quart"
            ],
            [
              "Soy Sauce",
              "1 gallon"
            ],
            [
              "Vinegar",
              "2 gallons"
            ],
            [
              "Water, fresh",
              "8 gallons"
            ],
            [
              "Water, salt",
              "12 gallons"
            ],
            [
              "Wine",
              "1 gallon"
            ]
          ]
        }
      ],
      miscTags: [
        "CF/W"
      ]
    },
    {
      name: "Amber Runestone",
      source: "NRH-TLT",
      page: 6,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This piece of polished amber is engraved with many tiny runes. As a bonus action, you can mentally command the stone to shed bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the light persists, you can also use a bonus action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each."
      ],
      light: [
        {
          bright: 15,
          dim: 30
        }
      ]
    },
    {
      name: "Amulet of Proof against Detection and Location",
      source: "DMG",
      page: 150,
      srd: true,
      reprintedAs: [
        "Amulet of Proof against Detection and Location|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this amulet, you are hidden from {@filter divination|spells|school=D} magic. You can't be targeted by such magic or perceived through magical scrying sensors."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Amulet of Proof against Detection and Location",
      source: "XDMG",
      page: 228,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this amulet, you can't be targeted by Divination spells or perceived through magical scrying sensors unless you allow it."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Amulet of the Drunkard",
      source: "EGW",
      page: 265,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This amulet smells of old, ale-stained wood. While wearing it, you can regain {@dice 4d4 + 4} hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn."
      ],
      hasFluffImages: true
    },
    {
      name: "Azorius Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Azorius, allows you to cast {@spell ensnaring strike}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Azorius's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "ensnaring strike"
      ],
      hasFluffImages: true
    },
    {
      name: "Baba Yaga's Dancing Broom",
      source: "XDMG",
      page: 232,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "The archfey {@book Baba Yaga|XDMG|8|Baba Yaga} crafted many of these magic brooms. No two appear exactly alike. While holding the broom, you can take a {@action Magic|XPHB} action to transform it into an {@creature Animated Broom|XMM} under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you on your {@variantrule Initiative|XPHB} count and remains animate until you take a {@variantrule Bonus Action|XPHB} and use a command word to render it inanimate.",
        "On your turn, you can mentally command the animated broom if it is within 30 feet of you and you don't have the {@condition Incapacitated|XPHB} condition (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
        "If the broom is reduced to 0 {@variantrule Hit Points|XPHB}, it shatters and is destroyed. If the broom reverts to its inanimate form before losing all its {@variantrule Hit Points|XPHB} it regains all of them."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Bag of Holding",
      source: "DMG",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bag of Holding|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 15,
      entries: [
        "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.",
        "If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.",
        "Placing a bag of holding inside an extradimensional space created by a {@item Heward's handy haversack}, {@item portable hole}, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
      ],
      containerCapacity: {
        weight: [
          500
        ],
        weightless: true
      },
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table A",
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Bag of Holding",
      source: "XDMG",
      page: 234,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      weight: 5,
      entries: [
        "This bag has an interior space considerably larger than its outside dimensions—roughly 2 feet square and 4 feet deep on the inside. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 5 pounds, regardless of its contents. Retrieving an item from the bag requires a {@action Utilize|XPHB} action.",
        "If the bag is overloaded, pierced, or torn, it is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth unharmed, but the bag must be put right before it can be used again. The bag holds enough air for 10 minutes of breathing, divided by the number of breathing creatures inside.",
        "Placing a Bag of Holding inside an extradimensional space created by a {@item Heward's Handy Haversack|XDMG}, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within a 10-foot-radius {@variantrule Sphere [Area of Effect]|XPHB|Sphere} centered on the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way and can't be reopened."
      ],
      containerCapacity: {
        weight: [
          500
        ],
        weightless: true
      },
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Bag of Tricks, Gray",
      source: "DMG",
      page: 154,
      srd: true,
      reprintedAs: [
        "Bag of Tricks, Gray|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 0.5,
      recharge: "dawn",
      entries: [
        "This ordinary bag, made from gray cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
        "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colLabels: [
            "{@dice d8}",
            "Creature"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "1",
              "{@creature Weasel}"
            ],
            [
              "2",
              "{@creature Giant rat}"
            ],
            [
              "3",
              "{@creature Badger}"
            ],
            [
              "4",
              "{@creature Boar}"
            ],
            [
              "5",
              "{@creature Panther}"
            ],
            [
              "6",
              "{@creature Giant badger}"
            ],
            [
              "7",
              "{@creature Dire wolf}"
            ],
            [
              "8",
              "{@creature Giant elk}"
            ]
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Bag of Tricks, Gray",
      source: "XDMG",
      page: 234,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      entries: [
        "This bag made from gray cloth appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can take a {@action Magic|XPHB} action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling on the table below. See the {@book Monster Manual|XMM} for the creature's stat block. The creature vanishes at the next dawn or when it is reduced to 0 {@variantrule Hit Points|XPHB}.",
        "The creature is {@variantrule Friendly [Attitude]|XPHB|Friendly} to you and your allies, and it acts immediately after you on your {@variantrule Initiative|XPHB} count. You can take a {@variantrule Bonus Action|XPHB} to command how the creature moves and what action it takes on its next turn, such as attacking an enemy. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "1d8",
            "Creature"
          ],
          rows: [
            [
              "1",
              "{@creature Weasel|XMM}"
            ],
            [
              "2",
              "{@creature Giant Rat|XMM}"
            ],
            [
              "3",
              "{@creature Badger|XMM}"
            ],
            [
              "4",
              "{@creature Boar|XMM}"
            ],
            [
              "5",
              "{@creature Panther|XMM}"
            ],
            [
              "6",
              "{@creature Giant Badger|XMM}"
            ],
            [
              "7",
              "{@creature Dire Wolf|XMM}"
            ],
            [
              "8",
              "{@creature Giant Elk|XMM}"
            ]
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Bag of Tricks, Rust",
      source: "DMG",
      page: 154,
      srd: true,
      reprintedAs: [
        "Bag of Tricks, Rust|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 0.5,
      recharge: "dawn",
      entries: [
        "This ordinary bag, made from rust cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
        "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colLabels: [
            "{@dice d8}",
            "Creature"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "1",
              "{@creature Rat}"
            ],
            [
              "2",
              "{@creature Owl}"
            ],
            [
              "3",
              "{@creature Mastiff}"
            ],
            [
              "4",
              "{@creature Goat}"
            ],
            [
              "5",
              "{@creature Giant goat}"
            ],
            [
              "6",
              "{@creature Giant boar}"
            ],
            [
              "7",
              "{@creature Lion}"
            ],
            [
              "8",
              "{@creature Brown bear}"
            ]
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Bag of Tricks, Rust",
      source: "XDMG",
      page: 234,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      entries: [
        "This bag made from rust cloth appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can take a {@action Magic|XPHB} action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling on the table below. See the {@book Monster Manual|XMM} for the creature's stat block. The creature vanishes at the next dawn or when it is reduced to 0 {@variantrule Hit Points|XPHB}.",
        "The creature is {@variantrule Friendly [Attitude]|XPHB|Friendly} to you and your allies, and it acts immediately after you on your {@variantrule Initiative|XPHB} count. You can take a {@variantrule Bonus Action|XPHB} to command how the creature moves and what action it takes on its next turn, such as attacking an enemy. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "1d8",
            "Creature"
          ],
          rows: [
            [
              "1",
              "{@creature Rat|XMM}"
            ],
            [
              "2",
              "{@creature Owl|XMM}"
            ],
            [
              "3",
              "{@creature Mastiff|XMM}"
            ],
            [
              "4",
              "{@creature Goat|XMM}"
            ],
            [
              "5",
              "{@creature Giant Goat|XMM}"
            ],
            [
              "6",
              "{@creature Giant Boar|XMM}"
            ],
            [
              "7",
              "{@creature Lion|XMM}"
            ],
            [
              "8",
              "{@creature Brown Bear|XMM}"
            ]
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Bag of Tricks, Tan",
      source: "DMG",
      page: 154,
      srd: true,
      reprintedAs: [
        "Bag of Tricks, Tan|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 0.5,
      recharge: "dawn",
      entries: [
        "This ordinary bag, made from tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
        "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colLabels: [
            "{@dice d8}",
            "Creature"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "1",
              "{@creature Jackal}"
            ],
            [
              "2",
              "{@creature Ape}"
            ],
            [
              "3",
              "{@creature Baboon}"
            ],
            [
              "4",
              "{@creature Axe beak}"
            ],
            [
              "5",
              "{@creature Black bear}"
            ],
            [
              "6",
              "{@creature Giant weasel}"
            ],
            [
              "7",
              "{@creature Giant hyena}"
            ],
            [
              "8",
              "{@creature Tiger}"
            ]
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Bag of Tricks, Tan",
      source: "XDMG",
      page: 234,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      entries: [
        "This bag made from tan cloth appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
        "You can take a {@action Magic|XPHB} action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling on the table below. See the {@book Monster Manual|XMM} for the creature's stat block. The creature vanishes at the next dawn or when it is reduced to 0 {@variantrule Hit Points|XPHB}.",
        "The creature is {@variantrule Friendly [Attitude]|XPHB|Friendly} to you and your allies, and it acts immediately after you on your {@variantrule Initiative|XPHB} count. You can take a {@variantrule Bonus Action|XPHB} to command how the creature moves and what action it takes on its next turn, such as attacking an enemy. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
        "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "1d8",
            "Creature"
          ],
          rows: [
            [
              "1",
              "{@creature Jackal|XMM}"
            ],
            [
              "2",
              "{@creature Ape|XMM}"
            ],
            [
              "3",
              "{@creature Baboon|XMM}"
            ],
            [
              "4",
              "{@creature Axe Beak|XMM}"
            ],
            [
              "5",
              "{@creature Black Bear|XMM}"
            ],
            [
              "6",
              "{@creature Giant Weasel|XMM}"
            ],
            [
              "7",
              "{@creature Giant Hyena|XMM}"
            ],
            [
              "8",
              "{@creature Tiger|XMM}"
            ]
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Balance of Harmony",
      source: "TftYP",
      page: 228,
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "This scale bears celestial symbols on one pan and fiendish symbols on the other. You can use the scale to cast {@spell detect evil and good} as a ritual. Doing so requires you to place the scale on a solid surface, then sprinkle the pans with holy water or place a transparent gem worth 100 gp in each pan. The scale remains motionless if it detects nothing, tips to one side or the other for good (consecrated) or evil (desecrated), and fluctuates slightly if it detects a creature appropriate to the spell but neither good nor evil. By touching the scales after casting the ritual, you instantly learn any information the spell can normally convey, and then the effect ends."
      ],
      attachedSpells: [
        "detect evil and good"
      ]
    },
    {
      name: "Balloon Pack",
      source: "PotA",
      page: 222,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This backpack contains the spirit of an {@creature air elemental} and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the {@spell levitate} spell for 10 minutes, targeting yourself and requiring no {@status concentration}. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the {@spell feather fall} spell for yourself.",
        "When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.",
        "After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack."
      ],
      attachedSpells: [
        "levitate",
        "feather fall"
      ]
    },
    {
      name: "Barrier Tattoo (Small)",
      source: "TCE",
      page: 122,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo depicts protective imagery and uses ink that resembles liquid metal.",
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
          name: "Protection",
          entries: [
            "While you aren't wearing armor, the tattoo grants you an Armor Class of 12 + your dexterity bonus. You can use a shield and still gain this benefit."
          ]
        }
      ]
    },
    {
      name: "Blasted Goggles",
      source: "BMT",
      page: 174,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "These tinker's goggles have 3 charges. As an action, you can expend 1 charge to shoot a beam of fiery light from the goggles at a creature you can see within 120 feet of yourself. The target must succeed on a {@dc 15} Dexterity saving throw or take {@damage 3d6} fire damage. The goggles regain {@dice 1d3} expended charges daily at dawn.",
        {
          type: "entries",
          name: "Cursed",
          entries: [
            "The goggles are cursed, and becoming attuned to them extends the curse to you. You can't remove the goggles or end your attunement to them until you are targeted by a {@spell Remove Curse} spell or similar magic.",
            "Whenever you use the goggles' fiery beam and the target rolls a 20 on the {@dice d20} for the saving throw, the goggles expose you to a flash of violent {@quickref Vision and Light||2||bright light}. As a result, you have the blinded condition for 24 hours."
          ]
        }
      ]
    },
    {
      name: "Blood of the Lycanthrope Antidote",
      source: "IMR",
      page: 94,
      type: "P",
      rarity: "uncommon",
      entries: [
        "This clear potion has dark red flecks within, resembling clotted blood. When you drink this potion, it removes the curse of lycanthropy from you if that curse was imposed by a lycanthrope's bite or similar effect."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Blood Spear",
      source: "CoS",
      page: 221,
      baseItem: "spear|phb",
      type: "M",
      rarity: "uncommon",
      reqAttune: true,
      weight: 3,
      weaponCategory: "simple",
      property: [
        "T",
        "V"
      ],
      range: "20/60",
      dmg1: "1d6",
      dmgType: "P",
      dmg2: "1d8",
      bonusWeapon: "+2",
      entries: [
        "Kavan was a ruthless chieftain whose tribe lived in the Balinok Mountains centuries before the arrival of {@creature Strahd von Zarovich|CoS}. Although he was very much alive, Kavan had some traits in common with vampires: he slept during the day and hunted at night, he drank the blood of his prey, and he lived underground. In battle, he wielded a spear stained with blood. His was the first blood spear, a weapon that drains life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting.",
        "When you hit with a melee attack using this magic spear and reduce the target to 0 hit points, you gain {@dice 2d6} temporary hit points.",
        "Any creature can wield the spear, but only the character {@adventure chosen by Kavan|CoS|14|Blood Spear of Kavan} to wield it gains a +2 bonus to attack and damage rolls made with this magic weapon."
      ],
      hasFluffImages: true
    },
    {
      name: "Bloodrage Greataxe",
      source: "BMT",
      page: 66,
      baseItem: "greataxe|PHB",
      type: "M",
      rarity: "uncommon",
      weight: 7,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "1d12",
      dmgType: "S",
      bonusWeapon: "+2",
      entries: [
        "You gain a +2 bonus to attack and damage rolls made with this magic greataxe while you have half your hit points or fewer."
      ]
    },
    {
      name: "Boomerang Shield",
      source: "BMT",
      page: 66,
      baseItem: "shield|PHB",
      type: "S",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      ac: 2,
      entries: [
        "You can make a ranged weapon attack with this magic shield. It has a normal range of 20 feet and a long range of 60 feet, and it uses your Strength or Dexterity for the attack roll (your choice). If you're proficient with shields, you are proficient with attacks made using this shield. On a hit, it deals {@damage 1d6} slashing damage. If you throw the shield, it reappears in your hand the instant after it hits or misses a target."
      ]
    },
    {
      name: "Boots of Elvenkind",
      source: "DMG",
      page: 155,
      srd: true,
      reprintedAs: [
        "Boots of Elvenkind|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity ({@skill Stealth}) checks that rely on moving silently."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Boots of Elvenkind",
      source: "XDMG",
      page: 239,
      freeRules2024: true,
      otherSources: [
        {
          source: "ScoEE"
        }
      ],
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have {@variantrule Advantage|XPHB} on Dexterity ({@skill Stealth|XPHB}) checks."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Boots of Striding and Springing",
      source: "DMG",
      page: 156,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Boots of Striding and Springing|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          walk: 30
        }
      },
      entries: [
        "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Boots of Striding and Springing",
      source: "XDMG",
      page: 240,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          walk: 30
        }
      },
      entries: [
        "While you wear these boots, your {@variantrule Speed|XPHB} becomes 30 feet unless your {@variantrule Speed|XPHB} is higher, and your {@variantrule Speed|XPHB} isn't reduced by you carrying weight in excess of your carrying capacity or wearing Heavy Armor.",
        "Once on each of your turns, you can jump up to 30 feet by spending only 10 feet of movement."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Boots of the Vigilant",
      source: "TDCSR",
      page: 194,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      entries: [
        "While you wear these boots, you can sense impending danger. After you roll initiative, you can choose to roll a {@dice d8} and add it to your initiative roll. Once this property is used, it can't be used again until the next dawn."
      ]
    },
    {
      name: "Boots of the Winterlands",
      source: "DMG",
      page: 156,
      srd: true,
      reprintedAs: [
        "Boots of the Winterlands|XDMG"
      ],
      resist: [
        "cold"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:",
        {
          type: "list",
          items: [
            "You have resistance to cold damage.",
            "You ignore {@quickref difficult terrain||3} created by ice or snow.",
            "You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit."
          ]
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Boots of the Winterlands",
      source: "XDMG",
      page: 240,
      resist: [
        "cold"
      ],
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These furred boots are snug and feel warm. While wearing them, you gain the following benefits.",
        {
          type: "entries",
          name: "Cold Resistance",
          entries: [
            "You have {@variantrule Resistance|XPHB} to Cold damage and can tolerate temperatures of 0 degrees Fahrenheit or lower without any additional protection."
          ]
        },
        {
          type: "entries",
          name: "Winter Strider",
          entries: [
            "You ignore {@variantrule Difficult Terrain|XPHB} created by ice or snow."
          ]
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Boros Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Boros, allows you to cast {@spell heroism}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Boros' recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "heroism"
      ],
      hasFluffImages: true
    },
    {
      name: "Bottled Breath",
      source: "PotA",
      page: 222,
      type: "P",
      rarity: "uncommon",
      entries: [
        "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.",
        "If you exhale the breath, you gain the effect of the {@spell gust of wind} spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath."
      ],
      attachedSpells: [
        "gust of wind"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Bracers of Archery",
      source: "DMG",
      page: 156,
      srd: true,
      reprintedAs: [
        "Bracers of Archery|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      grantsProficiency: true,
      bonusWeaponDamage: "+2",
      entries: [
        "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Bracers of Archery",
      source: "XDMG",
      page: 240,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      grantsProficiency: true,
      bonusWeaponDamage: "+2",
      entries: [
        "While wearing these bracers, you have proficiency with the Longbow and Shortbow, and you gain a +2 bonus to damage rolls made with such weapons."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Brooch of Living Essence",
      source: "EGW",
      page: 266,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral."
      ]
    },
    {
      name: "Brooch of Shielding",
      source: "DMG",
      page: 156,
      srd: true,
      reprintedAs: [
        "Brooch of Shielding|XDMG"
      ],
      resist: [
        "force"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the {@spell magic missile} spell."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Brooch of Shielding",
      source: "XDMG",
      page: 241,
      freeRules2024: true,
      resist: [
        "force"
      ],
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this brooch, you have {@variantrule Resistance|XPHB} to Force damage, and you have {@variantrule Immunity|XPHB} to damage from the {@spell Magic Missile|XPHB} spell."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Broom of Flying",
      source: "DMG",
      page: 156,
      srd: true,
      reprintedAs: [
        "Broom of Flying|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 3,
      entries: [
        "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.",
        "You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Broom of Flying",
      source: "XDMG",
      page: 241,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This wooden broom functions like a mundane broom until you stand astride it and take a {@action Magic|XPHB} action to make it hover beneath you, at which time it can be ridden in the air. It has a {@variantrule Fly Speed|XPHB} of 50 feet. It can carry up to 400 pounds, but its {@variantrule Fly Speed|XPHB} becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land or when you're no longer riding it.",
        "As a {@action Magic|XPHB} action, you can send the broom to travel alone to a destination within 1 mile of you if you name the location and are familiar with it. The broom comes back to you when you take a {@action Magic|XPHB} action and use a command word if the broom is still within 1 mile of you."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Cap of Water Breathing",
      source: "DMG",
      page: 157,
      reprintedAs: [
        "Cap of Water Breathing|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ]
    },
    {
      name: "Cap of Water Breathing",
      source: "XDMG",
      page: 242,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this cap underwater, you can take a {@action Magic|XPHB} action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Card Sharp's Deck",
      source: "BMT",
      page: 40,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "The cards of this deck shimmer around the edges. While holding this deck, you can use the following properties:",
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              type: "item",
              name: "Deadly Deal",
              entries: [
                "As an action, you can use this deck to make a ranged spell attack by throwing a spectral card and using Dexterity for the attack roll. The card has a range of 120 feet and deals {@damage 1d8} force damage on a hit."
              ]
            },
            {
              type: "item",
              name: "Spray of Cards",
              entries: [
                "As an action, you can shuffle the deck and cast the {@spell Spray of Cards|BMT} spell at 3rd level from the deck (spell save {@dc 15}). Once the deck has cast the spell, it can't cast the spell again until the next dawn."
              ]
            }
          ]
        }
      ],
      attachedSpells: [
        "spray of cards|bmt"
      ]
    },
    {
      name: "Circlet of Blasting",
      source: "DMG",
      page: 158,
      srd: true,
      reprintedAs: [
        "Circlet of Blasting|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this circlet, you can use an action to cast the {@spell scorching ray} spell with it. When you make the spell's attacks, you do so with an attack bonus of {@hit 5}. The circlet can't be used this way again until the next dawn."
      ],
      attachedSpells: [
        "scorching ray"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Circlet of Blasting",
      source: "XDMG",
      page: 244,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this circlet, you can cast {@spell Scorching Ray|XPHB} with it ({@hit 5} to hit). The circlet can't cast this spell again until the next dawn."
      ],
      attachedSpells: [
        "scorching ray|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Circlet of Human Perfection",
      source: "WDMM",
      page: 30,
      type: "OTH",
      rarity: "uncommon",
      reqAttune: "by a humanoid",
      reqAttuneTags: [
        {
          creatureType: "humanoid"
        }
      ],
      entries: [
        "The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer. Removing the circlet ends the effect."
      ]
    },
    {
      name: "Cloak of Elvenkind",
      source: "DMG",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cloak of Elvenkind|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While you wear this cloak with its hood up, Wisdom ({@skill Perception}) checks made to see you have disadvantage, and you have advantage on Dexterity ({@skill Stealth}) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of Elvenkind",
      source: "XDMG",
      page: 244,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While you wear this cloak, Wisdom ({@skill Perception|XPHB}) checks made to perceive you have {@variantrule Disadvantage|XPHB}, and you have {@variantrule Advantage|XPHB} on Dexterity ({@skill Stealth|XPHB}) checks."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of Protection",
      source: "DMG",
      page: 159,
      srd: true,
      reprintedAs: [
        "Cloak of Protection|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      bonusAc: "+1",
      bonusSavingThrow: "+1",
      entries: [
        "You gain a +1 bonus to AC and saving throws while you wear this cloak."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of Protection",
      source: "XDMG",
      page: 245,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      bonusAc: "+1",
      bonusSavingThrow: "+1",
      entries: [
        "You gain a +1 bonus to {@variantrule Armor Class|XPHB} and saving throws while you wear this cloak."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of the Manta Ray",
      source: "DMG",
      page: 159,
      srd: true,
      reprintedAs: [
        "Cloak of the Manta Ray|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      modifySpeed: {
        static: {
          swim: 60
        }
      },
      entries: [
        "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Cloak of the Manta Ray",
      source: "XDMG",
      page: 245,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          swim: 60
        }
      },
      entries: [
        "While wearing this cloak, you can breathe underwater, and you have a {@variantrule Swim Speed|XPHB} of 60 feet."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Coiling Grasp Tattoo",
      source: "TCE",
      page: 123,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo has long intertwining designs.",
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
          name: "Grasping Tendrils",
          entries: [
            "While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a {@dc 14} Strength saving throw or take {@damage 3d6} force damage and be {@condition grappled} by you. As an action, the creature can escape the grapple by succeeding on a {@dc 14} Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check. The grapple also ends if you halt it (no action required), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature."
          ]
        }
      ]
    },
    {
      name: "Condensed Order",
      source: "CoA",
      page: 267,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Condensed Order is a silvery powder that can be extracted from those of a lawful persuasion. Devils bound for the warfronts of Avernus take flasks and snuff boxes of the stuff to fortify themselves against exposure to the raw chaos of demons. Taking the substance requires an action and makes you immune to the flesh warping feature of demonic ichor. It also gives you advantage on saving throws against any effect from a demonic source. These benefits last for 8 hours."
      ]
    },
    {
      name: "Cracked Driftglobe",
      source: "CM",
      page: 110,
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the {@spell light} spell."
      ],
      attachedSpells: [
        "light"
      ]
    },
    {
      name: "Crown of the Forest",
      source: "IMR",
      page: 7,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this crown, a character automatically fails any Intelligence ({@skill Investigation}) check made to see through an illusion. An illusion that is touched still has its true nature revealed. However, a character wearing a crown has such a strong sense that the illusion is real that they might not know which of their senses to believe.",
        "If this crown is closely examined by a character who succeeds on a {@dc 20} Intelligence ({@skill Nature}) or Wisdom ({@skill Perception}) check, or with a {@spell detect magic} spell cast using a 3rd-level or higher spell slot, the nature of its magic is discovered."
      ]
    },
    {
      name: "Cursed Luckstone",
      source: "GoS",
      page: 229,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "This flat, gray-and-black river stone is inscribed with an unknown arcane symbol and feels cool to the touch. While carrying the stone, you can gain advantage on one ability check of your choice. The stone can't be used this way again until the next dawn.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This item is cursed. Attuning to it curses you until you are targeted by a {@spell remove curse} spell or similar magic. As long as you remain cursed, you cannot discard the stone, which immediately teleports back into your pocket or pack. After you use the stone's magic, your next two ability checks are made with disadvantage."
          ]
        }
      ]
    },
    {
      name: "Decanter of Endless Water",
      source: "DMG",
      page: 161,
      srd: true,
      reprintedAs: [
        "Decanter of Endless Water|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      entries: [
        "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.",
        "You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:",
        {
          type: "list",
          items: [
            "\"Stream\" produces 1 gallon of water.",
            "\"Fountain\" produces 5 gallons of water.",
            "\"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a {@dc 13} Strength saving throw or take {@damage 1d4} bludgeoning damage and fall {@condition prone}. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table C"
      ],
      miscTags: [
        "CF/W"
      ],
      hasFluffImages: true
    },
    {
      name: "Decanter of Endless Water",
      source: "XDMG",
      page: 249,
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      entries: [
        "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.",
        "You can take a {@action Magic|XPHB} action to remove the stopper and issue one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following command words:",
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              type: "item",
              name: "Splash",
              entries: [
                "The decanter produces 1 gallon of water."
              ]
            },
            {
              type: "item",
              name: "Fountain",
              entries: [
                "The decanter produces 5 gallons of water."
              ]
            },
            {
              type: "item",
              name: "Geyser",
              entries: [
                "The decanter produces 30 gallons of water that gushes forth in a {@variantrule Line [Area of Effect]|XPHB|Line} 30 feet long and 1 foot wide. If you're holding the decanter, you can aim the geyser in one direction (no action required). One creature of your choice in the {@variantrule Line [Area of Effect]|XPHB|Line} must succeed on a {@dc 13} Strength saving throw or take {@damage 1d4} Bludgeoning damage and have the {@condition Prone|XPHB} condition. Instead of a creature, you can target one object in the {@variantrule Line [Area of Effect]|XPHB|Line} that isn't being worn or carried and that weighs no more than 200 pounds. The object is knocked over by the geyser."
              ]
            }
          ]
        }
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CF/W"
      ],
      hasFluffImages: true
    },
    {
      name: "Deck of Illusions",
      source: "DMG",
      page: 161,
      srd: true,
      reprintedAs: [
        "Deck of Illusions|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing {@dice 1d20 - 1} cards.",
        "The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.",
        "An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful {@dc 15} Intelligence ({@skill Investigation}) check. The creature then appears translucent.",
        "The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again.",
        {
          type: "table",
          colLabels: [
            "{@dice 1d34|Playing Card}",
            "Illusion"
          ],
          colStyles: [
            "col-3",
            "col-9"
          ],
          rows: [
            [
              {
                type: "cell",
                roll: {
                  exact: 1
                },
                entry: "Ace of hearts"
              },
              "{@creature adult red dragon||Red dragon}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 2
                },
                entry: "King of hearts"
              },
              "{@creature Knight} and four {@creature guard||guards}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 3
                },
                entry: "Queen of hearts"
              },
              "{@creature Succubus||Succubus/Incubus}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 4
                },
                entry: "Jack of hearts"
              },
              "{@creature Druid}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 5
                },
                entry: "Ten of hearts"
              },
              "{@creature Cloud giant}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 6
                },
                entry: "Nine of hearts"
              },
              "{@creature Ettin}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 7
                },
                entry: "Eight of hearts"
              },
              "{@creature Bugbear}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 8
                },
                entry: "Two of hearts"
              },
              "{@creature Goblin}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 9
                },
                entry: "Ace of diamonds"
              },
              "{@creature Beholder}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 10
                },
                entry: "King of diamonds"
              },
              "{@creature Archmage} and {@creature mage} apprentice"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 11
                },
                entry: "Queen of diamonds"
              },
              "{@creature Night hag}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 12
                },
                entry: "Jack of diamonds"
              },
              "{@creature Assassin}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 13
                },
                entry: "Ten of diamonds"
              },
              "{@creature Fire giant}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 14
                },
                entry: "Nine of diamonds"
              },
              "{@creature oni||Ogre mage}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 15
                },
                entry: "Eight of diamonds"
              },
              "{@creature Gnoll}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 16
                },
                entry: "Two of diamonds"
              },
              "{@creature Kobold}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 17
                },
                entry: "Ace of spades"
              },
              "{@creature Lich}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 18
                },
                entry: "King of spades"
              },
              "{@creature Priest} and two {@creature acolyte||acolytes}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 19
                },
                entry: "Queen of spades"
              },
              "{@creature Medusa}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 20
                },
                entry: "Jack of spades"
              },
              "{@creature Veteran}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 21
                },
                entry: "Ten of spades"
              },
              "{@creature Frost giant}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 22
                },
                entry: "Nine of spades"
              },
              "{@creature Troll}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 23
                },
                entry: "Eight of spades"
              },
              "{@creature Hobgoblin}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 24
                },
                entry: "Two of spades"
              },
              "{@creature Goblin}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 25
                },
                entry: "Ace of clubs"
              },
              "{@creature Iron golem}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 26
                },
                entry: "King of clubs"
              },
              "{@creature Bandit captain} and three {@creature bandit||bandits}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 27
                },
                entry: "Queen of clubs"
              },
              "{@creature Erinyes}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 28
                },
                entry: "Jack of clubs"
              },
              "{@creature Berserker}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 29
                },
                entry: "Ten of clubs"
              },
              "{@creature Hill giant}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 30
                },
                entry: "Nine of clubs"
              },
              "{@creature Ogre}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 31
                },
                entry: "Eight of clubs"
              },
              "{@creature Orc}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 32
                },
                entry: "Two of clubs"
              },
              "{@creature Kobold}"
            ],
            [
              {
                type: "cell",
                roll: {
                  min: 33,
                  max: 34
                },
                entry: "jokers (2)"
              },
              "You (the deck's owner)"
            ]
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      seeAlsoDeck: [
        "Deck of Illusions"
      ]
    },
    {
      name: "Deck of Illusions",
      source: "XDMG",
      page: 249,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This box contains a set of cards. A full deck has 34 cards: 32 depicting specific creatures and two with a mirrored surface. A deck found as treasure is usually missing {@dice 1d20 - 1} cards.",
        "The magic of the deck functions only if its cards are drawn at random. You can take a {@action Magic|XPHB} action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of yourself. An illusion of a creature, determined by rolling on the Deck of Illusions table, forms over the thrown card and remains until dispelled. The illusory creature created by the card looks and behaves like a real creature of its kind, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can take a {@action Magic|XPHB} action to move it anywhere within 30 feet of its card.",
        "Any physical interaction with the illusory creature reveals it to be false, because objects pass through it. A creature that takes a {@action Study|XPHB} action to visually inspect the illusory creature identifies it as an illusion with a successful {@dc 15} Intelligence ({@skill Investigation|XPHB}) check. The illusion lasts until its card is moved or the illusion is dispelled (using a {@spell Dispel Magic|XPHB} spell or a similar effect). When the illusion ends, the image on its card disappears, and that card can't be used again.",
        {
          type: "table",
          caption: "Deck of Illusions",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "1d100",
            "Illusion"
          ],
          rows: [
            [
              "01-03",
              "{@creature Adult Red Dragon|XMM}"
            ],
            [
              "04-06",
              "{@creature Archmage|XMM}"
            ],
            [
              "07-09",
              "{@creature Assassin|XMM}"
            ],
            [
              "10-12",
              "{@creature Bandit Captain|XMM}"
            ],
            [
              "13-15",
              "{@creature Beholder|XMM}"
            ],
            [
              "16-18",
              "{@creature Berserker|XMM}"
            ],
            [
              "19-21",
              "{@creature Bugbear Warrior|XMM}"
            ],
            [
              "22-24",
              "{@creature Cloud Giant|XMM}"
            ],
            [
              "25-27",
              "{@creature Druid|XMM}"
            ],
            [
              "28-30",
              "{@creature Erinyes|XMM}"
            ],
            [
              "31-33",
              "{@creature Ettin|XMM}"
            ],
            [
              "34-36",
              "{@creature Fire Giant|XMM}"
            ],
            [
              "37-39",
              "{@creature Frost Giant|XMM}"
            ],
            [
              "40-42",
              "{@creature Gnoll Warrior|XMM}"
            ],
            [
              "43-45",
              "{@creature Goblin Warrior|XMM}"
            ],
            [
              "46-48",
              "{@creature Guardian Naga|XMM}"
            ],
            [
              "49-51",
              "{@creature Hill Giant|XMM}"
            ],
            [
              "52-54",
              "{@creature Hobgoblin Warrior|XMM}"
            ],
            [
              "55-57",
              "{@creature Incubus|XMM}"
            ],
            [
              "58-60",
              "{@creature Iron Golem|XMM}"
            ],
            [
              "61-63",
              "{@creature Knight|XMM}"
            ],
            [
              "64-66",
              "{@creature Kobold Warrior|XMM}"
            ],
            [
              "67-69",
              "{@creature Lich|XMM}"
            ],
            [
              "70-72",
              "{@creature Medusa|XMM}"
            ],
            [
              "73-75",
              "{@creature Night Hag|XMM}"
            ],
            [
              "76-78",
              "{@creature Ogre|XMM}"
            ],
            [
              "79-81",
              "{@creature Oni|XMM}"
            ],
            [
              "82-84",
              "{@creature Priest|XMM}"
            ],
            [
              "85-87",
              "{@creature Succubus|XMM}"
            ],
            [
              "88-90",
              "{@creature Troll|XMM}"
            ],
            [
              "91-93",
              "{@creature Warrior Veteran|XMM}"
            ],
            [
              "94-96",
              "{@creature Wyvern|XMM}"
            ],
            [
              "97-00",
              "The card drawer"
            ]
          ]
        }
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      seeAlsoDeck: [
        "Deck of Illusions|XDMG"
      ]
    },
    {
      name: "Deck of Miscellany",
      source: "BMT",
      page: 41,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This wooden box contains a set of thirty-two parchment cards.",
        {
          type: "table",
          caption: "Deck of Miscellany",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "{@dice 1d32|Card}",
            "Item"
          ],
          rows: [
            [
              {
                type: "cell",
                roll: {
                  exact: 1
                },
                entry: " 3 {@color ♦|#ff0000}"
              },
              "Wooden {@item abacus|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 2
                },
                entry: " 4 {@color ♦|#ff0000}"
              },
              "Four {@item Perfume (vial)|PHB|vials of perfume}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 3
                },
                entry: " 5 {@color ♦|#ff0000}"
              },
              "5 days' worth of {@item Rations (1 day)|PHB|rations}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 4
                },
                entry: " 6 {@color ♦|#ff0000}"
              },
              "{@item Iron pot|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 5
                },
                entry: " 7 {@color ♦|#ff0000}"
              },
              "{@item Disguise kit|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 6
                },
                entry: " 8 {@color ♦|#ff0000}"
              },
              "Window (up to 5 feet wide and 5 feet high), which you can place on a vertical surface up to 5 feet thick and which allows you to look through the surface"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 7
                },
                entry: " 9 {@color ♦|#ff0000}"
              },
              "{@item Manacles|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 8
                },
                entry: "10 {@color ♦|#ff0000}"
              },
              "Ten {@item Parchment (one sheet)|PHB|sheets of parchment}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 9
                },
                entry: " 3 {@color ♥|#ff0000}"
              },
              "Three {@item dagger|PHB|daggers}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 10
                },
                entry: " 4 {@color ♥|#ff0000}"
              },
              "Four {@item Oil (flask)|PHB|flasks of oil}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 11
                },
                entry: " 5 {@color ♥|#ff0000}"
              },
              "Five silk {@item robes|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 12
                },
                entry: " 6 {@color ♥|#ff0000}"
              },
              "{@item Forgery kit|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 13
                },
                entry: " 7 {@color ♥|#ff0000}"
              },
              "{@item Quarterstaff|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 14
                },
                entry: " 8 {@color ♥|#ff0000}"
              },
              "{@item Fishing tackle|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 15
                },
                entry: " 9 {@color ♥|#ff0000}"
              },
              "Leather {@item pouch|PHB} containing 18 gp"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 16
                },
                entry: "10 {@color ♥|#ff0000}"
              },
              "10 {@item crossbow bolt|PHB|crossbow bolts}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 17
                },
                entry: " 3 ♣"
              },
              "Three {@item book|PHB|books}, written in {@language Common}, about random historical events"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 18
                },
                entry: " 4 ♣"
              },
              "Canvas {@item Two-Person Tent|PHB|tent}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 19
                },
                entry: " 5 ♣"
              },
              "{@item Silk Rope (50 feet)|PHB|50 feet of coiled silk rope}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 20
                },
                entry: " 6 ♣"
              },
              "Two {@item crowbar|PHB|crowbars}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 21
                },
                entry: " 7 ♣"
              },
              "{@item Healer's kit|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 22
                },
                entry: " 8 ♣"
              },
              "Eight gems worth 5 gp each"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 23
                },
                entry: " 9 ♣"
              },
              "{@item Lamp|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 24
                },
                entry: "10 ♣"
              },
              "{@item Chain (10 feet)|PHB|10 feet of iron chain}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 25
                },
                entry: " 3 ♠"
              },
              "Three {@item spear|PHB|spears}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 26
                },
                entry: " 4 ♠"
              },
              "{@item Steel mirror|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 27
                },
                entry: " 5 ♠"
              },
              "15-foot wooden pole"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 28
                },
                entry: " 6 ♠"
              },
              "Burlap {@item sack|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 29
                },
                entry: " 7 ♠"
              },
              "Two sets of {@item fine clothes|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 30
                },
                entry: " 8 ♠"
              },
              "{@item Shovel|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 31
                },
                entry: " 9 ♠"
              },
              "{@item Light hammer|PHB}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 32
                },
                entry: "10 ♠"
              },
              "Ten {@item arrow|PHB|arrows}"
            ]
          ]
        },
        "The face of each card bears an illustration of a different item or set of items. As an action, you can draw a card of your choice from the deck and throw it to the ground in an unoccupied space within 5 feet of yourself. When the card hits the ground, the card permanently transforms into the item or set of items depicted on its face. An altered deck of real-world playing cards can simulate the deck, as shown on the Deck of Miscellany table."
      ]
    },
    {
      name: "Deck of Wonder",
      source: "BMT",
      page: 55,
      resist: [
        "acid",
        "cold",
        "fire",
        "force",
        "lightning",
        "necrotic",
        "poison",
        "psychic",
        "radiant",
        "thunder"
      ],
      rarity: "uncommon",
      wondrous: true,
      grantsProficiency: true,
      bonusWeapon: "+1",
      bonusSavingThrow: "+1",
      entries: [
        "Created in the image of the Deck of Many Things, this deck of ivory or vellum cards bestows an assortment of minor benefits and penalties on those who draw from it. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.",
        "Before you draw a card, you must declare how many cards you intend to draw, then draw them randomly. Any additional cards drawn have no effect. Unless a card states otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card you declared no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck and take effect simultaneously.",
        "Unless it is the Mystery card, a drawn card immediately takes effect, fades from existence, and reappears in the deck, making it possible to draw the same card multiple times.",
        "You can use an altered deck of playing cards to simulate the deck, as shown in the Deck of Wonder table.",
        {
          type: "table",
          caption: "Deck of Wonder",
          colStyles: [
            "col-4 text-center",
            "col-8"
          ],
          colLabels: [
            "{@dice 1d22|Card}",
            "Card Title"
          ],
          rows: [
            [
              {
                type: "cell",
                roll: {
                  exact: 1
                },
                entry: "A {@color ♦|#ff0000}"
              },
              "{@card Chancellor|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 2
                },
                entry: "K {@color ♦|#ff0000}"
              },
              "{@card Day|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 3
                },
                entry: "Q {@color ♦|#ff0000}"
              },
              "{@card Night|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 4
                },
                entry: "J {@color ♦|#ff0000}"
              },
              "{@card Dawn|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 5
                },
                entry: "2 {@color ♦|#ff0000}"
              },
              "{@card Dusk|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 6
                },
                entry: "A {@color ♥|#ff0000}"
              },
              "{@card Destiny|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 7
                },
                entry: "K {@color ♥|#ff0000}"
              },
              "{@card Crown|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 8
                },
                entry: "Q {@color ♥|#ff0000}"
              },
              "{@card Lock|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 9
                },
                entry: "J {@color ♥|#ff0000}"
              },
              "{@card Champion|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 10
                },
                entry: "2 {@color ♥|#ff0000}"
              },
              "{@card Coin|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 11
                },
                entry: "A ♣"
              },
              "{@card Vulture|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 12
                },
                entry: "K ♣"
              },
              "{@card Chaos|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 13
                },
                entry: "Q ♣"
              },
              "{@card Order|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 14
                },
                entry: "J ♣"
              },
              "{@card Beginning|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 15
                },
                entry: "2 ♣"
              },
              "{@card Mystery|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 16
                },
                entry: "A ♠"
              },
              "{@card Isolation|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 17
                },
                entry: "K ♠"
              },
              "{@card End|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 18
                },
                entry: "Q ♠"
              },
              "{@card Monster|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 19
                },
                entry: "J ♠"
              },
              "{@card Knife|Deck of Wonder|BMT}"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 20
                },
                entry: "2 ♠"
              },
              "{@card Justice|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 21
                },
                entry: "Joker (with ™)"
              },
              "{@card Student|Deck of Wonder|BMT}*"
            ],
            [
              {
                type: "cell",
                roll: {
                  exact: 22
                },
                entry: "Joker (without ™)"
              },
              "{@card Mischief|Deck of Wonder|BMT}"
            ]
          ]
        },
        {
          type: "entries",
          name: "Beginning",
          entries: [
            "Your hit point maximum and current hit points increase by {@dice 2d10}. Your hit point maximum remains increased in this way for the next 8 hours."
          ]
        },
        {
          type: "entries",
          name: "Champion",
          entries: [
            "You gain a +1 bonus to weapon attack and damage rolls. This bonus lasts for 8 hours."
          ]
        },
        {
          type: "entries",
          name: "Chancellor",
          entries: [
            "Within 8 hours of drawing this card, you can cast {@spell Augury} once as an action, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."
          ]
        },
        {
          type: "entries",
          name: "Chaos",
          entries: [
            "You gain resistance to one of the following damage types (chosen by the DM): acid, cold, fire, lightning, or thunder. This resistance lasts for {@dice 1d12} days."
          ]
        },
        {
          type: "entries",
          name: "Coin",
          entries: [
            "Five pieces of jewelry, each worth 100 gp, or ten gemstones, each worth 50 gp, appear at your feet."
          ]
        },
        {
          type: "entries",
          name: "Crown",
          entries: [
            "You learn the {@spell Friends} cantrip. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice). If you already know this cantrip, the card has no effect."
          ]
        },
        {
          type: "entries",
          name: "Dawn",
          entries: [
            "This card invigorates you. For the next 8 hours, you can add your proficiency bonus to your initiative rolls."
          ]
        },
        {
          type: "entries",
          name: "Day",
          entries: [
            "You gain a +1 bonus to saving throws. This benefit lasts until you finish a long rest."
          ]
        },
        {
          type: "entries",
          name: "Destiny",
          entries: [
            "This card protects you against an untimely demise. The first time after drawing this card that you would drop to 0 hit points from taking damage, you instead drop to 1 hit point."
          ]
        },
        {
          type: "entries",
          name: "Dusk",
          entries: [
            "This card supernaturally saps your energy. You have disadvantage on initiative rolls. This effect lasts until you finish a long rest, but it can be ended early by a {@spell Remove Curse} spell or similar magic."
          ]
        },
        {
          type: "entries",
          name: "End",
          entries: [
            "This card is an omen of death. You take {@damage 2d10} necrotic damage, and your hit point maximum is reduced by an amount equal to the damage taken. This effect can't reduce your hit point maximum below 10 hit points. This reduction lasts until you finish a long rest, but it can be ended early by a {@spell Remove Curse} spell or similar magic."
          ]
        },
        {
          type: "entries",
          name: "Isolation",
          entries: [
            "You disappear, along with anything you are wearing or carrying, and become trapped in a harmless extradimensional space for {@dice 1d4} minutes. You draw no more cards. You then reappear in the space you left or the nearest unoccupied space. When you reappear, you must succeed on a {@dc 11} Constitution saving throw or have the poisoned condition for 1 hour as your body reels from the extradimensional travel."
          ]
        },
        {
          type: "entries",
          name: "Justice",
          entries: [
            "You momentarily gain the ability to balance the scales of fate. For the next 8 hours, whenever you or a creature within 60 feet of you is about to roll a {@dice d20} with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage or disadvantage."
          ]
        },
        {
          type: "entries",
          name: "Knife",
          entries: [
            "An uncommon magic weapon you're proficient with appears in your hands. The DM chooses the weapon."
          ]
        },
        {
          type: "entries",
          name: "Lock",
          entries: [
            "You gain the ability to cast {@spell Knock} {@dice 1d3} times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."
          ]
        },
        {
          type: "entries",
          name: "Mischief",
          entries: [
            "You receive an uncommon wondrous item (chosen by the DM), or you can draw two additional cards beyond your declared draws."
          ]
        },
        {
          type: "entries",
          name: "Monster",
          entries: [
            "This card's monstrous visage curses you. While cursed in this way, whenever you make a saving throw, you must roll {@dice 1d4} and subtract the number rolled from the total. The curse lasts until you finish a long rest, but it can be ended early with a {@spell Remove Curse} spell or similar magic."
          ]
        },
        {
          type: "entries",
          name: "Mystery",
          entries: [
            "You have disadvantage on Intelligence saving throws for 1 hour. Discard this card and draw from the deck again; together, the two draws count as one of your declared draws."
          ]
        },
        {
          type: "entries",
          name: "Night",
          entries: [
            "You gain {@sense darkvision} within a range of 300 feet. This {@sense darkvision} lasts for 8 hours."
          ]
        },
        {
          type: "entries",
          name: "Order",
          entries: [
            "You gain resistance to one of the following damage types (chosen by the DM): force, necrotic, poison, psychic, or radiant. This resistance lasts for {@dice 1d12} days."
          ]
        },
        {
          type: "entries",
          name: "Student",
          entries: [
            "You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
          ]
        },
        {
          type: "entries",
          name: "Vulture",
          entries: [
            "One nonmagical item or piece of equipment in your possession (chosen by the DM) disappears. The item remains nearby but concealed for a short time, so it can be found with a successful {@dc 15} Wisdom ({@skill Perception}) check. If the item isn't recovered within 1 hour, it disappears forever."
          ]
        }
      ],
      attachedSpells: [
        "augury",
        "knock"
      ],
      seeAlsoDeck: [
        "Deck of Wonder|BMT"
      ],
      hasFluffImages: true
    },
    {
      name: "Dimir Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Dimir, allows you to cast {@spell disguise self}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Dimir's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "disguise self"
      ],
      hasFluffImages: true
    },
    {
      name: "Driftglobe",
      source: "DMG",
      page: 166,
      reprintedAs: [
        "Driftglobe|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the {@spell light} or {@spell daylight} spell. Once used, the {@spell daylight} effect can't be used again until the next dawn.",
        "You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
      ],
      attachedSpells: [
        "light",
        "daylight"
      ],
      lootTables: [
        "Magic Item Table A",
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Driftglobe",
      source: "XDMG",
      page: 254,
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can command it to emanate light equivalent to that of the {@spell Light|XPHB} or {@spell Daylight|XPHB} spell (your choice). Once used, the Daylight effect can't be used again until the next dawn.",
        "You can issue another command as a {@action Magic|XPHB} action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
      ],
      attachedSpells: [
        "light|xphb",
        "daylight|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Dust of Corrosion",
      source: "WBtW",
      page: 209,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "As an action, you can throw this dust into the air, filling a 10-foot cube that extends out from you. Surfaces and objects made of nonmagical ferrous metal in the area instantly corrode and turn to dust, becoming useless and unsalvageable. Any creature in the area that is made wholly or partly out of ferrous metal must make a {@dc 13} Constitution saving throw, taking {@damage 4d8} necrotic damage on a failed save, or half as much damage on a successful one.",
        "Found in a small packet, this dust is made from finely ground rust monster antennae. There is enough dust in each packet for one use."
      ]
    },
    {
      name: "Dust of Deliciousness",
      source: "EGW",
      page: 267,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings."
      ]
    },
    {
      name: "Dust of Disappearance",
      source: "DMG",
      page: 166,
      srd: true,
      reprintedAs: [
        "Dust of Disappearance|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become {@condition invisible} for {@dice 2d4} minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Dust of Disappearance",
      source: "XDMG",
      page: 255,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This powder resembles fine sand. There is enough of it for one use. When you take a {@action Utilize|XPHB} action to throw the dust into the air, you and each creature and object within a 10-foot {@variantrule Emanation [Area of Effect]|XPHB|Emanation} originating from you have the {@condition Invisible|XPHB} condition for {@dice 2d4} minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. Immediately after an affected creature makes an attack roll, deals damage, or casts a spell, the {@condition Invisible|XPHB} condition ends for that creature."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Dust of Dryness",
      source: "DMG",
      page: 166,
      srd: true,
      reprintedAs: [
        "Dust of Dryness|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small packet contains {@dice 1d6 + 4} pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.",
        "Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic.",
        "An elemental composed mostly of water that is exposed to a pinch of the dust must make a {@dc 13} Constitution saving throw, taking {@damage 10d6} necrotic damage on a failed save, or half as much damage on a successful one."
      ],
      lootTables: [
        "Magic Item Table B"
      ]
    },
    {
      name: "Dust of Dryness",
      source: "XDMG",
      page: 255,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small packet contains {@dice 1d6 + 4} pinches of dust. As a {@action Utilize|XPHB} action, you can sprinkle a pinch of the dust over water, turning up to a 15-foot {@variantrule Cube [Area of Effect]|XPHB|Cube} of water into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible. A creature can take a {@action Utilize|XPHB} action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so destroys the pellet and ends its magic.",
        "As a {@action Utilize|XPHB} action, you can sprinkle a pinch of the dust on an Elemental within 5 feet of yourself that is composed mostly of water (such as a {@creature Water Elemental|XMM} or a {@creature Water Weird|XMM}). Such a creature exposed to a pinch of the dust makes a {@dc 13} Constitution saving throw, taking {@damage 10d6} Necrotic damage on a failed save or half as much damage on a successful one."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Dust of Sneezing and Choking",
      source: "DMG",
      page: 166,
      srd: true,
      reprintedAs: [
        "Dust of Sneezing and Choking|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Found in a small container, this powder resembles very fine sand. It appears to be {@item dust of disappearance}, and an {@spell identify} spell reveals it to be such. There is enough of it for one use.",
        "When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a {@dc 15} Constitution saving throw or become unable to breathe while sneezing uncontrollably. A creature affected in this way is {@condition incapacitated} and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The {@spell lesser restoration} spell can also end the effect on a creature."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Dust of Sneezing and Choking",
      source: "XDMG",
      page: 255,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Found in a small container, this powder resembles {@item Dust of Disappearance|XDMG}, and {@spell Identify|XPHB} reveals it to be such. There is enough of it for one use.",
        "As a {@action Utilize|XPHB} action, you can throw the dust into the air, forcing yourself and every creature in a 30-foot {@variantrule Emanation [Area of Effect]|XPHB|Emanation} originating from you to make a {@dc 15} Constitution saving throw. Constructs, Elementals, Oozes, Plants, and Undead succeed on the save automatically.",
        "On a failed save, a creature begins sneezing uncontrollably; it has the {@condition Incapacitated|XPHB} condition and is suffocating. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The effect also ends on any creature targeted by a {@spell Lesser Restoration|XPHB} spell."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Earworm",
      source: "ERLW",
      page: 277,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 4,
      entries: [
        "To attune to this symbiont, you must hold it against the skin behind your ear for the entire attunement period, whereupon it burrows into your head and bonds to your skull. While the earworm is inside you, you can speak, read, and write Deep Speech.",
        {
          type: "entries",
          name: "Spells",
          entries: [
            "The earworm has 4 charges. You can cast the following spells from it, expending the necessary number of charges (spell save {@dc 15}): {@spell detect thoughts} (2 charges) or {@spell dissonant whispers} (1 charge). Each time you use the earworm to cast the {@spell detect thoughts} spell, it sends the information gleaned to the nearest daelkyr, or to the next nearest earworm until it reaches a daelkyr.",
            "The earworm regains {@dice 1d4} expended charges daily at dawn."
          ]
        },
        {
          type: "entries",
          name: "Symbiotic Nature",
          entries: [
            "The earworm can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the earworm ends, and it exits your body."
          ]
        }
      ],
      attachedSpells: [
        "dissonant whispers",
        "detect thoughts"
      ]
    },
    {
      name: "Echo Stone",
      source: "TDCSR",
      page: 195,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This dull-blue river stone is soft to the touch, and makes remarkably little sound if dropped. When an echo stone is squeezed as an action, it glows faintly for 1 minute. The stone records all sound made within 15 feet of it while glowing, then repeats that recorded sound at an equal volume once every 5 minutes. This cycle of repetition continues until the stone is squeezed again as an action, which silences it. Squeezing the stone twice in quick succession as an action causes it to play the sounds it has most recently recorded, rather than recording new sounds."
      ]
    },
    {
      name: "Elder Cartographer's Glossography",
      source: "AI",
      page: 20,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "When you attain rank 4, you gain a small tome that is an uncommon magic item. The elder cartographer's glossography grants advantage on Intelligence or Wisdom checks related to geographical features or locations."
      ]
    },
    {
      name: "Eldritch Claw Tattoo",
      source: "TCE",
      page: 126,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      tattoo: true,
      bonusWeapon: "+1",
      entries: [
        "Produced by a special needle, this magic tattoo depicts clawlike forms and other jagged shapes.",
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
          name: "Magical Strikes",
          entries: [
            "While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes."
          ]
        },
        {
          type: "entries",
          name: "Eldritch Maul",
          entries: [
            "As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee attacks with a weapon or an unarmed strike can reach a target up to 15 feet away from you, as inky tendrils launch toward the target. In addition, your melee attacks deal an extra {@damage 1d6} force damage on a hit. Once used, this bonus action can't be used again until the next dawn."
          ]
        }
      ]
    },
    {
      name: "Elemental Gem, Blue Sapphire",
      source: "DMG",
      page: 167,
      srd: true,
      reprintedAs: [
        "Elemental Gem, Blue Sapphire|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you use an action to break the gem, an {@creature air elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
      ],
      attachedSpells: [
        "conjure elemental"
      ]
    },
    {
      name: "Elemental Gem, Blue Sapphire",
      source: "XDMG",
      page: 257,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you take a {@action Utilize|XPHB} action to break the gem, an {@creature Air Elemental|XMM} is summoned, and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your {@variantrule Initiative|XPHB} count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a {@variantrule Bonus Action|XPHB}."
      ],
      hasFluffImages: true
    },
    {
      name: "Elemental Gem, Emerald",
      source: "DMG",
      page: 167,
      srd: true,
      reprintedAs: [
        "Elemental Gem, Emerald|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you use an action to break the gem, a {@creature water elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
      ],
      attachedSpells: [
        "conjure elemental"
      ]
    },
    {
      name: "Elemental Gem, Emerald",
      source: "XDMG",
      page: 257,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you take a {@action Utilize|XPHB} action to break the gem, a {@creature Water Elemental|XMM} is summoned, and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your {@variantrule Initiative|XPHB} count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a {@variantrule Bonus Action|XPHB}."
      ],
      hasFluffImages: true
    },
    {
      name: "Elemental Gem, Red Corundum",
      source: "DMG",
      page: 167,
      srd: true,
      reprintedAs: [
        "Elemental Gem, Red Corundum|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you use an action to break the gem, a {@creature fire elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
      ],
      attachedSpells: [
        "conjure elemental"
      ]
    },
    {
      name: "Elemental Gem, Red Corundum",
      source: "XDMG",
      page: 257,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you take a {@action Utilize|XPHB} action to break the gem, a {@creature Fire Elemental|XMM} is summoned, and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your {@variantrule Initiative|XPHB} count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a {@variantrule Bonus Action|XPHB}."
      ],
      hasFluffImages: true
    },
    {
      name: "Elemental Gem, Yellow Diamond",
      source: "DMG",
      page: 167,
      srd: true,
      reprintedAs: [
        "Elemental Gem, Yellow Diamond|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you use an action to break the gem, an {@creature earth elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
      ],
      attachedSpells: [
        "conjure elemental"
      ]
    },
    {
      name: "Elemental Gem, Yellow Diamond",
      source: "XDMG",
      page: 257,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gem contains a mote of elemental energy. When you take a {@action Utilize|XPHB} action to break the gem, an {@creature Earth Elemental|XMM} is summoned, and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your {@variantrule Initiative|XPHB} count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a {@variantrule Bonus Action|XPHB}."
      ],
      hasFluffImages: true
    },
    {
      name: "Emerald Pen",
      source: "FTD",
      page: 23,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This pen is tipped with an emerald nib and requires no ink to write. While holding this pen, you can cast {@spell illusory script} at will, requiring no material components."
      ],
      attachedSpells: [
        "illusory script"
      ]
    },
    {
      name: "Enspelled Staff (Cantrip)",
      source: "XDMG",
      page: 258,
      type: "M|XPHB",
      rarity: "uncommon",
      reqAttune: "by a Spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
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
      rechargeAmount: "{@dice 1d6}",
      charges: 6,
      staff: true,
      entries: [
        "Bound into this staff is a cantrip. The cantrip is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains {@dice 1d6} expended charges daily at dawn. While holding the staff, you can expend 1 charge to cast its spell. If you expend the staff 's last charge, roll {@dice 1d20}. On a 1, the staff loses its properties and becomes a nonmagical {@item Quarterstaff|XPHB}.",
        "The spell's saving throw DC is 13, and its attack bonus is {@hit 5}."
      ],
      spellScrollLevel: 0
    },
    {
      name: "Enspelled Staff (Level 1)",
      source: "XDMG",
      page: 258,
      type: "M|XPHB",
      rarity: "uncommon",
      reqAttune: "by a Spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
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
      rechargeAmount: "{@dice 1d6}",
      charges: 6,
      staff: true,
      entries: [
        "Bound into this staff is a {@filter level 1 spell|spells|level=1}. The spell is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains {@dice 1d6} expended charges daily at dawn. While holding the staff, you can expend 1 charge to cast its spell. If you expend the staff 's last charge, roll {@dice 1d20}. On a 1, the staff loses its properties and becomes a nonmagical {@item Quarterstaff|XPHB}.",
        "The spell's saving throw DC is 13, and its attack bonus is {@hit 5}."
      ],
      spellScrollLevel: 1
    },
    {
      name: "Eversmoking Bottle",
      source: "DMG",
      page: 168,
      srd: true,
      reprintedAs: [
        "Eversmoking Bottle|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.",
        "The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Eversmoking Bottle",
      source: "XDMG",
      page: 259,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "As a {@action Magic|XPHB} action, you can open or close this bottle.",
        "Opening the bottle causes thick smoke to billow out, forming a cloud that fills a 60-foot {@variantrule Emanation [Area of Effect]|XPHB|Emanation} originating from the bottle. The area within the smoke is {@variantrule Heavily Obscured|XPHB}.",
        "Each minute the bottle remains open, the size of the {@variantrule Emanation [Area of Effect]|XPHB|Emanation} increases by 10 feet until it reaches its maximum size of 120 feet.",
        "Closing the bottle causes the cloud to become fixed in place until it disperses after 10 minutes. A strong wind (such as that created by the {@spell Gust of Wind|XPHB} spell) disperses the cloud after 1 minute."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Eyes of Charming",
      source: "DMG",
      page: 168,
      srd: true,
      reprintedAs: [
        "Eyes of Charming|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the {@spell charm person} spell (save {@dc 13}) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "charm person"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Eyes of Charming",
      source: "XDMG",
      page: 261,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 or more charges to cast {@spell Charm Person|XPHB} (save {@dc 13}). For 1 charge, you cast the level 1 version of the spell. You increase the spell's level by one for each additional charge you expend. The lenses regain all expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "charm person|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Eyes of Minute Seeing",
      source: "DMG",
      page: 168,
      srd: true,
      reprintedAs: [
        "Eyes of Minute Seeing|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence ({@skill Investigation}) checks that rely on sight while searching an area or studying an object within that range."
      ],
      lootTables: [
        "Magic Item Table C"
      ]
    },
    {
      name: "Eyes of Minute Seeing",
      source: "XDMG",
      page: 261,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These crystal lenses fit over the eyes. While wearing them, your vision improves significantly out to a range of 1 foot, granting you {@sense Darkvision|XPHB} within that range and {@variantrule Advantage|XPHB} on Intelligence ({@skill Investigation|XPHB}) checks made to examine something within that range."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Eyes of the Eagle",
      source: "DMG",
      page: 168,
      srd: true,
      reprintedAs: [
        "Eyes of the Eagle|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom ({@skill Perception}) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Eyes of the Eagle",
      source: "XDMG",
      page: 261,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These crystal lenses fit over the eyes. While wearing them, you have {@variantrule Advantage|XPHB} on Wisdom ({@skill Perception|XPHB}) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Fabulist Gem",
      source: "BMT",
      page: 36,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This glittering red gem is commonly found embedded in a ring or brooch.",
        "While wearing the gem, you gain the following benefits.",
        {
          type: "entries",
          name: "Counterfeit Coins",
          entries: [
            "You can use your action to magically create a pile of coins, worth no more than 100 gp total, in an unoccupied space within 10 feet of yourself. The pile must appear on a surface that can support it. After 1 hour, the coins vanish, regardless of where they are. Once this action is used, it can't be used again until the next dawn."
          ]
        },
        {
          type: "entries",
          name: "Illusory Fashion",
          entries: [
            "As a bonus action, you can magically change the appearance of your clothing and armor. You can change the style, color, and apparent quality of what you're wearing, or you can make it appear as if you were wearing different garments entirely. In either case, the changes wrought by this magic fail to pass physical inspection."
          ]
        }
      ]
    },
    {
      name: "Feywild Shard",
      source: "TCE",
      page: 127,
      rarity: "uncommon",
      reqAttune: "by a sorcerer",
      reqAttuneTags: [
        {
          class: "sorcerer"
        }
      ],
      wondrous: true,
      weight: 1,
      focus: [
        "Sorcerer"
      ],
      entries: [
        "This warm crystal glints with the sunset colors of the Feywild sky and evokes whispers of emotional memory. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
        "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can roll on the {@table Wild Magic Surge|PHB} table in the {@book Player's Handbook|PHB}. If the result is a spell, it is too wild to be affected by your Metamagic, and if it normally requires {@status concentration}, it doesn't require {@status concentration} in this case; the spell lasts for its full duration.",
        "If you don't have the Wild Magic Sorcerous Origin, once this property is used to roll on the {@table Wild Magic Surge|PHB} table, it can't be used again until the next dawn."
      ],
      hasFluffImages: true
    },
    {
      name: "Figurine of Wondrous Power, Silver Raven",
      source: "DMG",
      page: 170,
      srd: true,
      reprintedAs: [
        "Figurine of Wondrous Power, Silver Raven|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
        "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
        "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
        {
          type: "entries",
          name: "{@creature raven||Silver Raven}",
          entries: [
            "This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the {@spell animal messenger} spell on it at will."
          ]
        }
      ],
      attachedSpells: [
        "animal messenger"
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Figurine of Wondrous Power, Silver Raven",
      source: "XDMG",
      page: 261,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@item Figurine of Wondrous Power|XDMG} is a statuette small enough to fit in a pocket. If you take a {@action Magic|XPHB} action to throw the figurine to a point on the ground within 60 feet of yourself, the figurine becomes a living creature specified in the figurine's description below. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
        "The creature is {@variantrule Friendly [Attitude]|XPHB|Friendly} to you and your allies. It understands your languages, obeys your commands, and takes its turn immediately after you on your {@variantrule Initiative|XPHB} count. If you issue no commands, the creature defends itself but takes no other actions.",
        "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if its creature form drops to 0 {@variantrule Hit Points|XPHB} or if you take a {@action Magic|XPHB} action while touching the creature to make it revert to figurine form. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified below.",
        {
          type: "entries",
          name: "Silver Raven (Uncommon)",
          entries: [
            "This silver statuette of a raven can become a {@creature Raven|XMM} for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine grants you the ability to cast {@spell Animal Messenger|XPHB} on it."
          ]
        }
      ],
      attachedSpells: [
        "animal messenger|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ]
    },
    {
      name: "Finder's Goggles",
      source: "ERLW",
      page: 277,
      rarity: "uncommon",
      reqAttune: "by a creature with the Mark of Finding",
      reqAttuneTags: [
        {
          race: "half-orc (variant; mark of finding)|erlw"
        },
        {
          race: "human (variant; mark of finding)|erlw"
        }
      ],
      wondrous: true,
      entries: [
        "The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:",
        {
          type: "list",
          items: [
            "When you make a Wisdom ({@skill Insight}) check, you can roll a {@dice d4} and add the number rolled to the check.",
            "As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom ({@skill Insight}) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast {@spell locate creature} to find that creature. This property can't be used again until the next dawn."
          ]
        }
      ],
      attachedSpells: [
        "locate creature"
      ]
    },
    {
      name: "Flame Lance",
      source: "DoDk",
      page: 231,
      baseItem: "lance|PHB",
      type: "M",
      rarity: "uncommon",
      weight: 6,
      weaponCategory: "martial",
      property: [
        "R",
        "S"
      ],
      dmg1: "1d12",
      dmgType: "P",
      bonusWeapon: "+1",
      recharge: "special",
      charges: 5,
      entries: [
        "This weapon is a long metal lance with a small flame that burns at its end. It has a hose coming from the hilt that connects to a metal tank that you wear on your back.",
        "You gain a +1 bonus to attack and damage rolls made with this weapon.",
        "The tank has 5 charges. You can use an action and expend one or more charges from the tank to cast {@spell burning hands} (Save {@dc 15}). For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
        "Once per day, you can pour a vial of alchemist's fire into the tank. When you do, it regains all expended charges. It otherwise does not regain charges on its own.",
        "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
      ],
      attachedSpells: [
        "burning hands"
      ]
    },
    {
      name: "Gauntlets of Ogre Power",
      source: "DMG",
      page: 171,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Gauntlets of Ogre Power|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      ability: {
        static: {
          str: 19
        }
      },
      entries: [
        "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Gauntlets of Ogre Power",
      source: "XDMG",
      page: 264,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      ability: {
        static: {
          str: 19
        }
      },
      entries: [
        "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is 19 or higher without them."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Gem of Brightness",
      source: "DMG",
      page: 171,
      srd: true,
      reprintedAs: [
        "Gem of Brightness|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      charges: 50,
      entries: [
        "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:",
        {
          type: "list",
          items: [
            "The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.",
            "The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a {@dc 15} Constitution saving throw or become {@condition blinded} for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            "The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word."
          ]
        },
        "When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        }
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Gem of Brightness",
      source: "XDMG",
      page: 264,
      rarity: "uncommon",
      wondrous: true,
      charges: 50,
      entries: [
        "This prism has 50 charges. While you are holding it, you can take a {@action Magic|XPHB} action and use one of three command words to cause one of the following effects:",
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              type: "item",
              name: "First Command Word",
              entries: [
                "The gem sheds {@variantrule Bright Light|XPHB} in a 30-foot radius and {@variantrule Dim Light|XPHB} for an additional 30 feet. This effect doesn't expend a charge. It lasts until you take a {@variantrule Bonus Action|XPHB} to repeat the command word or until you use another function of the gem."
              ]
            },
            {
              type: "item",
              name: "Second Command Word",
              entries: [
                "You expend 1 charge and cause the gem to fire a brilliant beam of light at one creature you can see within 60 feet of yourself. The creature must succeed on a {@dc 15} Constitution saving throw or have the {@condition Blinded|XPHB} condition for 1 minute. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success."
              ]
            },
            {
              type: "item",
              name: "Third Command Word",
              entries: [
                "You expend 5 charges and cause the gem to flare with intense light in a 30-foot {@variantrule Cone [Area of Effect]|XPHB|Cone}. Each creature in the {@variantrule Cone [Area of Effect]|XPHB|Cone} makes a saving throw as if struck by the beam created with the second command word."
              ]
            }
          ]
        },
        "When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 GP."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        }
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Gloves of Missile Snaring",
      source: "DMG",
      page: 172,
      srd: true,
      reprintedAs: [
        "Gloves of Missile Snaring|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by {@dice 1d10} + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Gloves of Missile Snaring",
      source: "XDMG",
      page: 265,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "If you're hit by an attack roll made with a Ranged or Thrown weapon while wearing these gloves, you can take a {@variantrule Reaction|XPHB} to reduce the damage by {@dice 1d10} plus your Dexterity modifier if you have a free hand. If you reduce the damage to 0, you can catch the ammunition or weapon if it is small enough for you to hold in that hand."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Gloves of Swimming and Climbing",
      source: "DMG",
      page: 172,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Gloves of Swimming and Climbing|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength ({@skill Athletics}) checks made to climb or swim."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Gloves of Swimming and Climbing",
      source: "XDMG",
      page: 265,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength ({@skill Athletics|XPHB}) checks made to climb or swim."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Gloves of Thievery",
      source: "DMG",
      page: 172,
      reprintedAs: [
        "Gloves of Thievery|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These gloves are {@condition invisible} while worn. While wearing them, you gain a +5 bonus to Dexterity ({@skill Sleight of Hand}) checks and Dexterity checks made to pick locks."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Gloves of Thievery",
      source: "XDMG",
      page: 265,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These gloves are {@condition invisible|XPHB} while worn. While wearing them, you gain a +5 bonus to Dexterity ({@skill Sleight of Hand|XPHB}) checks and Dexterity checks made to pick locks."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Goggles of Night",
      source: "DMG",
      page: 172,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Goggles of Night|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing these dark lenses, you have {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision}, wearing the goggles increases its range by 60 feet."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Goggles of Night",
      source: "XDMG",
      page: 265,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing these dark lenses, you have {@sense Darkvision|XPHB} out to 60 feet. If you already have {@sense Darkvision|XPHB}, wearing the goggles increases its range by 60 feet."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Goggles of Object Reading",
      source: "EGW",
      page: 267,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These leather-framed goggles feature purple crystal lenses. While wearing the goggles, you have advantage on Intelligence ({@skill Arcana}) checks made to reveal information about a creature or object you can see.",
        "In addition, you can cast the {@spell identify} spell using the googles. Once you do so, you can't do so again until the next dawn."
      ],
      attachedSpells: [
        "identify"
      ]
    },
    {
      name: "Golgari Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Golgari, allows you to cast {@spell entangle}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Golgari's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "entangle"
      ],
      hasFluffImages: true
    },
    {
      name: "Gruul Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Gruul, allows you to cast {@spell compelled duel}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Gruul's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "compelled duel"
      ],
      hasFluffImages: true
    },
    {
      name: "Guardian Emblem",
      source: "TCE",
      page: 128,
      rarity: "uncommon",
      reqAttune: "by a cleric or paladin",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "paladin"
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This emblem is the symbol of a deity or a spiritual tradition. As an action, you can attach the emblem to a suit of armor or a shield or remove it.",
        "The emblem has 3 charges. When you or a creature you can see within 30 feet of you suffers a critical hit while you're wearing the armor or wielding the shield that bears the emblem, you can use your reaction to expend 1 charge to turn the critical hit into a normal hit instead.",
        "The emblem regains all expended charges daily at dawn."
      ]
    },
    {
      name: "Hag Eye",
      source: "XDMG",
      page: 265,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "A Hag Eye has 3 charges. While wearing or holding this item, you can expend 1 charge to cast {@spell Darkvision|XPHB} (targeting yourself only) or {@spell See Invisibility|XPHB}. The Hag Eye regains all expended charges daily at dawn.",
        {
          type: "entries",
          name: "Coven Sensor",
          entries: [
            "The Hag Eye is usually entrusted to a hag's minion for safekeeping and transport. As a {@action Magic|XPHB} action, a hag who belongs to the coven that created the Hag Eye can see what the Hag Eye sees if the hag and the Hag Eye are on the same plane of existence. This effect lasts as long as the hag maintains {@status Concentration|XPHB}. Multiple hags in the coven can see through the Hag Eye simultaneously."
          ]
        },
        {
          type: "entries",
          name: "Creating a Hag Eye",
          entries: [
            "Only a hag coven can craft this item, which is made from a real eye coated in varnish and often fitted to a pendant or another wearable item. A hag coven can have only one Hag Eye at a time, and creating a new one requires all three members of the coven to perform a special rite. This rite takes 1 hour, and the hags can't perform it if one or more of them has the {@condition Incapacitated|XPHB} condition. If the hags take any other actions during this rite, the rite fails and ends."
          ]
        }
      ],
      attachedSpells: [
        "darkvision|xphb",
        "see invisibility|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Harkon's Bite",
      source: "VRGR",
      page: 137,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      bonusSavingThrow: "+1",
      entries: [
        "A dire wolf tooth dangles from this simple cord necklace. While you wear it, the necklace grants you a +1 bonus to ability checks and saving throws.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "Attuning to Harkon's Bite curses you until either Harkon Lukas removes the necklace from you or you are targeted by a {@spell remove curse} spell or similar magic. As long as you remain cursed, you cannot remove the necklace.",
            "Upon donning or removing the necklace, whether you are attuned to it or not, you are afflicted with {@variantrule Player Characters as Lycanthropes|mm|werewolf lycanthropy} as detailed in the Monster Manual. The curse lasts until the dawn after the next full moon. If you are still wearing the necklace at this time, you are afflicted with the lycanthropy again."
          ]
        }
      ]
    },
    {
      name: "Hat of Disguise",
      source: "DMG",
      page: 173,
      srd: true,
      reprintedAs: [
        "Hat of Disguise|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this hat, you can use an action to cast the {@spell disguise self} spell from it at will. The spell ends if the hat is removed."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "disguise self"
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Hat of Disguise",
      source: "XDMG",
      page: 266,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this hat, you can cast the {@spell Disguise Self|XPHB} spell. The spell ends if the hat is removed."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "disguise self|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Headband of Intellect",
      source: "DMG",
      page: 173,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Headband of Intellect|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      ability: {
        static: {
          int: 19
        }
      },
      entries: [
        "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Headband of Intellect",
      source: "XDMG",
      page: 268,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      ability: {
        static: {
          int: 19
        }
      },
      entries: [
        "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is 19 or higher without it."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Helm of Comprehending Languages",
      source: "DMG",
      page: 173,
      srd: true,
      reprintedAs: [
        "Helm of Comprehending Languages|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this helm, you can use an action to cast the {@spell comprehend languages} spell from it at will."
      ],
      attachedSpells: [
        "comprehend languages"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Helm of Comprehending Languages",
      source: "XDMG",
      page: 268,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this helm, you can cast {@spell Comprehend Languages|XPHB} from it."
      ],
      attachedSpells: [
        "comprehend languages|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Helm of Telepathy",
      source: "DMG",
      page: 174,
      srd: true,
      reprintedAs: [
        "Helm of Telepathy|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this helm, you can use an action to cast the {@spell detect thoughts} spell (save {@dc 13}) from it. As long as you maintain {@status concentration} on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply—using a bonus action to do so—while your focus on it continues.",
        "While focusing on a creature with {@spell detect thoughts}, you can use an action to cast the {@spell suggestion} spell (save {@dc 13}) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect thoughts",
        "suggestion"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Helm of Telepathy",
      source: "XDMG",
      page: 268,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this helm, you have telepathy with a range of 30 feet, and you can cast {@spell Detect Thoughts|XPHB} or {@spell Suggestion|XPHB} (save {@dc 13}) from the helm. Once either spell is cast from the helm, that spell can't be cast from it again until the next dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect thoughts|xphb",
        "suggestion|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Helm of Underwater Action",
      source: "GoS",
      page: 229,
      otherSources: [
        {
          source: "IMR",
          page: 94
        }
      ],
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          swim: 30
        }
      },
      entries: [
        "While wearing this brass helmet, you can breathe underwater, you gain {@sense darkvision} with a range of 60 feet, and you gain a swimming speed of 30 feet."
      ]
    },
    {
      name: "Hew",
      source: "PaBTSO",
      page: 54,
      baseItem: "battleaxe|PHB",
      type: "M",
      rarity: "uncommon",
      weight: 4,
      weaponCategory: "martial",
      property: [
        "V"
      ],
      dmg1: "1d8",
      dmgType: "S",
      dmg2: "1d10",
      bonusWeapon: "+1",
      entries: [
        "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
        "Hew is a +1 battleaxe that deals maximum damage when the wielder attacks a Plant creature or an object made of wood. The axe's creator used it for protection in the forest while he cut firewood."
      ]
    },
    {
      name: "House of Cards",
      source: "BMT",
      page: 61,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This deck of cards is decorated with geometric shapes that have a protective motif. While you're holding the deck, you can use an action to shuffle it and cause the cards to deal themselves out and transform into a shelter made of cards. The shelter can be shaped however you desire, but it must fit in a 40-foot cube centered on a point within 30 feet of you. The shelter has one door and up to four windows, and only you can open or close them. It has a floor and a roof, and it maintains a comfortable temperature inside.",
        "The shelter has AC 15, 50 hit points, and immunity to poison and psychic damage. The shelter lasts for 24 hours, until you dismiss it as an action, or until it is reduced to 0 hit points. When the shelter's duration ends, it transforms back into a deck of cards and appears in your hand. Once the deck has transformed into a shelter, it can't be used again until the next dawn."
      ]
    },
    {
      name: "Immovable Rod",
      source: "DMG",
      page: 175,
      srd: true,
      reprintedAs: [
        "Immovable Rod|XDMG"
      ],
      type: "RD|DMG",
      tier: "minor",
      rarity: "uncommon",
      weight: 2,
      entries: [
        "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a {@dc 30} Strength check, moving the fixed rod up to 10 feet on a success."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Immovable Rod",
      source: "XDMG",
      page: 270,
      type: "RD|XDMG",
      rarity: "uncommon",
      weight: 2,
      entries: [
        "This iron rod has a button on one end. You can take a {@action Utilize|XPHB} action to press the button, which causes the rod to become magically fixed in place. Until you or another creature takes a {@action Utilize|XPHB} action to push the button again, the rod doesn't move, even if it defies gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can take a {@action Utilize|XPHB} action to make a {@dc 30} Strength ({@skill Athletics|XPHB}) check, moving the fixed rod up to 10 feet on a successful check."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Infernal Puzzle Box",
      source: "BGDIA",
      page: 224,
      rarity: "uncommon",
      wondrous: true,
      weight: 3,
      entries: [
        "An infernal puzzle box is a cube-shaped container 5 to 6 inches on a side, composed of airtight, interlocking parts made from materials found in the Nine Hells. Most of these boxes are made of infernal iron, though some are carved from bone or horn. Infernal puzzle boxes are used to safeguard diabolical contracts signed between devils and mortals, even after the terms of these contracts are fulfilled. An empty infernal puzzle box weighs 3 pounds regardless of the materials used to fashion it.",
        "When an object small enough to fit inside an infernal puzzle box is placed in it, the container magically seals shut around the object, and no magic can force the box open. The sealed box becomes immune to all damage as well. Every infernal puzzle box is constructed with a unique means of opening it. The trick to solving the puzzle is always mundane, never magical. Once a creature figures out the trick or sequence of steps needed to open a particular infernal puzzle box, that creature can open the box as an action, allowing access to the box's contents.",
        "A creature that spends 1 hour holding an infernal puzzle box while trying to open it can make a {@dc 30} Intelligence ({@skill Investigation}) check. If the check succeeds, the creature figures out the trick or sequence of steps needed to open the box. If the check fails by 5 or more, the creature must make a {@dc 18} Wisdom saving throw, taking 42 ({@damage 12d6}) psychic damage on a failed save, or half as much damage on a successful one."
      ]
    },
    {
      name: "Insignia of Claws",
      source: "HotDQ",
      page: 94,
      otherSources: [
        {
          source: "ToD",
          page: 178
        }
      ],
      rarity: "uncommon",
      wondrous: true,
      bonusWeapon: "+1",
      entries: [
        "The jewels in the insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.",
        "While wearing the insignia you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical."
      ]
    },
    {
      name: "Instrument of the Bards, Doss Lute",
      source: "DMG",
      page: 176,
      reprintedAs: [
        "Instrument of the Bards, Doss Lute|XDMG"
      ],
      type: "INS",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      weight: 2,
      entries: [
        "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} psychic damage.",
        "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
        "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
        "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
        "In addition, the Doss lute can be used to cast {@spell animal friendship}, {@spell protection from energy} (fire only), and {@spell protection from poison}."
      ],
      attachedSpells: [
        "animal friendship",
        "fly",
        "invisibility",
        "levitate",
        "protection from evil and good",
        "protection from energy",
        "protection from poison"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of the Bards, Doss Lute",
      source: "XDMG",
      page: 272,
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      entries: [
        "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} Psychic damage.",
        "You can play the Doss {@item Lute|XPHB} to cast one of the following spells: {@spell Fly|XPHB}, {@spell Invisibility|XPHB}, {@spell Levitate|XPHB}, {@spell Protection from Evil and Good|XPHB}, {@spell Animal Friendship|XPHB}, {@spell Protection from Energy|XPHB} (Fire damage only), and {@spell Protection from Poison|XPHB}. Once the Doss {@item Lute|XPHB} has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC."
      ],
      attachedSpells: [
        "fly|xphb",
        "invisibility|xphb",
        "levitate|xphb",
        "protection from evil and good|xphb",
        "animal friendship|xphb",
        "protection from energy|xphb",
        "protection from poison|xphb"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of the Bards, Fochlucan Bandore",
      source: "DMG",
      page: 176,
      reprintedAs: [
        "Instrument of the Bards, Fochlucan Bandore|XDMG"
      ],
      type: "INS",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      weight: 2,
      entries: [
        "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} psychic damage.",
        "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
        "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
        "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
        "In addition, the Fochlucan bandore can be used to cast {@spell entangle}, {@spell faerie fire}, {@spell shillelagh}, and {@spell speak with animals}."
      ],
      attachedSpells: [
        "entangle",
        "fly",
        "invisibility",
        "levitate",
        "protection from evil and good",
        "faerie fire",
        "shillelagh",
        "speak with animals"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of the Bards, Fochlucan Bandore",
      source: "XDMG",
      page: 272,
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      entries: [
        "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} Psychic damage.",
        "You can play the Fochlucan Bandore to cast one of the following spells: {@spell Fly|XPHB}, {@spell Invisibility|XPHB}, {@spell Levitate|XPHB}, {@spell Protection from Evil and Good|XPHB}, {@spell Entangle|XPHB}, {@spell Faerie Fire|XPHB}, {@spell Shillelagh|XPHB}, and {@spell Speak with Animals|XPHB}. Once the Fochlucan Bandore has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC."
      ],
      attachedSpells: [
        "fly|xphb",
        "invisibility|xphb",
        "levitate|xphb",
        "protection from evil and good|xphb",
        "entangle|xphb",
        "faerie fire|xphb",
        "shillelagh|xphb",
        "speak with animals|xphb"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of the Bards, Mac-Fuirmidh Cittern",
      source: "DMG",
      page: 176,
      reprintedAs: [
        "Instrument of the Bards, Mac-Fuirmidh Cittern|XDMG"
      ],
      type: "INS",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      weight: 2,
      entries: [
        "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} psychic damage.",
        "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
        "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
        "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
        "In addition, the Mac-Fuirmidh cittern can be used to cast {@spell barkskin}, {@spell cure wounds}, and {@spell fog cloud}."
      ],
      attachedSpells: [
        "barkskin",
        "fly",
        "invisibility",
        "levitate",
        "protection from evil and good",
        "cure wounds",
        "fog cloud"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Instrument of the Bards, Mac-Fuirmidh Cittern",
      source: "XDMG",
      page: 272,
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      entries: [
        "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a {@dc 15} Wisdom saving throw or take {@damage 2d4} Psychic damage.",
        "You can play the Mac-Fuirmidh Cittern to cast one of the following spells: {@spell Fly|XPHB}, {@spell Invisibility|XPHB}, {@spell Levitate|XPHB}, {@spell Protection from Evil and Good|XPHB}, {@spell Barkskin|XPHB}, {@spell Cure Wounds|XPHB}, and {@spell Fog Cloud|XPHB}. Once the Mac-Fuirmidh Cittern has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC."
      ],
      attachedSpells: [
        "fly|xphb",
        "invisibility|xphb",
        "levitate|xphb",
        "protection from evil and good|xphb",
        "barkskin|xphb",
        "cure wounds|xphb",
        "fog cloud|xphb"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Izzet Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Izzet, allows you to cast {@spell chaos bolt|XGE}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Izzet's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "chaos bolt|XGE"
      ],
      hasFluffImages: true
    },
    {
      name: "Javelin of Lightning",
      source: "DMG",
      page: 178,
      srd: true,
      reprintedAs: [
        "Javelin of Lightning|XDMG"
      ],
      baseItem: "javelin|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "T"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      entries: [
        "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a {@dc 13} Dexterity saving throw, taking {@damage 4d6} lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus {@damage 4d6} lightning damage.",
        "The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Javelin of Lightning",
      source: "XDMG",
      page: 275,
      baseItem: "javelin|xphb",
      type: "M|XPHB",
      rarity: "uncommon",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "T|XPHB"
      ],
      mastery: [
        "Slow|XPHB"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      entries: [
        "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.",
        {
          type: "entries",
          name: "Lightning Bolt",
          entries: [
            "When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide {@variantrule Line [Area of Effect]|XPHB|Line} between you and the target. The target and each other creature in the {@variantrule Line [Area of Effect]|XPHB|Line} (excluding you) makes a {@dc 13} Dexterity saving throw, taking {@damage 4d6} Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn."
          ]
        }
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Keoghtom's Ointment",
      source: "DMG",
      page: 179,
      srd: "Restorative Ointment",
      basicRules: true,
      reprintedAs: [
        "Keoghtom's Ointment|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This glass jar, 3 inches in diameter, contains {@dice 1d4 + 1} doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh ½ pound.",
        "As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains {@dice 2d8 + 2} hit points, ceases to be {@condition poisoned}, and is cured of any disease."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Keoghtom's Ointment",
      source: "XDMG",
      page: 275,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This glass jar, 3 inches in diameter, contains {@dice 1d4 + 1} doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.",
        "As a {@action Utilize|XPHB} action, you can swallow one dose of the ointment or apply it to a creature within 5 feet of yourself. The creature that receives it regains {@dice 2d8 + 2} {@variantrule Hit Points|XPHB} and ceases to have the {@condition Poisoned|XPHB} condition."
      ],
      lootTables: [
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Lantern of Revealing",
      source: "DMG",
      page: 179,
      srd: true,
      reprintedAs: [
        "Lantern of Revealing|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      entries: [
        "While lit, this {@item hooded lantern|phb} burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. {@condition Invisible} creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        },
        {
          dim: 5
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Lantern of Revealing",
      source: "XDMG",
      page: 275,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding {@variantrule Bright Light|XPHB} in a 30-foot radius and {@variantrule Dim Light|XPHB} for an additional 30 feet. {@condition Invisible|XPHB} creatures and objects are visible as long as they are in the lantern's {@variantrule Bright Light|XPHB}. You can take a {@action Utilize|XPHB} action to lower the hood, reducing the lantern's light to {@variantrule Dim Light|XPHB} in a 5-foot radius."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        },
        {
          dim: 5
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Lightbringer",
      source: "LMoP",
      page: 48,
      reprintedAs: [
        "Lightbringer|PaBTSO"
      ],
      baseItem: "mace|phb",
      type: "M",
      rarity: "uncommon",
      weight: 4,
      weaponCategory: "simple",
      dmg1: "1d6",
      dmgType: "B",
      bonusWeapon: "+1",
      entries: [
        "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and made of solid brass. Named Lightbringer, this weapon glows as bright as a {@item torch|phb} when its wielder commands. While glowing, the mace deals an extra {@damage 1d6} radiant damage to undead creatures."
      ]
    },
    {
      name: "Lightbringer",
      source: "PaBTSO",
      page: 72,
      baseItem: "mace|PHB",
      type: "M",
      rarity: "uncommon",
      weight: 4,
      weaponCategory: "simple",
      dmg1: "1d6",
      dmgType: "B",
      bonusWeapon: "+1",
      entries: [
        "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
        "This weapon, known as Lightbringer, was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and is made of solid brass. The mace glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra {@damage 1d6} radiant damage to Undead creatures."
      ]
    },
    {
      name: "Living Gloves",
      source: "ERLW",
      page: 278,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      grantsProficiency: true,
      entries: [
        "These symbiotic gloves—made of thin chitin and sinew—pulse with a life of their own. To attune to them, you must wear them for the entire attunement period, during which the gloves bond with your skin.",
        "While attuned to these gloves, you gain one of the following proficiencies (your choice when you attune to the gloves):",
        {
          type: "list",
          items: [
            "{@skill Sleight of Hand}",
            "{@item Thieves' tools|PHB}",
            "One kind of {@item artisan's tools|PHB} of your choice",
            "One kind of {@item musical instrument|PHB} of your choice"
          ]
        },
        "When you make an ability check using the chosen proficiency, you add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        {
          type: "entries",
          name: "Symbiotic Nature",
          entries: [
            "The gloves can't be removed from you while you're attuned to them, and you can't voluntarily end your attunement to them. If you're targeted by a spell that ends a curse, your attunement to the gloves ends, and they can be removed."
          ]
        }
      ]
    },
    {
      name: "Lorehold Primer",
      source: "SCC",
      page: 39,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The Lorehold Primer is a magic textbook created at Strixhaven's Lorehold College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill History}) or Intelligence ({@skill Religion}) check while holding the primer, you can expend 1 charge to give yourself {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
        "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the cleric or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
      ]
    },
    {
      name: "Mask of the Beast",
      source: "ToA",
      page: 207,
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask you can expend 1 charge and use the mask to cast the {@spell animal friendship} spell as an action. The mask regains all expended charges at dawn."
      ],
      attachedSpells: [
        "animal friendship"
      ],
      hasFluffImages: true
    },
    {
      name: "Medallion of Thoughts",
      source: "DMG",
      page: 181,
      srd: true,
      reprintedAs: [
        "Medallion of Thoughts|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the {@spell detect thoughts} spell (save {@dc 13}) from it. The medallion regains {@dice 1d3} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect thoughts"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Medallion of Thoughts",
      source: "XDMG",
      page: 278,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 5,
      entries: [
        "The medallion has 5 charges. While wearing it, you can expend 1 charge to cast {@spell Detect Thoughts|XPHB} (save {@dc 13}) from it. The medallion regains {@dice 1d4} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect thoughts|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Mind Crystal (Careful)",
      source: "PaBTSO",
      page: 218,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gemstone contains a crystallized bit of spellcasting magic.",
        "When you cast a spell that has a casting time of 1 action while holding the mind crystal, you can modify the spell in the way described below. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use the mind crystal, it becomes a nonmagical gem worth 50 gp.",
        {
          type: "entries",
          name: "Modify Spell",
          entries: [
            "Choose up to three creatures affected by the spell. The chosen creatures automatically succeed on their saving throws against the spell."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Mind Crystal (Distant)",
      source: "PaBTSO",
      page: 218,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gemstone contains a crystallized bit of spellcasting magic.",
        "When you cast a spell that has a casting time of 1 action while holding the mind crystal, you can modify the spell in the way described below. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use the mind crystal, it becomes a nonmagical gem worth 50 gp.",
        {
          type: "entries",
          name: "Modify Spell",
          entries: [
            "If the spell has a range of 5 feet or more and doesn't have a range of self, the spell's range increases by 100 feet. If the spell has a range of touch, its range becomes 30 feet."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Mind Crystal (Empowered)",
      source: "PaBTSO",
      page: 218,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gemstone contains a crystallized bit of spellcasting magic.",
        "When you cast a spell that has a casting time of 1 action while holding the mind crystal, you can modify the spell in the way described below. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use the mind crystal, it becomes a nonmagical gem worth 50 gp.",
        {
          type: "entries",
          name: "Modify Spell",
          entries: [
            "When you roll damage for the spell, you can reroll up to three damage dice. You must use the new rolls."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Mind Crystal (Extended)",
      source: "PaBTSO",
      page: 218,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This gemstone contains a crystallized bit of spellcasting magic.",
        "When you cast a spell that has a casting time of 1 action while holding the mind crystal, you can modify the spell in the way described below. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use the mind crystal, it becomes a nonmagical gem worth 50 gp.",
        {
          type: "entries",
          name: "Modify Spell",
          entries: [
            "If the spell has a duration of 1 minute or longer, double the spell's duration, to a maximum duration of 24 hours."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Mizzium Apparatus",
      source: "GGR",
      page: 179,
      rarity: "uncommon",
      reqAttune: "by a sorcerer, warlock, or wizard",
      reqAttuneTags: [
        {
          class: "sorcerer"
        },
        {
          class: "warlock"
        },
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      weight: 8,
      focus: [
        "Sorcerer",
        "Warlock",
        "Wizard"
      ],
      entries: [
        "Innovation is a dangerous pursuit, at least the way the mages of the Izzet League engage in it. As protection against the risk of an experiment going awry, they have developed a device to help channel and control their magic. This apparatus is a collection of leather straps, flexible tubing, glass cylinders, and plates, bracers, and fittings made from a magic-infused metal alloy called mizzium, all assembled into a harness. The item weighs 8 pounds.",
        "While you are wearing the mizzium apparatus, you can use it as an arcane focus. In addition, you can attempt to cast a spell that you do not know or have prepared. The spell you choose must be on your class's spell list and of a level for which you have a spell slot, and you must provide the spell's components.",
        "You expend a spell slot to cast the spell as normal, but before resolving it you must make an Intelligence ({@skill Arcana}) check. The DC is 10 + twice the level of the spell slot you expend to cast the spell.",
        "On a successful check, you cast the spell as normal, using your spell save DC and spellcasting ability modifier. On a failed check, you cast a different spell from the one you intended. Randomly determine the spell you cast by rolling on the table for the level of the spell slot you expended. If the slot is 6th level or higher, roll on the table for 5th-level spells.",
        "If you try to cast a cantrip you don't know, the DC for the Intelligence ({@skill Arcana}) check is 10, and on a failed check, there is no effect.",
        {
          type: "table",
          caption: "1st-Level Spells",
          colLabels: [
            "d6",
            "spell"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "{@spell burning hands}"
            ],
            [
              "2",
              "{@spell chaos bolt|XGE}"
            ],
            [
              "3",
              "{@spell color spray}"
            ],
            [
              "4",
              "{@spell faerie fire}"
            ],
            [
              "5",
              "{@spell fog cloud}"
            ],
            [
              "6",
              "{@spell thunderwave}"
            ]
          ]
        },
        {
          type: "table",
          caption: "2nd-Level Spells",
          colLabels: [
            "d6",
            "spell"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "{@spell blur}"
            ],
            [
              "2",
              "{@spell gust of wind}"
            ],
            [
              "3",
              "{@spell heat metal}"
            ],
            [
              "4",
              "{@spell Melf's acid arrow}"
            ],
            [
              "5",
              "{@spell scorching ray}"
            ],
            [
              "6",
              "{@spell shatter}"
            ]
          ]
        },
        {
          type: "table",
          caption: "3rd-Level Spells",
          colLabels: [
            "d6",
            "spell"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "{@spell fear}"
            ],
            [
              "2",
              "{@spell feign death}"
            ],
            [
              "3",
              "{@spell fireball}"
            ],
            [
              "4",
              "{@spell gaseous form}"
            ],
            [
              "5",
              "{@spell sleet storm}"
            ],
            [
              "6",
              "{@spell stinking cloud}"
            ]
          ]
        },
        {
          type: "table",
          caption: "4th-Level Spells",
          colLabels: [
            "d4",
            "spell"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "{@spell confusion}"
            ],
            [
              "2",
              "{@spell conjure minor elementals}"
            ],
            [
              "3",
              "{@spell Evard's black tentacles}"
            ],
            [
              "4",
              "{@spell ice storm}"
            ]
          ]
        },
        {
          type: "table",
          caption: "5th-Level Spells",
          colLabels: [
            "d4",
            "spell"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "{@spell animate objects}"
            ],
            [
              "2",
              "{@spell cloudkill}"
            ],
            [
              "3",
              "{@spell cone of cold}"
            ],
            [
              "4",
              "{@spell flame strike}"
            ]
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Mummy Rot Antidote",
      source: "IMR",
      page: 94,
      type: "P",
      rarity: "uncommon",
      entries: [
        "White dust swirls constantly within this pale gray potion. When you drink the potion, it cures you of mummy rot."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Nature's Mantle",
      source: "TCE",
      page: 133,
      reprintedAs: [
        "Nature's Mantle|XDMG"
      ],
      rarity: "uncommon",
      reqAttune: "by a druid or ranger",
      reqAttuneTags: [
        {
          class: "druid"
        },
        {
          class: "ranger"
        }
      ],
      wondrous: true,
      weight: 2,
      focus: [
        "Druid",
        "Ranger"
      ],
      entries: [
        "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a spellcasting focus for your druid and ranger spells.",
        "While you are in an area that is lightly obscured, you can {@action Hide} as a bonus action even if you are being directly observed."
      ],
      hasFluffImages: true
    },
    {
      name: "Nature's Mantle",
      source: "XDMG",
      page: 280,
      rarity: "uncommon",
      reqAttune: "by a druid or ranger",
      reqAttuneTags: [
        {
          class: "druid"
        },
        {
          class: "ranger"
        }
      ],
      wondrous: true,
      focus: [
        "Druid",
        "Ranger"
      ],
      entries: [
        "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a {@variantrule Spellcasting Focus|XPHB} for your Druid and Ranger spells.",
        "While you are in an area that is {@variantrule Lightly Obscured|XPHB}, you can {@action Hide|XPHB} as a {@variantrule Bonus Action|XPHB} even if you are being directly observed."
      ],
      lootTables: [
        "Implements - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Necklace of Adaptation",
      source: "DMG",
      page: 182,
      srd: true,
      reprintedAs: [
        "Necklace of Adaptation|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as {@spell cloudkill} and {@spell stinking cloud} effects, inhaled poisons, and the breath weapons of some dragons)."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Necklace of Adaptation",
      source: "XDMG",
      page: 280,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this necklace, you can breathe normally in any environment, and you have {@variantrule Advantage|XPHB} on saving throws made to avoid or end the {@condition Poisoned|XPHB} condition."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Night Caller",
      source: "TftYP",
      page: 228,
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "This whistle is carved from transparent crystal, and it resembles a tiny dragon curled up like a snail. The name Night Caller is etched on the whistle in Dwarvish runes. If a character succeeds on a {@dc 20} Intelligence ({@skill Arcana} or {@skill History}) check, the character recalls lore that says the {@creature duergar} made several such whistles for various groups in an age past.",
        "If you blow the whistle in darkness or under the night sky, it allows you to cast the {@spell animate dead} spell. The target can be affected through up to 10 feet of soft earth or similar material, and if it is, it takes 1 minute to claw its way to the surface to serve you. Once the whistle has animated an undead creature, it can't do so again until 7 days have passed.",
        "Once every 24 hours, you can blow the whistle to reassert control over one or two creatures you animated with it."
      ],
      attachedSpells: [
        "animate dead"
      ]
    },
    {
      name: "Oil of Slipperiness",
      source: "DMG",
      page: 184,
      srd: true,
      reprintedAs: [
        "Oil of Slipperiness|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a {@spell freedom of movement} spell for 8 hours.",
        "Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the {@spell grease} spell in that area for 8 hours."
      ],
      attachedSpells: [
        "freedom of movement"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Oil of Slipperiness",
      source: "XDMG",
      page: 283,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "One vial of this oil can cover one Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the {@spell Freedom of Movement|XPHB} spell for 8 hours.",
        "Alternatively, the oil can be poured on the ground as a {@action Magic|XPHB} action, where it covers a 10-foot square, duplicating the effect of the {@spell Grease|XPHB} spell in that area for 8 hours.",
        "This sticky, black unguent is thick and heavy, but it flows quickly when poured."
      ],
      attachedSpells: [
        "freedom of movement|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Orc Stone",
      source: "IDRotF",
      page: 264,
      rarity: "uncommon",
      reqAttune: "by a recipient only",
      wondrous: true,
      entries: [
        "I saved the life of an orc, who gave me a stone with the symbol of the Many-Arrows tribe (a humanoid skull pierced by three arrows) carved into it. The stone is an uncommon magic item that requires attunement, and only I can attune to it.",
        "As an action, I can use the stone to summon the spirit of an orc warrior, which appears within 30 feet of me. The spirit uses the {@creature orc war chief} stat block in the Monster Manual and disappears after 10 minutes or when reduced to 0 hit points. The spirit understands any language I speak and obeys my commands.",
        "After the stone is used three times, it turns to dust. (See Appendix B of Icewind Dale: Rime of the Frostmaiden)"
      ]
    },
    {
      name: "Orzhov Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Orzhov, allows you to cast {@spell command}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Orzhov's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "command"
      ],
      hasFluffImages: true
    },
    {
      name: "Paper Bird",
      source: "WDH",
      page: 191,
      otherSources: [
        {
          source: "IMR",
          page: 94
        }
      ],
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "After you write a message of fifty words or fewer on this magic sheet of parchment and speak a creature's name, the parchment magically folds into a Tiny paper bird and flies to the recipient whose name you uttered. The recipient must be on the same plane of existence as you, otherwise the bird turns into ash as it takes flight.",
        "The bird is an object that has 1 hit point, an Armor Class of 13, a flying speed of 60 feet, a Dexterity of 16 (+3), and a score of 1 (−5) in all other abilities, and it is immune to poison and psychic damage.",
        "It travels to within 5 feet of its intended recipient by the most direct route, whereupon it turns into a nonmagical and inanimate sheet of parchment that can be unfolded only by the intended recipient. If the bird's hit points or speed is reduced to 0 or if it is otherwise immobilized, it turns into ash.",
        "Paper birds usually come in small, flat boxes containing {@dice 1d6 + 3} sheets of the parchment."
      ],
      hasFluffImages: true
    },
    {
      name: "Pearl of Power",
      source: "DMG",
      page: 184,
      srd: true,
      reprintedAs: [
        "Pearl of Power|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      entries: [
        "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Pearl of Power",
      source: "XDMG",
      page: 284,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      entries: [
        "While this pearl is on your person, you can take a {@action Magic|XPHB} action to regain one expended spell slot of level 3 or lower. Once you use the pearl, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ]
    },
    {
      name: "Periapt of Health",
      source: "DMG",
      page: 184,
      srd: true,
      reprintedAs: [
        "Periapt of Health|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 1,
      entries: [
        "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed while you wear the pendant."
      ],
      lootTables: [
        "Magic Item Table C"
      ],
      hasFluffImages: true
    },
    {
      name: "Periapt of Health",
      source: "XDMG",
      page: 284,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this pendant, you can take a {@action Magic|XPHB} action to regain {@dice 2d4 + 2} {@variantrule Hit Points|XPHB}. Once used, this property can't be used again until the next dawn.",
        "In addition, you have {@variantrule Advantage|XPHB} on saving throws to avoid or end the {@condition Poisoned|XPHB} condition while you wear this pendant."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Periapt of Wound Closure",
      source: "DMG",
      page: 184,
      srd: true,
      reprintedAs: [
        "Periapt of Wound Closure|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Periapt of Wound Closure",
      source: "XDMG",
      page: 284,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      entries: [
        "While wearing this pendant, you gain the following benefits.",
        {
          type: "entries",
          name: "Life Preservation",
          entries: [
            "Whenever you make a {@variantrule Death Saving Throw|XPHB}, you can change a roll of 9 or lower to a 10, turning a failed save into a successful one."
          ]
        },
        {
          type: "entries",
          name: "Natural Healing Boost",
          entries: [
            "Whenever you roll a {@variantrule Hit Points|XPHB|Hit Point} Die to regain {@variantrule Hit Points|XPHB}, double the number of {@variantrule Hit Points|XPHB} it restores."
          ]
        }
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Philter of Love",
      source: "DMG",
      page: 184,
      srd: true,
      reprintedAs: [
        "Philter of Love|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "The next time you see a creature within 10 minutes after drinking this philter, you become {@condition charmed} by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are {@condition charmed}. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Philter of Love",
      source: "XDMG",
      page: 285,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "The next time you see a creature within 10 minutes after drinking this philter, you are {@condition charmed|XPHB} by that creature and have the {@condition Charmed|XPHB} condition for 1 hour.",
        "This rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Pipes of Haunting",
      source: "DMG",
      page: 185,
      srd: true,
      reprintedAs: [
        "Pipes of Haunting|XDMG"
      ],
      type: "INS",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a {@dc 15} Wisdom saving throw or become {@condition frightened} of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain {@dice 1d3} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Pipes of Haunting",
      source: "XDMG",
      page: 285,
      rarity: "uncommon",
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "These pipes have 3 charges and regain {@dice 1d3} expended charges daily at dawn. You can take a {@action Magic|XPHB} action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature of your choice within 30 feet of you must succeed on a {@dc 15} Wisdom saving throw or have the {@condition Frightened|XPHB} condition for 1 minute. A creature that fails the save repeats it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its save is immune to the effect of these pipes for 24 hours."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Pipes of the Sewers",
      source: "DMG",
      page: 185,
      srd: true,
      reprintedAs: [
        "Pipes of the Sewers|XDMG"
      ],
      type: "INS",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 2,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.",
        "The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one {@creature swarm of rats} with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain {@dice 1d3} expended charges daily at dawn.",
        "Whenever a {@creature swarm of rats} that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Pipes of the Sewers",
      source: "XDMG",
      page: 285,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "While these pipes are on your person, ordinary {@creature rat|XMM|rats} and {@creature giant rat|XMM|giant rats} are {@variantrule Indifferent [Attitude]|XPHB|Indifferent} toward you and won't attack you unless you threaten or harm them.",
        "The pipes have 3 charges and regain {@dice 1d3} expended charges daily at dawn. If you play the pipes as a {@action Magic|XPHB} action, you can take a {@variantrule Bonus Action|XPHB} to expend 1 to 3 charges, calling forth one {@creature Swarm of Rats|XMM} with each expended charge if enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise.",
        "Whenever a Swarm of Rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, the swarm makes a {@dc 15} Wisdom saving throw. On a successful save, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. On a failed save, the swarm is swayed by the pipes' music and becomes {@variantrule Friendly [Attitude]|XPHB|Friendly} to you and your allies for as long as you continue to play the pipes each round as a {@action Magic|XPHB} action. A {@variantrule Friendly [Attitude]|XPHB|Friendly} swarm obeys your commands. If you issue no commands to a {@variantrule Friendly [Attitude]|XPHB|Friendly} swarm, it defends itself but otherwise takes no actions. If a {@variantrule Friendly [Attitude]|XPHB|Friendly} swarm starts its turn more than 30 feet away from you, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Piwafwi (Cloak of Elvenkind)",
      source: "OotA",
      page: 222,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This dark spider-silk cloak is made by {@creature drow}. It is a {@item cloak of elvenkind}. It loses its magic if exposed to sunlight for 1 hour without interruption.",
        "While you wear this cloak with its hood up, Wisdom ({@skill Perception}) checks made to see you have disadvantage. and you have advantage on Dexterity ({@skill Stealth}) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
      ],
      hasFluffImages: true
    },
    {
      name: "Pixie Dust",
      source: "WBtW",
      page: 212,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "As an action, you can sprinkle this dust on yourself or another creature you can see within 5 feet of you. The recipient gains a flying speed of 30 feet and the ability to hover for 1 minute. If the creature is airborne when this effect ends, it falls safely to the ground, taking no damage and landing on its feet.",
        "A small packet holds enough pixie dust for one use."
      ]
    },
    {
      name: "Plate of Knight's Fellowship",
      source: "BMT",
      page: 37,
      baseItem: "plate armor|PHB",
      type: "HA",
      rarity: "uncommon",
      reqAttune: true,
      weight: 65,
      ac: 18,
      strength: "15",
      stealth: true,
      entries: [
        "This gleaming set of silver-and-gold plate armor never tarnishes.",
        "While wearing this armor, you can use a bonus action to summon the spirit of a warrior to your aid. The spirit's corporeal form manifests in an unoccupied space of your choice within 30 feet of you, and it uses the {@creature knight} stat block. The spirit disappears when it drops to 0 hit points or after 1 minute, whichever comes first.",
        "The spirit is an ally to you and your companions. In combat, the spirit shares your initiative count but takes its turn immediately after yours. The spirit obeys your commands (no action required by you); if you don't issue any commands, the spirit takes the {@action Dodge} action and uses its movement to avoid danger.",
        "Once this bonus action is used, it can't be used again until the next dawn.",
        "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body."
      ]
    },
    {
      name: "Portal Compass",
      source: "SatO",
      page: 13,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This portable arcane instrument points in the direction of the last portal it passed through while it and the portal are on the same plane of existence. If that portal no longer exists, the needle becomes static until the compass passes through a new portal."
      ],
      hasFluffImages: true
    },
    {
      name: "Potion of Acid Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Acid Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "acid"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Acid Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "acid"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Advantage",
      source: "WBtW",
      page: 212,
      type: "P",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour.",
        "This potion takes the form of a sparkling, golden mist that moves and pours like water."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Animal Friendship",
      source: "DMG",
      page: 187,
      srd: true,
      reprintedAs: [
        "Potion of Animal Friendship|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you can cast the {@spell animal friendship} spell (save {@dc 13}) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair."
      ],
      attachedSpells: [
        "animal friendship"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Animal Friendship",
      source: "XDMG",
      page: 287,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "When you drink this potion, you can cast the level 3 version of the {@spell Animal Friendship|XPHB} spell (save {@dc 13}).",
        "Agitating this potion's muddy liquid brings little bits into view: a fish scale, a hummingbird feather, a cat claw, or a squirrel hair."
      ],
      attachedSpells: [
        "animal friendship|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Cold Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Cold Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "cold"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Cold Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "cold"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Fire Breath",
      source: "DMG",
      page: 187,
      reprintedAs: [
        "Potion of Fire Breath|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a {@dc 13} Dexterity saving throw, taking {@damage 4d6} fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Fire Breath",
      source: "XDMG",
      page: 187,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "After drinking this potion, you can take a {@variantrule Bonus Action|XPHB} to exhale fire at a target within 30 feet of yourself. The target makes a {@dc 13} Dexterity saving throw, taking {@damage 4d6} Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.",
        "This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Fire Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Fire Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "fire"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Fire Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "fire"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Force Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Force Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "force"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Force Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "force"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Greater Healing",
      source: "DMG",
      page: 187,
      srd: true,
      reprintedAs: [
        "Potion of Greater Healing|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "You regain {@dice 4d4 + 4} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
      ],
      lootTables: [
        "Magic Item Table A",
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Greater Healing",
      source: "XDMG",
      page: 288,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "You regain {@dice 4d4 + 4} {@variantrule Hit Points|XPHB} when you drink this potion. The potion's red liquid glimmers when agitated."
      ],
      lootTables: [
        "Implements - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Growth",
      source: "DMG",
      page: 187,
      srd: true,
      reprintedAs: [
        "Potion of Growth|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you gain the \"enlarge\" effect of the {@spell enlarge/reduce} spell for {@dice 1d4} hours (no {@status concentration} required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process."
      ],
      attachedSpells: [
        "enlarge/reduce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Growth",
      source: "XDMG",
      page: 288,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "When you drink this potion, you gain the \"enlarge\" effect of the {@spell Enlarge/Reduce|XPHB} spell for 10 minutes (no {@status Concentration|XPHB} required).",
        "The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process."
      ],
      attachedSpells: [
        "enlarge/reduce|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Hill Giant Strength",
      source: "DMG",
      page: 187,
      srd: true,
      reprintedAs: [
        "Potion of Hill Giant Strength|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      ability: {
        static: {
          str: 21
        }
      },
      entries: [
        "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
        "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature hill giant}."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Hill Giant Strength",
      source: "XDMG",
      page: 288,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      ability: {
        static: {
          str: 21
        }
      },
      entries: [
        "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
        "This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Armaments - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Lightning Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Lightning Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "lightning"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Lightning Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "lightning"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Necrotic Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Necrotic Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "necrotic"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Necrotic Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "necrotic"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Poison",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Poison|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "This concoction looks, smells, and tastes like a {@item potion of healing} or other beneficial potion. However, it is actually poison masked by illusion magic. An {@spell identify} spell reveals its true nature.",
        "If you drink it, you take {@damage 3d6} poison damage, and you must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned}. At the start of each of your turns while you are {@condition poisoned} in this way, you take {@damage 3d6} poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by {@dice 1d6}. The poison ends when the damage decreases to 0."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Poison",
      source: "XDMG",
      page: 288,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "This concoction looks, smells, and tastes like a {@item Potion of Healing|XDMG} or another beneficial potion. However, it is actually poison masked by illusion magic. {@spell Identify|XPHB} reveals its true nature.",
        "If you drink this potion, you take {@damage 4d6} Poison damage and must succeed on a {@dc 13} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 1 hour."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Poison Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Poison Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "poison"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Poison Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "poison"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Polychromy",
      source: "DitLCoT",
      page: 15,
      type: "P",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you and everything you are wearing or carrying take on a rainbow-hued appearance for 1 hour. During that time, you can use a bonus action to turn any color or combination of colors you choose. If you mimic the colors of your surroundings, your hues continually shift to match your surroundings, and you have advantage on Dexterity ({@skill Stealth}) checks until you change your colors again or the potion wears off.",
        "The potion is separated into seven brightly colored bands of immiscible liquids and has a syrupy taste."
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Potion of Psionic Fortitude",
      source: "PaBTSO",
      page: 219,
      type: "P",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you have advantage for 1 hour on saving throws you make to avoid or end the charmed or stunned condition on yourself.",
        "This black potion swirls with shimmering flecks of pink and purple."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Psychic Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Psychic Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "psychic"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Psychic Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "psychic"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Pugilism",
      source: "XDMG",
      page: 289,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "After you drink this potion, each {@variantrule Unarmed Strike|XPHB} you make deals an extra {@damage 1d6} Force damage on a hit. This effect lasts 10 minutes.",
        "This potion is a thick green fluid that tastes like spinach."
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Potion of Radiant Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Radiant Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "radiant"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Radiant Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "radiant"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Thunder Resistance",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Thunder Resistance|XDMG"
      ],
      type: "P",
      resist: [
        "thunder"
      ],
      tier: "minor",
      rarity: "uncommon",
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Thunder Resistance",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      resist: [
        "thunder"
      ],
      rarity: "uncommon",
      weight: 0.5,
      hasRefs: true,
      entries: [
        "{#itemEntry Potion of Resistance|XDMG}"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Potion of Water Breathing",
      source: "DMG",
      page: 188,
      srd: true,
      reprintedAs: [
        "Potion of Water Breathing|XDMG"
      ],
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it."
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Potion of Water Breathing",
      source: "XDMG",
      page: 289,
      freeRules2024: true,
      type: "P|XPHB",
      rarity: "uncommon",
      weight: 0.5,
      entries: [
        "You can breathe underwater for 24 hours after drinking this potion.",
        "This potion's cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Prehistoric Figurine of Wondrous Power, Pyrite Plesiosaurus",
      source: "BGG",
      page: 114,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world.",
        "As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
        "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature's statistics.",
        "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
        {
          type: "entries",
          name: "{@creature plesiosaurus||Pyrite Plesiosaurus}",
          entries: [
            "This figurine becomes a {@creature plesiosaurus} for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 4 days have passed.",
            "While you are riding the plesiosaurus, you can use it to cast {@spell water breathing} at will."
          ]
        }
      ],
      attachedSpells: [
        "water breathing"
      ],
      hasFluffImages: true
    },
    {
      name: "Prismari Primer",
      source: "SCC",
      page: 39,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The Prismari Primer is a magic textbook created at Strixhaven's Prismari College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make a Dexterity ({@skill Acrobatics}) or a Charisma ({@skill Performance}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
        "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or sorcerer spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
      ]
    },
    {
      name: "Propeller Helm",
      source: "WDMM",
      page: 251,
      rarity: "uncommon",
      reqAttune: "by a small humanoid",
      reqAttuneTags: [
        {
          creatureType: "humanoid",
          size: "S"
        }
      ],
      wondrous: true,
      entries: [
        "While worn, the helm allows its wearer to use an action to cast the {@spell levitate} spell, requiring no components. The helm's propeller spins and whirs loudly until the spell ends. Each time the spell ends, there is a {@chance 50} chance that the helm loses its magic and becomes nonmagical."
      ]
    },
    {
      name: "Psi Crystal",
      source: "IDRotF",
      page: 315,
      rarity: "uncommon",
      reqAttune: "by a creature with an intelligence score of 3 or higher",
      reqAttuneTags: [
        {
          int: 3
        }
      ],
      wondrous: true,
      entries: [
        "This crystal grants you telepathy for as long as you remain attuned to it. See the {@book introduction of the Monster Manual|MM|0|Telepathy} for rules on how this telepathy works.",
        "The crystal also glows with a purplish inner light while you are attuned to it.",
        "The higher your intelligence, the greater the light's intensity and the greater the range of the telepathy (see the Psi Crystal Properties table).",
        {
          type: "table",
          caption: "Psi Crystal Properties",
          colStyles: [
            "col-2 text-center",
            "col-2 text-center",
            "col-8"
          ],
          colLabels: [
            "Intelligence Score",
            "Range of Telepathy",
            "Light Intensity"
          ],
          rows: [
            [
              "3-7",
              "15 feet",
              "Dim light out to a range of 5 feet"
            ],
            [
              "8-11",
              "30 feet",
              "Bright light in a 5-foot radius and dim light for an additional 5 feet"
            ],
            [
              "12-15",
              "60 feet",
              "Bright light in a 10-foot radius and dim light for an additional 10 feet"
            ],
            [
              "16 or higher",
              "120 feet",
              "Bright light in a 15-foot radius and dim light for an additional 15 feet"
            ]
          ]
        }
      ],
      light: [
        {
          dim: 5
        },
        {
          bright: 5,
          dim: 10
        },
        {
          bright: 10,
          dim: 20
        },
        {
          bright: 15,
          dim: 30
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Purging Rod",
      source: "DoDk",
      page: 230,
      type: "RD|DMG",
      rarity: "uncommon",
      entries: [
        "Once per day while holding this rod, you can use an action to cast {@spell purge contamination|DoDk}. After casting the spell, roll {@dice 1d20}. On a 1, the rod melts into sludge."
      ],
      attachedSpells: [
        "purge contamination|dodk"
      ]
    },
    {
      name: "Pyroconverger",
      source: "GGR",
      page: 180,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "A Pyroconverger is an Izzet-made flamethrower. It carries a risk of malfunction each time you use it.",
        "As an action, you can cause the Pyroconverger to project fire in a 10-foot cone. Each creature in that area must make a {@dc 13} Dexterity saving throw, taking {@damage 4d6} fire damage on a failed save, or half as much damage on a successful one.",
        "Each time you use the Pyroconverger, roll a {@dice d10} and add the number of times you have used it since your last long rest. If the total is 11 or higher, the Pyroconverger malfunctions: you take {@damage 4d6} fire damage, and you can't use the Pyroconverger again until you finish a long rest."
      ],
      hasFluffImages: true
    },
    {
      name: "Quaal's Feather Token, Anchor",
      source: "XDMG",
      page: 290,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This object looks like a feather.",
        "You can take a {@action Magic|XPHB} action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Quaal's Feather Token, Fan",
      source: "XDMG",
      page: 290,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This object looks like a feather.",
        "If you are on a boat or ship, you can take a {@action Magic|XPHB} action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a strong wind. This wind can fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as a {@action Magic|XPHB} action."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Quaal's Feather Token, Tree",
      source: "XDMG",
      page: 290,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This object looks like a feather.",
        "You must be outdoors to use this token. You can take a {@action Magic|XPHB} action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Quandrix Primer",
      source: "SCC",
      page: 39,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The Quandrix Primer is a magic textbook created at Strixhaven's Quandrix College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill Arcana}) or an Intelligence ({@skill Nature}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
        "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
      ]
    },
    {
      name: "Quiver of Ehlonna",
      source: "DMG",
      page: 189,
      srd: "Efficient Quiver",
      reprintedAs: [
        "Quiver of Ehlonna|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      entries: [
        "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty {@item arrow|phb|arrows}, {@item crossbow bolt|phb|bolts}, or similar objects. The midsize compartment holds up to eighteen {@item javelin|phb|javelins} or similar objects. The longest compartment holds up to six long objects, such as bows, {@item quarterstaff|phb|quarterstaffs}, or {@item spear|phb|spears}.",
        "You can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
      ],
      containerCapacity: {
        item: [
          {
            "crossbow bolt|phb": 60,
            "arrow|phb": 60
          },
          {
            "javelin|phb": 18
          },
          {
            "quarterstaff|phb": 6,
            "spear|phb": 6
          }
        ],
        weightless: true
      },
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Quiver of Ehlonna",
      source: "XDMG",
      page: 189,
      rarity: "uncommon",
      wondrous: true,
      weight: 2,
      entries: [
        "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to 60 {@item Arrow|XPHB|Arrows}, {@item Bolt|XPHB|Bolts}, or similar objects. The midsize compartment holds up to 18 {@item Javelin|XPHB|Javelins} or similar objects. The longest compartment holds up to 6 long objects, such as bows, {@item Quarterstaff|XPHB|Quarterstaff's}, or {@item Spear|XPHB|Spears}.",
        "You can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
      ],
      containerCapacity: {
        item: [
          {
            "bolt|xphb": 60,
            "arrow|xphb": 60
          },
          {
            "javelin|xphb": 18
          },
          {
            "longbow|xphb": 6,
            "shortbow|xphb": 6,
            "quarterstaff|xphb": 6,
            "spear|xphb": 6
          }
        ],
        weightless: true
      },
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Rakdos Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Rakdos, allows you to cast {@spell hellish rebuke}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Rakdos' recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "hellish rebuke"
      ],
      hasFluffImages: true
    },
    {
      name: "Rakdos Keyrune",
      source: "GGR",
      page: 178,
      rarity: "uncommon",
      reqAttune: "by a member of the Rakdos guild",
      reqAttuneTags: [
        {
          background: "rakdos cultist|ggr"
        }
      ],
      wondrous: true,
      entries: [
        "This dark granite keyrune is marbled with scarlet veins and carved with the leering visage of a mischievous demon. When activated, it transforms into a {@creature cackler|GGR} for up to 1 hour.",
        "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature cackler|GGR}. If there isn't enough space for the creature, the keyrune doesn't transform.",
        "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
        "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
      ],
      hasFluffImages: true
    },
    {
      name: "Reszur",
      source: "PotA",
      page: 157,
      baseItem: "dagger|phb",
      type: "M",
      rarity: "uncommon",
      weight: 1,
      weaponCategory: "simple",
      property: [
        "F",
        "L",
        "T"
      ],
      range: "20/60",
      dmg1: "1d4",
      dmgType: "P",
      bonusWeapon: "+1",
      entries: [
        "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.",
        "The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again."
      ],
      light: [
        {
          dim: 10
        }
      ]
    },
    {
      name: "Ring of Jumping",
      source: "DMG",
      page: 191,
      srd: true,
      reprintedAs: [
        "Ring of Jumping|XDMG"
      ],
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you can cast the {@spell jump} spell from it as a bonus action at will, but can target only yourself when you do so."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "jump"
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Ring of Jumping",
      source: "XDMG",
      page: 293,
      freeRules2024: true,
      type: "RG|XDMG",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you can cast {@spell Jump|XPHB} from it, but can target only yourself when you do so."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "jump|xphb"
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Ring of Mind Shielding",
      source: "DMG",
      page: 191,
      srd: true,
      reprintedAs: [
        "Ring of Mind Shielding|XDMG"
      ],
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.",
        "You can use an action to cause the ring to become {@condition invisible} until you use another action to make it visible, until you remove the ring, or until you die.",
        "If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Mind Shielding",
      source: "XDMG",
      page: 293,
      type: "RG|XDMG",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.",
        "You can take a {@action Magic|XPHB} action to cause the ring to become imperceptible until you take another {@action Magic|XPHB} action to make it perceptible, until you remove the ring, or until you die.",
        "If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Obscuring",
      source: "EGW",
      page: 269,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This band of iron resembles a skull and is cold to the touch. It has 3 charges and regains {@dice 1d3} expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the {@spell fog cloud} spell from it, with the following changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no {@status concentration} required)."
      ],
      attachedSpells: [
        "fog cloud"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Puzzler's Wit",
      source: "BMT",
      page: 37,
      type: "RG|DMG",
      rarity: "uncommon",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4 - 1}",
      charges: 3,
      entries: [
        "This gold ring bears a fluorite stone and is enchanted to sharpen the wearer's mind.",
        "The ring has 3 charges and regains {@dice 1d4 - 1} expended charges daily at dawn. When you make an Intelligence check, you can expend 1 charge to grant yourself advantage on the check."
      ]
    },
    {
      name: "Ring of Swimming",
      source: "DMG",
      page: 193,
      srd: true,
      reprintedAs: [
        "Ring of Swimming|XDMG"
      ],
      type: "RG|DMG",
      tier: "minor",
      rarity: "uncommon",
      modifySpeed: {
        static: {
          swim: 40
        }
      },
      entries: [
        "You have a swimming speed of 40 feet while wearing this ring."
      ],
      lootTables: [
        "Magic Item Table B"
      ]
    },
    {
      name: "Ring of Swimming",
      source: "XDMG",
      page: 295,
      freeRules2024: true,
      type: "RG|XDMG",
      rarity: "uncommon",
      modifySpeed: {
        static: {
          swim: 40
        }
      },
      entries: [
        "You have a {@variantrule Swim Speed|XPHB} of 40 feet while wearing this ring."
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Ring of the Orator",
      source: "PaBTSO",
      page: 219,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6}",
      charges: 6,
      entries: [
        "This ring has 6 charges. While you wear it, you can expend 1 of its charges to project your voice to be heard clearly by all creatures within 1 mile of yourself, regardless of intervening noise, for 1 minute. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks this projection. If you project your voice while speaking a language the listening creatures don't understand, you can make the creatures understand what you're saying. You must be able to see the creatures to make them understand. The ring regains {@dice 1d6} expended charges daily at dawn."
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Truth Telling",
      source: "WDH",
      page: 192,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you have advantage on Wisdom ({@skill Insight}) checks to determine whether someone is lying to you."
      ]
    },
    {
      name: "Ring of Warmth",
      source: "DMG",
      page: 193,
      srd: true,
      reprintedAs: [
        "Ring of Warmth|XDMG"
      ],
      type: "RG|DMG",
      resist: [
        "cold"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Warmth",
      source: "XDMG",
      page: 296,
      freeRules2024: true,
      type: "RG|XDMG",
      resist: [
        "cold"
      ],
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "If you take Cold damage while wearing this ring, the ring reduces the damage you take by {@dice 2d8}.",
        "In addition, while wearing this ring, you and everything you wear and carry are unharmed by temperatures of 0 degrees Fahrenheit or lower."
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Water Walking",
      source: "DMG",
      page: 193,
      srd: true,
      reprintedAs: [
        "Ring of Water Walking|XDMG"
      ],
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      entries: [
        "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Ring of Water Walking",
      source: "XDMG",
      page: 296,
      freeRules2024: true,
      type: "RG|XDMG",
      rarity: "uncommon",
      entries: [
        "While wearing this ring, you cast {@spell Water Walk|XPHB} from it, targeting only yourself."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "water walk|xphb"
      ],
      lootTables: [
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Robe of Serpents",
      source: "SKT",
      page: 236,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "A robe of serpents is a stylish silk garment that is popular among wealthy nobles and retired assassins. The robe is emblazoned with {@dice 1d4 + 3} stylized serpents, all brightly colored.",
        "As a bonus action on your turn, you can transform one of the robe's serpents into a {@creature giant poisonous snake}. The snake instantly falls from the robe, slithers into an unoccupied space next to you, and acts on your initiative count. The snake can tell friendly creatures from hostile ones and attacks the latter. The snake disappears in a harmless puff of smoke after 1 hour, when it drops to 0 hit points, or when you dismiss it (no action required). Once detached, a snake can't return to the robe. When all of the robe's snakes have detached, the robe becomes a nonmagical garment."
      ]
    },
    {
      name: "Robe of Useful Items",
      source: "DMG",
      page: 195,
      srd: true,
      reprintedAs: [
        "Robe of Useful Items|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.",
        "The robe has two of each of the following patches:",
        {
          type: "list",
          items: [
            "Dagger",
            "Bullseye lantern (filled and lit)",
            "Steel mirror",
            "10-foot pole",
            "Hempen rope (50 feet, coiled)",
            "Sack"
          ]
        },
        "In addition, the robe has {@dice 4d4} other patches. The DM chooses the patches or determines them randomly.",
        {
          type: "table",
          colLabels: [
            "{@dice d100}",
            "Patch"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "01-08",
              "Bag of 100 gp"
            ],
            [
              "09-15",
              "Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp"
            ],
            [
              "16-22",
              "Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself"
            ],
            [
              "23-30",
              "10 gems worth 100 gp each"
            ],
            [
              "31-44",
              "Wooden ladder (24 feet long)"
            ],
            [
              "45-51",
              "A {@creature riding horse} with saddle bags"
            ],
            [
              "52-59",
              "Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you"
            ],
            [
              "60-68",
              "4 {@item potion of healing||potions of healing}"
            ],
            [
              "69-75",
              "{@item Rowboat} (12 feet long)"
            ],
            [
              "76-83",
              "Spell scroll containing one spell of 1st to 3rd level"
            ],
            [
              "84-90",
              "2 {@creature mastiff||mastiffs}"
            ],
            [
              "91-96",
              "Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach"
            ],
            [
              "97-00",
              "{@item Portable ram|phb}"
            ]
          ]
        }
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Robe of Useful Items",
      source: "XDMG",
      page: 298,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can take a {@action Magic|XPHB} action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.",
        "The robe has two of each of the following patches:",
        {
          type: "list",
          items: [
            "{@item Bullseye Lantern|XPHB} (filled and lit)",
            "{@item Dagger|XPHB}",
            "{@item Mirror|XPHB}",
            "{@item Pole|XPHB}",
            "{@item Rope|XPHB} (coiled)",
            "{@item Sack|XPHB}"
          ]
        },
        "In addition, the robe has {@dice 4d4} other patches. The DM chooses the patches or determines them randomly by rolling on the following table.",
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "1d100",
            "Patch"
          ],
          rows: [
            [
              "01-08",
              "Bag of 100 GP"
            ],
            [
              "09-15",
              "Silver coffer (1 foot long, 6 inches wide and deep) worth 500 GP"
            ],
            [
              "16-22",
              "Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself"
            ],
            [
              "23-30",
              "10 gems worth 100 GP each"
            ],
            [
              "31-44",
              "Wooden ladder (24 feet long)"
            ],
            [
              "45-51",
              "{@creature Riding Horse|XMM} with a {@item Riding Saddle|XPHB}"
            ],
            [
              "52-59",
              "Open pit (a 10-foot {@variantrule Cube [Area of Effect]|XPHB|Cube}), which you can place on the ground within 10 feet of yourself"
            ],
            [
              "60-68",
              "4 {@item Potion of Healing|XDMG|Potions of Healing}"
            ],
            [
              "69-75",
              "{@item Rowboat|XPHB} (12 feet long)"
            ],
            [
              "76-83",
              "{@item Spell Scroll|XDMG} containing one spell of level 1, 2, or 3 (your choice)"
            ],
            [
              "84-90",
              "2 {@creature Mastiff|XMM|Mastiffs}"
            ],
            [
              "91-96",
              "Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach"
            ],
            [
              "97-00",
              "{@item Portable Ram|XPHB}"
            ]
          ]
        }
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Rod of Mercurial Form",
      source: "TDCSR",
      page: 197,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This humble steel rod is engraved with tiny symbols representing different weapons, as well as the monogram \"T.D.\" A creature holding this rod can speak the name of any simple or martial weapon aloud as a bonus action, causing the rod to transform into an ordinary weapon of that type. When in the form of a ranged weapon, this rod magically creates its own ammunition, which disappears after a ranged attack hits or misses."
      ]
    },
    {
      name: "Rod of Retribution",
      source: "EGW",
      page: 269,
      type: "RD|DMG",
      rarity: "uncommon",
      reqAttune: true,
      weight: 2,
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This adamantine rod is tipped with a glowing crystalline eye. The rod has 3 charges and regains all its expended charges daily at dawn.",
        "When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 of the rod's charges to force the creature to make a {@dc 13} Dexterity saving throw. The creature takes {@damage 2d10} lightning damage on a failed save, or half as much damage on a successful one."
      ]
    },
    {
      name: "Rope of Climbing",
      source: "DMG",
      page: 197,
      srd: true,
      reprintedAs: [
        "Rope of Climbing|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      weight: 3,
      entries: [
        "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.",
        "If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.",
        "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ]
    },
    {
      name: "Rope of Climbing",
      source: "XDMG",
      page: 301,
      freeRules2024: true,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This 60-foot length of rope can hold up to 3,000 pounds. While holding one end of the rope, you can take a {@action Magic|XPHB} action to command the other end of the rope to animate and move toward a destination you choose, up to the rope's length away from you. That end moves 10 feet on your turn when you first command it and 10 feet at the start of each of your subsequent turns until reaching its destination or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.",
        "If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants {@variantrule Advantage|XPHB} on ability checks made to climb using the rope.",
        "The rope has AC 20, HP 20, and {@variantrule Immunity|XPHB} to Poison and Psychic damage. It regains 1 {@variantrule Hit Points|XPHB|Hit Point} every 5 minutes as long as it has at least 1 {@variantrule Hit Points|XPHB|Hit Point}. If the rope drops to 0 {@variantrule Hit Points|XPHB}, it is destroyed."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ]
    },
    {
      name: "Saddle of the Cavalier",
      source: "DMG",
      page: 199,
      reprintedAs: [
        "Saddle of the Cavalier|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
      ],
      lootTables: [
        "Magic Item Table B"
      ]
    },
    {
      name: "Saddle of the Cavalier",
      source: "XDMG",
      page: 199,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Armaments - Uncommon|XDMG"
      ]
    },
    {
      name: "Seeker Dart",
      source: "PotA",
      page: 223,
      baseItem: "dart|phb",
      type: "R",
      rarity: "uncommon",
      weight: 0.25,
      weaponCategory: "simple",
      property: [
        "F",
        "T"
      ],
      range: "20/60",
      dmg1: "1d4",
      dmgType: "P",
      entries: [
        "This small dart is decorated with designs like windy spirals that span the length of its shaft.",
        "When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.",
        "When the dart reaches its target, the target must succeed on a {@dc 16} Dexterity saving throw or take {@damage 1d4} piercing damage and {@damage 3d4} lightning damage. The dart's magic is then spent, and it becomes an ordinary dart."
      ]
    },
    {
      name: "Selesnya Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Selesnya, allows you to cast {@spell charm person}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Selesnya's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "charm person"
      ],
      hasFluffImages: true
    },
    {
      name: "Sending Stone",
      source: "AI",
      page: 33,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Also at rank 1, you are given use of an Acquisitions Incorporated sending stone, an uncommon magic item that resembles a gemstone in a bold setting. It functions like a normal sending stone, except that it has no matching stone and allows communication with Head Office, specific secretarians you know, and the secretarian nearest your location. You must succeed on a {@dc 15} Intelligence ({@skill Arcana}) check to establish contact. Once the stone is successfully used, it can't be used again until the next dawn.",
        "Making contact with another secretarian assumes that they are in possession of their own sending stone.",
        {
          type: "table",
          caption: "Quirks of Your Sending Stone",
          colLabels: [
            "d8",
            "quirk"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "It's a flip stone."
            ],
            [
              "2",
              "It gets great reception everywhere except in your headquarters."
            ],
            [
              "3",
              "It sometimes picks up other magical conversations."
            ],
            [
              "4",
              "It's the perfect size, shape, and weight to be used as a skipping stone."
            ],
            [
              "5",
              "It heats up when you use it, to the extent that it once burned through your gloves."
            ],
            [
              "6",
              "It has an obnoxious ringtone that you can't work out how to change."
            ],
            [
              "7",
              "It fails to notify you of incoming messages except for a faint pulsating glow."
            ],
            [
              "8",
              "It's voice activated, so that every time you talk to someone, it tries to send a message to someone else."
            ]
          ]
        },
        {
          type: "entries",
          name: "Rumor Mill",
          entries: [
            "Also at rank 2, whenever your franchise begins a major quest or mission, make a {@dc 15} Intelligence ({@skill History}) check. On a success, you can learn up to three rumors related to creatures or organizations involved in the mission, which come to you through your sending stone. These rumors reflect current or historical knowledge possessed by Acquisitions Incorporated or the organization's many contacts."
          ]
        },
        {
          type: "entries",
          name: "Improved Rumor Mill",
          entries: [
            "At rank 3, when you use your Rumor Mill feature, the DM provides you with a sense of which parts of a particular rumor are inaccurate, if any. You do not necessarily learn the truth behind those false rumors."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Sending Stones",
      source: "DMG",
      page: 199,
      reprintedAs: [
        "Sending Stones|XDMG"
      ],
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the {@spell sending} spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.",
        "Once {@spell sending} is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "sending"
      ],
      lootTables: [
        "Magic Item Table C"
      ],
      hasFluffImages: true
    },
    {
      name: "Sending Stones",
      source: "XDMG",
      page: 303,
      freeRules2024: true,
      otherSources: [
        {
          source: "ScoEE"
        }
      ],
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Sending Stones come in pairs, with each stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can cast {@spell Sending|XPHB} from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone, and you don't cast the spell.",
        "Once Sending is cast using either stone, the stones can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "sending|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Sensory Stone",
      source: "SatO",
      page: 13,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small, smooth stone contains the essence of a single experience.",
        "As an action, you or a willing creature you designate can touch the stone and experience the sensation as if it happened to the designated creature. The illusory experience is fleeting and harmless, however real it might feel in the moment.",
        {
          type: "entries",
          name: "Record Sensation",
          entries: [
            "You can use your reaction to record a short sensation lasting no longer than 6 seconds experienced by a creature of your choice within 30 feet of yourself, infusing the essence of that experience into the stone. This replaces any sensation already stored within the stone."
          ]
        },
        {
          type: "entries",
          name: "Siphon Sensation",
          entries: [
            "As a bonus action, you can draw on the stone's magic to end the charmed or frightened condition on yourself, destroying the stone in the process."
          ]
        }
      ]
    },
    {
      name: "Sentinel Shield",
      source: "DMG",
      page: 199,
      reprintedAs: [
        "Sentinel Shield|XDMG"
      ],
      type: "S",
      tier: "major",
      rarity: "uncommon",
      weight: 6,
      ac: 2,
      entries: [
        "While holding this shield, you have advantage on initiative rolls and Wisdom ({@skill Perception}) checks. The shield is emblazoned with a symbol of an eye."
      ],
      lootTables: [
        "Magic Item Table F"
      ]
    },
    {
      name: "Sentinel Shield",
      source: "XDMG",
      page: 303,
      freeRules2024: true,
      baseItem: "shield|xphb",
      type: "S|XPHB",
      rarity: "uncommon",
      weight: 6,
      ac: 2,
      entries: [
        "While holding this Shield, you have {@variantrule Advantage|XPHB} on {@variantrule Initiative|XPHB} rolls and Wisdom ({@skill Perception|XPHB}) checks. The Shield is emblazoned with a symbol of an eye."
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ]
    },
    {
      name: "Serpent Scale Armor",
      source: "CM",
      page: 98,
      baseItem: "scale mail|PHB",
      type: "MA",
      rarity: "uncommon",
      weight: 45,
      ac: 14,
      dexterityMax: null,
      entries: [
        "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier (instead of a maximum of +2) when determining your Armor Class. In addition, this armor does not impose disadvantage on your Dexterity ({@skill Stealth}) checks."
      ]
    },
    {
      name: "Shatterspike",
      source: "TftYP",
      page: 229,
      baseItem: "longsword|phb",
      type: "M",
      rarity: "uncommon",
      reqAttune: true,
      weight: 3,
      weaponCategory: "martial",
      property: [
        "V"
      ],
      dmg1: "1d8",
      dmgType: "S",
      dmg2: "1d10",
      bonusWeapon: "+1",
      entries: [
        "You have a +1 bonus to attack and damage rolls made with this magic weapon. If it hits an object, the hit is automatically a critical hit, and it can deal bludgeoning or slashing damage to the object (your choice). Further, damage from nonmagical sources can't harm the weapon."
      ]
    },
    {
      name: "Shield of the Tortoise",
      source: "BMT",
      page: 67,
      baseItem: "shield|PHB",
      type: "S",
      rarity: "uncommon",
      reqAttune: true,
      curse: true,
      weight: 6,
      ac: 2,
      bonusAc: "+1",
      entries: [
        "While you are wielding this shield, you gain a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This item is cursed. Attuning to it extends the curse to you until you are targeted by a {@spell Remove Curse} spell or similar magic. You cannot discard the shield, and remain attuned to it, as long as you are cursed. As long as you are cursed, you are sluggish. Your speed is halved. When you roll initiative, treat the roll on your {@dice d20} as a 1. You can't change your initiative by any means."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Silverquill Primer",
      source: "SCC",
      page: 39,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The Silverquill Primer is a magic textbook created at Strixhaven's Silverquill College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make a Charisma ({@skill Intimidation}) or a Charisma ({@skill Persuasion}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
        "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or cleric spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
      ]
    },
    {
      name: "Simic Guild Signet",
      source: "GGR",
      page: 178,
      type: "RG|DMG",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ring, adorned with the symbol of Simic, allows you to cast {@spell expeditious retreat}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Simic's recognition and favor.",
        "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save {@dc 13})."
      ],
      attachedSpells: [
        "expeditious retreat"
      ],
      hasFluffImages: true
    },
    {
      name: "Simic Keyrune",
      source: "GGR",
      page: 178,
      rarity: "uncommon",
      reqAttune: "by a member of the Simic guild",
      reqAttuneTags: [
        {
          background: "simic scientist|ggr"
        }
      ],
      wondrous: true,
      entries: [
        "This keyrune is assembled from coral, mother-of-pearl, and chrome and adorned with the spirals and curves characteristic of Simic ornamentation. The head resembles the shell of a sea creature. On command, the keyrune turns into a {@creature category 1 krasis|GGR} that has the Grabber and Stabilizing Legs adaptations. The transformation lasts for up to 5 hours.",
        "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature category 1 krasis|GGR} that has the Grabber and Stabilizing Legs adaptations. If there isn't enough space for the creature, the keyrune doesn't transform.",
        "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
        "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
      ],
      hasFluffImages: true
    },
    {
      name: "Skyblinder Staff",
      source: "GGR",
      page: 181,
      rarity: "uncommon",
      reqAttune: true,
      weight: 4,
      weaponCategory: "simple",
      property: [
        "V"
      ],
      dmg1: "1d6",
      dmgType: "B",
      dmg2: "1d8",
      bonusWeapon: "+1",
      bonusSpellAttack: "+1",
      staff: true,
      entries: [
        "You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While holding it, you gain a +1 bonus to spell attack rolls.",
        "If a flying creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to hold the staff aloft and cause it to flare with light. The attacker has disadvantage on the attack roll, and it must succeed on a {@dc 15} Constitution saving throw or be {@condition blinded} until the start of its next turn."
      ],
      hasFluffImages: true
    },
    {
      name: "Skymetal Shield",
      source: "DoDk",
      page: 232,
      baseItem: "shield|PHB",
      type: "S",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      ac: 2,
      entries: [
        "This shield is constructed from hammered meteoric iron and embossed with a delerium crystal. When you are hit with a melee or ranged attack while wielding this shield, you can use your reaction to absorb residual energy from the attack. You suffer damage and effects from the attack as normal, and the shield gains 1 charge. The shield can have a maximum of 5 charges. Unexpended charges are lost each day at dawn.",
        "As an action while wielding the shield, you can expend all its charges to release a forceful blast. Creatures within 10 feet of you must succeed on a {@dc 15} Constitution saving throw. On a failed saving throw, creatures in the area take {@damage 1d6} force damage for each expended charge, and are flung back 10 feet and knocked prone."
      ]
    },
    {
      name: "Sling of Giant Felling",
      source: "BMT",
      page: 68,
      baseItem: "sling|PHB",
      type: "R",
      rarity: "uncommon",
      weaponCategory: "simple",
      property: [
        "A"
      ],
      range: "30/120",
      dmg1: "1d4",
      dmgType: "B",
      entries: [
        "When you hit a Giant creature with a ranged attack roll using this magic sling, the creature must succeed on a {@dc 18} Constitution saving throw or have the prone condition."
      ],
      ammoType: "sling bullet|phb"
    },
    {
      name: "Slippers of Spider Climbing",
      source: "DMG",
      page: 200,
      srd: true,
      reprintedAs: [
        "Slippers of Spider Climbing|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        equal: {
          climb: "walk"
        }
      },
      entries: [
        "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Slippers of Spider Climbing",
      source: "XDMG",
      page: 304,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        equal: {
          climb: "walk"
        }
      },
      entries: [
        "While you wear these light shoes, you can move up, down, and across vertical surfaces and along ceilings, while leaving your hands free. You have a {@variantrule Climb Speed|XPHB} equal to your {@variantrule Speed|XPHB}. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Slumbering Dragon Vessel",
      source: "FTD",
      page: 27,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This vessel can be a potion bottle, drinking horn, or other container meant to hold a liquid.",
        "As a bonus action, if the vessel is empty, you can speak the command word to fill the vessel with one of the following (your choice): ale, olive oil, a {@item potion of healing}, or a {@item potion of climbing}. Once this property is used, it can't be used until the next dawn. A potion you create in this way loses its magical properties if it isn't imbibed within 24 hours."
      ]
    },
    {
      name: "Slumbering Dragon-Touched Focus",
      source: "FTD",
      page: 26,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      focus: [
        "Artificer",
        "Bard",
        "Cleric",
        "Druid",
        "Paladin",
        "Ranger",
        "Sorcerer",
        "Warlock",
        "Wizard"
      ],
      entries: [
        "This wondrous item can be a scepter, an orb, an amulet, a crystal, or another finely crafted object. It typically incorporates imagery of dragons' wings, claws, teeth, or scales.",
        "You have advantage on initiative rolls. While you are holding the focus, it can function as a spellcasting focus for all your spells."
      ]
    },
    {
      name: "Slumbering Scaled Ornament",
      source: "FTD",
      page: 27,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes.",
        "You have advantage on saving throws you make to avoid being {@condition charmed} or {@condition frightened} or to end those conditions on you."
      ]
    },
    {
      name: "Smokepowder",
      source: "WDH",
      page: 192,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Smokepowder is a magical explosive chiefly used to propel a bullet out of the barrel of a firearm. It is stored in airtight wooden kegs or tiny, waterproof leather packets. A packet contains enough smokepowder for five shots, and a keg holds enough smokepowder for five hundred shots.",
        "If smokepowder is set on fire, dropped, or otherwise handled roughly, it explodes and deals fire damage to each creature or object within 20 feet of it: {@dice 1d6} for a packet, {@dice 9d6} for a keg. A successful {@dc 12} Dexterity saving throw halves the damage.",
        "Casting {@spell dispel magic} on smokepowder renders it permanently inert."
      ]
    },
    {
      name: "Soul Coin",
      source: "BGDIA",
      page: 225,
      rarity: "uncommon",
      wondrous: true,
      weight: 0.333,
      entries: [
        "Soul coins are about 5 inches across and about an inch thick, minted from infernal iron. Each coin weighs one-third of a pound, and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each soul coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.",
        {
          type: "entries",
          name: "Carrying Soul Coins",
          entries: [
            "To hold a soul coin is to feel the soul bound within it—overcome with rage or fraught with despair.",
            "An evil creature can carry as many soul coins as it wishes (up to its maximum weight allowance). A non-evil creature can carry a number of soul coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of soul coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws."
          ]
        },
        {
          type: "entries",
          name: "Using a Soul Coin",
          entries: [
            "A soul coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a soul coin and use it to do one of the following:",
            {
              type: "list",
              items: [
                {
                  type: "item",
                  name: "Drain Life",
                  entry: "You siphon away some of the soul's essence and gain {@dice 1d10} temporary hit points."
                },
                {
                  type: "item",
                  name: "Query",
                  entry: "You telepathically ask the soul a question and receive a brief telepathic response, which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic."
                }
              ]
            }
          ]
        },
        {
          type: "entries",
          name: "Freeing a Soul",
          entries: [
            "Casting a spell that removes a curse on a soul coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from soul coins typically emerge from the River Styx as {@creature lemure} devils.",
            "A soul can also be freed by destroying the coin that contains it. A soul coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by a {@item hellfire weapon|bgdia} or an infernal war machine's furnace (see \"{@adventure Soul Fuel|bgdia|11|Soul Fuel}\").",
            "Freeing a soul from a soul coin is considered a good act, even if the soul belongs to an evil creature."
          ]
        },
        {
          type: "entries",
          name: "Hellish Currency",
          entries: [
            "Soul coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling, and reward the faithful for services rendered.",
            "Soul coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Soul Coin",
      source: "CoA",
      page: 269,
      rarity: "uncommon",
      wondrous: true,
      charges: 3,
      entries: [
        "Soul Coins are about 5 inches across and about an inch thick, minted from infernal iron. Each coin weighs one-third of a pound and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each Soul Coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.",
        {
          type: "entries",
          name: "Carrying Soul Coins",
          entries: [
            "To hold a Soul Coin is to feel the soul bound within it—overcome with rage or fraught with despair.",
            "An evil creature can carry as many Soul Coins as it wishes (up to its maximum weight allowance). A non-evil creature can carry a number of Soul Coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of Soul Coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws."
          ]
        },
        {
          type: "entries",
          name: "Using a Soul Coin",
          entries: [
            "A Soul Coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a Soul Coin and use it to do one of the following:",
            {
              type: "list",
              style: "list-hang-notitle",
              items: [
                {
                  type: "item",
                  name: "Drain Life",
                  entries: [
                    "You siphon away some of the soul's essence and gain {@dice 1d10} temporary hit points."
                  ]
                },
                {
                  type: "item",
                  name: "Query",
                  entries: [
                    "You telepathically ask the soul a question and receive a brief telepathic response, which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic."
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "entries",
          name: "Freeing a Soul",
          entries: [
            "Casting a spell that removes a curse on a Soul Coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served, or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from Soul Coins typically emerge from the River Styx as lemure devils.",
            "A soul can also be freed by destroying the coin that contains it. A Soul Coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by an infernal warship's furnace.",
            "Freeing a soul from a Soul Coin is considered a good act, even if the soul belongs to an evil creature."
          ]
        },
        {
          type: "entries",
          name: "Hellish Currency",
          entries: [
            "Soul Coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling, and reward the faithful for services rendered.",
            "Soul Coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes."
          ]
        }
      ]
    },
    {
      name: "Spell Gem (Lapis lazuli)",
      source: "OotA",
      page: 223,
      otherSources: [
        {
          source: "IMR",
          page: 95
        }
      ],
      rarity: "uncommon",
      reqAttune: "optional",
      wondrous: true,
      entries: [
        "A lapis lazuli spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
        "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
        "A lapis lazuli spell gem can store up to 1st level spells. Spells cast from the spell gem have a save DC of 13 and an attack bonus of {@hit 5}.",
        "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
        "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
        "Deep gnomes created these magic gemstones and keep the creation process a secret."
      ]
    },
    {
      name: "Spell Gem (Obsidian)",
      source: "OotA",
      page: 223,
      otherSources: [
        {
          source: "IMR",
          page: 95
        }
      ],
      rarity: "uncommon",
      reqAttune: "optional",
      wondrous: true,
      entries: [
        "An obsidian spell gem can contain one cantrip from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
        "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
        "An obsidian spell gem can only store cantrips. Cantrips cast from the spell gem have a save DC of 13 and an attack bonus of {@hit 5}.",
        "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
        "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
        "Deep gnomes created these magic gemstones and keep the creation process a secret."
      ]
    },
    {
      name: "Spell Scroll (2nd Level)",
      source: "DMG",
      page: 201,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Spell Scroll (Level 2)|XDMG"
      ],
      type: "SC|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
        "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 12. On a failed check, the spell disappears from the scroll with no other effect.",
        "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
        "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}.",
        "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a {@dc 12} Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
      ],
      spellScrollLevel: 2,
      lootTables: [
        "Magic Item Table A",
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spell Scroll (3rd Level)",
      source: "DMG",
      page: 202,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Spell Scroll (Level 3)|XDMG"
      ],
      type: "SC|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
        "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 13. On a failed check, the spell disappears from the scroll with no other effect.",
        "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
        "A spell cast from this scroll has a save DC of 15 and an attack bonus of {@hit 7}.",
        "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a {@dc 13} Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
      ],
      spellScrollLevel: 3,
      lootTables: [
        "Magic Item Table B"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spell Scroll (Level 2)",
      source: "XDMG",
      page: 305,
      freeRules2024: true,
      type: "SC|XPHB",
      rarity: "uncommon",
      entries: [
        "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn't lost.",
        "If the spell is on your spell list but of a higher level than you can normally cast, you make a {@dc 12} ability check using your spellcasting ability to determine whether you cast the spell. On a failed check, the spell disappears from the scroll with no other effect.",
        "If the spell requires a saving throw or an attack roll, the spell save DC is 13, and the attack bonus is {@hit 5}.",
        {
          type: "entries",
          name: "Copying a Scroll into a Spellbook",
          entries: [
            "A Wizard spell on a Spell Scroll can be copied into a spellbook. When a level 2 spell is copied in this way, the copier must succeed on a {@dc 12} Intelligence ({@skill Arcana|XPHB}). On a successful check, the spell is copied. Whether the check succeeds or fails, the Spell Scroll is destroyed."
          ]
        }
      ],
      spellScrollLevel: 2,
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Spell Scroll (Level 3)",
      source: "XDMG",
      page: 305,
      freeRules2024: true,
      type: "SC|XPHB",
      rarity: "uncommon",
      entries: [
        "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn't lost.",
        "If the spell is on your spell list but of a higher level than you can normally cast, you make a {@dc 13} ability check using your spellcasting ability to determine whether you cast the spell. On a failed check, the spell disappears from the scroll with no other effect.",
        "If the spell requires a saving throw or an attack roll, the spell save DC is 15, and the attack bonus is {@hit 7}.",
        {
          type: "entries",
          name: "Copying a Scroll into a Spellbook",
          entries: [
            "A Wizard spell on a Spell Scroll can be copied into a spellbook. When a level 3 spell is copied in this way, the copier must succeed on a {@dc 13} Intelligence ({@skill Arcana|XPHB}). On a successful check, the spell is copied. Whether the check succeeds or fails, the Spell Scroll is destroyed."
          ]
        }
      ],
      spellScrollLevel: 3,
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      miscTags: [
        "CNS"
      ],
      hasFluffImages: true
    },
    {
      name: "Spellpiercing Wand",
      source: "DoDk",
      page: 232,
      type: "WD|DMG",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      entries: [
        "You can use this wand as a spellcasting focus. Creatures making a saving throw against a spell cast using this wand can't gain benefit from advantage on their saving throws."
      ]
    },
    {
      name: "Spellwrought Tattoo (2nd Level)",
      source: "TCE",
      page: 135,
      rarity: "uncommon",
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo contains a single {@filter 2nd level spell|spells|level=2}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
        "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spellwrought Tattoo (3rd Level)",
      source: "TCE",
      page: 135,
      rarity: "uncommon",
      wondrous: true,
      tattoo: true,
      entries: [
        "Produced by a special needle, this magic tattoo contains a single {@filter 3rd level spell|spells|level=3}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
        "The Ability modifier for this spell is +4; the Save DC is 15 and the attack bonus is +7."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Spies' Murmur",
      source: "GGR",
      page: 181,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This headpiece, crafted from dark metal, is worn curved around the ear. If you know a creature wearing another Spies' Murmur and that creature is within 1 mile of you, you can communicate telepathically with each other. As a bonus action, you can allow that creature to hear everything you hear for 1 hour. You can end this effect as a bonus action, and it ends if you're {@condition incapacitated}."
      ]
    },
    {
      name: "Staff of the Adder",
      source: "DMG",
      page: 203,
      reprintedAs: [
        "Staff of the Adder|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a cleric, druid, or warlock",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "druid"
        },
        {
          class: "warlock"
        }
      ],
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
        "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.",
        "You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes {@damage 1d6} piercing damage and must succeed on a {@dc 15} Constitution saving throw or take {@damage 3d6} poison damage.",
        "The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Staff of the Adder",
      source: "XDMG",
      page: 310,
      type: "M|XPHB",
      rarity: "uncommon",
      reqAttune: true,
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
        "As a {@variantrule Bonus Action|XPHB}, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.",
        "When you take the {@action Attack|XPHB} action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your {@variantrule Proficiency|XPHB|Proficiency Bonus} and Wisdom modifier to the attack roll. On a hit, the target takes {@damage 1d6} Piercing damage and {@damage 3d6} Poison damage.",
        "The snake head can be attacked while it is animate. It has AC 15, HP 20, and {@variantrule Immunity|XPHB} to Poison and Psychic damage. If the head drops to 0 {@variantrule Hit Points|XPHB}, the staff is destroyed. As long as it's not destroyed, the staff regains all lost {@variantrule Hit Points|XPHB} when it reverts to its inanimate form."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Staff of the Python",
      source: "DMG",
      page: 204,
      srd: true,
      reprintedAs: [
        "Staff of the Python|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a cleric, druid, or warlock",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "druid"
        },
        {
          class: "warlock"
        }
      ],
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
        "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a {@creature giant constrictor snake} under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.",
        "On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't {@condition incapacitated}. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
        "If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Staff of the Python",
      source: "XDMG",
      page: 311,
      freeRules2024: true,
      type: "M|XPHB",
      rarity: "uncommon",
      reqAttune: true,
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
        "As a {@action Magic|XPHB} action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a {@creature Giant Constrictor Snake|XMM} in that space. The snake is under your control and shares your {@variantrule Initiative|XPHB} count, taking its turn immediately after yours.",
        "On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the {@condition Incapacitated|XPHB} condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.",
        "As a {@variantrule Bonus Action|XPHB}, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 {@variantrule Hit Points|XPHB}, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its {@variantrule Hit Points|XPHB}, it regains all of them."
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Stone of Good Luck",
      alias: [
        "Luckstone"
      ],
      source: "DMG",
      page: 205,
      srd: true,
      reprintedAs: [
        "Stone of Good Luck|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      bonusSavingThrow: "+1",
      bonusAbilityCheck: "+1",
      entries: [
        "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Stone of Good Luck",
      alias: [
        "Luckstone"
      ],
      source: "XDMG",
      page: 312,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      bonusSavingThrow: "+1",
      bonusAbilityCheck: "+1",
      entries: [
        "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
      ],
      lootTables: [
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Stone of Ill Luck",
      source: "TftYP",
      page: 229,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      weight: 1,
      bonusSavingThrow: "-2",
      bonusAbilityCheck: "-2",
      entries: [
        "This polished agate appears to be a {@item stone of good luck} to anyone who tries to identify it, and it confers that item's property while on your person.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This item is cursed. While it is on your person, you take a -2 penalty to ability checks and saving throws. Until the curse is discovered, the DM secretly applies this penalty, assuming you are adding the item's bonus. You are unwilling to part with the stone until the curse is broken with {@spell remove curse} or similar magic."
          ]
        }
      ]
    },
    {
      name: "Storm Boomerang",
      source: "PotA",
      page: 223,
      type: "R",
      rarity: "uncommon",
      weaponCategory: "simple",
      range: "60/120",
      dmg1: "1d4",
      dmgType: "B",
      entries: [
        "This boomerang is a ranged weapon carved from {@creature griffon} bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals {@damage 1d4} bludgeoning damage and {@damage 3d4} thunder damage, and the target must succeed on a {@dc 10} Constitution saving throw or be {@condition stunned} until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.",
        "Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node."
      ]
    },
    {
      name: "Thessaltoxin Antidote",
      source: "IMR",
      page: 95,
      type: "P",
      rarity: "uncommon",
      entries: [
        "This potion appears to change color and texture each time you look at it. When you drink the potion, it ends the {@spell polymorph} effect imposed by thessaltoxin."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Travel Alchemical Kit",
      source: "AI",
      page: 30,
      rarity: "uncommon",
      wondrous: true,
      grantsProficiency: true,
      entries: [
        "Also at rank 3, Head Office provides you with a travel alchemical kit—an uncommon magic item containing miniaturized versions of both {@item alchemist's supplies|phb} and a {@item poisoner's kit|phb} (glass vials, a mortar and pestle, chemicals, and a glass stirring rod). You gain proficiency with a {@item poisoner's kit|phb} as part of this upgrade.",
        "You can use this magical kit as long as it is on your person, with no need to draw or stow it. If you are ever searched, finding your travel alchemical kit requires a successful {@dc 20} Intelligence ({@skill Investigation}) or Wisdom ({@skill Insight}) check."
      ],
      hasFluffImages: true
    },
    {
      name: "Trident of Fish Command",
      source: "DMG",
      page: 209,
      srd: true,
      reprintedAs: [
        "Trident of Fish Command|XDMG"
      ],
      baseItem: "trident|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 4,
      weaponCategory: "martial",
      property: [
        "T",
        "V"
      ],
      range: "20/60",
      dmg1: "1d6",
      dmgType: "P",
      dmg2: "1d8",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast {@spell dominate beast} (save {@dc 15}) from it on a beast that has an innate swimming speed. The trident regains {@dice 1d3} expended charges daily at dawn."
      ],
      attachedSpells: [
        "dominate beast"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Trident of Fish Command",
      source: "XDMG",
      page: 317,
      freeRules2024: true,
      baseItem: "trident|xphb",
      type: "M|XPHB",
      rarity: "uncommon",
      reqAttune: true,
      weight: 4,
      weaponCategory: "martial",
      property: [
        "T|XPHB",
        "V|XPHB"
      ],
      mastery: [
        "Topple|XPHB"
      ],
      range: "20/60",
      dmg1: "1d8",
      dmgType: "P",
      dmg2: "1d10",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This magic weapon has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While you carry it, you can expend 1 charge to cast {@spell Dominate Beast|XPHB} (save {@dc 15}) from it on a Beast that has a {@variantrule Swim Speed|XPHB}."
      ],
      attachedSpells: [
        "dominate beast|xphb"
      ],
      lootTables: [
        "Armaments - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Uncommon Glamerweave",
      source: "ERLW",
      page: 277,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Glamerweave is clothing imbued with harmless illusory magic. While wearing these clothes, you can use a bonus action to create a moving illusory pattern within the cloth. Alternatively, you can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glamerweave hat might have illusory butterflies fluttering around it.",
        "When you make a Charisma ({@skill Performance}) or Charisma ({@skill Persuasion}) check while wearing the glamerweave, you can roll a {@dice d4} and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn."
      ]
    },
    {
      name: "Vanisher Hat",
      source: "ToB1-2023",
      page: 319,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This plain hat appears to be a rough burlap tam. A creature that can see through illusions sees the hat as a golden, bejeweled coronet. While wearing this hat, you can use an action to speak its command word to become invisible and gain a flying speed of 40 feet for up to 1 minute. Anything you are wearing or carrying is invisible with you. You remain invisible and capable of flying until you repeat the command word as an action or until you attack or cast a spell. Once used, the hat can't be used again until the next dawn."
      ]
    },
    {
      name: "Vanrak's Mithral Shirt",
      source: "WDMM",
      page: 237,
      baseItem: "chain shirt|phb",
      type: "MA",
      rarity: "uncommon",
      weight: 20,
      ac: 13,
      strength: null,
      stealth: false,
      entries: [
        "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity ({@skill Stealth}) checks or has a Strength requirement, the mithral version of the armor doesn't.",
        "While you wear this armor, you gain {@sense darkvision} out to a range of 60 feet."
      ]
    },
    {
      name: "Wand of Entangle",
      source: "TftYP",
      page: 229,
      type: "WD|DMG",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell entangle} spell (save {@dc 13}) from it.",
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
      ],
      attachedSpells: [
        "entangle"
      ]
    },
    {
      name: "Wand of Magic Detection",
      source: "DMG",
      page: 211,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Wand of Magic Detection|XDMG"
      ],
      type: "WD|DMG",
      tier: "minor",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the {@spell detect magic} spell from it. The wand regains {@dice 1d3} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect magic"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Magic Detection",
      source: "XDMG",
      page: 320,
      type: "WD|XDMG",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This wand has 3 charges. While holding it, you can expend 1 charge to cast {@spell Detect Magic|XPHB} from it. The wand regains {@dice 1d3} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      attachedSpells: [
        "detect magic|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Relics - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Magic Missiles",
      source: "DMG",
      page: 211,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Wand of Magic Missiles|XDMG"
      ],
      type: "WD|DMG",
      tier: "major",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the {@spell magic missile} spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
      ],
      attachedSpells: [
        "magic missile"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Magic Missiles",
      source: "XDMG",
      page: 320,
      freeRules2024: true,
      type: "WD|XDMG",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can expend no more than 3 charges to cast {@spell Magic Missile|XPHB} from it. For 1 charge, you cast the level 1 version of the spell. You can increase the spell's level by 1 for each additional charge you expend.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll {@dice 1d20}. On a 1, the wand crumbles into ashes and is destroyed."
          ]
        }
      ],
      attachedSpells: [
        "magic missile|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Secrets",
      source: "DMG",
      page: 211,
      srd: true,
      reprintedAs: [
        "Wand of Secrets|XDMG"
      ],
      type: "WD|DMG",
      tier: "minor",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains {@dice 1d3} expended charges daily at dawn."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table B"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Secrets",
      source: "XDMG",
      page: 322,
      type: "WD|XDMG",
      rarity: "uncommon",
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This wand has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While holding it, you can take a {@action Magic|XPHB} action to expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG",
        "Implements - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Silence",
      source: "GHLoE",
      page: 111,
      type: "WD|DMG",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can use an action to expend 1 charge to cast the {@spell silence} spell (save {@dc 15}). The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
      ],
      attachedSpells: [
        "silence"
      ]
    },
    {
      name: "Wand of Web",
      source: "DMG",
      page: 212,
      srd: true,
      reprintedAs: [
        "Wand of Web|XDMG"
      ],
      type: "WD|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell web} spell (save {@dc 15}) from it.",
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
      ],
      attachedSpells: [
        "web"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Wand of Web",
      source: "XDMG",
      page: 322,
      type: "WD|XDMG",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This wand has 7 charges. While holding it, you can expend 1 charge to cast {@spell Web|XPHB} (save {@dc 13}) from it.",
        {
          type: "entries",
          name: "Regaining Charges",
          entries: [
            "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll {@dice 1d20}. On a 1, the wand crumbles into ashes and is destroyed."
          ]
        }
      ],
      attachedSpells: [
        "web|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Wheel of Wind and Water",
      source: "ERLW",
      page: 280,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "When mounted at the helm of an elemental galleon or airship, this wheel allows a creature that possesses the Mark of Storm to telepathically control the elemental bound inside the vessel.",
        "If a wheel of wind and water is mounted on a mundane sailing ship, a creature with the Mark of Storm who is using the wheel can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour."
      ]
    },
    {
      name: "Wildspace Orrery",
      source: "AAG",
      page: 23,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location. In that display, a white, pulsating pinprick of light marks the orrery's location."
      ]
    },
    {
      name: "Wind Fan",
      source: "DMG",
      page: 213,
      srd: true,
      reprintedAs: [
        "Wind Fan|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While holding this fan, you can use an action to cast the {@spell gust of wind} spell (save {@dc 13}) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative {@chance 20} chance of not working and tearing into useless, nonmagical tatters."
      ],
      attachedSpells: [
        "gust of wind"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Wind Fan",
      source: "XDMG",
      page: 213,
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While holding this fan, you can cast {@spell Gust of Wind|XPHB} (save {@dc 13}) from it. Each subsequent time the fan is used before the next dawn, it has a cumulative {@chance 20} chance of not working; if the fan fails to work, it tears into useless, nonmagical tatters."
      ],
      attachedSpells: [
        "gust of wind|xphb"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Winged Boots",
      source: "DMG",
      page: 214,
      srd: true,
      reprintedAs: [
        "Winged Boots|XDMG"
      ],
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        equal: {
          fly: "walk"
        }
      },
      entries: [
        "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.",
        "The boots regain 2 hours of flying capability for every 12 hours they aren't in use."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Magic Item Table F"
      ],
      hasFluffImages: true
    },
    {
      name: "Winged Boots",
      source: "XDMG",
      page: 325,
      freeRules2024: true,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          fly: 30
        }
      },
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 4,
      entries: [
        "These boots have 4 charges and regain {@dice 1d4} expended charges daily at dawn. While wearing the boots, you can take a {@action Magic|XPHB} action to expend 1 charge, gaining a {@variantrule Fly Speed|XPHB} of 30 feet for 1 hour. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land."
      ],
      optionalfeatures: [
        "replicate magic item|tce"
      ],
      lootTables: [
        "Arcana - Uncommon|XDMG"
      ],
      hasFluffImages: true
    },
    {
      name: "Wingwear",
      source: "PotA",
      page: 223,
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      modifySpeed: {
        static: {
          fly: 30
        }
      },
      charges: 3,
      entries: [
        "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of wingwear has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.",
        "The suit regains all of its expended charges after spending at least 1 hour in an elemental air node."
      ]
    },
    {
      name: "Winter's Dark Bite",
      source: "HftT",
      page: 4,
      baseItem: "greatsword|phb",
      type: "M",
      rarity: "uncommon",
      weight: 6,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "2d6",
      dmgType: "S",
      bonusWeapon: "+1",
      entries: [
        "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
        "This greatsword is made of an unknown black metal. In most cases, it works as a {@item +1 greatsword}. But when used against a {@creature thessalhydra|hftt}, it works as a {@item +3 greatsword}. While in the Upside Down, it works as a +4 greatsword."
      ]
    },
    {
      name: "Witherbloom Primer",
      source: "SCC",
      page: 39,
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "The Witherbloom Primer is a magic textbook created at Strixhaven's Witherbloom College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill Nature}) or Wisdom ({@skill Survival}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
        "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
      ]
    }

  ] as Item[])
};
