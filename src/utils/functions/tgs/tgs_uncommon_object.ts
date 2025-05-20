import type {Item} from '../../../models/item.ts'

export default (): Promise<Item[]> => {
  return Promise.resolve( [
    {
      name: "Abjurer's Bangle (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 32,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "You can clasp or remove this metal bracelet around the wrist or ankle of yourself or a willing creature within your reach using an action. The bangle emits a ward of abjuration magic from it that has 30 hit points. A creature wearing the bangle can use its reaction when it takes damage to speak the bangle's command word, causing the magical ward to take the damage instead. Any excess damage carries over to the creature when the bangle's ward is reduced to 0 hit points, at which point the bangle becomes a nonmagical bracelet."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Abjurers-Bangle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Acorn Charm",
      source: "GriffonsSaddlebag2",
      page: 32,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small, polished acorn has been made into a magical bell that rings softly when moved. While wearing this charm, you have advantage on Charisma checks made to interact with plants, and you can communicate with plant creatures as if you shared a common language."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Acorn-Charm.webp"
            }
          }
        ]
      }
    },
    {
      name: "Alchemist's Potion Belt",
      source: "GriffonsSaddlebag2",
      page: 33,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This enchanted belt has two stoppers that magically resize to fit the mouth of any kind of bottle. The belt can carry up to two potions in this way. The belt can be worn comfortably around your waist or across your chest as a bandolier. While wearing the belt, any potion carried on it seems to magically unstopper and spring to your hand, allowing you to drink it as a bonus action. You can attach a bottle to the belt using an action.",
        "When you roll a 1 on a Dexterity saving throw or are hit by a critical hit, roll a {@dice d20}. On a 1, one of the bottles on the belt shatters and is destroyed."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Alchemists-Potion-Belt.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ambitious Medic's Box",
      source: "GriffonsSaddlebag2",
      page: 33,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 3,
      grantsProficiency: true,
      recharge: "dusk",
      rechargeAmount: 10,
      charges: 10,
      entries: [
        "This wooden box has two halves which are magically locked by ornamental clasps that can only be opened during certain times of the day. The box is 1 foot wide, 2 feet long, and weighs 3 pounds. You can open and use the box as normal, as described below, even if you aren't attuned to it.",
        "The left side is locked by a metal clasp decorated with a sun. From dawn until dusk, you can open the left side of the box, which contains the same contents and functions identically to a {@item healer's kit|PHB}. Each day at dusk, the left side of the box magically closes and regains all expended uses of its healer's kit.",
        "The right side is locked by a metal clasp decorated with a moon smoking a pipe. From dusk until dawn, you can open the right side of the box, which contains three pewter steins, a flask, and a wooden pipe. While holding the flask, you can use an action to speak its command word followed by either \"beer\", \"wine\", or \"whiskey\". When you do, the flask magically fills with up to 4 gallons of beer, 1 gallon of wine, or 8 ounces of liquor, depending on the chosen drink, which can be poured out as an action, up to 1 gallon per minute. Once this property of the flask has been used, it can't be used again until the next dusk. The wooden pipe is magically refilled with tobacco daily at dusk. Each day at dawn, the right side of the box magically closes, and anything removed from the box is magically returned to it.",
        "While attuned to the box, you are proficient in the {@skill Medicine} skill and can open either side of the box at any time. If you're already proficient in the {@skill Medicine} skill, your proficiency bonus is doubled for any ability check you make that uses that skill."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ambitous-Medics-Box_All.webp"
            }
          }
        ]
      }
    },
    {
      name: "Amulet of Buoyancy",
      source: "GriffonsSaddlebag2",
      page: 34,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This well-worn necklace is adorned with the bow of a ship and a crashing wave of blue glass. While wearing this amulet, you can use your reaction to immediately stand up when you're knocked {@condition prone}. When you do, your speed is halved until the end of your next turn. In addition, if you start your turn underwater with 0 hit points, you immediately rise 60 feet toward the surface."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Amulet-of-Buoyancy.webp"
            }
          }
        ]
      }
    },
    {
      name: "Angler's Armor",
      source: "GriffonsSaddlebag2",
      page: 36,
      baseItem: "scale mail|phb",
      type: "MA",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 45,
      ac: 14,
      modifySpeed: {
        static: {
          swim: 30
        }
      },
      stealth: true,
      entries: [
        "This magic armor was hand-made by a clan of proud fishers. The armor is made of countless hardened scales lining a reinforced leather jacket, making it a sturdy and weather proof option for sailors. While wearing this armor, you gain a swimming speed of 30 feet, and the normal and long ranges of nets are doubled for you. In addition, when you fish while wearing this armor, you catch twice as many fish as you normally would."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Anglers-Armor.webp"
            }
          }
        ]
      }
    },
    {
      name: "Angler's Worldly Fisher",
      source: "GriffonsSaddlebag2",
      page: 36,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This magic fishing rod can be used anywhere on the Material Plane to fish from the world's waters. While holding this fishing rod, you can use an action to speak its command word and cast it at a point you can see within 30 feet of you. When you do, the end of the line vanishes at the point and magically reappears somewhere else in the Material Plane in a random body of water. Despite not being able to see the end of the rod's line, you can still feel it being tugged at by the water's currents. Any fish you catch in this way reappear at the point where you cast the line. You have advantage on ability checks to catch fish while using this fishing rod."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Anglers-Worldly-Fisher.webp"
            }
          }
        ]
      }
    },
    {
      name: "Arcanist's Magnificent Magnifier",
      source: "GriffonsSaddlebag2",
      page: 38,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This magical magnifying glass helps deduce the arcane nature of items. While looking through the glass at an object within 1 foot of you, your proficiency bonus is doubled for any Intelligence ({@skill Arcana}) or Intelligence ({@skill Investigation}) check you make regarding that object's magical properties. In addition, you can speak the glass's command word as an action to cast the {@spell identify|PHB} spell from it, targeting an object with the spell that you can see through the glass within 1 foot of you. Each time you do, there is a cumulative {@chance 5|5 percent} chance that the glass shatters and is destroyed after casting the spell."
      ],
      attachedSpells: [
        "identify"
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Arcanists-Magnificent-Magnifier.webp"
            }
          }
        ]
      }
    },
    {
      name: "Astronomer's Boon",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This brass astrolabe has a glass back that sparkles softly when light shines through it. While looking through the glass at the night sky, the names and patterns of any constellation you can see appear alongside their stars on the astrolabe. At the GM's discretion, you may find one or more of the following constellations while looking through the glass. When you do, the astrolabe begins to glow, and you can use an action to speak the item's command word to gain the constellation's respective benefit:",
        {
          type: "entries",
          name: "The Drum",
          entries: [
            "3 stars appear on your back in the shape of a drum. When you roll for initiative, you can expend 1 of the stars as a reaction to grant you and any other friendly creature within 10 feet of you a +1 bonus to the roll. In addition, any creature that gains this bonus to initiative can use a bonus action on its first turn of combat to take either the {@action Dash} or {@action Disengage} action."
          ]
        },
        {
          type: "entries",
          name: "The Knight",
          entries: [
            "5 stars appear on your arm in the shape of a sword. When you hit with a melee attack, you can choose to expend 1 of the stars as part of the attack to cause the target to take an extra {@damage 1d4} radiant damage. Alternatively, if a friendly creature within 30 feet of you that you can see hits a target with a melee attack, you can use your reaction to expend 1 of the stars and empower the attack with light, causing the target to take an extra {@damage 1d4} radiant damage."
          ]
        },
        {
          type: "entries",
          name: "The Seer",
          entries: [
            "4 stars appear on your forehead in the shape of an eye. You can use a bonus action to expend 1 of the stars and touch a creature. Once within the next 10 minutes, that creature can choose to add {@dice 1d4} to an ability check or saving throw that it makes. It can choose to roll the die before or after making the ability check or saving throw."
          ]
        },
        "The stars remain until the next dusk, at which point any unused stars vanish and are lost. Once the astrolabe has granted a benefit in this way, it can't be used again until the next dusk."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Astronomers-Boon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "GV",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot).",
        "Multiple variations of this item exist, as listed below:",
        {
          type: "list",
          items: [
            "{@item Badge of the Savant (Abjuration)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Conjuration)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Divination)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Enchantment)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Evocation)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Illusion)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Necromancy)|GriffonsSaddlebag2}",
            "{@item Badge of the Savant (Transmutation)|GriffonsSaddlebag2}"
          ]
        }
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Conjuration)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Divination)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Enchantment)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Evocation)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Illusion)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Necromancy)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Badge of the Savant (Transmutation)",
      source: "GriffonsSaddlebag2",
      page: 40,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A {@i badge of the savant} is a platinum bookplate that can be magically affixed to a wizard's spellbook. Each badge features a design that represents a different school of magic. While a badge is attached to the cover of your spellbook, the gold and time you must spend to copy a spell of that badge's school of magic into your spellbook is halved. You can collect multiple of these plates and fit them onto the cover of your spellbook, allowing you to gain this benefit for multiple schools of magic at once.",
        "You can use an action to attach or remove a badge from a spellbook by expending a spell slot of a level equal to 1 plus the number of badges already on the book (a maximum of a 9th level spell slot)."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Badge-of-the-Savant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ballista Prosthesis",
      source: "GriffonsSaddlebag2",
      page: 41,
      baseItem: "hand crossbow|phb",
      type: "R",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a creature missing an arm, forearm, or hand",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "A",
        "L",
        "LD"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      bonusWeapon: "+1",
      entries: [
        "A {@i ballista prosthesis} is a magical weapon composed of numerous complex mechanical pieces that allow it to act as a functional prosthetic arm. You gain a +1 bonus to attack and damage rolls made with this magic weapon. This crossbow has an internal magazine that can hold up to 20 bolts. While there are bolts in the magazine, the crossbow does not have the loading property. It takes 1 minute to reload the magazine.",
        "The prosthesis attaches to your arm at the elbow or the shoulder, and it can't be removed against your will as long as you're attuned to it. To attune to this item, you must hold it against your arm for the entire attunement period. While attuned to the prosthesis, you can use an action to remove or reattach it.",
        "As a bonus action, you can retract the crossbow's limbs to the side of your hand or extend them from there. While retracted, the crossbow is concealed and functions identically to a normal hand. A creature can use an action to make a {@dc 13} Intelligence ({@skill Investigation}) check, identifying its crossbow components and determining that it's a concealed weapon on a success. While extended, you can use the weapon as if you were holding it, and you can't use that hand for other purposes."
      ],
      ammoType: "crossbow bolt|phb",
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ballista-Prosthesis.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bane Shield",
      source: "GriffonsSaddlebag2",
      page: 42,
      type: "S",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      ac: 2,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This classic iron shield is emblazoned with the skulllike face of a demon. The shield has 3 charges and regains {@dice 1d3} expended charges daily at dawn. When you take damage from a creature within 5 feet of you while holding this shield, you can use your reaction to expend 1 of its charges to curse that creature. The next time that creature makes an ability check or attack roll before the end of its next turn, it must roll a {@dice d4} and subtract the number rolled from the total."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bane-Shield.webp"
            }
          }
        ]
      }
    },
    {
      name: "Battlechef Field Dresser",
      source: "GriffonsSaddlebag2",
      page: 43,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
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
      entries: [
        "This sharp knife is enchanted with five fiery runes that magically heat its edge. Its sharp blade is intentionally designed to quickly prepare fresh cuts of meat from slain creatures. When you hit with an attack using this magic dagger, the target takes an extra {@damage 1d4} fire damage. In addition, when you reduce a living beast or monstrosity that you can see within 5 feet of you to 0 hit points using this weapon, you can quickly slice off a small, prime cut of its flesh (no action required), cooking it in the process. When you do, you gain 1 {@item Rations (1 day)|PHB|ration}."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Battlechef-Field-Dresser.webp"
            }
          }
        ]
      }
    },
    {
      name: "Beard Cannon",
      source: "GriffonsSaddlebag2",
      page: 43,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      weight: 1,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6}",
      charges: 6,
      entries: [
        "This item appears to be a wide, cylindrical hair cuff used for taming unruly hair. The cuff is 4 inches in height and diameter and weighs 1 pound. As part of attuning to the cuff, you must pull it onto your hair or beard, which must be at least one foot long in order to fit. When you finish attuning to the cuff, 6 smaller, spherical beads appear and weave themselves into the hair nearby.",
        "When you take the {@action Attack} action, you can forgo one of your attacks to point the hair cuff at a target within range and speak its command word. When you do, the cuff magically retracts any hair pulled through it and fires 1 of the smaller beads through its exposed opening. Make a ranged weapon attack using the magic cuff, which has a normal range of 15 feet and a long range of 30 feet. You are proficient with the attack. When fired, the spherical bead magically grows to become fist-sized, and it deals {@damage 2d6} bludgeoning damage on a hit.",
        "After the attack, the retracted hair magically reappears through the cuff, and the fired bead is lost. {@dice 1d6} fired beads magically reappear in your hair daily at dawn. When not in use as a weapon, the item is indistinguishable from a normal hair cuff."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Beard-Cannon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bloodhound Amulet",
      source: "GriffonsSaddlebag2",
      page: 45,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this pendant, you have advantage on any ability check that relies on smell. In addition, you can use an action to focus on a particular scent. When you do, you perceive that smell visually as a cloud of red vapor for up to 1 hour. Once this property of the amulet has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bloodhound-Amulet.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bloodmire Phiale",
      source: "GriffonsSaddlebag2",
      page: 47,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This shallow, ceramic drinking bowl is enchanted to repurpose spilled blood into new life. The bowl holds up to 8 ounces of blood. Once filled, the blood begins to slowly swirl on its own. If left to sit for 1 hour without spilling, the blood in the bowl becomes a gruesome tonic that pulses with a faint, internal glow.",
        "Drinking the entire bowl of still blood causes one of two effects. Roll a {@dice d12}. On a 12, you take 12 necrotic damage. If this damage reduces you to 0 hit points, you are stable. On a roll of 11 or lower, you instead regain a number of hit points equal 4 + the number rolled. The blood is thick and sweet, but leaves a bitter aftertaste.",
        "The blood's magic fades if it's poured from the bowl without being drunk. Once the bowl has been used in this way, it can't be used again until {@dice 1d4} days have passed."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bloodmire-Phiale.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bloodthirsty Bistoury",
      source: "GriffonsSaddlebag2",
      page: 48,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
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
        "This elegant, dark dagger is never bloodstained and effortlessly pierces flesh. You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
        "When this dagger is used by an evil-aligned creature, any creature hit by it doesn't bleed from the attack or the wound it leaves behind for 10 minutes."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bloodthirsty-Bistoury.webp"
            }
          }
        ]
      }
    },
    {
      name: "Book of Clothier's Croquis",
      source: "GriffonsSaddlebag2",
      page: 49,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This magic book has only the basic outline of a humanoid drawn on each of its pages. When found, the book has {@dice 2d6 + 8} remaining pages inside. If you spend at least 10 minutes drawing a detailed set of clothes on the outlined humanoid, the page becomes charged with magic. A creature holding a torn-out sheet of charged paper can use its action to speak the book's command phrase, causing the drawn clothes to either magically appear on its body or transform any similar, overlapping garment it's already wearing to match the new appearance. The sheet of paper then turns to dust and is destroyed. If the creature isn't humanoid, the clothes fit as best they can as determined by the GM.",
        "A transformed garment loses any magical or nonmagical property it may have until it returns to its normal form, unless that garment's function is completely unchanged by the new appearance. For example, a set of {@item plate armor|PHB} that's transformed into a leather vest would no longer grant any benefit to AC, but a {@item chain shirt|PHB} that's been transformed to match the ones worn by the royal guard still would.",
        "The drawn clothes and transformed garments remain for up to 4 hours but magically disappear or return to their normal form if you remove them or use an action to speak the command phrase again. The drawn clothes are physical but offer no benefits to AC. Although the drawn clothes and transformed garments can duplicate the appearance of other magic clothes, they don't gain their magical properties."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Book-of-Clothiers-Croquis.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bramble Buckler",
      source: "GriffonsSaddlebag2",
      page: 52,
      baseItem: "shield|phb",
      type: "S",
      tier: "major",
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
      weight: 6,
      ac: 2,
      entries: [
        "This twisting mass of tightly knotted thorns forms a functional buckler. Its thorny limbs move ever so slightly to defend against incoming attacks that might otherwise pierce it. When you don the shield, the vines grow harmlessly around the arm and hand that's holding it, preventing it from being unwillingly dropped or disarmed.",
        "As an action, you can speak the shield's command word and touch it to the ground at a point at your feet. When you do, you doff the shield as the vines release from your arm and rapidly grow across the ground, creating a visible line of thorns and brambles 20 feet long and 15 feet wide. The thorns recreate the effects of the {@spell spike growth|PHB} spell within that area, without requiring concentration, and last for the spell's duration. When it ends, the thorns coalesce back into the twisted shield. You can speak the shield's command word again as an action while you're within 5 feet of the thorny area to end the effect early, causing the vines to regrow onto your arm as you don the shield again. Once this property of the shield has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bramble-Buckler.webp"
            }
          }
        ]
      }
    },
    {
      name: "Brawler's Ring",
      source: "GriffonsSaddlebag2",
      page: 52,
      type: "RG|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "This brass ring has several splits in its metal that are filled with seams of jade. While wearing this ring, your unarmed strikes deal bludgeoning damage equal to {@dice 1d4} + your Strength modifier on a hit."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Brawlers-Ring.webp"
            }
          }
        ]
      }
    },
    {
      name: "Brutal Macuahuitl",
      source: "GriffonsSaddlebag2",
      page: 52,
      baseItem: "longsword|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "V"
      ],
      dmg1: "1d8",
      dmgType: "S",
      dmg2: "1d10",
      entries: [
        "This tribal sword's sturdy wooden frame is lined with obsidian shards, allowing attacks made with it to deal either bludgeoning or slashing damage (your choice). In addition, the sword has been enchanted through numerous blood rituals by war priests. When you roll a 20 on your attack roll with this magic weapon against a creature, that creature becomes marked for death until the start of your next turn. A marked creature can't regain hit points, and when the mark ends, that creature takes {@damage 1d8} necrotic damage."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Brutal-Macuahuitl.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bulette Bulwark",
      source: "GriffonsSaddlebag2",
      page: 53,
      baseItem: "shield|phb",
      type: "S",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      ac: 2,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This leather-wrapped shield was made from the armored body of a bulette and still retains some of its natural properties. While holding this shield, you have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
        "In addition, the shield has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While holding the shield, you can use a bonus action to speak the shield's command word and expend 1 of its charges. When you do, you gain {@sense tremorsense|MM} out to a range of 30 feet. This effect lasts as long as you concentrate (as if concentrating on a spell), to a maximum of 1 minute, or until you drop or stow the shield."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bulette-Bulwark.webp"
            }
          }
        ]
      }
    },
    {
      name: "Burrage's Collegiate Case",
      source: "GriffonsSaddlebag2",
      page: 54,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This lute case is made from a rich, dark wood and is decorated with 33 mithral stars along its lid, with its largest star along the top. The case has five compartments. Four of the case's compartments connect to an extradimensional space that allows it to hold numerous items while never weighing more than 7 pounds. You choose which compartment you access by holding one of the large star's five points whenever you open the lid. The smallest compartment can hold up to 7 {@item flute|PHB|flutes} or similar small instruments. The midsize compartment holds up to 3 large instruments, such as a {@item bagpipes|PHB|bagpipe}, {@item drum|PHB}, or {@item dulcimer|PHB}. The largest compartment holds up to 4 small stools and a music stand. The fourth compartment doesn't have a defined size, but can hold and categorize up to 60 sheets of written music. If you don't choose a compartment, the case automatically opens to the fifth one, which doesn't connect to an extradimensional space. The fifth compartment has enough room to hold a {@item lute|PHB} inside it.",
        "Retrieving an item from the case requires an action. If you place something other than an {@item musical instrument|PHB|instrument} or musical object within one of the case's extradimensional compartments, it magically appears next to the case again when you close the lid."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Burrages-Collegiate-Case.webp"
            }
          }
        ]
      }
    },
    {
      name: "Camper's Respite",
      source: "GriffonsSaddlebag2",
      page: 55,
      type: "RD|DMG",
      tier: "minor",
      rarity: "uncommon",
      weight: 3,
      entries: [
        "This rod weighs 3 pounds and has an iron brazier at its top and spike at its base. You can use a bonus action while holding the rod to speak its first command word and create a magical flame at its top. While lit, this rod functions as a burning torch. You can use a bonus action to speak its command word again to extinguish the flame.",
        "You can use an action to place the rod's brazier upside down on the ground in an unoccupied space and speak its second command word. When you do, the spike at the rod's other end begins to glow from within, revealing its subtle design as a tent. Over the course of 1 minute, the rod expands and magically unfurls a canvas from its top, creating a 5-foot-square opaque tent in its space with an entrance large enough for a Medium or smaller creature to comfortably fit. You choose the style, color, and quality of the tent each time you use this property. Regardless of its appearance, the tent can't be anything but a tent.",
        "Inside the tent is a square extradimensional dwelling, 15 feet on a side and 10 feet high, with the enlarged camper's respite supporting it at its center. The walls and ceiling are made of the same canvas as the tent, but the floor is made of smooth stone. The rod's enlarged brazier functions as a magical fireplace that can be lit or extinguished by speaking the rod's first command word. This fire gives off light and heat like a normal fire, but doesn't require oxygen or create smoke. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
        "The tent is immobile and remains for up to 12 hours, until you use an action to speak its second command word again to dismiss it, or until the tent collapses. Dealing 20 damage to the tent (AC 13) causes it to collapse. The tent is immune to poison and psychic damage. The tent reverts to a rod at the end of its duration, and anything inside the tent is forced into the nearest unoccupied space. When the tent becomes a rod again, this property of the rod can't be used again for 12 hours."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Campers-Respite.webp"
            }
          }
        ]
      }
    },
    {
      name: "Candleflame Bow",
      type: "GV|DMG",
      requires: [
        {
          name: "Hand Crossbow"
        },
        {
          name: "Heavy Crossbow"
        },
        {
          name: "Light Crossbow"
        },
        {
          name: "Light Repeating Crossbow"
        },
        {
          name: "Longbow"
        },
        {
          name: "Shortbow"
        }
      ],
      inherits: {
        namePrefix: "Candleflame ",
        source: "GriffonsSaddlebag2",
        page: 56,
        tier: "major",
        rarity: "uncommon",
        reqAttune: true,
        entries: [
          "Wrought from metal in the likeness of a brazier, this ranged weapon's grip has been covered in wax and has a simple candle positioned in front of where the arrow or bolt is fired from. The candle is magic and never runs out of wax, nor can it be removed from the weapon. You can use a bonus action to speak the weapon's command word to cause the candle to light itself, shedding light like a normal candle while ablaze. While the candle is lit, this magic weapon deals an extra 2 fire damage to any target it hits with a ranged attack. The candle's flame lasts until you use a bonus action to speak the command word again or until you drop or stow the weapon.",
          "If you roll the same number on both {@dice d20}s when you make a ranged attack roll with advantage or disadvantage using this weapon while its candle is lit, the ammunition becomes wreathed in a conflagration of uncontrollable flames. The arrow or bolt flies toward the target and explodes, destroying the ammunition and dealing {@damage 4d6} fire damage to the target (instead of the attack's normal damage), or half as much damage if the total of the attack roll was less than the target's AC. This fire ignites flammable objects within 5 feet of the target that aren't being worn or carried. This property can't be used again until the next dawn."
        ],
        lootTables: [
          "Magic Item Table F1|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 56,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
            }
          }
        ]
      },
      entries: [
        "Wrought from metal in the likeness of a brazier, this ranged weapon's grip has been covered in wax and has a simple candle positioned in front of where the arrow or bolt is fired from. The candle is magic and never runs out of wax, nor can it be removed from the weapon. You can use a bonus action to speak the weapon's command word to cause the candle to light itself, shedding light like a normal candle while ablaze. While the candle is lit, this magic weapon deals an extra 2 fire damage to any target it hits with a ranged attack. The candle's flame lasts until you use a bonus action to speak the command word again or until you drop or stow the weapon.",
        "If you roll the same number on both {@dice d20}s when you make a ranged attack roll with advantage or disadvantage using this weapon while its candle is lit, the ammunition becomes wreathed in a conflagration of uncontrollable flames. The arrow or bolt flies toward the target and explodes, destroying the ammunition and dealing {@damage 4d6} fire damage to the target (instead of the attack's normal damage), or half as much damage if the total of the attack roll was less than the target's AC. This fire ignites flammable objects within 5 feet of the target that aren't being worn or carried. This property can't be used again until the next dawn."
      ],
      variants: [
        {
          base: {
            name: "Hand Crossbow",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "R|XPHB",
            rarity: "none",
            weight: 3,
            value: 7500,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "L|XPHB",
              "LD|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            range: "30/120",
            dmg1: "1d6",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Candleflame Hand Crossbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "uncommon",
            weight: 3,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "L|XPHB",
              "LD|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            range: "30/120",
            dmg1: "1d6",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            entries: [],
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Heavy Crossbow",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "R|XPHB",
            rarity: "none",
            weight: 18,
            value: 5000,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "H|XPHB",
              "LD|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Push|XPHB"
            ],
            range: "100/400",
            dmg1: "1d10",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Candleflame Heavy Crossbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "uncommon",
            weight: 18,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "H|XPHB",
              "LD|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Push|XPHB"
            ],
            range: "100/400",
            dmg1: "1d10",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            entries: [],
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Light Crossbow",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "R|XPHB",
            rarity: "none",
            weight: 5,
            value: 2500,
            weaponCategory: "simple",
            property: [
              "A|XPHB",
              "LD|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Slow|XPHB"
            ],
            range: "80/320",
            dmg1: "1d8",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Candleflame Light Crossbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "uncommon",
            weight: 5,
            weaponCategory: "simple",
            property: [
              "A|XPHB",
              "LD|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Slow|XPHB"
            ],
            range: "80/320",
            dmg1: "1d8",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            ammoType: "bolt|xphb",
            entries: [],
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Light Repeating Crossbow",
            source: "OotA",
            page: 224,
            type: "R",
            rarity: "unknown",
            weight: 5,
            weaponCategory: "simple",
            property: [
              "A",
              "2H"
            ],
            range: "40/160",
            dmg1: "1d8",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            entries: [
              "This crossbow is fitted with a cartridge that can hold up to six crossbow bolts. It automatically reloads after firing until the cartridge runs out of ammunition. Reloading the cartridge takes an action."
            ],
            ammoType: "crossbow bolt|phb"
          },
          specificVariant: {
            name: "Candleflame Light Repeating Crossbow",
            source: "GriffonsSaddlebag2",
            type: "R",
            rarity: "uncommon",
            weight: 5,
            weaponCategory: "simple",
            property: [
              "A",
              "2H"
            ],
            range: "40/160",
            dmg1: "1d8",
            dmgType: "P",
            crossbow: true,
            weapon: true,
            entries: [
              "This crossbow is fitted with a cartridge that can hold up to six crossbow bolts. It automatically reloads after firing until the cartridge runs out of ammunition. Reloading the cartridge takes an action."
            ],
            ammoType: "crossbow bolt|phb",
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Longbow",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "R|XPHB",
            rarity: "none",
            weight: 2,
            value: 5000,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "H|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Slow|XPHB"
            ],
            range: "150/600",
            dmg1: "1d8",
            dmgType: "P",
            bow: true,
            weapon: true,
            ammoType: "arrow|xphb",
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Candleflame Longbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "uncommon",
            weight: 2,
            weaponCategory: "martial",
            property: [
              "A|XPHB",
              "H|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Slow|XPHB"
            ],
            range: "150/600",
            dmg1: "1d8",
            dmgType: "P",
            bow: true,
            weapon: true,
            ammoType: "arrow|xphb",
            entries: [],
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Shortbow",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "R|XPHB",
            rarity: "none",
            weight: 2,
            value: 2500,
            weaponCategory: "simple",
            property: [
              "A|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            range: "80/320",
            dmg1: "1d6",
            dmgType: "P",
            bow: true,
            weapon: true,
            ammoType: "arrow|xphb",
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Candleflame Shortbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "uncommon",
            weight: 2,
            weaponCategory: "simple",
            property: [
              "A|XPHB",
              "2H|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            range: "80/320",
            dmg1: "1d6",
            dmgType: "P",
            bow: true,
            weapon: true,
            ammoType: "arrow|xphb",
            entries: [],
            page: 56,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Candleflame-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Candleflame Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Canister of Vreyval's Soothing Tea",
      source: "GriffonsSaddlebag2",
      page: 56,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small metal canister contains {@dice 2d4 + 2} bags of magical tea when found. You can steep a bag of tea for 1 minute in a cup of boiling water to transform the water into a rich, flavorful tea that calms the nerves and revitalizes the spirit. When you drink a cup of the hot tea, you regain {@dice 1d6 + 2} hit points and gain the same amount as temporary hit points. In addition, any effect causing you to be {@condition charmed} or {@condition frightened} is suppressed for 1 hour, after which any suppressed effect resumes, provided that its duration hasn't expired in the meantime.",
        "You can drink the tea using an action, although it's most commonly finished over the course of at least 1 minute. If the tea has been left to cool before you drink it, you regain only half the amount of hit points and temporary hit points, and no other effects are suppressed."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Canister-of-Vreyvals-Soothing-Tea.webp"
            }
          }
        ]
      }
    },
    {
      name: "Celestial Sunrise (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 57,
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "The following {@item celestial sunrise|GriffonsSaddlebag2} is an uncommon variant with additional properties. It also tastes better.",
        "When you drink this potion, you can see normally in darkness, both magical and nonmagical, for the next 8 hours. In addition, the light cast from your mouth due to the potion's common effects increases, casting bright light out to 40 feet and dim light for an additional 40 feet instead."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Celestial-Sunrise.webp"
            }
          }
        ]
      }
    },
    {
      name: "Claymore of the Great Badger",
      source: "GriffonsSaddlebag2",
      page: 61,
      baseItem: "greatsword|phb",
      type: "M",
      tier: "major",
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
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This weighty blade carries with it the strength of the mighty badger. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The sword has 3 charges and regains all expended charges daily at dawn. When you hit a Large or smaller creature with this weapon, you can expend 1 charge from it to push that creature 5 feet away from you."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Claymore-of-the--Great-Badger.webp"
            }
          }
        ]
      }
    },
    {
      name: "Clockwork Earwig",
      source: "GriffonsSaddlebag2",
      page: 62,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This 1-inch-long, copper mechanism magically coils around and clasps to the side of your ear, fitting as a functional ear cuff. It can be worn or removed using an action. When worn in this way, the mechanism can magically process any sound you hear, granting you the following benefits:",
        {
          type: "list",
          items: [
            "You have advantage on Wisdom ({@skill Perception}) checks you make that rely on hearing.",
            "You can tap the earwig twice to record up to 1 minute of sound, tapping it twice again to stop recording early. You can tap the earwig once to replay the recording in your ear, tapping it a second time to stop it early. Pressing and holding your finger to the earwig while it's replaying the recording will pause the recording until you release your finger from it. Creating a new recording in this way erases any previous one stored.",
            "You can speak the earwig's command word as an action to cast the {@spell comprehend languages|PHB} spell from it. The spell ends early if you remove the earwig. This property of the earwig can't be used again until the next dawn."
          ]
        }
      ],
      attachedSpells: [
        "comprehend languages"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Clockwork-Earwig.webp"
            }
          }
        ]
      }
    },
    {
      name: "Clockwork Mend-A-Pillar",
      source: "GriffonsSaddlebag2",
      page: 62,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This segmented mechanical caterpillar is 5 inches long, weighs 1 pound, and is made of copper. It has several tiny copper legs that give it a 5-foot walking speed. Within it are multiple containers filled with silk filaments, spools of thread, dyes, and an incredibly strong adhesive. Each of these materials is expelled through a tube in its mouth, and it is equipped with a transmutation lens in its head that allows it to change the adhesive to various kinds of wood, metal, stone, or crystal.",
        "As an action, you can speak the caterpillar's command phrase to cause it to repair a broken or torn object or area that it's set upon. As long as the break or tear is no larger than 1 foot across in more than 1 dimension, the caterpillar can create the material to repair it. The caterpillar then begins crawling over and repairing the object or area, taking 10 minutes for every cubic foot it repairs (minimum of 1 minute). The caterpillar can physically repair a magic item or construct, but can't restore magic to such an object. After the caterpillar finishes repairing an object or area, it stops moving and makes a soft chirping sound audible out to 30 feet. Once the caterpillar repairs 10 cubic feet of material, it can't be used again until 24 hours have passed.",
        "The caterpillar is considered a magical object and is not a creature. It has AC 10, 15 hit points, and has resistance to all damage types. If the {@spell mending|PHB} spell is cast on the caterpillar while it has at least 1 hit point, it regains {@dice 2d6} hit points. If the caterpillar drops to 0 hit points, it can't be used again for 24 hours, at which point it regains all its hit points."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Clockwork-Mend-A-Pillar.webp"
            }
          }
        ]
      }
    },
    {
      name: "Club of Dancing",
      source: "GriffonsSaddlebag2",
      page: 63,
      baseItem: "club|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L"
      ],
      dmg1: "1d4",
      dmgType: "B",
      recharge: "dusk",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This metallic club emits prismatic flashes of light whenever it hits a target. While you're holding this weapon, you can use an action to cast the dancing lights spell from it. In addition, the club has 3 charges and regains {@dice 1d3} expended charges daily at dusk. When you hit with an attack using this weapon, you can expend 1 of its charges to deal an extra {@damage 1d6} thunder damage. If the target is a creature, it must also make a DC 13 Wisdom saving throw. On a failed save, that creature's speed becomes 0 until the start of your next turn, and it spends its action on its next turn dancing in place: shuffling, tapping its feet, and capering."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Club-of-Dancing.webp"
            }
          }
        ]
      }
    },
    {
      name: "Club of the Forest Drake",
      source: "GriffonsSaddlebag2",
      page: 63,
      baseItem: "club|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L"
      ],
      dmg1: "1d4",
      dmgType: "B",
      entries: [
        "This wooden club's head has been naturally formed into the shape of a dragon's maw. As an action, you can speak the club's command word and strike the ground with it to cause a wave of thorns and thrashing vines to spring up from the ground in a 15-foot cone in front of you. Each creature in the area must succeed on a DC 13 Dexterity saving throw or take {@damage 2d6} slashing damage and be {@condition grappled} by the thorns and vines for up to 1 minute. A {@condition grappled} creature can use its action to make a DC 13 Strength or Dexterity check, freeing itself on a success. At the end of each of its turns, a {@condition grappled} creature takes {@damage 1d6} piercing damage as it's constricted by the thorny vines. Once this property of the club has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Club-of-the-Forest-Drake.webp"
            }
          }
        ]
      }
    },
    {
      name: "Club of the Rook",
      source: "GriffonsSaddlebag2",
      page: 63,
      baseItem: "club|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L"
      ],
      dmg1: "1d4",
      dmgType: "B",
      entries: [
        "This club is a magic weapon and has a weighty stone tower at its end. While holding the weapon, you can use an action to move up to 30 feet in a line to an unoccupied space you can see on the ground, barreling through creatures no more than one size larger than you and objects that weigh no more than 400 pounds in the line. This movement doesn't provoke opportunity attacks and ignores {@quickref difficult terrain||3}. Each target in the line you barrel through must make a DC 13 Strength saving throw. On a failed save, a target takes {@damage 3d4} bludgeoning damage and is knocked {@condition prone}. On a successful save, a target takes half as much damage and isn't knocked {@condition prone}. If a target in the line is a structure or is too large or heavy to barrel through, it automatically succeeds on the saving throw and your movement ends early. Your movement also ends early if you attempt to move over a space in which you normally can't, such as over a gorge or up a wall.",
        "The club's property can't be used again until the next dawn. In the meantime, the club can still be used as a magic weapon."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Club-of-the-Rook.webp"
            }
          }
        ]
      }
    },
    {
      name: "Courtesan's Fanblade",
      source: "GriffonsSaddlebag2",
      page: 65,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This magic dagger is made of two hollow halves that can be opened with a flick of a small lever above its handle. Opening the dagger in this way reveals a beautiful paper fan that spreads out between the weapon's two halves (no action required). While the fan is exposed, you can't use this weapon to attack. You can close the fan and recombine the dagger's halves again as a bonus action.",
        "This dagger has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While the fan is exposed, you can use an action to cover your face with it and expend 1 of its charges to cast the {@spell charm person|PHB} spell (save DC 13) at 1st level. You can increase the spell slot level by one for each additional charge you expend."
      ],
      attachedSpells: [
        "charm person"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Courtesans-Fanblade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Covolt Dagger",
      source: "GriffonsSaddlebag2",
      page: 66,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
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
      entries: [
        "This angular dagger is forged with covolt, an elemental blue metal that carries storm-like properties. When you score a critical hit against a target with an attack made with this magic weapon, the target takes an extra {@damage 1d8} lightning damage and can't take reactions until the start of its next turn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Covolt-Dagger.webp"
            }
          }
        ]
      }
    },
    {
      name: "Cuff of Captions",
      source: "GriffonsSaddlebag2",
      page: 67,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this platinum ear cuff, any audible sound or spoken language that you're within earshot of is magically transcribed, appearing as unobtrusive, illusory text that only you can see in the corner of your vision. While wearing the cuff, you gain a +2 bonus to Wisdom ({@skill Perception}) checks that rely on hearing, even if you're {@condition deafened}, as you can sometimes read the transcriptions of sounds that are otherwise inaudible. The transcriptions are written in {@language Common}, and vary in size and form depending on the nature of the sound. The text conveys the literal meaning of any spoken language that it transcribes, but can suggest similar {@language Common} idioms in place of the ones it translates from other languages. You can choose to ignore certain sounds and transcriptions, causing the text to vanish, in order to better focus on the ones you're interested in."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Cuff-of-Captions.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dagger of First Light",
      source: "GriffonsSaddlebag2",
      page: 68,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
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
      entries: [
        "You have advantage on initiative rolls while holding this weapon. If you're first in the initiative order, your speed is increased by 15 feet for the first round of combat.",
        "In addition, you can use a bonus action to speak the weapon's command word to cause its blade to glow. The glowing weapon sheds bright light in a 20-foot radius and dim light for an additional 20 feet. While the weapon is glowing, it deals radiant damage instead of piercing. You can use a bonus action to speak the weapon's command word again to cause its light to fade and return to normal."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dagger-of-First-Light.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dark Mantle",
      source: "GriffonsSaddlebag2",
      page: 68,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This leathery cloak is made from the remains of a darkmantle. While wearing it, climbing doesn't cost you extra movement, and you have advantage on Strength ({@skill Athletics}) check made to climb.",
        "In addition, while wearing this cloak, you can use an action to speak its command word to emit an aura of magical darkness. This aura extends from you in a 15-foot radius, moves with you, and spreads around corners. The darkness lasts as long as you maintain concentration (as if concentrating on a spell), up to 1 minute. A creature with {@sense darkvision} can't see through this darkness, and nonmagical light can't illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled. Once this property of the cloak has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dark-Mantle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Detective's Notebook",
      source: "GriffonsSaddlebag2",
      page: 70,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This worn notebook is filled with pages of scribbled notes, addendums, and sketches—many of which seem to be added by different sources. While holding the book, whenever you make an Intelligence ({@skill Investigation}) or Wisdom ({@skill Insight}) check, you gain a +1 bonus to the roll. If you spend at least 10 minutes investigating or interacting with the subject of these checks while writing notes in the book, you make the roll with advantage.",
        "In addition, you can use an action to cast the {@spell comprehend languages}, {@spell detect thoughts}, or {@spell locate object} spell from the book (save DC 13). Once the book has been used to cast one of these spells, it shouldn't be used to cast a spell again in this way until the next dawn. Each time it is used again before then, the book has a cumulative {@chance 20|20 percent} chance of not working and tearing into useless, nonmagical tatters."
      ],
      attachedSpells: [
        "comprehend languages",
        "detect thoughts",
        "locate object"
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Detectives-Notebook.webp"
            }
          }
        ]
      }
    },
    {
      name: "Direstone Dwarven Key",
      source: "GriffonsSaddlebag2",
      page: 70,
      baseItem: "handaxe|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a dwarf",
      reqAttuneTags: [
        {
          race: "dwarf"
        }
      ],
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L",
        "T"
      ],
      range: "20/60",
      dmg1: "1d6",
      dmgType: "S",
      bonusWeapon: "+1",
      entries: [
        "This dwarven handaxe is specially issued to guards of the Direstone mines, treasury, and prisons. You gain a +1 bonus to attack and damage rolls made with this magic weapon. If it hits a stone object, the hit is automatically a critical hit.",
        "In addition, you can use an action to speak the handaxe's command word and strike a fixed stone surface with it, such as a wall or ceiling. If the surface is no more than 2 feet thick, it magically pulls apart to form a temporary doorway. The doorway is no more than 5 feet across in any dimension and closes at the end of your next turn, leaving no trace of it behind. The passage creates no instability in a structure surrounding it. When the opening disappears, any creatures or objects still in the doorway created by the handaxe are ejected to an unoccupied space on a random side of the stone surface and take {@damage 1d6} bludgeoning damage. Once this property has been used, it can't be used again until 12 hours have passed."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Direstone-Dwarven-Key.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dominic's Field Guide to Language",
      source: "GriffonsSaddlebag2",
      page: 71,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This magical book is filled with strange, shifting writing. While holding the book, you can use an action to speak its command word followed by a language of your choice, causing the book's pages to become filled with translations between {@language Common} and the language you chose. This property can't be used again for 24 hours. When found, the book's pages are filled with translations for a random language.",
        "You can read the book over the course of 1 hour, which can be done during a short rest. When you finish reading, you can magically speak, read, and write the chosen language for 24 hours. Only one creature can read from the book at a time."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dominics-Field-Guide-to-Language.webp"
            }
          }
        ]
      }
    },
    {
      name: "Doubloon Diver's Goggles",
      source: "GriffonsSaddlebag2",
      page: 72,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These leather and shell-covered goggles have peculiarly narrow lenses. While wearing the goggles, you have {@sense darkvision} out to a range of 120 feet while underwater. In addition, you have advantage on Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks you make that rely on sight while underwater."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Doubloon-Divers-Goggles.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dramus's Dancing Shoes",
      source: "GriffonsSaddlebag2",
      page: 74,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      focus: [
        "Bard"
      ],
      entries: [
        "These comfortable, wine-dark slippers give confidence in your dancing abilities. Even if you aren't attuned to the shoes, you have advantage on ability checks made to dance while wearing them. If you are attuned to the shoes while wearing them, you can cause musical notes to play from them whenever you take a step, as if they were instruments, allowing you to use your feet as a spellcasting focus for your bard spells. Ability checks made to dance in this way are made separately from ones made to play music."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dramus-Dancing-Shoes.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dusk Dagger (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 76,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
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
      entries: [
        "This delicately curved dagger is ornamented with several crescent moon designs. When you hit a creature who is completely in dim light or darkness with this magic weapon, that creature takes an extra {@damage 1d4} psychic damage."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dusk-Dagger.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ear Cuff of the Climber",
      source: "GriffonsSaddlebag2",
      page: 76,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This brass ear cuff hangs off the side of your ear and dangles several polished spheres of jet from fine chains. While wearing the cuff, whenever you make an ability check to climb, you can treat a {@dice d20} roll of 7 or lower as an 8."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ear-Cuff-of-the-Climber.webp"
            }
          }
        ]
      }
    },
    {
      name: "Eclipse Spear",
      source: "GriffonsSaddlebag2",
      page: 76,
      baseItem: "spear|phb",
      type: "M",
      tier: "major",
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
      entries: [
        "When in moonlight, this magic spear casts bright light in a 15-foot radius and dim light for an additional 15 feet. This spear pierces through darkness to find its marks, allowing the attacks you make with it against targets obscured by magical darkness to be made without the disadvantage normally imposed by magical darkness. Attacks made with this weapon deal either piercing or slashing damage (your choice).",
        "In addition, while holding the spear, you can use a bonus action to cast the {@spell branding smite|PHB} spell from it. Once cast in this way, this property can't be used again until the next dusk."
      ],
      attachedSpells: [
        "branding smite"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Eclipse-Spear.webp"
            }
          }
        ]
      }
    },
    {
      name: "Egg of Primal Water",
      source: "GriffonsSaddlebag2",
      page: 76,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This glass egg is filled with 1 ounce of enchanted water from the Elemental Plane of Water. You can use an action to throw the egg at a point that you can see within 30 feet of you. The egg shatters at the point and creates a special pool of water up to 40 feet in diameter centered on the point. The surface of the pool is an entrance to a demiplane that's 20 feet deep and is always filled with water from the Elemental Plane. The water is potable and can be carried from the pool, but otherwise does not spill forth from it regardless of its placement. The pool remains for 24 hours, at which point anything left in the water is shunted out."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Egg-of-Primal-Water.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ehagan's Moving Ladder",
      source: "GriffonsSaddlebag2",
      page: 77,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small, square platform is 2 feet across, weighs 4 pounds, and can hold up to 400 pounds. While standing on the platform, you can use a bonus action to speak its command word to cause it to move up to 30 feet up or down, or half that much if it's carrying more than 200 pounds. The platform can hover up to 60 feet in the air in this way, and can't be moved horizontally except by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if you were climbing.",
        "When the platform's property has been used for a total of 10 minutes, its magic ceases to function until the next dawn. When its magic ends in this way, the platform floats gently to the ground if it is still aloft."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ehagans-Moving-Ladder.webp"
            }
          }
        ]
      }
    },
    {
      name: "Evoker's Exchange",
      source: "GriffonsSaddlebag2",
      page: 78,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      focus: true,
      entries: [
        "While wearing this amulet, you can choose to convert the damage from one form of raw energy to another. You can use this amulet as a spellcasting focus when you cast a spell of 1st-level or higher that deals only fire or lightning damage and doesn't require concentration. When you do, you can choose to have the spell deal lightning damage if it originally dealt fire, or fire damage if it originally dealt lightning.",
        "If a spell that deals fire damage would normally ignite flammable objects that aren't being worn or carried, it does not if it's converted to lightning damage in this way. However, a spell that deals lightning damage does ignite such objects if it's converted to deal fire damage instead."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Evokers-Exchange.webp"
            }
          }
        ]
      }
    },
    {
      name: "Eyedrops of Clarity",
      source: "GriffonsSaddlebag2",
      page: 79,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This eyedropper is stoppered with a cork at the opening of its spherical top, which is designed in the likeness of an eye. When found, the eyedropper contains {@dice 1d4 + 2} doses of magical solution. When uncorked, the solution inside begins to drip from the eyedropper. A creature can use its action to uncork and apply 1 dose of the eyedrops to itself or another willing creature that it can see within reach, stoppering the eyedropper again once finished. A {@condition blinded} creature that has eyes and receives a dose of the eyedrops ceases to be {@condition blinded}. In addition, that creature gains {@sense darkvision} out to a range of 30 feet and has advantage on Wisdom ({@skill Perception}) checks that rely on sight for 1 hour. If the creature already has {@sense darkvision}, its range increases by 30 feet for the duration."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Eyedrops-of-Clarity.webp"
            }
          }
        ]
      }
    },
    {
      name: "Eyes of the Beheld",
      source: "GriffonsSaddlebag2",
      page: 79,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These button-sized metal trinkets typically come in sets of two and resemble the fearsome visage of a one-eyed monster. As an action, you can place one firmly on a solid surface—such as a wall, table, or boot—where it remains until destroyed. While you're within 5 feet of one, you can use a bonus action to speak the command word to cause its eye to open. The opening is about the size of a keyhole, and by peering through it, you can open and see through another eye's opening of your choice. You choose which eye to look through the first time you peer into the hole and can change it again using a bonus action.",
        "The eyes you can choose to see through in this way must be a part of the set, be placed on a solid surface, and be on the same plane of existence as the one you're looking through. You can only see through one eye at a time, which operates both ways, and nothing can pass through the hole. If another eye attempts to look through one you're already using, the connection between the first two ends and is replaced by the new one. An eye closes when it's no longer being looked through.",
        "Each eye has AC 10 and 5 hit points. If it drops to 0 hit points, the eye is destroyed. If a target or area is immune to divination magic or can't be perceived through {@spell scrying|PHB} sensors, it doesn't appear through the hole. If you find another eye of the beheld, you can connect it to an existing set by holding it against another eye from the set for 1 minute."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Eyes-of-the-Beheld.webp"
            }
          }
        ]
      }
    },
    {
      name: "Felling Greataxe",
      source: "GriffonsSaddlebag2",
      page: 81,
      baseItem: "greataxe|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 7,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "1d12",
      dmgType: "S",
      entries: [
        "This large axe has felled thousands of trees since its creation, giving it a ring-like pattern on its blade and a unique enchantment. As an action, you can speak the axe's command word and swing it to cause a large, spectral tree to fall down in a line 60 feet long and 5 feet wide. Each creature in the area must make a DC 13 Dexterity saving throw. On a failure, a creature takes {@damage 3d6} bludgeoning damage and is knocked {@condition prone}. On a success, a creature takes half as much damage and isn't knocked {@condition prone}. The spectral tree vanishes immediately after the effect. This property can't be used again until the next dawn. In the meantime, the axe can still be used as a magic weapon.",
        "In addition, you have advantage on any ability check you make to cut down a tree when you're using the axe to chop it down."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Felling-Greataxe.webp"
            }
          }
        ]
      }
    },
    {
      name: "Feywatch Shield",
      source: "GriffonsSaddlebag2",
      page: 81,
      baseItem: "shield|phb",
      type: "S",
      tier: "major",
      rarity: "uncommon",
      weight: 6,
      ac: 2,
      entries: [
        "This metal shield of elven make is a classic gift to allies of the fey. While holding it, you gain a +5 bonus to ability checks made to identify or perceive illusions and on saving throws against becoming {@condition charmed}."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Feywatch-Shield.webp"
            }
          }
        ]
      }
    },
    {
      name: "Feywood Ivy",
      source: "GriffonsSaddlebag2",
      page: 81,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a druid, ranger, or fey creature",
      reqAttuneTags: [
        {
          class: "druid"
        },
        {
          class: "ranger"
        },
        {
          creatureType: "fey"
        }
      ],
      wondrous: true,
      focus: true,
      entries: [
        "This tiny seed has a glowing rune on its shell. While holding the seed against a weapon or similar held object, you can speak its first command word as an action to cause the seed to sprout and cover the object with green and purple vines. The vines form a comfortable grip with which to hold the object and also create a protective cover for it, such as a sheath or carrying case, that automatically stows the object while it isn't being held, unless you decide for it not to. You can use an action to speak the first command word again to cause the vines to retreat from the object and return to the seed.",
        "While an object is covered by the vines, you can't be disarmed of that object unless you are {@condition incapacitated}. In addition, the object can be used as a spellcasting focus for you.",
        "While the vine-covered object is on your person, you can use a bonus action to speak the vines' second command word to cause them to lash out at a Medium or smaller target that you can see within 5 feet of you. The target must succeed on a DC 13 Dexterity saving throw or be {@condition grappled} for 1 minute. While {@condition grappled}, the target is {@condition restrained} and can use an action on each of its turns to make a DC 13 Strength or Dexterity check (its choice), freeing itself and ending the effect on a success. The effect ends early and frees the target if you move more than 5 feet away from it. Once this property has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Feywood-Ivy.webp"
            }
          }
        ]
      }
    },
    {
      name: "Fists of the Guiding Star",
      source: "GriffonsSaddlebag2",
      page: 81,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a monk",
      reqAttuneTags: [
        {
          class: "monk"
        }
      ],
      wondrous: true,
      entries: [
        "Stars and celestial bodies glimmer through these hand wrappings. While wearing these wraps over your hands, you can use a bonus action to spend 1 ki point to cause small motes of starlight to guide a creature you can see within 30 feet of you, giving it advantage on the next attack roll it makes before the end of your next turn. If that creature's next attack hits, the attack deals extra radiant damage equal to your Martial Arts die + your Wisdom modifier (minimum of 1).",
        "In addition, you can use an action to cast the {@spell light|PHB} cantrip while wearing these wraps."
      ],
      attachedSpells: [
        "light"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Fists-of-the-Guiding-Star.webp"
            }
          }
        ]
      }
    },
    {
      name: "Flamebreather Staff",
      source: "GriffonsSaddlebag2",
      page: 82,
      baseItem: "quarterstaff|phb",
      type: "M",
      tier: "major",
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
      entries: [
        "This red, hollow quarterstaff releases a plume of fire when spun. When you hit with an attack using this magic weapon, the target takes an extra {@damage 1d4} fire damage.",
        "In addition, while holding the quarterstaff, you can speak its command word as an action to cause it to release a gout of flame from its end, duplicating the effect of the {@spell burning hands|PHB} spell (save DC 13). This property of the quarterstaff can't be used again until the next dawn."
      ],
      attachedSpells: [
        "burning hands"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Flamebreather-Staff.webp"
            }
          }
        ]
      }
    },
    {
      name: "Flood Pauldron",
      source: "GriffonsSaddlebag2",
      page: 82,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This jewel-encrusted pauldron has the distinct appearance of a large conch shell. While wearing this pauldron, you can breathe underwater, and you have a swimming speed of 30 feet.",
        "While worn, the pauldron releases a thin veil of illusory water, creating a small, watery cape behind you. While wearing it, you can use an action to speak its command word to cause the water to become real. When you do, the water pours from the shell in a flooding torrent that extends from you to form a 10-footradius, 20-foot-high cylinder of water that moves with you and remains centered on the ground beneath you. The cylinder lasts as long as you concentrate (as if concentrating on a spell), up to 10 minutes. However, if you move in such a way that causes you to leave the cylinder, such as by swimming upward and climbing out of it, the effect ends.",
        "Any creature other than you in the cylinder when it appears must make a DC 13 Strength saving throw. On a failed save, a creature takes {@damage 4d6} bludgeoning damage and is pushed away from you to the nearest unoccupied space outside of the cylinder. On a successful save, a creature takes half as much damage and isn't pushed.",
        "Once this property of the pauldron has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Flood-Pauldron.webp"
            }
          }
        ]
      }
    },
    {
      name: "Focus Circlet",
      source: "GriffonsSaddlebag2",
      page: 82,
      type: "",
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
        "While wearing this silver circlet, you gain a bonus to Constitution saving throws that you make to maintain your concentration on a spell you cast equal to the spell's level, up to a maximum of +3."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Focus-Circlet.webp"
            }
          }
        ]
      }
    },
    {
      name: "Forgekeeper's Spark",
      source: "GriffonsSaddlebag2",
      page: 84,
      type: "",
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      sentient: true,
      entries: [
        "A lingering fragment of a fire spirit remains attached to this piece of coal, keeping it covered in harmless blue embers that are pleasantly warm to the touch. When surrounded by fire, the coal burns with a magical blue flame and the spirit within it emerges. The spirit remains until the fire goes out or is doused, at which point the spirit hides within its coal until immersed in flames once more. If removed from the fire, the spirit moves with the burning coal and remains for up to 1 minute.",
        "While the spirit is present, it helps tend to the fire it's placed in. The spirit can maintain a fire that fills up to a 5-foot cube. A fire tended to by the spirit gains the following benefits:",
        {
          type: "list",
          items: [
            "It can't be extinguished by strong winds.",
            "It produces no smoke, unless you want it to.",
            "It burns for twice the normal duration with the same amount of fuel.",
            "Any food being cooked in the fire is kept at an ideal temperature."
          ]
        },
        "In addition, you have advantage on any ability check you make that uses either {@item cook's utensils|PHB} or {@item glassblower's tools|PHB|glassblower's}, {@item smith's tools|PHB|smith's}, or {@item tinker's tools|PHB} to heat and craft items in the fire. If you roll a 15 or higher on the {@dice d20}, the time it takes to use the tools in this way is halved.",
        {
          type: "entries",
          name: "Sentience",
          entries: [
            "The forgekeeper's spark is a sentient lawful neutral item with an Intelligence of 1, a Wisdom of 6, and a Charisma of 1. It is immune to fire damage and has hearing and {@sense darkvision} out to a range of 60 feet. It can't speak or read, but understands {@language Common} and {@language Primordial||Ignan}."
          ]
        },
        {
          type: "entries",
          name: "Personality",
          entries: [
            "The forgekeeper's spark is happiest in the fires of a forge, but also enjoys maintaining campfires. It is strict with the boundaries of its fire, preventing it from spreading uncontrollably, and is resourceful with how it manages any fuel that it's given. It enjoys assisting with tasks, such as cooking and metalworking, and snaps and pops with excited sparks when given something new to heat up."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Forgekeepers-Spark.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gauntlets of Deliverance",
      source: "GriffonsSaddlebag2",
      page: 87,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a paladin",
      reqAttuneTags: [
        {
          class: "paladin"
        }
      ],
      wondrous: true,
      entries: [
        "These silver gauntlets are inscribed with powerful sigils that absorb malady and infection. When you magically cure a creature of {@condition blinded|PHB|blindness}, {@condition deafened|PHB|deafness}, disease, or poison while wearing these gauntlets, you can choose to have the sigils on the gauntlets contain the condition instead of destroying it outright. While the gauntlets contain a condition in this way, you can use a bonus action to touch a creature and force it to make a DC 13 Constitution saving throw. On a failed save, the target suffers the effects of the stored condition until the end of your next turn, as the condition is passed from the gauntlets into it. Whether the creature succeeds or fails the saving throw, the stored condition is then lost from the gauntlets.",
        "The gauntlets can only hold one condition at a time. Any contained condition is lost if you contain another one in order to make room for the new condition."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gauntlets-of-Deliverance.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gelatinous Whip",
      source: "GriffonsSaddlebag2",
      page: 87,
      baseItem: "whip|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "R"
      ],
      dmg1: "1d4",
      dmgType: "S",
      entries: [
        "This whip was pulled from the ooze of a gelatinous cube. When motionless, the whip appears to be a sword hilt with a blob of ooze at its end. When you attack with this magic weapon, the ooze extends elastically to form the length of the whip. This whip adds 10 feet to your reach when you attack with it, instead of 5. Targets hit by this weapon are marked with an acidic residue. At the start of each of your turns, any marked target takes {@damage 1d4} acid damage, and the acidic residue disappears.",
        "While you are attuned to this weapon, its ooze is harmless to you."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gelatinous-Whip.webp"
            }
          }
        ]
      }
    },
    {
      name: "Glass Carver",
      source: "GriffonsSaddlebag2",
      page: 89,
      baseItem: "dagger|phb",
      type: "M",
      tier: "minor",
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
      entries: [
        "This magic dagger's edge is lined with a sharp, enchanted crystal that magically pierces through glass. While holding the dagger, you can use an action to cut a straight line up to 1 foot long into a piece of nonmagical glass no more than 1 inch thick. Each line emits a faint glow, allowing you to see any lines you've made. Making these lines requires you to focus, as if concentrating on a spell. Your concentration ends early if you are no longer holding the dagger or aren't within reach of the glass. When your concentration ends, any line you made with the dagger magically vanishes and repairs itself.",
        "You can connect these lines to form a cutout shape in the glass. As part of the action to complete this shape, make a Dexterity ({@skill Sleight of Hand}) check. The DC for this check is equal to 8 plus half the number of actions it took to form the shape. On a success, you silently remove the cutout glass shape. On a failure, the cutout glass shatters. Once the shape is removed in this way, either in one piece or as shattered glass, your concentration ends without repairing the glass.",
        "If the original glass shape is returned to the hole, you can spend 1 minute retracing the cuts made to the glass with the dagger to seamlessly repair the damage done to it, as if by the {@spell mending} spell."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Glass-Carver.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gloves of Amphibios",
      source: "GriffonsSaddlebag2",
      page: 90,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These gloves come in many different colors and meld seamlessly into your hands when you don them. While wearing these gloves, climbing doesn't cost you extra movement, you gain a +1 bonus to Strength ({@skill Athletics}) checks made to {@action grapple} a creature, and any creature {@condition grappled} by you that is not wearing armor takes {@damage 1d4} poison damage at the end of each of your turns."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gloves-of-Amphibios.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gloves of the Great Badger",
      source: "GriffonsSaddlebag2",
      page: 91,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This pair of fingerless gloves is decorated with badgerlike stripes and fitted with razor-sharp claws. While wearing the gloves, your unarmed strikes with them deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. In addition, you gain a burrowing speed of 5 feet.",
        "While wearing the gloves, you can use a bonus action to invoke the might of a giant badger, granting the following benefits for 1 minute:",
        {
          type: "list",
          items: [
            "Your burrowing speed is doubled, and you can burrow through nonmagical, unworked stone.",
            "You gain a +1 bonus to your attack and damage rolls whenever you make an unarmed strike with the gloves.",
            "Your unarmed strikes score a critical hit on a roll of 19 or 20."
          ]
        },
        "Once this property has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gloves-of-the-Great-Badger.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gnashing Key",
      source: "GriffonsSaddlebag2",
      page: 91,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This curious brass key is animated by a weak enchantment. When placed in the keyhole of a lock, it magically begins to open and shut its mouth-like key bit, loudly destroying the inside of the lock over the course of 1 minute. At the end of the minute, the lock is destroyed and forced open. If the lock's DC is greater than 15, the key has a percent chance to break before the end of the minute. The percent chance is equal to 5 times the difference between the lock's DC and 15. If the key breaks, the lock is instead jammed shut and the key is destroyed, but can still be seen protruding from the keyhole.",
        "While the key is destroying a lock, the sound of breaking tumblers and grating metal can be heard out to a range of 90 feet."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gnashing-Key.webp"
            }
          }
        ]
      }
    },
    {
      name: "Great Owl's Shroud",
      source: "GriffonsSaddlebag2",
      page: 94,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 10,
      charges: 10,
      entries: [
        "This draping shoulder cloak flutters softly while worn, even if there isn't a breeze. The cloak has 10 charges and regains all expended charges daily at dawn. When you take the {@action Attack} action while wearing this garment, you can replace one or more of your attacks with a special ranged spell attack using the cloak, expending 1 of its charges for each attack you replace. When you do, you flourish the cloak and release a barrage of magical feathers that fly toward the target. You have a +5 bonus to attack rolls made with the cloak, which have a normal range of 30 feet and a long range of 120 feet. On a hit, the target takes {@damage 2d4 + 3} force damage. After the attack, the feathers vanish.",
        "In addition, you can use a reaction when you fall to cast the {@spell feather fall} spell from the cloak, targeting only yourself. Once this property of the cloak has been used, it can't be used again until the next dawn."
      ],
      attachedSpells: [
        "feather fall"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Great-Owls-Shroud.webp"
            }
          }
        ]
      }
    },
    {
      name: "Griffon Component Pack",
      source: "GriffonsSaddlebag2",
      page: 95,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This special component pouch is stylized in the fashion of the legendary {@item the griffon's saddlebag|TGS1|griffon's saddlebag}, a classic motif in children's fiction. As an action, you can place an amount of coins equal to 5 gp plus the exact worth of a component you need for a spell you know in the bag and speak its command word, followed by the name of the needed component. When you do, the coins disappear from the bag and are replaced by the material component needed for the spell. Once this property of the bag has been used, it can't be used again until the next dawn.",
        "At the GM's discretion, the bag may consume only the additional 5 gp and leave a note that describes the nearest person or place that can help you find the named component."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Griffon-Component-Pack.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gusting Blowgun",
      source: "GriffonsSaddlebag2",
      page: 96,
      baseItem: "blowgun|phb",
      type: "R",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 1,
      weaponCategory: "martial",
      property: [
        "A",
        "LD"
      ],
      range: "25/100",
      dmg1: "1",
      dmgType: "P",
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This magic, twisting blowgun channels the air around it to create powerful blasts of wind. When you hit with a ranged attack using this weapon, the target takes an extra {@damage 1d4} bludgeoning damage, and if the target is a Medium or smaller creature, it must succeed on a DC 13 Strength saving throw or be pushed 5 feet away from you. Attacking at long range with this weapon doesn't impose disadvantage on your ranged attack rolls with it.",
        "The blowgun has 3 charges and regains all expended charges daily at dawn. As an action, you can expend 1 of its charges to blow through the weapon to create a line of wind 30 feet long and 5 feet wide. Any Medium or smaller creature in the line must succeed on a DC 13 Strength saving throw or be pushed 10 feet away from you."
      ],
      ammoType: "blowgun needle|phb",
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gusting-Blowgun.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hadiya's Handy Quill",
      source: "GriffonsSaddlebag2",
      page: 97,
      baseItem: "dart|phb",
      type: "R",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
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
        "This dart doubles as a magical quill and is fletched with three iridescent crow feathers. Immediately after you make a ranged attack with this magic weapon, it flies back to your hand. When you make a ranged attack with the dart, you can speak its first command word as part of the attack to cause the dart to release a splatter of ink. If the attack hits, the target is {@condition blinded|PHB|blind} until the end of its next turn. A creature can use its action to clear away the ink on itself or another creature within its reach, allowing it to see again. This property can't be used again until the next dawn.",
        "When used as a quill, the dart produces its own ink unless you provide it with a different one. You can choose what color ink the quill produces by speaking its second command word as a bonus action.",
        "In addition, you can use a bonus action to speak the quill's third command word to cause it to vanish and reappear as a feather-like tattoo on your body. You choose the design and placement of the tattoo each time. You can use a bonus action to speak the command word again while you have the tattoo to cause it to vanish and reappear as a dart in a free hand or at your feet (your choice)."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hadiyas-Handy-Quill.webp"
            }
          }
        ]
      }
    },
    {
      name: "Harvest",
      source: "GriffonsSaddlebag2",
      page: 98,
      baseItem: "sickle|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "L"
      ],
      dmg1: "1d4",
      dmgType: "S",
      entries: [
        "This classic farmer's heirloom depicts wheat and field designs. When you hit a plant creature with an attack using this magic weapon, the target takes an extra {@damage 1d6} slashing damage. In addition, any nonmagical plant harvested with this sickle magically remains fresh for an extra 7 days."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Harvest.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hat of the Sanguine Coven",
      source: "GriffonsSaddlebag2",
      page: 98,
      type: "",
      tier: "major",
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
      entries: [
        "This red hat is worn by a coven of witches known for their familiarity with death's doorstep. While wearing this hat, you can cast the {@spell chill touch} spell at will. Whenever you have 0 hit points while wearing this hat, you gain the following benefits:",
        {
          type: "list",
          items: [
            "You stabilize or die after your sixth successful or failed death saving throw, instead of your third, but only succeed on the saving throw on a roll of 15 or higher.",
            "When you roll a death saving throw, you can immediately cause the hat to cast the {@spell chill touch} spell (+5 to hit, no action required) against a creature within 30 feet of you that isn't behind total cover or heavily obscured. If it hits, you gain a +5 bonus to the saving throw."
          ]
        }
      ],
      attachedSpells: [
        "chill touch"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hat-of-the-Sanguine-Coven.webp"
            }
          }
        ]
      }
    },
    {
      name: "Headdress of the Serpent King",
      source: "GriffonsSaddlebag2",
      page: 99,
      type: "",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "This gold and emerald green headdress channels old and twisting serpentine magic to your bidding. If you take poison damage while wearing this headdress, that damage is reduced by an amount equal to your Constitution modifier.",
        "While wearing the headdress, ordinary snakes and snakes with a challenge rating of 1/4 or lower are indifferent toward you and will not attack you unless you threaten or harm them. In addition, you can use an action to cast the {@spell animal messenger} spell from it, but can only target snakes with it.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This headdress is cursed, and becoming attuned to it extends that curse to you until you are targeted by the {@spell remove curse} spell. Removing the headdress fails to end the curse on you. While cursed, your speech is slightly changed: you hiss when pronouncing \"s\" sounds."
          ]
        }
      ],
      attachedSpells: [
        "animal messenger"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Headdress-of-the-Serpent-King.webp"
            }
          }
        ]
      }
    },
    {
      name: "Headhunter's Bullseye Lantern",
      source: "GriffonsSaddlebag2",
      page: 99,
      type: "",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This bullseye lantern magically creates its own light, which is always a brilliant red. It emits bright light in a 60-foot cone and dim light for an additional 60 feet. While holding the lantern, you can use a bonus action to speak its command word to release an intense burst of light from the lantern's lens. Each hostile creature within the lantern's bright light must succeed on a DC 13 Dexterity saving throw or be marked for 1 minute. For the duration, marked creatures shed dim light in a 10-foot radius. Marked creatures can't benefit from being {@condition invisible}, and any attack roll made with disadvantage against a marked creature is made normally instead, provided that the attacker can see it. You choose the direction of the light when you use this property, which can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Headhunters-Bullseye-Lantern.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hedonic Motivator",
      source: "GriffonsSaddlebag2",
      page: 102,
      baseItem: "whip|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "R"
      ],
      dmg1: "1d4",
      dmgType: "S",
      recharge: "dusk",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This magic whip once belonged to an especially controlling succubus or incubus. The whip has 3 charges and regains {@dice 1d3} expended charges daily at dusk. While holding the whip, you can use a bonus action to expend 1 of its charges to lash out with it against a friendly creature within 10 feet of you. That creature gains one of the following benefits of your choice:",
        {
          type: "list",
          items: [
            "The creature gains {@dice 2d4 + 4} temporary hit points, which last for 1 minute.",
            "The creature can add {@dice 1d4 + 2} to one ability check, attack roll, or saving throw it makes before the start of your next turn."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hedonic-Motivator.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hideaway Vase",
      source: "GriffonsSaddlebag2",
      page: 104,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This durable, ceramic vase is 3 feet tall and weighs 15 pounds. You can use an action to remove the vase's lid. When you do, you must succeed on a DC 13 Charisma saving throw or be shunted onto a harmless demiplane inside the vase. A Large or larger creature automatically succeeds on the saving throw, but a willing Medium or smaller creature can choose to fail it. If a creature is already on the demiplane when you remove the lid, that creature reappears in the nearest unoccupied space, and you automatically succeed on the saving throw. Immediately after opening the vase in this way, the lid flies back and reseals the vase.",
        "While on this demiplane, you can't move and are {@condition blinded}, but can hear everything outside of the vase as if you were standing in its space. You can leave this demiplane using an action to reappear in the nearest unoccupied space. When you attempt to leave the demiplane, a creature outside the vase can use its reaction to hold the vase's lid shut and make a DC 25 Strength check, preventing you from leaving on a success.",
        "The vase has AC 12, 30 hit points, and is vulnerable to bludgeoning damage. The vase is destroyed if it drops to 0 hit points. If the vase is destroyed while a creature is on its demiplane, that creature is forced into the nearest unoccupied space. Once a creature leaves the demiplane, the vase's lid can't be removed again for 24 hours.",
        "You can remain on the demiplane for up to 8 hours or until the vase is placed inside an extradimensional space created by a {@item bag of holding}, {@item portable hole}, or similar item, at which time you are forcefully shunted out of it. If the lid is successfully held in place when you would be forcefully shunted from the demiplane in this way, the vase shatters and is destroyed.",
        "While holding the vase, you can use an action to change the style, color, and apparent quality of the vessel. The vase's weight doesn't change. Regardless of its appearance, the vase can't be anything but a vase."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hideaway-Vase.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hoarder's Haul (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 104,
      type: "VEH",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This magical cart is made from the large, hollow horn of a fallen dragon. While all {@i hoarder's hauls} are made from the horns of dragons, their true magic stems from the strength of the dragon's greed. Uncommon and rare carts have handles and a single wheel at their front and must be physically moved. Very rare versions have a flying speed of 10 feet, can hover up to 20 feet off the ground, and move according to your spoken directions, provided that you are within 30 feet of the cart.",
        "The cart has two command words. The first command word can be spoken using an action and causes the cart to shrink or enlarge, becoming as small as 1 foot long and 7 inches across or as large as 5 feet long and 3 feet across. Regardless of its size, the cart always weighs 5 pounds without anything inside it. Anything contained by the cart does not resize to fit its new size, potentially spilling onto the ground if the cart becomes too small.",
        "When you place a nonliving object in the cart, you can speak the cart's second command word as an action to cause the object to become locked in place. A locked object can't be removed or interacted with against your will, unless the cart becomes too small to contain it. A creature that attempts to remove an object locked in this way must succeed on a Wisdom saving throw or become {@condition frightened} of the cart for 1 minute. A {@condition frightened} creature is unwilling to move toward the cart or interact with it for the duration. If the cart is a rare or very rare version, the creature also takes psychic damage on a failed saving throw. A creature that succeeds on the saving throw is immune to this effect for 24 hours. You can speak the second command word as an action again to unlock any number of objects within the cart.",
        "The cart's properties depend on the item's rarity. The uncommon variant has a carrying capacity of 250 lb., and a save DC of 13."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hoarders-Haul.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hushed Ring",
      source: "GriffonsSaddlebag2",
      page: 108,
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "This ring creates an arcane field around you that prevents certain modes of communication. While wearing this ring, you cannot be spoken to telepathically by creatures other than the ones you choose.",
        "In addition, while wearing this ring, you can use an action to speak this ring's command word to create an aura of silence around you. The aura affects creatures other than yourself within 10 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 minute. For the duration, when a creature within the aura attempts to speak or utter the verbal components of a spell, it must make a DC 13 Wisdom saving throw. On a failed save, the creature is unable to speak or produce the verbal components of a spell until the start of its next turn, and any action, bonus action, or reaction it used to do so is wasted. This property of the ring can't be used again until the next dusk."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hushed-Ring.webp"
            }
          }
        ]
      }
    },
    {
      name: "Jo'Catian Denier",
      type: "GV|DMG",
      requires: [
        {
          name: "Longsword"
        },
        {
          name: "Scimitar"
        },
        {
          name: "Shortsword"
        }
      ],
      inherits: {
        namePrefix: "Jo'Catian Denier ",
        source: "GriffonsSaddlebag2",
        page: 111,
        tier: "major",
        rarity: "uncommon",
        reqAttune: "by a creature of neutral alignment",
        reqAttuneTags: [
          {
            alignment: [
              "N"
            ]
          }
        ],
        recharge: "dawn",
        rechargeAmount: "{@dice 1d3}",
        charges: 3,
        entries: [
          "This magic weapon comes from a clan of sentient wurms that debilitate their foes with strange magic. This sword has 3 charges and regains {@dice 1d3} expended charges daily at dawn. When you hit a creature with the sword, you can expend 1 of its charges as part of the attack to force that creature to make a DC 13 saving throw of your choice. On a failed save, a creature is subjected to an effect based on the kind of saving throw it made:",
          {
            type: "list",
            items: [
              {
                type: "item",
                name: "Strength",
                entries: [
                  "The creature gains a –2 penalty to attack rolls until the end of its next turn."
                ]
              },
              {
                type: "item",
                name: "Dexterity",
                entries: [
                  "The creature's movement speed is halved until the end of its next turn."
                ]
              },
              {
                type: "item",
                name: "Constitution",
                entries: [
                  "If the creature is Large or smaller, it loses its balance and is pushed 15 feet away from you."
                ]
              },
              {
                type: "item",
                name: "Intelligence",
                entries: [
                  "The creature has disadvantage on the next spell attack it makes within 1 minute."
                ]
              },
              {
                type: "item",
                name: "Wisdom",
                entries: [
                  "The creature becomes slightly sluggish and can't take reactions until the end of its next turn."
                ]
              },
              {
                type: "item",
                name: "Charisma",
                entries: [
                  "The creature has disadvantage on attacks against creatures other than you until the end of its next turn."
                ]
              }
            ]
          },
          {
            type: "entries",
            name: "Wiggling Charges",
            entries: [
              "While you're attuned to this weapon as well as the Jo'Catian rebuker, you can use charges from either item to fuel this weapon's properties."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table F2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/JoCatian-Denier.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 111,
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a creature of neutral alignment",
      reqAttuneTags: [
        {
          alignment: [
            "N"
          ]
        }
      ],
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/JoCatian-Denier.webp"
            }
          }
        ]
      },
      entries: [
        "This magic weapon comes from a clan of sentient wurms that debilitate their foes with strange magic. This sword has 3 charges and regains {@dice 1d3} expended charges daily at dawn. When you hit a creature with the sword, you can expend 1 of its charges as part of the attack to force that creature to make a DC 13 saving throw of your choice. On a failed save, a creature is subjected to an effect based on the kind of saving throw it made:",
        {
          type: "list",
          items: [
            {
              type: "item",
              name: "Strength",
              entries: [
                "The creature gains a –2 penalty to attack rolls until the end of its next turn."
              ]
            },
            {
              type: "item",
              name: "Dexterity",
              entries: [
                "The creature's movement speed is halved until the end of its next turn."
              ]
            },
            {
              type: "item",
              name: "Constitution",
              entries: [
                "If the creature is Large or smaller, it loses its balance and is pushed 15 feet away from you."
              ]
            },
            {
              type: "item",
              name: "Intelligence",
              entries: [
                "The creature has disadvantage on the next spell attack it makes within 1 minute."
              ]
            },
            {
              type: "item",
              name: "Wisdom",
              entries: [
                "The creature becomes slightly sluggish and can't take reactions until the end of its next turn."
              ]
            },
            {
              type: "item",
              name: "Charisma",
              entries: [
                "The creature has disadvantage on attacks against creatures other than you until the end of its next turn."
              ]
            }
          ]
        },
        {
          type: "entries",
          name: "Wiggling Charges",
          entries: [
            "While you're attuned to this weapon as well as the Jo'Catian rebuker, you can use charges from either item to fuel this weapon's properties."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Longsword",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "M|XPHB",
            rarity: "none",
            weight: 3,
            value: 1500,
            weaponCategory: "martial",
            property: [
              "V|XPHB"
            ],
            mastery: [
              "Sap|XPHB"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            sword: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Jo'Catian Denier Longsword",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "M|XPHB",
            rarity: "uncommon",
            weight: 3,
            weaponCategory: "martial",
            property: [
              "V|XPHB"
            ],
            mastery: [
              "Sap|XPHB"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            sword: true,
            weapon: true,
            entries: [],
            page: 111,
            tier: "major",
            reqAttune: "by a creature of neutral alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "N"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/JoCatian-Denier.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Jo'Catian Denier",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Scimitar",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "M|XPHB",
            rarity: "none",
            weight: 3,
            value: 2500,
            weaponCategory: "martial",
            property: [
              "F|XPHB",
              "L|XPHB"
            ],
            mastery: [
              "Nick|XPHB"
            ],
            dmg1: "1d6",
            dmgType: "S",
            sword: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Jo'Catian Denier Scimitar",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "M|XPHB",
            rarity: "uncommon",
            weight: 3,
            weaponCategory: "martial",
            property: [
              "F|XPHB",
              "L|XPHB"
            ],
            mastery: [
              "Nick|XPHB"
            ],
            dmg1: "1d6",
            dmgType: "S",
            sword: true,
            weapon: true,
            entries: [],
            page: 111,
            tier: "major",
            reqAttune: "by a creature of neutral alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "N"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/JoCatian-Denier.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Jo'Catian Denier",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Shortsword",
            source: "XPHB",
            page: 215,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "M|XPHB",
            rarity: "none",
            weight: 2,
            value: 1000,
            weaponCategory: "martial",
            property: [
              "F|XPHB",
              "L|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            dmg1: "1d6",
            dmgType: "P",
            sword: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Jo'Catian Denier Shortsword",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "M|XPHB",
            rarity: "uncommon",
            weight: 2,
            weaponCategory: "martial",
            property: [
              "F|XPHB",
              "L|XPHB"
            ],
            mastery: [
              "Vex|XPHB"
            ],
            dmg1: "1d6",
            dmgType: "P",
            sword: true,
            weapon: true,
            entries: [],
            page: 111,
            tier: "major",
            reqAttune: "by a creature of neutral alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "N"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/JoCatian-Denier.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Jo'Catian Denier",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Kestra's Bent Spoon",
      source: "GriffonsSaddlebag2",
      page: 112,
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This silver spoon once belonged to a mystic with an unending appetite. It has three runes etched into the metal that perform various magical functions.",
        {
          type: "list",
          items: [
            "{@i Ulm}, in the bowl of the spoon, enhances the flavor of any soup or similarly spoonable dish by drawing out the more nuanced flavors that are often overlooked.",
            "{@i Tox}, on the back of the spoon's head, causes the spoon to tarnish and dim when touched by a poison. The spoon remains this way until the next dawn, when its normal luster magically reappears.",
            "{@i Seera}, on the handle, strengthens the power of certain psychic effects. While the spoon is on your person and you roll psychic damage, you can focus your attention on the spoon (no action required) to deal maximum damage on one of the damage dice. Once this rune has been used, it can't be used again until the next dawn."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Kestras-Bent-Spoon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Life Tether Ankh",
      source: "GriffonsSaddlebag2",
      page: 114,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this necklace, you can choose to succeed on a death saving throw you would have otherwise failed (no action required). Once the ankh has been used to succeed on a death saving throw, it shatters and is destroyed.",
        "If you use the ankh when you would normally suffer two failed death saving throws, you instead gain one success and one failure. If this would cause you to have 3 successful death saving throws as well as 3 failed ones, roll a final death saving throw. On a success, you stabilize. On a failure, you die."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Life-Tether-Ankh.webp"
            }
          }
        ]
      }
    },
    {
      name: "Locket of the Stolen Heart",
      source: "GriffonsSaddlebag2",
      page: 116,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "The portrait inside this tiny golden locket transforms to depict the creature you love most (living or dead) once you attune to it. The love can be familial, romantic, or otherwise devotional. If your feelings change and you fall in love with a different creature while wearing the locket, the portrait transforms again to reflect your current feelings. While wearing the locket, you're immune to being {@condition charmed}.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This locket is cursed, and if the creature you love most is dead while you're attuned to it, the curse is extended to you. Even if the attunement ends or the target of your love changes, the curse remains. While cursed, your dreams are riddled with forlorn whispers and memories from your lost love. If you die while cursed in this way, you must also make a DC 13 Wisdom saving throw whenever you're targeted by a spell or other effect that returns you to life. On a failed save, your soul is lost forever as it joins the soul of your lost love.",
            "You remain cursed until you're targeted by the {@spell greater restoration|PHB} or {@spell remove curse|PHB} spell, if the creature you love is restored to life, or if a creature casts the {@spell dream|PHB} spell and enters your dreams to dissolve the locket's illusions."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Locket-of-the-Stolen-Heart.webp"
            }
          }
        ]
      }
    },
    {
      name: "Luckleaf",
      source: "GriffonsSaddlebag2",
      page: 116,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This plant is commonly thought to be a special kind of clover. However, a luckleaf is a separate, magical species that grows in random locations across the Material Plane and has 5 leaves. While a luckleaf is on your person, you can choose to expend any number of its leaves (no action required). When you do so, you gain a +1 bonus or take a –1 penalty to any roll you make for each expended leaf. This bonus or penalty can't change the total result beyond the highest or lowest number possible for the die you rolled. You can wait to use this property until after seeing the total of the roll, but before the GM determines the outcome of it. An expended leaf withers and turns to dust. When the last leaf is expended, the plant becomes a nonmagical stem."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Luckleaf.webp"
            }
          }
        ]
      }
    },
    {
      name: "Luna Moth Cape",
      source: "GriffonsSaddlebag2",
      page: 117,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This beautiful elven cape is fashioned after the wings of a luna moth. While wearing the cape, you can move an extra 10 feet when you take the {@action Dash} action.",
        "In addition, while wearing this cape, you can speak its command word as a bonus action when you jump to cause it to unfurl and flap downwards, sending you 10 feet into the air when you reach the height of your jump. This property can't be used again until you land on solid ground."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Luna-Moth-Cape.webp"
            }
          }
        ]
      }
    },
    {
      name: "Lupine Mask",
      source: "GriffonsSaddlebag2",
      page: 117,
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing this dark ceramic mask, you have advantage on Wisdom ({@skill Perception}) checks relying on hearing and smell, as well as on Wisdom ({@skill Animal Handling}) checks made to interact with dogs and doglike beasts, such as foxes, jackals, and wolves."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Lupine-Mask.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mace of the Pumpkin King",
      source: "GriffonsSaddlebag2",
      page: 117,
      baseItem: "mace|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 4,
      weaponCategory: "simple",
      dmg1: "1d6",
      dmgType: "B",
      entries: [
        "This magic mace is actually an enchanted pumpkin whose stem is used as a handle. Its orange exterior is carved into a frightening visage with a toothy maw and unforgiving eyes. Between dusk and dawn, the pumpkin is lit from within with a magical flame that sheds bright light in a 20-foot radius and dim light for an additional 20 feet. While the flame is lit, targets hit by the mace take an extra {@damage 1d4} fire damage, and when you roll a 20 on an attack roll with the flaming weapon, the target must succeed on a DC 13 Wisdom saving throw or be {@condition frightened} of you until the start of your next turn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mace-of-the-Pumpkin-King.webp"
            }
          }
        ]
      }
    },
    {
      name: "Magentan Sun-Saw (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 118,
      baseItem: "scimitar|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "L"
      ],
      dmg1: "1d6",
      dmgType: "S",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "The typical {@item magentan sun-saw|GriffonsSaddlebag2}, an uncommon item, is a falchion with a curved metal guard that protects your hand. The sword has 7 charges and regains {@dice 1d6 + 1} expended charges daily at dawn.",
        "When you hit a target with this magic sword, you can expend 1 of its charges as part of the attack to reach your fingers around the weapon's curved guard and pull it like a trigger. When you do, a line of whirring blades of light springs from the weapon's edge and rips around the length of the sword, rending and tearing into the target to deal an extra {@damage 1d6} radiant damage to it. The light is a vibrant magenta."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Magentan-Sun-Saw.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mandible Bident",
      source: "GriffonsSaddlebag2",
      page: 118,
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
      entries: [
        "This chitinous, two-pronged weapon still shudders with predatory instinct, magically biting down on creatures it hits. Once on each of your turns when you hit a Medium or smaller creature with this magic bident with a melee attack, you can force that creature to make a DC 13 Strength or Dexterity saving throw (its choice). On a failed save, the creature is {@condition grappled} by you and is held in place by the weapon. A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach from this grapple on a success. You can't use the weapon to attack another target while it's grappling a creature in this way, but you can choose to deal {@damage 1d8} bludgeoning damage to the {@condition grappled} creature automatically in place of any attack you'd make with it as part of the {@action Attack} action, as the weapon's pincers clamp down tightly around the target.",
        "You can release a creature from the bident's grapple on your turn (no action required). The weapon releases a creature from its grasp early if you let go of the weapon or are {@condition incapacitated}."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mandible-Bident.webp"
            }
          }
        ]
      }
    },
    {
      name: "Marlin Lunger",
      source: "GriffonsSaddlebag2",
      page: 120,
      baseItem: "rapier|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 2,
      weaponCategory: "martial",
      property: [
        "F"
      ],
      dmg1: "1d8",
      dmgType: "P",
      bonusWeapon: "+1",
      entries: [
        "This rapier allows you to sail through the water to pierce your foes. You gain a +1 bonus to attack and damage rolls made with this magic weapon, and you don't suffer the negative effects of underwater fighting when you make an attack with it. Once on each of your turns when you attack with this rapier while underwater, you can glide up to 15 feet through the water, as part of that action, immediately before or after the attack."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Marlin-Lunger.webp"
            }
          }
        ]
      }
    },
    {
      name: "Masks of the Sacred Beasts (Lion)",
      source: "GriffonsSaddlebag2",
      page: 120,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These dark ceramic and gold masks are fashioned after animals that are sacred in certain cultures. Each mask's appearance and properties are based on the sacred beast it represents. While attuned to a mask, you can end your attunement to it and attune to a different one over the course of 1 minute, instead of over the course of one or more short rests.",
        "While wearing a lion mask, you have advantage on Wisdom ({@skill Perception}) checks that rely on smell. In addition, your nails extend into claws, turning your unarmed strikes with your hands into magic weapons that deal slashing damage with a damage die of {@damage 1d6}."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Masks-of-the-Sacred-Beasts.webp"
            }
          }
        ]
      }
    },
    {
      name: "Medusan Signet",
      source: "GriffonsSaddlebag2",
      page: 121,
      type: "RG|DMG",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      entries: [
        "When you are reduced to 0 hit points but not killed outright while wearing this ring, you don't fall {@condition prone} but are immediately turned to stone and are {@condition petrified}. You remain {@condition petrified} until you die or are targeted by the {@spell greater restoration} spell, or until you regain any number of hit points, regaining consciousness and returning to your normal form when you do. While {@condition petrified} in this way, you don't make death saving throws at the start of each of your turns, although you still suffer failures if you take damage. In addition, critical hits against you while {@condition petrified} become normal hits, as your stone form offers some protection. When you regain consciousness, you also gain {@dice 2d6 + 3} temporary hit points that last for 1 minute as the stone form's lingering protection slowly fades. Once this property has been used 3 times, the ring turns to dust and is destroyed."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Medusan-Signet.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mimicloak",
      source: "GriffonsSaddlebag2",
      page: 123,
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This strange cloak is made using the enchanted remains of a young mimic. While wearing it, you can use a bonus action to speak its command word to change the style, color, and apparent quality of the cloak. The garment's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak with these properties.",
        "While wearing this cloak, you have advantage on ability checks made to escape from a {@action grapple}. Whenever you make an ability check to escape a grapple or free yourself from restraints, the creature or object holding you takes {@damage 1d10} piercing damage as the cloak's fabric magically splits into a toothed maw to bite it."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mimicloak.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mourningsteel Ghost Candle",
      source: "GriffonsSaddlebag2",
      page: 127,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This candle holder and its candle never run out of wax while it burns, even if you aren't attuned to it. Although wax runs down the sides of the candle, it never drips off it onto the holder, nor does it ever seem to be diminished or consumed. The candle can't be removed from the holder. While the candle burns, ghostly hands reach out from the holder as if to warm their hands by the tiny fire.",
        "If you're holding the lit candle and its holder while attuned to it, {@creature will-o'-wisp|MM|will-o'-wisps} are indifferent toward you and will not attack you unless you threaten or harm them. In addition, you can use an action to cast the {@spell blink} spell from it. For the duration of the spell, whenever you vanish from your current plane of existence, a {@creature will-o'-wisp|MM} appears in your space there instead. The will-o'-wisp's turn is immediately after your own, and it obeys your mental commands (no action required by you). The will-o'-wisp vanishes when you return from the Ethereal Plane or when it's reduced to 0 hit points, at which point you return early to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from.",
        "Once the candle and holder have been used to cast this spell, it can't do so again until the next dusk."
      ],
      attachedSpells: [
        "blink"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mourningsteel-Ghost-Candle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Murk Blowgun",
      source: "GriffonsSaddlebag2",
      page: 128,
      baseItem: "blowgun|phb",
      type: "R",
      tier: "major",
      rarity: "uncommon",
      weight: 1,
      weaponCategory: "martial",
      property: [
        "A",
        "LD"
      ],
      range: "25/100",
      dmg1: "1",
      dmgType: "P",
      entries: [
        "A hefty blowgun used by the inhabitants of the Murk: a series of deadly swamps whose waters are polluted with an uncanny poison. When you hit a creature with a ranged attack using this magic blowgun, that creature takes an extra {@damage 1d4} poison damage. When you roll a 20 on a ranged attack roll made with the blowgun, the target must also succeed on a DC 13 Constitution saving throw or be {@condition poisoned} until the end of its next turn. It is {@condition incapacitated} while poisoned in this way.",
        "In addition, this blowgun can be wielded as a magic {@item club|PHB}"
      ],
      ammoType: "blowgun needle|phb",
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Murk-Blowgun.webp"
            }
          }
        ]
      }
    },
    {
      name: "Night Owl's Half-Moon Spectacles",
      source: "GriffonsSaddlebag2",
      page: 128,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While attuned to these darkened, horned spectacles, you gain the following benefits:",
        {
          type: "list",
          items: [
            "You can use an action while wearing the glasses to cast the {@spell comprehend languages|PHB} spell from them. The spell ends early if you remove them.",
            "At the start of a long rest, you can place the glasses next to a book or stack of parchment, such as on a desk, to create a spectral copy of yourself. The copy appears after 10 minutes, sheds dim light in a 5-foot radius, and remains for the duration of the rest or until the glasses are moved or you move more than 30 feet away from them. It can perform light activity within the glasses' space, such as reading, writing, or copying spells into your spellbook, provided it has all the materials necessary to do so. You decide what the copy does at the start of the long rest. The copy can't speak, hear, or see anything outside of its space. When you finish the long rest, you learn any information the copy read or wrote about over the course of the rest."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Night-Owls-Half-Moon-Spectacles.webp"
            }
          }
        ]
      }
    },
    {
      name: "No-Stones",
      source: "GriffonsSaddlebag2",
      page: 130,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This engraved geode has been split apart into two equal halves. A labyrinth is carved into the rock's rough exterior and glows with a faint light.",
        "While holding one of the halves, you can use an action to speak the geode's command word, \"unturned,\" and turn it over so the flat, gem-encrusted side is pressed against a solid stone, natural metal (such as iron or silver), or earthen surface such as a floor or wall. When you do, the geode becomes magically fixed in place against the surface and projects a 3-foot-spherical map above it, showing the area within 120 feet of it. The map shows all walls, floors, and other surfaces made of either stone, natural metal, or earth within range as translucent outlines and shapes. The map is entirely monochromatic, but shows the general location of any trap or gemstone within its range with a shapeless, red glow.",
        "The geode remains fixed in place until you speak its command word again using a bonus action, its surface moves, or it's forced to hold more than 100 pounds. A creature can use an action to make a DC 15 Strength check, moving the geode and causing the map to vanish.",
        "Once a half has been used in this way, that half can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/No-Stones.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ol' Stumpy",
      source: "GriffonsSaddlebag2",
      page: 131,
      baseItem: "maul|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 10,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "2d6",
      dmgType: "B",
      entries: [
        "This lashed-together stump and stick carry an age-old enchantment from an unknown source. Over time, the strength of the magic has faded, but this heirloom of a weapon has remained in caring hands all the while. Creatures hit with this magic weapon take an extra {@damage 1d4} poison damage. If the creature is fey, you deal maximum poison damage instead of rolling."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ol-Stumpy.webp"
            }
          }
        ]
      }
    },
    {
      name: "Orner's Venomous Crossbow",
      source: "GriffonsSaddlebag2",
      page: 132,
      baseItem: "hand crossbow|phb",
      type: "R",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 3,
      weaponCategory: "martial",
      property: [
        "A",
        "L",
        "LD"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      bonusWeapon: "+1",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3 + 1}",
      charges: 4,
      entries: [
        "This magic crossbow carries a small system of curious tubes and vessels. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The crossbow has 4 charges and regains {@dice 1d3 + 1} expended charges daily at dawn. You can expend 1 of the weapon's charges when you make an attack with it to coat the fired bolt with a unique, self-generating venom. If the attack hits, the target takes an extra {@damage 1d6} poison damage and must make a DC 13 Constitution saving throw. On a failed save, the target is {@condition poisoned} until the end of its next turn.",
        "If you expend the crossbow's last charge, roll a {@dice d20}. On a 1, the vessels attached to the crossbow shatter and spray poison in a 20-foot-radius sphere centered on your location. Creatures within the sphere take {@damage 1d12} poison damage and must succeed on a DC 15 Constitution saving throw or be {@condition poisoned} for 1 minute. When this happens, the crossbow ceases to be magical and loses all of its additional properties."
      ],
      ammoType: "crossbow bolt|phb",
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Orners-Venomous-Crossbow.webp"
            }
          }
        ]
      }
    },
    {
      name: "Overseer's Spade",
      source: "GriffonsSaddlebag2",
      page: 134,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This golden shovel is miraculously resistant to impacts and scrapes. As an action, you can touch the tip of the shovel to a patch of loose earth within 5 feet of you and speak its command word. When you do, you can magically excavate up to a total of eight contiguous 5-foot cubes of loose, nonmagical earth, starting from where you touched the shovel. It takes 1 minute for these changes to take effect. Any dirt or stone removed in this way is destroyed, leaving behind any loose metals or gemstones within the excavated area. The shovel can only remove up to eight 5-foot cubes of earth in this way each day."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Overseers-Spade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Owlbear Leather Armor",
      source: "GriffonsSaddlebag2",
      page: 134,
      baseItem: "leather armor|phb",
      type: "LA",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 10,
      ac: 11,
      entries: [
        "This set of leather armor was made from the remains of a hardy and ferocious owlbear. While wearing this armor, if you fail a Constitution saving throw against an effect from a hostile source, you can choose to succeed instead. Once this property of the armor has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Owlbear-Leather-Armor.webp"
            }
          }
        ]
      }
    },
    {
      name: "Pegasus Quill",
      source: "GriffonsSaddlebag2",
      page: 134,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "The feather adorning this quill was a gift from a mighty pegasus and has a beautiful, pearlescent shimmer. When you write with this magic quill, the time it takes for you to write something, such as copying a spell into a spellbook or creating a spell scroll, is halved."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pegasus-Quill.webp"
            }
          }
        ]
      }
    },
    {
      name: "Phantom Walkers",
      source: "GriffonsSaddlebag2",
      page: 135,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "While wearing these boots, the DC of any ability checks made to track your movements using your footprints increases by 5.",
        "In addition, you can use a bonus action to cause the boots to leave behind no footprints for 1 minute. When you do, another set of similar footprints appear on the ground that lead in random directions. These footprints last for 8 hours and travel up to 300 feet. A successful DC 13 Intelligence ({@skill Arcana}) check reveals that the footprints are magical. Once this property of the boots has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phantom-Walkers.webp"
            }
          }
        ]
      }
    },
    {
      name: "Pisces Shield",
      source: "GriffonsSaddlebag2",
      page: 137,
      type: "S",
      tier: "major",
      rarity: "uncommon",
      weight: 6,
      ac: 2,
      entries: [
        "This round iron shield is emblazoned with two spiraling golden koi. If the shield is submerged in water for at least 1 minute, the koi begin to animate and swim across the surface of the shield for up to 24 hours. While the koi are swimming in this way, the next time you roll a 1 on the {@dice d20} for an attack roll, ability check, or saving throw while holding the shield, you can treat the roll as if it were a 20 instead. When you do, the koi stop swimming, and they can't swim again until 24 hours have passed."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pisces-Shield.webp"
            }
          }
        ]
      }
    },
    {
      name: "Pollinator Carapace",
      type: "GV|DMG",
      requires: [
        {
          name: "Leather Armor"
        },
        {
          name: "Studded Leather Armor"
        },
        {
          name: "Hide Armor"
        }
      ],
      inherits: {
        namePrefix: "Pollinator Carapace ",
        source: "GriffonsSaddlebag2",
        page: 138,
        tier: "major",
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
        recharge: "dawn",
        rechargeAmount: "{@dice 1d3}",
        charges: 3,
        entries: [
          "This black and yellow armor has a billowing plume of soft fur around its neck and chest. Draped over its shoulders is a scalloped cape that's split into two translucent, wing-like ends.",
          "The armor has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While wearing the armor, you can expend 1 of its charges (no action required) to activate the cape, transforming it into a pair of insect-like wings for 1 hour. For the duration of the wings, you gain a flying speed of 30 feet and can hover.",
          {
            type: "entries",
            name: "Beekeeper's Commitment",
            entries: [
              "While you are attuned to three magic items that have this named property, the armor regains all expended charges daily at dawn, instead of {@dice 1d3}, and gains the following benefit:"
            ]
          },
          {
            type: "entries",
            name: "Pollinator",
            entries: [
              "While the armor's cape is transformed, it releases a sparkling mist of enchanting pollen. For the duration, any insect or plant creature that targets you with an attack or harmful spell must first make a DC 15 Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table F1|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Carapace.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 138,
      tier: "major",
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Carapace.webp"
            }
          }
        ]
      },
      entries: [
        "This black and yellow armor has a billowing plume of soft fur around its neck and chest. Draped over its shoulders is a scalloped cape that's split into two translucent, wing-like ends.",
        "The armor has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While wearing the armor, you can expend 1 of its charges (no action required) to activate the cape, transforming it into a pair of insect-like wings for 1 hour. For the duration of the wings, you gain a flying speed of 30 feet and can hover.",
        {
          type: "entries",
          name: "Beekeeper's Commitment",
          entries: [
            "While you are attuned to three magic items that have this named property, the armor regains all expended charges daily at dawn, instead of {@dice 1d3}, and gains the following benefit:"
          ]
        },
        {
          type: "entries",
          name: "Pollinator",
          entries: [
            "While the armor's cape is transformed, it releases a sparkling mist of enchanting pollen. For the duration, any insect or plant creature that targets you with an attack or harmful spell must first make a DC 15 Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Hide Armor",
            source: "XPHB",
            page: 219,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "MA|XPHB",
            rarity: "none",
            weight: 12,
            value: 1000,
            ac: 12,
            armor: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Pollinator Carapace Hide Armor",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "MA|XPHB",
            rarity: "uncommon",
            weight: 12,
            ac: 12,
            armor: true,
            entries: [],
            page: 138,
            tier: "major",
            reqAttune: "by a druid or ranger",
            reqAttuneTags: [
              {
                class: "druid"
              },
              {
                class: "ranger"
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Carapace.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Pollinator Carapace",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Leather Armor",
            source: "XPHB",
            page: 219,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "LA|XPHB",
            rarity: "none",
            weight: 10,
            value: 1000,
            ac: 11,
            armor: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Pollinator Carapace Leather Armor",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "LA|XPHB",
            rarity: "uncommon",
            weight: 10,
            ac: 11,
            armor: true,
            entries: [],
            page: 138,
            tier: "major",
            reqAttune: "by a druid or ranger",
            reqAttuneTags: [
              {
                class: "druid"
              },
              {
                class: "ranger"
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Carapace.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Pollinator Carapace",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Studded Leather Armor",
            source: "XPHB",
            page: 219,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "LA|XPHB",
            rarity: "none",
            weight: 13,
            value: 4500,
            ac: 12,
            armor: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Pollinator Carapace Studded Leather Armor",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "LA|XPHB",
            rarity: "uncommon",
            weight: 13,
            ac: 12,
            armor: true,
            entries: [],
            page: 138,
            tier: "major",
            reqAttune: "by a druid or ranger",
            reqAttuneTags: [
              {
                class: "druid"
              },
              {
                class: "ranger"
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Carapace.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Pollinator Carapace",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Pollinator Pants",
      source: "GriffonsSaddlebag2",
      page: 138,
      tier: "major",
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "While wearing this pair of black-and-yellow striped pants, any flower you move within 5 feet of magically blossoms, as if by the {@spell druidcraft} spell.",
        "The pants have 3 charges and regain {@dice 1d3} expended charges daily at dawn. While wearing the pants, you can use an action to expend 1 of their charges to cast the {@spell speak with plants} spell from them. This version of the spell only affects plants within the spell's range that have at least one flower on them. When you speak with a plant in this way, you do so by making a combination of somatic gestures and dance-like steps, rather than using your voice. These movements come naturally to you for the duration of the spell and magically convey your message.",
        {
          type: "entries",
          name: "Beekeeper's Commitment",
          entries: [
            "While you are attuned to three magic items that have this named property, the pants regain all expended charges daily at dawn, instead of {@dice 1d3}, and gain the following benefit:"
          ]
        },
        {
          type: "entries",
          name: "Sting",
          entries: [
            "When you take the {@action Attack} action on each of your turns, you can use a bonus action to make a special unarmed strike against a creature within 5 feet of you. On a hit, the target takes an extra {@damage 1d4} piercing damage from the attack. When you roll a 20 on an attack roll made with this unarmed strike, the target takes an extra 10 poison damage from the attack and must succeed on a DC 15 Constitution saving throw or be {@condition poisoned} until the end of your next turn."
          ]
        }
      ],
      attachedSpells: [
        "druidcraft",
        "speak with plants"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Pants.webp"
            }
          }
        ]
      }
    },
    {
      name: "Pollinator Visor",
      source: "GriffonsSaddlebag2",
      page: 138,
      tier: "major",
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This chitinous mask rests over your ears and can be raised or lowered using an action to sit on top of your head or in front of your eyes. The mask has two large, eye-like lenses that improve your vision and allow you to visualize scents. While wearing the mask over your eyes, you gain advantage on Wisdom ({@skill Perception}) checks that rely on sight and smell.",
        "The mask has 3 charges and regains {@dice 1d3} expended charges daily at dawn. While wearing the mask over your eyes, you can expend 1 of its charges as an action to cast the {@spell animal messenger} spell from it, targeting a Tiny insect or similar creature within range, such as a centipede, spider, wasp, or scorpion. When cast in this way, the insect covers about 25 miles per 24 hours for a flying messenger, or 12 miles for other insects.",
        {
          type: "entries",
          name: "Beekeeper's Commitment",
          entries: [
            "While you are attuned to three magic items that have this named property, the mask regains all expended charges daily at dawn, instead of {@dice 1d3}, and gains the following benefit:"
          ]
        },
        {
          type: "entries",
          name: "Bug",
          entries: [
            "When you use the mask to cast the {@spell animal messenger} spell, you can direct the insect to surreptitiously follow the spell's recipient for the duration instead. When you do, you must also provide the insect with a trigger word or phrase. When the recipient speaks the trigger word or phrase, the insect magically begins to record the following words spoken by the recipient and any other creature it's speaking to. The insect can record up to 25 total words in this way, or up to 6 second's worth of other sounds. Once it has a recording, you hear it in your mind as the insect magically communicates it to you across any distance, provided that you're on the same plane of existence. The message replicates the sound of any recorded creature's voice. The spell then ends, and the insect makes its way back to where you cast the spell."
          ]
        }
      ],
      attachedSpells: [
        "animal messenger"
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Pollinator-Visor.webp"
            }
          }
        ]
      }
    },
    {
      name: "Prying Mace",
      source: "GriffonsSaddlebag2",
      page: 140,
      baseItem: "mace|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 4,
      weaponCategory: "simple",
      dmg1: "1d6",
      dmgType: "B",
      bonusWeapon: "+1",
      entries: [
        "This mace was used by ruthless inquisitors during the Upheaval, a century-long war against magical secrets. You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, when you roll a 20 on an attack roll made with this weapon against a living creature with an Intelligence of 6 or higher that speaks at least one language, you immediately learn what the last lie was that it told. You don't learn the truth behind the lie, only the phrase or phrases that were used when telling it. If the phrase is in a language you don't understand, you still learn the phrase, but not its meaning."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Prying-Mace.webp"
            }
          }
        ]
      }
    },
    {
      name: "Rejuvenating Draft (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 144,
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "When you drink this potion, you regain {@dice 1d3 + 1} spent Hit Dice."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Rejuvenating-Draft.webp"
            }
          }
        ]
      }
    },
    {
      name: "Reliquary of Holy Memories (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 144,
      baseItem: "mace|phb",
      type: "RD|DMG",
      tier: "major",
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
      weaponCategory: "simple",
      dmg1: "1d6",
      dmgType: "B",
      entries: [
        "This scepter holds the bones of a powerful martyred saint and are said to contain the echoes of their memories. The rod can also be used as a magic {@item mace|PHB}.",
        "While attuned to this rod, you can prepare one additional spell for each bone held within the rod, up to a maximum of 5. The rarity of the reliquary is determined by the number of bones inside. The uncommon variant of this item contains 1–2 bones, and you can prepare 1–2 extra spells while attuned to it."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Reliquary-of-Holy-Memories.webp"
            }
          }
        ]
      }
    },
    {
      name: "Riff's Dimensional Ripper",
      source: "GriffonsSaddlebag2",
      page: 144,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4}",
      charges: 4,
      entries: [
        "This roughly forged dagger of goblin make has somehow been enchanted with weak, planar magic. This magic dagger has 4 charges and regains {@dice 1d4} expended charges daily at dawn. While holding the dagger within 5 feet of a creature at least one size larger than you, you can use an action to expend 1 of the dagger's charges to create and slip through a brief, planar tear, reappearing in an unoccupied space within 5 feet of the creature on the opposite side of it. When you do, you can immediately make one weapon attack with this dagger against that creature. If the attack hits, that creature takes an extra {@damage 1d6} force damage and can't take reactions until the end of your turn.",
        "If using the dagger in this way would cause you to move more than 20 feet, you are shunted out of the planar tear and reappear in your original space instead. When this happens, you take {@damage 4d6} force damage, and the action is wasted."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Riffs-Dimensional-Ripper.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ring of Healer's Heroism",
      source: "GriffonsSaddlebag2",
      page: 146,
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      entries: [
        "When you use an action to restore hit points to a creature other than yourself while wearing this winged ring, you become infused with heroism. You gain temporary hit points equal to your spellcasting modifier, and until the end of your next turn, you are immune to being {@condition frightened}."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-Healers-Heroism.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ring of Rituals",
      source: "GriffonsSaddlebag2",
      page: 146,
      type: "RG|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "While wearing this ring, you can speak its command word to cause a small, illusory flame to appear above it. The flame emits light like a normal candle but doesn't require oxygen or give off heat. Speaking the command word again snuffs out the light.",
        "In addition, when you cast the ritual version of a spell, you can use the ring as a material component of the spell in addition to its normal requirements. When you do, the ritual version of the spell's total casting time is reduced by 5 minutes. Once this property of the ring has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-Rituals.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ring of Stolen Alacrity",
      source: "GriffonsSaddlebag2",
      page: 147,
      type: "RG|DMG",
      tier: "minor",
      rarity: "uncommon",
      recharge: "dawn",
      rechargeAmount: 1,
      charges: "1",
      entries: [
        "This ring has a loose outer layer that's covered with illustrations of a person caught in various stages of running. If you spin the outer layer, the person appears to animate and run.",
        "If you aren't surprised while wearing this ring, you can use your reaction when you roll for initiative to spin the ring and speak its command word. You use this reaction after you know the initiative order, if the GM shares it with you, but before any creature takes its turn. Choose a creature that you can see within 30 feet of you that also rolled for initiative. That creature must succeed on a DC 13 Charisma saving throw or swap the total of its initiative roll with yours. A willing creature can choose to fail this saving throw. Once this property of the ring has been used, it can't be used again until the next dawn.",
        "If the GM doesn't share the initiative order with you, you can choose up to three creatures that you can see within 30 feet of you as part of this reaction. You immediately learn whether each of those creatures acts before or after you in the initiative order. Afterward, choose one of those creatures to make the saving throw as normal."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-Stolen-Alacrity.webp"
            }
          }
        ]
      },
      foundrySystem: {
        activation: {
          cost: 1,
          type: "reaction"
        }
      }
    },
    {
      name: "Ring of the Mute Mage",
      source: "GriffonsSaddlebag2",
      page: 148,
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      entries: [
        "This dark silver ring looks like a tongue wrapped around your finger with an amethyst pressed into it. The {@language Undercommon} word for \"silent\" is inscribed into the ring's tongue. While wearing the ring, the same word becomes harmlessly written on your own tongue, and when you cast a spell of 3rd level or lower that requires only verbal components, you can choose to cast the spell using somatic ones instead. Any spell that requires a target to hear its verbal component gains no benefit from this property. Once this property of the ring has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-the-Mute-Mage.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ring of Volleys",
      source: "GriffonsSaddlebag2",
      page: 147,
      type: "RG|DMG",
      tier: "major",
      rarity: "uncommon",
      entries: [
        "While wearing this ring, you can choose to summon a nocked arrow or bolt whenever you draw a bow or crossbow. The ammunition is magical. An arrow or bolt vanishes if you don't fire it right away and disappears right after it hits or misses."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-Volleys.webp"
            }
          }
        ]
      }
    },
    {
      name: "Roaring Whip",
      source: "GriffonsSaddlebag2",
      page: 149,
      baseItem: "whip|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "R"
      ],
      dmg1: "1d4",
      dmgType: "S",
      entries: [
        "This magic whip releases a thunderous burst of sound from it when snapped that can damage faraway targets with its ferocity.",
        "When you take the {@action Attack} action while holding this whip, you can use it to attack a target that's up to 5 feet outside your normal reach with the weapon. On a hit, the weapon's damage die changes to a {@damage d6} and deals thunder damage instead of slashing damage. Hit or miss, it emits the sound of a roaring lion audible out to 100 feet."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Roaring-Whip.webp"
            }
          }
        ]
      }
    },
    {
      name: "Rod of Thought Projection",
      source: "GriffonsSaddlebag2",
      page: 150,
      type: "RD|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "While holding this rod, you can use an action to create a mental connection with a willing humanoid creature that you can see within 120 feet of you. The connection lasts as long as you concentrate (as if concentrating on a spell), or until the other creature chooses to close it or moves farther than 120 feet away from you. For the duration, you can communicate with it telepathically. In addition, as part of the action to open this connection or as an action on a subsequent turn while it remains open, you can choose to see through the creature's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the creature has. During this time, you are {@condition deafened|PHB|deaf} and {@condition blinded|PHB|blind} with regard to your own senses.",
        "If the creature is unwilling, it must succeed on a DC 13 Wisdom saving throw or have the mental connection be established anyway. The creature is aware of the effect when it makes the saving throw. At the end of each of the creature's turns, it can make another Wisdom saving throw. On a success, the connection is severed, and the effect ends. Once the rod has been used on an unwilling creature in this way, it can't do so again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Rod-of-Thought-Projection.webp"
            }
          }
        ]
      }
    },
    {
      name: "Rust Arrow",
      source: "GriffonsSaddlebag2",
      page: 153,
      baseItem: "arrow|phb",
      type: "A",
      tier: "minor",
      rarity: "uncommon",
      weight: 0.05,
      entries: [
        "Rust arrows are typically made in sets of 5 using the remains of a rust monster's antennae and chitinous hide. When found, a quiver of rust arrows contains {@dice 1d3 + 2} of the magic ammunition. Once it hits a target, an arrow flakes away into dust and is destroyed.",
        "When you make a ranged attack with a rust arrow and hit a target that is either wearing nonmagical metal armor or holding a nonmagical metal shield or weapon, that armor or weapon takes a permanent and cumulative –1 penalty to its AC or damage rolls, respectively. You choose what object takes the penalty. If an armor's penalty reduces its AC to 10 or its bonus to AC to +0, or if a weapon's penalty drops to –5, the object is destroyed.",
        "If the target is a nonmagical ferrous metal object that isn't being worn or carried, the arrow destroys a 1-foot cube of it."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Rust-Arrows.webp"
            }
          }
        ]
      }
    },
    {
      name: "Satchel of Beast Chow",
      source: "GriffonsSaddlebag2",
      page: 154,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This hefty satchel is 1 foot tall, weighs 2 pounds, and has {@dice 2d4 + 2} servings of magical, nondescript food inside it when found. The morsels of food come in small, halfinch cubes and smell as if they could have been made of either savory meats, enriched plants, or both. If a beast or monstrosity with a challenge rating of 2 or lower and an Intelligence of 3 or lower eats a serving of this food from your hand or similar outstretched vessel, it must succeed on a DC 15 Wisdom saving throw or be charmed by you for 1 hour. While charmed, the creature regards you and your companions as friends, and you have advantage on Wisdom ({@skill Animal Handling}) and Charisma checks made to interact with the creature. If the creature takes any damage from you or your companions for the duration, the charm ends early. If the charm lasts for the full duration, the creature remains nonhostile toward you until you threaten it."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Satchel-of-Beast-Chow.webp"
            }
          }
        ]
      }
    },
    {
      name: "Scorpio Armor",
      type: "GV|DMG",
      requires: [
        {
          name: "Half Plate Armor"
        },
        {
          name: "Plate Armor"
        }
      ],
      inherits: {
        namePrefix: "Scorpio ",
        source: "GriffonsSaddlebag2",
        page: 155,
        tier: "major",
        rarity: "uncommon",
        reqAttune: true,
        entries: [
          "This armor is made from the treated carapace of a giant scorpion. You can benefit from the armor, as described below, even if you aren't attuned to it.",
          "While wearing this armor, it doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks while you're in dim light or darkness. However, your speed is reduced by 5 feet while you're in sunlight, as the armored husk recoils and constricts from it.",
          "While attuned to this armor and wearing it, you have advantage on saving throws against poison. In addition, you can use a bonus action to close your eyes and speak the armor's command word. When you do, you create an instantaneous pulse of awareness around you, immediately alerting you to the presence and location of any creature within 30 feet of you that's on the ground as if you had {@sense tremorsense|MM} out to a range of 30 feet. Once the armor's command word has been used, it can't be used again until the next dusk."
        ],
        lootTables: [
          "Magic Item Table F2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scorpio-Armor.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 155,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scorpio-Armor.webp"
            }
          }
        ]
      },
      entries: [
        "This armor is made from the treated carapace of a giant scorpion. You can benefit from the armor, as described below, even if you aren't attuned to it.",
        "While wearing this armor, it doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks while you're in dim light or darkness. However, your speed is reduced by 5 feet while you're in sunlight, as the armored husk recoils and constricts from it.",
        "While attuned to this armor and wearing it, you have advantage on saving throws against poison. In addition, you can use a bonus action to close your eyes and speak the armor's command word. When you do, you create an instantaneous pulse of awareness around you, immediately alerting you to the presence and location of any creature within 30 feet of you that's on the ground as if you had {@sense tremorsense|MM} out to a range of 30 feet. Once the armor's command word has been used, it can't be used again until the next dusk."
      ],
      variants: [
        {
          base: {
            name: "Half Plate Armor",
            source: "XPHB",
            page: 219,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "MA|XPHB",
            rarity: "none",
            weight: 40,
            value: 75000,
            ac: 15,
            armor: true,
            stealth: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Scorpio Half Plate Armor",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "MA|XPHB",
            rarity: "uncommon",
            weight: 40,
            ac: 15,
            armor: true,
            stealth: true,
            entries: [],
            page: 155,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scorpio-Armor.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Scorpio Armor",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Plate Armor",
            source: "XPHB",
            page: 219,
            srd52: true,
            basicRules2024: true,
            edition: "one",
            type: "HA|XPHB",
            rarity: "none",
            weight: 65,
            value: 150000,
            ac: 18,
            strength: "15",
            armor: true,
            stealth: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Scorpio Plate Armor",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "HA|XPHB",
            rarity: "uncommon",
            weight: 65,
            ac: 18,
            strength: "15",
            armor: true,
            stealth: true,
            entries: [],
            page: 155,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scorpio-Armor.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Scorpio Armor",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Scorpion Lasher",
      source: "GriffonsSaddlebag2",
      page: 155,
      baseItem: "whip|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 3,
      value: 200,
      weaponCategory: "martial",
      property: [
        "F",
        "R"
      ],
      dmg1: "1d4",
      dmgType: "S",
      entries: [
        "This whip was constructed using salvaged pieces of a giant scorpion and drips with a sickly venom. Once on each of your turns when you hit a creature with this weapon, you can cause the whip to deal an extra {@damage 1d6} poison damage. When you do, if the creature is Medium or smaller, it must also succeed on a DC 13 Strength saving throw or be pulled 5 feet closer to you."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scorpion-Lasher.webp"
            }
          }
        ]
      }
    },
    {
      name: "Scroll of Mapping (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 156,
      type: "SC|DMG",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "By using an action to read the scroll, you cause the arcane script on the page to vanish and become an inked map of the surrounding area. The map shows the area in a 1-mile radius centered on the point where you read the scroll and indicates both structures and topography. By touching the map, a small light appears at your location to indicate where you are. Using a series of natural gestures when touching the page, you can cause the map to change its scale or displayed portion of the area. The scroll isn't destroyed when you read it, but can't be used again to create a different map."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scroll-of-Mapping.webp"
            }
          }
        ]
      }
    },
    {
      name: "Second Fiddle",
      source: "GriffonsSaddlebag2",
      page: 157,
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "A hand-me-down fiddle that's been enchanted over time by the sheer number of bards to have played it. You have a +3 bonus to Charisma ({@skill Performance}) checks made with this fiddle. In addition, if you're a bard and are holding the fiddle when a creature other than you who can see and hear you rolls a Bardic Inspiration die, you can use your reaction to play a magical note on the fiddle. When you do, the creature can roll the Bardic Inspiration die again and choose either result. You can use this reaction before or after the creature rolls the Bardic Inspiration die, but before the GM says whether the roll succeeds or fails. Once this property has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Second-Fiddle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Seeker's Compass",
      source: "GriffonsSaddlebag2",
      page: 157,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This brass compass has two needles: one large, and one small. The large needle always indicates magnetic north and is unaffected by magical effects that would otherwise mislead it. The small needle remains motionless until activated.",
        "While holding this compass, you can speak its command word as an action to cast the {@spell locate object} spell from it and activate the smaller needle. This version of the spell has a duration of 1 hour, doesn't require concentration, and causes the smaller needle to indicate the direction of the object located by the spell. If the small needle can't detect the object specified by the spell, it spins wildly for a moment and then becomes motionless again. Once used, this property of the compass can't be used again until the next dawn."
      ],
      attachedSpells: [
        "locate object"
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Seekers-Compass.webp"
            }
          }
        ]
      }
    },
    {
      name: "Seer's Starlight Cloak",
      source: "GriffonsSaddlebag2",
      page: 157,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: "by a cleric, druid, or wizard",
      wondrous: true,
      entries: [
        "This deep purple cloak is hemmed with a silver lining that radiates into starburst patterns around the head and arms. When in darkness, tiny stars can be seen from within the cloak's fabric. A constellation of stars in the shape of an eye can always be seen on the front of the cloak's dramatic hood. While wearing the cloak, you can use an action to cast the {@spell guidance} spell.",
        "While you can see the night sky and are wearing the cloak, you can use an action to cast the {@spell augury} spell. When you do, the omens are represented by the number of shooting stars that appear in the sky:",
        {
          type: "list",
          items: [
            "{@b Three or more shooting stars,} for good results",
            "{@b One shooting star,} for bad results",
            "{@b Two shooting stars,} for both good and bad results",
            "{@b Nothing,} for results that aren't especially good or bad"
          ]
        },
        "Once this property of the cloak has been used, it can't be used again until the next dusk."
      ],
      attachedSpells: [
        "augury",
        "guidance"
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Seers-Starlight--Cloak-.webp"
            }
          }
        ]
      }
    },
    {
      name: "Shadow Weaver's Guise",
      source: "GriffonsSaddlebag2",
      page: 158,
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      wondrous: true,
      curse: true,
      entries: [
        "This patchwork gray cloak has three bone clasps at its neck. Whenever you cast an evocation spell that deals damage while wearing this cloak, you can choose to change its damage type to necrotic for that casting of the spell.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "Once you don this cursed cloak, you are unwilling to remove it unless you are targeted by the {@spell remove curse} spell or similar magic. While wearing the cloak, you are considered to be undead whenever you are in dim light or darkness. In addition, if you can normally cast the {@spell light} or {@spell dancing lights} cantrips, you are unable to cast them while wearing the cloak."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Shadow-Weavers-Guise.webp"
            }
          }
        ]
      }
    },
    {
      name: "Shifter's Shine (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 160,
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "The typical {@item shifter's shine|GriffonsSaddlebag2}, a common potion, is a specialty alcoholic beverage that causes your face to appear more glamorous. For 1 hour after drinking this potion, your skin's complexion clears, appears healthier, and grows more taut. Your face, while largely unchanged, is distinctly more attractive and exudes a weak aura of enchantment magic. When you make a Charisma check while under the effects of this potion, you can choose to forgo rolling the {@dice d20} to get a 10 on the die. Once you use this property, you can't use it again for the remainder of the potion's duration. The potion is a rich honey color and swirls lazily around, regardless of how it's handled. It can be found in any sort of vessel, though it is usually found in glass jars. The eye of a shapeshifter drifts along the potion's bottom, making it a daunting beverage for the average taverngoer to order. It has an extremely strong alcoholic taste with a hint of caramel. Due to its magical nature, the alcohol within this potion affects a creature twice as much as the alcohol within a nonmagical beverage.",
        "The following {@item shifter's shine|GriffonsSaddlebag2} is an uncommon variant with additional properties. It also tastes better.",
        "When you drink this potion, you gain the effects of the {@spell alter self} spell for 1 hour (no concentration required) or until you end the effect as a bonus action."
      ],
      attachedSpells: [
        "alter self"
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Shifters-Shine.webp"
            }
          }
        ]
      }
    },
    {
      name: "Silver Eagle Studded Cuirass",
      source: "GriffonsSaddlebag2",
      page: 161,
      baseItem: "studded leather armor|phb",
      type: "LA",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 13,
      ac: 12,
      entries: [
        "This studded leather armor is worn by an elite guard of a longstanding alliance between elves and humans. While you're wearing it, any critical hit against you becomes a normal hit.",
        "In addition, when a creature you can see hits you with a melee attack while you're wearing this armor, you can use your reaction to speak its command word. When you do, a pair of ghostly eagle wings appear from the back of the armor. The wings beat the air around you and push you back up to 10 feet away from the attacking creature, without provoking opportunity attacks. In addition, the sudden movement takes you out of harms way, reducing the damage you take from the triggering attack by {@dice 2d6}. Once this property of the armor has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Silver-Eagle-Studded-Cuirass.webp"
            }
          }
        ]
      }
    },
    {
      name: "Sir Varion's Helm",
      source: "GriffonsSaddlebag2",
      page: 162,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This helm was worn by the iconic hero Sir Varion, whose feats of fearlessness preceded him wherever he traveled. While wearing the helm, you can hold your breath for up to three times the normal duration.",
        "In addition, when you make a saving throw against being {@condition frightened}, you can roll a {@dice d6} and add the number rolled to the save. This property can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Sir-Varions-Helm.webp"
            }
          }
        ]
      }
    },
    {
      name: "Sir Varion's Lance",
      source: "GriffonsSaddlebag2",
      page: 162,
      baseItem: "lance|phb",
      type: "M",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      weaponCategory: "martial",
      property: [
        "R",
        "S"
      ],
      dmg1: "1d12",
      dmgType: "P",
      bonusWeapon: "+1",
      entries: [
        "This weighty lance was originally designed for Sir Varion, a brave knight with a famous disregard for horses. You gain a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has the heavy property, but is uniquely balanced to function well in close-quarters combat. Attacking a target within 5 feet of you with this weapon doesn't impose disadvantage on the attack roll.",
        "If you are attuned to {@item Sir Varion's shield|GriffonsSaddlebag2}, you can wield this weapon with one hand, instead of two, while also holding the shield."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Sir-Varions-Lance.webp"
            }
          }
        ]
      }
    },
    {
      name: "Sir Varion's Mantle",
      source: "GriffonsSaddlebag2",
      page: 162,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This sturdy, waterproof riding cape once belonged to Sir Varion, a famed knight known for his charm and eccentricity. While wearing this cape, you can spend 10 minutes to cast the {@spell find steed} spell from it. When you do, the summoned steed is in the form of a {@creature giant toad|MM}. The steed remains for the duration or until your attunement to the mantle ends. When the steed drops to 0 hit points, this property can't be used again until 2 days have passed.",
        "In addition, while you're mounted, you have advantage on Charisma ({@skill Persuasion}) checks."
      ],
      attachedSpells: [
        "find steed"
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Sir-Varions-Mantle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Sir Varion's Shield",
      source: "GriffonsSaddlebag2",
      page: 162,
      type: "S",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      weight: 6,
      ac: 2,
      bonusAc: "+1",
      entries: [
        "This large shield once belonged to Sir Varion, a noble knight who strode bravely through battles on ice, sand, or swamp. While holding this shield, you ignore nonmagical {@quickref difficult terrain||3} and have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Sir-Varions-Shield.webp"
            }
          }
        ]
      }
    },
    {
      name: "Snake Charmer's Flute",
      source: "GriffonsSaddlebag2",
      page: 164,
      type: "INS",
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "You must be proficient with wind instruments to use this flute. While you are attuned to the flute, ordinary snakes are indifferent toward you and will not attack you unless you threaten or harm them. For the purposes of this item, this includes flying snakes, poisonous snakes, and constrictor snakes, although swarms and giant versions of such creatures have a {@chance 50} chance of being indifferent to you instead.",
        "You can use an action to play the flute. While you continue to play the flute each round as an action, any snake that comes within 30 feet of you and isn't under another creature's control must make a Wisdom check contested by your Charisma check. If you lose the contest, the snake behaves as it normally would and can't be swayed by the flute's music for the next 24 hours. If you win the contest, the snake is swayed by the flute's music and becomes friendly to you and your companions for as long as you continue to play the instrument. A friendly snake obeys your mental commands. If you issue no commands to a friendly snake, it defends itself but otherwise takes no actions. If a friendly snake starts its turn and can't hear the flute's music, your control over that snake ends, and the snake behaves as it normally would and can't be swayed by the flute's music for the next 24 hours. Your control over a snake ends early if you or your companions do anything harmful to it."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Snake-Charmers-Flute.webp"
            }
          }
        ]
      },
      additionalSources: [
        {
          source: "XGE",
          page: 83
        }
      ]
    },
    {
      name: "Staff of Cubic Cultivation",
      source: "GriffonsSaddlebag2",
      page: 169,
      baseItem: "quarterstaff|phb",
      tier: "minor",
      rarity: "uncommon",
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
        "This staff has a perfect cube of blue crystal at its top that slowly drips with a viscous ooze. The staff has 10 charges. As an action, you can tap the head of the staff on the ground and expend 1 or more of its charges to create a 5-foot cube of a mysterious, gelatinous material for each expended charge. Each cube appears in an unoccupied space within 5 feet of you or adjacent to another cube you create as part of this action. The cubes are translucent objects that have AC 10, 20 hit points, and resistance to acid damage. Creating a cube in a space smaller than 5 feet across causes the cube to squeeze and fit the space. A cube remains for 1 minute or until it's reduced to 0 hit points, after which it dissolves into a puddle of slime and vanishes.",
        "You can climb or walk on the cubes. However, their sticky surfaces are considered {@quickref difficult terrain||3}.",
        "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the gem on top of the staff shatters and is destroyed, creating a gelatinous cube in its place that's hostile toward you. When this happens, the staff becomes a nonmagical quarterstaff."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Staff-of-Cubic-Cultivation.webp"
            }
          }
        ]
      }
    },
    {
      name: "Staff of the Dream Shepherd",
      source: "GriffonsSaddlebag2",
      page: 169,
      baseItem: "quarterstaff|phb",
      tier: "major",
      rarity: "uncommon",
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
        "This staff's cushioned handle is lined with soft wool and decorated with star and moon patches. While the staff is within 5 feet of you, you can use an action to immediately fall asleep, but otherwise can't be put to sleep by magical means. While attuned to the staff, you regain 1 extra Hit Die whenever you finish a long rest.",
        "In addition, while holding the staff, you can use an action to summon a flock of spectral sheep. The sheep run in a line 20 feet long and 10 feet wide originating from you before disappearing. Each creature of your choice in the area must make a Wisdom saving throw against your spell save DC, taking {@damage 2d6} psychic damage on a failed save, or half as much damage on a successful one. If a creature fails the saving throw and has 20 hit points or fewer after taking this damage, it also falls asleep. Undead and creatures immune to being charmed can't be put to sleep in this way. A sleeping creature is {@condition unconscious} and stays asleep for 1 minute, until it takes damage, or until someone uses an action to shake or slap the creature awake. Once this property of the staff has been used, it can't be used again until the next dawn. "
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Staff-of-the-Dream-Shepherd.webp"
            }
          }
        ]
      }
    },
    {
      name: "Staff of the Vineyard",
      source: "GriffonsSaddlebag2",
      page: 169,
      baseItem: "quarterstaff|phb",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a cleric, druid, monk, or ranger",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "druid"
        },
        {
          class: "monk"
        },
        {
          class: "ranger"
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
        "This staff can be wielded as a magic quarterstaff. A clutch of up to 10 grapes hangs from the end of the staff's magical length of vine. A creature within reach of the staff can use an action to eat one of the grapes, which duplicates the effect of eating a berry from the {@spell goodberry} spell. {@dice 1d10} eaten grapes regrow on the clutch daily at dawn.",
        "While holding the staff, you can use an action to cast the {@spell entangle} spell from it (save DC 13), causing twisting grapevines to sprout from the ground in the target area. If a creature {@condition restrained} by these vines makes a Strength check to free itself and fails, that creature becomes magically drunk until the end of its next turn. A drunk creature is {@condition poisoned} for the duration. Once this property of the staff has been used, it can't be used again until the next dawn."
      ],
      attachedSpells: [
        "entangle",
        "goodberry"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Staff-of-the-Vineyard.webp"
            }
          }
        ]
      }
    },
    {
      name: "Stonemason's Companion",
      source: "GriffonsSaddlebag2",
      page: 172,
      baseItem: "mason's tools|phb",
      type: "AT",
      tier: "major",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "These tools were crafted by a lonely stonemason with a desire for a companion. You gain a +1 bonus to ability checks made using this set of mason's tools.",
        "If you are proficient with mason's tools, you can use these tools to carve 10 gp worth of fine stone into the shape of a Small or smaller creature over the course of a full workday, mimicking the effects of the {@spell find familiar} spell with the following changes: the familiar is an elemental and, while it remains motionless, it is indistinguishable from a stone statue.",
        "When the familiar falls to 0 hit points, the spell ends and it crumbles into a pile of nonmagical rubble. While a familiar created by the stonemason's companion exists, you can't use the tools to create another one."
      ],
      attachedSpells: [
        "find familiar"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Stonemasons-Companion.webp"
            }
          }
        ]
      }
    },
    {
      name: "Stuffy Familiar",
      source: "GriffonsSaddlebag2",
      page: 173,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This small stuffed animal is soft to the touch and perfect for hugging. If you can cast the {@spell find familiar} spell, you can use the animal as the material component for the spell, without it being consumed. When you do, the familiar inhabits the form of the stuffed animal, whose appearance you can change as part of casting the spell in this way. The familiar is a construct, in addition to being either a celestial, fey, or fiend, but its statistics are otherwise unchanged from its normal form. The familiar's stuffed animal form must be appropriate to the statistics of its normal animal one. For example, a familiar within a griffon stuffed animal could use the statistics for a {@creature cat} or {@creature hawk}, but not a {@creature poisonous snake}. The stuffed animal grows or shrinks to match the size of the familiar's normal form.",
        "While the familiar remains motionless, it is indistinguishable from a normal stuffed animal. If you temporarily dismiss the familiar, the stuffed animal and familiar disappear into a pocket dimension together. If the familiar is dismissed forever or drops to 0 hit points, it leaves the stuffed animal behind."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Stuffy-Familiar.webp"
            }
          }
        ]
      }
    },
    {
      name: "Thomas's Dimensional Trousers",
      source: "GriffonsSaddlebag2",
      page: 175,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This flashy set of pants has four pockets that each lead to a special, extradimensional space. Each pocket is six inches wide at the mouth and can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The pants always weigh 1 pound, regardless of their contents.",
        "Placing an object in one of the pants' pockets follows the normal rules for interacting with objects. Retrieving an item from the pants requires an action as your hand rummages around inside for a few moments before finding the item it's looking for.",
        "If the pants are overloaded, pierced, or torn, they rupture and tear, scattering their contents in a 300-foot radius around you. Casting the {@spell mending} spell on the pants daily for 30 days restores the pants' connection to the extradimensional spaces. If one or more pockets are turned inside out, their contents spill forth, unharmed, but the pocket must be put right before it can be used again. Breathing creatures inside the pocket can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.",
        "Placing the pants inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Thomas'-Dimensional-Trousers.webp"
            }
          }
        ]
      }
    },
    {
      name: "Titan Cricket Greaves",
      source: "GriffonsSaddlebag2",
      page: 175,
      tier: "minor",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      entries: [
        "These unusual leg braces are crafted from the legs of a giant cricket. While wearing the braces, your long jump is up to 25 feet and your high jump is up to 15 feet, unless it's already higher, with or without a running start. Further, your walking speed increases by 5 feet.",
        "In addition, you can use an action to rub your legs together while wearing the braces to create the signature sound of one or many crickets. The sound can be as quiet as a whisper or as loud as a scream."
      ],
      lootTables: [
        "Magic Item Table B2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Titan-Cricket-Greaves.webp"
            }
          }
        ]
      }
    },
    {
      name: "Trampling Crossbow",
      source: "GriffonsSaddlebag2",
      page: 177,
      baseItem: "heavy crossbow|phb",
      type: "R",
      tier: "major",
      rarity: "uncommon",
      weight: 18,
      weaponCategory: "martial",
      property: [
        "A",
        "H",
        "LD",
        "2H"
      ],
      range: "100/400",
      dmg1: "1d10",
      dmgType: "P",
      entries: [
        "This heavy crossbow carries with it the force of a raging bull. When you roll a 20 on an attack roll made with this magic weapon, the bolt transforms into a spectral stampede immediately after it hits the target. When it does, the target and up to 2 other targets of your choice that you can see within 15 feet of it must make a DC 13 Strength saving throw. On a failed save, a target takes {@damage 1d8} bludgeoning damage, and if it is Large or smaller, it's pushed 10 feet away from you. On a successful save, a target takes half as much bludgeoning damage and isn't pushed. This bludgeoning damage is doubled against objects and structures."
      ],
      ammoType: "crossbow bolt|phb",
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Trampling-Crossbow.webp"
            }
          }
        ]
      }
    },
    {
      name: "Vain Virtuoso's Violin",
      source: "GriffonsSaddlebag2",
      page: 179,
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      curse: true,
      entries: [
        "This finely crafted instrument is inlaid with intricate pearl designs. When you give another creature a Bardic Inspiration die using this violin, you also gain one yourself, which is a d4.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This violin is cursed, and becoming attuned to it extends the curse to you. When a creature that you can see (including yourself) fails an ability check, attack roll, or saving throw after adding the bonus from your Bardic Inspiration to the total of the roll, you take psychic damage equal to the number rolled on the Bardic Inspiration die as you lose faith in your own abilities. This damage ignores resistance and immunity."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Vain-Virtuosos-Violin.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wand of Dowsing",
      source: "GriffonsSaddlebag2",
      page: 182,
      type: "WD|DMG",
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This hazel wand has 3 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell locate object} spell from it. When the wand is used to detect water, its range increases to 10 miles.",
        "The wand regains {@dice 1d3} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the wand bursts into a small cloud of harmless steam."
      ],
      attachedSpells: [
        "locate object"
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wand-of-Dowsing.webp"
            }
          }
        ]
      }
    },
    {
      name: "Waterskin of Voices",
      source: "GriffonsSaddlebag2",
      page: 186,
      tier: "minor",
      rarity: "uncommon",
      wondrous: true,
      entries: [
        "This leather waterskin has a magical beverage inside that allows you to briefly alter your voice. When found, the waterskin has {@dice 1d6 + 4} servings. You can drink 1 of the servings while holding the waterskin using an action. When you do, choose a voice from a creature you've heard or one from your imagination. The next 25 words you speak within 10 minutes sound virtually indistinguishable from the voice you chose, though a successful DC 20 Wisdom ({@skill Insight}) check reveals that the voice is magically altered. If the voice you chose belongs to another creature, that creature automatically knows that the voice is altered."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Waterskin-of-Voices.webp"
            }
          }
        ]
      }
    },
    {
      name: "Weapon of Verdict",
      type: "GV|DMG",
      requires: [
        {
          type: "M"
        }
      ],
      inherits: {
        nameSuffix: " of Verdict",
        source: "GriffonsSaddlebag2",
        page: 187,
        tier: "major",
        rarity: "uncommon",
        reqAttune: "by a creature of good alignment",
        reqAttuneTags: [
          {
            alignment: [
              "G"
            ]
          }
        ],
        recharge: "dawn",
        rechargeAmount: "{@dice 1d3}",
        charges: 3,
        entries: [
          "These polished wooden weapons are traditionally used by the clerics and paladins of a righteous order to punish evildoers and aid the needy. Each of these magic weapons is blessed by a powerful priest or celestial. A weapon of verdict has 3 charges and regains {@dice 1d3} charges daily at dawn. You can use these charges to create the following effects:",
          {
            type: "entries",
            name: "Condemn",
            entries: [
              "When you hit a creature with this weapon, you can expend 1 charge to deal an extra  {@damage 1d8} fire damage to the target."
            ]
          },
          {
            type: "entries",
            name: "Commend",
            entries: [
              "As an action, you can expend 1 charge to touch a creature other than yourself with this weapon to restore {@dice 1d8 + 2} hit points to that creature."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table F2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 187,
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a creature of good alignment",
      reqAttuneTags: [
        {
          alignment: [
            "G"
          ]
        }
      ],
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
            }
          }
        ]
      },
      entries: [
        "These polished wooden weapons are traditionally used by the clerics and paladins of a righteous order to punish evildoers and aid the needy. Each of these magic weapons is blessed by a powerful priest or celestial. A weapon of verdict has 3 charges and regains {@dice 1d3} charges daily at dawn. You can use these charges to create the following effects:",
        {
          type: "entries",
          name: "Condemn",
          entries: [
            "When you hit a creature with this weapon, you can expend 1 charge to deal an extra  {@damage 1d8} fire damage to the target."
          ]
        },
        {
          type: "entries",
          name: "Commend",
          entries: [
            "As an action, you can expend 1 charge to touch a creature other than yourself with this weapon to restore {@dice 1d8 + 2} hit points to that creature."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Axe",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 3,
            value: 50,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            property: [
              "V"
            ],
            dmg1: "1d6",
            dmgType: "S",
            dmg2: "1d8",
            axe: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Axe of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 3,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            property: [
              "V"
            ],
            dmg1: "1d6",
            dmgType: "S",
            dmg2: "1d8",
            axe: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Battle Axe",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 4,
            value: 100,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "V"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            axe: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Battle Axe of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 4,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "V"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            axe: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Double-Bladed Scimitar",
            source: "ERLW",
            page: 21,
            type: "M",
            rarity: "none",
            weight: 6,
            value: 10000,
            weaponCategory: "martial",
            property: [
              "S",
              "2H"
            ],
            dmg1: "2d4",
            dmgType: "S",
            sword: true,
            weapon: true,
            entries: [
              {
                type: "entries",
                name: "Special",
                entries: [
                  "If you attack with a double-bladed scimitar as part of the {@action Attack} action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals {@damage 1d4} slashing damage on a hit, instead of {@damage 2d4}."
                ]
              }
            ],
            hasFluff: true
          },
          specificVariant: {
            name: "Double-Bladed Scimitar of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 6,
            weaponCategory: "martial",
            property: [
              "S",
              "2H"
            ],
            dmg1: "2d4",
            dmgType: "S",
            sword: true,
            weapon: true,
            entries: [
              {
                type: "entries",
                name: "Special",
                entries: [
                  "If you attack with a double-bladed scimitar as part of the {@action Attack} action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals {@damage 1d4} slashing damage on a hit, instead of {@damage 2d4}."
                ]
              }
            ],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Hammer",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 3,
            value: 20,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            dmg1: "1d6",
            dmgType: "B",
            hammer: true,
            weapon: true,
            entries: []
          },
          specificVariant: {
            name: "Hammer of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 3,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            dmg1: "1d6",
            dmgType: "B",
            hammer: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Heavy Hammer",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 4,
            value: 100,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "V"
            ],
            dmg1: "1d8",
            dmgType: "B",
            dmg2: "1d10",
            hammer: true,
            weapon: true,
            entries: []
          },
          specificVariant: {
            name: "Heavy Hammer of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 4,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "V"
            ],
            dmg1: "1d8",
            dmgType: "B",
            dmg2: "1d10",
            hammer: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Hooked Shortspear",
            source: "OotA",
            page: 224,
            type: "M",
            rarity: "unknown",
            weight: 2,
            weaponCategory: "martial",
            property: [
              "L"
            ],
            dmg1: "1d4",
            dmgType: "P",
            weapon: true,
            entries: [
              "On a hit with this weapon, the wielder can forgo dealing damage and attempt to trip the target, in which case the target must succeed on a Strength saving throw or fall {@condition prone}. The DC is 8 + the wielder's Strength modifier + the wielder's proficiency bonus."
            ]
          },
          specificVariant: {
            name: "Hooked Shortspear of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 2,
            weaponCategory: "martial",
            property: [
              "L"
            ],
            dmg1: "1d4",
            dmgType: "P",
            weapon: true,
            entries: [
              "On a hit with this weapon, the wielder can forgo dealing damage and attempt to trip the target, in which case the target must succeed on a Strength saving throw or fall {@condition prone}. The DC is 8 + the wielder's Strength modifier + the wielder's proficiency bonus."
            ],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Hoopak",
            source: "DSotDQ",
            page: 188,
            type: "M",
            rarity: "none",
            weight: 2,
            value: 10,
            weaponCategory: "martial",
            property: [
              "A",
              "F",
              "S",
              "2H"
            ],
            range: "40/160",
            dmg1: "1d6",
            dmgType: "P",
            weapon: true,
            entries: [
              "A hoopak is a sturdy stick with a sling at one end and a pointed tip at the other.",
              {
                type: "entries",
                name: "Special",
                entries: [
                  "When you make a melee attack with this weapon, you ignore its ammunition property. You can use the hoopak as a martial ranged weapon. If you do, it uses the ammunition property, uses sling bullets, and deals {@damage 1d4} bludgeoning damage on a hit."
                ]
              }
            ],
            ammoType: "sling bullet|phb",
            hasFluffImages: true
          },
          specificVariant: {
            name: "Hoopak of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 2,
            weaponCategory: "martial",
            property: [
              "A",
              "F",
              "S",
              "2H"
            ],
            range: "40/160",
            dmg1: "1d6",
            dmgType: "P",
            weapon: true,
            entries: [
              "A hoopak is a sturdy stick with a sling at one end and a pointed tip at the other.",
              {
                type: "entries",
                name: "Special",
                entries: [
                  "When you make a melee attack with this weapon, you ignore its ammunition property. You can use the hoopak as a martial ranged weapon. If you do, it uses the ammunition property, uses sling bullets, and deals {@damage 1d4} bludgeoning damage on a hit."
                ]
              }
            ],
            ammoType: "sling bullet|phb",
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Long Sword",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 3,
            value: 200,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "V"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            sword: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Long Sword of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 3,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "V"
            ],
            dmg1: "1d8",
            dmgType: "S",
            dmg2: "1d10",
            sword: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Mattock",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 10,
            value: 100,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "2H"
            ],
            dmg1: "1d12",
            dmgType: "P",
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Mattock of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 10,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "H",
              "2H"
            ],
            dmg1: "1d12",
            dmgType: "P",
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Staff",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 2,
            value: 2,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            property: [
              "V"
            ],
            dmg1: "1d4",
            dmgType: "B",
            dmg2: "1d6",
            staff: true,
            weapon: true,
            entries: []
          },
          specificVariant: {
            name: "Staff of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 2,
            currencyConversion: "M-E",
            weaponCategory: "simple",
            property: [
              "V"
            ],
            dmg1: "1d4",
            dmgType: "B",
            dmg2: "1d6",
            staff: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Sword",
            source: "TLotRR",
            page: 73,
            type: "M",
            rarity: "none",
            weight: 2,
            value: 150,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "F",
              "V"
            ],
            dmg1: "1d6",
            dmgType: "S",
            dmg2: "1d8",
            sword: true,
            weapon: true,
            hasFluffImages: true,
            entries: []
          },
          specificVariant: {
            name: "Sword of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 2,
            currencyConversion: "M-E",
            weaponCategory: "martial",
            property: [
              "F",
              "V"
            ],
            dmg1: "1d6",
            dmgType: "S",
            dmg2: "1d8",
            sword: true,
            weapon: true,
            entries: [],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Yklwa",
            source: "ToA",
            page: 32,
            type: "M",
            rarity: "none",
            weight: 3,
            value: 100,
            weaponCategory: "simple",
            property: [
              "T"
            ],
            range: "10/30",
            dmg1: "1d8",
            dmgType: "P",
            weapon: true,
            entries: [
              "A yklwa (pronounced YICK-ul-wah) is a simple melee weapon that is the traditional weapon of Chultan warriors. A yklwa consists of a 3-foot wooden shaft with a steel or stone blade up to 18 inches long. Although it has the thrown weapon property, the yklwa is not well balanced for throwing."
            ]
          },
          specificVariant: {
            name: "Yklwa of Verdict",
            source: "GriffonsSaddlebag2",
            type: "M",
            rarity: "uncommon",
            weight: 3,
            weaponCategory: "simple",
            property: [
              "T"
            ],
            range: "10/30",
            dmg1: "1d8",
            dmgType: "P",
            weapon: true,
            entries: [
              "A yklwa (pronounced YICK-ul-wah) is a simple melee weapon that is the traditional weapon of Chultan warriors. A yklwa consists of a 3-foot wooden shaft with a steel or stone blade up to 18 inches long. Although it has the thrown weapon property, the yklwa is not well balanced for throwing."
            ],
            page: 187,
            tier: "major",
            reqAttune: "by a creature of good alignment",
            reqAttuneTags: [
              {
                alignment: [
                  "G"
                ]
              }
            ],
            recharge: "dawn",
            rechargeAmount: "{@dice 1d3}",
            charges: 3,
            lootTables: [
              "Magic Item Table F2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weapon-of-Verdict.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Weapon of Verdict",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Weaving Wasp Needles",
      source: "GriffonsSaddlebag2",
      page: 187,
      baseItem: "dart|phb",
      type: "R",
      tier: "major",
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
        "This pair of dark, chiseled throwing needles are linked by a magical bond. A needle that hits a Large or smaller creature flies around it for 1 minute or until the creature falls to 0 hit points. If both needles fly around the same creature, they spin a magical thread that binds and restrains it. The creature is {@condition restrained} until freed or until you take a bonus action to speak the needles' command word to release it. A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Once the needles restrain a creature in this way, this property can't be used again until the next dawn.",
        "In addition, you can use the needles as a set of {@item weaver's tools|PHB}. These magical needles can act on their own to either mend a simple tear or craft a simple garment given the proper materials in 1 minute or over the course of a short rest, respectively. As an action, you can speak the needles' other command word, followed by a description of the task, to cause them to spring to life and begin sewing and crafting. Uttering this command word again causes them to stop early and fall to the ground."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Weaving-Wasp-Needles.webp"
            }
          }
        ]
      }
    },
    {
      name: "Whirlpool Dart",
      source: "GriffonsSaddlebag2",
      page: 188,
      baseItem: "dart|phb",
      type: "R",
      tier: "major",
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
        "This dart feels cold and hefty in the hand, but flies effortlessly when thrown. As an action, you can throw this dart at a point within 20 feet of you and speak its command word to cause it to create a wild, spiraling whirlpool in a 15-foot-radius, 10-foot-high cylinder centered on that point. Each creature in the area excluding you must make a DC 13 Strength saving throw. On a failed save, a creature takes {@damage 4d4} bludgeoning damage and is pulled up to 15 feet toward the center of the cylinder. On a successful save, a creature takes half as much damage and isn't pulled.",
        "In addition, unsecured objects that are completely within the cylinder are automatically pulled 15 feet toward the center by this effect, and all nonmagical flames within the cylinder are extinguished.",
        "The dart's property can't be used again until the next dawn. In the meantime, the dart can still be used as a magic weapon."
      ],
      lootTables: [
        "Magic Item Table F1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Whirlpool-Dart.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wildskin Armor",
      source: "GriffonsSaddlebag2",
      page: 190,
      baseItem: "hide armor|phb",
      type: "MA",
      tier: "major",
      rarity: "uncommon",
      reqAttune: "by a druid",
      reqAttuneTags: [
        {
          class: "druid"
        }
      ],
      weight: 12,
      ac: 12,
      entries: [
        "This enchanted hide armor magically conforms to your body and moves naturally with your movements.",
        "While wearing this armor, you can choose to have it reinforce your new form when you use your Wild Shape. When you do, your AC while you are transformed is equal to 14 + your Dexterity modifier (maximum 2), unless it's already higher. You gain this benefit even if the armor merges into your new form. Once this property has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wildskin-Armor.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wisp Cloak",
      source: "GriffonsSaddlebag2",
      page: 191,
      tier: "major",
      rarity: "uncommon",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "This near-weightless cloak billows softly even without wind. While wearing this cloak, you have advantage on death saving throws and can move normally through the space of any Medium or smaller creature once on each of your turns, but can't stop there.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This cloak is cursed by the spirit of a person who was betrayed by a close friend. Once you wear this cursed cloak, you can't remove it unless you are targeted by the {@spell remove curse} spell or similar magic. While wearing the cloak, whenever you move or end your turn within 10 feet of a friendly creature with 0 hit points for the first time on each of your turns, that creature must succeed on a DC 13 Constitution saving throw or suffer a failed death saving throw."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table F2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wisp-Cloak.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wispy Sour (Uncommon)",
      source: "GriffonsSaddlebag2",
      page: 192,
      type: "P",
      tier: "minor",
      rarity: "uncommon",
      entries: [
        "The typical {@item wispy sour|GriffonsSaddlebag2}, a common potion, is a specialty alcoholic beverage that causes you to float harmlessly off the floor. When you drink this potion, you gain a flying speed of 10 feet for 1 minute, but can only hover 1 foot above the ground when doing so. The drink is smooth, sweet, and has a slight aftertaste of ash. A tiny, single light from the dancing lights spell is often cast within the drink when served. Due to its magical nature, the alcohol within this potion affects a creature twice as much as the alcohol within a nonmagical beverage.",
        "The following wispy sour is an uncommon variant with additional properties. It also tastes better.",
        "For 1 minute after drinking this potion, you can regain {@dice 1d8 + 2} hit points once on each of your turns when you reduce a hostile creature to 0 hit points. If the creature is a construct or undead, you don't regain any hit points in this way. This variant contains a harmless will-o'-wisp fragment. Hazy visions of lost souls occasionally drift through the drink's cheery liquid."
      ],
      lootTables: [
        "Magic Item Table B1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wispy-Sour.webp"
            }
          }
        ]
      }
    }
  ] as any as Item[])
};
