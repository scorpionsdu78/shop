import type {Item} from '../../../models/item.ts'

export default (): Promise<Item[]> => {
  return Promise.resolve([
    {
      name: "Abjurer's Bangle (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 32,
      type: "",
      tier: "minor",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "You can clasp or remove this metal bracelet around the wrist or ankle of yourself or a willing creature within your reach using an action. The bangle emits a ward of abjuration magic from it that has 120 hit points. A creature wearing the bangle can use its reaction when it takes damage to speak the bangle's command word, causing the magical ward to take the damage instead. Any excess damage carries over to the creature when the bangle's ward is reduced to 0 hit points, at which point the bangle becomes a nonmagical bracelet."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
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
      name: "Aciurgist's Blade",
      source: "GriffonsSaddlebag2",
      page: 32,
      baseItem: "glaive|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a paladin",
      reqAttuneTags: [
        {
          class: "paladin"
        }
      ],
      weight: 6,
      weaponCategory: "martial",
      property: [
        "H",
        "R",
        "2H"
      ],
      dmg1: "1d10",
      dmgType: "S",
      entries: [
        "This smooth, magic glaive bears holy sigils and oaths down the length of its haft and is always impeccably clean. While holding it, your reach increases by 5 feet when using your Lay on Hands feature.",
        "Once on each of your turns when you expend a spell slot to use your Divine Smite feature on an attack made with this glaive, you can choose one of the following effects to inflict on the target until the start of your next turn. When you expend a spell slot of 2nd level or higher, you can inflict an additional effect for each slot level above 1st, choosing each effect no more than once.",
        {
          type: "list",
          items: [
            "The target has disadvantage on the next attack roll it makes.",
            "The target's speed is reduced by 10 feet.",
            "The next time the target takes damage, it takes an additional {@damage 1d8} necrotic or radiant damage (your choice).",
            "The next attack made against the target is made with advantage.",
            "The target can't regain hit points."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Aciurgists-Blade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Amulet of the Spirit Naga",
      source: "GriffonsSaddlebag2",
      page: 34,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      entries: [
        "While wearing this platinum pendant, you are immune to the {@condition poisoned} condition and have immunity to poison damage.",
        "In addition, if you die while wearing the pendant, you immediately return to life with half your hit points. This property restores any missing body parts, neutralizes any poisons, and cures normal diseases afflicting you when you died, but has no effect if you die of old age. Once you're returned to life in this way, the amulet loses this property."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Amulet-of-the-Spirit-Naga.webp"
            }
          }
        ]
      }
    },
    {
      name: "Arborguard Shield",
      source: "GriffonsSaddlebag2",
      page: 37,
      baseItem: "shield|phb",
      type: "S",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 6,
      ac: 2,
      bonusAc: "+1",
      entries: [
        "This massive wooden shield was made using the bark of an ancient treant. While holding it, you have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
        "While holding this shield, you can speak its command word as an action to create a wall of up to twelve trees on a solid surface within 120 feet of you. Each tree is 5 feet across at its base, up to 20 feet tall, and must be contiguous with another tree. Alternatively, you can create a ringed wall of trees up to 25 feet in diameter centered on your space. The trees grow tightly next to each other, preventing movement between them and providing total cover to anything behind them. A tree only grows a canopy if there is room for it.",
        "If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a {@dc 16} Dexterity saving throw. On a failed save, the creature takes {@damage 8d6} bludgeoning or piercing damage (your choice), or half as much damage on a successful save.",
        "The wall is an object that can be damaged and thus breached. Each tree has AC 13, 20 hit points, and is vulnerable to fire damage. A tree disappears when it drops to 0 hit points or when the effect ends.",
        "While you're within 30 feet of the wall, you can see through a tree's space (no action required) using your senses. When you make a melee weapon attack while within 30 feet of one or more of the trees, you can make the attack as if you were in one of the trees' spaces. When you do, the tree magically forms a wooden copy of you and any weapon you're holding to make the attack: duplicating any of its effects.",
        "The wall lasts as long as you concentrate (as if concentrating on a spell), to a maximum of 1 minute, or until it's dispelled by a {@spell dispel magic|PHB} spell of 6th-level or higher, or until you are no longer holding the shield. Once this property of the shield has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Arborguard-Shield.webp"
            }
          }
        ]
      }
    },
    {
      name: "Arc of the Alicorn",
      source: "GriffonsSaddlebag2",
      page: 37,
      baseItem: "longbow|phb",
      type: "R",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 2,
      weaponCategory: "martial",
      property: [
        "A",
        "H",
        "2H"
      ],
      range: "150/600",
      dmg1: "1d10",
      dmgType: "P",
      modifySpeed: {
        static: {
          fly: 90
        }
      },
      recharge: "dawn",
      rechargeAmount: 4,
      charges: 4,
      entries: [
        "This magic ivory bow is sculpted to look like a pair of curved unicorn horns and is strung with the finely braided hair of a pegasus' mane. This bow's damage die is a {@damage d10} instead of a {@damage d8}.",
        "The bow has 4 charges for the following properties. It regains all expended charges daily at dawn.",
        {
          type: "entries",
          name: "Flight",
          entries: [
            "While holding the bow, you can use a bonus action to expend 1 of its charges to cause small wings to appear on your feet that last until the end of your turn. For the duration, you have a flying speed of 90 feet. While the wings remain, you can choose to expend another charge from the bow at the end of each of your turns (no action required) to extend the wings' duration until the end of your next turn."
          ]
        },
        {
          type: "entries",
          name: "Healing Horn",
          entries: [
            "While holding the bow, you can use a bonus action to expend 1 of its charges to fire a magical arrow of pure light at a creature that you can see within 60 feet of you, causing that creature to regain {@dice 2d6 + 2} hit points."
          ]
        },
        {
          type: "entries",
          name: "Trampling Arrow",
          entries: [
            "When you make a ranged attack with the bow, you can expend 1 of its charges to cause the fired arrow to transform into a spectral, charging pegasus. On a hit, the target takes an extra {@damage 3d6} force damage and must succeed on a {@dc 16} Strength saving throw or be knocked {@condition prone}. If the target of the attack is already {@condition prone}, you ignore the normal disadvantage imposed on ranged attack rolls against {@condition prone} creatures and make the roll with advantage instead."
          ]
        }
      ],
      ammoType: "arrow|phb",
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Arc-of-the-Alicorn.webp"
            }
          }
        ]
      }
    },
    {
      name: "Archivist's Key",
      source: "GriffonsSaddlebag2",
      page: 39,
      type: "",
      tier: "minor",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This magical key is one of several made by a secret order of historians and archivists. While holding the key, you can use an action to twist the key, as if you were unlocking a door. When you do, a magical, spectral door slowly appears in front of you over the course of 1 minute, duplicating the effect of the {@spell Mordenkainen's Magnificent Mansion|PHB|magnificent mansion} spell with the following change. The dwelling always includes a large library that magically includes copies of books, scrolls, maps, and more. The library does not count toward the total amount of space created by the spell. Its contents are strangely organized and seemingly change each time the key is used. A creature can visit the library and attempt to uncover a piece of knowledge, such as ancient poetry, the history of a forgotten kingdom, or the family lineage of a tyrannical king. The GM determines the checks and DCs needed to locate a given piece of information. For example, a book of foreign nursery rhymes may be easy to find, but a copy of necromantic research documents would be extremely difficult, if not impossible.",
        "When the spell ends, the key can't be used this way again for 24 hours."
      ],
      attachedSpells: [
        "mordenkainen's magnificent mansion"
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Archivists-Key.webp"
            }
          }
        ]
      }
    },
    {
      name: "Blood Moon Blade",
      source: "GriffonsSaddlebag2",
      page: 45,
      baseItem: "longsword|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      curse: true,
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
        "This fine blade is crafted from a strange black metal and bears a hole above the hilt that seems to draw in blood. You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
        "When you hit a Small or larger living creature with this weapon, that creature takes an extra {@damage 2d4} necrotic damage and you regain hit points equal to half the amount of necrotic damage dealt in this way. Constructs, plants, and undead creatures are immune to this necrotic damage.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This sword is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear. In addition, while you remain cursed, the number of hit points you regain when healed by magical means (other than the sword's effect) is halved."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Blood-Moon-Blade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bloodthirster Scimitar",
      source: "GriffonsSaddlebag2",
      page: 48,
      baseItem: "scimitar|phb",
      type: "M",
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weaponCategory: "martial",
      property: [
        "F",
        "L"
      ],
      dmg1: "1d6",
      dmgType: "S",
      entries: [
        "This carefully carved bone scimitar belonged to a cult of vicious monks whose extraordinary bloodlust and strength have been all but entirely erased from history. While you hold this magic sword, you have resistance to necrotic damage.",
        "When you take the {@action Attack} action while holding this sword, you can choose to forgo one of your attacks to sacrifice your own blood. When you do, you take {@damage 1d6 + 3} piercing damage from the sacrifice. This damage ignores resistance and immunity. This self-inflicted harm empowers the sword, granting you a cumulative +1 bonus to attack and damage rolls made with this magic weapon that lasts for 1 minute, up to a maximum bonus of +3. While the sword is empowered in this way, it deals an extra {@damage 1d6} necrotic damage to any target it hits."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bloodthirster-Scimitar.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bloody Marilith (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 48,
      type: "P",
      tier: "minor",
      rarity: "very rare",
      entries: [
        "The following {@item bloody marilith|GriffonsSaddlebag2} is a very rare variant with more powerful properties. It uses blood from a fiendish marilith, instead of a magical substitute, and pleasantly burns your tongue when drinking it. It also tastes better.",
        "When you drink this potion, you can take one reaction on every turn in a combat for 1 minute. Unlike its {@item Bloody Marilith (Common)|GriffonsSaddlebag2|common} variant, this potion's effect does not end when you use an additional reaction.",
        "Drinking additional {@item bloody marilith|GriffonsSaddlebag2|bloody mariliths} before you finish a long rest leaves your body feeling worn. When the potion's effect ends, you can't move or take actions until after your next turn, as a wave of lethargy sweeps over you."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bloody-Marilith.webp"
            }
          }
        ]
      }
    },
    {
      name: "Bow of the Spelldrinker",
      type: "GV|DMG",
      requires: [
        {
          name: "Longbow"
        },
        {
          name: "Shortbow"
        }
      ],
      inherits: {
        nameSuffix: " of the Spelldrinker",
        source: "GriffonsSaddlebag2",
        page: 50,
        tier: "major",
        rarity: "very rare",
        reqAttune: true,
        entries: [
          "This gilded bow creates hazy illusions of the cosmos when drawn. Attacks made with this magic bow deal an extra {@damage 1d4} force damage to any target hit by it.",
          "When you see a creature casting a spell within 60 feet of you while holding this bow, you can use your reaction to draw from your own life force and attempt to counter it. When you do, you take 30 force damage, which can't be reduced or prevented in any way, and fire a magical arrow of pure force from the bow toward the creature. If the creature is casting a spell of 5th level or lower, its spell fails and has no effect. In addition, the target must make a DC 16 saving throw, using its spellcasting ability. On a failed save, the creature takes 30 force damage as the magic is ripped from it. On a successful save, the creature takes half as much force damage. Once this property has been used, it can't be used again until you finish a short or long rest."
        ],
        lootTables: [
          "Magic Item Table H1|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bow-of-the-Spelldrinker.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 50,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bow-of-the-Spelldrinker.webp"
            }
          }
        ]
      },
      entries: [
        "This gilded bow creates hazy illusions of the cosmos when drawn. Attacks made with this magic bow deal an extra {@damage 1d4} force damage to any target hit by it.",
        "When you see a creature casting a spell within 60 feet of you while holding this bow, you can use your reaction to draw from your own life force and attempt to counter it. When you do, you take 30 force damage, which can't be reduced or prevented in any way, and fire a magical arrow of pure force from the bow toward the creature. If the creature is casting a spell of 5th level or lower, its spell fails and has no effect. In addition, the target must make a DC 16 saving throw, using its spellcasting ability. On a failed save, the creature takes 30 force damage as the magic is ripped from it. On a successful save, the creature takes half as much force damage. Once this property has been used, it can't be used again until you finish a short or long rest."
      ],
      variants: [
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
            name: "Longbow of the Spelldrinker",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "very rare",
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
            page: 50,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table H1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bow-of-the-Spelldrinker.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Bow of the Spelldrinker",
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
            name: "Shortbow of the Spelldrinker",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "very rare",
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
            page: 50,
            tier: "major",
            reqAttune: true,
            lootTables: [
              "Magic Item Table H1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bow-of-the-Spelldrinker.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Bow of the Spelldrinker",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Bulette Torpedo",
      source: "GriffonsSaddlebag2",
      page: 53,
      baseItem: "javelin|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 2,
      weaponCategory: "simple",
      property: [
        "T"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      bonusWeapon: "+2",
      entries: [
        "This javelin is protected by a tough carapace wrought from a slain bulette and can burrow through dirt and unworked stone in order to reach its mark. You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
        "When you make a ranged attack with this javelin, you can throw it into the ground instead. When you do, you can target either a creature you can see or space on the ground within the weapon's range. The space can be a place you can see or one you can describe by stating the distance and direction the javelin would travel through the ground to reach it, such as \"100 feet northwest\" or \"30 feet straight downward.\" The javelin effortlessly burrows through the ground (if able) to reach the target of the attack, stabbing through the ground at its destination. After the attack, it burrows back to your location, jumping out of the ground and back into your hand. When you roll a 20 on an attack roll made in this way, the target of the attack takes an extra {@damage 1d6} bludgeoning damage and {@damage 1d6} slashing damage as the weapon viciously erupts from the ground, and if the target is a Large or smaller creature, it must also succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked {@condition prone}. Attacking a {@condition prone} creature with this weapon doesn't impose disadvantage on your ranged attack rolls."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Bulette-Torpedo.webp"
            }
          }
        ]
      }
    },
    {
      name: "Camilla's Quicksilver Mirror",
      source: "GriffonsSaddlebag2",
      page: 54,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This hand mirror is roughly 1 foot tall and weighs 1 pound. While gazing into its reflective surface, you see a version of yourself that's ever-so-slightly different. For example, your legs may bend the opposite direction, your eyes may be pitch black, or your reflection simply takes a moment to match whatever it is you're doing. If you look at your reflection in the mirror while holding it and aren't attuned to the mirror, you are forced to make a DC 16 Wisdom saving throw. On a failed save, you are {@condition frightened} of the mirror, are unable to look away from or let go of it, and your speed becomes 0 for the duration. You can repeat this saving throw at the start of each of your turns or whenever you take damage while {@condition frightened} in this way, ending the effect on a success. If you can't see the mirror, you have advantage on the saving throw. On a successful save, you are immune to this effect for 24 hours.",
        "While attuned to the mirror, you can use an action to hold it out and force another creature within 30 feet of you that can see you to see its own reflection. That creature must succeed on a DC 16 Wisdom saving throw or suffer from one of the following effects (your choice):",
        {
          type: "entries",
          name: "Frighten",
          entries: [
            "The creature is {@condition frightened} of the mirror for up to 1 minute, is unable to look away from it, and its speed becomes 0 for the duration. The creature can repeat this saving throw at the start of each of its turns while frightened in this way, ending the effect on a success. If it can't see the mirror at the start of its turn, it has advantage on the saving throw. On a successful save, the creature is immune to this effect for 24 hours."
          ]
        },
        {
          type: "entries",
          name: "Store Reflection",
          entries: [
            "The creature's reflection is stored within the mirror. While stored, you can use an action to look into the mirror and cause your own reflection to become the stored one, simultaneously changing the appearance of your physical form as if you had cast the {@spell alter self} spell (Change Appearance option). This version of the spell lasts until it's dispelled. You can have up to 3 stored reflections in this way. A stored reflection is lost after it's used to alter your form. An affected creature is aware that its reflection has been stored, but not its or the mirror's purpose."
          ]
        },
        "These properties can be used a combined total of three times and regain all expended uses daily at dawn. Using a stored reflection to alter your appearance doesn't count against the mirror's total number of uses."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Camillas-Quicksilver-Mirror.webp"
            }
          }
        ]
      }
    },
    {
      name: "Carrion Shroud",
      source: "GriffonsSaddlebag2",
      page: 57,
      type: "",
      resist: [
        "poison"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "This ruffled cloak of dull feathers and down grants you the resilience and cunning of a ravenous vulture. When you move while wearing this cloak, small, tattered feathers drift from the cloak that vanish when they touch the ground. While wearing the cloak, your Constitution score increases by 2, to a maximum of 20, you have advantage on saving throws against disease and poison, and you have resistance to poison damage.",
        "In addition, while wearing the cloak, you can speak its command word as a bonus action to cause it to transform into a pair of sickly vulture wings for 1 minute. While the cloak is transformed, you gain a flying speed of 60 feet, and when you hit a creature that's missing any of its hit points with a melee weapon attack, that creature takes an extra {@damage 1d6} necrotic damage. This property of the cloak can't be used again until the next dusk.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This cloak is cursed, and becoming attuned to it extends the curse to you until you are targeted by the {@spell remove curse|PHB} spell. As long as you remain cursed, you are unwilling to part with the cloak, keeping it worn at all times. The cloak gives you an insatiable hunger for flesh, and while traditional food can sustain you, you no longer enjoy the smell or taste of it. While cursed, whenever you reduce a creature within 5 feet of you to 0 hit points, you're forced to make a DC 13 Wisdom saving throw. If the creature is a construct, ooze, plant, or undead, you automatically succeed on this saving throw. On a failed save, you are overcome with the urge to tear into the creature's flesh and feast: sacrificing any additional movement, action, or bonus action you had left on your turn. You can repeat this saving throw at the start of each of your following turns, ending your need to feast on a success."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Carrion-Shroud.webp"
            }
          }
        ]
      }
    },
    {
      name: "Charged Rapier",
      source: "GriffonsSaddlebag2",
      page: 58,
      baseItem: "rapier|phb",
      type: "M",
      resist: [
        "lightning"
      ],
      tier: "major",
      rarity: "very rare",
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
        "This blade snaps and crackles with electrical power as it's waved through the air. While holding the rapier, you have resistance to lightning damage. You gain a +1 bonus to attack and damage rolls made with this magic weapon, and it deals an extra {@damage 1d4} lightning damage to any target it hits.",
        {
          type: "entries",
          name: "Electric Charge",
          entries: [
            "If you are proficient with this weapon, when you move at least 20 feet in a straight line on your turn while holding this rapier, you can speak its command word as a bonus action to briefly disappear and transform into a bolt of lightning. When you do, choose an unoccupied space you can see within 20 feet of you that's along the same straight line and in the same direction in which you're moving. You form a 5-foot-wide line of lightning originating from yourself that extends to the unoccupied space. You reappear in that space as the bolt of lightning passes through anything in its path.",
            "If there are any creatures in the line of lightning, roll a {@dice d20} and add 9 to the roll. If the total of the roll meets or exceeds the AC of any creature in the line, that creature takes {@damage 1d4 + 1} lightning damage as you pierce through it as the bolt of lightning."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Charged-Rapier.webp"
            }
          }
        ]
      }
    },
    {
      name: "Chronal Sphere",
      source: "GriffonsSaddlebag2",
      page: 60,
      type: "",
      tier: "minor",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This brass sphere is roughly fist-sized and weighs 1 pound. It vibrates gently while you hold it as tiny mechanisms whir inside. While holding the sphere, you can use a bonus action to speak its command word, causing spectral clock hands to appear on its curved surface and indicate the current time. The hands remain on the surface of the sphere until you speak the command word again. This property only functions on the Material Plane.",
        {
          type: "entries",
          name: "Spells",
          entries: [
            "While holding the sphere, you can use an action to cast either the {@spell haste|PHB} or {@spell slow|PHB} spell (save DC 18, no concentration required) from it. Once the sphere has been used to cast a spell in this way, it can't be used to cast that spell again. When the sphere has been used to cast both of these spells, it loses this property."
          ]
        }
      ],
      attachedSpells: [
        "haste",
        "slow"
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Chronal-Sphere.webp"
            }
          }
        ]
      }
    },
    {
      name: "Chronomancer's Eyepiece",
      source: "GriffonsSaddlebag2",
      page: 60,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4 + 1}",
      charges: 5,
      entries: [
        "This singular lens lets you faintly see and command the flow of time around a target. The eyepiece has 5 charges and regains {@dice 1d4 + 1} expended charges daily at dawn. While wearing the eyepiece, you can expend 1 charge as a reaction at the end of another creature's turn to speak either of the eyepiece's two command words to warp the flow of time around that creature. You must be able to see the target, and it must be within 60 feet of you.",
        {
          type: "entries",
          name: "Past",
          entries: [
            "If the target is willing, it is teleported back to the space it was at the beginning of its turn. If another creature or object is occupying the space, the target is teleported to nearest unoccupied space instead. An unwilling target must succeed on a DC 16 Charisma saving throw or be teleported in this way against its will."
          ]
        },
        {
          type: "entries",
          name: "Future",
          entries: [
            "If the target is willing, it can immediately choose to move again, up to half its speed, without provoking opportunity attacks. After a target moves in this way, its speed is halved until the end of its next turn."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Chronomancers-Eyepiece.webp"
            }
          }
        ]
      }
    },
    {
      name: "Circlet of the Sharpened Mind",
      source: "GriffonsSaddlebag2",
      page: 60,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a creature with an Intelligence score of 17 or higher",
      reqAttuneTags: [
        {
          int: 17
        }
      ],
      wondrous: true,
      entries: [
        "This iron circlet has a magical pearl at its center and can hold up to 4 gemstones. When found, the circlet has 2 gemstones. A gemstone worth at least 5,000 gp can be added to the circlet over the course of 1 minute as it's magically drawn and fastened into place. While wearing the circlet, you can take a special {@action Attack} action on your turn to summon a number of floating, spectral swords equal to the number of gemstones in the circlet and make one melee spell attack with each of them against a target within 10 feet of you. You are proficient with these attacks and use Intelligence as your spellcasting ability for them. On a hit, the target takes force damage equal to {@damage 1d8} + your Intelligence modifier. The swords appear at your side and remain there until you dismiss them as a bonus action or until you fall {@condition unconscious} or remove the circlet. While the swords are summoned, you can take this special {@action Attack} action once on each of your turns. The spectral swords shed bright light in a 10-foot radius and dim light for an additional 10 feet.",
        "You can replace one of these melee spell attacks with a weapon attack as part of this special Attack action. If you're able to make multiple attacks when you take the {@action Attack} action, you can instead replace a number of these spell attacks up to the number of weapon attacks that you can normally make as part of the {@action Attack} action.",
        "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to make one melee spell attack with one of the summoned swords against the creature, rather than making an opportunity attack."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Circlet-of-the-Sharpened-Mind.webp"
            }
          }
        ]
      }
    },
    {
      name: "Cloche of Surprise Treats",
      source: "GriffonsSaddlebag2",
      page: 62,
      type: "",
      tier: "major",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This magic silver cloche covers a large dinner platter. You can use an action to speak the cloche's command word and remove it from the platter. When you do, use the table below to determine what kind of meal appears.",
        {
          type: "table",
          colLabels: [
            "d12",
            "Meal"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10 text-left"
          ],
          rows: [
            [
              "1",
              "A delicious meal appears on the platter large enough for one creature and provides as much nourishment as 1 day of {@item rations (1 day)|PHB|rations}."
            ],
            [
              "2–5",
              "A number of decadent, perfectly ripe mixed berries equal to twice the number rolled on the {@dice d12} appear on the platter. Eating one of these berries duplicates the effect of eating a berry from the {@spell goodberry} spell. These berries remain potent for up to 10 days."
            ],
            [
              "6–12",
              "The cloche magically conjures a great feast, as if by the {@spell heroes' feast|PHB} spell. This version of the spell can feed a number of creatures equal to the number rolled on the {@dice d12}."
            ]
          ]
        },
        "Once the cloche has been used to conjure a meal in this way, it can't be used again until a number of days have passed equal to the number rolled on the {@dice d12}."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Cloche-of-Surprise-Treats.webp"
            }
          }
        ]
      }
    },
    {
      name: "Deathly Diadem",
      source: "GriffonsSaddlebag2",
      page: 70,
      type: "",
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      curse: true,
      entries: [
        "This gruesome crown was worn by a powerful lich before falling into the hands of the adventurers who slayed it. While wearing this crown, you have resistance to necrotic damage, are always under the effects of the tongues spell, and you can cast the speak with dead spell at will. When you cast speak with dead in this way, you can only ask the target 1 question, to which the target answers with either \"yes,\" \"no,\" or \"maybe.\" If the question can't be answered in this way, the spell ends. In addition, while you wear this crown, undead creatures have disadvantage on attack rolls against you.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This crown is cursed, a fact that is only revealed to you when you die. The first time that you die while attuned to this crown, its curse is extended to you, and you are immediately returned to life with 1 hit point. While cursed, your alignment becomes evil, if it isn't already, and your utmost goal is to become an all-powerful lich. While cursed, your creature type becomes undead, in addition to your other existing creature types.",
            "A creature remains cursed in this way until targeted by a {@spell wish|PHB} spell or divine intervention. Removing the crown fails to end the curse. While a cursed creature may not reveal that the diadem is cursed, its allies may be able to deduce its presence and effects based on the creature's behavior."
          ]
        }
      ],
      attachedSpells: [
        "speak with dead",
        "tongues"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Deathly-Diadem.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dragon Horn Pauldron",
      source: "GriffonsSaddlebag2",
      page: 73,
      type: "",
      resist: [
        "acid",
        "cold",
        "fire",
        "lightning",
        "poison"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This single pauldron is made from the horn of a fallen dragon. While wearing it, you gain a +1 bonus to AC and have resistance to one damage type, which is determined by the kind of dragon that provided the horn, as shown on the table below.",
        {
          type: "table",
          colLabels: [
            "Dragon",
            "Resistance"
          ],
          colStyles: [
            "col-3 text-left",
            "col-9 text-left"
          ],
          rows: [
            [
              "Black",
              "Acid"
            ],
            [
              "Blue",
              "Lightning"
            ],
            [
              "Brass",
              "Fire"
            ],
            [
              "Bronze",
              "Lightning"
            ],
            [
              "Copper",
              "Acid"
            ],
            [
              "Gold",
              "Fire"
            ],
            [
              "Green",
              "Poison"
            ],
            [
              "Red",
              "Fire"
            ],
            [
              "Silver",
              "Cold"
            ],
            [
              "White",
              "Cold"
            ]
          ]
        },
        "In addition, when you are subjected to an effect that allows you to make a saving throw to take only half damage of this resisted type, you can use your reaction to instead take no damage if you succeed on the saving throw."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dragon-Horn-Pauldron.webp"
            }
          }
        ]
      }
    },
    {
      name: "Dragon Turtle Barding",
      type: "TAH",
      requires: [
        {
          type: "HA"
        }
      ],
      inherits: {
        namePrefix: "Dragon Turtle ",
        nameSuffix: " Barding",
        nameRemove: " Armor",
        source: "GriffonsSaddlebag2",
        page: 73,
        type: "TAH",
        tier: "major",
        rarity: "very rare",
        weightMult: 2,
        weightExpression: "[[baseItem.weight]] * 2",
        barding: true,
        entries: [
          "This heavy armor is made using salvaged pieces of a dragon turtle's shell and can fit on a variety of common mounts. Once worn, the armor expands over the course of 1 hour to cover the creature with a defensive shell and enhance its natural abilities, granting it the following benefits:",
          {
            type: "list",
            items: [
              "The creature gains a +1 bonus AC.",
              "The creature can breathe air and water.",
              "The creature gains a swimming speed equal to its walking or flying speed, whichever is higher."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table H2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dragon-Turtle-Barding.webp"
              }
            }
          ]
        }
      },
      nameRemove: " Armor",
      source: "GriffonsSaddlebag2",
      page: 73,
      tier: "major",
      rarity: "very rare",
      weightMult: 2,
      weightExpression: "[[baseItem.weight]] * 2",
      barding: true,
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dragon-Turtle-Barding.webp"
            }
          }
        ]
      },
      entries: [
        "This heavy armor is made using salvaged pieces of a dragon turtle's shell and can fit on a variety of common mounts. Once worn, the armor expands over the course of 1 hour to cover the creature with a defensive shell and enhance its natural abilities, granting it the following benefits:",
        {
          type: "list",
          items: [
            "The creature gains a +1 bonus AC.",
            "The creature can breathe air and water.",
            "The creature gains a swimming speed equal to its walking or flying speed, whichever is higher."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Ring-Mail",
            source: "TLotRR",
            page: 72,
            type: "HA",
            rarity: "none",
            weight: 50,
            value: 500,
            currencyConversion: "M-E",
            ac: 15,
            armor: true,
            stealth: true,
            entries: [
              "This armour is leather armour with heavy rings sewn into it. The rings help reinforce the armour against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor."
            ]
          },
          specificVariant: {
            name: "Dragon Turtle Ring-Mail Barding",
            source: "GriffonsSaddlebag2",
            type: "TAH",
            rarity: "very rare",
            weight: 100,
            currencyConversion: "M-E",
            ac: 15,
            armor: true,
            stealth: true,
            entries: [
              "This armour is leather armour with heavy rings sewn into it. The rings help reinforce the armour against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor."
            ],
            page: 73,
            tier: "major",
            weightMult: 2,
            bardingType: "HA",
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Dragon-Turtle-Barding.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Dragon Turtle Barding",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Dusk Dagger (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 76,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
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
        "This delicately curved dagger is ornamented with several crescent moon designs. When you hit a creature who is completely in dim light or darkness with this magic weapon, that creature takes an extra {@damage 1d12} psychic damage."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
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
      name: "Enzymatic Gastrostaff",
      source: "GriffonsSaddlebag2",
      page: 78,
      baseItem: "quarterstaff|phb",
      type: "SCF",
      scfType: "arcane",
      resist: [
        "acid"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
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
        "This staff was found in the regurgitated remains of a mighty tarrasque's meal and is covered in a strange, magical mucus. You have resistance to acid damage while you hold this staff. The staff can be used as a magic {@item quarterstaff|PHB} and deals an extra {@damage 1d4} acid damage to any target it hits.",
        "In addition, you can use an action to touch a Medium or smaller willing creature with the staff to cast the {@spell enlarge/reduce|PHB} spell from it without requiring concentration, targeting the creature with the spell's Enlarge option. While a creature is enlarged in this way, it deals double damage to objects and structures and gains {@dice 1d6 + 4} temporary hit points at the start of each of its turns, in addition to the spell's normal effects. The effect ends early if the enlarged creature falls to 0 hit points. When the effect ends, the creature gains 1 level of {@condition exhaustion}. Once this property of the staff has been used, it can't be used again until the next dawn."
      ],
      attachedSpells: [
        "enlarge/reduce"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Enzymatic-Gastrostaff.webp"
            }
          }
        ]
      }
    },
    {
      name: "Fool's Lamp",
      source: "GriffonsSaddlebag2",
      page: 82,
      type: "",
      tier: "major",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This brass lamp is decorated with flowing patterns around a blue, glass chamber at its center. Swirling, magenta clouds drift within the lamp and billow eagerly whenever it's held. Created as a grim sculpture by a spiteful djinni, this lamp offers no benefit to those foolish enough to encounter it.",
        "An {@spell identify|PHB} or {@spell legend lore|PHB} spell correctly reveals the lamp to be empty, as well as its true nature. However, identifying the lamp by any other means will reveal that the lamp has a {@creature djinni|MM} trapped inside it, allowing it to function as a {@item ring of djinni summoning|DMG} while held and without requiring attunement. It also reveals that the only way to summon the djinni is to ask it for a wish (such as a {@spell wish|PHB} spell or general command), treating the wish as a command phrase.",
        "When a creature holding the lamp speaks such a phrase using an action, the GM uses the table below to choose the outcome or determine it randomly:",
        {
          type: "table",
          colLabels: [
            "d10",
            "Effect"
          ],
          colStyles: [
            "col-1-5 text-center",
            "col-10-5 text-left"
          ],
          rows: [
            [
              "1",
              "You're shunted to a harmless demiplane inside the lamp for 1 hour, during which time you can see as if you were in the lamp's space, but are otherwise {@condition incapacitated} and {@condition deafened}. At the end of each of your turns while you're in the demiplane, you can make a DC 20 Charisma saving throw, ending the effect early on a success. At the end of the duration, you return to the nearest unoccupied space within 5 feet of the lamp."
            ],
            [
              "2",
              "A {@spell fireball|PHB} (5th-level version, save DC 16) erupts, centered on you."
            ],
            [
              "3",
              "You're unintelligible for {@dice 2d6} hours, during which time you only speak in nonsensical sounds."
            ],
            [
              "4",
              "You're under the effect of the {@spell faerie fire|PHB} spell for 24 hours."
            ],
            [
              "5",
              "A hostile {@creature air elemental|MM|air} (40%), {@creature earth elemental|MM|earth} (20%), {@creature fire elemental|MM|fire} (20%), or {@creature water elemental|MM|water} (20%) elemental appears in an unoccupied space within 30 feet of you."
            ],
            [
              "6",
              "Your legs become unstable for {@dice 1d6} hours, during which time you have disadvantage on Dexterity checks and Dexterity saving throws, and if you move your full speed on a turn, you must succeed on a DC 16 Dexterity check or fall {@condition prone}."
            ],
            [
              "7",
              "You're affected by the {@spell levitate|PHB} spell for 1 minute. At the start of each of your turns, flip a coin and roll a {@dice d4}. If it's heads, you float up a number of feet equal to 5 times the number rolled on the {@dice d4}. If it's tails, you float down the same number of feet."
            ],
            [
              "8",
              "You are under the effect of the {@spell suggestion|PHB} spell for {@dice 1d6} hours. If you are asked to do something that isn't harmful, accompanied by the word \"please\" or a similar phrase, you are compelled to obey."
            ],
            [
              "9",
              "You age {@dice 1d10} years, taking 5 necrotic damage for each year that you age in this way. Your age returns to normal when you finish a long rest."
            ],
            [
              "10",
              "Roll twice on the table and use both effects, rerolling any 10s."
            ]
          ]
        },
        "If a creature affected by the lamp is targeted by the {@spell greater restoration|PHB} spell or similar magic, one of the lamp's effects on the creature ends."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Fools-Lamp.webp"
            }
          }
        ]
      }
    },
    {
      name: "Frostburn Spear",
      source: "GriffonsSaddlebag2",
      page: 85,
      baseItem: "spear|phb",
      type: "M",
      resist: [
        "cold",
        "fire"
      ],
      tier: "major",
      rarity: "very rare",
      weight: 2,
      weaponCategory: "simple",
      property: [
        "T"
      ],
      range: "30/120",
      dmg1: "1d6",
      dmgType: "P",
      entries: [
        "This magic spear harnesses both ice and fire to duplicate the natural destructive force of a remorhaz. Immediately after you throw the spear and it hits or misses a target, it flies back to your hand.",
        "While holding the spear, it becomes covered in icicles and sheds bright light in a 20-foot radius and dim light for an additional 20 feet. When you hit with an attack using this magic weapon, the target takes an extra {@damage 1d6} cold damage. You can speak its command word as a bonus action to cause the ice to melt and be replaced with flames, causing the bonus damage to become fire damage instead. You can speak the command word again to extinguish the flames and cause the ice to regrow from the spear, turning the bonus damage to cold damage once more. The ice or flames remain until you drop or stow the spear.",
        "While the spear is covered in ice, you have resistance to fire damage. While it's covered in flames, you have resistance to cold damage.",
        "In addition, while holding the spear, you can use an action to cast the {@spell fire shield|PHB} spell from it. This version of the spell has a range of 30 feet, instead of self, and can target any creature you can see within range. Once this property of the spear has been used, it can't be used again until the next dawn."
      ],
      attachedSpells: [
        "fire shield"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Frostburn-Spear.webp"
            }
          }
        ]
      }
    },
    {
      name: "Furious Flail",
      source: "GriffonsSaddlebag2",
      page: 86,
      baseItem: "flail|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a barbarian",
      reqAttuneTags: [
        {
          class: "barbarian"
        }
      ],
      weight: 2,
      weaponCategory: "martial",
      property: [
        "H",
        "R",
        "V"
      ],
      dmg1: "1d8",
      dmgType: "B",
      dmg2: "1d10",
      entries: [
        "This magic stone flail has the heavy property. If you're raging while holding the flail, its volcanic nature reacts to your fury. When it does, the basalt handle extends, giving the weapon both the reach and versatile ({@damage 1d10}) properties. In addition, while you're raging, the flail deals an extra {@damage 1d8} fire damage to any target it hits. You take {@damage 1d4} fire damage when the flail transforms in this way and again at the start of each of your turns if you're holding the flail. The flail returns to its normal form and cools if you are no longer holding it at the end of your turn or if your rage ends.",
        {
          type: "entries",
          name: "Volcanic Fury",
          entries: [
            "You can use an action to smash the flail into the ground at a point within the weapon's reach. When you do, the ground erupts, spewing a mixture of earth and fire in a 20-foot cube centered on that point. Each creature other than you in that area must make a DC 16 Dexterity saving throw. On a failed save, a creature takes {@damage 2d12} bludgeoning damage and {@damage 2d12} fire damage, or half as much damage on a successful one. In addition, the ground in that area becomes {@quickref difficult terrain||3} until cleared. It takes 1 minute to clear an affected 5-foot-square space of the rubble by hand. Once this property of the flail has been used, it can't be used again until the next dawn."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Furious-Flail.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gateway Ring",
      source: "GriffonsSaddlebag2",
      page: 86,
      type: "RG|DMG",
      tier: "major",
      rarity: "very rare",
      entries: [
        "Made from tiny, moss-covered stones, this ring is enchanted with ancient fey magic. You can use an action to speak the ring's command word, followed by the name or description of a precise location on any plane of existence, and toss it into an unoccupied space within 10 feet of you. The ring expands into a 5-foot circular stone portal that's 1 foot thick in the space where it lands, floating 1 foot off the ground, where it remains for up to 1 minute.",
        "The portal duplicates the effect of the {@spell gate|PHB} spell, creating another stone portal at the destination. This version of the spell can't target an individual creature, but can be used to target a precise location on the same plane of existence as you.",
        "You can end the spell and close the portal early by speaking the ring's command word again as an action while touching it with your hand. When you do, the ring returns to its normal size and reappears on your hand. If the portal remains for the full duration, the ring returns to its normal size and falls to the ground on a random side of the portal. Once the ring has been used, it can't be used again until 10 days have passed."
      ],
      attachedSpells: [
        "gate"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gateway-Ring.webp"
            }
          }
        ]
      }
    },
    {
      name: "Gloves of Mimicry",
      source: "GriffonsSaddlebag2",
      page: 90,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d4 + 1}",
      charges: 5,
      entries: [
        "These brightly colored gloves extend a peculiar psychic magic to your hands and fingers. While wearing the gloves, you can use an action to cast the mage hand spell from them. In addition, you can use an action to cast the {@spell bigby's hand|phb|arcane hand} spell from the gloves (save DC 16, spell attack +8). Once the gloves have been used to cast this spell, they can't be used to cast it again until the next dawn.",
        "The gloves have 5 charges for the following properties. They regain {@dice 1d4 + 1} expended charges daily at dawn.",
        {
          type: "entries",
          name: "Applaud",
          entries: [
            "When a creature other than you that can see and hear you rolls a Bardic Inspiration die, you can use your reaction to expend 1 of the gloves' charges to clap your hands together and add your Charisma modifier to the total of the roll. You can choose to use this reaction after the creature rolls the die, but before the GM determines whether the roll succeeds or fails."
          ]
        },
        {
          type: "entries",
          name: "Barrier",
          entries: [
            "When you're hit by an attack, you can use your reaction to expend 1 of the gloves' charges and hold your hands out in front of you, as if you were pressed against an invisible barrier. You gain a +5 bonus to AC for that attack, potentially causing the attack to miss you."
          ]
        },
        {
          type: "entries",
          name: "Pinch",
          entries: [
            "By holding your thumb and forefinger less than an inch apart, you can use an action to expend 1 of the gloves' charges to visually pinch a creature within 60 feet of you that you can see. That creature must must make a DC 16 Intelligence saving throw. The creature takes {@damage 3d4} psychic damage and {@damage 3d4} force damage on a failed save, or half as much damage on a successful one. If the creature was concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration."
          ]
        },
        {
          type: "entries",
          name: "Taunt",
          entries: [
            "You can use an action to remove one of the gloves and expend 1 of their charges to visually slap a creature that you can see within 30 feet of you with it—as if you were challenging it to a duel. That creature must make a DC 16 Wisdom saving throw. On a failed save, the creature takes {@damage 2d4} psychic damage and {@damage 2d4} force damage and has disadvantage on attack rolls against creatures other than you until the start of your next turn. On a successful save, the creature takes half as much damage and doesn't suffer disadvantage on its attack rolls. Immediately after the effect, you replace the glove on your hand."
          ]
        }
      ],
      attachedSpells: [
        "bigby's hand"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Gloves-of-Mimicry.webp"
            }
          }
        ]
      }
    },
    {
      name: "Grasping Staff",
      source: "GriffonsSaddlebag2",
      page: 93,
      baseItem: "quarterstaff|phb",
      type: "SCF",
      scfType: "arcane",
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
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
        "This grotesquely carved stone staff is miraculously light but deathly cold and clammy to the touch. You have resistance to necrotic damage while you hold this staff.",
        "The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: {@spell bigby's hand|PHB|arcane hand} (5 charges), {@spell bestow curse} (3 charges), {@spell chill touch} (no charges, or 1 charge to cast at 5th level), {@spell inflict wounds} (1 charge per spell level, up to 5th), {@spell mage hand} (no charges), or {@spell vampiric touch} (3 charges).",
        "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff turns to ash and summons {@dice 2d6} hostile tiny undead {@creature crawling claw|MM|crawling hands} within 10 feet of you."
      ],
      attachedSpells: [
        "bestow curse",
        "bigby's hand",
        "chill touch",
        "inflict wounds",
        "mage hand",
        "vampiric touch"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Grasping-Staff.webp"
            }
          }
        ]
      }
    },
    {
      name: "Green Knight's Vow",
      source: "GriffonsSaddlebag2",
      page: 94,
      type: "",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: 7,
      charges: 7,
      entries: [
        "These dark green adamantine and copper bracers are granted to devout warriors of the Infernal Court and are designed to match their army's signature tower shields. While wearing the bracers, you grow a sweeping pair of horns from your forehead if you are not a {@race tiefling|PHB}. If your attunement to the bracers ends, the horns crack and fall away after 24 hours.",
        "The bracers have a total of 7 charges and regain all expended charges daily at dawn. While wearing them, you can expend 1 or more of their charges to use the following three properties:",
        {
          type: "entries",
          name: "\"Brace Yourselves!\"",
          entries: [
            "As a bonus action, you can expend 2 or more charges from the bracers to provide cover to a creature you can see within 30 feet of you. For 2 charges, you summon a large, spectral shield that follows the creature for the duration, providing it with half cover. You can summon one extra shield for each additional charge you expend, targeting a different creature with each one. The shields fade at the end of your next turn."
          ]
        },
        {
          type: "entries",
          name: "\"Press the Assault!\"",
          entries: [
            "When you make an opportunity attack, you can expend 1 or more of the bracers' charges to embolden your nearby allies. For each charge you spend, one creature of your choice within 60 feet of you can use its reaction to make one weapon attack. The chosen creatures must be able to see or hear you."
          ]
        },
        {
          type: "entries",
          name: "\"You Will Burn!\"",
          entries: [
            "You can expend 1 or more charges from the bracers to cast the {@spell hellish rebuke} spell (save DC 15) from them. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The fire from this spell is a haunting emerald green."
          ]
        },
        {
          type: "entries",
          name: "Flaw",
          entries: [
            "The Green Knight's vow makes its wearer tremendously loyal to royalty. While attuned to the bracers, you gain the following flaw: \"I will stand by my sovereign leader, no matter what.\" You or your GM determine who your leader is. In addition, if you are attuned to the bracers for 24 consecutive hours, your commitment to duty drives you to the brink of zealotry. You can't attune to the {@item Red Queen's burden|GriffonsSaddlebag2} or the {@item Violet King's promise|GriffonsSaddlebag2}. If you are already attuned to either of them, your attunement to it immediately ends once this effect is extended to you. The first creature you meet who is attuned to either of these weapons becomes your sovereign leader, regardless of who you previously considered it to be. You become {@condition charmed} by them and obey their commands to the best of your ability. If you find the {@item Red Queen's burden|GriffonsSaddlebag2} or the {@item Violet King's promise|GriffonsSaddlebag2} without an owner, you are compelled to protect it with your life until a rightful owner is found. These effects can be removed with a {@spell greater restoration} spell, but not while you are attuned to the bracers."
          ]
        }
      ],
      attachedSpells: [
        "hellish rebuke"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Green-Knights-Vow.webp"
            }
          }
        ]
      }
    },
    {
      name: "Heartless Cage Pendant",
      source: "GriffonsSaddlebag2",
      page: 100,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      charges: 12,
      entries: [
        "This metal ribcage pendant has 12 pairs of ribs that contain a single, roughly hewn ruby that rattles around inside. The pendant has {@dice 1d4 + 8} charges when found. When a charge is expended, a pair of the pendant's ribs magically rust.",
        "While wearing this pendant, you can use your reaction to expend 1 of the pendant's charges when a hostile creature that you can see within 30 feet of you is reduced to 0 hit points, causing the target to immediately die before any magical effects or traits can either restore it to life or prevent it from falling to 0 hit points. When you do, you gain {@dice 2d6 + 25} temporary hit points, and that creature can't be restored to life by any spell of 5th level or lower. A creature is immune to this effect if it has legendary actions.",
        "When you expend the pendant's last charge, the ribcage shatters and releases the ruby inside. When it does, the ruby crackles with necrotic energy and summons 12 {@creature skeleton|MM|skeletons} that appear in unoccupied spaces that you can see within 60 feet of you. The summoned skeletons are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The GM has the skeletons' statistics.",
        "A {@creature skeleton|MM} disappears when it drops to 0 hit points or after 24 hours.",
        "Once the ribcage shatters and the ruby summons the {@creature skeleton|MM|skeletons}, the pendant and gemstone crumble into ashes and are destroyed."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Heartless-Cage-Pendant.webp"
            }
          }
        ]
      }
    },
    {
      name: "Helm of the Broken Dragon",
      source: "GriffonsSaddlebag2",
      page: 102,
      resist: [
        "psychic"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a non-lawful dragonborn",
      reqAttuneTags: [
        {
          race: "dragonborn",
          alignment: [
            "NX",
            "C",
            "G",
            "NY",
            "E"
          ]
        }
      ],
      wondrous: true,
      curse: true,
      entries: [
        "This helmet is made of harsh, angular shapes that come together into the shape of an aberrant dragon skull. Your scales twist into strange, fractal-like patterns tinged with otherworldly colors when you attune to this item. While wearing the helmet, you have resistance to psychic damage, and creatures have disadvantage on Wisdom ({@skill Insight}) checks against you. In addition, your breath weapon changes to be a plume of unearthly psionic energy, dealing psychic damage instead of its normal damage type. A creature in the area must make a Wisdom saving throw, instead of your breath weapon's normal save. On a failed save, a creature is also affected as by the {@spell bane} spell for 1 minute as maddening whispers fill its mind. The creature can make a Wisdom saving throw against your breath weapon DC at the end of each of its turns, ending the effect on itself on a success.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This helmet is cursed with gnawing insecurity and self-doubt. Attuning to the helmet curses you until you are targeted by the remove curse spell or similar magic. While cursed, you are unwilling to remove the helm, and you gain the following flaw: \"Whatever course of action I take, there is a voice in my head that screams at me to do the opposite. The voice is never silent.\""
          ]
        }
      ],
      attachedSpells: [
        "bane"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Helm-of-the-Broken-Dragon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Helm of the Chromatic Dragon",
      source: "GriffonsSaddlebag2",
      page: 102,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a dragonborn of evil alignment",
      reqAttuneTags: [
        {
          race: "dragonborn",
          alignment: [
            "E"
          ]
        }
      ],
      wondrous: true,
      entries: [
        "This iridescent helmet has been blessed by a powerful, evil dragon. While wearing this helmet, your breath weapon deals an extra {@damage 1d6} damage of its type, and you can choose whether it deals acid, cold, fire, lightning or poison damage. You can also choose if your breath weapon affects a 15-foot cone or 5-by-30-foot line, and if creatures affected by it must make a Dexterity or Constitution saving throw.",
        "In addition, when you use your breath weapon, roll a {@dice d6}. On a 5 or 6, you gain an additional use of your breath weapon before you need to finish a short or long rest."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Helm-of-the-Chromatic-Dragon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Helm of the Chromatic Dragon",
      source: "GriffonsSaddlebag2",
      page: 102,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a dragonborn of evil alignment",
      reqAttuneTags: [
        {
          race: "dragonborn",
          alignment: [
            "E"
          ]
        }
      ],
      wondrous: true,
      entries: [
        "This iridescent helmet has been blessed by a powerful, evil dragon. While wearing this helmet, your breath weapon deals an extra {@damage 1d6} damage of its type, and you can choose whether it deals acid, cold, fire, lightning or poison damage. You can also choose if your breath weapon affects a 15-foot cone or 5-by-30-foot line, and if creatures affected by it must make a Dexterity or Constitution saving throw.",
        "In addition, when you use your breath weapon, roll a {@dice d6}. On a 5 or 6, you gain an additional use of your breath weapon before you need to finish a short or long rest."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Helm-of-the-Chromatic-Dragon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Helm of the Ruby Dragon",
      source: "GriffonsSaddlebag2",
      page: 103,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a dragonborn of neutral alignment",
      reqAttuneTags: [
        {
          race: "dragonborn",
          alignment: [
            "N"
          ]
        }
      ],
      wondrous: true,
      entries: [
        "This magic gold and ruby helm has been blessed by a powerful, psychic dragon. While wearing this helmet, you have advantage on Intelligence ({@skill Investigation}) checks, as well as Intelligence checks made to glean information from an observation or bit of lore. In addition, you can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
        "When you use your breath weapon while wearing this helmet, you can choose to exhale a blast of pure, concussive force. When you do, your breath weapon deals force damage, instead of its normal damage type, and any creature that fails the saving throw takes an extra {@damage 2d6} psychic damage and is {@condition stunned} until the end of your next turn. This property of the helm can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Helm-of-the-Ruby-Dragon.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hoarder's Haul (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 104,
      type: "VEH",
      tier: "major",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This magical cart is made from the large, hollow horn of a fallen dragon. While all {@i hoarder's hauls} are made from the horns of dragons, their true magic stems from the strength of the dragon's greed. Uncommon and rare carts have handles and a single wheel at their front and must be physically moved. Very rare versions have a flying speed of 10 feet, can hover up to 20 feet off the ground, and move according to your spoken directions, provided that you are within 30 feet of the cart.",
        "The cart has two command words. The first command word can be spoken using an action and causes the cart to shrink or enlarge, becoming as small as 1 foot long and 7 inches across or as large as 5 feet long and 3 feet across. Regardless of its size, the cart always weighs 5 pounds without anything inside it. Anything contained by the cart does not resize to fit its new size, potentially spilling onto the ground if the cart becomes too small.",
        "When you place a nonliving object in the cart, you can speak the cart's second command word as an action to cause the object to become locked in place. A locked object can't be removed or interacted with against your will, unless the cart becomes too small to contain it. A creature that attempts to remove an object locked in this way must succeed on a Wisdom saving throw or become {@condition frightened} of the cart for 1 minute. A {@condition frightened} creature is unwilling to move toward the cart or interact with it for the duration. If the cart is a rare or very rare version, the creature also takes psychic damage on a failed saving throw. A creature that succeeds on the saving throw is immune to this effect for 24 hours. You can speak the second command word as an action again to unlock any number of objects within the cart.",
        "The cart's properties depend on the item's rarity. The uncommon variant has a carrying capacity of 750 lb., and a save DC of 16. Creatures that fail the saving throw take {@damage 6d6} psychic damage."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
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
      name: "Horn of the Wild Hunt",
      source: "GriffonsSaddlebag2",
      page: 106,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This large, spiraling warhorn has 3 charges and regains {@dice 1d3} expended charges daily at dawn. You can use an action to expend 1 charge and blow the horn, summoning a war elk as if you had cast the {@spell find steed|PHB} spell. A war elk uses the same statistics as a {@creature giant elk|MM} with the following changes: its size is Large, it has AC 14 ({@item hide barding|PHB}), and has 37 hit points. The steed disappears if your attunement to the horn ends.",
        "Alternatively, you can use an action to expend 1 of the horn's charges to speak its command word and then blow the horn. When you do, a spectral stampede of elk trample the area in a line 60 feet long and 15 feet wide that extends from you in a direction you choose. Each creature in the line must make a DC 15 Dexterity saving throw. On a failed save, a creature takes {@damage 4d10} force damage and is knocked {@condition prone}. On a successful save, a creature takes half as much damage and isn't knocked {@condition prone}.",
        "When you blow the horn, it emits a deep, rumbling tone that is audible 300 feet away."
      ],
      attachedSpells: [
        "find steed"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Horn-of-the-Wild-Hunt.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hour and Minute",
      source: "GriffonsSaddlebag2",
      page: 107,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      bonusWeapon: "+1",
      bonusAc: "+1",
      entries: [
        "These two magical weapons are bound by a powerful force. Despite there being two weapons, you only need to attune to one of them to use their properties. While holding one of the weapons, you can use an action to determine the distance and direction of the other paired weapon as long as you're on the same plane of existence.",
        "If you attune to one of the weapons while another creature is attuned to the other, you are each aware of the other creature's attunement and must make an Intelligence ({@skill Arcana}) check contested by the other creature's Intelligence ({@skill Arcana}) check. The creature that wins the contest remains attuned to the item, and for the next 24 hours, its attunement cannot be broken by another creature attempting to attune to the other weapon. The creature that loses the contest is no longer attuned to the weapon.",
        "While holding both weapons in either hand, you gain several benefits:",
        {
          type: "list",
          items: [
            "You gain a +1 bonus to attack and damage rolls made with these magic weapons.",
            "Your perception of time is slightly quickened: allowing you to dodge attacks that would have normally hit you. You gain a +1 bonus to AC.",
            "When you roll a 20 on an attack roll using Hour (the {@item dagger|PHB}) against a creature, that creature is subjected to the effect of the {@spell slow|PHB} spell until the end of your next turn.",
            "When you roll a 20 on an attack roll using Minute (the {@item shortsword|PHB}), you gain the effect of the {@spell haste|PHB} spell until the start of your next turn. When the effect ends, you don't suffer the normal effects of the spell ending.",
            "In addition, you can use an action to lay the two weapons down on the ground. When you do, they magically point north before spinning around to align and tell the current time. When they do, 12:00 is always facing north."
          ]
        }
      ],
      attachedSpells: [
        "haste",
        "slow"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hour-and-Minute.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hourglass of Slumber",
      source: "GriffonsSaddlebag2",
      page: 107,
      tier: "major",
      rarity: "very rare",
      wondrous: true,
      recharge: "dusk",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "This ebony and gold hourglass is filled with nebulous clouds of dreamy smoke instead of sand. The hourglass can act as a 1-minute timer, allowing the smoke to filter from one chamber to the next for the duration.",
        "The hourglass has 3 charges and regains {@dice 1d3} expended charges daily at dusk. While holding it, you can expend 1 or more of the glass's charges to turn it over and cast the {@spell sleep|PHB} spell from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. This version of the spell has the following changes:",
        {
          type: "list",
          items: [
            "The spell lasts until the hourglass's timer ends or is stopped, or until the hourglass is flipped again.",
            "Each time a sleeping creature takes damage, it must make a Constitution saving throw, waking up on a success. The DC is equal to 20 minus half the damage dealt (minimum DC 10). After 3 failed saves, a creature automatically wakes up."
          ]
        }
      ],
      attachedSpells: [
        "sleep"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hourglass-of-Slumber.webp"
            }
          }
        ]
      }
    },
    {
      name: "Hydra Charm",
      source: "GriffonsSaddlebag2",
      page: 108,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This golden talisman is made of five twisting hydra heads and hung from a simple gold chain. While wearing this talisman, you gain the following benefits:",
        {
          type: "list",
          items: [
            "When you use your reaction to make an opportunity attack, you can make a second attack against that same target as part of that reaction.",
            "You can make an opportunity attack, even if you've already used your reaction.",
            "When you are forced to make a saving throw against being {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}, you can use your reaction to make the saving throw with advantage.",
            "When you take more than 25 damage from a single attack or effect, you can use your reaction to regain 10 hit points. If this damage would reduce you to 0 hit points but not kill you outright, you drop to 1 hit point instead and do not regain 10 hit points.",
            "When your head would be cut off by an effect, such as by a {@item vorpal sword|DMG}, you can use your reaction to negate the effect."
          ]
        },
        "Once a benefit of the talisman has been used, that benefit can't be used again until you finish a long rest."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Hydra-Charm.webp"
            }
          }
        ]
      }
    },
    {
      name: "Impact Plate",
      source: "GriffonsSaddlebag2",
      page: 108,
      baseItem: "plate armor|phb",
      type: "HA",
      resist: [
        "bludgeoning"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 65,
      ac: 18,
      strength: "15",
      stealth: true,
      entries: [
        "This resilient plate mail was made by dwarves but magically resizes to fit the wearer's stature. While wearing it, you have resistance to bludgeoning damage, and you don't take any falling damage when you fall no farther than 100 feet."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Impact-Plate.webp"
            }
          }
        ]
      }
    },
    {
      name: "Infernal Chain",
      source: "GriffonsSaddlebag2",
      page: 109,
      baseItem: "flail|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 10,
      weaponCategory: "martial",
      property: [
        "H",
        "R"
      ],
      dmg1: "1d8",
      dmgType: "B",
      entries: [
        "This length of heavy chain has a weight at its end and is always warm to the touch. The chain is 10 feet long and weighs 10 pounds. When you attune to the chain, it magically coils up one of your arms (your choice) and secures itself in place. When you swing it, the chain magically extends from you before returning to coil around your arm once again. You must use a hand in order to swing and use the chain.",
        "When swung, the chain releases flames and billowing smoke. This magic weapon has the reach and heavy properties, and any target hit with it takes an extra {@damage 1d8} fire damage.",
        "You can choose to use this chain instead of your normal reach when you {@action grapple} a target on your turn. While a target is {@condition grappled} by the chain, you can't use the chain to make a weapon attack, but you can use a bonus action to pull the target 5 feet toward you. At the start of each of its turns, a creature {@condition grappled} by the chain takes {@damage 2d8} fire damage. A creature {@condition grappled} by the chain doesn't have its speed reduced as a result of the grapple, but it can't move farther than 10 feet away from you until the grapple ends.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "This chain is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unable to remove the chain from your arm, and at the start of each of your turns while a celestial is within 30 feet of you (that you are aware of), you must succeed on a DC 16 Wisdom saving throw or be compelled to use your action to attack the nearest celestial. In addition, while cursed, you gain the following flaw: \"I delight in exploiting my enemy's flaws and fears to make them suffer.\""
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Infernal-Chain.webp"
            }
          }
        ]
      }
    },
    {
      name: "Instrument of Roses and Thorns",
      source: "GriffonsSaddlebag2",
      page: 111,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a bard",
      reqAttuneTags: [
        {
          class: "bard"
        }
      ],
      wondrous: true,
      entries: [
        "This string instrument is ornamented with rose and thorn designs. Whenever you use this instrument to give a Bardic Inspiration die to a creature, you can also choose to force another creature within 60 feet of you that can hear you to make a Charisma saving throw against your spell save DC. On a failed save, the creature gains an Enervation die, which remains for 1 minute or until it's rolled. When a creature with one or more Enervation dice that you can see makes an ability check or attack roll, you can use your reaction to roll any number of its Enervation dice, which are the same as your Bardic Inspiration dice, and subtract the result from the total of the roll. The Enervation dice are then lost. You can wait to use this reaction until after the creature rolls the {@dice d20}, but must decide before the GM says whether the roll succeeds or fails. If the total of the roll is reduced to 0 or lower as a result of the Enervation die, the creature also takes {@damage 6d6} necrotic damage.",
        "A creature that attempts to play the instrument without being attuned to it must succeed on a DC 16 Constitution saving throw or take {@damage 2d6} necrotic damage."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Instrument-of-Roses-and-Thorns.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ki Blade",
      source: "GriffonsSaddlebag2",
      page: 112,
      baseItem: "shortsword|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a monk",
      reqAttuneTags: [
        {
          class: "monk"
        }
      ],
      weight: 2,
      weaponCategory: "martial",
      property: [
        "F",
        "L"
      ],
      dmg1: "1d6",
      dmgType: "P",
      bonusWeapon: "+2",
      entries: [
        "This gently curved blade resonates with the force of your ki. You gain a +2 bonus to attack and damage rolls made with this magic weapon, and while you're attuned to it, your ki point maximum increases by 2.",
        "When you use your Deflect Missiles feature and are holding the ki blade, you can choose to use the weapon to attack the missile instead of capturing it. If you do, the damage you take from the ranged attack is reduced by an extra {@dice 1d10}. If you reduce the damage to 0, the missile is destroyed unless it was magical, in which case it clatters to the ground at your feet. Once you use this property, you can spend 1 ki point to use your Deflect Missiles feature again on the same turn, potentially destroying multiple missiles from the same attacker."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ki-Blade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Kraken Band",
      source: "GriffonsSaddlebag2",
      page: 112,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      entries: [
        "This metal sculpture of a tentacle coils around your arm as part of attuning to it. While you're attuned to the band, it can't be removed against your will, and you can magically transform the arm wearing it into a lashing tentacle as part of your attacks. When you take the {@action Attack} action, you can use your bonus action to make an unarmed strike using this tentacle, which has a reach of 15 feet. On a hit, the tentacle deals an extra {@damage 1d6} acid damage. When you attempt to {@action grapple} a creature on your turn as part of the {@action Attack} action, you can use the tentacle to target a creature within 15 feet of you that you can see, instead of within your normal reach. On a successful grapple, the creature takes {@damage 1d6} acid damage and is pulled up to 10 feet in a straight line toward you."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Kraken-Band.webp"
            }
          }
        ]
      }
    },
    {
      name: "Lady Phantasma's Material Anchor",
      source: "GriffonsSaddlebag2",
      page: 113,
      tier: "minor",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This small and rusted anchor charm is bound to a famous, lost ship: the {@i Lady Phantasma}. This ship and its crew was lost to the Ethereal Plane centuries ago, cursed to remain there for all eternity as punishment for stealing a powerful sea hag's treasured relic. However, this small charm can act as the ship's sole remaining tether to the Material Plane.",
        "As an action, you can call out to the ship while holding the charm aloft. If you're within 30 feet of a body of water on the Material Plane, a full-sized anchor appears on the ground in an unoccupied space within 5 feet of the water. A wispy, green chain appears on the anchor that extends into nothingness for 1 minute. At the end of the minute, the {@i Lady Phantasma} emerges from the Ethereal Plane, pulled by the anchor's chain, and comes to rest in the water nearby. The ship is a {@item longship|DMG} 70 feet long and 20 feet wide. It's piloted by thirty-four crewmembers and five officers, all of whom are longdead, ghostly remains of their former selves. They are formless and harmless, but are nevertheless visible and friendly to you and your companions. They can interact with the rigging, sails, and other equipment on the ship, but nothing else while they remain on the Material Plane. While the ship remains, you are considered the captain of the vessel while the charm is on your person.",
        "At dawn, the ship's crew is shunted back to the Ethereal Plane, leaving the ship behind, until the following dusk when they reappear on the vessel once more. The ship's anchor is immovable while the crew is on the Ethereal Plane, holding the ship in place until they return each night. While the ship can move, it moves at a speed of 10 miles per hour, even when there isn't any wind.",
        "If the charm is removed from the {@i Lady Phantasma} for 24 hours, the ship and its crew vanish and return to the Ethereal Plane until they're summoned again. You can speak the charm's command phrase \"Until the tides call once more,\" to cause the ship and crew to return to the Ethereal Plane early. Any objects on the ship other than what was there when it came from the Ethereal Plane are dropped into the water below the ship when it disappears. If the ship is destroyed while on the Material Plane, the charm is destroyed and turns to flecks of nonmagical rust."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Lady-Phantasmas-Material-Anchor.webp"
            }
          }
        ]
      }
    },
    {
      name: "Magebane Poison",
      source: "GriffonsSaddlebag2",
      page: 118,
      type: "G",
      tier: "minor",
      rarity: "very rare",
      poison: true,
      entries: [
        "This dark, bubbling poison is made from a rakshasa's magic-immune blood and tastes sweet and syrupy, despite its gruesome appearance. Each bottle contains one dose of the poison. A creature that ingests this poison must make a DC 19 Constitution saving throw. On a failed save, a creature takes {@damage 4d6} poison damage and is {@condition poisoned} for 1 hour. If the {@condition poisoned} creature is a spellcaster, it takes an additional {@damage 4d6} psychic damage and can't cast cantrips until this poison ends. In addition, a {@condition poisoned} spellcaster can only cast spells of 1st level or higher by using a spell slot at least 4 levels higher than the desired slot level, without the added benefits of using the higher spell slot level. For example, a {@condition poisoned} spellcaster can cast the 2nd-level version of magic missile using a 6th-level spell slot. On a successful save, a creature takes half as much poison and psychic damage and isn't {@condition poisoned}."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Magebane-Poison.webp"
            }
          }
        ]
      }
    },
    {
      name: "Magentan Sun-Saw (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 118,
      baseItem: "scimitar|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "L"
      ],
      dmg1: "1d6",
      dmgType: "S",
      bonusWeapon: "+2",
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "The typical {@item magentan sun-saw|GriffonsSaddlebag2}, an uncommon item, is a falchion with a curved metal guard that protects your hand. The sword has 7 charges and regains {@dice 1d6 + 1} expended charges daily at dawn.",
        "The following magentan sun-saw is a very rare variant with more powerful properties. You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, when you expend 1 of the weapon's charges when you hit with an attack, the light is sunlight (albeit still magenta in color) and deals an extra {@damage 2d6} radiant damage to the target, instead of {@dice 1d6}. If the target has the Sunlight Sensitivity or Sunlight Hypersensitivity trait, such as a drow or vampire, it's considered to be in sunlight until the end of its next turn."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
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
      name: "Masks of the Sacred Beasts (Mule)",
      source: "GriffonsSaddlebag2",
      page: 120,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      ability: {
        str: 2
      },
      entries: [
        "These dark ceramic and gold masks are fashioned after animals that are sacred in certain cultures. Each mask's appearance and properties are based on the sacred beast it represents. While attuned to a mask, you can end your attunement to it and attune to a different one over the course of 1 minute, instead of over the course of one or more short rests.",
        "While wearing a mule mask, your Strength score increases by 2, to a maximum of 20, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift, and you have advantage on Strength and Dexterity ability checks and saving throws against being knocked {@condition prone}. In addition, when you hit a Large or smaller creature with a melee weapon attack, you can use a bonus action to force that creature to make a DC 16 Strength or Dexterity saving throw (its choice). On a failed save, the creature is knocked {@condition prone}."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
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
      name: "Matron's Mug",
      source: "GriffonsSaddlebag2",
      page: 121,
      tier: "minor",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This rustic stoneware mug is warm to the touch and exudes a feeling of comfort while held. You can speak its command word as an action to cause it to fill with a rich, creamy drink that tastes like chocolate. When you drink this beverage, it fills you with a rejuvenating and magical vigor that builds over the course of 1 minute. At the end of this minute, you can choose to recover one expended spell slot by spending a number of Hit Dice equal to the spell slot's level, up to a maximum of 5. Once the mug has created this beverage, it can't create it again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Matrons-Mug.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mindmaster's Monocle",
      source: "GriffonsSaddlebag2",
      page: 123,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a wizard",
      reqAttuneTags: [
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      entries: [
        "This ancient golden monocle's lens is a roughly hewn ruby. While you wear this monocle, it magically floats in front of your eye, instead of resting on your face, and you can see clearly through its ruby lens. While peering through the lens, you always know if a creature you can see is concentrating on a spell. You perceive a concentrating creature's head as being shrouded in an indigo mist.",
        "This monocle has 10 charges for the following properties. It regains {@dice 1d6 + 4} expended charges daily at dawn.",
        {
          type: "entries",
          name: "Spells",
          entries: [
            "While wearing the monocle, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: {@spell arcane eye|PHB} (4 charges), {@spell detect thoughts|PHB} (2 charges), or {@spell rary's telepathic bond|PHB|telepathic bond} (5 charges)."
          ]
        },
        {
          type: "entries",
          name: "Mental Assault",
          entries: [
            "While wearing the monocle, you can use a bonus action to expend 3 of its charges to attempt to break a creature's concentration on a spell. The target must be within 60 feet of you, and you must be able to see it. When you do, make an Intelligence check contested by the target's spellcasting ability check. If you win the contest, the target's concentration on the spell ends."
          ]
        }
      ],
      attachedSpells: [
        "arcane eye",
        "detect thoughts",
        "rary's telepathic bond"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mindmasters-Monocle.webp"
            }
          }
        ]
      }
    },
    {
      name: "Mourningsteel Demi-Gauntlets",
      source: "GriffonsSaddlebag2",
      page: 127,
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 6}",
      charges: 12,
      entries: [
        "This pair of dark, open-fingered gauntlets are made from mourningsteel, a metal whose ore has been steeped in the blood of countless fallen creatures. While wearing the gauntlets, you have resistance to necrotic damage.",
        "The gauntlets have 12 charges and regain {@dice 1d6 + 6} expended charges daily at dawn. While wearing the gauntlets, you can use an action to cast one of the following spells from them using a spell attack bonus of +8: {@spell chill touch} (no charges, or 1 to cast at 5th level), {@spell inflict wounds} (1 charge per spell level, up to 5th), or {@spell vampiric touch} (3 charges). Damage dealt by these spells ignores resistance to necrotic damage.",
        "In addition, if you spend a charge to cast {@spell chill touch} from the gauntlets and hit a creature, you can immediately choose to expend additional charges to cast either the {@spell inflict wounds} or {@spell vampiric touch} spell from them as part of the action to cast the cantrip. When you do, the cantrip's skeletal hand delivers the spell to the target, instead of requiring you to touch it. If you were already concentrating on the {@spell vampiric touch} spell when you hit a creature with {@spell chill touch} in this way (after spending a charge to cast it), you don't need to expend any additional charges to deliver your {@spell vampiric touch} spell to the target. Necrotic damage dealt by {@spell chill touch} doesn't count toward the amount dealt by {@spell vampiric touch} for the purpose of calculating the number of hit points you regain from the spell."
      ],
      attachedSpells: [
        "chill touch",
        "inflict wounds",
        "vampiric touch"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mourningsteel-Demi-Gauntlets.webp"
            }
          }
        ]
      }
    },
    {
      name: "Novanite Armor",
      type: "GV|DMG",
      requires: [
        {
          type: "MA"
        },
        {
          type: "HA"
        }
      ],
      excludes: {
        name: "Hide Armor"
      },
      inherits: {
        namePrefix: "Novanite ",
        source: "GriffonsSaddlebag2",
        page: 130,
        tier: "major",
        rarity: "very rare",
        reqAttune: true,
        bonusAc: "+1",
        entries: [
          "Novanite is a strong metal smelt from ore mined in the Astral Plane. Armor made from this metal absorbs more light than normal and gives off a strange, otherworldly aura. Glimmering cosmos can be seen in the armor's reflections at night. You have a +1 bonus to AC while wearing this armor.",
          {
            type: "entries",
            name: "Astral Leap",
            entries: [
              "While wearing this armor, you can speak its command word as an action to choose a space you can see within 30 feet of you. When you do, you vanish into a planar tear and reappear at the chosen spot at the start of your next turn, remaining in the Astral Plane until you do. If you would arrive in a place already occupied by an object or a creature, you take {@damage 3d6} force damage and appear in the nearest unoccupied space. This property of the armor can't be used again until 12 hours have passed.",
              "Disappearing and reappearing in this way creates vacuums and waves as space is pushed and pulled around you. Other creatures within 10 feet of you when you vanish or reappear must make a DC 15 Strength saving throw. On a failed save, a creature takes {@damage 3d6} force damage and is pulled up to 10 feet toward the space you left from, or pushed 10 feet away from the space you reappear in. On a successful save, a creature takes half as much force damage and is not pulled or pushed."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table H1|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Novanite-Armor.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 130,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      bonusAc: "+1",
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Novanite-Armor.webp"
            }
          }
        ]
      },
      entries: [
        "Novanite is a strong metal smelt from ore mined in the Astral Plane. Armor made from this metal absorbs more light than normal and gives off a strange, otherworldly aura. Glimmering cosmos can be seen in the armor's reflections at night. You have a +1 bonus to AC while wearing this armor.",
        {
          type: "entries",
          name: "Astral Leap",
          entries: [
            "While wearing this armor, you can speak its command word as an action to choose a space you can see within 30 feet of you. When you do, you vanish into a planar tear and reappear at the chosen spot at the start of your next turn, remaining in the Astral Plane until you do. If you would arrive in a place already occupied by an object or a creature, you take {@damage 3d6} force damage and appear in the nearest unoccupied space. This property of the armor can't be used again until 12 hours have passed.",
            "Disappearing and reappearing in this way creates vacuums and waves as space is pushed and pulled around you. Other creatures within 10 feet of you when you vanish or reappear must make a DC 15 Strength saving throw. On a failed save, a creature takes {@damage 3d6} force damage and is pulled up to 10 feet toward the space you left from, or pushed 10 feet away from the space you reappear in. On a successful save, a creature takes half as much force damage and is not pulled or pushed."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Ring-Mail",
            source: "TLotRR",
            page: 72,
            type: "HA",
            rarity: "none",
            weight: 50,
            value: 500,
            currencyConversion: "M-E",
            ac: 15,
            armor: true,
            stealth: true,
            entries: [
              "This armour is leather armour with heavy rings sewn into it. The rings help reinforce the armour against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor."
            ]
          },
          specificVariant: {
            name: "Novanite Ring-Mail",
            source: "GriffonsSaddlebag2",
            type: "HA",
            rarity: "very rare",
            weight: 50,
            currencyConversion: "M-E",
            ac: 15,
            armor: true,
            stealth: true,
            entries: [
              "This armour is leather armour with heavy rings sewn into it. The rings help reinforce the armour against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor."
            ],
            page: 130,
            tier: "major",
            reqAttune: true,
            bonusAc: "+1",
            lootTables: [
              "Magic Item Table H1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Novanite-Armor.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Novanite Armor",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Scale Armour",
            source: "TLotRR",
            page: 72,
            type: "MA",
            rarity: "none",
            weight: 40,
            value: 500,
            currencyConversion: "M-E",
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "This armour consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
            ]
          },
          specificVariant: {
            name: "Novanite Scale Armour",
            source: "GriffonsSaddlebag2",
            type: "MA",
            rarity: "very rare",
            weight: 40,
            currencyConversion: "M-E",
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "This armour consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
            ],
            page: 130,
            tier: "major",
            reqAttune: true,
            bonusAc: "+1",
            lootTables: [
              "Magic Item Table H1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Novanite-Armor.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Novanite Armor",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Spiked Armor",
            source: "SCAG",
            page: 121,
            type: "MA",
            rarity: "unknown",
            weight: 45,
            value: 7500,
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "Spiked armor is a rare type of medium armor made by dwarves. It consists of a leather coat and leggings covered with spikes that are usually made of metal."
            ]
          },
          specificVariant: {
            name: "Novanite Spiked Armor",
            source: "GriffonsSaddlebag2",
            type: "MA",
            rarity: "very rare",
            weight: 45,
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "Spiked armor is a rare type of medium armor made by dwarves. It consists of a leather coat and leggings covered with spikes that are usually made of metal."
            ],
            page: 130,
            tier: "major",
            reqAttune: true,
            bonusAc: "+1",
            lootTables: [
              "Magic Item Table H1|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Novanite-Armor.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Novanite Armor",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Oathkeeper's Resolve",
      source: "GriffonsSaddlebag2",
      page: 130,
      type: "S",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a paladin",
      reqAttuneTags: [
        {
          class: "paladin"
        }
      ],
      weight: 2,
      ac: 2,
      bonusAc: "+2",
      entries: [
        "This star-shaped mithral buckler weighs 2 pounds and bolsters your sense of holy purpose. While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
        "The center of the shield is ornamented with a durable, glassy lens that can project your holy radiance. You can use a bonus action while holding this shield to cause it to emit bright light from the lens in a 15-foot radius and dim light for an additional 15 feet. The light lasts until you use a bonus action to extinguish it or until you drop to 0 hit points.",
        {
          type: "entries",
          name: "Radiant Aura",
          entries: [
            "When you doff this shield or by using an action, you can speak the shield's command word and choose to throw it to a friendly creature (if it has a free hand) or unoccupied space within 30 feet of you that you can see, causing the shield to radiate with your holy resolve and light. The shield's light becomes suffused with divine intention, casting bright light in a 30-foot radius and dim light for an additional 30 feet instead of its normal radius. This holy light lasts for 1 minute, and any friendly creature within the bright light gains the effects of your paladin auras. Completely covering the affected shield with an opaque object blocks the light. Once the holy light fades, this property can't be used again for 8 hours."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Oathkeepers-Resolve.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ogramau's Graveyard",
      source: "GriffonsSaddlebag2",
      page: 131,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a cleric or wizard",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "wizard"
        }
      ],
      wondrous: true,
      weight: 1,
      entries: [
        "This glass orb has a miniature graveyard inside and has a base made from a hollowed humanoid skull. It's roughly fist-sized and weighs 1 pound. While the orb is on your person, undead creatures have disadvantage on attack rolls against you. If you're holding the orb, you can use an action to speak one of its two command words.",
        "The first command word shunts a Medium or Small humanoid corpse that you can see within 5 feet of you into a special demiplane contained within the orb. A corpse within this demiplane doesn't age, effectively extending the time limit on raising it from the dead. If you shunt a second corpse into the demiplane while another one is there, the first corpse reappears in the space left behind by the new one.",
        "The second command word duplicates the effect of the {@spell animate dead} spell, using a corpse stored within the orb's demiplane as the target of the spell. A {@creature skeleton} or {@creature zombie} created in this way appears in an unoccupied space that you can see within 15 feet of you and turns to dust and is destroyed after either 24 hours have passed or it drops to 0 hit points. If you speak this command word again to create a second skeleton or zombie while the first one remains, the first skeleton or zombie turns to dust and is destroyed when the new one appears."
      ],
      attachedSpells: [
        "animate dead"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ogramaus-Graveyard.webp"
            }
          }
        ]
      }
    },
    {
      name: "Orostead Iced Tea (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 133,
      type: "P",
      tier: "minor",
      rarity: "very rare",
      entries: [
        "The following {@item Orostead iced tea|GriffonsSaddlebag2} is a very rare variant with additional properties. It also tastes better. When made, a tea has enough for {@dice 6 + 1d4} sips before it's used up, instead of a single use. You can take a sip as an action.",
        "When you take a sip of this potion, roll a {@dice d8} and consult the table below instead to determine which one of the following benefits you gain. Once you've gained a benefit from the table, you can't gain that same benefit again until you finish a long rest.",
        {
          type: "table",
          colLabels: [
            "d8",
            "Very Rare Effect"
          ],
          colStyles: [
            "col-1-5 text-center",
            "col-10-5 text-left"
          ],
          rows: [
            [
              "1",
              "For 1 hour, you gain a +2 bonus to Strength ability checks and saving throws, as well as attack and damage rolls for weapons that use Strength."
            ],
            [
              "2",
              "For 1 hour, you gain a +2 bonus to Dexterity ability checks and saving throws, as well as attack and damage rolls for weapons that use Dexterity."
            ],
            [
              "3",
              "You gain {@dice 2d10 + 20} temporary hit points."
            ],
            [
              "4",
              "For 1 hour, you gain a +2 bonus to Intelligence ability checks and saving throws. If Intelligence is your spellcasting ability, you also gain a +2 bonus to your spell attack rolls and spell save DC for the duration."
            ],
            [
              "5",
              "For 1 hour, you gain a +2 bonus to Wisdom ability checks and saving throws. If Wisdom is your spellcasting ability, you also gain a +2 bonus to your spell attack rolls and spell save DC for the duration."
            ],
            [
              "6",
              "For 1 hour, you gain a +2 bonus to Charisma ability checks and saving throws. If Charisma is your spellcasting ability, you also gain a +2 bonus to your spell attack rolls and spell save DC for the duration."
            ],
            [
              "7",
              "Choose a benefit from the table, even if you've already gained it since you finished your last long rest."
            ],
            [
              "8",
              "You recover expended spells slots with a combined level that is equal to or less than 8, and none of the slots can be 6th level or higher. If you don't have any expended spell slots, you can use an action to cast the {@spell fireball} spell once within the next 8 hours, casting the spell at 6th level and using a spell save DC of 16 when you do."
            ]
          ]
        }
      ],
      attachedSpells: [
        "fireball"
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Orostead-Iced-Tea.webp"
            }
          }
        ]
      }
    },
    {
      name: "Phasing Bow",
      type: "GV|DMG",
      requires: [
        {
          bow: true
        }
      ],
      inherits: {
        namePrefix: "Phasing ",
        source: "GriffonsSaddlebag2",
        page: 135,
        tier: "major",
        rarity: "very rare",
        reqAttune: true,
        recharge: "dawn",
        rechargeAmount: 5,
        charges: 5,
        entries: [
          "This flexible bow is made from the chitinous legs of a phase spider and retains some of its ethereal properties. When you hit with a ranged attack using this magic bow, the target takes an extra {@damage 1d4} force damage.",
          "The bow has 5 charges and regains all expended charges daily at dawn. When you make a ranged attack with this bow, you can expend 1 of its charges to cause the arrow to slip partially into the Ethereal Plane. When you do, the target of the attack gains no benefit from cover, including total cover, as long as the cover isn't made of lead or more than 1 foot thick. If you hit, the target takes an extra {@damage 3d4} force damage. Any effect that blocks travel through the Ethereal Plane also blocks the arrow.",
          "Alternatively, you can speak the bow's command word as a bonus action to expend 3 of its charges and fire an arrow at a point you can see within the weapon's normal range. When the arrow hits a solid surface, you vanish from your location and reappear in an unoccupied space nearest to that point."
        ],
        lootTables: [
          "Magic Item Table H2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phasing-Bow.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 135,
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: 5,
      charges: 5,
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phasing-Bow.webp"
            }
          }
        ]
      },
      entries: [
        "This flexible bow is made from the chitinous legs of a phase spider and retains some of its ethereal properties. When you hit with a ranged attack using this magic bow, the target takes an extra {@damage 1d4} force damage.",
        "The bow has 5 charges and regains all expended charges daily at dawn. When you make a ranged attack with this bow, you can expend 1 of its charges to cause the arrow to slip partially into the Ethereal Plane. When you do, the target of the attack gains no benefit from cover, including total cover, as long as the cover isn't made of lead or more than 1 foot thick. If you hit, the target takes an extra {@damage 3d4} force damage. Any effect that blocks travel through the Ethereal Plane also blocks the arrow.",
        "Alternatively, you can speak the bow's command word as a bonus action to expend 3 of its charges and fire an arrow at a point you can see within the weapon's normal range. When the arrow hits a solid surface, you vanish from your location and reappear in an unoccupied space nearest to that point."
      ],
      variants: [
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
            name: "Phasing Longbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "very rare",
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
            page: 135,
            tier: "major",
            reqAttune: true,
            recharge: "dawn",
            rechargeAmount: 5,
            charges: 5,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phasing-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Phasing Bow",
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
            name: "Phasing Shortbow",
            source: "GriffonsSaddlebag2",
            edition: "one",
            type: "R|XPHB",
            rarity: "very rare",
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
            page: 135,
            tier: "major",
            reqAttune: true,
            recharge: "dawn",
            rechargeAmount: 5,
            charges: 5,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phasing-Bow.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Phasing Bow",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    },
    {
      name: "Phoenix Breastplate",
      source: "GriffonsSaddlebag2",
      page: 136,
      baseItem: "breastplate|phb",
      type: "MA",
      resist: [
        "fire"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 20,
      ac: 14,
      bonusAc: "+1",
      entries: [
        "This golden breastplate has the shape of a phoenix worked into its design. While wearing this armor, you gain a +1 bonus to AC and resistance to fire damage.",
        "When you're reduced to 0 hit points but not killed outright, you can choose to drop to 1 hit point instead. When you do, a fiery explosion surrounds you. Hostile creatures within 30 feet of you must make a DC 16 Dexterity saving throw, taking {@damage 3d10} fire damage on a failed save, or half as much damage on a successful one. You and other friendly creatures within the area regain a number of hit points equal to the same amount, instead of taking fire damage. Once this property of the armor has been used, it can't be used again until {@dice 1d6 + 1} days have passed."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phoenix-Breastplate.webp"
            }
          }
        ]
      }
    },
    {
      name: "Phoenix Rocket Sword",
      source: "GriffonsSaddlebag2",
      page: 136,
      baseItem: "greatsword|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
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
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      entries: [
        "This heavy, steel greatsword creates a powerful fan of flames from curious, whirring chambers mounted to the blade. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The sword has 10 charges and regains {@dice 1d6 + 4} expended charges daily at dawn.",
        "As an action, you can hold the sword out in front of you and speak its command word to expend up to 5 of its charges, causing a jet of flame to erupt from it. When you do, the sword emits a roar that's audible out to 100 feet, and you must succeed on a Strength saving throw or be pushed back 20 feet for each charge you expend. You can choose to fail this saving throw, whose DC equals 10 + the number of charges you expend. This movement doesn't provoke opportunity attacks. Pointing the blade down and expending charges in this way launches you upward instead. If you do and you are not launched, the sword's flames spread out in a 15-foot radius circle, centered on you.",
        "The jet of flame spreads out in a 15-foot cone and moves with you if you're pushed. Any creature in the area when the flame first appears or when it moves into the creature's space must make a DC 16 Dexterity saving throw. On a failed save, a creature takes {@damage 3d6} fire damage, or half as much fire damage on a success. The fire damage increases by {@damage 1d6} for each additional charge you expend beyond the first.",
        "If you strike an object because of this forced movement, such as a wall or floor, you take {@damage 1d6} bludgeoning damage for every charge you expend and are knocked {@condition prone}. If you strike a creature, you and that creature take the same bludgeoning damage and must each succeed on a Strength saving throw (DC 10 + the number of charges you expend) or be knocked {@condition prone}."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Phoenix-Rocket-Sword.webp"
            }
          }
        ]
      }
    },
    {
      name: "Radiant War Pick",
      source: "GriffonsSaddlebag2",
      page: 142,
      baseItem: "war pick|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a cleric or paladin",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "paladin"
        }
      ],
      weight: 2,
      weaponCategory: "martial",
      dmg1: "1d8",
      dmgType: "P",
      bonusWeapon: "+1",
      entries: [
        "This silver and golden weapon is wrapped in fragments of holy vestments and glimmers spectacularly in sun and moonlight. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with an attack using this war pick, the target takes an extra {@damage 1d8} radiant damage. If the target is a shapechanger or undead, this radiant damage is maximized.",
        "In addition, while holding the war pick, you can use an action to expend a use of your Channel Divinity to cast the {@spell moonbeam} (6th-level version) or {@spell sunbeam} spell from it (save DC 16). Once this property of the weapon has been used, it can't be used again until the next dawn.",
        "You can use an action to speak the war pick's command word to cause it to shed bright light in a 20-foot radius and dim light for an additional 20 feet. Speaking the command word again puts out the light."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Radiant-War-Pick.webp"
            }
          }
        ]
      }
    },
    {
      name: "Rejuvenating Draft (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 144,
      type: "P",
      tier: "minor",
      rarity: "very rare",
      entries: [
        "When you drink this potion, you regain {@dice 1d6 + 4} spent Hit Dice."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
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
      name: "Reliquary of Holy Memories (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 144,
      baseItem: "mace|phb",
      type: "RD|DMG",
      tier: "major",
      rarity: "very rare",
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
        "While attuned to this rod, you can prepare one additional spell for each bone held within the rod, up to a maximum of 5. The rarity of the reliquary is determined by the number of bones inside. The very rare variant of this item contains 4 bones, and you can prepare 4 extra spells while attuned to it."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
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
      name: "Ring of Lunar Might",
      source: "GriffonsSaddlebag2",
      page: 146,
      type: "RG|DMG",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      entries: [
        "This intricate ring has various flowing designs that are both entropic and patterned in nature. While wearing the ring, you can use an action to create an area of gravitational force that extends from you in a 20-foot-radius, 40-foot-high cylinder. The area moves with you and remains as long as you concentrate (as if concentrating on a spell), to a maximum of 10 minutes. You have a semblance of control of the gravity within this cylinder. A friendly creature other than you spends 1 foot of movement for every 2 feet it moves within the area, while hostile creatures must spend 2 feet of movement for every 1 foot moved instead.",
        "For the duration, you can use a bonus action on each of your turns to try and overwhelm a creature that you can see within the cylinder with a wave of intense gravity. Such a creature must succeed on a DC 16 Strength saving throw or take {@damage 2d10} bludgeoning damage and be knocked {@condition prone}. In addition, you can use a bonus action on your turn to pull or push any water within the area up to 20 feet toward you or away from you, up to the outside of the cylinder. This effect lasts for the duration of the cylinder or until you use a bonus action to change the water's direction or end the effect.",
        "Once the ring has been used to create an area of gravitational force, it can't do so again until the next dusk.",
        "Alternatively, you can use an action to speak the ring's command word to cast the {@spell reverse gravity} spell (spell DC 16) from it. Once the ring has been used in this way, it loses this property."
      ],
      attachedSpells: [
        "reverse gravity"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-Lunar-Might.webp"
            }
          }
        ]
      }
    },
    {
      name: "Ring of the Split Mind",
      source: "GriffonsSaddlebag2",
      page: 148,
      type: "RG|DMG",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a spellcaster",
      reqAttuneTags: [
        {
          spellcasting: true
        }
      ],
      entries: [
        "This crimson ring is split into two half-circles that magically hover a hair's breadth apart. While wearing the ring and concentrating on only one spell, you have advantage on Constitution saving throws that you make to maintain your concentration on that spell when you take damage.",
        "If you're concentrating on a spell of 3rd level or lower and wearing the ring, you can choose to cast another spell of 3rd level or lower that also requires concentration without losing concentration on the first one. While concentrating on two spells in this way, make a Constitution saving throw for each spell as normal whenever you take damage to maintain your concentration. When you do, roll the {@dice d20} for each spell's saving throw in the order in which you cast them. You are vulnerable to psychic damage while concentrating on two spells in this way. Once this property of the ring has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Ring-of-the-Split-Mind.webp"
            }
          }
        ]
      }
    },
    {
      name: "Royal Blade of Amphibios",
      source: "GriffonsSaddlebag2",
      page: 152,
      baseItem: "rapier|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 2,
      weaponCategory: "martial",
      property: [
        "F"
      ],
      dmg1: "1d8",
      dmgType: "P",
      bonusWeapon: "+2",
      recharge: "dawn",
      rechargeAmount: 3,
      charges: 3,
      entries: [
        "This expertly crafted blade is ornamented with rose gold designs of frogs and lily pads. While holding the rapier, you can stand on and move across any liquid surface as if it were solid ground, you can hold your breath for up to 30 minutes at a time, and you gain a swimming speed of 30 feet. In addition, any creature with the Amphibious trait can understand the meaning of your words when you speak, though you gain no special ability to understand them in return.",
        "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, the blade has 3 charges and regains all expended charges daily at dawn. When you take the {@action Attack} action while holding the weapon, you can choose to expend 1 of its charges to transform the blade into a lashing, silver pseudopod that loosely resembles a frog's tongue. Until the end of your turn, the weapon adds 10 feet to your reach when you attack with it and deals slashing damage, instead of piercing, and on a hit, the target must succeed on a DC 16 Strength saving throw or be pulled up to 10 feet straight toward you."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Royal-Blade-of-Amphibios.webp"
            }
          }
        ]
      }
    },
    {
      name: "Scepter of Faith",
      source: "GriffonsSaddlebag2",
      page: 155,
      type: "RD|DMG",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a cleric",
      reqAttuneTags: [
        {
          class: "cleric"
        }
      ],
      entries: [
        "This rod is imbued with the last remaining magic from a pious saint. While holding the rod, you can use a bonus action to cast the {@spell shield of faith} spell from it on a creature other than you within range. When an attacker within 60 feet of you deals damage to a creature under the effect of this spell, you can use your reaction to cause a spectral shield to appear before it and push the attacker 5 feet away from the creature.",
        "In addition, while holding the rod, you can use an action to cast either the {@spell guardian of faith} or {@spell find the path} spell. When cast in this way, {@spell find the path} can only be used to find the route to a temple or other holy site. Once the rod has cast either of these spells in this way, it can't be used to cast that spell again until the next dawn."
      ],
      attachedSpells: [
        "find the path",
        "guardian of faith",
        "shield of faith"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Scepter-of-Faith.webp"
            }
          }
        ]
      }
    },
    {
      name: "Scroll of Mapping (Very Rare)",
      source: "GriffonsSaddlebag2",
      page: 156,
      type: "SC|DMG",
      tier: "minor",
      rarity: "very rare",
      entries: [
        "The following {@item scroll of mapping|GriffonsSaddlebag2} is a very rare variant with additional properties.",
        "This map is in color and displays the names of large and small locations, depending on the map's scale, such as the name of the region, street, or nearby shop. In addition, you can use an action to touch the map and ask it where a familiar person or place is that you can name or clearly describe. If the person or place is somewhere that can be shown on the map, an X appears on it at the target's location. If there are multiple targets with the same name or description within the area, multiple marks appear. If the target is a creature that's in a different form, such as being under the effects of a polymorph spell, or can't be detected by divination magic or scrying sensors, the map doesn't display its location. If the target is moving, the X follows its movements for the duration. The marked target remains shown on the map for 10 minutes, after which time the X vanishes. Once this property of the map has been used, it can't be used again until 12 hours have passed."
      ],
      lootTables: [
        "Magic Item Table D|GriffonsSaddlebag2"
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
      name: "Shooting Star",
      source: "GriffonsSaddlebag2",
      page: 160,
      baseItem: "longbow|phb",
      type: "R",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 2,
      weaponCategory: "martial",
      property: [
        "A",
        "H",
        "2H"
      ],
      range: "150/600",
      dmg1: "1d8",
      dmgType: "R",
      bonusWeapon: "+2",
      entries: [
        "Tiny specks of starlight gleam from the dark surface of this magic longbow at night. The bow is strung with an invisible string that appears only when it's drawn. When pulled, the string emits a soft yellow glow as motes of starlight appear and float around the bow's frame. Drawing the bow without first nocking an arrow creates a magic arrow of pure starlight in its place and intensifies the bow's glow. The starlit arrow shines bright light in a 20-foot radius and dim light for an additional 20 feet. You gain a +2 bonus to attack and damage rolls made with this weapon when you use a starlit arrow, which deals radiant damage instead of piercing damage. Hit or miss, the starlit arrow disappears immediately after the attack.",
        {
          type: "entries",
          name: "Falling Stars",
          entries: [
            "As an action, you can speak the bow's command word and fire a starlit arrow into the air above you, choosing a point that you can see within 60 feet of you. The arrow immediately vanishes and creates a shower of tiny, magical stars that fall and land in a 30-foot-radius circle on the ground centered on the point you chose. Each creature of your choice within the area must make a DC 16 Dexterity saving throw. A target takes {@damage 3d6} radiant damage and {@damage 3d6} force damage on a failed save, or half as much damage on a successful one, as a shower of magical stars slam into the ground around them. This property can't be used again until the next dusk.",
            "In addition, when you use a starlit arrow and roll a 20 on an attack roll made with this weapon, a tiny magical star appears and strikes the target. The target must make a DC 16 Dexterity saving throw, taking {@damage 1d6} radiant damage and {@damage 1d6} force damage on a failed save, or half as much damage on a successful one.",
            "Immediately after a falling star hits the ground or a target, it disappears."
          ]
        }
      ],
      ammoType: "arrow|phb",
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Shooting-Star.webp"
            }
          }
        ]
      }
    },
    {
      name: "Starmetal Sliver",
      source: "GriffonsSaddlebag2",
      page: 171,
      baseItem: "dagger|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
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
        "This slim blade was forged using strange, unearthly metals from a meteorite. When you use an action to toss this magic dagger into the air, it orbits your body at a distance of {@dice 1d3} feet. Another creature can use an action to grasp the dagger to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and either wield or stow the dagger.",
        "When you take the {@action Attack} action while the dagger is orbiting you, you can use a bonus action to cause the dagger to attack a target within 10 feet of you. The dagger uses your attack roll and ability score modifier to damage rolls. Immediately after the attack, the dagger returns to orbit you.",
        "In addition, the dagger creates a small gravitational field that wards off harm. While the dagger orbits you, when you are hit by a ranged weapon attack, the damage you take from the attack is reduced by {@dice 1d10 + 4}. If the damage is reduced to 0, the missile slows to a stop without hitting you and falls to the ground at your feet."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Starmetal-Sliver.webp"
            }
          }
        ]
      }
    },
    {
      name: "Titan's Tooth Claymore",
      source: "GriffonsSaddlebag2",
      page: 175,
      baseItem: "greatsword|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      weight: 6,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "2d6",
      dmgType: "S",
      bonusWeapon: "+2",
      entries: [
        "This massive two-handed blade is made from the lost or harvested tooth of a tarrasque. You gain a +2 bonus to attack and damage rolls made with this magic weapon. If it hits an object, the hit is automatically a critical hit. In addition, if you roll a 20 on an attack roll using this weapon, the target takes an extra {@damage 2d6} slashing damage."
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Titans-Tooth-Claymore.webp"
            }
          }
        ]
      }
    },
    {
      name: "Tome of Advanced Fighting Styles",
      source: "GriffonsSaddlebag2",
      page: 176,
      tier: "major",
      rarity: "very rare",
      wondrous: true,
      entries: [
        "This book's magically charged pages are filled with detailed descriptions and illustrations that teach unique styles of combat. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, you gain one of the following Advanced Fighting Styles:",
        {
          type: "entries",
          name: "Advanced Simplicity",
          entries: [
            "Your attacks made with simple weapons score a critical hit on a roll of 19 or 20."
          ]
        },
        {
          type: "entries",
          name: "Crushing Blows",
          entries: [
            "When you score a critical hit using a melee weapon that has the heavy property, the target takes extra bludgeoning damage equal to 5 + the ability score modifier you used for your attack and damage rolls."
          ]
        },
        {
          type: "entries",
          name: "Net Mastery",
          entries: [
            "When you throw a net, its normal and long range is doubled. In addition, the first time that a creature attempts to escape from a net that you threw, the escape DC is equal to 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice), unless it's already higher."
          ]
        },
        {
          type: "entries",
          name: "Quick Shot",
          entries: [
            "You gain a special reach with ranged weapons called a firing reach that's a number of feet equal to 5 + your normal reach. While you are wielding a ranged weapon, other creatures provoke an opportunity attack from you when they move out of your firing reach."
          ]
        },
        {
          type: "entries",
          name: "Readied Bulwark",
          entries: [
            "You gain a +2 bonus to AC against opportunity attacks while holding a shield."
          ]
        },
        {
          type: "entries",
          name: "Versatile Expert",
          entries: [
            "When you hit with an attack using a weapon that has the versatile property, you can use the two-handed damage die even if you're only wielding the weapon with one hand."
          ]
        },
        "You can't take an Advanced Fighting Style option more than once, even if you later get to choose again. Once the book has been used to grant an Advanced Fighting Style, it loses its magic, but regains it in a century."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Tome-of-Advanced-Fighting-Styles.webp"
            }
          }
        ]
      }
    },
    {
      name: "Vyra's Broken Path",
      source: "GriffonsSaddlebag2",
      page: 181,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by an elf or half-elf",
      reqAttuneTags: [
        {
          race: "elf"
        },
        {
          race: "half-elf"
        }
      ],
      wondrous: true,
      entries: [
        "This cloak once belonged to an elven archer of masterful skill. Its shoulders are ornamented with furs and seasonal leaves, and it bears a clasp at its center made from intertwined branches. While wearing the cloak, you have advantage on Dexterity ({@skill Stealth}) checks. As a bonus action, you can use a free hand to break the cloak's clasp and transform the cloak into a {@item +3 longbow|DMG} that appears in your hand. While attuned to the cloak, you are proficient with this magical longbow, and your ranged attacks with it ignore half cover. While holding the bow, you can use a bonus action to speak its command phrase in {@language Elvish}, \"The arrow's path was true.\" When you do, the bow transforms into the cloak again and appears draped around your shoulders or in your hand (your choice).",
        "While the cloak or bow is on your person, you can use an action to focus your awareness on the surrounding region. For 1 hour, you can sense if any of the following creature types are present within 1 mile of you: aberrations, celestials, dragons, elementals, fey, fiends, and undead. You know the type of any being whose presence you sense, but not its identity. This property doesn't reveal the creatures' location or number. Once this property of the cloak has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Vyras-Broken-Path.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wand of Merriment",
      source: "GriffonsSaddlebag2",
      page: 182,
      type: "WD|DMG",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 4}",
      charges: 10,
      entries: [
        "This wand is made from a sprig of holly and exudes an unmistakable aura of cheer from it. It has 10 holly berries that each contain 1 charge and are used to fuel the wand's properties. When you expend a charge from a berry, it wilts away and disappears. The wand regrows {@dice 1d6 + 4} missing berries daily at dawn. While you're attuned to the wand, you gain a +2 bonus to Charisma checks and saving throws.",
        {
          type: "entries",
          name: "Spells",
          entries: [
            "While holding the wand, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 16) from it: {@spell create food and water} (3 charges), {@spell goodberry} (1 charge), {@spell tasha's hideous laughter|PHB|hideous laughter} (1 charge), or {@spell otto's irresistible dance|PHB|irresistible dance} (6 charges)."
          ]
        },
        {
          type: "entries",
          name: "Dashing through the Snow",
          entries: [
            "While holding the wand, you can use a bonus action to expend 2 of its charges to take the Dash action. When you do, you ignore {@quickref difficult terrain||3} created by ice or snow. This movement doesn't provoke opportunity attacks."
          ]
        },
        {
          type: "entries",
          name: "Festive",
          entries: [
            "As an action, you can wave this wand over up to 1 gallon of water and expend 1 charge to transform the liquid into a weak, but pleasant-tasting, alcoholic beverage."
          ]
        },
        "If you expend the wand's last charge, roll a {@dice d20}. On a 1, all but one of the wand's leaves and berry stems wither away and die. When this happens, the wand becomes a common wand that does not require attunement, but has only 1 charge. This common version of the wand retains only the festive property of its original form and regains the expended charge daily at dawn."
      ],
      attachedSpells: [
        "create food and water",
        "goodberry",
        "otto's irresistible dance",
        "tasha's hideous laughter"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wand-of-Merriment.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wand of Necrosis",
      source: "GriffonsSaddlebag2",
      page: 182,
      type: "WD|DMG",
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
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
      recharge: "dawn",
      rechargeAmount: "{@dice 1d6 + 1}",
      charges: 7,
      entries: [
        "This gnarled, wooden branch has grown over one of the severed fingers of a powerful lich, creating a gruesome and deadly wand. The wand has 7 charges. If the wand has at least 1 charge remaining, you have resistance to necrotic damage while you hold it.",
        "While holding this wand, you can use an action to expend 1 or more of its charges to cast one of the following spells from it (save DC 15, attack bonus +7): {@spell blight} (4 charges), {@spell finger of death} (7 charges), {@spell inflict wounds} (1 charge per spell level, plus 1 additional charge to make its range 30 feet), or {@spell ray of enfeeblement} (2 charges).",
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand explodes, destroying the wand in a flash of green light that duplicates the effect of the {@spell finger of death} spell, targeting only you. If you become a {@creature zombie|MM} as a result of this effect, you are under the command of the nearest {@creature lich||MM} within 100 miles of you, if any."
      ],
      attachedSpells: [
        "blight",
        "finger of death",
        "inflict wounds",
        "ray of enfeeblement"
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wand-of-Necrosis.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wand of Puppetry",
      source: "GriffonsSaddlebag2",
      page: 183,
      type: "WD|DMG",
      tier: "major",
      rarity: "very rare",
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
        "This wand is made of wood and looks like the handle of a marionette. The wand has 7 charges. While holding the wand, you can use an action to expend 1 or more of its charges to attach a number of magical strings equal to the charges spent to a humanoid that you can see within 60 feet of you. You can attach 1 string to each of the creature's limbs, including its head. For example, a humanoid with two legs, two arms, and only one head could have a maximum of 5 strings attached to it. The strings are invisible, but can be seen by a creature with a successful DC 16 Intelligence ({@skill Arcana}) check. Dealing 10 slashing damage with a magical weapon attack to one of the strings (AC 10) causes it to detach and disappear. At the end of each of its turns, a strung creature can make a DC 16 Strength saving throw, breaking free of and destroying any number of the strings connected to it on a success. The strings break early if the creature is more than 100 feet away from you.",
        "While a creature has a string attached to one or more of its limbs, the following effects occur depending on the location of the strings:",
        {
          type: "entries",
          name: "Arm or Hand",
          entries: [
            "A creature with a string attached to one of its arms or hands must succeed on a DC 16 Strength saving throw each time it attempts to use it, such as making a weapon attack, climbing a wall, or using an item. On a failed save, the action, attack, check, or saving throw fails and is lost. If an action requires multiple arms and only one of the creature's arms has a string attached, it makes this saving throw with advantage. If the strung arm is holding a shield, the creature doesn't gain the benefits of holding it for the duration. In addition, you can use an action to force the creature to make a DC 16 Strength saving throw, dropping any number of items it's holding with the strung arms or hands on a failure."
          ]
        },
        {
          type: "entries",
          name: "Head",
          entries: [
            "A creature with a string attached to its head has disadvantage on Intelligence checks, Wisdom ({@skill Perception}) checks, and Constitution saving throws made to maintain concentration on a spell when it takes damage. You can use an action to force the creature to speak on your turn, saying a word or phrase no longer than twenty-five words."
          ]
        },
        {
          type: "entries",
          name: "Leg",
          entries: [
            "A creature with a string attached to one or more of its legs (or similar limbs) has its speed reduced by 15 feet for each strung limb. If a flying creature's speed is reduced to 0 in this way, it falls to the ground at a rate of 60 feet per round and takes no falling damage when it lands. A creature with a string attached to each of its legs has disadvantage on Dexterity ({@skill Acrobatics}) checks and Dexterity saving throws."
          ]
        },
        {
          type: "entries",
          name: "Spell",
          entries: [
            "Alternatively, you can expend 5 charges to cast the {@spell dominate person} spell (save DC 16) from the wand."
          ]
        },
        "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the wand becomes nonmagical."
      ],
      attachedSpells: [
        "dominate person"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wand-of-Puppetry.webp"
            }
          }
        ]
      }
    },
    {
      name: "War's Wager",
      source: "GriffonsSaddlebag2",
      page: 185,
      baseItem: "greataxe|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 7,
      weaponCategory: "martial",
      property: [
        "H",
        "2H"
      ],
      dmg1: "1d12",
      dmgType: "S",
      bonusWeapon: "+1",
      entries: [
        "This golden axe is enchanted with haphazard divination magic. Its split blade features a spade, club, heart, and diamond on each of its four faces. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a target with this weapon, you can choose to roll a second {@dice d20} before calculating the weapon's damage. If you roll an 11 or higher on the second {@dice d20}, the blade magically seeks out and hits the weakest point of the target, turning the attack into a critical hit. On a roll of 10 or lower, the blade ricochets harmlessly off the original target and scores a critical hit against you, instead. When the axe hits you in this way, its damage ignores resistances and immunity."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wars-Wager.webp"
            }
          }
        ]
      }
    },
    {
      name: "Warding Staff",
      source: "GriffonsSaddlebag2",
      page: 185,
      baseItem: "quarterstaff|phb",
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a cleric or paladin",
      reqAttuneTags: [
        {
          class: "cleric"
        },
        {
          class: "paladin"
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
        "This platinum staff has a wide brazier on top with a small crystal orb that floats above it. While holding the staff, its brazier is lit with harmless, holy flames that shed bright light in a 20-foot radius and dim light for an additional 20 feet. The staff can be wielded as a magic quarterstaff. On a hit, it deals an extra {@damage 1d6} radiant damage.",
        "A friendly creature within reach of the staff can use its bonus action to remove the crystal orb that floats above the brazier. While the orb is on their person, that creature is under the effect of the {@spell warding bond} spell as if you cast it. The spell lasts until the orb is more than 60 feet away from you, until you're no longer holding the staff, or until you die or are {@condition incapacitated}. You can also choose to mentally end the spell at any time (no action required). When the spell ends, the orb teleports back to the head of the staff.",
        "In addition, while a creature other than you that you can see is carrying the orb, you can use a bonus action to speak the orb's command word and teleport up to 60 feet to an unoccupied space that you can see within 5 feet of that creature. Alternatively, a creature holding the orb can use its bonus action to speak the orb's command word and teleport to an unoccupied space that it can see within 5 feet of you instead. This property of the orb can't be used again until the next dawn."
      ],
      attachedSpells: [
        "warding bond"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Warding-Staff.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wind and Whirl",
      source: "GriffonsSaddlebag2",
      page: 190,
      baseItem: "scimitar|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      weight: 3,
      weaponCategory: "martial",
      property: [
        "F",
        "L",
        "T"
      ],
      range: "20/60",
      dmg1: "1d6",
      dmgType: "S",
      bonusWeapon: "+1",
      entries: [
        "This pair of scimitars was forged in the Elemental Plane of Air and cut effortlessly through the air in tandem. Attuning to one of the scimitars automatically attunes you to both of them, which count as one attuned item.",
        "You gain a +1 bonus to attack and damage rolls made with these magic weapons, which have the thrown property with a normal range of 20 feet and a long range of 60 feet. Immediately after you make a ranged attack with one of the scimitars, it flies back to your hand. In addition, when you engage in two-weapon fighting using both scimitars, you can add your ability modifier to the damage of the second attack.",
        "As an action, you can speak the scimitars' command words and throw the two swords at a point you can see within 60 feet of you. The two weapons spin wildly and create a sudden whirlwind in a 15-foot-radius, 30-foot-high cylinder centered on the point. A target caught in the whirlwind's area must make a DC 15 Strength saving throw. On a failed save, a target takes {@damage 6d6} bludgeoning damage and is flung up 20 feet away from the point in a random direction and knocked {@condition prone}. If a thrown target strikes an object, such as a wall or floor, the target takes {@damage 1d6} bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 15 Dexterity saving throw or take the same damage and be knocked {@condition prone}. On a successful save, a target takes half as much bludgeoning damage and isn't flung away or knocked {@condition prone}. The scimitars fly back to your hands immediately after the effect. Once this property of the scimitars has been used, it can't be used again until the next dawn."
      ],
      lootTables: [
        "Magic Item Table H1|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wind-And-Whirl.webp"
            }
          }
        ]
      }
    },
    {
      name: "Wraps of the Restless",
      source: "GriffonsSaddlebag2",
      page: 192,
      resist: [
        "necrotic"
      ],
      tier: "major",
      rarity: "very rare",
      reqAttune: true,
      wondrous: true,
      curse: true,
      recharge: "dawn",
      rechargeAmount: "{@dice 1d3}",
      charges: 3,
      entries: [
        "These salvaged wrappings from the arms of a mummy lord hang loosely from your arms but never seem to slide off. While wearing the wraps, you have resistance to necrotic damage.",
        "In addition, when you take the {@action Attack} action while wearing the wraps, you can use a bonus action immediately before or after one of your attacks to cause a piece of the wrapping to lash out at a target within 10 feet of you. Make a melee spell attack for the wrapping, using an attack bonus of +7. On a hit, the target takes {@damage 1d8} necrotic damage.",
        "The wraps have 3 charges and regain {@dice 1d3} expended charges daily at dawn. As an action, you can hold out your hand and expend 1 or more of the wraps' charges to release a blast of sand from it in a 15-foot cone. Each creature in the area must make a DC 15 Constitution saving throw. On a failed save, a creature is {@condition blinded} until the start of your next turn, and for each charge you spend, it takes {@damage 1d6} bludgeoning damage plus {@damage 2d8} necrotic damage. On a successful save, a creature takes half as much damage and isn't {@condition blinded}.",
        {
          type: "entries",
          name: "Curse",
          entries: [
            "Once you don these cursed wraps, you can't doff them unless you are targeted by the remove curse spell or similar magic. While wearing the wraps, you have disadvantage on attack rolls against undead and on saving throws against their spells and special abilities. In addition, while cursed, you don't recover as much from resting. When you roll Hit Dice to regain hit points, roll each one of the dice twice and use the lower result."
          ]
        }
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Wraps-of-the-Restless.webp"
            }
          }
        ]
      }
    },
    {
      name: "Xibalban Blade",
      source: "GriffonsSaddlebag2",
      page: 193,
      baseItem: "longsword|phb",
      type: "M",
      tier: "major",
      rarity: "very rare",
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
        "This toothed obsidian blade absorbs any blood that's left on it. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature that is not a construct, plant, or undead with this sword, that creature takes an extra {@damage 1d6} necrotic damage.",
        "If the sword has dealt necrotic damage in this way in the past hour, you can use an action to hold the sword aloft and speak its command word to summon a blood elemental, as if you had cast the {@spell conjure elemental} spell. Once this property of the sword has been used, it can't be used again until the next dawn. A blood elemental uses the same statistics as a {@creature water elemental|MM}, with the following changes:",
        "The blood elemental has resistance to necrotic damage in addition to its other resistances.",
        "The blood elemental's alignment is neutral evil.",
        "When you hit with an attack using this sword while the blood elemental is under your control and within 120 feet of you, the elemental regains a number of hit points equal to the necrotic damage dealt by the sword."
      ],
      attachedSpells: [
        "conjure elemental"
      ],
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Xibalban-Blade.webp"
            }
          }
        ]
      }
    },
    {
      name: "Yellow Harbinger's Path",
      type: "GV|DMG",
      requires: [
        {
          type: "LA"
        },
        {
          type: "MA"
        }
      ],
      inherits: {
        namePrefix: "Yellow Harbinger's ",
        source: "GriffonsSaddlebag2",
        page: 194,
        tier: "major",
        rarity: "very rare",
        reqAttune: "by a creature with a Dexterity score of 17 or higher",
        reqAttuneTags: [
          {
            dex: 17
          }
        ],
        recharge: "dawn",
        rechargeAmount: 7,
        charges: 7,
        entries: [
          "This burnt yellow armor is the mark of a royal scout. Its magical construction is unyielding to all but the most lithe and capable of scouts and huntsmen.",
          "While wearing the armor, you gain a +5 bonus to any Dexterity ({@skill Stealth}) check you make. While you have more than half your Hit Dice remaining, you can choose to expend 2 of them as an action to extend this property to creatures of your choice within 30 feet of you for 1 hour. When you do, each affected creature, including yourself, has advantage on initiative rolls and can't be tracked except by magical means. A creature only benefits from this effect if it remains within 30 feet of you.",
          "The armor has 7 charges and regains all expended charges daily at dawn. While wearing the armor, you can expend 1 or more of its charges to use one of the following properties:",
          {
            type: "entries",
            name: "\"At Arrow's Length!\"",
            entries: [
              "When a creature that you can see within 60 feet of you uses its reaction to make an opportunity attack, you can use your reaction to expend 1 of the armor's charges to summon a spectral arrow from the air above it. The arrow flies harmlessly in front of the attacking creature and disappears, distracting them from the attack and causing the roll to be made with disadvantage. If the attacking creature has {@sense blindsight}, this property has no effect. If you're concentrating on the {@spell hunter's mark|PHB} spell, you can choose to move your mark to this creature as part of your reaction.",
              "Alternatively, if a hostile creature ends its turn within 5 feet of you, you can use your reaction to expend 2 charges to immediately move up to half your speed, without provoking opportunity attacks."
            ]
          },
          {
            type: "entries",
            name: "\"From Sky to Earth!\"",
            entries: [
              "As an action, you can expend 4 charges from the armor to summon a volley of spectral arrows from the sky, choosing a point that you can see within 120 feet of you when you do. The arrows fall in a 30-foot radius, 60-foot high cylinder centered on that point and then disappear. Each creature in the area must make a DC 16 Dexterity saving throw, taking {@damage 6d8} force damage on a failed save, or half as much damage on a successful one."
            ]
          },
          {
            type: "entries",
            name: "\"There Is No Escape!\"",
            entries: [
              "You can use a bonus action to expend up to 3 of the armor's charges to cast the {@spell hunter's mark} spell from it. If you choose to expend 2 charges, you cast the spell at 3rd level, or 5th level if you choose to expend 3."
            ]
          },
          {
            type: "entries",
            name: "Flaw",
            entries: [
              "The Yellow Harbinger's path compels its wearer to be cautious and overprepared. While attuned to the armor, you gain the following flaw: \"I am duty-bound to lay out the perfect plan for every situation. Uncertainty is unacceptable.\" In addition, if you are attuned to the armor for 24 consecutive hours, your commitment to duty extends to the person you trust most. You or your GM determine who this person is. You consider this person your field commander and put their plans ahead of your own and trust them implicitly. You can't attune to the {@item Red Queen's burden|GriffonsSaddlebag2} or the {@item Violet King's promise|GriffonsSaddlebag2}. If you're already attuned to either of them, your attunement to it immediately ends once this effect is extended to you. The first creature you meet who is attuned to either of these weapons becomes your field commander, regardless of who you previously considered it to be. You become charmed by them and obey their commands to the best of your ability. If you find the {@item Red Queen's burden|GriffonsSaddlebag2} or {@item Violet King's promise|GriffonsSaddlebag2} without an owner, you are compelled to protect it with your life until a rightful owner is found. These effects can be removed with a {@spell greater restoration} spell, but not while you are attuned to the armor."
            ]
          }
        ],
        lootTables: [
          "Magic Item Table H2|GriffonsSaddlebag2"
        ],
        fluff: {
          images: [
            {
              type: "image",
              href: {
                type: "external",
                url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
              }
            }
          ]
        }
      },
      source: "GriffonsSaddlebag2",
      page: 194,
      tier: "major",
      rarity: "very rare",
      reqAttune: "by a creature with a Dexterity score of 17 or higher",
      reqAttuneTags: [
        {
          dex: 17
        }
      ],
      recharge: "dawn",
      rechargeAmount: 7,
      charges: 7,
      lootTables: [
        "Magic Item Table H2|GriffonsSaddlebag2"
      ],
      fluff: {
        images: [
          {
            type: "image",
            href: {
              type: "external",
              url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
            }
          }
        ]
      },
      entries: [
        "This burnt yellow armor is the mark of a royal scout. Its magical construction is unyielding to all but the most lithe and capable of scouts and huntsmen.",
        "While wearing the armor, you gain a +5 bonus to any Dexterity ({@skill Stealth}) check you make. While you have more than half your Hit Dice remaining, you can choose to expend 2 of them as an action to extend this property to creatures of your choice within 30 feet of you for 1 hour. When you do, each affected creature, including yourself, has advantage on initiative rolls and can't be tracked except by magical means. A creature only benefits from this effect if it remains within 30 feet of you.",
        "The armor has 7 charges and regains all expended charges daily at dawn. While wearing the armor, you can expend 1 or more of its charges to use one of the following properties:",
        {
          type: "entries",
          name: "\"At Arrow's Length!\"",
          entries: [
            "When a creature that you can see within 60 feet of you uses its reaction to make an opportunity attack, you can use your reaction to expend 1 of the armor's charges to summon a spectral arrow from the air above it. The arrow flies harmlessly in front of the attacking creature and disappears, distracting them from the attack and causing the roll to be made with disadvantage. If the attacking creature has {@sense blindsight}, this property has no effect. If you're concentrating on the {@spell hunter's mark|PHB} spell, you can choose to move your mark to this creature as part of your reaction.",
            "Alternatively, if a hostile creature ends its turn within 5 feet of you, you can use your reaction to expend 2 charges to immediately move up to half your speed, without provoking opportunity attacks."
          ]
        },
        {
          type: "entries",
          name: "\"From Sky to Earth!\"",
          entries: [
            "As an action, you can expend 4 charges from the armor to summon a volley of spectral arrows from the sky, choosing a point that you can see within 120 feet of you when you do. The arrows fall in a 30-foot radius, 60-foot high cylinder centered on that point and then disappear. Each creature in the area must make a DC 16 Dexterity saving throw, taking {@damage 6d8} force damage on a failed save, or half as much damage on a successful one."
          ]
        },
        {
          type: "entries",
          name: "\"There Is No Escape!\"",
          entries: [
            "You can use a bonus action to expend up to 3 of the armor's charges to cast the {@spell hunter's mark} spell from it. If you choose to expend 2 charges, you cast the spell at 3rd level, or 5th level if you choose to expend 3."
          ]
        },
        {
          type: "entries",
          name: "Flaw",
          entries: [
            "The Yellow Harbinger's path compels its wearer to be cautious and overprepared. While attuned to the armor, you gain the following flaw: \"I am duty-bound to lay out the perfect plan for every situation. Uncertainty is unacceptable.\" In addition, if you are attuned to the armor for 24 consecutive hours, your commitment to duty extends to the person you trust most. You or your GM determine who this person is. You consider this person your field commander and put their plans ahead of your own and trust them implicitly. You can't attune to the {@item Red Queen's burden|GriffonsSaddlebag2} or the {@item Violet King's promise|GriffonsSaddlebag2}. If you're already attuned to either of them, your attunement to it immediately ends once this effect is extended to you. The first creature you meet who is attuned to either of these weapons becomes your field commander, regardless of who you previously considered it to be. You become charmed by them and obey their commands to the best of your ability. If you find the {@item Red Queen's burden|GriffonsSaddlebag2} or {@item Violet King's promise|GriffonsSaddlebag2} without an owner, you are compelled to protect it with your life until a rightful owner is found. These effects can be removed with a {@spell greater restoration} spell, but not while you are attuned to the armor."
          ]
        }
      ],
      variants: [
        {
          base: {
            name: "Leather Corslet",
            source: "TLotRR",
            page: 72,
            type: "LA",
            rarity: "none",
            weight: 10,
            value: 450,
            currencyConversion: "M-E",
            ac: 12,
            dexterityMax: 3,
            armor: true,
            entries: [
              "A close-fitting shirt of hardened leather with long sleeves."
            ]
          },
          specificVariant: {
            name: "Yellow Harbinger's Leather Corslet",
            source: "GriffonsSaddlebag2",
            type: "LA",
            rarity: "very rare",
            weight: 10,
            currencyConversion: "M-E",
            ac: 12,
            dexterityMax: 3,
            armor: true,
            entries: [
              "A close-fitting shirt of hardened leather with long sleeves."
            ],
            page: 194,
            tier: "major",
            reqAttune: "by a creature with a Dexterity score of 17 or higher",
            reqAttuneTags: [
              {
                dex: 17
              }
            ],
            recharge: "dawn",
            rechargeAmount: 7,
            charges: 7,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Yellow Harbinger's Path",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Leather Shirt",
            source: "TLotRR",
            page: 72,
            type: "LA",
            rarity: "none",
            weight: 8,
            value: 100,
            currencyConversion: "M-E",
            ac: 11,
            dexterityMax: 4,
            armor: true,
            entries: [
              "A lightweight garment of hardened leather, providing some protection to its wearer while allowing for great freedom of movement."
            ]
          },
          specificVariant: {
            name: "Yellow Harbinger's Leather Shirt",
            source: "GriffonsSaddlebag2",
            type: "LA",
            rarity: "very rare",
            weight: 8,
            currencyConversion: "M-E",
            ac: 11,
            dexterityMax: 4,
            armor: true,
            entries: [
              "A lightweight garment of hardened leather, providing some protection to its wearer while allowing for great freedom of movement."
            ],
            page: 194,
            tier: "major",
            reqAttune: "by a creature with a Dexterity score of 17 or higher",
            reqAttuneTags: [
              {
                dex: 17
              }
            ],
            recharge: "dawn",
            rechargeAmount: 7,
            charges: 7,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Yellow Harbinger's Path",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Scale Armour",
            source: "TLotRR",
            page: 72,
            type: "MA",
            rarity: "none",
            weight: 40,
            value: 500,
            currencyConversion: "M-E",
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "This armour consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
            ]
          },
          specificVariant: {
            name: "Yellow Harbinger's Scale Armour",
            source: "GriffonsSaddlebag2",
            type: "MA",
            rarity: "very rare",
            weight: 40,
            currencyConversion: "M-E",
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "This armour consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
            ],
            page: 194,
            tier: "major",
            reqAttune: "by a creature with a Dexterity score of 17 or higher",
            reqAttuneTags: [
              {
                dex: 17
              }
            ],
            recharge: "dawn",
            rechargeAmount: 7,
            charges: 7,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Yellow Harbinger's Path",
              source: "GriffonsSaddlebag2"
            }
          }
        },
        {
          base: {
            name: "Spiked Armor",
            source: "SCAG",
            page: 121,
            type: "MA",
            rarity: "unknown",
            weight: 45,
            value: 7500,
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "Spiked armor is a rare type of medium armor made by dwarves. It consists of a leather coat and leggings covered with spikes that are usually made of metal."
            ]
          },
          specificVariant: {
            name: "Yellow Harbinger's Spiked Armor",
            source: "GriffonsSaddlebag2",
            type: "MA",
            rarity: "very rare",
            weight: 45,
            ac: 14,
            armor: true,
            stealth: true,
            entries: [
              "Spiked armor is a rare type of medium armor made by dwarves. It consists of a leather coat and leggings covered with spikes that are usually made of metal."
            ],
            page: 194,
            tier: "major",
            reqAttune: "by a creature with a Dexterity score of 17 or higher",
            reqAttuneTags: [
              {
                dex: 17
              }
            ],
            recharge: "dawn",
            rechargeAmount: 7,
            charges: 7,
            lootTables: [
              "Magic Item Table H2|GriffonsSaddlebag2"
            ],
            fluff: {
              images: [
                {
                  type: "image",
                  href: {
                    type: "external",
                    url: "https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Yellow-Harbingers-Path.webp"
                  }
                }
              ]
            },
            genericVariant: {
              name: "Yellow Harbinger's Path",
              source: "GriffonsSaddlebag2"
            }
          }
        }
      ]
    }
  ] as any as Item[])
}
