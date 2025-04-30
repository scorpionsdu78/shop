import type {Item} from '../../models/item.ts'

export default (): Promise<Item[]> =>{
  return Promise.resolve([
    {
      name: "Abacus",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 2,
      value: 200
    },
    {
      name: "Acid",
      source: "XPHB",
      page: 222,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        "When you take the {@action Attack|XPHB} action, you can replace one of your attacks with throwing a vial of Acid. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw ({@dc 8} plus your Dexterity modifier and {@variantrule Proficiency|XPHB|Proficiency Bonus}) or take {@damage 2d6} Acid damage."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Acid (vial)",
      source: "PHB",
      page: 148,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Acid|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes {@damage 2d6} acid damage."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Adamantine Bar",
      source: "WDH",
      page: 90,
      type: "TG",
      rarity: "none",
      weight: 10,
      value: 100000
    },
    {
      name: "Aerenal Trinket",
      source: "ERLW",
      page: 134,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from Aerenal",
          colLabels: [
            "d8",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A bronzewood ring inscribed with the Elvish word for \"hope\""
            ],
            [
              "2",
              "A dried flower; if it's placed in water, it blooms"
            ],
            [
              "3",
              "An ebony locket; when it's opened, an elven voice whispers \"Always\""
            ],
            [
              "4",
              "A tiny skull carved from dark wood"
            ],
            [
              "5",
              "A finger bone inscribed with an unknown sigil"
            ],
            [
              "6",
              "An ivory flute which produces no sound"
            ],
            [
              "7",
              "A small journal made from preserved leaves"
            ],
            [
              "8",
              "A book of poetry written by undead elves"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Airship",
      source: "DMG",
      page: 119,
      reprintedAs: [
        "Airship|XPHB"
      ],
      type: "AIR|DMG",
      rarity: "none",
      value: 2000000,
      crew: 10,
      vehAc: 13,
      vehHp: 300,
      vehSpeed: 8,
      capPassenger: 20,
      capCargo: 1
    },
    {
      name: "Airship",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "AIR|XPHB",
      rarity: "none",
      value: 4000000,
      crew: 10,
      vehAc: 13,
      vehHp: 300,
      vehSpeed: 8,
      capPassenger: 20,
      capCargo: 1
    },
    {
      name: "Alchemist's Fire",
      source: "XPHB",
      page: 222,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 5000,
      entries: [
        "When you take the {@action Attack|XPHB} action, you can replace one of your attacks with throwing a flask of Alchemist's Fire. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw ({@dc 8} plus your Dexterity modifier and {@variantrule Proficiency|XPHB|Proficiency Bonus}) or take {@damage 1d4} Fire damage and start {@hazard burning|XPHB}."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Alchemist's Fire (flask)",
      source: "PHB",
      page: 148,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Alchemist's Fire|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 5000,
      entries: [
        "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes {@damage 1d4} fire damage at the start of each of its turns. A creature can end this damage by using its action to make a {@dc 10} Dexterity check to extinguish the flames."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Alchemist's Supplies",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 79
        }
      ],
      reprintedAs: [
        "Alchemist's Supplies|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 8,
      value: 5000,
      additionalEntries: [
        "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "Proficiency with alchemist's supplies allows you to unlock more information on {@skill Arcana} checks involving potions and similar materials."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you inspect an area for clues, proficiency with alchemist's supplies grants additional insight into any chemicals or other substances that might have been used in the area."
          ]
        },
        {
          type: "entries",
          name: "Alchemical Crafting",
          entries: [
            "You can use this tool proficiency to create alchemical items. A character can spend money to collect raw materials, which weigh 1 pound for every 50 gp spent. The DM can allow a character to make a check using the indicated skill with advantage. As part of a long rest, you can use alchemist's supplies to make one dose of {@item acid (vial)|phb|acid}, {@item alchemist's fire (flask)|phb|alchemist's fire}, {@item antitoxin (vial)|phb|antitoxin}, {@item oil (flask)|phb|oil}, {@item perfume (vial)|phb|perfume}, or {@item soap|phb}. Subtract half the value of the created item from the total gp worth of raw materials you are carrying."
          ]
        },
        {
          type: "table",
          caption: "Alchemist's Supplies",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Create a puff of thick smoke",
              "10"
            ],
            [
              "Identify a poison",
              "10"
            ],
            [
              "Identify a substance",
              "15"
            ],
            [
              "Start a fire",
              "15"
            ],
            [
              "Neutralize acid",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Alchemist's Supplies",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 8,
      value: 5000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Identify a substance ({@dc 15}), or start a fire ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Acid|XPHB}, {@item Alchemist's Fire|XPHB}, {@item Component Pouch|XPHB}, {@item Oil|XPHB}, {@item Paper|XPHB}, {@item Perfume|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Ale (gallon)",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      type: "FD",
      rarity: "none",
      value: 20,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Ale (mug)",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ale (mug)|XPHB"
      ],
      type: "FD",
      rarity: "none",
      value: 4,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Ale (mug)",
      source: "XPHB",
      page: 231,
      freeRules2024: true,
      type: "FD|XPHB",
      rarity: "none",
      value: 4,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Alexandrite",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Alexandrite|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A transparent dark green gemstone."
      ]
    },
    {
      name: "Alexandrite",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A dark green gemstone."
      ]
    },
    {
      name: "Amber",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Amber|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent watery gold to rich gold gemstone."
      ]
    },
    {
      name: "Amber",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A watery gold to rich gold gemstone."
      ]
    },
    {
      name: "Amethyst",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Amethyst|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent deep purple gemstone."
      ]
    },
    {
      name: "Amethyst",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A deep purple gemstone."
      ]
    },
    {
      name: "Amulet",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Amulet|XPHB"
      ],
      type: "SCF",
      scfType: "holy",
      rarity: "none",
      weight: 1,
      value: 500
    },
    {
      name: "Amulet",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "SCF|XPHB",
      scfType: "holy",
      rarity: "none",
      weight: 1,
      value: 500,
      entries: [
        "For an Amulet to be an effective Holy Symbol, it must be worn or held."
      ]
    },
    {
      name: "Amulet of dinosaur feathers (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Antigravity Belt",
      source: "QftIS",
      page: 192,
      type: "G",
      rarity: "none",
      charges: 10,
      entries: [
        "Metal tubes ring the lower edge of this wide belt. It is powered by an {@item energy cell} stored in a metal case near the buckle. Placing a full {@item energy cell} in the belt gives the belt 10 charges.",
        {
          name: "Activating the Belt",
          type: "entries",
          entries: [
            "As a bonus action, you can expend any number of the belt's charges to activate it; the belt remains active for 1 minute per charge expended. You can use a bonus action to deactivate the belt early, but doing so doesn't recover any expended charges.",
            "When you activate the belt, and as a bonus action while it remains active, you can rise or descend vertically up to 20 feet. You remain floating in place while the property is active, and you can move yourself horizontally by being pushed or towed or by scooting yourself along a surface, such as a wall or ceiling, at half your walking speed. If you are still levitating when the belt deactivates, you fall."
          ]
        },
        {
          name: "Replacing the Energy Cell",
          type: "entries",
          entries: [
            "While the belt has charges remaining, its {@item energy cell} can't be removed. Once the belt has 0 charges, you can replace the {@item energy cell} with a new cell by using an action or a bonus action."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Antitoxin",
      source: "XPHB",
      page: 222,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 5000,
      entries: [
        "As a {@variantrule Bonus Action|XPHB}, you can drink a vial of Antitoxin to gain {@variantrule Advantage|XPHB} on saving throws to avoid or end the {@condition Poisoned|XPHB} condition for 1 hour."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Antitoxin (vial)",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Antitoxin|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 5000,
      entries: [
        "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Aquamarine",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Aquamarine|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A transparent pale blue-green gemstone."
      ]
    },
    {
      name: "Aquamarine",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A pale blue green gemstone."
      ]
    },
    {
      name: "Argonnessen Trinket",
      source: "ERLW",
      page: 134,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from Argonnessen",
          colLabels: [
            "d10",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A pierced dragon scale on a cord"
            ],
            [
              "2",
              "A statuette of a dragon carved from black bone"
            ],
            [
              "3",
              "A dragon's tooth, engraved with an unknown sigil"
            ],
            [
              "4",
              "A child's doll of a dragon, woven from leather cords"
            ],
            [
              "5",
              "A dagger carved from a dragon's talon"
            ],
            [
              "6",
              "A brass disk bearing the silhouette of a black dragon"
            ],
            [
              "7",
              "A small egg-shaped piece of polished bone"
            ],
            [
              "8",
              "A bone fragment with brass inlaid runes"
            ],
            [
              "9",
              "A leather pouch filled with tiny draconic teeth"
            ],
            [
              "10",
              "A single large seed that's warm to the touch"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Assassin's Blood",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Assassin's Blood|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 15000,
      poison: true,
      entries: [
        "A creature subjected to this poison must make a {@dc 10} Constitution saving throw. On a failed save, it takes 6 ({@damage 1d12}) poison damage and is {@condition poisoned} for 24 hours. On a successful save, the creature takes half damage and isn't {@condition poisoned}."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Assassin's Blood",
      source: "XDMG",
      page: 90,
      type: "G|XPHB",
      rarity: "none",
      value: 15000,
      poison: true,
      entries: [
        "A creature subjected to Assassin's Blood makes a {@dc 10} Constitution saving throw. On a failed save, the creature takes 6 ({@damage 1d12}) Poison damage and has the {@condition Poisoned|XPHB} condition for 24 hours. On a successful save, the creature takes half as much damage only."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Axe Beak",
      source: "IDRotF",
      page: 20,
      type: "MNT",
      rarity: "none",
      value: 5000,
      entries: [
        "An {@creature axe beak}'s splayed toes allow it to run across snow, and it can carry as much weight as a mule. A domesticated axe beak can be purchased in Ten-Towns for 50 gp."
      ],
      hasFluffImages: true
    },
    {
      name: "Azurite",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Azurite|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque mottled deep blue gemstone."
      ]
    },
    {
      name: "Azurite",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A mottled deep blue gemstone."
      ]
    },
    {
      name: "Backpack",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Backpack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 200,
      entries: [
        "A backpack can hold one cubic foot or 30 pounds of gear. You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack."
      ],
      containerCapacity: {
        weight: [
          30
        ]
      }
    },
    {
      name: "Backpack",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 200,
      entries: [
        "A Backpack holds up to 30 pounds within 1 cubic foot. It can also serve as a saddlebag."
      ],
      containerCapacity: {
        weight: [
          30
        ]
      }
    },
    {
      name: "Ball Bearing",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 0.002,
      value: 0.1,
      entries: [
        "Most commonly found inside a {@item Ball Bearings (Bag of 1,000)|phb|bag of ball bearings}."
      ]
    },
    {
      name: "Ball Bearings",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 100,
      entries: [
        "As a {@action Utilize|XPHB} action, you can spill Ball Bearings from their pouch. They spread to cover a level, 10-foot-square area within 10 feet of yourself. A creature that enters this area for the first time on a turn must succeed on a {@dc 10} Dexterity saving throw or have the {@condition Prone|XPHB} condition. It takes 10 minutes to recover the Ball Bearings."
      ]
    },
    {
      name: "Ball Bearings (bag of 1,000)",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ball Bearings|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 100,
      entries: [
        "As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a {@dc 10} Dexterity saving throw or fall {@condition prone}. A creature moving through the area at half speed doesn't need to make the saving throw."
      ],
      packContents: [
        {
          item: "ball bearing|phb",
          quantity: 1000
        }
      ],
      atomicPackContents: true
    },
    {
      name: "Banded Agate",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Banded Agate|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A translucent striped brown, blue, white, or red gemstone."
      ]
    },
    {
      name: "Banded Agate",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A striped brown, blue, white, or red gemstone."
      ]
    },
    {
      name: "Barrel",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Barrel|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 70,
      value: 200,
      entries: [
        "A barrel can hold 40 gallons of liquid or 4 cubic feet of solids."
      ]
    },
    {
      name: "Barrel",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 70,
      value: 200,
      entries: [
        "A Barrel holds up to 40 gallons of liquid or up to 4 cubic feet of dry goods."
      ],
      containerCapacity: {
        volume: [
          4
        ]
      }
    },
    {
      name: "Barrier Peaks Trinket",
      source: "LLK",
      page: 7,
      type: "G",
      rarity: "none",
      entries: [
        "At any point while the characters are searching through unusual equipment or detritus in the Monastery of the Distressed Body or the city of Daoine Gloine, roll on the following table to determine what they find. Each character finds one Barrier Peaks trinket over the course of the adventure.",
        {
          type: "table",
          caption: "Barrier Peaks Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "text-center col-2",
            "col-10"
          ],
          rows: [
            [
              "01–02",
              "A handheld device containing a glowing green gem that darkens when no oxygen is present"
            ],
            [
              "03–04",
              "A foot-long, egg-shaped object made from stitched leather"
            ],
            [
              "05–06",
              "A black metal cylinder that dictates the history of an unknown plant or animal species when held"
            ],
            [
              "07–08",
              "A cylindrical jar containing a pickled crustacean of unknown origin"
            ],
            [
              "09–10",
              "A small thumb-button storage cylinder that releases a useless iron key when pressed"
            ],
            [
              "11–12",
              "An unusual heraldic cloak pin that emits a short musical fanfare when tapped"
            ],
            [
              "13–14",
              "A handheld tube that sucks in dust when squeezed and captures it in a detachable compartment"
            ],
            [
              "15–16",
              "A scintillating disk of unknown material"
            ],
            [
              "17–18",
              "A dial that can be twisted to slowly click back to its origin, whereupon it emits a loud ringing noise"
            ],
            [
              "19–20",
              "A hovering, apple-sized orb of metal that follows you around"
            ],
            [
              "21–22",
              "The {@condition petrified} cocoon of an unknown insect"
            ],
            [
              "23–24",
              "A bronze gauntlet set with many slots, and which violently expels any object pressed into those slots"
            ],
            [
              "25–26",
              "A box that plays an illusory message in an unknown language when opened"
            ],
            [
              "27–28",
              "A rod that causes you to forget the last five minutes when you press a button near its tip"
            ],
            [
              "29–30",
              "A palm-sized cylinder that emits a harmless ray of glowing blue light when squeezed"
            ],
            [
              "31–32",
              "A bead that suppresses your hearing when secreted inside either ear, causing you to be {@condition deafened}"
            ],
            [
              "33–34",
              "An amulet that displays your current health as a green bar above your head, with the bar retracting as your hit point total decreases"
            ],
            [
              "35–36",
              "A casket containing one hundred tasteless blue pills that produce no discernible effect when swallowed"
            ],
            [
              "37–38",
              "A metal mechanical puzzle with no apparent solution"
            ],
            [
              "39–40",
              "A metal spinning top that never tips over when spun"
            ],
            [
              "41–42",
              "Two strips of cloth-like material, each coated with a soft, hair-like fuzz on one side"
            ],
            [
              "43–44",
              "A simple wire pyramid that preserves any foodstuffs it is placed over"
            ],
            [
              "45–46",
              "A star chart labeled in an unknown script"
            ],
            [
              "47–48",
              "A rectangle of black glass that displays indecipherable arcane runes when you swipe your finger across it"
            ],
            [
              "49–50",
              "A schematic that shows the inner workings of an impossibly complex device"
            ],
            [
              "51–52",
              "An odd pair of comfortable shoes made from supple, multicolored material"
            ],
            [
              "53–54",
              "A mirror that makes you appear more beautiful when you tap your reflection"
            ],
            [
              "55–56",
              "A mechanical metal puppy that playfully follows you around when activated"
            ],
            [
              "57–58",
              "A talking bracelet that speaks only to correct your grammar"
            ],
            [
              "59–60",
              "A bar of soap that can remove any stain"
            ],
            [
              "61–62",
              "A journal in Common, written by someone in a world similar to but not quite the same as your own"
            ],
            [
              "63–64",
              "A tub containing one serving of disgusting but nutritious goop that refills itself slowly over the course of one week"
            ],
            [
              "65–66",
              "An instruction manual for activating a mysterious, world-destroying device"
            ],
            [
              "67–68",
              "A small supple disk that displays weird moving symbols when placed over either eye"
            ],
            [
              "69–70",
              "A tiny desk set with large, colorful buttons, each of which plays a discordant musical fanfare when pressed"
            ],
            [
              "71–72",
              "A pair of tinted spectacles that reduce the glare of the sun when worn"
            ],
            [
              "73–74",
              "An inflatable bedroll made from an unknown material, and which slowly deflates when used"
            ],
            [
              "75–76",
              "A rod tipped with a blunt metal pincer whose grip can be adjusted by turning a screw"
            ],
            [
              "77–78",
              "A battered helmet with a transparent orange visor that flips into place when donned"
            ],
            [
              "79–80",
              "An animated map of a mysterious city that appears to be tracking the movements of five creatures"
            ],
            [
              "81–82",
              "A cylinder of mist that holds your hair perfectly in shape when sprayed onto your head"
            ],
            [
              "83–84",
              "A talking wand that tells you the name of any plant you point it at"
            ],
            [
              "85–86",
              "A metal bracelet that displays the number of steps you've taken since your last long rest"
            ],
            [
              "87–88",
              "A tiny handheld device that projects a glowing dot onto whatever you point it at"
            ],
            [
              "89–90",
              "A rectangular piece of glass that displays a twelve-digit countdown on its surface"
            ],
            [
              "91–92",
              "A wall chart of mysterious formulae arranged into a color-coded grid"
            ],
            [
              "93–94",
              "A handheld device that solves any math problem you input using its buttons"
            ],
            [
              "95–96",
              "A ball of speckled brown fur that appears to be alive"
            ],
            [
              "97–98",
              "A complicated crystal board game that you don't know how to play"
            ],
            [
              "99–00",
              "A large glass rectangle that displays a storm of black and white patterns when you press a button on its underside"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Basic Fishing Equipment",
      source: "AAG",
      page: 21,
      type: "G",
      rarity: "none",
      value: 10,
      entries: [
        "Basic Fishing Equipment includes a pole, a line, a hook, and either a lure or some bait.",
        "Fishing is a popular pastime in Wildspace and the Astral Sea, though this activity isn't possible aboard a ship that is moving faster than its flying speed. At the end of each hour spent fishing, a character can make a {@dc 15} Wisdom ({@skill Survival}) check. A failed check indicates no fish is caught during that hour. On a successful check, roll a {@dice d10} and consult the Fishing table to determine the catch.",
        {
          type: "table",
          caption: "",
          colLabels: [
            "d10",
            "Catch"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1–2",
              "Tiny, inedible fish (a creature that consumes it is poisoned for 1 hour)"
            ],
            [
              "3–5",
              "Tiny, edible fish (feeds one person)"
            ],
            [
              "6–8",
              "Small, edible fish (feeds up to four people)"
            ],
            [
              "9",
              "Hostile {@creature space eel|BAM} (see {@book Boo's Astral Menagerie|BAM}; feeds up to twelve people)"
            ],
            [
              "10",
              "Hostile {@creature gray scavver|BAM} (see {@book Boo's Astral Menagerie|BAM}; feeds up to twenty people), some other creature of the DM's choosing, or an Tiny object of the DM's choosing"
            ]
          ]
        }
      ]
    },
    {
      name: "Basic Poison",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 10000,
      poison: true,
      entries: [
        "As a {@variantrule Bonus Action|XPHB}, you can use a vial of Basic Poison to coat one weapon or up to three pieces of ammunition. A creature that takes Piercing or Slashing damage from the poisoned weapon or ammunition takes an extra {@damage 1d4} Poison damage. Once applied, the poison retains potency for 1 minute or until its damage is dealt, whichever comes first."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Basic Poison (vial)",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Basic Poison|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 10000,
      poison: true,
      entries: [
        "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a {@dc 10} Constitution saving throw or take {@damage 1d4} poison damage. Once applied, the poison retains potency for 1 minute before drying."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Basket",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Basket|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 40,
      entries: [
        "A basket holds 2 cubic feet or 40 pounds of gear."
      ],
      containerCapacity: {
        weight: [
          40
        ]
      }
    },
    {
      name: "Basket",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 40,
      entries: [
        "A Basket holds up to 40 pounds within 2 cubic feet."
      ],
      containerCapacity: {
        weight: [
          40
        ]
      }
    },
    {
      name: "Bedroll",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bedroll|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 7,
      value: 100
    },
    {
      name: "Bedroll",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 7,
      value: 100,
      entries: [
        "A Bedroll sleeps one Small or Medium creature. While in a Bedroll, you automatically succeed on saving throws against {@hazard extreme cold|XDMG} (see the {@book Dungeon Master's Guide|XDMG})."
      ]
    },
    {
      name: "Bejeweled gold bracelet",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Bejeweled ivory drinking horn with gold filigree",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Bejeweled ivory drinking horn with gold filigree|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Bejeweled ivory drinking horn with gold filigree",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Bejeweled ivory drinking horn with gold inlay (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Bell",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bell|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 100
    },
    {
      name: "Bell",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 100,
      entries: [
        "When rung as a {@action Utilize|XPHB} action, a Bell produces a sound that can be heard up to 60 feet away."
      ]
    },
    {
      name: "Bit and bridle",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      type: "TAH",
      rarity: "none",
      weight: 1,
      value: 200
    },
    {
      name: "Biza's Breath",
      source: "JttRC",
      page: 70,
      type: "G",
      rarity: "none",
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 16} Constitution saving throw or become {@condition poisoned} for 1 minute. The {@condition poisoned} creature must use its action to make a melee attack against a randomly determined creature within its reach. If there is no other creature within its reach, the {@condition poisoned} creature does nothing on its turn. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Black Ghost Orchid Seed",
      source: "JttRC",
      page: 212,
      type: "G",
      rarity: "none",
      entries: [
        "Every few years, a ghost orchid colony grows a black pod as thick as a human fist that holds three soft, black seeds. A creature that consumes one of these black seeds is affected by the spell {@spell feign death}. If the creature is unaware of the pod's effects or does not wish to be affected, it can resist the effect by succeeding on a {@dc 16} Constitution saving throw. Otherwise, it is considered to be a willing recipient of the spell."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Black Opal",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Black Opal|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A translucent dark green with black mottling and golden flecks gemstone."
      ]
    },
    {
      name: "Black Opal",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A dark green with black mottling and golden flecks gemstone."
      ]
    },
    {
      name: "Black Pearl",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Black Pearl|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "An opaque pure black gemstone."
      ]
    },
    {
      name: "Black Pearl",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A pure black gemstone."
      ]
    },
    {
      name: "Black Sap",
      source: "EGW",
      page: 152,
      type: "G",
      rarity: "none",
      value: 30000,
      entries: [
        "This tarry substance harvested from the dark boughs of the death's head willow is a powerful intoxicant. It can be smoked as a concentrate or injected directly into the bloodstream. A creature subjected to a dose of black sap cannot be {@condition charmed} or {@condition frightened} for {@dice 1d6} hours.",
        "For each dose of black sap consumed, a creature must succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for {@dice 2d4} hours—an effect that is cumulative with multiple doses."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Black Sapphire",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Black Sapphire|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A translucent lustrous black with glowing highlights gemstone."
      ]
    },
    {
      name: "Black Sapphire",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A lustrous black with glowing highlights gemstone."
      ]
    },
    {
      name: "Black velvet mask stitched with silver thread",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Black velvet mask stitched with silver thread|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Black velvet mask stitched with silver thread",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Blanket",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Blanket|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 3,
      value: 50
    },
    {
      name: "Blanket",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 3,
      value: 50,
      entries: [
        "While wrapped in a blanket, you have {@variantrule Advantage|XPHB} on saving throws against {@hazard extreme cold|XDMG} (see the {@book Dungeon Master's Guide|XDMG})."
      ]
    },
    {
      name: "Blasting Powder",
      source: "EGW",
      page: 225,
      type: "G",
      rarity: "none",
      entries: [
        "This volatile alchemical powder comes in a small pouch. When ignited by an open flame or a fuse, the powder explodes. Each creature within 5 feet of the exploding pouch must make a {@dc 13} Dexterity saving throw, taking {@damage 3d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
        "A character can bind multiple pouches of blasting powder together so they explode at the same time. Each additional pouch increases the damage by {@dice 1d6} (maximum of {@dice 10d6}) and the blast radius by 5 feet (maximum of 20 feet)."
      ]
    },
    {
      name: "Blight Ichor",
      source: "EGW",
      page: 152,
      type: "G",
      rarity: "none",
      value: 20000,
      entries: [
        "This bitter chartreuse concoction is distilled from a fungus native to the Blightshore badlands. The sickly green liqueur harbors potent psychedelic properties. Provided it is neither a construct nor undead, a creature subjected to a dose of blight ichor gains advantage on Intelligence and Wisdom checks, as well as vulnerability to psychic damage, for 1 hour. For each dose of blight ichor consumed, the creature must succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for {@dice 1d6} hours and suffer the effects of a {@spell confusion} spell for 1 minute. An undead creature subjected to a dose of blight ichor gains advantage on all Dexterity checks and is immune to the {@condition frightened} condition for 1 hour."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Block and Tackle",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Block and Tackle|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
      ]
    },
    {
      name: "Block and Tackle",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        "A {@item Block and Tackle|XPHB} allows you to hoist up to four times the weight you can normally lift."
      ]
    },
    {
      name: "Blood of the Lycanthrope",
      source: "IMR",
      page: 93,
      rarity: "none",
      poison: true,
      entries: [
        "This poison is created from blood harvested from a dead or {@condition incapacitated} lycanthrope in its animal or hybrid form. A creature subjected to this poison must succeed on a {@dc 12} Constitution saving throw or be cursed with lycanthropy (see the Monster Manual). The curse lasts until removed by the {@spell remove curse} spell or similar magic.",
        "The type of lycanthropy depends on the lycanthrope used to create the poison. To determine the type of lycanthropy randomly, roll a {@dice d6}:",
        {
          type: "table",
          colLabels: [
            "d6",
            "Lycanthropy"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1-3",
              "{@creature Wererat}"
            ],
            [
              "4-5",
              "{@creature Werewolf}"
            ],
            [
              "6",
              "{@creature Wereboar}"
            ]
          ]
        }
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Bloodstone",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Bloodstone|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque dark gray with red flecks gemstone."
      ]
    },
    {
      name: "Bloodstone",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A dark gray with red flecks gemstone."
      ]
    },
    {
      name: "Blue Quartz",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Blue Quartz|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A transparent pale blue gemstone."
      ]
    },
    {
      name: "Blue Quartz",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A pale blue gemstone."
      ]
    },
    {
      name: "Blue Sapphire",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Blue Sapphire|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A transparent blue-white to medium blue gemstone."
      ]
    },
    {
      name: "Blue Sapphire",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A medium blue gemstone."
      ]
    },
    {
      name: "Blue Spinel",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Blue Spinel|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A transparent deep blue gemstone."
      ]
    },
    {
      name: "Blue Spinel",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A deep blue gemstone."
      ]
    },
    {
      name: "Bomb",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Bomb|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 1,
      value: 15000,
      age: "renaissance",
      entries: [
        "As an action, a character can light this bomb and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a {@dc 12} Dexterity saving throw or take {@damage 3d6} fire damage."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Bomb",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 1,
      value: 10000,
      entries: [
        "As an action, you can light a Bomb and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius {@variantrule Sphere [Area of Effect]|XPHB|Sphere} centered on that point makes a {@dc 12} Dexterity saving throw, taking {@damage 3d6} Fire damage on a failed save or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Bombard",
      source: "AAG",
      page: 26,
      type: "SPC|AAG",
      rarity: "none",
      value: 5000000,
      crew: 12,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 20,
      vehSpeed: 4,
      capCargo: 150,
      entries: [
        "Bombards are built by giff. The major feature of each ship is an enormous cannon that fires massive cannon balls capable of blowing other ships to smithereens. (The cannon is included in the cost of the ship.) A bombard can carry up to fourteen giant cannon balls, each of which weighs 10 tons. These cannon balls make up most of the weight of the ship's cargo. A winch mounted on the aft deck is used to load the cannon balls on board.",
        "A bombard can float and sail on water, but it can't land safely on the ground (its keel would cause it to roll on its side)."
      ],
      seeAlsoVehicle: [
        "Bombard|AAG"
      ]
    },
    {
      name: "Book",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Book|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 2500,
      entries: [
        "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a {@item spellbook|phb}."
      ]
    },
    {
      name: "Book",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 2500,
      entries: [
        "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence ({@skill Arcana|XPHB}, {@skill History|XPHB}, {@skill Nature|XPHB}, or {@skill Religion|XPHB}) checks you make about that topic."
      ]
    },
    {
      name: "Bottle stopper cork embossed with gold leaf and set with amethysts",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Bottle stopper cork embossed with gold leaf and set with amethysts|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Bottle stopper cork embossed with gold leaf and set with amethysts",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Box of turquoise animal figurines",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Box of turquoise animal figurines|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Box of turquoise animal figurines",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Brass mug with jade inlay",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Brass mug with jade inlay|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Brass mug with jade inlay",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Bread (loaf)",
      source: "XPHB",
      page: 231,
      freeRules2024: true,
      type: "FD|XPHB",
      rarity: "none",
      value: 2,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Brewer's Supplies",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 79
        }
      ],
      reprintedAs: [
        "Brewer's Supplies|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 9,
      value: 2000,
      additionalEntries: [
        "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Proficiency with brewer's supplies gives you additional insight on Intelligence ({@skill History}) checks concerning events that involve alcohol as a significant element."
          ]
        },
        {
          type: "entries",
          name: "Medicine",
          entries: [
            "This tool proficiency grants additional insight when you treat anyone suffering from alcohol poisoning or when you can use alcohol to dull pain."
          ]
        },
        {
          type: "entries",
          name: "Persuasion",
          entries: [
            "A stiff drink can help soften the hardest heart. Your proficiency with brewer's supplies can help you ply someone with drink, giving them just enough alcohol to mellow their mood."
          ]
        },
        {
          type: "entries",
          name: "Potable Water",
          entries: [
            "Your knowledge of brewing enables you to purify water that would otherwise be undrinkable. As part of a long rest, you can purify up to 6 gallons of water, or 1 gallon as part of a short rest."
          ]
        },
        {
          type: "table",
          caption: "Brewer's Supplies",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Detect poison or impurities in a drink",
              "10"
            ],
            [
              "Identify alcohol",
              "15"
            ],
            [
              "Ignore effects of alcohol",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Brewer's Supplies",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 9,
      value: 2000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Detect poisoned drink ({@dc 15}), or identify alcohol ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Antitoxin|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Bronze crown",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Bronze crown|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Bronze crown",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Bronze spyglass (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Bucket",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bucket|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 5,
      entries: [
        "A bucket holds 3 gallons of liquid or ½ cubic foot of solids."
      ]
    },
    {
      name: "Bucket",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 5,
      entries: [
        "A Bucket holds up to half a cubic foot of contents."
      ],
      containerCapacity: {
        volume: [
          0.5
        ]
      }
    },
    {
      name: "Bullseye Lantern",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bullseye Lantern|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 1000,
      entries: [
        "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
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
      name: "Bullseye Lantern",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 1000,
      entries: [
        "A Bullseye Lantern burns Oil as fuel to cast {@variantrule Bright Light|XPHB} in a 60-foot Cone and {@variantrule Dim Light|XPHB} for an additional 60 feet."
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
      name: "Bundle of sheet music representing the lost dirges of a famous composer",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Burglar's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Burglar's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 44.5,
      value: 1600,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item Ball Bearings (Bag of 1,000)|phb|bag of 1,000 ball bearings}",
            "10 feet of string",
            "a {@item bell|phb}",
            "5 {@item candle|phb|candles}",
            "a {@item crowbar|phb}",
            "a {@item hammer|phb}",
            "10 {@item piton|phb|pitons}",
            "a {@item hooded lantern|phb}",
            "2 {@item Oil (flask)|phb|flasks of oil}",
            "5 days {@item Rations (1 day)|phb|rations}",
            "a {@item tinderbox|phb}",
            "a {@item waterskin|phb}",
            "{@item Hempen Rope (50 feet)|phb|50 feet of hempen rope}"
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "ball bearings (bag of 1,000)|phb",
        {
          special: "10 feet of string"
        },
        "bell|phb",
        {
          item: "candle|phb",
          quantity: 5
        },
        "crowbar|phb",
        "hammer|phb",
        {
          item: "piton|phb",
          quantity: 10
        },
        "hooded lantern|phb",
        {
          item: "oil (flask)|phb",
          quantity: 2
        },
        {
          item: "rations (1 day)|phb",
          quantity: 5
        },
        "tinderbox|phb",
        "waterskin|phb",
        "hempen rope (50 feet)|phb"
      ]
    },
    {
      name: "Burglar's Pack",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 47.5,
      value: 1600,
      entries: [
        "A Burglar's Pack contains the following items: {@item Backpack|XPHB}, {@item Ball Bearings|XPHB}, {@item Bell|XPHB}, 10 {@item Candle|XPHB|Candles}, {@item Crowbar|XPHB}, {@item Hooded Lantern|XPHB}, 7 flasks of {@item Oil|XPHB}, 5 days of {@item Rations|XPHB}, {@item Rope|XPHB}, {@item Tinderbox|XPHB}, and {@item Waterskin|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "ball bearings|xphb",
        "bell|xphb",
        {
          item: "candle|xphb",
          quantity: 10
        },
        "crowbar|xphb",
        "hooded lantern|xphb",
        {
          item: "oil|xphb",
          quantity: 7
        },
        {
          item: "rations|xphb",
          quantity: 5
        },
        "rope|xphb",
        "tinderbox|xphb",
        "waterskin|xphb"
      ]
    },
    {
      name: "Burnt Othur Fumes",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Burnt Othur Fumes|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 50000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 13} Constitution saving throw or take 10 ({@damage 3d6}) poison damage, and must repeat the saving throw at the start of each of its turns. On each successive failed save, the character takes 3 ({@damage 1d6}) poison damage. After three successful saves, the poison ends."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Burnt Othur Fumes",
      source: "XDMG",
      page: 90,
      type: "G|XPHB",
      rarity: "none",
      value: 50000,
      poison: true,
      entries: [
        "A creature subjected to Burnt Othur Fumes must succeed on a {@dc 13} Constitution saving throw or take 10 ({@damage 3d6}) Poison damage, and it must repeat the save at the start of each of its turns. On each successive failed save, the creature takes 3 ({@damage 1d6}) Poison damage. After three successful saves, the poison ends."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Calligrapher's Supplies",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 79
        }
      ],
      reprintedAs: [
        "Calligrapher's Supplies|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 1000,
      additionalEntries: [
        "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "Although calligraphy is of little help in deciphering the content of magical writings, proficiency with these supplies can aid in identifying who wrote a script of a magical nature."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "This tool proficiency can augment the benefit of successful checks made to analyze or investigate ancient writings, scrolls, or other texts, including runes etched in stone or messages in frescoes or other displays."
          ]
        },
        {
          type: "entries",
          name: "Decipher Treasure Map",
          entries: [
            "This tool proficiency grants you expertise in examining maps. You can make an Intelligence check to determine a map's age, whether a map includes any hidden messages, or similar facts."
          ]
        },
        {
          type: "table",
          caption: "Calligrapher's Supplies",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-6",
            "col-6"
          ],
          rows: [
            [
              "Identify writer of nonmagical script",
              "10"
            ],
            [
              "Determine writer's state of mind",
              "15"
            ],
            [
              "Spot forged text",
              "15"
            ],
            [
              "Forge a signature",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Calligrapher's Supplies",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 1000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Write text with impressive flourishes that guard against forgery ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Ink|XPHB}, {@item Spell Scroll|XDMG}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Caltrop",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 0.1,
      value: 5,
      entries: [
        "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a {@dc 15} Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw."
      ]
    },
    {
      name: "Caltrops",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 100,
      entries: [
        "As a {@action Utilize|XPHB} action, you can spread Caltrops from their bag to cover a 5-foot-square area within 5 feet of yourself. A creature that enters this area for the first time on a turn must succeed on a {@dc 15} Dexterity saving throw or take 1 Piercing damage and have its {@variantrule Speed|XPHB} reduced to 0 until the start of its next turn. It takes 10 minutes to recover the Caltrops."
      ]
    },
    {
      name: "Caltrops (bag of 20)",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Caltrops|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 100,
      entries: [
        "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a {@dc 15} Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw."
      ],
      packContents: [
        {
          item: "caltrop|phb",
          quantity: 20
        }
      ],
      atomicPackContents: true
    },
    {
      name: "Camel",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Camel|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 5000,
      carryingCapacity: 480,
      speed: 50
    },
    {
      name: "Camel",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 5000,
      carryingCapacity: 450,
      speed: 50
    },
    {
      name: "Candle",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Candle|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 1,
      entries: [
        "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
      ],
      light: [
        {
          bright: 5,
          dim: 10
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Candle",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 1,
      entries: [
        "For 1 hour, a lit Candle sheds {@variantrule Bright Light|XPHB} in a 5-foot radius and {@variantrule Dim Light|XPHB} for an additional 5 feet."
      ],
      light: [
        {
          bright: 5,
          dim: 10
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Canoe",
      source: "ToA",
      page: 31,
      type: "SHP",
      rarity: "none",
      weight: 100,
      value: 5000,
      crew: 1,
      vehAc: 11,
      vehHp: 50,
      vehSpeed: 2,
      capPassenger: 6,
      entries: [
        "A canoe can be purchased in Port Nyanzaru for 50 gp. It holds up to six Medium creatures and has a maximum speed of 2 mph. It is otherwise identical to a {@item rowboat}."
      ]
    },
    {
      name: "Canvas (1 sq. yd.)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Canvas (1 sq. yd.)|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 10
    },
    {
      name: "Canvas (1 sq. yd.)",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 10
    },
    {
      name: "Carnelian",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Carnelian|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque orange to red-brown gemstone."
      ]
    },
    {
      name: "Carnelian",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A orange to red brown gemstone."
      ]
    },
    {
      name: "Carpenter's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 80
        }
      ],
      reprintedAs: [
        "Carpenter's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 6,
      value: 800,
      additionalEntries: [
        "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "This tool proficiency aids you in identifying the use and the origin of wooden buildings and other large wooden objects."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "You gain additional insight when inspecting areas within wooden structures, because you know tricks of construction that can conceal areas from discovery."
          ]
        },
        {
          type: "entries",
          name: "Perception",
          entries: [
            "You can spot irregularities in wooden walls or floors, making it easier to find trap doors and secret passages."
          ]
        },
        {
          type: "entries",
          name: "Stealth",
          entries: [
            "You can quickly assess the weak spots in a wooden floor, making it easier to avoid the places that creak and groan when they're stepped on."
          ]
        },
        {
          type: "entries",
          name: "Fortify",
          entries: [
            "With 1 minute of work and raw materials, you can make a door or window harder to force open. Increase the DC needed to open it by 5."
          ]
        },
        {
          type: "entries",
          name: "Temporary Shelter",
          entries: [
            "As part of a long rest, you can construct a lean-to or a similar shelter to keep your group dry and in the shade for the duration of the rest. Because it was fashioned quickly from whatever wood was available, the shelter collapses {@dice 1d3} days after being assembled."
          ]
        },
        {
          type: "table",
          caption: "Carpenter's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Build a simple wooden structure",
              "10"
            ],
            [
              "Design a complex wooden structure",
              "15"
            ],
            [
              "Find a weak point in a wooden wall",
              "15"
            ],
            [
              "Pry apart a door",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Carpenter's Tools",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 6,
      value: 800,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Strength"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Seal or pry open a door or container ({@dc 20})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Club|XPHB}, {@item Greatclub|XPHB}, {@item Quarterstaff|XPHB}, {@item Barrel|XPHB}, {@item Chest|XPHB}, {@item Ladder|XPHB}, {@item Pole|XPHB}, {@item Portable Ram|XPHB}, {@item Torch|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Carriage",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Carriage|XPHB"
      ],
      type: "VEH",
      rarity: "none",
      weight: 600,
      value: 10000
    },
    {
      name: "Carriage",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "VEH|XPHB",
      rarity: "none",
      weight: 600,
      value: 10000
    },
    {
      name: "Carrion Crawler Mucus",
      source: "DMG",
      page: 258,
      srd: "Crawler Mucus (Contact)",
      reprintedAs: [
        "Carrion Crawler Mucus|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "This poison must be harvested from a dead or {@condition incapacitated} {@creature carrion crawler}. A creature subjected to this poison must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned} for 1 minute. The {@condition poisoned} creature is {@condition paralyzed}. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      ],
      poisonTypes: [
        "contact"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Carrion Crawler Mucus",
      source: "XDMG",
      page: 90,
      type: "G|XPHB",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "A creature subjected to Carrion Crawler Mucus must succeed on a {@dc 13} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 1 minute. The creature also has the {@condition Paralyzed|XPHB} condition while {@condition Poisoned|XPHB} in this way. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success."
      ],
      poisonTypes: [
        "contact"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Cart",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cart|XPHB"
      ],
      type: "VEH",
      rarity: "none",
      weight: 200,
      value: 1500
    },
    {
      name: "Cart",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "VEH|XPHB",
      rarity: "none",
      weight: 200,
      value: 1500
    },
    {
      name: "Cartographer's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 80
        }
      ],
      reprintedAs: [
        "Cartographer's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 6,
      value: 1500,
      additionalEntries: [
        "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History, Religion",
          entries: [
            "You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth."
          ]
        },
        {
          type: "entries",
          name: "Nature",
          entries: [
            "Your familiarity with physical geography makes it easier for you to answer questions or solve issues relating to the terrain around you."
          ]
        },
        {
          type: "entries",
          name: "Survival",
          entries: [
            "Your understanding of geography makes it easier to find paths to civilization, to predict areas where villages or towns might be found, and to avoid becoming lost. You have studied so many maps that common patterns, such as how trade routes evolve and where settlements arise in relation to geographic locations, are familiar to you."
          ]
        },
        {
          type: "entries",
          name: "Craft a Map",
          entries: [
            "While traveling, you can draw a map as you go in addition to engaging in other activity."
          ]
        },
        {
          type: "table",
          caption: "Cartographer's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Determine a map's age and origin",
              "10"
            ],
            [
              "Estimate direction and distance to a landmark",
              "15"
            ],
            [
              "Discern that a map is fake",
              "15"
            ],
            [
              "Fill in a missing part of a map",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Cartographer's Tools",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 6,
      value: 1500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Draft a map of a small area ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Map|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Carved bone statuette",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Carved bone statuette|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Carved bone statuette",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Carved harp of exotic wood with ivory inlay and zircon gems",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Carved wooden harp with ivory inlay and zircon gems|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Carved ivory statuette",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Carved ivory statuette|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Carved ivory statuette",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Carved jade statuette (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Carved wooden harp with ivory inlay and zircon gems",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Ceremonial electrum dagger with a black pearl in the pommel",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Detailed, life-sized dragonborn skull cast in electrum|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Ceremonial gold armor with black pearls",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Ceremonial silver dagger with gold pommel and black pearl (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Chain",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 10,
      value: 500,
      entries: [
        "As a {@action Utilize|XPHB} action, you can wrap a Chain around an unwilling creature within 5 feet of yourself that has the {@condition Grappled|XPHB}, {@condition Incapacitated|XPHB}, or {@condition Restrained|XPHB} condition if you succeed on a {@dc 13} Strength ({@skill Athletics|XPHB}) check. If the creature's legs are bound, the creature has the {@condition Restrained|XPHB} condition until it escapes. Escaping the Chain requires the creature to make a successful {@dc 18} Dexterity ({@skill Acrobatics|XPHB}) check as an action. Bursting the Chain requires a successful {@dc 20} Strength ({@skill Athletics|XPHB}) check as an action."
      ]
    },
    {
      name: "Chain (10 feet)",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Chain|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 10,
      value: 500,
      entries: [
        "A chain has 10 hit points. It can be burst with a successful {@dc 20} Strength check."
      ]
    },
    {
      name: "Chalcedony",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Chalcedony|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque white gemstone."
      ]
    },
    {
      name: "Chalcedony",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A white gemstone."
      ]
    },
    {
      name: "Chalk (1 piece)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      value: 1
    },
    {
      name: "Chariot",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "MOT",
          page: 196
        }
      ],
      reprintedAs: [
        "Chariot|XPHB"
      ],
      type: "VEH",
      rarity: "none",
      weight: 100,
      value: 25000,
      additionalEntries: [
        {
          type: "inset",
          name: "Chariots",
          source: "MOT",
          page: 196,
          entries: [
            "Chariots and the creatures pulling them work like controlled mounts, as described in the mounted combat rules in the {@book Player's Handbook|PHB|9|Mounted Combat}, but with the following differences:",
            {
              type: "list",
              items: [
                "Mounting or dismounting a chariot costs you 5 feet of movement, rather than a number of feet equal to half your speed.",
                "Being mounted on a chariot grants you {@quickref Cover||3||half cover}.",
                "A chariot's speed is equal to the speed of the slowest creature pulling it.",
                "If multiple creatures are pulling the chariot, they all act on the same initiative, and they must take the same action on their turn."
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Chariot",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "VEH|XPHB",
      rarity: "none",
      weight: 100,
      value: 25000
    },
    {
      name: "Cheese (wedge)",
      source: "XPHB",
      page: 231,
      freeRules2024: true,
      type: "FD|XPHB",
      rarity: "none",
      value: 10,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Chest",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Chest|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 25,
      value: 500,
      entries: [
        "A chest holds 12 cubic feet or 300 pounds of gear."
      ],
      containerCapacity: {
        weight: [
          300
        ]
      }
    },
    {
      name: "Chest",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 25,
      value: 500,
      entries: [
        "A Chest holds up to 12 cubic feet of contents."
      ],
      containerCapacity: {
        volume: [
          12
        ]
      }
    },
    {
      name: "Chicken",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Chicken|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 2
    },
    {
      name: "Chicken",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 2
    },
    {
      name: "Chrysoberyl",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Chrysoberyl|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent yellow-green to pale green gemstone."
      ]
    },
    {
      name: "Chrysoberyl",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A yellow green to pale green gemstone."
      ]
    },
    {
      name: "Chrysoprase",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Chrysoprase|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A translucent green gemstone."
      ]
    },
    {
      name: "Chrysoprase",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A green gemstone."
      ]
    },
    {
      name: "Chunk of Meat",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      type: "FD",
      rarity: "none",
      value: 30,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Cinnamon",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cinnamon|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 200
    },
    {
      name: "Cinnamon",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 200
    },
    {
      name: "Citrine",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Citrine|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A transparent pale yellow-brown gemstone."
      ]
    },
    {
      name: "Citrine",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A pale yellow brown gemstone."
      ]
    },
    {
      name: "Climber's Kit",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Climber's Kit|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 12,
      value: 2500,
      entries: [
        "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
      ]
    },
    {
      name: "Climber's Kit",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 12,
      value: 2500,
      entries: [
        "A Climber's Kit includes boot tips, gloves, pitons, and a harness. As a {@action Utilize|XPHB} action, you can use the Climber's Kit to anchor yourself; when you do, you can't fall more than 25 feet from the anchor point, and you can't move more than 25 feet from there without undoing the anchor as a {@variantrule Bonus Action|XPHB}."
      ]
    },
    {
      name: "Cloth-of-gold vestments",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Cloth-of-gold vestments|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Cloth-of-gold vestments",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Cloth-of-gold vestments (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Clothing, cold weather",
      source: "IDRotF",
      page: 20,
      type: "G",
      rarity: "none",
      weight: 5,
      value: 1000,
      entries: [
        "This outfit consists of a heavy fur coat or cloak over layers of wool clothing, as well as a fur-lined hat or hood, goggles, and fur-lined leather boots and gloves.",
        "As long as cold weather clothing remains dry, its wearer automatically succeeds on saving throws against the effects of {@hazard extreme cold}."
      ]
    },
    {
      name: "Cloves",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cloves|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 300
    },
    {
      name: "Cloves",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 300
    },
    {
      name: "Cobbler's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 80
        }
      ],
      reprintedAs: [
        "Cobbler's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 500,
      additionalEntries: [
        "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History",
          entries: [
            "Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "Footwear holds a surprising number of secrets. You can learn where someone has recently visited by examining the wear and the dirt that has accumulated on their shoes. Your experience in repairing shoes makes it easier for you to identify where damage might come from."
          ]
        },
        {
          type: "entries",
          name: "Maintain Shoes",
          entries: [
            "As part of a long rest, you can repair your companions' shoes. For the next 24 hours, up to six creatures of your choice who wear shoes you worked on can travel up to 10 hours a day without making saving throws to avoid {@condition exhaustion}."
          ]
        },
        {
          type: "entries",
          name: "Craft Hidden Compartment",
          entries: [
            "With 8 hours of work, you can add a hidden compartment to a pair of shoes. The compartment can hold an object up to 3 inches long and 1 inch wide and deep. You make an Intelligence check using your tool proficiency to determine the Intelligence ({@skill Investigation}) check DC needed to find the compartment."
          ]
        },
        {
          type: "table",
          caption: "Cobbler's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Determine a shoe's age and origin",
              "10"
            ],
            [
              "Find a hidden compartment in a boot heel",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Cobbler's Tools",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Modify footwear to give {@variantrule Advantage|XPHB} on the wearer's next Dexterity ({@skill Acrobatics|XPHB}) check ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Climber's Kit|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Common Clothes",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 3,
      value: 50
    },
    {
      name: "Common Wine (bottle)",
      source: "XPHB",
      page: 231,
      freeRules2024: true,
      type: "FD|XPHB",
      rarity: "none",
      value: 20,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Common Wine (pitcher)",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Common Wine (bottle)|XPHB"
      ],
      type: "FD",
      rarity: "none",
      value: 20,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Component Pouch",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Component Pouch|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 2500,
      entries: [
        "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
      ]
    },
    {
      name: "Component Pouch",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 2500,
      entries: [
        "A Component Pouch is watertight and filled with compartments that hold all the free Material components of your spells."
      ]
    },
    {
      name: "Concussion Grenade",
      source: "QftIS",
      page: 192,
      type: "EXP|DMG",
      rarity: "none",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|DMG}",
        "This grenade explodes in a concussive blast that fills a 20-foot-radius sphere. Each creature in that area must make a {@dc 15} Dexterity saving throw, taking ({@damage 6d6}) force damage on a failed save or half as much damage on a successful one."
      ],
      hasFluffImages: true
    },
    {
      name: "Cook's Utensils",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 80
        }
      ],
      reprintedAs: [
        "Cook's Utensils|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 8,
      value: 100,
      additionalEntries: [
        "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Your knowledge of cooking techniques allows you to assess the social patterns involved in a culture's eating habits."
          ]
        },
        {
          type: "entries",
          name: "Medicine",
          entries: [
            "When administering treatment, you can transform medicine that is bitter or sour into a pleasing concoction."
          ]
        },
        {
          type: "entries",
          name: "Survival",
          entries: [
            "When foraging for food, you can make do with ingredients you scavenge that others would be unable to transform into nourishing meals."
          ]
        },
        {
          type: "entries",
          name: "Prepare Meals",
          entries: [
            "As part of a short rest, you can prepare a tasty meal that helps your companions regain their strength. You and up to five creatures of your choice regain 1 extra hit point per Hit Die spent during a short rest, provided you have access to your cook's utensils and sufficient food."
          ]
        },
        {
          type: "table",
          caption: "Cook's Utensils",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Create a typical meal",
              "10"
            ],
            [
              "Duplicate a meal",
              "10"
            ],
            [
              "Spot poison or impurities in food",
              "15"
            ],
            [
              "Create a gourmet meal",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Cook's Utensils",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 8,
      value: 100,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Improve food's flavor ({@dc 10}), or detect spoiled or poisoned food ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Rations|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Copper",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Copper|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 50
    },
    {
      name: "Copper",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 50
    },
    {
      name: "Copper (cp)",
      source: "PHB",
      page: 143,
      type: "$C",
      rarity: "none",
      weight: 0.02,
      value: 1,
      entries: [
        "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
        "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
        "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
        "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
        "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
        "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
      ],
      hasFluffImages: true
    },
    {
      name: "Copper Alms-Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 1
    },
    {
      name: "Copper chalice with silver filigree",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Copper chalice with silver filigree|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Copper chalice with silver filigree",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Copper stein with silver filigree (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Copper Zib",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 1
    },
    {
      name: "Coral",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Coral|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "An opaque crimson gemstone."
      ]
    },
    {
      name: "Coral",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A crimson gemstone."
      ]
    },
    {
      name: "Costume",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 4,
      value: 500,
      entries: [
        "While wearing a Costume, you have {@variantrule Advantage|XPHB} on any ability check you make to impersonate the person or type of person it represents."
      ]
    },
    {
      name: "Costume Clothes",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Costume|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 4,
      value: 500
    },
    {
      name: "Cotton Cloth (1 sq. yd.)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cotton Cloth (1 sq. yd.)|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 50
    },
    {
      name: "Cotton Cloth (1 sq. yd.)",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 50
    },
    {
      name: "Cow",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cow|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 1000
    },
    {
      name: "Cow",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 1000
    },
    {
      name: "Crampons",
      source: "IDRotF",
      page: 20,
      type: "G",
      rarity: "none",
      weight: 0.25,
      value: 200,
      entries: [
        "A crampon is a metal plate with spikes that is strapped to the sole of a boot. A creature wearing crampons can't fall {@condition prone} while moving across {@hazard slippery ice}."
      ]
    },
    {
      name: "Crossbow Bolt Case",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Crossbow Bolt Case|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "This wooden case can hold up to twenty {@item crossbow bolt|phb|crossbow bolts}."
      ],
      containerCapacity: {
        item: [
          {
            "crossbow bolt|phb": 20
          }
        ]
      }
    },
    {
      name: "Crossbow Bolt Case",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "A {@item Crossbow Bolt Case|XPHB} holds up to 20 Bolts."
      ],
      containerCapacity: {
        item: [
          {
            "bolt|xphb": 20
          }
        ]
      }
    },
    {
      name: "Crowbar",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Crowbar|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 200,
      entries: [
        "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
      ]
    },
    {
      name: "Crowbar",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 200,
      entries: [
        "Using a Crowbar gives you {@variantrule Advantage|XPHB} on Strength checks where the Crowbar's leverage can be applied."
      ]
    },
    {
      name: "Damselfly Ship",
      source: "AAG",
      page: 28,
      type: "SPC|AAG",
      rarity: "none",
      value: 2000000,
      crew: 9,
      vehAc: 19,
      vehHp: 200,
      vehDmgThresh: 15,
      vehSpeed: 8,
      capCargo: 5,
      entries: [
        "This swift but cramped ship is made mostly of metal. It can't float on water, but its legs enable it to land safely on the ground. A sliding hatch just behind the wings allows access to the ship's mangonel turret. The ship's cargo hold can easily be turned into crew cabins or another weapon deck.",
        "Damselfly ships are often used as courier vessels and armored transports. Explorers and pirates like them because they're fast and sturdy. Military leaders use them as command ships for the same reasons.",
        "Damselfly ship owners are a proud lot, fond of painting their ships in colorful patterns as well as customizing their vessels with special equipment. Large, private gatherings of damselfly ship owners are not uncommon; they use these get-togethers to show off their ships and to race one another through asteroid belts and other obstacle courses, either for rewards or bragging rights."
      ],
      seeAlsoVehicle: [
        "Damselfly Ship|AAG"
      ]
    },
    {
      name: "Detailed, life-sized dragonborn skull cast in electrum",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Diamond",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Diamond|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A transparent blue-white, canary, pink, brown, or blue gemstone."
      ]
    },
    {
      name: "Diamond",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A blue white, canary, pink, brown, or blue gemstone."
      ]
    },
    {
      name: "Dice Set",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Dice Set|XPHB"
      ],
      type: "GS",
      rarity: "none",
      value: 10
    },
    {
      name: "Dice Set",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "GS|XPHB",
      rarity: "none",
      value: 10,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern whether someone is cheating ({@dc 10}), or win the game ({@dc 20})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Diplomat's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Diplomat's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 36,
      value: 3900,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item chest|phb}",
            "2 {@item Map or Scroll Case|phb|cases for maps and scrolls}",
            "a set of {@item fine clothes|phb}",
            "a {@item Ink (1-ounce bottle)|phb|bottle of ink}",
            "an {@item ink pen|phb}",
            "a {@item lamp|phb}",
            "2 {@item Oil (flask)|phb|flasks of oil}",
            "5 {@item Paper (one sheet)|phb|sheets of paper}",
            "a {@item Perfume (vial)|phb|vial of perfume}",
            "{@item sealing wax|phb}",
            "{@item soap|phb}"
          ]
        }
      ],
      packContents: [
        "chest|phb",
        {
          item: "map or scroll case|phb",
          quantity: 2
        },
        "fine clothes|phb",
        "ink (1-ounce bottle)|phb",
        "ink pen|phb",
        "lamp|phb",
        {
          item: "oil (flask)|phb",
          quantity: 2
        },
        {
          item: "paper (one sheet)|phb",
          quantity: 5
        },
        "perfume (vial)|phb",
        "sealing wax|phb",
        "soap|phb"
      ]
    },
    {
      name: "Diplomat's Pack",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 39,
      value: 3900,
      entries: [
        "A Diplomat's Pack contains the following items: {@item Chest|XPHB}, {@item Fine Clothes|XPHB}, {@item Ink|XPHB}, 5 {@item Ink Pen|XPHB|Ink Pens}, {@item Lamp|XPHB}, 2 {@item Map or Scroll Case|XPHB|Map or Scroll Cases}, 4 flasks of {@item Oil|XPHB}, 5 sheets of {@item Paper|XPHB}, 5 sheets of {@item Parchment|XPHB}, {@item Perfume|XPHB}, and {@item Tinderbox|XPHB}."
      ],
      packContents: [
        "chest|xphb",
        "fine clothes|xphb",
        "ink|xphb",
        {
          item: "ink pen|xphb",
          quantity: 5
        },
        "lamp|xphb",
        {
          item: "map or scroll case|xphb",
          quantity: 2
        },
        {
          item: "oil|xphb",
          quantity: 4
        },
        {
          item: "paper|xphb",
          quantity: 5
        },
        {
          item: "parchment|xphb",
          quantity: 5
        },
        "perfume|xphb",
        "tinderbox|xphb"
      ]
    },
    {
      name: "Disguise Kit",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 81
        }
      ],
      reprintedAs: [
        "Disguise Kit|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 3,
      value: 2500,
      entries: [
        "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
      ],
      additionalEntries: [
        "The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing."
          ]
        },
        {
          type: "entries",
          name: "Deception",
          entries: [
            "In certain cases, a disguise can improve your ability to weave convincing lies."
          ]
        },
        {
          type: "entries",
          name: "Intimidation",
          entries: [
            "The right disguise can make you look more fearsome, whether you want to scare someone away by posing as a plague victim or intimidate a gang of thugs by taking the appearance of a bully."
          ]
        },
        {
          type: "entries",
          name: "Performance",
          entries: [
            "A cunning disguise can enhance an audience's enjoyment of a performance, provided the disguise is properly designed to evoke the desired reaction."
          ]
        },
        {
          type: "entries",
          name: "Persuasion",
          entries: [
            "Folk tend to trust a person in uniform. If you disguise yourself as an authority figure, your efforts to persuade others are often more effective."
          ]
        },
        {
          type: "entries",
          name: "Create Disguise",
          entries: [
            "As part of a long rest, you can create a disguise. It takes you 1 minute to don such a disguise once you have created it. You can carry only one such disguise on you at a time without drawing undue attention, unless you have a bag of holding or a similar method to keep them hidden. Each disguise weighs 1 pound.",
            "At other times, it takes 10 minutes to craft a disguise that involves moderate changes to your appearance, and 30 minutes for one that requires more extensive changes."
          ]
        },
        {
          type: "table",
          caption: "Disguise Kit",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Cover injuries or distinguishing marks",
              "10"
            ],
            [
              "Spot a disguise being used by someone else",
              "15"
            ],
            [
              "Copy a humanoid's appearance",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Disguise Kit",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 3,
      value: 2500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Charisma"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Apply makeup ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Costume|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Dogsled",
      source: "IDRotF",
      page: 20,
      type: "VEH",
      rarity: "none",
      weight: 300,
      value: 2000,
      entries: [
        "An empty sled costs 20 gp, weighs 300 pounds, and has room at the back for one driver."
      ]
    },
    {
      name: "Donkey",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      type: "MNT",
      rarity: "none",
      value: 800,
      carryingCapacity: 420,
      speed: 40
    },
    {
      name: "Draft Horse",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Draft Horse|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 5000,
      carryingCapacity: 540,
      speed: 40
    },
    {
      name: "Draft Horse",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 5000,
      carryingCapacity: 540,
      speed: 40
    },
    {
      name: "Dragon",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 100,
      entries: [
        "Gold coin, half again as large as a {@item nib|wdh} (1 dragon = 100 {@item nib|wdh|nibs})"
      ]
    },
    {
      name: "Dragon's Blood",
      source: "ERLW",
      page: 244,
      type: "OTH",
      rarity: "none",
      entries: [
        "Introduced into Sharn by Daask, dragon's blood is a potent and highly addictive stimulant. In addition to inducing euphoria, it can enhance spellcasting ability or even temporarily imbue a user with the ability to cast sorcerer spells. The drug's effects are potentially dangerous and always unpredictable. This isn't something a player character should want to use; adventurers are more likely to interfere with Daask smugglers or deal with an addict who accidentally casts a {@spell fireball} in a crowded street. The specific effects of dragon's blood are up to you, but you can take inspiration from the {@table Wild Magic Surge|PHB} table in the {@book Player's Handbook|PHB}."
      ]
    },
    {
      name: "Dragonchess Set",
      source: "PHB",
      page: 154,
      basicRules: true,
      reprintedAs: [
        "Dragonchess Set|XPHB"
      ],
      type: "GS",
      rarity: "none",
      weight: 0.5,
      value: 100
    },
    {
      name: "Dragonchess Set",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "GS|XPHB",
      rarity: "none",
      value: 100,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern whether someone is cheating ({@dc 10}), or win the game ({@dc 20})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Dreamlily",
      source: "ERLW",
      page: 244,
      type: "OTH",
      rarity: "none",
      entries: [
        "A psychoactive liquid that smells and tastes like your favorite beverage, essence of dreamlily is a Sarlonan opiate. First imported to help manage pain during the Last War, it's now the most commonly abused substance in Sharn. Though dreamlily isn't illegal if used for medicinal purposes, it's heavily taxed, and thus most dreamlily is smuggled in and sold on the black market. Dreamlily dens can be found across the lower wards. Consuming dreamlily causes disorienting euphoria and brings about remarkable resistance to pain. A creature under the effects of dreamlily is {@condition poisoned} for 1 hour. While {@condition poisoned} in this way, the creature is immune to fear, and the first time it drops to 0 hit points without being killed outright, it drops to 1 hit point instead. A dose of dreamlily costs around 1 gp, or up to ten times that if purchased through legal channels. There are many varieties of the drug, however, and the duration or the price might vary accordingly."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Drow Poison",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Lolth's Sting|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "This poison is typically made only by the {@creature drow}, and only in a place far removed from sunlight. A creature subjected to this poison must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned} for 1 hour. If the saving throw fails by 5 or more, the creature is also {@condition unconscious} while {@condition poisoned} in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Dungeoneer's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Dungeoneer's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 61.5,
      value: 1200,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item crowbar|phb}",
            "a {@item hammer|phb}",
            "10 {@item piton|phb|pitons}",
            "10 {@item torch|phb|torches}",
            "a {@item tinderbox|phb}",
            "10 days of {@item Rations (1 day)|phb|rations}",
            "a {@item waterskin|phb}",
            "{@item Hempen Rope (50 feet)|phb|50 feet of hempen rope}"
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "crowbar|phb",
        "hammer|phb",
        {
          item: "piton|phb",
          quantity: 10
        },
        {
          item: "torch|phb",
          quantity: 10
        },
        "tinderbox|phb",
        {
          item: "rations (1 day)|phb",
          quantity: 10
        },
        "waterskin|phb",
        "hempen rope (50 feet)|phb"
      ]
    },
    {
      name: "Dungeoneer's Pack",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 55,
      value: 1200,
      entries: [
        "A Dungeoneer's Pack contains the following items: {@item Backpack|XPHB}, {@item Caltrops|XPHB}, {@item Crowbar|XPHB}, 2 flasks of {@item Oil|XPHB}, 10 days of {@item Rations|XPHB}, {@item Rope|XPHB}, {@item Tinderbox|XPHB}, 10 {@item Torch|XPHB|Torches}, and {@item Waterskin|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "caltrops|xphb",
        "crowbar|xphb",
        {
          item: "oil|xphb",
          quantity: 2
        },
        {
          item: "rations|xphb",
          quantity: 10
        },
        "rope|xphb",
        "tinderbox|xphb",
        {
          item: "torch|xphb",
          quantity: 10
        },
        "waterskin|xphb"
      ]
    },
    {
      name: "Dust of the Mummy",
      source: "IMR",
      page: 93,
      rarity: "none",
      poison: true,
      entries: [
        "This poison is created during a mummy's embalming process, distilled from the dead creature's removed organs. A creature subjected to this poison must succeed on a {@dc 12} Constitution saving throw or be cursed with mummy rot. The cursed creature can't regain hit points, and its hit point maximum decreases by 10 ({@dice 3d6}) for every 24 hours that elapse. If the curse reduces the creature's hit point maximum to 0, the creature dies, and its body turns to dust. The curse lasts until removed by the {@spell remove curse} spell or similar magic."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Dynamite",
      source: "TDCSR",
      page: 100,
      type: "EXP|DMG",
      rarity: "none",
      value: 10000,
      range: "30",
      dmg1: "6d6",
      dmgType: "F",
      entries: [
        "This bundle of explosives can be lit and thrown up to 30 feet as an action. It explodes at the start of your next turn. Creatures and objects within 20 feet of it must make a {@dc 12} Dexterity {@quickref saving throws|PHB|2|1|saving throw}, taking {@damage 6d6} fire damage on a failed save, or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Dynamite (stick)",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Dynamite Stick|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 1,
      age: "modern",
      entries: [
        "As an action, a creature can light a stick of dynamite and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must make a {@dc 12} Dexterity saving throw, taking {@damage 3d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
        "A character can bind sticks of dynamite together so they explode at the same time. Each additional stick increases the damage by {@damage 1d6} (to a maximum of {@damage 10d6}) and the burst radius by 5 feet (to a maximum of 20 feet).",
        "Dynamite can be rigged with a longer fuse to explode after a set amount of time, usually 1 to 6 rounds. Roll initiative for the dynamite. After the set number of rounds goes by, the dynamite explodes on that initiative."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Dynamite Stick",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 1,
      valueRarity: "rare",
      age: "modern",
      entries: [
        "An an action, you can light a Dynamite Stick and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius {@variantrule Sphere [Area of Effect]|XPHB|Sphere} centered on that point makes a {@dc 12} Dexterity saving throw, taking {@damage 3d6} Force damage on a failed save or half as much damage on a successful one.",
        "It takes 1 minute to bind two or more Dynamite Sticks together so they explode at the same time. Each stick after the first increases the damage by {@dice 1d6} (to a maximum of {@dice 10d6}) and the effect's radius by 5 feet (to a maximum of 20 feet).",
        "It takes 1 minute to rig dynamite with a longer fuse so it explodes after a longer period of time, such as 1 minute or 10 minutes."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Electrum (ep)",
      source: "PHB",
      page: 143,
      type: "$C",
      rarity: "none",
      weight: 0.02,
      value: 50,
      entries: [
        "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
        "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
        "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
        "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
        "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
        "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
      ],
      hasFluffImages: true
    },
    {
      name: "Electrum 50-Zib Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 50
    },
    {
      name: "Elephant",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Elephant|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 20000,
      carryingCapacity: 1320,
      speed: 40
    },
    {
      name: "Elephant",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 20000,
      carryingCapacity: 1320,
      speed: 40
    },
    {
      name: "Elven Trinket",
      source: "MTF",
      page: 64,
      type: "G",
      rarity: "none",
      entries: [
        {
          type: "table",
          colLabels: [
            "d8",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A small notebook that causes anything written in it to disappear after 1 hour"
            ],
            [
              "2",
              "A crystal lens made of ivory and gold that causes anything observed through it to appear to be surrounded by motes of multicolored light"
            ],
            [
              "3",
              "A small golden pyramid inscribed with elven symbols and about the size of a walnut"
            ],
            [
              "4",
              "A cloak pin made from enamel in the shape of a butterfly; when you take the pin off, it turns into a real butterfly, and returns when you are ready to put your cloak back on again"
            ],
            [
              "5",
              "A golden compass that points toward the nearest portal to the Feywild within 10 miles"
            ],
            [
              "6",
              "A small silver spinning top that, when spun, endlessly spins until interrupted"
            ],
            [
              "7",
              "A small songbird made of enamel, gold wire, and precious stone; uttering the songbird's name in Elvish causes the trinket to emit that bird's birdsong"
            ],
            [
              "8",
              "A small enamel flower that, when put in one's hair, animates, tying back the wearer's hair with a living vine with flowers; plucking a single flower from this vine returns it to its inanimate form"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Emblem",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Emblem|XPHB"
      ],
      type: "SCF",
      scfType: "holy",
      rarity: "none",
      value: 500
    },
    {
      name: "Emblem",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "SCF|XPHB",
      scfType: "holy",
      rarity: "none",
      value: 500,
      entries: [
        "For an Emblem to be an effective Holy Symbol, it must be borne on fabric (such as a tabard or banner) or a {@item Shield|XPHB}."
      ]
    },
    {
      name: "Embroidered glove set with jewel chips",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Embroidered glove set with jewel chips|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Embroidered glove set with jewel chips",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Embroidered silk and velvet mantle set with numerous moonstones",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Embroidered silk and velvet mantle set with numerous moonstones|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Embroidered silk and velvet mantle set with numerous moonstones",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Embroidered silk handkerchief",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Embroidered silk handkerchief|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Embroidered silk handkerchief",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Emerald",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Emerald|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A transparent deep bright green gemstone."
      ]
    },
    {
      name: "Emerald",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A deep bright green gemstone."
      ]
    },
    {
      name: "Entertainer's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Entertainer's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 38,
      value: 4000,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item bedroll|phb}",
            "2 {@item Costume Clothes|phb|costumes}",
            "5 {@item candle|phb|candles}",
            "5 days of {@item Rations (1 day)|phb|rations}",
            "a {@item waterskin|phb}",
            "a {@item disguise kit|phb}"
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "bedroll|phb",
        {
          item: "costume clothes|phb",
          quantity: 2
        },
        {
          item: "candle|phb",
          quantity: 5
        },
        {
          item: "rations (1 day)|phb",
          quantity: 5
        },
        "waterskin|phb",
        "disguise kit|phb"
      ]
    },
    {
      name: "Entertainer's Pack",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 58.5,
      value: 4000,
      entries: [
        "An Entertainer's Pack contains the following items: {@item Backpack|XPHB}, {@item Bedroll|XPHB}, {@item Bell|XPHB}, {@item Bullseye Lantern|XPHB}, 3 {@item Costume|XPHB|Costumes}, {@item Mirror|XPHB}, 8 flasks of {@item Oil|XPHB}, 9 days of {@item Rations|XPHB}, {@item Tinderbox|XPHB}, and {@item Waterskin|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "bedroll|xphb",
        "bell|xphb",
        "bullseye lantern|xphb",
        {
          item: "costume|xphb",
          quantity: 3
        },
        "mirror|xphb",
        {
          item: "oil|xphb",
          quantity: 8
        },
        {
          item: "rations|xphb",
          quantity: 9
        },
        "tinderbox|xphb",
        "waterskin|xphb"
      ]
    },
    {
      name: "Essence of Ether",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Essence of Ether|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 30000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for 8 hours. The {@condition poisoned} creature is {@condition unconscious}. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Essence of Ether",
      source: "XDMG",
      page: 90,
      type: "G|XPHB",
      rarity: "none",
      value: 30000,
      poison: true,
      entries: [
        "A creature subjected to Essence of Ether must succeed on a {@dc 15} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 8 hours. The creature also has the {@condition Unconscious|XPHB} condition while {@condition Poisoned|XPHB} in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Exotic Saddle",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Exotic Saddle|XPHB"
      ],
      type: "TAH",
      rarity: "none",
      weight: 40,
      value: 6000,
      entries: [
        "An exotic saddle is required for riding any aquatic or flying mount."
      ]
    },
    {
      name: "Exotic Saddle",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "TAH|XPHB",
      rarity: "none",
      weight: 40,
      value: 6000,
      entries: [
        "A saddle comes with a bit, a bridle, reins, and any other equipment needed to use the saddle. An Exotic Saddle is required for riding an aquatic or a flying mount."
      ]
    },
    {
      name: "Explorer's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Explorer's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 59,
      value: 1000,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item bedroll|phb}",
            "a {@item mess kit|phb}",
            "a {@item tinderbox|phb}",
            "10 {@item torch|phb|torches}",
            "10 days of {@item Rations (1 day)|phb|rations}",
            "a {@item waterskin|phb}",
            "{@item Hempen Rope (50 feet)|phb|50 feet of hempen rope}"
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "bedroll|phb",
        "mess kit|phb",
        "tinderbox|phb",
        {
          item: "torch|phb",
          quantity: 10
        },
        {
          item: "rations (1 day)|phb",
          quantity: 10
        },
        "waterskin|phb",
        "hempen rope (50 feet)|phb"
      ]
    },
    {
      name: "Explorer's Pack",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 55,
      value: 1000,
      entries: [
        "An Explorer's Pack contains the following items: {@item Backpack|XPHB}, {@item Bedroll|XPHB}, 2 flasks of {@item Oil|XPHB}, 10 days of {@item Rations|XPHB}, {@item Rope|XPHB}, {@item Tinderbox|XPHB}, 10 {@item Torch|XPHB|Torches}, and {@item Waterskin|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "bedroll|xphb",
        {
          item: "oil|xphb",
          quantity: 2
        },
        {
          item: "rations|xphb",
          quantity: 10
        },
        "rope|xphb",
        "tinderbox|xphb",
        {
          item: "torch|xphb",
          quantity: 10
        },
        "waterskin|xphb"
      ]
    },
    {
      name: "Explosive Seed",
      source: "EGW",
      page: 225,
      type: "G",
      rarity: "none",
      entries: [
        "This acorn-sized sphere of brass contains a small amount of blasting powder and a clockwork trigger. An explosive seed can be thrown up to 30 feet as an action, detonating on impact. Each creature within 5 feet of the exploding seed must make a {@dc 10} Dexterity saving throw, taking {@damage 1d8} bludgeoning damage on a failed save, or half as much damage on a successful one."
      ]
    },
    {
      name: "Eye Agate",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Eye Agate|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A translucent circles of gray, white, brown, blue, or green gemstone."
      ]
    },
    {
      name: "Eye Agate",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A circles of gray, white, brown, blue, or green gemstone."
      ]
    },
    {
      name: "Eye patch decorated with tiny blue sapphires and moonstones",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Eye patch with a mock eye set in blue sapphire and moonstone",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Eye patch decorated with tiny blue sapphires and moonstones|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Eye patch with a mock eye set in blue sapphire and moonstone (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Fargab",
      source: "DSotDQ",
      page: 188,
      type: "G",
      rarity: "none",
      entries: [
        "These backpack-sized devices are created in pairs, with matching numbers engraved on them, and allow communication over a long distance using radio frequencies. While wearing a fargab, you can use an action to speak into the device's mouthpiece and send a short message of twenty-five words or less to another creature wearing the matched fargab while it is within 18 miles of you. The message emits from the speakers of the device and can be heard up to 10 feet away from the device. If no creature is wearing the fargab, the speakers make static noises instead."
      ],
      hasFluffImages: true
    },
    {
      name: "Feathered mantle with emerald clasp (Sun Empire)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Feed (per day)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Feed (per day)|XPHB"
      ],
      type: "TAH",
      rarity: "none",
      weight: 10,
      value: 5
    },
    {
      name: "Feed (per day)",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "TAH|XPHB",
      rarity: "none",
      weight: 10,
      value: 5
    },
    {
      name: "Feywild Trinket",
      source: "WBtW",
      page: 7,
      type: "G",
      rarity: "none",
      entries: [
        "The Feywild Trinkets table that follows offers a selection of trinkets appropriate for Feywild-themed adventures such as this one. Players whose characters have the feylost or Witchlight hand background can roll on this table instead of the {@book Trinkets|PHB|5|Trinkets} table in the {@book Player's Handbook|PHB} to determine what trinkets their characters possess. The adventure includes a few encounters that require you to roll on the table to determine what random trinkets the characters find in key locations.",
        {
          type: "table",
          caption: "Feywild Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01",
              "Cookie cutter shaped like a unicorn"
            ],
            [
              "02",
              "Two yew rings linked together"
            ],
            [
              "03",
              "Silver hand mirror with a nymph-shaped handle"
            ],
            [
              "04",
              "Painted wooden key whose teeth change configuration every day at dawn"
            ],
            [
              "05",
              "Delicate silver cameo with pictures of twin children opposite one another"
            ],
            [
              "06",
              "Golden pendant charm shaped like a leprechaun"
            ],
            [
              "07",
              "Tiny wooden box containing a croquet set sized for pixies or sprites"
            ],
            [
              "08",
              "Tiny pair of sharp, iron scissors"
            ],
            [
              "09",
              "Chess piece shaped like a dancing satyr wearing a bishop's hat and clutching a gnarled staff"
            ],
            [
              "10",
              "Saltshaker shaped like a wizard's tower"
            ],
            [
              "11",
              "Crystal orb that allows an elf who holds it to sleep"
            ],
            [
              "12",
              "Pendant that shows the phases of the moon"
            ],
            [
              "13",
              "Large iron fingernail"
            ],
            [
              "14",
              "Tiny electrum whistle that only Fey can hear"
            ],
            [
              "15",
              "Wooden jigsaw puzzle piece as big as a saucer, with a painted image of a jug on it"
            ],
            [
              "16",
              "Spool of glistening silver thread"
            ],
            [
              "17",
              "Sheet of music that goblins find upsetting when they hear it played or sung"
            ],
            [
              "18",
              "Rotten ogre's tooth with the Elvish glyph for \"moon\" etched into it"
            ],
            [
              "19",
              "Vitrified eye of a displacer beast"
            ],
            [
              "20",
              "Tiny duskwood coffin containing the ashes of a troll"
            ],
            [
              "21",
              "Old invitation to a banquet in the Summer Court, written in ink on vellum in Sylvan"
            ],
            [
              "22",
              "Gossamer shawl that glows faintly in moonlight"
            ],
            [
              "23",
              "Ball-and-cup toy that plays a short, victorious jingle whenever the ball lands in the cup"
            ],
            [
              "24",
              "Sprite's skull covered in ink fingerprints"
            ],
            [
              "25",
              "Silver fork with the outer tines bent sideways"
            ],
            [
              "26",
              "A soot-stained sock in which a nugget of coal magically appears each day at dawn"
            ],
            [
              "27",
              "Tiny wooden stool (sized for a pixie or sprite) that gives splinters to those who hold it"
            ],
            [
              "28",
              "Tiny clockwork dragonfly that slowly beats its wings (but can't fly) when wound up"
            ],
            [
              "29",
              "Toy unicorn made of wood, painted with bright colors"
            ],
            [
              "30",
              "Pixie plushie that sings when you squeeze it"
            ],
            [
              "31",
              "1-inch-square painting of a sleeping elf"
            ],
            [
              "32",
              "Thimble that helps you daydream when worn"
            ],
            [
              "33",
              "Pumpkin cupcake that magically regenerates itself in its paper cup each day at dawn"
            ],
            [
              "34",
              "Fake Three-Dragon Ante card depicting a faerie dragon"
            ],
            [
              "35",
              "Teacup made from a varnished mushroom cap that magically keeps its liquid contents lukewarm"
            ],
            [
              "36",
              "Rock that floats and is small enough to hide in your closed fist"
            ],
            [
              "37",
              "Tiny bottle filled with rainwater collected from the Feywild"
            ],
            [
              "38",
              "Opalescent conch shell that laughs when you hold it to your ear"
            ],
            [
              "39",
              "Vial of viscous liquid labeled \"Fomorian spit. Do not drink!\""
            ],
            [
              "40",
              "Wax candle that roars and crackles like a bonfire while lit"
            ],
            [
              "41",
              "Potted daffodil that sways when near a source of music"
            ],
            [
              "42",
              "8-ounce, glass wine bottle that magically reassembles itself 1 minute after being broken"
            ],
            [
              "43",
              "Tiny wooden sylph figurehead from a model ship"
            ],
            [
              "44",
              "Tiny pumpkin-shaped cauldron carved out of bog oak"
            ],
            [
              "45",
              "Bar of soap that smells like something memorable from your childhood"
            ],
            [
              "46",
              "Piece of orange parchment folded to look like a knight astride a unicorn"
            ],
            [
              "47",
              "Tinted glasses so dark that they can't be seen through"
            ],
            [
              "48",
              "8-inch-long glass ant figurine"
            ],
            [
              "49",
              "Piece of parchment bearing a child's drawing of an oni"
            ],
            [
              "50",
              "Tiny hourglass without sand in it"
            ],
            [
              "51",
              "Empty vial with corked ends at the top and bottom"
            ],
            [
              "52",
              "Pair of green leprechaun boots tied together by their laces"
            ],
            [
              "53",
              "Smoking pipe made from a tree root"
            ],
            [
              "54",
              "Red cap that droops down to one's shoulders when worn"
            ],
            [
              "55",
              "Mask that helps you remember your dreams if you wear it while you sleep"
            ],
            [
              "56",
              "Notebook that shows what's written on it only when held upside down"
            ],
            [
              "57",
              "Wooden top with four sides, each bearing the image of child enjoying a different season"
            ],
            [
              "58",
              "Tiny beehive wig made for sprites or pixies"
            ],
            [
              "59",
              "Wooden mouse figurine that squeaks when held"
            ],
            [
              "60",
              "Stuffed oni doll with a creepy smile and one missing eye"
            ],
            [
              "61",
              "Empty bag labeled \"Candy\""
            ],
            [
              "62",
              "Tinted glass monocle that makes things look green"
            ],
            [
              "63",
              "Black executioner's hood sized for a pixie or sprite"
            ],
            [
              "64",
              "Piano key carved from a satyr's horn"
            ],
            [
              "65",
              "Tiny wooden lute with cat hairs for strings"
            ],
            [
              "66",
              "Iron needle with an eye that refuses to let thread pass through it"
            ],
            [
              "67",
              "Tiny sundial that casts a shadow only in moonlight"
            ],
            [
              "68",
              "Wooden pan flute that attracts harmless local fauna when played"
            ],
            [
              "69",
              "Silvered pinecone"
            ],
            [
              "70",
              "Flask of spectral glowworms that change color to reflect the mood of the flask's holder"
            ],
            [
              "71",
              "Wooden apple painted blue"
            ],
            [
              "72",
              "Tuning fork that sounds the tone for the F key"
            ],
            [
              "73",
              "Nunchaku sized for a pixie or sprite"
            ],
            [
              "74",
              "Copper coin with a smiling satyr's face on one side and a satyr's skull on the other"
            ],
            [
              "75",
              "Severed chicken's foot attached to a leather cord"
            ],
            [
              "76",
              "Collection of baby teeth in a tiny wooden box"
            ],
            [
              "77",
              "Pinwheel whirligig that spins even when there's no wind"
            ],
            [
              "78",
              "Child's parasol covered in moss and leaves"
            ],
            [
              "79",
              "Wooden magnifying glass missing its lens"
            ],
            [
              "80",
              "Glossy mushroom with a red, bell-shaped cap that jingles when shook"
            ],
            [
              "81",
              "Pouch of seeds that smell like home"
            ],
            [
              "82",
              "Petrified robin's egg"
            ],
            [
              "83",
              "Wooden spoon with a hole in the center"
            ],
            [
              "84",
              "Paper wasp nest in a jar"
            ],
            [
              "85",
              "Sprig of rosemary wrapped with ribbon at one end"
            ],
            [
              "86",
              "Tiny, unfurnished dollhouse sized for a pixie child"
            ],
            [
              "87",
              "Paintbrush made entirely of ceramic—even the bristles"
            ],
            [
              "88",
              "Candlestick whose candlelight looks like a tiny, dancing fairy made of fire"
            ],
            [
              "89",
              "Spectacle frames in the shape of butterfly wings"
            ],
            [
              "90",
              "Set of false wooden teeth"
            ],
            [
              "91",
              "Tiny book of fairytales"
            ],
            [
              "92",
              "Rucksack in which one potato magically appears each day at dawn"
            ],
            [
              "93",
              "Pixie's winter jacket lined with fox fur"
            ],
            [
              "94",
              "Tasseled wine charm shaped like a sprite"
            ],
            [
              "95",
              "Weak magnetic wand"
            ],
            [
              "96",
              "100-sided die the size of a plum, cut from coal"
            ],
            [
              "97",
              "Glass slipper, missing its mate"
            ],
            [
              "98",
              "Tiny dreamcatcher"
            ],
            [
              "99",
              "Barbell sized for a pixie or sprite"
            ],
            [
              "100",
              "Music box that plays a sprightly tune you remember from your childhood"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ],
      hasFluffImages: true
    },
    {
      name: "Fine Clothes",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Fine Clothes|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 6,
      value: 1500
    },
    {
      name: "Fine Clothes",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 6,
      value: 1500,
      entries: [
        "Fine Clothes are made of expensive fabrics and adorned with expertly crafted details. Some events and locations admit only people wearing these clothes."
      ]
    },
    {
      name: "Fine gold chain set with a fire opal",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Fine gold chain set with a fire opal|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Fine gold chain set with a fire opal",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Fine gold chain with fire opals (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Fine robe with dinosaur feathers and silver embroidery (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Fine steel rapier with gold filigree hilt (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Fine Wine (bottle)",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Fine Wine (bottle)|XPHB"
      ],
      type: "FD",
      rarity: "none",
      value: 1000,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Fine Wine (bottle)",
      source: "XPHB",
      page: 231,
      freeRules2024: true,
      type: "FD|XPHB",
      rarity: "none",
      value: 1000,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Finely articulated jade glove (River Heralds)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Fire Opal",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Fire Opal|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A translucent fiery red gemstone."
      ]
    },
    {
      name: "Fire Opal",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A fiery red gemstone."
      ]
    },
    {
      name: "Fishing Tackle",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 4,
      value: 100,
      entries: [
        "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
      ]
    },
    {
      name: "Flask",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Flask|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 2,
      entries: [
        "A flask holds 1 pint of liquid."
      ]
    },
    {
      name: "Flask",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 2,
      entries: [
        "A Flask holds up to 1 pint."
      ],
      containerCapacity: {
        volume: [
          0.02
        ]
      }
    },
    {
      name: "Flour",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Flour|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 2
    },
    {
      name: "Flour",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 2,
      value: 2
    },
    {
      name: "Flying Fish Ship",
      source: "AAG",
      page: 30,
      type: "SPC|AAG",
      rarity: "none",
      value: 2000000,
      crew: 10,
      vehAc: 15,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 4.5,
      capCargo: 13,
      entries: [
        "Aside from space galleons, flying fish ships are the most common vessels in Wildspace, favorites among merchants and adventurers alike.",
        "A flying fish ship can float and sail on water, but it isn't built to land on the ground (the ventral fins would snap under the weight of the ship during landing, and the keel would cause the ship to roll to one side).",
        "Typical weapons on a flying fish ship include a forward-mounted mangonel and an aftmounted ballista."
      ],
      seeAlsoVehicle: [
        "Flying Fish Ship|AAG"
      ]
    },
    {
      name: "Forgery Kit",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 81
        }
      ],
      reprintedAs: [
        "Forgery Kit|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 5,
      value: 1500,
      entries: [
        "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
      ],
      additionalEntries: [
        "A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "A forgery kit can be used in conjunction with the Arcana skill to determine if a magic item is real or fake."
          ]
        },
        {
          type: "entries",
          name: "Deception",
          entries: [
            "A well-crafted forgery, such as papers proclaiming you to be a noble or a writ that grants you safe passage, can lend credence to a lie."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "A forgery kit combined with your knowledge of history improves your ability to create fake historical documents or to tell if an old document is authentic."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you examine objects, proficiency with a forgery kit is useful for determining how an object was made and whether it is genuine."
          ]
        },
        {
          type: "entries",
          name: "Other Tools",
          entries: [
            "Knowledge of other tools makes your forgeries that much more believable. For example, you could combine proficiency with a forgery kit and proficiency with cartographer's tools to make a fake map."
          ]
        },
        {
          type: "entries",
          name: "Quick Fake",
          entries: [
            "As part of a short rest, you can produce a forged document no more than one page in length. As part of a long rest, you can produce a document that is up to four pages long. Your Intelligence check using a forgery kit determines the DC for someone else's Intelligence ({@skill Investigation}) check to spot the fake."
          ]
        },
        {
          type: "table",
          caption: "Forgery Kit",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Mimic handwriting",
              "15"
            ],
            [
              "Duplicate a wax seal",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Forgery Kit",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 5,
      value: 1500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Mimic 10 or fewer words of someone else's handwriting ({@dc 15}), or duplicate a wax seal ({@dc 20})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Fragmentation Grenade",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Fragmentation Grenade|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 1,
      age: "modern",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|DMG}",
        "Each creature within 20 feet of an exploding fragmentation grenade must make a {@dc 15} Dexterity saving throw, taking {@damage 5d6} piercing damage on a failed save, or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Fragmentation Grenade",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 1,
      valueRarity: "rare",
      age: "modern",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|XDMG}",
        "Each creature in the {@variantrule Sphere [Area of Effect]|XPHB|Sphere} makes a {@dc 15} Dexterity saving throw, taking 17 ({@damage 5d6}) Piercing damage on a failed save or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Frostfell and Everice Trinket",
      source: "ERLW",
      page: 136,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from the Frostfell and Everice",
          colLabels: [
            "d8",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A small prism carved from ice that doesn't melt"
            ],
            [
              "2",
              "A rusted iron coin, depicting a dwarf lord and the worlds \"Five Rex Undra\""
            ],
            [
              "3",
              "A pair of eight-sided dice carved from ice that doesn't melt"
            ],
            [
              "4",
              "A swatch of silvery fur that's cold to the touch, possibly from a winter wolf"
            ],
            [
              "5",
              "A snowball; it doesn't melt and can't be compressed into ice"
            ],
            [
              "6",
              "A tiny white dragon sculpted from ice that doesn't melt"
            ],
            [
              "7",
              "A key carved from ice that doesn't melt"
            ],
            [
              "8",
              "A single scale from a white dragon"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Galley",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Galley|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      value: 3000000,
      crew: 80,
      vehAc: 15,
      vehHp: 500,
      vehDmgThresh: 20,
      vehSpeed: 4,
      capCargo: 150,
      seeAlsoVehicle: [
        "Galley"
      ]
    },
    {
      name: "Galley",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 3000000,
      crew: 80,
      vehAc: 15,
      vehHp: 500,
      vehDmgThresh: 20,
      vehSpeed: 4,
      capCargo: 150,
      seeAlsoVehicle: [
        "Galley"
      ]
    },
    {
      name: "Garnet",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Garnet|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent red, brown-green, or violet gemstone."
      ]
    },
    {
      name: "Garnet",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A red, brown green, or violet gemstone."
      ]
    },
    {
      name: "Gate Warden Trinket",
      source: "SatO",
      page: 7,
      type: "G",
      rarity: "none",
      entries: [
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "d6",
            "Trinket"
          ],
          rows: [
            [
              "1",
              "A tiny vial pendant filled with a drop of honey that glows faintly"
            ],
            [
              "2",
              "A small lead ingot that has a strange thumbprint pressed into it and whispers when held tightly"
            ],
            [
              "3",
              "Two lodestone spheres that chime when they attract each other"
            ],
            [
              "4",
              "A smoldering pebble of coal that, while always hot, doesn't burn skin, fur, scales, or clothing"
            ],
            [
              "5",
              "A feather that sheds {@quickref Vision and Light||2||dim light} in a 5-foot radius"
            ],
            [
              "6",
              "A ring made from a chain link that, once donned, won't come off without pulling painfully hard"
            ]
          ]
        }
      ],
      light: [
        {
          dim: 5
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Giant Trinket",
      source: "BGG",
      page: 16,
      type: "G",
      rarity: "none",
      entries: [
        "While exploring your home, you discovered some trivial remnant of the ancient inhabitants, as determined by rolling on the Giant Trinkets table. The items in parentheses are the normal-sized objects most analogous to the described giant trinkets.",
        {
          caption: "Giant Trinkets",
          colLabels: [
            "d6",
            "Giant Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A giant's toothpick (a {@item dagger|PHB})"
            ],
            [
              "2",
              "A giant's handkerchief (a {@item blanket|PHB})"
            ],
            [
              "3",
              "A giant's marble (a crystal orb)"
            ],
            [
              "4",
              "A giant's match (a {@item torch|PHB})"
            ],
            [
              "5",
              "A giant's letter opener (a {@item longsword|PHB})"
            ],
            [
              "6",
              "A giant's thimble (an {@item iron pot|PHB})"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Gilded royal coach or funeral barge",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Ginger",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ginger|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 100
    },
    {
      name: "Ginger",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 100
    },
    {
      name: "Glass Bottle",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Glass Bottle|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 200,
      entries: [
        "A bottle holds 1½ pints of liquid."
      ]
    },
    {
      name: "Glass Bottle",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 200,
      entries: [
        "A Glass Bottle holds up to 1½ pints."
      ],
      containerCapacity: {
        volume: [
          0.03
        ]
      }
    },
    {
      name: "Glassblower's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 82
        }
      ],
      reprintedAs: [
        "Glassblower's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 3000,
      additionalEntries: [
        "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History",
          entries: [
            "Your knowledge of glassmaking techniques aids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)"
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you study an area, your knowledge can aid you if the clues include broken glass or glass objects."
          ]
        },
        {
          type: "entries",
          name: "Identify Weakness",
          entries: [
            "With 1 minute of study, you can identify the weak points in a glass object. Any damage dealt to the object by striking a weak spot is doubled."
          ]
        },
        {
          type: "table",
          caption: "Glassblower's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Identify source of glass",
              "10"
            ],
            [
              "Determine what a glass object once held",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Glassblower's Tools",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 3000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern what a glass object held in the past 24 hours ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Glass Bottle|XPHB}, {@item Magnifying Glass|XPHB}, {@item Spyglass|XPHB}, {@item Vial|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Gluebomb",
      source: "TDCSR",
      page: 100,
      type: "EXP|DMG",
      rarity: "none",
      value: 5000,
      range: "30",
      entries: [
        "This unique explosive can be primed and thrown up to 30 feet as an action. It explodes on impact. Creatures within 20 feet of it must make a {@dc 12} Dexterity {@quickref saving throws|PHB|2|1|saving throw} or be {@condition restrained} for 1 minute. A {@condition restrained} creature can make a {@dc 12} Strength check as an action, escaping on a success."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Goat",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Goat|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 100
    },
    {
      name: "Goat",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 100
    },
    {
      name: "Gold",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Gold|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 5000
    },
    {
      name: "Gold",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 5000
    },
    {
      name: "Gold (gp)",
      source: "PHB",
      page: 143,
      type: "$C",
      rarity: "none",
      weight: 0.02,
      value: 100,
      entries: [
        "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
        "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
        "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
        "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
        "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
        "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
      ],
      hasFluffImages: true
    },
    {
      name: "Gold 5-Zino Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 500
    },
    {
      name: "Gold Bar (5-pound)",
      source: "XDMG",
      page: 213,
      type: "TB|XDMG",
      rarity: "none",
      weight: 5,
      value: 25000,
      barDimensions: {
        l: 5,
        w: 2,
        h: 0.75
      }
    },
    {
      name: "Gold basin with rubies (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold bird cage with electrum filigree",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold birdcage with electrum filigree|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Gold birdcage with electrum filigree",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Gold bracelet",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Gold chalice (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Gold chalice set with emeralds (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold circlet set with four aquamarines",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold circlet set with four aquamarines|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold circlet set with four aquamarines",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold comb shaped like a dragon with red garnets as eyes",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Gold cup set with emeralds",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold cup set with emeralds|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold cup set with emeralds",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold dragon comb set with red garnets as eyes",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold comb shaped like a dragon with red garnets as eyes|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Gold idol",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Gold jewelry box with platinum filigree",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold jewelry box with platinum filigree|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold jewelry box with platinum filigree",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold jewelry box with platinum filigree (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold locket with a painted portrait inside",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Gold locket with a painted portrait inside|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Gold locket with a painted portrait inside",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Gold locket with a painted portrait inside (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Gold music box",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold music box|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold music box",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold music box (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold pendant with black onyx (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Gold ring set with bloodstones",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold ring set with bloodstones|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Gold ring set with bloodstones",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Gold ring with turquoise (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Gold statuette set with rubies",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Gold Zino",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 100
    },
    {
      name: "Gold-plated ceremonial helmet and pauldrons (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Gold-plated sextant with topaz (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Goose Egg Trinket",
      source: "BGG",
      page: 150,
      type: "G",
      rarity: "none",
      entries: [
        "Sometimes, an egg laid by a {@creature giant goose|BGG} inexplicably contains some kind of small trinket or minor magic item. Once it lays a golden egg, a giant goose can't do so again for a year and a day.",
        "You can use the Goose Egg Trinket table to determine the contents of a golden egg. A giant goose's egg can be a great way to give characters an item that's important to the story of an adventure or your campaign.",
        {
          type: "table",
          caption: "Goose Egg Trinket",
          colLabels: [
            "d12",
            "Egg Contents"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "The egg is empty, but the inside of the shell is inscribed with a poem or an intricate illustration."
            ],
            [
              "2",
              "The gold shell encloses a candy egg."
            ],
            [
              "3",
              "The egg holds a small toy goose that makes a loud honking noise when squeezed."
            ],
            [
              "4",
              "The egg contains a {@item Potion of Hill Giant Strength||potion of giant strength (hill giant)} with no container."
            ],
            [
              "5",
              "The egg holds a {@item pearl of power}."
            ],
            [
              "6",
              "The egg contains a {@item brooch of shielding}."
            ],
            [
              "7",
              "The egg contains a {@item Figurine of Wondrous Power, Silver Raven||figurine of wondrous power (silver raven)} that activates automatically as the egg is opened, releasing what appears to be a living bird."
            ],
            [
              "8–12",
              "The egg is empty."
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Grappling Hook",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Grappling Hook|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 4,
      value: 200
    },
    {
      name: "Grappling Hook",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 4,
      value: 200,
      entries: [
        "As a {@action Utilize|XPHB} action, you can throw the Grappling Hook at a railing, a ledge, or another catch within 50 feet of yourself, and the hook catches on if you succeed on a {@dc 13} Dexterity ({@skill Acrobatics|XPHB}) check. If you tied a Rope to the hook, you can then climb it."
      ]
    },
    {
      name: "Grenade Launcher",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Grenade Launcher|XDMG"
      ],
      type: "G",
      rarity: "none",
      weight: 7,
      age: "modern",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|DMG}"
      ]
    },
    {
      name: "Grenade Launcher",
      source: "XDMG",
      page: 73,
      type: "G|XPHB",
      rarity: "none",
      weight: 7,
      valueRarity: "rare",
      age: "modern",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|XDMG}"
      ]
    },
    {
      name: "Gunpowder (keg)",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 20,
      value: 25000,
      entries: [
        "Setting fire to a keg full of Gunpowder causes it to explode. When a keg explodes, each creature in a 10-foot-radius {@variantrule Sphere [Area of Effect]|XPHB|Sphere} centered on the keg makes a {@dc 12} Dexterity saving throw, taking 24 ({@damage 7d6}) Fire damage on a failed save or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Gunpowder (powder horn)",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 2,
      value: 3500,
      entries: [
        "Setting fire to a powder horn full of Gunpowder causes it to explode. When a powder horn explodes, each creature in a 10-foot-radius {@variantrule Sphere [Area of Effect]|XPHB|Sphere} centered on the powder horn makes a {@dc 12} Dexterity saving throw, taking 10 ({@damage 3d6}) Fire damage on a failed save or half as much damage on a successful one."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Gunpowder Horn",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Gunpowder (powder horn)|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 2,
      value: 3500,
      age: "renaissance",
      entries: [
        "Gunpowder is chiefly used to propel a bullet out of the barrel of a pistol or rifle, or it is formed into a bomb. Gunpowder is sold in small wooden kegs or in water-resistant powder horns.",
        "Setting fire to a container full of gunpowder can cause it to explode, dealing fire damage to creatures within 10 feet of it ({@damage 3d6} for a powder horn). A successful {@dc 12} Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Gunpowder Keg",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Gunpowder (keg)|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 20,
      value: 25000,
      age: "renaissance",
      entries: [
        "Gunpowder is chiefly used to propel a bullet out of the barrel of a pistol or rifle, or it is formed into a bomb. Gunpowder is sold in small wooden kegs or in water-resistant powder horns.",
        "Setting fire to a container full of gunpowder can cause it to explode, dealing fire damage to creatures within 10 feet of it ({@damage 7d6} for a keg). A successful {@dc 12} Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Hammer",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 3,
      value: 100
    },
    {
      name: "Hammerhead Ship",
      source: "AAG",
      page: 32,
      otherSources: [
        {
          source: "SjA"
        }
      ],
      type: "SPC|AAG",
      rarity: "none",
      value: 4000000,
      crew: 15,
      vehAc: 15,
      vehHp: 400,
      vehDmgThresh: 15,
      vehSpeed: 4,
      capCargo: 30,
      entries: [
        "Hammerhead ships are popular craft, especially among pirates and merchants carrying heavy cargo. They can float on water and sail across it, but they aren't built to land on the ground (their keels would cause them to tip to one side). Standard weapons on a hammerhead ship include fore and aft mangonels, a ballista, and a reinforced bow for ramming."
      ],
      seeAlsoVehicle: [
        "Hammerhead Ship|AAG"
      ]
    },
    {
      name: "Handheld mirror set in a painted wooden frame",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Harbor Moon",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 5000,
      entries: [
        "Platinum crescent inset with electrum, about three inches long with a hole large enough for a {@item nib|wdh} to fit in (1 harbor moon = 5,000 {@item nib|wdh|nibs})"
      ]
    },
    {
      name: "Healer's Kit",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Healer's Kit|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 3,
      value: 500,
      entries: [
        "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom ({@skill Medicine}) check."
      ],
      hasFluffImages: true
    },
    {
      name: "Healer's Kit",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 3,
      value: 500,
      entries: [
        "A Healer's Kit has ten uses. As a {@action Utilize|XPHB} action, you can expend one of its uses to stabilize an {@condition Unconscious|XPHB} creature that has 0 {@variantrule Hit Points|XPHB} without needing to make a Wisdom ({@skill Medicine|XPHB}) check."
      ]
    },
    {
      name: "Hematite",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Hematite|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque gray-black gemstone."
      ]
    },
    {
      name: "Hematite",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A gray black gemstone."
      ]
    },
    {
      name: "Hempen Rope (50 feet)",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Rope|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 10,
      value: 100,
      entries: [
        "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a {@dc 17} Strength check."
      ]
    },
    {
      name: "Herbalism Kit",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 82
        }
      ],
      reprintedAs: [
        "Herbalism Kit|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 3,
      value: 500,
      entries: [
        "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."
      ],
      additionalEntries: [
        "Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "Your knowledge of the nature and uses of herbs can add insight to your magical studies that deal with plants and your attempts to identify potions."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you inspect an area overgrown with plants, your proficiency can help you pick out details and clues that others might miss."
          ]
        },
        {
          type: "entries",
          name: "Medicine",
          entries: [
            "Your mastery of herbalism improves your ability to treat illnesses and wounds by augmenting your methods of care with medicinal plants."
          ]
        },
        {
          type: "entries",
          name: "Nature and Survival",
          entries: [
            "When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook."
          ]
        },
        {
          type: "entries",
          name: "Identify Plants",
          entries: [
            "You can identify most plants with a quick inspection of their appearance and smell."
          ]
        },
        {
          type: "table",
          caption: "Herbalism Kit",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Find plants",
              "15"
            ],
            [
              "Identify poison",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Herbalism Kit",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 3,
      value: 500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Identify a plant ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Antitoxin|XPHB}, {@item Candle|XPHB}, {@item Healer's Kit|XPHB}, {@item Potion of Healing|XDMG}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Holy Water",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        "When you take the {@action Attack|XPHB} action, you can replace one of your attacks with throwing a flask of Holy Water. Target one creature you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw ({@dc 8} plus your Dexterity modifier and {@variantrule Proficiency|XPHB|Proficiency Bonus}) or take {@damage 2d8} Radiant damage if it is a Fiend or an Undead."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Holy Water (flask)",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Holy Water|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes {@damage 2d6} radiant damage.",
        "A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Hooded Lantern",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Hooded Lantern|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 500,
      entries: [
        "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        },
        {
          dim: 5
        }
      ]
    },
    {
      name: "Hooded Lantern",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 500,
      entries: [
        "A Hooded Lantern burns Oil as fuel to cast {@variantrule Bright Light|XPHB} in a 30-foot radius and {@variantrule Dim Light|XPHB} for an additional 30 feet. As a {@variantrule Bonus Action|XPHB}, you can lower the hood, reducing the light to {@variantrule Dim Light|XPHB} in a 5-foot radius, or raise it again."
      ],
      light: [
        {
          bright: 30,
          dim: 60
        },
        {
          dim: 5
        }
      ]
    },
    {
      name: "Horror Trinket",
      source: "VRGR",
      page: 36,
      type: "G",
      rarity: "none",
      entries: [
        "Before you finish making a character, roll once on the Horror Trinkets table for a unique object your character has with them at the start of their adventuring career. These trinkets hint toward various horrific tales and might lead to dreadful revelations or be nothing more than grim keepsakes. At the DM's discretion any of these trinkets might also be a Mist talisman (detailed in {@book chapter 3|VRGR|3|Mist Talismans}), a focal item that can lead the bearer through the Mists to a particular Domain of Dread.",
        {
          type: "table",
          caption: "Horror Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01",
              "A picture you drew as a child of your imaginary friend"
            ],
            [
              "02",
              "A lock that opens when blood is dripped in its keyhole"
            ],
            [
              "03",
              "Clothes stolen from a scarecrow"
            ],
            [
              "04",
              "A spinning top carved with four faces: happy, sad, wrathful, and dead"
            ],
            [
              "05",
              "The necklace of a sibling who died on the day you were born"
            ],
            [
              "06",
              "A wig from someone executed by beheading"
            ],
            [
              "07",
              "The unopened letter to you from your dying father"
            ],
            [
              "08",
              "A pocket watch that runs backward for an hour every midnight"
            ],
            [
              "09",
              "A winter coat stolen from a dying soldier"
            ],
            [
              "10",
              "A bottle of invisible ink that can only be read at sunset"
            ],
            [
              "11",
              "A wineskin that refills when interred with a dead person for a night"
            ],
            [
              "12",
              "A set of silverware used by a king for his last meal"
            ],
            [
              "13",
              "A spyglass that always shows the world suffering a terrible storm"
            ],
            [
              "14",
              "A cameo with the profile's face scratched away"
            ],
            [
              "15",
              "A lantern with a black candle that never runs out and that burns with green flame"
            ],
            [
              "16",
              "A teacup from a child's tea set, stained with blood"
            ],
            [
              "17",
              "A little black book that records your dreams, and yours alone, when you sleep"
            ],
            [
              "18",
              "A necklace formed of the interlinked holy symbols of a dozen deities"
            ],
            [
              "19",
              "A noose that feels heavier than it should"
            ],
            [
              "20",
              "A birdcage into which small birds fly but once inside never eat or leave"
            ],
            [
              "21",
              "A lepidopterist's box filled with dead moths with skull-like patterns on their wings"
            ],
            [
              "22",
              "A jar of pickled ghouls' tongues"
            ],
            [
              "23",
              "The wooden hand of a notorious pirate"
            ],
            [
              "24",
              "A urn with the ashes of a dead relative"
            ],
            [
              "25",
              "A hand mirror backed with a bronze depiction of a medusa"
            ],
            [
              "26",
              "Pallid leather gloves crafted with ivory fingernails"
            ],
            [
              "27",
              "Dice made from the knuckles of a notorious charlatan"
            ],
            [
              "28",
              "A ring of keys for forgotten locks"
            ],
            [
              "29",
              "Nails from the coffin of a murderer"
            ],
            [
              "30",
              "A key to the family crypt"
            ],
            [
              "31",
              "A bouquet of funerary flowers that always looks and smells fresh"
            ],
            [
              "32",
              "A switch used to discipline you as a child"
            ],
            [
              "33",
              "A music box that plays by itself whenever someone holding it dances"
            ],
            [
              "34",
              "A walking cane with an iron ferrule that strikes sparks on stone"
            ],
            [
              "35",
              "A flag from a ship lost at sea"
            ],
            [
              "36",
              "A porcelain doll's head that always seems to be looking at you"
            ],
            [
              "37",
              "A wolf's head wrought in silver that is also a whistle"
            ],
            [
              "38",
              "A small mirror that shows a much older version of the viewer"
            ],
            [
              "39",
              "A small, worn book of children's nursery rhymes"
            ],
            [
              "40",
              "A mummified raven claw"
            ],
            [
              "41",
              "A broken pendant of a silver dragon that's always cold to the touch"
            ],
            [
              "42",
              "A small locked box that quietly hums a lovely melody at night, but you always forget it in the morning"
            ],
            [
              "43",
              "An inkwell that makes one a little nauseous when staring at it"
            ],
            [
              "44",
              "An old doll made from a dark, dense wood and missing a hand and a foot"
            ],
            [
              "45",
              "A black executioner's hood"
            ],
            [
              "46",
              "A pouch made of flesh, with a sinew drawstring"
            ],
            [
              "47",
              "A tiny spool of black thread that never runs out"
            ],
            [
              "48",
              "A tiny clockwork figurine of a dancer that's missing a gear and doesn't work"
            ],
            [
              "49",
              "A black wooden pipe that creates puffs of smoke that look like skulls"
            ],
            [
              "50",
              "A vial of perfume, the scent of which only certain creatures can detect"
            ],
            [
              "51",
              "A stone that emits a single endless sigh"
            ],
            [
              "52",
              "A rag doll with two red dots on its neck"
            ],
            [
              "53",
              "A spring-loaded toy with a missing crank"
            ],
            [
              "54",
              "A mason jar containing a harmless but agitated, animate ooze"
            ],
            [
              "55",
              "A black wooden die with 1's on all the faces"
            ],
            [
              "56",
              "A child's portrait with \"born\" written on the back, along with next year's date"
            ],
            [
              "57",
              "A dagger-sized shark tooth"
            ],
            [
              "58",
              "A finger that's taken root in a small pot"
            ],
            [
              "59",
              "A toolbox containing the remains of a dangerous but broken clockwork arachnid"
            ],
            [
              "60",
              "A pitcher-sized, opalescent snail shell that occasionally, inexplicably shudders or tips over"
            ],
            [
              "61",
              "The logbook of an ice-breaking ship called The Haifisch"
            ],
            [
              "62",
              "A small portrait of you as a child, alongside your identically dressed twin"
            ],
            [
              "63",
              "A silver pocket watch with thirteen hours marked on the face"
            ],
            [
              "64",
              "A woodcut of a wolf devouring its own hind leg"
            ],
            [
              "65",
              "A planchette etched with raven skulls"
            ],
            [
              "66",
              "A moist coral figurine of a lamprey with arms, legs, and a bipedal stance"
            ],
            [
              "67",
              "A bronze fingertrap sculpted with roaring tigers"
            ],
            [
              "68",
              "A pearl necklace that turns red under the full moon"
            ],
            [
              "69",
              "A fossil of a fish with humanoid features"
            ],
            [
              "70",
              "A plague doctor's mask"
            ],
            [
              "71",
              "A paper talisman with smudged ink"
            ],
            [
              "72",
              "A locket containing the smeared image of an eyeless figure"
            ],
            [
              "73",
              "A canopic jar with a lid sculpted like a goat"
            ],
            [
              "74",
              "A jack-o'-lantern made from a small, pale gourd"
            ],
            [
              "75",
              "A single high-heeled, iron shoe"
            ],
            [
              "76",
              "A candle made from a severed hand"
            ],
            [
              "77",
              "A clockwork device that beats like a heart"
            ],
            [
              "78",
              "A blank masquerade mask"
            ],
            [
              "79",
              "A glass eye with a live worm inside"
            ],
            [
              "80",
              "A sheet with two eyeholes cut in it"
            ],
            [
              "81",
              "The deed to someplace called Tergeron Manor"
            ],
            [
              "82",
              "An ornate, wax-sealed crimson envelope that resists all attempts to open it"
            ],
            [
              "83",
              "A mourning veil trimmed in black lace"
            ],
            [
              "84",
              "A straitjacket covered in charcoal runes"
            ],
            [
              "85",
              "A tattered, burlap mask with a crooked smile painted on it"
            ],
            [
              "86",
              "A green ribbon designed to be worn as a choker"
            ],
            [
              "87",
              "Dentures with mismatched, sharpened teeth"
            ],
            [
              "88",
              "A warm, fist-sized egg case"
            ],
            [
              "89",
              "A copper ring with \"mine\" engraved on the inside"
            ],
            [
              "90",
              "A glass ampoule containing a neon green fluid"
            ],
            [
              "91",
              "An eye patch embroidered with a holy symbol"
            ],
            [
              "92",
              "A severed big toe with a nail that continues to grow"
            ],
            [
              "93",
              "A journal that has been heavily redacted"
            ],
            [
              "94",
              "A glove with a mouth-like design stitched on the palm"
            ],
            [
              "95",
              "An ornate but empty reliquary made of silver and fractured glass"
            ],
            [
              "96",
              "A ceramic figure of a cat with too many eyes"
            ],
            [
              "97",
              "A crumpled paper ticket bearing the words \"admit none\""
            ],
            [
              "98",
              "An electrum coin with your face on one side"
            ],
            [
              "99",
              "A shrunken gremishka head that twitches when anyone casts magic nearby"
            ],
            [
              "100",
              "A sunburst amulet with a red stone at the center"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Hourglass",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 1,
      value: 2500
    },
    {
      name: "Hunk of Cheese",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Cheese (wedge)|XPHB"
      ],
      type: "FD",
      rarity: "none",
      value: 10,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Hunting Trap",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Hunting Trap|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 25,
      value: 500,
      entries: [
        "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a {@dc 13} Dexterity saving throw or take {@damage 1d4} piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a {@dc 13} Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
      ]
    },
    {
      name: "Hunting Trap",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 25,
      value: 500,
      entries: [
        "As a {@action Utilize|XPHB} action, you can set a Hunting Trap, which is a sawtooth steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a {@dc 13} Dexterity saving throw or take {@damage 1d4} Piercing damage and have its {@variantrule Speed|XPHB} reduced to 0 until the start of its next turn. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet). A creature can use its action to make a {@dc 13} Strength ({@skill Athletics|XPHB}) check, freeing itself or another creature within its reach on a success. Each failed check deals 1 Piercing damage to the trapped creature."
      ]
    },
    {
      name: "Icewind Dale Trinket",
      source: "IDRotF",
      page: 263,
      type: "G",
      rarity: "none",
      entries: [
        {
          type: "table",
          caption: "Icewind Dale Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01–04",
              "A small wooden figurine of a yawning walrus, painted in red and black"
            ],
            [
              "05–08",
              "A pair of scrimshaw cufflinks with an image of a fisherman on a boat engraved on them"
            ],
            [
              "09–12",
              "A small iron key with a frayed blue and gold cord tied to it"
            ],
            [
              "13–16",
              "A small illustrated book of Northlander myths that has pages missing"
            ],
            [
              "17–20",
              "A damaged scrimshaw cameo depicting a merfolk"
            ],
            [
              "21–24",
              "A stone from a burial cairn with a tiny Dwarvish rune carved into it"
            ],
            [
              "25–28",
              "A ripped cloth sail with a symbol you don't recognize"
            ],
            [
              "29–32",
              "An Ulu knife with a scrimshaw handle"
            ],
            [
              "33–36",
              "A jar containing an unidentifiable, sweet, sticky substance"
            ],
            [
              "37–40",
              "A delicate glass ball painted with snowflakes, capped by a metal loop with a tiny hook attached to it"
            ],
            [
              "41–44",
              "An expedition log with missing pages and a pressed flower used as a bookmark"
            ],
            [
              "45–48",
              "An owl figurine carved from whalebone"
            ],
            [
              "49–52",
              "A sewing box that smells of old wood and has three spools of blue thread inside"
            ],
            [
              "53–56",
              "A scrimshaw-handled ink pen with black runic designs along its length"
            ],
            [
              "57–60",
              "A brooch made from a small insect encased in amber"
            ],
            [
              "61–64",
              "A scrimshaw pepper shaker etched with the letter W"
            ],
            [
              "65–68",
              "An old, wooden-handled ice pick stained with blood that won't wash off"
            ],
            [
              "69–72",
              "A fabric doll bearing an angry expression"
            ],
            [
              "73–76",
              "A set of wind chimes made from seashells"
            ],
            [
              "77–80",
              "A beautiful silver tin that, when opened, emits the smell of rotting fish"
            ],
            [
              "81–84",
              "A bloodstained dreamcatcher made from fishing line, gold wire, and snowy owlbear feathers"
            ],
            [
              "85–88",
              "A figurine of a polar bear made of ice that never melts"
            ],
            [
              "89–92",
              "A snow globe that doesn't need to be shaken"
            ],
            [
              "93–96",
              "A piece of sea glass shaped like a unicorn's horn"
            ],
            [
              "97–00",
              "A dark blue scarf that gets lighter in shade the higher the altitude of the wearer"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ],
      hasFluffImages: true
    },
    {
      name: "Ink",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 1000,
      entries: [
        "Ink comes in a 1-ounce bottle, which provides enough ink to write about 500 pages."
      ]
    },
    {
      name: "Ink (1-ounce bottle)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ink|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 1000,
      entries: [
        "Ink (1-ounce bottle)"
      ]
    },
    {
      name: "Ink Pen",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ink Pen|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 2
    },
    {
      name: "Ink Pen",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 2,
      entries: [
        "Using {@item Ink|XPHB}, an Ink Pen is used to write or draw."
      ]
    },
    {
      name: "Insect Repellent (block of incense)",
      source: "ToA",
      page: 32,
      type: "G",
      rarity: "none",
      value: 10,
      charges: 1,
      entries: [
        "Insect repellent can be purchased in Port Nyanzaru in two forms: blocks of incense or a greasy salve. The merchant prince Kwayothe controls the sale of both. Neither kind of repellent protects against giant insects or the vile swarms of insects described in appendix A of the Monster Manual.",
        "When lit, it burns for 8 hours and repels normal insects within a 20-foot-radius centered on it."
      ]
    },
    {
      name: "Insect Repellent (greasy salve)",
      source: "ToA",
      page: 32,
      type: "G",
      rarity: "none",
      value: 100,
      charges: 20,
      entries: [
        "Insect repellent can be purchased in Port Nyanzaru in two forms: blocks of incense or a greasy salve. The merchant prince Kwayothe controls the sale of both. Neither kind of repellent protects against giant insects or the vile swarms of insects described in appendix A of the Monster Manual.",
        "A gourd or vial of salve contains 20 applications of odorless grease. One application protects its wearer against normal insects for 24 hours. The salve is waterproof so it doesn't wash off in rain."
      ]
    },
    {
      name: "Iron",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Iron|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 10
    },
    {
      name: "Iron",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 10
    },
    {
      name: "Iron Pot",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Iron Pot|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 10,
      value: 200,
      entries: [
        "An iron pot holds 1 gallon of liquid."
      ]
    },
    {
      name: "Iron Pot",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 10,
      value: 200,
      entries: [
        "An Iron Pot holds up to 1 gallon."
      ],
      containerCapacity: {
        volume: [
          0.1
        ]
      }
    },
    {
      name: "Iron Spike",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Iron Spike|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 0.5,
      value: 10
    },
    {
      name: "Iron Spike",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 0.5,
      value: 10,
      entries: [
        "Iron Spikes come in bundles of ten. As a {@action Utilize|XPHB} action, you can use a blunt object, such as a {@item Light Hammer|XPHB}, to hammer a spike into wood, earth, or a similar material. You can do so to jam a door shut or to then tie a {@item Rope|XPHB} or {@item Chain|XPHB} to the Spike."
      ]
    },
    {
      name: "Iron Spikes",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        "Iron Spikes come in bundles of ten. As a {@action Utilize|XPHB} action, you can use a blunt object, such as a {@item Light Hammer|XPHB}, to hammer a spike into wood, earth, or a similar material. You can do so to jam a door shut or to then tie a {@item Rope|XPHB} or {@item Chain|XPHB} to the Spike."
      ],
      packContents: [
        {
          item: "iron spike|xphb",
          quantity: 10
        }
      ]
    },
    {
      name: "Iron Spikes (10)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Iron Spikes|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 100,
      packContents: [
        {
          item: "iron spike|phb",
          quantity: 10
        }
      ]
    },
    {
      name: "Jacinth",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Jacinth|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A transparent fiery orange gemstone."
      ]
    },
    {
      name: "Jacinth",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A fiery orange gemstone."
      ]
    },
    {
      name: "Jade",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Jade|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A translucent light green, deep green, or white gemstone."
      ]
    },
    {
      name: "Jade",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A light green, deep green, or white gemstone."
      ]
    },
    {
      name: "Jade bowl (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Jade breastplate (River Heralds)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jade game board with gold playing pieces",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jade game board with solid gold playing pieces",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Jade game board with gold playing pieces|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jade headpiece (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Jade sword with amber (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Jade totem with diamond eyes (River Heralds)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jasper",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Jasper|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque blue, black, or brown gemstone."
      ]
    },
    {
      name: "Jasper",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A blue, black, or brown gemstone."
      ]
    },
    {
      name: "Jet",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Jet|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "An opaque deep black gemstone."
      ]
    },
    {
      name: "Jet",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A deep black gemstone."
      ]
    },
    {
      name: "Jeweled anklet",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Jeweled anklet|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Jeweled anklet",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Jeweled anklet (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Jeweled gold crown",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Jeweled gold crown|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jeweled gold crown",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jeweled platinum ring",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Jeweled platinum ring|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jeweled platinum ring",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Jeweler's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 82
        }
      ],
      reprintedAs: [
        "Jeweler's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 2,
      value: 2500,
      additionalEntries: [
        "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "Proficiency with jeweler's tools grants you knowledge about the reputed mystical uses of gems. This insight proves handy when you make {@skill Arcana} checks related to gems or gem-encrusted items."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you inspect jeweled objects, your proficiency with jeweler's tools aids you in picking out clues they might hold."
          ]
        },
        {
          type: "entries",
          name: "Identify Gems",
          entries: [
            "You can identify gems and determine their value at a glance."
          ]
        },
        {
          type: "table",
          caption: "Jeweler's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Modify a gem's appearance",
              "15"
            ],
            [
              "Determine a gem's history",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Jeweler's Tools",
      source: "XPHB",
      page: 220,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 2,
      value: 2500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern a gem's value ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Arcane Focus|XPHB}, {@item Holy Symbol|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Jug",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Jug|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 4,
      value: 2,
      entries: [
        "A jug holds 1 gallon of liquid."
      ]
    },
    {
      name: "Jug",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 4,
      value: 2,
      entries: [
        "A Jug holds up to 1 gallon."
      ],
      containerCapacity: {
        volume: [
          0.1
        ]
      }
    },
    {
      name: "Keelboat",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Keelboat|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      value: 300000,
      crew: 1,
      vehAc: 15,
      vehHp: 100,
      vehDmgThresh: 10,
      vehSpeed: 1,
      capPassenger: 6,
      capCargo: 0.5,
      entries: [
        "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores."
      ],
      seeAlsoVehicle: [
        "Keelboat"
      ]
    },
    {
      name: "Keelboat",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 300000,
      crew: 1,
      vehAc: 15,
      vehHp: 100,
      vehDmgThresh: 10,
      vehSpeed: 1,
      capPassenger: 6,
      capCargo: 0.5,
      seeAlsoVehicle: [
        "Keelboat"
      ]
    },
    {
      name: "Keg of Alchemist's Fire",
      source: "LoX",
      page: 35,
      type: "G",
      rarity: "none",
      entries: [
        "A keg of alchemist's fire lobbed at a creature or an object deals 21 ({@damage 6d6}) fire damage on a hit. Further, the target is set ablaze and takes the damage again every round (in the case of a creature, at the start of each of its turns) until the fire is put out. A creature within reach of the blaze can take an action to smother the flames using a blanket or carpet, reducing the fire damage by {@dice 2d6}. Three such actions are needed to fully put out the fire."
      ]
    },
    {
      name: "Khyber Trinket",
      source: "ERLW",
      page: 135,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from Khyber",
          colLabels: [
            "d10",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A pressed flower with vivid green petals; when you smell it, you hear eerie music"
            ],
            [
              "2",
              "A tiny ball of putty; if you set it down, it begins to slowly crawl around"
            ],
            [
              "3",
              "A perpetually warm disk of dark iron"
            ],
            [
              "4",
              "A small journal with leathery pages; any words you write in it slowly disappear"
            ],
            [
              "5",
              "A four-sided die carved with strange markings"
            ],
            [
              "6",
              "A cameo with the silhouette of an unknown species"
            ],
            [
              "7",
              "A preserved finger with purple flesh and four joints"
            ],
            [
              "8",
              "A perfectly preserved eye; if you set it down, it rotates to follow your movement"
            ],
            [
              "9",
              "A small box; when opened, you alone hear screaming"
            ],
            [
              "10",
              "A preserved insect; you've never seen another like it"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Ladder",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 25,
      value: 10,
      entries: [
        "A Ladder is 10 feet tall. You must climb to move up or down it."
      ]
    },
    {
      name: "Ladder (10-foot)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ladder|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 25,
      value: 10,
      entries: [
        "Ladder (10-foot)"
      ]
    },
    {
      name: "Lamp",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Lamp|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
      ],
      light: [
        {
          bright: 15,
          dim: 45
        }
      ]
    },
    {
      name: "Lamp",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "A Lamp burns {@item Oil|XPHB} as fuel to cast {@variantrule Bright Light|XPHB} in a 15-foot radius and {@variantrule Dim Light|XPHB} for an additional 30 feet."
      ],
      light: [
        {
          bright: 15,
          dim: 45
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Lamprey Ship",
      source: "AAG",
      page: 34,
      type: "SPC|AAG",
      rarity: "none",
      value: 2000000,
      crew: 15,
      vehAc: 15,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 4,
      capCargo: 6,
      entries: [
        "Lamprey ships are antiquated, being among the oldest spelljamming ships still in use. Psurlons (see Boo's Astral Menagerie) are particularly fond of them.",
        "Using the metal grappling jaws built into its bow, a lamprey ship can attach itself to another ship, which is a critical feature during boarding actions. Other standard weapons include four ballistae on the main deck.",
        "A lamprey can float on water, though it can't land safely on the ground. Lamprey ships that land on the ground have the distressing habit of rolling over, as more than a few crews have discovered to their dismay."
      ],
      seeAlsoVehicle: [
        "Lamprey Ship|AAG"
      ]
    },
    {
      name: "Lapis Lazuli",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Lapis Lazuli|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque light and dark blue with yellow flecks gemstone."
      ]
    },
    {
      name: "Lapis Lazuli",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A light and dark blue with yellow flecks gemstone."
      ]
    },
    {
      name: "Large gold bracelet",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Bejeweled gold bracelet|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Large gold bracelet (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Large jade totem (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Large well-made tapestry",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Well-made tapestry that is 10 feet by 10 feet|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Large well-made tapestry (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Leatherworker's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 82
        }
      ],
      reprintedAs: [
        "Leatherworker's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 500,
      additionalEntries: [
        "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps."
          ]
        },
        {
          type: "entries",
          name: "Arcana",
          entries: [
            "Your expertise in working with leather grants you added insight when you inspect magic items crafted from leather, such as boots and some cloaks."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "You gain added insight when studying leather items or clues related to them, as you draw on your knowledge of leather to pick out details that others would overlook."
          ]
        },
        {
          type: "entries",
          name: "Identify Hides",
          entries: [
            "When looking at a hide or a leather item, you can determine the source of the leather and any special techniques used to treat it. For example, you can spot the difference between leather crafted using dwarven methods and leather crafted using halfling methods."
          ]
        },
        {
          type: "table",
          caption: "Leatherworker's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Modify a leather item's appearance",
              "10"
            ],
            [
              "Determine a leather item's history",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Leatherworker's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Add a design to a leather item ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Sling|XPHB}, {@item Whip|XPHB}, {@item Hide Armor|XPHB}, {@item Leather Armor|XPHB}, {@item Studded Leather Armor|XPHB}, {@item Backpack|XPHB}, {@item Crossbow Bolt Case|XPHB}, {@item Map or Scroll Case|XPHB}, {@item Parchment|XPHB}, {@item Pouch|XPHB}, {@item Quiver|XPHB}, {@item Waterskin|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Linen (1 sq. yd.)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Linen (1 sq. yd.)|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 500
    },
    {
      name: "Linen (1 sq. yd.)",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 500
    },
    {
      name: "Living Ship",
      source: "AAG",
      page: 36,
      type: "SPC|AAG",
      rarity: "none",
      value: 2500000,
      crew: 5,
      vehAc: 15,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 4.5,
      capCargo: 10,
      entries: [
        "Druids, rangers, and clerics devoted to gods of nature are often found aboard living ships, as are Wildspace explorers who don't want to have to worry about their ship's air envelope becoming fouled during a long voyage.",
        "This ship's main distinctive feature is the fully grown {@creature treant} on the aft deck. The treant has a speed of 0 because its roots are woven into the deck; it and the ship are inseparable. If the ship is reduced to 0 hit points, the treant dies of shock. The ship can function if its treant dies, but the treant can never be replaced with another.",
        "When the treant finishes a long rest, it repairs the ship's hull, enabling the ship to regain {@dice 4d12} hit points, and refreshes the ship's air envelope (turning deadly air into foul air, or foul air into fresh air).",
        "A living ship can float on water and sail across it, but it can't land safely on the ground (its keel would cause it to roll on its side). Its standard weaponry is an aft-mounted ballista."
      ],
      seeAlsoVehicle: [
        "Living Ship|AAG"
      ]
    },
    {
      name: "Loaf of Bread",
      source: "PHB",
      page: 158,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Bread (loaf)|XPHB"
      ],
      type: "FD",
      rarity: "none",
      value: 2,
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Lock",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Lock|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 1000,
      entries: [
        "A key is provided with the lock. Without the key, a creature proficient with {@item thieves' tools|phb} can pick this lock with a successful {@dc 15} Dexterity check. Your DM may decide that better locks are available for higher prices."
      ]
    },
    {
      name: "Lock",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 1000,
      entries: [
        "A Lock comes with a key. Without the key, a creature can use {@item Thieves' Tools|XPHB} to pick this Lock with a successful {@dc 15} Dexterity ({@skill Sleight of Hand|XPHB}) check."
      ]
    },
    {
      name: "Lolth's Sting",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "A creature subjected to Lolth's Sting must succeed on a {@dc 13} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 1 hour. If the creature fails the save by 5 or more, the creature also has the {@condition Unconscious|XPHB} condition while {@condition Poisoned|XPHB} in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Longship",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Longship|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      value: 1000000,
      crew: 40,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 3,
      capPassenger: 150,
      capCargo: 10,
      seeAlsoVehicle: [
        "Longship"
      ]
    },
    {
      name: "Longship",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 1000000,
      crew: 40,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 3,
      capPassenger: 150,
      capCargo: 10,
      seeAlsoVehicle: [
        "Longship"
      ]
    },
    {
      name: "Lorehold Trinket",
      source: "SCC",
      page: 31,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you may roll once on the Lorehold Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
        {
          caption: "Lorehold Trinkets",
          colLabels: [
            "d6",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A map made of concentric circles that can be rotated around the page"
            ],
            [
              "2",
              "A puzzle box bedecked with amber"
            ],
            [
              "3",
              "A dented brass compass with a red needle"
            ],
            [
              "4",
              "The head of a broken statue that houses the consciousness of a snarky sage"
            ],
            [
              "5",
              "A sheet of parchment embossed with tactile lettering, glowing red"
            ],
            [
              "6",
              "A broken dagger with a wavy blade and a serpentine hilt"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Lute crafted of exotic wood with mother-of-pearl inlay and zircon gems (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Magnifying Glass",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Magnifying Glass|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 10000,
      entries: [
        "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
      ]
    },
    {
      name: "Magnifying Glass",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 10000,
      entries: [
        "A Magnifying Glass grants {@variantrule Advantage|XPHB} on any ability check made to appraise or inspect a highly detailed item. Lighting a fire with a Magnifying Glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite."
      ]
    },
    {
      name: "Malachite",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Malachite|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque striated light and dark green gemstone."
      ]
    },
    {
      name: "Malachite",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A striated light and dark green gemstone."
      ]
    },
    {
      name: "Malice",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Malice|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 25000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for 1 hour. The {@condition poisoned} creature is {@condition blinded}."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Malice",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 25000,
      poison: true,
      entries: [
        "A creature subjected to Malice must succeed on a {@dc 15} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 1 hour. The creature also has the {@condition Blinded|XPHB} condition while {@condition Poisoned|XPHB} in this way."
      ],
      poisonTypes: [
        "inhaled"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Manacles",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Manacles|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 6,
      value: 200,
      entries: [
        "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful {@dc 20} Dexterity check. Breaking them requires a successful {@dc 20} Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with {@item thieves' tools|PHB} can pick the manacles' lock with a successful {@dc 15} Dexterity check. Manacles have 15 hit points."
      ]
    },
    {
      name: "Manacles",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 6,
      value: 200,
      entries: [
        "As a {@action Utilize|XPHB} action, you can use Manacles to bind an unwilling Small or Medium creature within 5 feet of yourself that has the {@condition Grappled|XPHB}, {@condition Incapacitated|XPHB}, or {@condition Restrained|XPHB} condition if you succeed on a {@dc 13} Dexterity ({@skill Sleight of Hand|XPHB}) check. While bound, a creature has {@variantrule Disadvantage|XPHB} on attack rolls, and the creature is {@condition Restrained|XPHB} if the Manacles are attached to a chain or hook that is fixed in place. Escaping the Manacles requires a successful {@dc 20} Dexterity ({@skill Sleight of Hand|XPHB}) check as an action. Bursting them requires a successful {@dc 25} Strength ({@skill Athletics|XPHB}) check as an action.",
        "Each set of Manacles comes with a key. Without the key, a creature can use {@item Thieves' Tools|XPHB} to pick the Manacles' lock with a successful {@dc 15} Dexterity ({@skill Sleight of Hand|XPHB}) check."
      ]
    },
    {
      name: "Map",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 100,
      entries: [
        "If you consult an accurate Map, you gain a +5 bonus to Wisdom ({@skill Survival|XPHB}) checks you make to find your way in the place represented on it."
      ]
    },
    {
      name: "Map or Scroll Case",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Map or Scroll Case|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "This cylindrical leather case can hold up to ten rolled-up {@item paper (one sheet)|phb|sheets of paper} or five rolled-up {@item parchment (one sheet)|phb|sheets of parchment}."
      ],
      containerCapacity: {
        item: [
          {
            "parchment (one sheet)|phb": 5,
            "paper (one sheet)|phb": 10
          }
        ]
      }
    },
    {
      name: "Map or Scroll Case",
      source: "XPHB",
      page: 224,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "A {@item Map or Scroll Case|XPHB} holds up to 10 sheets of paper or 5 sheets of parchment."
      ],
      containerCapacity: {
        item: [
          {
            "parchment|xphb": 5,
            "paper|xphb": 10
          }
        ]
      }
    },
    {
      name: "Marble font with gold inlay (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Mason's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 83
        }
      ],
      reprintedAs: [
        "Mason's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 8,
      value: 1000,
      additionalEntries: [
        "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Your expertise aids you in identifying a stone building's date of construction and purpose, along with insight into who might have built it."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "You gain additional insight when inspecting areas within stone structures."
          ]
        },
        {
          type: "entries",
          name: "Perception",
          entries: [
            "You can spot irregularities in stone walls or floors, making it easier to find trap doors and secret passages."
          ]
        },
        {
          type: "entries",
          name: "Demolition",
          entries: [
            "Your knowledge of masonry allows you to spot weak points in brick walls. You deal double damage to such structures with your weapon attacks."
          ]
        },
        {
          type: "table",
          caption: "Mason's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Chisel a small hole in a stone wall",
              "10"
            ],
            [
              "Find a weak point in a stone wall",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Mason's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 8,
      value: 1000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Strength"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Chisel a symbol or hole in stone ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Block and Tackle|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Masterpiece painting in mahogany frame with gold inlay (Legion of Dusk)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Mastiff",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Mastiff|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 2500,
      carryingCapacity: 195,
      speed: 40
    },
    {
      name: "Mastiff",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 2500,
      carryingCapacity: 195,
      speed: 40
    },
    {
      name: "Merchant's Scale",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 3,
      value: 500,
      entries: [
        "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
      ]
    },
    {
      name: "Mess Kit",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 1,
      value: 20,
      entries: [
        "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
      ]
    },
    {
      name: "Midnight Tears",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Midnight Tears|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 150000,
      poison: true,
      entries: [
        "A creature that ingests this poison suffers no effect until the stroke of midnight. If the poison has not been neutralized before then, the creature must succeed on a {@dc 17} Constitution saving throw, taking 31 ({@damage 9d6}) poison damage on a failed save, or half as much damage on a successful one."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Midnight Tears",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 150000,
      poison: true,
      entries: [
        "A creature that ingests Midnight Tears suffers no effect until the stroke of midnight. Any effect that ends the {@condition Poisoned|XPHB} condition neutralizes this poison. If the poison hasn't been neutralized before midnight, the creature makes a {@dc 17} Constitution saving throw, taking 31 ({@damage 9d6}) Poison damage on a failed save or half as much damage on a successful one."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Military Saddle",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Military Saddle|XPHB"
      ],
      type: "TAH",
      rarity: "none",
      weight: 30,
      value: 2000,
      entries: [
        "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted."
      ]
    },
    {
      name: "Military Saddle",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "TAH|XPHB",
      rarity: "none",
      weight: 30,
      value: 2000,
      entries: [
        "A saddle comes with a bit, a bridle, reins, and any other equipment needed to use the saddle. A Military Saddle gives {@variantrule Advantage|XPHB} on any ability check you make to remain mounted."
      ]
    },
    {
      name: "Miner's Pick",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 10,
      value: 200
    },
    {
      name: "Mirror",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 0.5,
      value: 500,
      entries: [
        "A handheld steel Mirror is useful for personal cosmetics but also for peeking around corners and reflecting light as a signal."
      ]
    },
    {
      name: "Monster Hunter's Pack",
      source: "VRGR",
      page: 34,
      otherSources: [
        {
          source: "CoS",
          page: 209
        }
      ],
      type: "G",
      rarity: "none",
      weight: 48.5,
      value: 3300,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item chest|phb}",
            "a {@item crowbar|phb}",
            "a {@item hammer|phb}",
            "three wooden stakes",
            "a {@item holy symbol|phb}",
            "a {@item holy water (flask)|phb|flask of holy water}",
            "a set of {@item manacles|phb}",
            "a {@item steel mirror|phb}",
            "a {@item oil (flask)|phb|flask of oil}",
            "a {@item tinderbox|phb}",
            "3 {@item torch|phb|torches}"
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "chest|phb",
        "crowbar|phb",
        "hammer|phb",
        {
          special: "wooden stake",
          quantity: 3
        },
        "holy symbol|phb",
        "holy water (flask)|phb",
        "manacles|phb",
        "steel mirror|phb",
        "oil (flask)|phb",
        "tinderbox|phb",
        {
          item: "torch|phb",
          quantity: 3
        }
      ]
    },
    {
      name: "Moonstone",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Moonstone|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A translucent white with pale blue glow gemstone."
      ]
    },
    {
      name: "Moonstone",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A white with pale-blue glow gemstone."
      ]
    },
    {
      name: "Moorbounder",
      source: "EGW",
      page: 132,
      type: "MNT",
      rarity: "none",
      value: 40000,
      entries: [
        "Beasts of burden are common throughout Xhorhas, and often horses and other riding animals are the best or only option. For those who require speed and have a little more coin to spend, the best option is often a moorbounder. However, moorbounders that haven't undergone proper training or established bonds of trust with their masters tend to attack and even eat their riders.",
        "Moorbounders can cost anywhere from 300 to 500 gp each. They're often cheaper and more abundant in towns on the wastes than in cities like Rosohna."
      ]
    },
    {
      name: "Moss Agate",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Moss Agate|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A translucent pink or yellow-white with mossy gray or green markings gemstone."
      ]
    },
    {
      name: "Moss Agate",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A pink or yellow white with mossy gray or green markings gemstone."
      ]
    },
    {
      name: "Mournland Trinket",
      source: "ERLW",
      page: 222,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Mournland Trinkets",
          colLabels: [
            "d10",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "The favorite childhood toy of one of the adventurers, floating in midair"
            ],
            [
              "2",
              "A tin whistle that makes beautiful colors and patterns magically appear when it's played"
            ],
            [
              "3",
              "A toy lightning rail car"
            ],
            [
              "4",
              "A glass eye"
            ],
            [
              "5",
              "A silver lapel pin of a finely detailed gorgon's head with ruby eyes"
            ],
            [
              "6",
              "A monocle that can be used as a telescope"
            ],
            [
              "7",
              "A six-inch-tall mechanical marmoset in need of minor repairs"
            ],
            [
              "8",
              "A small medallion made of silver, depicting a tower with an eye at the top of it and other smaller eyes embedded in the sides"
            ],
            [
              "9",
              "A cloak pin made of iron in the shape of two hammers joined by a semicircular haft"
            ],
            [
              "10",
              "A wooden dinosaur toy that has movable legs"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Mule",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Mule|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 800,
      carryingCapacity: 420,
      speed: 40
    },
    {
      name: "Mule",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 800,
      carryingCapacity: 420,
      speed: 40
    },
    {
      name: "Muroosa Balm",
      source: "EGW",
      page: 70,
      type: "G",
      resist: [
        "fire"
      ],
      rarity: "none",
      value: 10000,
      entries: [
        "This paste made from the muroosa bush is known to help prevent sunburn, but it is also a fire retardant. After spending 1 minute applying a quarter pint of muroosa balm to your skin, you gain resistance against fire damage for 1 hour.",
        "A dose of muroosa balm sufficient for treating sunburn costs 1 gp."
      ]
    },
    {
      name: "Narycrash",
      source: "DSotDQ",
      page: 188,
      type: "G",
      rarity: "none",
      entries: [
        "This backpack-sized device holds a balloon-based parachute. If you fall while wearing this device, you can use your reaction to deploy the parachute. Once deployed, the parachute rapidly inflates, and you descend 60 feet per round and take no damage from falling. When you are 10 feet away from the ground, roll a {@dice d20}. If you roll a 5 or less, the parachute gives out, and you begin to fall normally."
      ],
      hasFluffImages: true
    },
    {
      name: "Nautiloid",
      source: "AAG",
      page: 38,
      type: "SPC|AAG",
      rarity: "none",
      value: 5000000,
      crew: 20,
      vehAc: 15,
      vehHp: 400,
      vehDmgThresh: 15,
      vehSpeed: 4.5,
      capCargo: 17,
      entries: [
        "Built and used by mind flayers, nautiloids are designed exclusively for space travel. They can't float on water, nor can they land safely on the ground.",
        "As an action, a creature attuned to a nautiloid's spelljamming helm and in physical contact with the ship can transport the nautiloid and all creatures and objects aboard it to a different plane of existence, at or near a destination envisioned by the spelljammer (or to a random location on the plane if no destination is envisioned). This property is a feature of the ship, not the spelljamming helm. Each time this property is used, roll a {@dice d6}. On a 5–6, the property recharges after 1 minute; otherwise, it can't be used again for 24 hours."
      ],
      seeAlsoVehicle: [
        "Nautiloid|AAG"
      ]
    },
    {
      name: "Navigator's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 83
        }
      ],
      reprintedAs: [
        "Navigator's Tools|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 2,
      value: 2500,
      entries: [
        "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
      ],
      additionalEntries: [
        "Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill."
          ]
        },
        {
          type: "entries",
          name: "Survival",
          entries: [
            "Knowledge of navigator's tools helps you avoid becoming lost and also grants you insight into the most likely location for roads and settlements."
          ]
        },
        {
          type: "entries",
          name: "Sighting",
          entries: [
            "By taking careful measurements, you can determine your position on a nautical chart and the time of day."
          ]
        },
        {
          type: "table",
          caption: "Navigator's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Plot a course",
              "10"
            ],
            [
              "Discover your position on a nautical chart",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Navigator's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 2,
      value: 2500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Plot a course ({@dc 10}), or determine position by stargazing ({@dc 15})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Necklace of electrum medallions with red and blue tournalines (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Necklace of jade and pink pearls (River Heralds)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Necklace string of small pink pearls",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Necklace string of small pink pearls|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Necklace string of small pink pearls",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Needler Pistol",
      source: "QftIS",
      page: 192,
      type: "G",
      rarity: "none",
      charges: 10,
      entries: [
        "This strange pistol resembles a flask with a honeycomb of tubes sticking out its front. The weapon is powered by an {@item energy cell} stored at the base of the flask. Placing a full {@item energy cell} in the pistol gives the pistol 10 charges.",
        "As an action while holding this pistol, you can expend 1 of its charges to fire a burst of glowing, needlelike darts from the pistol in a 15-foot cone. Each creature in that area must make a {@dc 15} Dexterity saving throw, taking {@damage 8d4} piercing damage on a failed save or half as much damage on a successful one.",
        {
          name: "Replacing the Energy Cell",
          type: "entries",
          entries: [
            "While the pistol has charges remaining, its {@item energy cell} can't be removed. Once the pistol has 0 charges, you can replace the {@item energy cell} with a new cell by using an action or a bonus action."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Net",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 3,
      value: 100,
      entries: [
        "When you take the {@action Attack|XPHB} action, you can replace one of your attacks with throwing a Net. Target a creature you can see within 15 feet of yourself. The target must succeed on a Dexterity saving throw ({@dc 8} plus your Dexterity modifier and {@variantrule Proficiency|XPHB|Proficiency Bonus}) or have the {@condition Restrained|XPHB} condition until it escapes. The target succeeds automatically if it is Huge or larger.",
        "To escape, the target or a creature within 5 feet of it must take an action to make a {@dc 10} Strength ({@skill Athletics|XPHB}) check, freeing the {@condition Restrained|XPHB} creature on a success. Destroying the Net (AC 10; 5 HP; {@variantrule Immunity|XPHB} to Bludgeoning, Poison, and Psychic damage) also frees the target, ending the effect."
      ],
      hasFluffImages: true
    },
    {
      name: "Nib",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 1,
      entries: [
        "Copper coin about the size of a thumbnail (1 nib = 1 common copper coin)"
      ]
    },
    {
      name: "Nightspider",
      source: "AAG",
      page: 40,
      type: "SPC|AAG",
      rarity: "none",
      value: 5000000,
      crew: 25,
      vehAc: 19,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 4.5,
      capCargo: 50,
      entries: [
        "Neogi terrorize Wildspace in ships of their own construction, which others call nightspiders. These vessels often wait in ambush for other ships. Once a target ship is identified, the neogi try to steal its spelljamming helm and capture its crew.",
        "A nightspider's crew usually consists of nineteen neogi and up to a half-dozen umber hulks, which the neogi use as shock troops.",
        "Nightspiders are designed for space travel alone and can't float on water or land safely on the ground (the weight of the ship would snap its spindly legs, destroying its weblike rigging in the process). Standard weaponry on a nightspider includes four ballistae (two forward-facing and two aft-facing) and a forward-facing mangonel."
      ],
      seeAlsoVehicle: [
        "Nightspider|AAG"
      ]
    },
    {
      name: "Obsidian",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Obsidian|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque black gemstone."
      ]
    },
    {
      name: "Obsidian",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A black gemstone."
      ]
    },
    {
      name: "Obsidian statuette with gold fittings and inlay",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Obsidian statuette with gold fittings and inlay|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Obsidian statuette with gold fittings and inlay",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Oil",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 10,
      entries: [
        "You can douse a creature, object, or space with Oil or use it as fuel, as detailed below.",
        {
          name: "Dousing a Creature or an Object",
          type: "entries",
          entries: [
            "When you take the {@action Attack|XPHB} action, you can replace one of your attacks with throwing an Oil flask. Target one creature or object within 20 feet of yourself. The target must succeed on a Dexterity saving throw ({@dc 8} plus your Dexterity modifier and {@variantrule Proficiency|XPHB|Proficiency Bonus}) or be covered in oil. If the target takes Fire damage before the oil dries (after 1 minute), the target takes an extra 5 Fire damage from burning oil."
          ]
        },
        {
          name: "Dousing a Space",
          type: "entries",
          entries: [
            "You can take the {@action Utilize|XPHB} action to pour an Oil flask on level ground to cover a 5-foot-square area within 5 feet of yourself. If lit, the oil burns until the end of the turn 2 rounds from when the oil was lit (or 12 seconds) and deals 5 Fire damage to any creature that enters the area or ends its turn there. A creature can take this damage only once per turn."
          ]
        },
        {
          name: "Fuel",
          type: "entries",
          entries: [
            "Oil serves as fuel for Lamps and Lanterns. Once lit, a flask of Oil burns for 6 hours in a Lamp or Lantern. That duration doesn't need to be consecutive; you can extinguish the burning Oil (as a {@action Utilize|XPHB} action) and rekindle it again until it has burned for a total of 6 hours."
          ]
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Oil (flask)",
      source: "PHB",
      page: 152,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Oil|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 10,
      entries: [
        "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Oil of Taggit",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Oil of Taggit|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 40000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 13} Constitution saving throw or become {@condition poisoned} for 24 hours. The {@condition poisoned} creature is {@condition unconscious}. The creature wakes up if it takes damage."
      ],
      poisonTypes: [
        "contact"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Oil of Taggit",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 40000,
      poison: true,
      entries: [
        "A creature subjected to Oil of Taggit must succeed on a {@dc 13} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 24 hours. The creature also has the {@condition Unconscious|XPHB} condition while {@condition Poisoned|XPHB} in this way. It wakes up if it takes damage."
      ],
      poisonTypes: [
        "contact"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Old masterpiece painting",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Old masterpiece painting|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Old masterpiece painting",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Olisuba Leaf",
      source: "EGW",
      page: 70,
      type: "G",
      rarity: "none",
      value: 5000,
      entries: [
        "These dried leaves of the Olisuba tree, when steeped to make a tea, can help a body recover from strenuous activity. If you drink a dose of Olisuba tea during a long rest, your {@condition exhaustion} level is reduced by 2 instead of 1 at the end of that long rest."
      ]
    },
    {
      name: "Onyx",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Onyx|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque black and white banded, or pure black or white gemstone."
      ]
    },
    {
      name: "Onyx",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A bands of black and white, or pure black or white gemstone."
      ]
    },
    {
      name: "Opal",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Opal|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A translucent pale blue with green and golden mottling gemstone."
      ]
    },
    {
      name: "Opal",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A pale blue with green and golden mottling gemstone."
      ]
    },
    {
      name: "Ox",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Ox|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 1500
    },
    {
      name: "Ox",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 1500
    },
    {
      name: "Pack Saddle",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      type: "TAH",
      rarity: "none",
      weight: 15,
      value: 500
    },
    {
      name: "Painted gold child's sarcophagus",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Set of gold nesting dolls|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Painted gold war mask",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Painted gold war mask|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Painted gold war mask",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Painter's Supplies",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 83
        }
      ],
      reprintedAs: [
        "Painter's Supplies|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 1000,
      additionalEntries: [
        "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History, Religion",
          entries: [
            "Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon."
          ]
        },
        {
          type: "entries",
          name: "Investigation, Perception",
          entries: [
            "When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight."
          ]
        },
        {
          type: "entries",
          name: "Painting and Drawing",
          entries: [
            "As part of a short or long rest, you can produce a simple work of art. Although your work might lack precision, you can capture an image or a scene, or make a quick copy of a piece of art you saw."
          ]
        },
        {
          type: "table",
          caption: "Painter's Supplies",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Paint an accurate portrait",
              "10"
            ],
            [
              "Create a painting with a hidden message",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Painter's Supplies",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 1000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Paint a recognizable image of something you've seen ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Druidic Focus|XPHB}, {@item Holy Symbol|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Pair of engraved bone dice",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Pair of engraved bone dice|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Pair of engraved bone dice",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Pair of engraved bone dice (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Pale Tincture",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Pale Tincture|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 25000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 16} Constitution saving throw or take 3 ({@damage 1d6}) poison damage and become {@condition poisoned}. The {@condition poisoned} creature must repeat the saving throw every 24 hours, taking 3 ({@damage 1d6}) poison damage on a failed save. Until this poison ends, the damage the poison deals can't be healed by any means. After seven successful saving throws, the effect ends and the creature can heal normally."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Pale Tincture",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 25000,
      poison: true,
      entries: [
        "A creature subjected to Pale Tincture must succeed on a {@dc 16} Constitution saving throw or take 3 ({@damage 1d6}) Poison damage and have the {@condition Poisoned|XPHB} condition. The {@condition Poisoned|XPHB} creature repeats the save every 24 hours, taking 3 ({@damage 1d6}) Poison damage on a failed save. The damage the poison deals can't be healed by any means while the creature remains {@condition Poisoned|XPHB}. After seven successful saves against the poison, the creature is no longer {@condition Poisoned|XPHB}."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Paper",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 20,
      entries: [
        "One sheet of Paper can hold about 250 handwritten words."
      ]
    },
    {
      name: "Paper (one sheet)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Paper|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 20
    },
    {
      name: "Paralysis Pistol",
      source: "QftIS",
      page: 192,
      type: "G",
      rarity: "none",
      charges: 6,
      entries: [
        "This curious-looking pistol is shaped like a large, glass bulb with a handle on the bottom and brass prongs protruding from its front. The weapon is powered by an {@item energy cell} stored in its grip. Placing a full {@item energy cell} in the pistol gives the pistol 6 charges.",
        "As an action while holding this pistol, you can expend 1 of its charges to fire a ray of crackling energy at a creature you can see within 60 feet of yourself. The target must succeed on a {@dc 15} Constitution saving throw or have the {@condition paralyzed} condition for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.",
        {
          name: "Replacing the Energy Cell",
          type: "entries",
          entries: [
            "While the pistol has charges remaining, its {@item energy cell} can't be removed. Once the pistol has 0 charges, you can replace the {@item energy cell} with a new cell by using an action or a bonus action."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Parchment",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 10,
      entries: [
        "One sheet of Parchment can hold about 250 handwritten words."
      ]
    },
    {
      name: "Parchment (one sheet)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Parchment|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 10
    },
    {
      name: "Pearl",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Pearl|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "An opaque lustrous white, yellow, or pink gemstone."
      ]
    },
    {
      name: "Pearl",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A lustrous white, yellow, or pink gemstone."
      ]
    },
    {
      name: "Pepper",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Pepper|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 200
    },
    {
      name: "Pepper",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 200
    },
    {
      name: "Perfume",
      source: "XPHB",
      page: 227,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 500,
      entries: [
        "Perfume comes in a 4-ounce vial. For 1 hour after applying Perfume to yourself, you have {@variantrule Advantage|XPHB} on Charisma ({@skill Persuasion|XPHB}) checks made to influence an Indifferent Humanoid within 5 feet of yourself."
      ]
    },
    {
      name: "Perfume (vial)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Perfume|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 500
    },
    {
      name: "Peridot",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Peridot|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A transparent rich olive green gemstone."
      ]
    },
    {
      name: "Peridot",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A rich olive green gemstone."
      ]
    },
    {
      name: "Pewter mug with green spinels (Brazen Coalition)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Pig",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Pig|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 300
    },
    {
      name: "Pig",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 300
    },
    {
      name: "Pitcher",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 4,
      value: 2,
      entries: [
        "A pitcher holds 1 gallon of liquid."
      ]
    },
    {
      name: "Piton",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 0.25,
      value: 5
    },
    {
      name: "Plainscow",
      source: "TDCSR",
      page: 248,
      type: "MNT",
      rarity: "none",
      value: 20000,
      carryingCapacity: 1500,
      speed: 40,
      entries: [
        "The hulking plainscow is an exceptionally sturdy beast of burden native to the {@book Dividing Plains|TDCSR|3|Dividing Plains} and used by the people of central Tal'Dorei for centuries. Though many wild herds still roam the plains, domesticated plainscows are more common, used as {@quickref Mounts and Vehicles|PHB|1|0|mounts}, pack animals, and livestock. Plainscows are unusually empathetic for beasts, and often bond with a rider for life. They stand 6 feet tall, weigh about two tons, and live for 70 years.",
        {
          type: "entries",
          entries: [
            {
              type: "entries",
              entries: [
                {
                  type: "entries",
                  name: "Market Value",
                  page: 248,
                  entries: [
                    "Plainscows can be bought in {@book Westruun|TDCSR|3|Westruun} for 200 gp. A plainscow has a carrying capacity of 1,500 pounds."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Planar Philosopher Trinket",
      source: "SatO",
      page: 8,
      type: "G",
      rarity: "none",
      entries: [
        {
          type: "table",
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          colLabels: [
            "d6",
            "Trinket"
          ],
          rows: [
            [
              "1",
              "Locket with a picture of my mentor and an inscription I can't read"
            ],
            [
              "2",
              "Bleached cranium rat skull with colored glass beads in its eye sockets"
            ],
            [
              "3",
              "Torn parchment with half a rebus painted on it"
            ],
            [
              "4",
              "Bracelet of twisted razorvine stems"
            ],
            [
              "5",
              "Fragment of a bronze blade covered in verdigris"
            ],
            [
              "6",
              "Broken holy symbol of a forgotten god"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Platinum",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Platinum|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 50000
    },
    {
      name: "Platinum",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 50000
    },
    {
      name: "Platinum (pp)",
      source: "PHB",
      page: 143,
      type: "$C",
      rarity: "none",
      weight: 0.02,
      value: 1000,
      entries: [
        "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
        "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
        "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
        "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
        "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
        "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
      ],
      hasFluffImages: true
    },
    {
      name: "Platinum 10-Zino Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 1000
    },
    {
      name: "Platinum 100-Zino Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 10000
    },
    {
      name: "Platinum bracelet set with a sapphire",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Platinum bracelet set with an emerald|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Platinum bracelet set with an emerald",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Platinum headdress with topaz sun symbol (Sun Empire)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 250000
    },
    {
      name: "Platinum ring with yellow sapphire (Sun Empire)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Platinum staff topped with amber (Sun Empire)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Playing Card Set",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Playing Cards|XPHB"
      ],
      type: "GS",
      rarity: "none",
      value: 50
    },
    {
      name: "Playing Cards",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "GS|XPHB",
      rarity: "none",
      value: 50,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern whether someone is cheating ({@dc 10}), or win the game ({@dc 20})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Poisoner's Kit",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 83
        }
      ],
      reprintedAs: [
        "Poisoner's Kit|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 2,
      value: 5000,
      entries: [
        "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
        "Additionally, the {@book Crafting and Harvesting Poison|dmg|8|Crafting and Harvesting Poison} rules require the use of a poisoner's kit."
      ],
      additionalEntries: [
        "A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Your training with poisons can help you when you try to recall facts about infamous poisonings."
          ]
        },
        {
          type: "entries",
          name: "Investigation, Perception",
          entries: [
            "Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect {@condition poisoned} objects or try to extract clues from events that involve poison."
          ]
        },
        {
          type: "entries",
          name: "Medicine",
          entries: [
            "When you treat the victim of a poison, your knowledge grants you added insight into how to provide the best care to your patient."
          ]
        },
        {
          type: "entries",
          name: "Nature, Survival",
          entries: [
            "Working with poisons enables you to acquire lore about which plants and animals are poisonous."
          ]
        },
        {
          type: "entries",
          name: "Handle Poison",
          entries: [
            "Your proficiency allows you to handle and apply a poison without risk of exposing yourself to its effects."
          ]
        },
        {
          type: "table",
          caption: "Poisoner's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Spot a {@condition poisoned} object",
              "10"
            ],
            [
              "Determine the effects of a poison",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Poisoner's Kit",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 2,
      value: 5000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Detect a poisoned object ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Basic Poison|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Pole",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 7,
      value: 5,
      entries: [
        "A Pole is 10 feet long. You can use it to touch something up to 10 feet away. If you must make a Strength ({@skill Athletics|XPHB}) check as part of a High or {@variantrule Long Jump|XPHB}, you can use the Pole to vault, giving yourself {@variantrule Advantage|XPHB} on the check."
      ]
    },
    {
      name: "Pole (10-foot)",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Pole|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 7,
      value: 5
    },
    {
      name: "Pony",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Pony|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 3000,
      carryingCapacity: 225,
      speed: 40
    },
    {
      name: "Pony",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 3000,
      carryingCapacity: 225,
      speed: 40
    },
    {
      name: "Portable Ram",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Portable Ram|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 35,
      value: 400,
      entries: [
        "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
      ]
    },
    {
      name: "Portable Ram",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 35,
      value: 400,
      entries: [
        "You can use a Portable Ram to break down doors. When doing so, you gain a +4 bonus to the Strength check. One other character can help you use the ram, giving you {@variantrule Advantage|XPHB} on this check."
      ]
    },
    {
      name: "Potter's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 84
        }
      ],
      reprintedAs: [
        "Potter's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 3,
      value: 1000,
      additionalEntries: [
        "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Your expertise aids you in identifying ceramic objects, including when they were created and their likely place or culture of origin."
          ]
        },
        {
          type: "entries",
          name: "Investigation, Perception",
          entries: [
            "You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities."
          ]
        },
        {
          type: "entries",
          name: "Reconstruction",
          entries: [
            "By examining pottery shards, you can determine an object's original, intact form and its likely purpose."
          ]
        },
        {
          type: "table",
          caption: "Potter's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Determine what a vessel once held",
              "10"
            ],
            [
              "Create a serviceable pot",
              "15"
            ],
            [
              "Find a weak point in a ceramic object",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Potter's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 3,
      value: 1000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Intelligence"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern what a ceramic object held in the past 24 hours ({@dc 15})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Jug|XPHB}, {@item Lamp|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Pouch",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Pouch|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "A cloth or leather pouch can hold up to 20 {@item sling bullet|phb|sling bullets} or 50 {@item blowgun needle|phb|blowgun needles}, among other things. A compartmentalized pouch for holding spell components is called a {@item component pouch|phb}. A pouch can hold up to ⅕ cubic foot or 6 pounds of gear."
      ],
      containerCapacity: {
        weight: [
          6
        ],
        item: [
          {
            "sling bullet|phb": 20,
            "blowgun needle|phb": 50
          }
        ]
      }
    },
    {
      name: "Pouch",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "A Pouch holds up to 6 pounds within one-fifth of a cubic foot."
      ],
      containerCapacity: {
        weight: [
          6
        ],
        item: [
          {
            "firearm bullet|xphb": 10,
            "sling bullet|xphb": 20,
            "needle|xphb": 50
          }
        ]
      }
    },
    {
      name: "Powered Armor",
      source: "QftIS",
      page: 192,
      type: "HA",
      rarity: "none",
      charges: 24,
      entries: [
        "This suit of technologically advanced plate armor includes an under-suit that can fully seal, a helmet with a full face mask and crystal lenses in the eyeholes, and a set of gauntlets. The armor is powered by an {@item energy cell} stored in a compartment on the thigh plate.",
        "Placing a full {@item energy cell} in the armor gives the armor 24 charges. A suit of powered armor functions as a suit of normal plate armor, even when it has 0 charges remaining.",
        {
          type: "entries",
          name: "Activating the Armor",
          entries: [
            "As an action, you can expend any number of the armor's charges to activate it; the armor remains active for 1 hour per charge expended. You can use a bonus action to deactivate the armor early, but doing so doesn't recover any expended charges.",
            "While the armor is active, you gain the following benefits:"
          ]
        },
        {
          type: "entries",
          name: "Augmented Physicality",
          entries: [
            "You have advantage on Strength checks, and your carrying capacity is doubled."
          ]
        },
        {
          type: "entries",
          name: "Environmental Adaptation",
          entries: [
            "The armor seals airtight and provides its own atmosphere. You can breathe normally in any environment and withstand extreme temperatures, and you're unaffected by harmful gases, as well as contact and inhaled poisons."
          ]
        },
        {
          type: "entries",
          name: "Force Field",
          entries: [
            "When you would take damage, you can use your reaction to expend 1 of the armor's charges to deploy a defensive force field. Roll {@dice 3d10} and reduce the damage taken by the total rolled."
          ]
        },
        {
          type: "entries",
          name: "Propulsion",
          entries: [
            "As a bonus action, you can expend 1 of the armor's charges to gain a flying speed equal to your walking speed for 1 minute. If you're airborne when this duration ends, you fall."
          ]
        },
        {
          type: "entries",
          name: "Replacing the Energy Cell",
          entries: [
            "While the armor has charges remaining, its {@item energy cell} can't be removed. Once the armor has 0 charges, you can replace the {@item energy cell} with a new cell by using an action or a bonus action."
          ]
        }
      ]
    },
    {
      name: "Pride Silk",
      source: "EGW",
      page: 103,
      type: "G",
      rarity: "none",
      weight: 1,
      value: 10000,
      entries: [
        "The hearty silk unique to the region has long been a point of pride with the locals. When processed and woven properly, the resulting cloth is pride silk: an extremely flexible material with the durability of tanned leather. Pride silk has become a favorite cloth for use on military ship sails, war banners, and other utilitarian applications, but has also gained popularity in affluent circles. High-end clothing made from pride silk is both fashionable and protective, leading many nobles and wealthy merchants to seek full outfits and formal gowns made with it. The tailors skilled enough to create such outfits are few and far between, so while pride silk might be expensive as a raw material, outfits made of the cloth are prohibitively expensive for most common folk."
      ]
    },
    {
      name: "Pride Silk Outfit",
      source: "EGW",
      page: 103,
      type: "G",
      rarity: "none",
      weight: 4,
      value: 50000,
      entries: [
        "An outfit made of pride silk weighs 4 pounds and costs 500 gp. If you aren't wearing armor, your base Armor Class is 11 + your Dexterity modifier while wearing it."
      ]
    },
    {
      name: "Priest's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Priest's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 24,
      value: 1900,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item blanket|phb}",
            "10 {@item candle|phb|candles}",
            "a {@item tinderbox|phb}",
            "an alms box",
            "2 blocks of incense",
            "a censer",
            "vestments",
            "2 days of {@item Rations (1 day)|phb|rations}",
            "a {@item waterskin|phb}."
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "blanket|phb",
        {
          item: "candle|phb",
          quantity: 10
        },
        "tinderbox|phb",
        {
          item: "rations (1 day)|phb",
          quantity: 2
        },
        "waterskin|phb",
        {
          special: "alms box"
        },
        {
          special: "block of incense",
          quantity: 2
        },
        {
          special: "censer"
        },
        {
          special: "vestments"
        }
      ]
    },
    {
      name: "Priest's Pack",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 29,
      value: 3300,
      entries: [
        "A Priest's Pack contains the following items: {@item Backpack|XPHB}, {@item Blanket|XPHB}, {@item Holy Water|XPHB}, {@item Lamp|XPHB}, 7 days of {@item Rations|XPHB}, {@item Robe|XPHB}, and {@item Tinderbox|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "blanket|xphb",
        "holy water|xphb",
        "lamp|xphb",
        {
          item: "rations|xphb",
          quantity: 7
        },
        "robe|xphb",
        "tinderbox|xphb"
      ]
    },
    {
      name: "Prismari Trinket",
      source: "SCC",
      page: 32,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you may roll once on the Prismari Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
        {
          caption: "Prismari Trinkets",
          colLabels: [
            "d6",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A pair of rose-tinted glasses with glittery frames"
            ],
            [
              "2",
              "A stoppered glass bottle that, when opened, plays a brassy orchestral piece"
            ],
            [
              "3",
              "A quartet of hovering water motes in a vial"
            ],
            [
              "4",
              "A bandolier of watercolor paints"
            ],
            [
              "5",
              "A tiara capped with a crystal that crackles with harmless lightning"
            ],
            [
              "6",
              "An iridescent quill"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Psychic Blade",
      source: "XPHB",
      page: 136,
      type: "M",
      rarity: "none",
      weaponCategory: "simple",
      property: [
        "F|XPHB",
        "T|XPHB"
      ],
      mastery: [
        {
          uid: "Vex|XPHB",
          note: "you can use this property, and it doesn't count against the number of properties you can use with Weapon Mastery"
        }
      ],
      range: "60/120",
      dmg1: "1d6",
      dmgType: "Y"
    },
    {
      name: "Purple Worm Poison",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Purple Worm Poison|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 200000,
      poison: true,
      entries: [
        "This poison must be harvested from a dead or {@condition incapacitated} {@creature purple worm}. A creature subjected to this poison must make a {@dc 19} Constitution saving throw, taking 42 ({@damage 12d6}) poison damage on a failed save, or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Purple Worm Poison",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 200000,
      poison: true,
      entries: [
        "A creature subjected to Purple Worm Poison makes a {@dc 21} Constitution saving throw, taking 35 ({@damage 10d6}) Poison damage on a failed save or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Quandrix Trinket",
      source: "SCC",
      page: 33,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you may roll once on the Quandrix Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
        {
          caption: "Quandrix Trinkets",
          colLabels: [
            "d6",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A small succulent in a dodecahedral clay pot"
            ],
            [
              "2",
              "A blue knit hat that looks a bit like a bottle folding in on itself"
            ],
            [
              "3",
              "A model hypercube carved from green crystal, showcasing the fourth dimension"
            ],
            [
              "4",
              "A crumpled test on the theory of gravity manipulation, with a failing grade on the front and the name of a famous Quandrix professor"
            ],
            [
              "5",
              "A blue tetrahedron that, when tapped twice, projects a recording of an old mathematics lecture"
            ],
            [
              "6",
              "A round bread roll cut so that someone could spread butter on both halves without ever lifting the knife"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Quartz",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Quartz|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A transparent white, smoky gray, or yellow gemstone."
      ]
    },
    {
      name: "Quartz",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A white, smoky gray, or yellow gemstone."
      ]
    },
    {
      name: "Quiver",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Quiver|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "A quiver can hold up to 20 {@item arrow|phb|arrows}."
      ],
      containerCapacity: {
        item: [
          {
            "arrow|phb": 20
          }
        ]
      }
    },
    {
      name: "Quiver",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 100,
      entries: [
        "A Quiver holds up to 20 Arrows."
      ],
      containerCapacity: {
        item: [
          {
            "arrow|xphb": 20
          }
        ]
      }
    },
    {
      name: "Rain Catcher",
      source: "ToA",
      page: 32,
      type: "G",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        "A rain catcher is a simple contraption consisting of a 5-foot-square leather tarp and a wooden frame with legs. When the tarp is stretched across the wooden frame, it forms a basin that can catch 2 gallons of drinking water per inch of rainfall and hold up to 8 gallons. The tarp and wooden frame fold up for easy transport."
      ]
    },
    {
      name: "Rations",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 2,
      value: 50,
      entries: [
        "Rations consist of travel-ready food, including jerky, dried fruit, hardtack, and nuts. See \"{@hazard Malnutrition|XPHB}\" for the risks of not eating."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Rations (1 day)",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Rations|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 2,
      value: 50,
      entries: [
        "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Reliquary",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Reliquary|XPHB"
      ],
      type: "SCF",
      scfType: "holy",
      rarity: "none",
      weight: 2,
      value: 500
    },
    {
      name: "Reliquary",
      source: "XPHB",
      page: 226,
      freeRules2024: true,
      type: "SCF|XPHB",
      scfType: "holy",
      rarity: "none",
      weight: 2,
      value: 500,
      entries: [
        "For a Reliquary to be an effective Holy Symbol, it must be held."
      ]
    },
    {
      name: "Rhodochrosite",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Rhodochrosite|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque light pink gemstone."
      ]
    },
    {
      name: "Rhodochrosite",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A light pink gemstone."
      ]
    },
    {
      name: "Riding Horse",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Riding Horse|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 7500,
      carryingCapacity: 480,
      speed: 60
    },
    {
      name: "Riding Horse",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 7500,
      carryingCapacity: 480,
      speed: 60
    },
    {
      name: "Riding Saddle",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Riding Saddle|XPHB"
      ],
      type: "TAH",
      rarity: "none",
      weight: 25,
      value: 1000
    },
    {
      name: "Riding Saddle",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "TAH|XPHB",
      rarity: "none",
      weight: 25,
      value: 1000,
      entries: [
        "A saddle comes with a bit, a bridle, reins, and any other equipment needed to use the saddle."
      ]
    },
    {
      name: "Robe",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 4,
      value: 100,
      entries: [
        "A Robe has vocational or ceremonial significance. Some events and locations admit only people wearing a Robe bearing certain colors or symbols."
      ]
    },
    {
      name: "Robes",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Robe|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 4,
      value: 100
    },
    {
      name: "Robot Controller",
      source: "QftIS",
      page: 193,
      type: "G",
      rarity: "none",
      charges: 3,
      entries: [
        "This small handheld device features a glass pane with a glowing display that responds to your touch.",
        "The controller is powered by an {@item energy cell} stored in the device. Placing a full {@item energy cell} in the device gives the device 3 charges.",
        "As an action while holding this device, you can expend 1 of its charges to cause one of the following effects:",
        {
          name: "Control",
          type: "entries",
          entries: [
            "One Construct of your choice within 60 feet of you must succeed on a {@dc 15} Wisdom saving throw or have the {@condition charmed} condition for 1 minute. While {@condition charmed} in this way, the Construct obeys your verbal commands, and you and the Construct can communicate remotely with each other through the device. Whenever the {@condition charmed} Construct takes damage, it can repeat the saving throw, ending the effect on itself on a success."
          ]
        },
        {
          name: "Disrupt",
          type: "entries",
          entries: [
            "Constructs of your choice within 30 feet of you must succeed on a {@dc 15} Wisdom saving throw or have the {@condition incapacitated} condition for 1 minute. An {@condition incapacitated} Construct can repeat the saving throw at the end of its turns, ending the effect on itself on a success."
          ]
        },
        {
          name: "Replacing the Energy Cell",
          type: "entries",
          entries: [
            "While the device has charges remaining, its {@item energy cell} can't be removed. Once the device has 0 charges, you can replace the {@item energy cell} with a new cell by using an action or a bonus action."
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Rope",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        "As a {@action Utilize|XPHB} action, you can tie a knot with Rope if you succeed on a {@dc 10} Dexterity ({@skill Sleight of Hand|XPHB}) check. The Rope can be burst with a successful {@dc 20} Strength ({@skill Athletics|XPHB}) check.",
        "You can bind an unwilling creature with the Rope only if the creature has the {@condition Grappled|XPHB}, {@condition Incapacitated|XPHB}, or {@condition Restrained|XPHB} condition. If the creature's legs are bound, the creature has the {@condition Restrained|XPHB} condition until it escapes. Escaping the Rope requires the creature to make a successful {@dc 15} Dexterity ({@skill Acrobatics|XPHB}) check as an action."
      ]
    },
    {
      name: "Rowboat",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Rowboat|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      weight: 100,
      value: 5000,
      crew: 1,
      vehAc: 11,
      vehHp: 50,
      vehSpeed: 1.5,
      capPassenger: 3,
      entries: [
        "Keelboats and rowboats are used on lakes and rivers, If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
      ],
      seeAlsoVehicle: [
        "Rowboat"
      ]
    },
    {
      name: "Rowboat",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 5000,
      crew: 1,
      vehAc: 11,
      vehHp: 50,
      vehSpeed: 1.5,
      capPassenger: 3,
      seeAlsoVehicle: [
        "Rowboat"
      ]
    },
    {
      name: "Ruby",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Ruby|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A transparent clear red to deep crimson gemstone."
      ]
    },
    {
      name: "Ruby",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 500000,
      entries: [
        "A clear red to deep crimson gemstone."
      ]
    },
    {
      name: "Sack",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Sack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 0.5,
      value: 1,
      entries: [
        "A sack can hold up to 1 cubic foot or 30 pounds of gear."
      ],
      containerCapacity: {
        weight: [
          30
        ]
      }
    },
    {
      name: "Sack",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 0.5,
      value: 1,
      entries: [
        "A Sack holds up to 30 pounds within 1 cubic foot."
      ],
      containerCapacity: {
        weight: [
          30
        ]
      }
    },
    {
      name: "Saddlebags",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      type: "TAH",
      rarity: "none",
      weight: 8,
      value: 400
    },
    {
      name: "Saffron",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Saffron|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 1500
    },
    {
      name: "Saffron",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 1500
    },
    {
      name: "Sailing Ship",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Sailing Ship|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      value: 1000000,
      crew: 20,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 2,
      capPassenger: 20,
      capCargo: 100,
      seeAlsoVehicle: [
        "Sailing Ship"
      ]
    },
    {
      name: "Sailing Ship",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 1000000,
      crew: 20,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 2,
      capPassenger: 20,
      capCargo: 100,
      seeAlsoVehicle: [
        "Sailing Ship"
      ]
    },
    {
      name: "Salt",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Salt|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 5
    },
    {
      name: "Salt",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 5
    },
    {
      name: "Sardonyx",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Sardonyx|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "An opaque bands of red and white gemstone."
      ]
    },
    {
      name: "Sardonyx",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A bands of red and white gemstone."
      ]
    },
    {
      name: "Sarlona Trinket",
      source: "ERLW",
      page: 138,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from Sarlona",
          colLabels: [
            "d8",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A polished crystal sphere; when you clutch it in your fist, a telepathic voice recites a story in your mind"
            ],
            [
              "2",
              "A teardrop pendant made from polished shell; when you hold it, you see the image of a young Riedran man"
            ],
            [
              "3",
              "A six-sided crystal die; when you roll it, you feel a surge of emotion for six seconds"
            ],
            [
              "4",
              "A sealed vial filled with faintly luminescent blue mist"
            ],
            [
              "5",
              "A crystal disk engraved with a labyrinthine pattern"
            ],
            [
              "6",
              "A leather-bound collection of kalashtar poetry called {@i Shards of the Light}"
            ],
            [
              "7",
              "A sphere of polished crystal; when you hold it in your palm, you feel that it knows you and understands you"
            ],
            [
              "8",
              "A cup and ball toy; when you successfully catch the ball in the cup, you feel a momentary surge of joy"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Scholar's Pack",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Scholar's Pack|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 10,
      value: 4000,
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item backpack|phb}",
            "a {@item book|phb} of lore",
            "a {@item Ink (1-ounce bottle)|phb|bottle of ink}",
            "an {@item ink pen|phb}",
            "10 {@item Parchment (one sheet)|phb|sheets of parchment}",
            "a little bag of sand",
            "a small knife."
          ]
        }
      ],
      packContents: [
        "backpack|phb",
        "book|phb",
        "ink (1-ounce bottle)|phb",
        "ink pen|phb",
        "parchment (one sheet)|phb",
        {
          special: "little bag of sand"
        },
        {
          special: "small knife"
        }
      ]
    },
    {
      name: "Scholar's Pack",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 22,
      value: 4000,
      entries: [
        "A Scholar's Pack contains the following items: {@item Backpack|XPHB}, {@item Book|XPHB}, {@item Ink|XPHB}, {@item Ink Pen|XPHB}, {@item Lamp|XPHB}, 10 flasks of {@item Oil|XPHB}, 10 sheets of {@item Parchment|XPHB}, and {@item Tinderbox|XPHB}."
      ],
      packContents: [
        "backpack|xphb",
        "book|xphb",
        "ink|xphb",
        "ink pen|xphb",
        "lamp|xphb",
        {
          item: "oil|xphb",
          quantity: 10
        },
        {
          item: "parchment|xphb",
          quantity: 10
        },
        "tinderbox|xphb"
      ]
    },
    {
      name: "Scorpion Ship",
      source: "AAG",
      page: 42,
      type: "SPC|AAG",
      rarity: "none",
      value: 2500000,
      crew: 12,
      vehAc: 19,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 3.5,
      capCargo: 12,
      entries: [
        "Scorpion ships are archaic metal warships that have never lost their popularity, largely because of their versatility. Articulated legs enable a scorpion ship to land safely on the ground and move across a solid surface at a walking speed of 30 feet. The ship can't float on water, however. A ballista is mounted on the top deck, and a mangonel is perched on the end of the tail. The ship's two claws are relatively inefficient in combat, but a claw that grabs a creature can quickly take it out of action."
      ],
      seeAlsoVehicle: [
        "Scorpion Ship|AAG"
      ]
    },
    {
      name: "Sealing Wax",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      value: 50
    },
    {
      name: "Secondhand Steal Trinket",
      source: "BMT",
      page: 108,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Secondhand Steals",
          colLabels: [
            "d8",
            "Secondhand Steal"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A pair of small, rose-tinted glasses with round lenses"
            ],
            [
              "2",
              "A droopy potted plant in an old boot"
            ],
            [
              "3",
              "A rusty metal goblet shaped like a frog opening its mouth to the sky"
            ],
            [
              "4",
              "A wide-brimmed, palm-frond sunhat that has been chewed on"
            ],
            [
              "5",
              "A utensil shaped like a fork on one end and a spoon on the other"
            ],
            [
              "6",
              "A thick, sun-yellowed book on seasonal agriculture written in Halfling"
            ],
            [
              "7",
              "A well-used squeaky toy in the shape of a garden gnome with a red hat"
            ],
            [
              "8",
              "A glass statuette of a rust monster"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Serpent Venom",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Serpent Venom|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "This poison must be harvested from a dead or {@condition incapacitated} {@creature giant poisonous snake}. A creature subjected to this poison must succeed on a {@dc 11} Constitution saving throw, taking 10 ({@damage 3d6}) poison damage on a failed save, or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Serpent Venom",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 20000,
      poison: true,
      entries: [
        "A creature subjected to Serpent Venom must succeed on a {@dc 11} Constitution saving throw, taking 10 ({@damage 3d6}) Poison damage on a failed save or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Set of gold nesting dolls",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Shard",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 10,
      entries: [
        "Silver coin, slightly smaller than the nib (1 shard = 10 {@item nib|wdh|nibs})"
      ]
    },
    {
      name: "Sheep",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Sheep|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 200
    },
    {
      name: "Sheep",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      value: 200
    },
    {
      name: "Shovel",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Shovel|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      value: 200
    },
    {
      name: "Shovel",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      value: 200,
      entries: [
        "Working for 1 hour, you can use a Shovel to dig a hole that is 5 feet on each side in soil or similar material."
      ]
    },
    {
      name: "Shrike Ship",
      source: "AAG",
      page: 44,
      type: "SPC|AAG",
      rarity: "none",
      value: 2000000,
      crew: 11,
      vehAc: 15,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 8,
      capCargo: 20,
      entries: [
        "This swift vessel is a relatively recent design, quickly gaining popularity with merchants and pirates. A shrike ship's legs enable it to land safely on the ground. The ship can float but isn't built for traveling on water and sinks quickly in rough seas.",
        "Standard weaponry on a shrike ship includes three ballistae—one on the forecastle, one in the middle of the top deck, and one on the sterncastle. In a desperate situation, the ship's reinforced bow can be used as a piercing ram."
      ],
      seeAlsoVehicle: [
        "Shrike Ship|AAG"
      ]
    },
    {
      name: "Signal Whistle",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Signal Whistle|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 5
    },
    {
      name: "Signal Whistle",
      source: "XPHB",
      page: 228,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 5,
      entries: [
        "When blown as a {@action Utilize|XPHB} action, a Signal Whistle produces a sound that can be heard up to 600 feet away."
      ]
    },
    {
      name: "Signet Ring",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      value: 500
    },
    {
      name: "Silk",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 1000
    },
    {
      name: "Silk (1 sq. yd.)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Silk|XDMG"
      ],
      type: "TG",
      rarity: "none",
      value: 1000
    },
    {
      name: "Silk robe with gold embroidery",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Silk vestments with gold embroidery|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Silk Rope (50 feet)",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 5,
      value: 1000,
      entries: [
        "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a {@dc 17} Strength check."
      ]
    },
    {
      name: "Silk vestments with gold embroidery",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Silver",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Silver|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 500
    },
    {
      name: "Silver",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 500
    },
    {
      name: "Silver (sp)",
      source: "PHB",
      page: 143,
      type: "$C",
      rarity: "none",
      weight: 0.02,
      value: 10,
      entries: [
        "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
        "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
        "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
        "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
        "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
        "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
      ],
      hasFluffImages: true
    },
    {
      name: "Silver 25-Zib Coin",
      source: "GGR",
      page: 9,
      type: "$C",
      rarity: "none",
      value: 25
    },
    {
      name: "Silver and gold brooch",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Silver and gold brooch|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver and gold brooch",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver Bar (2-pound)",
      source: "XDMG",
      page: 213,
      type: "TB|XDMG",
      rarity: "none",
      weight: 2,
      value: 1000,
      barDimensions: {
        l: 5,
        w: 2,
        h: 0.5
      }
    },
    {
      name: "Silver Bar (5-pound)",
      source: "XDMG",
      page: 213,
      type: "TB|XDMG",
      rarity: "none",
      weight: 5,
      value: 2500,
      barDimensions: {
        l: 6,
        w: 2,
        h: 1
      }
    },
    {
      name: "Silver chalice set with moonstones",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Silver chalice set with moonstones|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver chalice set with moonstones",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver ewer",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Silver ewer|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Silver ewer",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Silver headdress with amber and red-coral feathers (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver medallion (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Silver necklace with a gemstone pendant",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Silver necklace with a gemstone pendant|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Silver necklace with a gemstone pendant",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Silver necklace with an amber pendant (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Silver shoulder piece with amber and garnet (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silver-plated steel longsword with jet set in hilt",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Bundle of sheet music representing the lost dirges of a famous composer|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Silverquill Trinket",
      source: "SCC",
      page: 35,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you may roll once on the Silverquill Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
        {
          caption: "Silverquill Trinkets",
          colLabels: [
            "d6",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A black leather notebook filled with half-finished poems"
            ],
            [
              "2",
              "A set of flashcards detailing different colloquialisms and their meanings"
            ],
            [
              "3",
              "A canteen that makes any liquid drunk from it taste sweet"
            ],
            [
              "4",
              "A forged permission slip granting access to the special archives of Strixhaven's libraries"
            ],
            [
              "5",
              "A stylish silver pin that references a famous series of novels about warlocks"
            ],
            [
              "6",
              "A stack of small pieces of parchment, each enchanted to stick to whatever surface it's pressed against and peel off easily"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Skyship",
      source: "EGW",
      page: 72,
      type: "AIR|DMG",
      rarity: "none",
      value: 10000000,
      crewMin: 6,
      crewMax: 10,
      vehSpeed: 10,
      capPassenger: 30,
      capCargo: 10,
      travelCost: 200,
      shippingCost: 100
    },
    {
      name: "Skyship",
      source: "TDCSR",
      page: 137,
      type: "AIR|DMG",
      rarity: "none",
      value: 10000000,
      crewMin: 6,
      crewMax: 10,
      vehSpeed: 10,
      capPassenger: 30,
      capCargo: 10,
      travelCost: 200,
      shippingCost: 100,
      entries: [
        "Purchasing a {@item skyship|TDCSR} costs 100,000 gp, and requires a personal connection with the Alsfarin Union in {@book Ank'Harel|TDCSR|3|Marquet}. A {@item skyship|TDCSR} travels at a top speed of 10 miles per hour, can carry total cargo of 10 tons, and requires a crew of six to ten humanoids to operate at peak performance. Most {@item skyship|TDCSR|skyships} have maximum accommodations for up to 30 passengers. Most {@item skyship|TDCSR|skyships} only travel between existing skyports (see \"{@book Emon Skyport|TDCSR|3|8. Emon Skyport},\"), and charge a fee of 2 gp per mile for a passenger ticket. Chartering a {@item skyship|TDCSR} to a destination off the standard sky routes costs 15 gp per mile, if the captain is available and willing to undertake the journey. Shipping cargo costs 1 gp per mile per 100 pounds of cargo along normal sky routes, and twice that to other destinations."
      ],
      hasFluffImages: true
    },
    {
      name: "Sled",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Sled|XPHB"
      ],
      type: "VEH",
      rarity: "none",
      weight: 300,
      value: 2000
    },
    {
      name: "Sled",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "VEH|XPHB",
      rarity: "none",
      weight: 300,
      value: 2000
    },
    {
      name: "Sled Dog",
      source: "IDRotF",
      page: 20,
      type: "MNT",
      rarity: "none",
      value: 5000,
      entries: [
        "A sled dog (use the {@creature wolf} stat block in appendix A of the Monster Manual) costs 50 gp and can pull 360 pounds.",
        "Sled dogs must take a short rest after pulling a sled for 1 hour; otherwise, they gain one level of {@condition exhaustion}."
      ]
    },
    {
      name: "Sledgehammer",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 10,
      value: 200
    },
    {
      name: "Sleep Grenade",
      source: "QftIS",
      page: 192,
      type: "EXP|DMG",
      rarity: "none",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|DMG}",
        "This grenade releases a cloud of soporific mist that fills a 20-foot-radius sphere, then dissipates. Each creature in that area must succeed on a {@dc 15} Constitution saving throw or have the {@condition unconscious} condition for 1 hour. The condition ends on a creature early if the creature takes damage or if another creature uses an action to shake it awake."
      ],
      hasFluffImages: true
    },
    {
      name: "Small gold bracelet",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Gold bracelet|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Small gold idol",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold idol|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 75000
    },
    {
      name: "Small gold statuette set with rubies",
      source: "DMG",
      page: 135,
      reprintedAs: [
        "Gold statuette set with rubies|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Small mirror set in a painted wooden frame",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Handheld mirror set in a painted wooden frame|XDMG"
      ],
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Smith's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 84
        }
      ],
      reprintedAs: [
        "Smith's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 8,
      value: 2000,
      additionalEntries: [
        "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Smith's tools include hammers, tongs, charcoal, rags, and a whetstone."
          ]
        },
        {
          type: "entries",
          name: "Arcana and History",
          entries: [
            "Your expertise lends you additional insight when examining metal objects, such as weapons."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "You can spot clues and make deductions that others might overlook when an investigation involves armor, weapons, or other metalwork."
          ]
        },
        {
          type: "entries",
          name: "Repair",
          entries: [
            "With access to your tools and an open flame hot enough to make metal pliable, you can restore 10 hit points to a damaged metal object for each hour of work."
          ]
        },
        {
          type: "table",
          caption: "Smith's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Sharpen a dull blade",
              "10"
            ],
            [
              "Repair a suit of armor",
              "15"
            ],
            [
              "Sunder a nonmagical metal object",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Smith's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 8,
      value: 2000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Strength"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Pry open a door or container ({@dc 20})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "Any Melee weapon (except {@item Club|XPHB}, {@item Greatclub|XPHB}, {@item Quarterstaff|XPHB}, and {@item Whip|XPHB}), Medium armor (except {@item Hide Armor|XPHB|Hide}), Heavy armor, {@item Ball Bearings|XPHB}, {@item Bucket|XPHB}, {@item Caltrops|XPHB}, {@item Chain|XPHB}, {@item Crowbar|XPHB}, {@item Firearm Bullets (10)|XPHB|Firearm Bullets}, {@item Grappling Hook|XPHB}, {@item Iron Pot|XPHB}, {@item Iron Spikes|XPHB}, {@item Sling Bullets (20)|XPHB|Sling Bullets}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Smoke Grenade",
      source: "DMG",
      page: 268,
      reprintedAs: [
        "Smoke Grenade|XDMG"
      ],
      type: "EXP|DMG",
      rarity: "none",
      weight: 2,
      age: "modern",
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|DMG}",
        "One round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Smoke Grenade",
      source: "XDMG",
      page: 73,
      type: "EXP|XDMG",
      rarity: "none",
      weight: 2,
      value: 5000,
      hasRefs: true,
      entries: [
        "{#itemEntry Grenade|XDMG}",
        "The area of the {@variantrule Sphere [Area of Effect]|XPHB|Sphere} is {@variantrule Heavily Obscured|XPHB} by smoke for 1 minute. A strong wind (such as the {@spell Gust of Wind|XPHB} spell) disperses the smoke."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Snowshoes",
      source: "IDRotF",
      page: 20,
      type: "G",
      rarity: "none",
      weight: 4,
      value: 200,
      entries: [
        "Snowshoes reduce the likelihood of their wearer getting stuck in the deep snow."
      ]
    },
    {
      name: "Soap",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      value: 2
    },
    {
      name: "Soothsalts",
      source: "EGW",
      page: 152,
      type: "G",
      rarity: "none",
      value: 15000,
      entries: [
        "Soothsalts are derived from a naturally occurring crystalline substance discovered throughout the wilds of the Miskath Strand. The crimson crystals have been mined from cavernous veins like those in the mouth of the Miskath Pit and found within smaller geode formations near sites ravaged by the Calamity. Soothsalts are consumed orally in lozenge-sized doses, and frequent users can be identified by the telltale crimson stain around their mouths. A creature subjected to a dose of soothsalts gains advantage on all Intelligence checks for {@dice 1d4} hours.",
        "For each dose of soothsalts consumed, the creature must succeed on a {@dc 15} Constitution saving throw or gain one level of {@condition exhaustion}—an effect which is cumulative with multiple doses."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Space Galleon",
      source: "AAG",
      page: 46,
      type: "SPC|AAG",
      rarity: "none",
      value: 3000000,
      crew: 20,
      vehAc: 15,
      vehHp: 400,
      vehDmgThresh: 15,
      vehSpeed: 4,
      capCargo: 20,
      entries: [
        "The space galleon is a mainstay among the host of vessels that ply Wildspace and the Astral Sea. Space galleons can easily pass for ordinary seafaring galleons. Because they can land on water and move across it like their namesakes, they can sail into ports on terrestrial worlds without attracting undue attention. Like an ordinary galleon, a space galleon isn't built to land on the ground (its keel would cause it to roll on its side). The ship's standard weaponry includes two forward-mounted ballistae and an aft-mounted mangonel."
      ],
      seeAlsoVehicle: [
        "Space Galleon|AAG"
      ]
    },
    {
      name: "Spaceship Trinket",
      source: "QftIS",
      page: 161,
      type: "G",
      rarity: "none",
      entries: [
        "The Spaceship Trinkets table below offers a selection of trinkets appropriate for adventures with sci-fi themes. The adventure includes encounters that ask you to roll on the table to determine what random trinkets the characters find in certain locations on the spaceship. None of the trinkets requires an energy cell.",
        {
          type: "table",
          caption: "Spaceship Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01–02",
              "Disembodied robot arm with a mind of its own"
            ],
            [
              "03–04",
              "Wearable blanket with sleeves and a hood"
            ],
            [
              "05–06",
              "Small, rectangular device that can record and play back audio of up to 1 minute in length"
            ],
            [
              "07–08",
              "Glow-in-the-dark ink pen"
            ],
            [
              "09–10",
              "Fashionable jumpsuit"
            ],
            [
              "11–12",
              "Compact scanner that reports whether an object is recyclable in a cheery tone"
            ],
            [
              "13–14",
              "Wristwatch programmed to beep at a specific time"
            ],
            [
              "15–16",
              "Handheld cylinder that produces a 15-foot cone of bright light for up to 1 hour every 24 hours"
            ],
            [
              "17–18",
              "Colorful toy ray gun with lights and sounds"
            ],
            [
              "19–20",
              "Bottle of fizzy, sweet-tasting liquid"
            ],
            [
              "21–22",
              "Map of an unexplored star system"
            ],
            [
              "23–24",
              "Motorized toothbrush that might have been used"
            ],
            [
              "25–26",
              "Tiny robot that shines boots and shoes"
            ],
            [
              "27–28",
              "Pressurized red canister with a flexible hose that, when squeezed as an action, sprays a 15-foot cone of foam. The foam extinguishes all nonmagical flames in the cone. The canister can perform this action only once."
            ],
            [
              "29–30",
              "Loaf of space bread covered in blue-green mold"
            ],
            [
              "31–32",
              "Handheld screen that plays a children's story about a friendly, three-eyed frog named Swampy"
            ],
            [
              "33–34",
              "Compact device that displays the current weather"
            ],
            [
              "35–36",
              "Empty metal bottle that maintains the temperature of liquids stored in it for {@dice 1d4} hours"
            ],
            [
              "37–38",
              "Tiny disc that emits a high-pitched noise in the presence of smoke or mild cooking fumes"
            ],
            [
              "39–40",
              "Aerosolized can of metal polish"
            ],
            [
              "41–42",
              "Identification badge of a deceased crew member"
            ],
            [
              "43–44",
              "Depleted energy cell"
            ],
            [
              "45–46",
              "Pocket-sized instrument that clicks rapidly within 10 feet of radiation (see the \"{@area Spaceship Features|4ae|x}\" section later in this adventure)"
            ],
            [
              "47–48",
              "Vacuum-sealed package of shriveled frankfurters"
            ],
            [
              "49–50",
              "Tin hat that telepathically broadcasts the wearer's surface thoughts to creatures within 10 feet of it"
            ],
            [
              "51–52",
              "Chalky moon rock"
            ],
            [
              "53–54",
              "Collar that, when placed on a Medium or smaller Beast, translates its cries into Common"
            ],
            [
              "55–56",
              "Bottle of expired medicine for treating dizziness"
            ],
            [
              "57–58",
              "Tiny speaker that plays a catchy tune in an unknown language"
            ],
            [
              "59–60",
              "Handheld tool for removing bolts and screws"
            ],
            [
              "61–62",
              "Cautionary pamphlet about the dangers of space"
            ],
            [
              "63–64",
              "Miniature flying saucer"
            ],
            [
              "65–66",
              "Tiny, animatronic bunny that hops after the creature that activates it"
            ],
            [
              "67–68",
              "Stick of deodorant with a surprising scent"
            ],
            [
              "69–70",
              "Countertop appliance that can transform any fruit into a pulpy juice"
            ],
            [
              "71–72",
              "Glass pendant filled with stardust"
            ],
            [
              "73–74",
              "Pot containing an artificially dwarfed tree"
            ],
            [
              "75–76",
              "Otherworldly insect preserved in amber"
            ],
            [
              "77–78",
              "Syringe filled with a viscous, yellow serum"
            ],
            [
              "79–80",
              "Tiny brass orrery"
            ],
            [
              "81–82",
              "Log of passenger names"
            ],
            [
              "83–84",
              "Gas mask with a hole in it"
            ],
            [
              "85–86",
              "Small glass terrarium with an empty cocoon"
            ],
            [
              "87–88",
              "Dongle that never plugs in correctly on the first try"
            ],
            [
              "89–90",
              "Holster fashioned from an unknown reptile's hide"
            ],
            [
              "91–92",
              "Severed bundle of important-looking wires"
            ],
            [
              "93–94",
              "Prosthetic limb with magnetic attachments"
            ],
            [
              "95–96",
              "Set of polyhedral dice that buzz and flash when they land on their highest result"
            ],
            [
              "97–98",
              "Musical instrument that plays electronic tones"
            ],
            [
              "99–00",
              "Trading card of a beloved fictional hero from a far-off world"
            ]
          ]
        }
      ],
      light: [
        {
          bright: 15,
          shape: "cone"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Spellbook",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 3,
      value: 5000,
      entries: [
        "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
      ]
    },
    {
      name: "Spinel",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Spinel|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent red, red-brown, or deep green gemstone."
      ]
    },
    {
      name: "Spinel",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A red, red brown, or deep green gemstone."
      ]
    },
    {
      name: "Spinosaurus",
      source: "ToB1-2023",
      page: 103,
      type: "MNT",
      rarity: "none",
      value: 200000,
      entries: [
        "Before it can be ridden in combat, a {@creature spinosaurus dinosaur|ToB1-2023} must practice bearing the weight of its trainer and passengers. They rarely master more than a handful of tricks, but they are extremely comfortable in the water and can be trained to be are aware that some of their riders may not breathe water.",
        "An adult spinosaurus can carry up to six tons as cargo. Riding a spinosaurus requires an exotic saddle, riding platform, or howdah."
      ]
    },
    {
      name: "Sprig of Mistletoe",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Sprig of Mistletoe|XPHB"
      ],
      type: "SCF",
      scfType: "druid",
      rarity: "none",
      value: 100
    },
    {
      name: "Sprig of Mistletoe",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "SCF|XPHB",
      scfType: "druid",
      rarity: "none",
      value: 100
    },
    {
      name: "Spyglass",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Spyglass|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 100000,
      entries: [
        "Objects viewed through a spyglass are magnified to twice their size."
      ]
    },
    {
      name: "Spyglass",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 100000,
      entries: [
        "Objects viewed through a Spyglass are magnified to twice their size."
      ]
    },
    {
      name: "Squid Ship",
      source: "AAG",
      page: 48,
      otherSources: [
        {
          source: "SjA"
        }
      ],
      type: "SPC|AAG",
      rarity: "none",
      value: 2500000,
      crew: 13,
      vehAc: 15,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 3.5,
      capCargo: 20,
      entries: [
        "Among the oldest types of spelljamming vessels, squid ships are popular with privateers and are often used as patrol ships. Standard weapons on a squid ship include a forward-mounted mangonel, two aft-mounted ballistae, and a reinforced bow for ramming. The tentacles that extend from the bow account for nearly half the ship's keel length.",
        "Squid ships can float and sail on water, and they can land on the ground."
      ],
      seeAlsoVehicle: [
        "Squid Ship|AAG"
      ]
    },
    {
      name: "Stabling (per day)",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Stabling (per day)|XPHB"
      ],
      type: "TAH",
      rarity: "none",
      value: 50
    },
    {
      name: "Stabling (per day)",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "TAH|XPHB",
      rarity: "none",
      value: 5
    },
    {
      name: "Star Moth",
      source: "AAG",
      page: 50,
      type: "SPC|AAG",
      rarity: "none",
      value: 4000000,
      crew: 13,
      vehAc: 13,
      vehHp: 400,
      vehDmgThresh: 15,
      vehSpeed: 5.5,
      capCargo: 30,
      entries: [
        "Star moths are ships constructed and flown by astral elves, who don't like it when these ships end up in the hands of others.",
        "A star moth's hull is fashioned from a grown and sculpted organic substance, and its enormous, decorative wings are made of shimmering crystal. The vessel is built for space travel, but its design does enable it to float on water or land safely on the ground. Standard weaponry includes two ballistae nestled in the star moth's eye holes and a mangonel mounted above the bridge."
      ],
      seeAlsoVehicle: [
        "Star Moth|AAG"
      ]
    },
    {
      name: "Star rose quartz",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Star rose quartz|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A translucent rosy stone with white star-shaped center gemstone."
      ]
    },
    {
      name: "Star rose quartz",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A rosy stone with white star-shaped center gemstone."
      ]
    },
    {
      name: "Star Ruby",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Star Ruby|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A translucent ruby with white star-shaped center gemstone."
      ]
    },
    {
      name: "Star Ruby",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A ruby with white star-shaped center gemstone."
      ]
    },
    {
      name: "Star Sapphire",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Star Sapphire|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A translucent blue sapphire with white star-shaped center gemstone."
      ]
    },
    {
      name: "Star Sapphire",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A blue sapphire with white star-shaped center gemstone."
      ]
    },
    {
      name: "Steel Mirror",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Mirror|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 0.5,
      value: 500
    },
    {
      name: "Stink Bomb",
      source: "TDCSR",
      page: 100,
      type: "EXP|DMG",
      rarity: "none",
      value: 2500,
      range: "30",
      entries: [
        "This smelly explosive can be primed and thrown up to 30 feet as an action. It explodes at the start of your next turn. Creatures within 20 feet of it must make a {@dc 12} Constitution {@quickref saving throws|PHB|2|1|saving throw} or be {@condition poisoned} for 1 minute. A creature can repeat this save at the end of each of its turns, ending the effect on itself on a success."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "String",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 10,
      entries: [
        "String is 10 feet long. You can tie a knot in it as a {@action Utilize|XPHB} action."
      ]
    },
    {
      name: "Sun",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 1000,
      entries: [
        "Platinum coin, twice as large as a {@item nib|wdh} (1 sun = 1,000 {@item nib|wdh|nibs})"
      ]
    },
    {
      name: "Sun amulet on a beaded chain (Sun Empire)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Tangler Grenade",
      source: "WDMM",
      page: 244,
      type: "OTH",
      rarity: "none",
      entries: [
        "A tangler grenade is an alchemical, nonmagical item with an ovoid resin shell that shatters on impact. An as action, a creature can throw a tangler grenade at a point up to 60 feet away. Each creature within 10 feet of a shattered tangler grenade must succeed on a {@dc 15} Dexterity saving throw or be {@condition restrained} by sticky white webs. As an action, a creature can try to free itself or another creature within its reach from the webs, doing so with a successful {@dc 20} Strength ({@skill Athletics}) check. A gallon of alcohol dissolves the webs produced by a single tangler grenade. Otherwise, the webs dissolve on their own after 1 hour, freeing any creatures {@condition restrained} by them."
      ]
    },
    {
      name: "Tankard",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 1,
      value: 2,
      entries: [
        "A tankard holds 1 pint of liquid."
      ]
    },
    {
      name: "Taol",
      source: "WDH",
      page: 169,
      type: "$C",
      rarity: "none",
      value: 200,
      entries: [
        "Brass coin, about two inches square with a hold large enough for a {@item nib|wdh} to fit in (1 taol = 200 {@item nib|wdh|nibs})"
      ]
    },
    {
      name: "Tej",
      source: "ToA",
      page: 32,
      type: "FD",
      rarity: "none",
      weight: 5,
      entries: [
        "Tej is an amber-colored, fermented drink made from honey. It's more common and popular in Chult than beer or ale. A mug of tej costs 4 cp in Port Nyanzaru or 6 cp in Fort Beluarian. A 1-gallon cask costs 2 sp in the city or 3 sp at the fort."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Tent",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 20,
      value: 200,
      entries: [
        "A Tent sleeps up to two Small or Medium creatures."
      ]
    },
    {
      name: "Theki Root",
      source: "EGW",
      page: 70,
      type: "G",
      rarity: "none",
      value: 300,
      entries: [
        "This thick marsh root tastes bitter but is thought to aid digestive health. When you use an action to consume a dose, you gain advantage on saving throws against the effects of poisonous or toxic substances for 8 hours."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Thessaltoxin",
      source: "IMR",
      page: 93,
      rarity: "none",
      poison: true,
      entries: [
        "This poison was first created using blood harvested from the artificer Thessalar. A creature subjected to the poison must succeed on a {@dc 15} Constitution saving throw or take on a new form as if affected by the {@spell polymorph} spell. The creature's new form is a random beast or a creature it has seen within the last 24 hours (as chosen by the DM). This transformation lasts until the end of the target's next long rest. This effect is not subject to {@spell dispel magic} or {@spell remove curse}, but a {@spell greater restoration} spell restores the creature to its original form."
      ],
      poisonTypes: [
        "ingested",
        "injury"
      ],
      attachedSpells: [
        "polymorph"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Thieves' Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 84
        }
      ],
      reprintedAs: [
        "Thieves' Tools|XPHB"
      ],
      type: "T",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
      ],
      additionalEntries: [
        "Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "Your knowledge of traps grants you insight when answering questions about locations that are renowned for their traps."
          ]
        },
        {
          type: "entries",
          name: "Investigation and Perception",
          entries: [
            "You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence."
          ]
        },
        {
          type: "entries",
          name: "Set a Trap",
          entries: [
            "Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else's attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate."
          ]
        },
        {
          type: "table",
          caption: "Thieves' Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Pick a lock",
              "Varies"
            ],
            [
              "Disable a trap",
              "Varies"
            ]
          ]
        }
      ],
      hasFluffImages: true
    },
    {
      name: "Thieves' Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "T|XPHB",
      rarity: "none",
      weight: 1,
      value: 2500,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Pick a lock ({@dc 15}), or disarm a trap ({@dc 15})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Three-Dragon Ante Set",
      source: "PHB",
      page: 154,
      basicRules: true,
      reprintedAs: [
        "Three-Dragon Ante Set|XPHB"
      ],
      type: "GS",
      rarity: "none",
      value: 100
    },
    {
      name: "Three-Dragon Ante Set",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "GS|XPHB",
      rarity: "none",
      value: 100,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Wisdom"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Discern whether someone is cheating ({@dc 10}), or win the game ({@dc 20})"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Tiger Eye",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Tiger Eye|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A translucent brown with golden center gemstone."
      ]
    },
    {
      name: "Tiger Eye",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A brown with golden center gemstone."
      ]
    },
    {
      name: "Tinderbox",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Tinderbox|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute."
      ]
    },
    {
      name: "Tinderbox",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 50,
      entries: [
        "A Tinderbox is a small container holding flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a {@item Candle|XPHB}, {@item Lamp|XPHB}, {@item Hooded Lantern|XPHB|Lantern}, or {@item Torch|XPHB}—or anything else with exposed fuel—takes a {@variantrule Bonus Action|XPHB}. Lighting any other fire takes 1 minute."
      ]
    },
    {
      name: "Tinker's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 84
        }
      ],
      reprintedAs: [
        "Tinker's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 10,
      value: 5000,
      additionalEntries: [
        "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue."
          ]
        },
        {
          type: "entries",
          name: "History",
          entries: [
            "You can determine the age and origin of objects, even if you have only a few pieces remaining from the original."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago."
          ]
        },
        {
          type: "entries",
          name: "Repair",
          entries: [
            "You can restore 10 hit points to a damaged object for each hour of work. For any object, you need access to the raw materials required to repair it. For metal objects, you need access to an open flame hot enough to make the metal pliable."
          ]
        },
        {
          type: "table",
          caption: "Tinker's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Temporarily repair a disabled device",
              "10"
            ],
            [
              "Repair an item in half the time",
              "15"
            ],
            [
              "Improvise a temporary item using scraps",
              "20"
            ]
          ]
        }
      ]
    },
    {
      name: "Tinker's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 10,
      value: 5000,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Assemble a Tiny item composed of scrap, which falls apart in 1 minute ({@dc 20})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Musket|XPHB}, {@item Pistol|XPHB}, {@item Bell|XPHB}, {@item Bullseye Lantern|XPHB}, {@item Flask|XPHB}, {@item Hooded Lantern|XPHB}, {@item Hunting Trap|XPHB}, {@item Lock|XPHB}, {@item Manacles|XPHB}, {@item Mirror|XPHB}, {@item Shovel|XPHB}, {@item Signal Whistle|XPHB}, {@item Tinderbox|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Tiny jade figurine (River Heralds)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Tome of Strahd",
      source: "CoS",
      page: 221,
      type: "G",
      rarity: "none",
      weight: 5,
      entries: [
        "The Tome of Strahd is an ancient work penned by Strahd, a tragic tale of how he came to his fallen state. The book is bound in a thick leather cover with steel hinges and fastenings. The pages are of parchment and very brittle. Most of the book is written in the curious shorthand that only Strahd employs. Stains and age have made most of the work illegible, but several paragraphs remain intact."
      ],
      hasFluffImages: true
    },
    {
      name: "Topaz",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Topaz|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A transparent golden yellow gemstone."
      ]
    },
    {
      name: "Topaz",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 50000,
      entries: [
        "A golden yellow gemstone."
      ]
    },
    {
      name: "Torch",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Torch|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 1,
      value: 1,
      entries: [
        "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
      ],
      light: [
        {
          bright: 20,
          dim: 40
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Torch",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 1,
      value: 1,
      entries: [
        "A Torch burns for 1 hour, casting {@variantrule Bright Light|XPHB} in a 20-foot radius and {@variantrule Dim Light|XPHB} for an additional 20 feet. When you take the {@action Attack|XPHB} action, you can attack with the Torch, using it as a Simple Melee weapon. On a hit, the target takes 1 Fire damage."
      ],
      light: [
        {
          bright: 20,
          dim: 40
        }
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Torpor",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Torpor|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 60000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for {@dice 4d6} hours. The {@condition poisoned} creature is {@condition incapacitated}."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Torpor",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 60000,
      poison: true,
      entries: [
        "A creature subjected to Torpor poison must succeed on a {@dc 15} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for {@dice 4d6} hours. The creature's {@variantrule Speed|XPHB} is halved while the creature is {@condition Poisoned|XPHB} in this way."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Totem",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      type: "SCF",
      scfType: "druid",
      rarity: "none",
      value: 100
    },
    {
      name: "Tourmaline",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Tourmaline|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A transparent pale green, blue, brown, or red gemstone."
      ]
    },
    {
      name: "Tourmaline",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 10000,
      entries: [
        "A pale green, blue, brown, or red gemstone."
      ]
    },
    {
      name: "Traveler's Clothes",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Traveler's Clothes|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 4,
      value: 200
    },
    {
      name: "Traveler's Clothes",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 4,
      value: 200,
      entries: [
        "Traveler's Clothes are resilient garments designed for travel in various environments."
      ]
    },
    {
      name: "Treasure chest crafted of exotic wood with gold fittings and opals (Brazen Coalition)",
      source: "PSX",
      page: 25,
      type: "$A|DMG",
      rarity: "none",
      value: 750000
    },
    {
      name: "Trinket",
      source: "AI",
      page: 222,
      type: "G",
      rarity: "none",
      entries: [
        "Worried that you're going to pull out your dead sprite inside a clear glass bottle at a company function only to discover that three other people in the franchise have one as well? Then consider rolling on the Acquisitions Incorporated Trinkets table instead of the {@item Trinket|phb|table in chapter 5 of the Player's Handbook}, to gain a unique trinket at character creation with a bit of Acq Inc flair.",
        {
          type: "table",
          caption: "Acquisitions Incorporated Trinkets",
          colLabels: [
            "d100",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A perfect skipping stone"
            ],
            [
              "2",
              "Three weighted dice that always roll low"
            ],
            [
              "3",
              "A locket with a picture of Jim Darkmagic"
            ],
            [
              "4",
              "A tiny anvil and smith's hammer"
            ],
            [
              "5",
              "A nonfunctional immovable rod"
            ],
            [
              "6",
              "A DIY acupuncture kit"
            ],
            [
              "7",
              "A stuffed owlbear toy"
            ],
            [
              "8",
              "A diagram for a new war lute"
            ],
            [
              "9",
              "A declaration of war against a nation no one has ever heard of"
            ],
            [
              "10",
              "A pipe that emits green smoke"
            ],
            [
              "11",
              "A glass eye"
            ],
            [
              "12",
              "The centerpiece of a priceless chandelier"
            ],
            [
              "13",
              "A fine cane with a secret compartment"
            ],
            [
              "14",
              "A letter written by Rosie Beestinger"
            ],
            [
              "15",
              "A coin that always lands on its edge"
            ],
            [
              "16",
              "The deed and title to an abandoned windmill and three acres of tillable land that you've never been able to find"
            ],
            [
              "17",
              "A menu from Big Daddy Donaar's Yum Yum Hut"
            ],
            [
              "18",
              "A small purse that screams loudly when opened"
            ],
            [
              "19",
              "A deep-crow-feather quill"
            ],
            [
              "20",
              "A pair of breeches that always smells faintly of honey"
            ],
            [
              "21",
              "A one-armed Viari doll (Apocalypse Dagger accessory missing)"
            ],
            [
              "22",
              "A leather pouch filled with various finger bones of unknown provenance"
            ],
            [
              "23",
              "The collar of your childhood pet, Nutmeg"
            ],
            [
              "24",
              "A seashell that, when pressed to the ear, speaks in flowing rhymes"
            ],
            [
              "25",
              "A recipe book for cooking with mushrooms"
            ],
            [
              "26",
              "One expired coupon for \"A Free Cornerstone\""
            ],
            [
              "27",
              "A portable beehive"
            ],
            [
              "28",
              "Goggles that literally tint everything rose colored"
            ],
            [
              "29",
              "A wand of wonder that allows you to cast only mending"
            ],
            [
              "30",
              "A bracelet woven from mistletoe"
            ],
            [
              "31",
              "A curved claw from an unknown beast that small children are always frightened of"
            ],
            [
              "32",
              "A longsword that can be folded down in 1 minute and hidden in your pocket"
            ],
            [
              "33",
              "A living graft of what you believe to be the World Tree"
            ],
            [
              "34",
              "A tattered scarf with the Acquisitions Incorporated logo"
            ],
            [
              "35",
              "A box containing a torn-up letter"
            ],
            [
              "36",
              "An old contract marked \"Void\""
            ],
            [
              "37",
              "A small pigeon in a cage"
            ],
            [
              "38",
              "An Acquisitions Incorporated \"Green Flame\" foam finger"
            ],
            [
              "39",
              "A \"C\" Team lunchbox"
            ],
            [
              "40",
              "A potted plant that grows different fruit on every branch"
            ],
            [
              "41",
              "A book of adventures for children"
            ],
            [
              "42",
              "An Omin action figure with detachable maul and holy symbol"
            ],
            [
              "43",
              "A pint glass engraved with a picture of a keg robot"
            ],
            [
              "44",
              "A giant hockey puck"
            ],
            [
              "45",
              "A miniature cannon that actually fires"
            ],
            [
              "46",
              "A very fancy red scarf and matching handkerchief"
            ],
            [
              "47",
              "An arrow once shot by Môrgæn"
            ],
            [
              "48",
              "A purple worm toy"
            ],
            [
              "49",
              "A burned doll whose eyes follow you around the room"
            ],
            [
              "50",
              "An infinite inkwell"
            ],
            [
              "51",
              "A band embroidered with the symbol of the Six"
            ],
            [
              "52",
              "A squishy cactus"
            ],
            [
              "53",
              "A velvet blindfold"
            ],
            [
              "54",
              "A dirty figurine of a triceratops that can't be cleaned"
            ],
            [
              "55",
              "A used (and thus nonmagical) noble knife from the Noble Knife"
            ],
            [
              "56",
              "A quill that rotates through all the colors of the rainbow"
            ],
            [
              "57",
              "A twenty-sided die that only rolls the number 4"
            ],
            [
              "58",
              "A pointed hat that glows in the dark"
            ],
            [
              "59",
              "A cup that hums when filled with water"
            ],
            [
              "60",
              "A mug fashioned from the skull of someone else's enemy"
            ],
            [
              "61",
              "A small glass jar containing an immortal firefly"
            ],
            [
              "62",
              "A fake mustache made from gnome facial hair"
            ],
            [
              "63",
              "A petrified troll finger"
            ],
            [
              "64",
              "Half of a map"
            ],
            [
              "65",
              "The other half of a map"
            ],
            [
              "66",
              "An unreasonable amount of pocket lint"
            ],
            [
              "67",
              "A dozen flyers for a local gnome food place"
            ],
            [
              "68",
              "Omin Dran's business card"
            ],
            [
              "69",
              "A lock of hair from a changeling"
            ],
            [
              "70",
              "A marble that rolls uphill"
            ],
            [
              "71",
              "A piece of parchment listing a command word for a powerful magic item"
            ],
            [
              "72",
              "A book titled Conversational Giant"
            ],
            [
              "73",
              "A user's manual for an apparatus of Kwalish"
            ],
            [
              "74",
              "A signed headshot of famous bard Spice Caraway"
            ],
            [
              "75",
              "The eye of a basilisk in a crystal box"
            ],
            [
              "76",
              "A postcard from Ravnica"
            ],
            [
              "77",
              "A stamp collection"
            ],
            [
              "78",
              "A small piece of solidified smoke"
            ],
            [
              "79",
              "A six-sided die that sometimes rolls a seven"
            ],
            [
              "80",
              "A left-hand gauntlet"
            ],
            [
              "81",
              "A music box that plays nursery rhymes"
            ],
            [
              "82",
              "A locket that's bigger on the outside than the inside"
            ],
            [
              "83",
              "A potted plant that grows hair instead of leaves"
            ],
            [
              "84",
              "A collection of teeth"
            ],
            [
              "85",
              "A coin whose minting date always shows three years in the future"
            ],
            [
              "86",
              "A green drinking horn taken from a very large bull"
            ],
            [
              "87",
              "A small book containing pressed and dried botanical samples"
            ],
            [
              "88",
              "A hatched chimera egg"
            ],
            [
              "89",
              "A slightly used red bandit mask"
            ],
            [
              "90",
              "A tiny stirge encased in amber"
            ],
            [
              "91",
              "A large bottle of Red Larch Ale that can't be opened"
            ],
            [
              "92",
              "A cane topped with a stylized golden bulldog"
            ],
            [
              "93",
              "A note in your own hand that you don't remember writing"
            ],
            [
              "94",
              "A sprig of herbs from your family's garden"
            ],
            [
              "95",
              "A tankard stolen from the Dran & Courtier"
            ],
            [
              "96",
              "A small, severed tentacle preserved in alcohol"
            ],
            [
              "97",
              "A walnut with a face drawn on it"
            ],
            [
              "98",
              "A small flask of liquid from the Lake of Radiant Mists"
            ],
            [
              "99",
              "An ice cube that never melts"
            ],
            [
              "00",
              "An expertly carved sword hilt with the blade snapped cleanly off"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ],
      hasFluffImages: true
    },
    {
      name: "Trinket",
      source: "CoS",
      page: 2,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
        {
          type: "table",
          caption: "Curse of Strahd. Character Options, Gothic Trinket Table",
          colLabels: [
            "{@dice d100}",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01-02",
              "A picture you drew as a child of your imaginary friend"
            ],
            [
              "03-04",
              "A lock that opens when blood is dripped in its keyhole"
            ],
            [
              "05-06",
              "Clothes stolen from a {@creature scarecrow}"
            ],
            [
              "07-08",
              "A spinning top carved with four faces: happy, sad, wrathful, and dead"
            ],
            [
              "09-10",
              "The necklace of a sibling who died on the day you were born"
            ],
            [
              "11-12",
              "A wig from someone executed by beheading"
            ],
            [
              "13-14",
              "The unopened letter to you from your dying father"
            ],
            [
              "15-16",
              "A pocket watch that runs backward for an hour every midnight"
            ],
            [
              "17-18",
              "A winter coat stolen from a dying soldier"
            ],
            [
              "19-20",
              "A bottle of invisible ink that can only be read at sunset"
            ],
            [
              "21-22",
              "A wineskin that refills when interred with a dead person for a night"
            ],
            [
              "23-24",
              "A set of silverware used by a king for his last meal"
            ],
            [
              "25-26",
              "A spyglass that always shows the world suffering a terrible storm"
            ],
            [
              "27-28",
              "A cameo with the profile's face scratched away"
            ],
            [
              "29-30",
              "A lantern with a black candle that never runs out and that burns with green flame"
            ],
            [
              "31-32",
              "A teacup from a child's tea set, stained with blood"
            ],
            [
              "33-34",
              "A little black book that records your dreams, and yours alone, when you sleep"
            ],
            [
              "35-36",
              "A necklace formed of the interlinked holy symbols of a dozen deities"
            ],
            [
              "37-38",
              "A hangman's noose that feels heavier than it should"
            ],
            [
              "39-40",
              "A birdcage into which small birds fly but once inside never eat or leave"
            ],
            [
              "41-42",
              "A lepidopterist's box filled dead moths with skulllike patterns on their wings"
            ],
            [
              "43-44",
              "A jar of pickled ghouls' tongues"
            ],
            [
              "45-46",
              "The wooden hand of a notorious pirate"
            ],
            [
              "47-48",
              "An urn with the ashes of a dead relative"
            ],
            [
              "49-50",
              "A hand mirror backed with a bronze depiction of a {@creature medusa}"
            ],
            [
              "51-52",
              "Pallid leather gloves crafted with ivory fingernails"
            ],
            [
              "53-54",
              "Dice made from the knuckles of a notorious charlatan"
            ],
            [
              "55-56",
              "A ring of keys for forgotten locks"
            ],
            [
              "57-58",
              "Nails from the coffin of a murderer"
            ],
            [
              "59-60",
              "A key to the family crypt"
            ],
            [
              "61-62",
              "A bouquet of funerary flowers that always looks and smells fresh"
            ],
            [
              "63-64",
              "A switch used to discipline you as a child"
            ],
            [
              "65-66",
              "A music box that plays by itself whenever someone holding it dances"
            ],
            [
              "67-68",
              "A walking cane with an iron ferrule that strikes sparks on stone"
            ],
            [
              "69-70",
              "A flag from a ship lost at sea"
            ],
            [
              "71-72",
              "Porcelain doll's head that always seems to be looking at you"
            ],
            [
              "73-74",
              "A wolf's head wrought in silver that is also a whistle"
            ],
            [
              "75-76",
              "A small mirror that shows a much older version of the viewer"
            ],
            [
              "77-78",
              "Small, worn book of children's nursery rhymes"
            ],
            [
              "79-80",
              "A mummified raven claw"
            ],
            [
              "81-82",
              "A broken pendent of a silver dragon that's always cold to the touch"
            ],
            [
              "83-84",
              "A small locked box that quietly hums a lovely melody at night but you always forget it in the morning"
            ],
            [
              "85-86",
              "An inkwell that makes one a little nauseous when staring at it"
            ],
            [
              "87-88",
              "An old little doll made from a dark, dense wood and missing a hand and a foot"
            ],
            [
              "89-90",
              "A black executioner's hood"
            ],
            [
              "91-92",
              "A pouch made of flesh, with a sinew drawstring"
            ],
            [
              "93-94",
              "A tiny spool of black thread that never runs out"
            ],
            [
              "95-96",
              "A tiny clockwork figurine of a dancer that's missing a gear and doesn't work"
            ],
            [
              "97-98",
              "A black wooden pipe that creates puffs of smoke that look like skulls"
            ],
            [
              "99-00",
              "A vial of perfume, the scent of which only certain creatures can detect"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Trinket",
      source: "EET",
      page: 1,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
        {
          type: "table",
          caption: "Elemental Evil Trinket Table",
          colLabels: [
            "{@dice d100}",
            "Trinket"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "01",
              "A compass that always points to Mulmaster"
            ],
            [
              "02",
              "A paper fan that won't produce a breeze no matter how hard it's waved"
            ],
            [
              "03",
              "A petrified potato that resembles someone important to you"
            ],
            [
              "04",
              "A glass cup that can only be filled half way no matter how much liquid is poured into it"
            ],
            [
              "05",
              "A mirror that only shows the back of your head"
            ],
            [
              "06",
              "A small glass bird that when set down near water dips its head in as if to get a drink"
            ],
            [
              "07",
              "A lady's coin purse containing two sharp fangs"
            ],
            [
              "08",
              "A small sea conch with the words \"From the beginning\" painted on the lip"
            ],
            [
              "09",
              "A frost-covered silver locket that's frozen shut"
            ],
            [
              "10",
              "A seal which imprints a mysterious, unknown coat of arms into hard rock"
            ],
            [
              "11",
              "A small wooden doll that when held brings back fond memories"
            ],
            [
              "12",
              "A small handmirror which only reflects inanimate objects"
            ],
            [
              "13",
              "A glass eyeball that looks about of its own accordance, and can roll around"
            ],
            [
              "14",
              "A glass orb that replicates yesterday's weather inside itself"
            ],
            [
              "15",
              "A drinking cup, that randomly fills with fresh or salt water. Refilling once emptied"
            ],
            [
              "16",
              "A deep blue piece of flint, that when struck with steel produces not a spark but a drop of water"
            ],
            [
              "17",
              "A conch shell which is always damp and constantly drips saltwater"
            ],
            [
              "18",
              "A charred, half-melted pewter clasp that glows as if smoldering but releases no heat"
            ],
            [
              "19",
              "A clockwork finch that flaps its wings in the presence of a breeze"
            ],
            [
              "20",
              "An unbreakable sealed jar of glowing water that hums when shaken"
            ],
            [
              "21",
              "A small, finely polished geode whose crystals slowly fade between every color of the spectrum"
            ],
            [
              "22",
              "A rough stone eye pulled from a petrified creature"
            ],
            [
              "23",
              "A stone smoking pipe that never needs lighting"
            ],
            [
              "24",
              "A small whistle, that when blown, whispers a name of a person or place unknown to you, instead of the whistle sound"
            ],
            [
              "25",
              "A fist sized rock that \"beats\" like a heart"
            ],
            [
              "26",
              "A pair of bronze scissors in the shape of a pair of leaping dolphins"
            ],
            [
              "27",
              "A bronze oil lamp which is rumored to have once held a genie"
            ],
            [
              "28",
              "A single gauntlet inscribed with a fire motif and an unfamiliar name in Primordial"
            ],
            [
              "29",
              "A one-eyed little fish inside a spherical vial, much bigger than the vial's neck, He has a cunning look"
            ],
            [
              "30",
              "The tiny skull of a rabbit that whispers scathing insults when nobody is looking"
            ],
            [
              "31",
              "A rag doll in the likeness of an {@creature owlbear}"
            ],
            [
              "32",
              "The desiccated body of a small eight-legged black lizard"
            ],
            [
              "33",
              "A small toy boat made with a walnut shell, toothpick, and piece of cloth"
            ],
            [
              "34",
              "A small pocket mirror that slowly fogs over while held"
            ],
            [
              "35",
              "Wind chimes that glow when the wind blows"
            ],
            [
              "36",
              "A small, clay square with an unknown rune etched into one side"
            ],
            [
              "37",
              "A tea kettle that heats itself when filled with water"
            ],
            [
              "38",
              "An old scratched monocle which shows an underwater landscape whenever someone looks through it"
            ],
            [
              "39",
              "A rose carved from coral"
            ],
            [
              "40",
              "A set of dice with elemental symbols and primordial runes instead of pips or numbers"
            ],
            [
              "41",
              "An amulet filled with liquid that churns, freezes, or boils to match it's wearer's mood"
            ],
            [
              "42",
              "A small silver bell that makes a sound like quiet, distant thunder when it's struck"
            ],
            [
              "43",
              "A small vial of black sand that glows slightly in the moonlight"
            ],
            [
              "44",
              "A small whale tooth with etched with an image of waves crashing upon a beach"
            ],
            [
              "45",
              "An hourglass in which the sands pour upward instead of downward"
            ],
            [
              "46",
              "A glass pendant with a hole in the center that a mild breeze always blows out of"
            ],
            [
              "47",
              "A soft feather that falls like a stone when dropped"
            ],
            [
              "48",
              "A large transparent gem that, when gripped tightly, whispers in Terran"
            ],
            [
              "49",
              "A small crystal snowglobe that, when shaken, seems to form silhouettes of dancing forms"
            ],
            [
              "50",
              "Half of a palm-sized geode that pulses dimly with purple light"
            ],
            [
              "51",
              "A book filled with writing that only appears when the book is held underwater"
            ],
            [
              "52",
              "A sealed envelope made of red leather that you haven't been able to open. It smells of campfire"
            ],
            [
              "53",
              "A locket of hair that is rumored to have come from a famed fire genasi"
            ],
            [
              "54",
              "Flint and steel that, when used to start a fire, creates a random colored flame"
            ],
            [
              "55",
              "A blank piece of wet parchment that never seems to dry"
            ],
            [
              "56",
              "A small puzzle box made of brass, that is slightly warm to the touch"
            ],
            [
              "57",
              "A cloudy chunk of glass that is said to hold a spark of breath from a blue dragon"
            ],
            [
              "58",
              "A crude chalice made of coal"
            ],
            [
              "59",
              "A miniature brass horn, silent when played, but fills the air with the scent of warm and exotic spices"
            ],
            [
              "60",
              "An eye-sized blue pearl that floats in salt water"
            ],
            [
              "61",
              "A tuning fork made from a dark metal which glows with a pale, white light during thunderstorms"
            ],
            [
              "62",
              "A small vial that is always filled with the smell of autumn wind"
            ],
            [
              "63",
              "A clear marble that slowly rolls toward the nearest source of running water"
            ],
            [
              "64",
              "A small collapsible silver cup that perspires constantly when opened"
            ],
            [
              "65",
              "An hourglass that tells time with falling mist instead of sand"
            ],
            [
              "66",
              "An ornate razor, which only cuts in freezing cold temperature"
            ],
            [
              "67",
              "A shark tooth covered in tiny etched words from a lost language"
            ],
            [
              "68",
              "A large brass coin with no markings or images on it"
            ],
            [
              "69",
              "A small wooden box filled with a strange red clay"
            ],
            [
              "70",
              "A necklace with a small, rusted iron anchor"
            ],
            [
              "71",
              "A small brass flute adorned with silver wire that is always faintly sounding"
            ],
            [
              "72",
              "A red and black Aarakocra feather"
            ],
            [
              "73",
              "A palm-sized stone with a hole in it, through which can be heard a constantly whispering wind"
            ],
            [
              "74",
              "A small conch shell covered in black crystal"
            ],
            [
              "75",
              "A small music box made of brass. It features a pair of tiny automatons that resemble {@creature Azer} working at a forge"
            ],
            [
              "76",
              "A glass jar containing the preserved corpse of an unfamiliar aquatic creature"
            ],
            [
              "77",
              "A piece of petrified wood carved into the shape of a seashell"
            ],
            [
              "78",
              "A wooden puzzle cube covered in elemental symbols"
            ],
            [
              "79",
              "A small stone cube that acts as a magnet when placed against another stone"
            ],
            [
              "80",
              "A ring made of a white metal. On the inside is a name etched in Auran"
            ],
            [
              "81",
              "A bracelet made of silvered fish hooks"
            ],
            [
              "82",
              "A journal filled with poetry hand-written in Primordial"
            ],
            [
              "83",
              "A yellow gemstone that glows dimly when a storm is nearby"
            ],
            [
              "84",
              "A charred chisel with an unfamiliar symbol stamped into its base"
            ],
            [
              "85",
              "A canteen filled with a foul smelling orange mud"
            ],
            [
              "86",
              "A faceless doll made of driftwood"
            ],
            [
              "87",
              "A heavy iron key bearing the name of a ship long lost to the sea"
            ],
            [
              "88",
              "A small jewelry box made from the shell of a turtle"
            ],
            [
              "89",
              "A chess piece fashioned to look like fire myrmidon"
            ],
            [
              "90",
              "A spinning top with an image of one of the four elements on each side"
            ],
            [
              "91",
              "A single hoop earring made of a porous red stone"
            ],
            [
              "92",
              "An arrowhead carved from seasalt"
            ],
            [
              "93",
              "A small comb made of blue coral"
            ],
            [
              "94",
              "Seven small beads of sandstone on a string, all different colors"
            ],
            [
              "95",
              "A romance chapbook written in Undercommon titled \"Just one Layer of Grey\""
            ],
            [
              "96",
              "A tiny, broken clockwork Harpy"
            ],
            [
              "97",
              "An ivory whale statuette"
            ],
            [
              "98",
              "A fist-sized cog, covered in barnacles"
            ],
            [
              "99",
              "An eyepatch made of obsidian and a black leather cord"
            ],
            [
              "100",
              "A glass bottle with a tiny ship of unfamiliar design inside"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Trinket",
      source: "PHB",
      page: 159,
      basicRules: true,
      reprintedAs: [
        "Trinket|XPHB"
      ],
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
        {
          type: "table",
          caption: "Player's Handbook Trinket Table",
          colLabels: [
            "{@dice d100}",
            "Trinket"
          ],
          colStyles: [
            "col-1 text-center",
            "col-11"
          ],
          rows: [
            [
              "01",
              "A mummified goblin hand"
            ],
            [
              "02",
              "A piece of crystal that faintly glows in the moonlight"
            ],
            [
              "03",
              "A gold coin minted in an unknown land"
            ],
            [
              "04",
              "A diary written in a language you don't know"
            ],
            [
              "05",
              "A brass ring that never tarnishes"
            ],
            [
              "06",
              "An old chess piece made from glass"
            ],
            [
              "07",
              "A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips"
            ],
            [
              "08",
              "A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it"
            ],
            [
              "09",
              "A rope necklace from which dangles four mummified elf fingers"
            ],
            [
              "10",
              "The deed for a parcel of land in a realm unknown to you"
            ],
            [
              "11",
              "A 1-ounce block made from an unknown material"
            ],
            [
              "12",
              "A small cloth doll skewered with needles"
            ],
            [
              "13",
              "A tooth from an unknown beast"
            ],
            [
              "14",
              "An enormous scale, perhaps from a dragon"
            ],
            [
              "15",
              "A bright green feather"
            ],
            [
              "16",
              "An old divination card bearing your likeness"
            ],
            [
              "17",
              "A glass orb filled with moving smoke"
            ],
            [
              "18",
              "A 1-pound egg with a bright red shell"
            ],
            [
              "19",
              "A pipe that blows bubbles"
            ],
            [
              "20",
              "A glass jar containing a weird bit of flesh floating in pickling fluid"
            ],
            [
              "21",
              "A tiny gnome-crafted music box that plays a song you dimly remember from your childhood"
            ],
            [
              "22",
              "A small wooden statuette of a smug halfling"
            ],
            [
              "23",
              "A brass orb etched with strange runes"
            ],
            [
              "24",
              "A multicolored stone disk"
            ],
            [
              "25",
              "A tiny silver icon of a raven"
            ],
            [
              "26",
              "A bag containing forty-seven humanoid teeth, one of which is rotten"
            ],
            [
              "27",
              "A shard of obsidian that always feels warm to the touch"
            ],
            [
              "28",
              "A dragon's bony talon hanging from a plain leather necklace"
            ],
            [
              "29",
              "A pair of old socks"
            ],
            [
              "30",
              "A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking"
            ],
            [
              "31",
              "A silver badge in the shape of a five-pointed star"
            ],
            [
              "32",
              "A knife that belonged to a relative"
            ],
            [
              "33",
              "A glass vial filled with nail clippings"
            ],
            [
              "34",
              "A rectangular metal device with two tiny metal cups on one end that throws sparks when wet"
            ],
            [
              "35",
              "A white, sequined glove sized for a human"
            ],
            [
              "36",
              "A vest with one hundred tiny pockets"
            ],
            [
              "37",
              "A small, weightless stone block"
            ],
            [
              "38",
              "A tiny sketch portrait of a goblin"
            ],
            [
              "39",
              "An empty glass vial that smells of perfume when opened"
            ],
            [
              "40",
              "A gemstone that looks like a lump of coal when examined by anyone but you"
            ],
            [
              "41",
              "A scrap of cloth from an old banner"
            ],
            [
              "42",
              "A rank insignia from a lost legionnaire"
            ],
            [
              "43",
              "A tiny silver bell without a clapper"
            ],
            [
              "44",
              "A mechanical canary inside a gnomish lamp"
            ],
            [
              "45",
              "A tiny chest carved to look like it has numerous feet on the bottom"
            ],
            [
              "46",
              "A dead {@creature sprite} inside a clear glass bottle"
            ],
            [
              "47",
              "A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)"
            ],
            [
              "48",
              "A glass orb filled with water, in which swims a clockwork goldfish"
            ],
            [
              "49",
              "A silver spoon with an 'M' engraved on the handle"
            ],
            [
              "50",
              "A whistle made from gold-colored wood"
            ],
            [
              "51",
              "A dead scarab beetle the size of your hand"
            ],
            [
              "52",
              "Two toy soldiers, one with a missing head "
            ],
            [
              "53",
              "A small box filled with different-sized buttons"
            ],
            [
              "54",
              "A candle that can't be lit"
            ],
            [
              "55",
              "A tiny cage with no door"
            ],
            [
              "56",
              "An old key"
            ],
            [
              "57",
              "An indecipherable treasure map"
            ],
            [
              "58",
              "A hilt from a broken sword"
            ],
            [
              "59",
              "A rabbit's foot"
            ],
            [
              "60",
              "A glass eye"
            ],
            [
              "61",
              "A cameo carved in the likeness of a hideous person"
            ],
            [
              "62",
              "A silver skull the size of a coin"
            ],
            [
              "63",
              "An alabaster mask"
            ],
            [
              "64",
              "A pyramid of sticky black incense that smells very bad"
            ],
            [
              "65",
              "A nightcap that, when worn, gives you pleasant dreams"
            ],
            [
              "66",
              "A single caltrop made from bone"
            ],
            [
              "67",
              "A gold monocle frame without the lens"
            ],
            [
              "68",
              "A 1-inch cube, each side painted a different color"
            ],
            [
              "69",
              "A crystal knob from a door"
            ],
            [
              "70",
              "A small packet filled with pink dust"
            ],
            [
              "71",
              "A fragment of a beautiful song, written as musical notes on two pieces of parchment"
            ],
            [
              "72",
              "A silver teardrop earring made from a real teardrop"
            ],
            [
              "73",
              "The shell of an egg painted with scenes of human misery in disturbing detail"
            ],
            [
              "74",
              "A fan that, when unfolded, shows a sleeping cat"
            ],
            [
              "75",
              "A set of bone pipes"
            ],
            [
              "76",
              "A four-leaf clover pressed inside a book discussing manners and etiquette"
            ],
            [
              "77",
              "A sheet of parchment upon which is drawn a complex mechanical contraption"
            ],
            [
              "78",
              "An ornate scabbard that fits no blade you have found so far"
            ],
            [
              "79",
              "An invitation to a party where a murder happened"
            ],
            [
              "80",
              "A bronze pentacle with an etching of a rat's head in its center"
            ],
            [
              "81",
              "A purple handkerchief embroidered with the name of a powerful {@creature archmage}"
            ],
            [
              "82",
              "Half of a floorplan for a temple, castle, or some other structure"
            ],
            [
              "83",
              "A bit of folded cloth that, when unfolded, turns into a stylish cap"
            ],
            [
              "84",
              "A receipt of deposit at a bank in a far-flung city"
            ],
            [
              "85",
              "A diary with seven missing pages"
            ],
            [
              "86",
              "An empty silver snuffbox bearing an inscription on the surface that says \"dreams\""
            ],
            [
              "87",
              "An iron holy symbol devoted to an unknown god"
            ],
            [
              "88",
              "A book that tells the story of a legendary hero's rise and fall, with the last chapter missing"
            ],
            [
              "89",
              "A vial of dragon blood"
            ],
            [
              "90",
              "An ancient arrow of elven design"
            ],
            [
              "91",
              "A needle that never bends"
            ],
            [
              "92",
              "An ornate brooch of dwarven design"
            ],
            [
              "93",
              "An empty wine bottle bearing a pretty label that says, \"The Wizard of Wines Winery, Red Dragon Crush, 331422-W\""
            ],
            [
              "94",
              "A mosaic tile with a multicolored, glazed surface"
            ],
            [
              "95",
              "A {@condition petrified} mouse"
            ],
            [
              "96",
              "A black pirate flag adorned with a dragon's skull and crossbones"
            ],
            [
              "97",
              "A tiny mechanical crab or spider that moves about when it's not being observed"
            ],
            [
              "98",
              "A glass jar containing lard with a label that reads, \"Griffon Grease\""
            ],
            [
              "99",
              "A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body"
            ],
            [
              "100",
              "A metal urn containing the ashes of a hero"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ],
      hasFluffImages: true
    },
    {
      name: "Trinket",
      source: "XPHB",
      page: 47,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      entries: [
        "When you make your character, you can roll once on the Trinkets table to gain a Tiny trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creature's pockets.",
        {
          type: "table",
          caption: "Trinkets",
          colLabels: [
            "{@dice 1d100}",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "01",
              "A mummified goblin hand"
            ],
            [
              "02",
              "A crystal that faintly glows in moonlight"
            ],
            [
              "03",
              "A gold coin minted in an unknown land"
            ],
            [
              "04",
              "A diary written in a language you don't know"
            ],
            [
              "05",
              "A brass ring that never tarnishes"
            ],
            [
              "06",
              "An old chess piece made from glass"
            ],
            [
              "07",
              "A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips"
            ],
            [
              "08",
              "A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it"
            ],
            [
              "09",
              "A lock of someone's hair"
            ],
            [
              "10",
              "The deed for a parcel of land in a realm unknown to you"
            ],
            [
              "11",
              "A 1-ounce block made from an unknown material"
            ],
            [
              "12",
              "A small cloth doll skewered with needles"
            ],
            [
              "13",
              "A tooth from an unknown beast"
            ],
            [
              "14",
              "An enormous scale, perhaps from a dragon"
            ],
            [
              "15",
              "A bright-green feather"
            ],
            [
              "16",
              "An old divination card bearing your likeness"
            ],
            [
              "17",
              "A glass orb filled with moving smoke"
            ],
            [
              "18",
              "A 1-pound egg with a bright-red shell"
            ],
            [
              "19",
              "A pipe that blows bubbles"
            ],
            [
              "20",
              "A glass jar containing a bit of flesh floating in pickling fluid"
            ],
            [
              "21",
              "A gnome-crafted music box that plays a song you dimly remember from your childhood"
            ],
            [
              "22",
              "A wooden statuette of a smug halfling"
            ],
            [
              "23",
              "A brass orb etched with strange runes"
            ],
            [
              "24",
              "A multicolored stone disk"
            ],
            [
              "25",
              "A silver icon of a raven"
            ],
            [
              "26",
              "A bag containing forty-seven teeth, one of which is rotten"
            ],
            [
              "27",
              "A shard of obsidian that always feels warm to the touch"
            ],
            [
              "28",
              "A dragon's talon strung on a leather necklace"
            ],
            [
              "29",
              "A pair of old socks"
            ],
            [
              "30",
              "A blank book whose pages refuse to hold ink, chalk, graphite, or any other marking"
            ],
            [
              "31",
              "A silver badge that is a five-pointed star"
            ],
            [
              "32",
              "A knife that belonged to a relative"
            ],
            [
              "33",
              "A glass vial filled with nail clippings"
            ],
            [
              "34",
              "A rectangular metal device with two tiny metal cups on one end that throws sparks when wet"
            ],
            [
              "35",
              "A white, sequined glove sized for a human"
            ],
            [
              "36",
              "A vest with one hundred tiny pockets"
            ],
            [
              "37",
              "A weightless stone"
            ],
            [
              "38",
              "A sketch of a goblin"
            ],
            [
              "39",
              "An empty glass vial that smells of perfume"
            ],
            [
              "40",
              "A gemstone that looks like a lump of coal when examined by anyone but you"
            ],
            [
              "41",
              "A scrap of cloth from an old banner"
            ],
            [
              "42",
              "A rank insignia from a lost legionnaire"
            ],
            [
              "43",
              "A silver bell without a clapper"
            ],
            [
              "44",
              "A mechanical canary inside a lamp"
            ],
            [
              "45",
              "A miniature chest carved to look like it has numerous feet on the bottom"
            ],
            [
              "46",
              "A dead sprite inside a clear glass bottle"
            ],
            [
              "47",
              "A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)"
            ],
            [
              "48",
              "A glass orb filled with water, in which swims a clockwork goldfish"
            ],
            [
              "49",
              "A silver spoon with an M engraved on the handle"
            ],
            [
              "50",
              "A whistle made from gold-colored wood"
            ],
            [
              "51",
              "A dead scarab beetle the size of your hand"
            ],
            [
              "52",
              "Two toy soldiers, one missing a head"
            ],
            [
              "53",
              "A small box filled with different-sized buttons"
            ],
            [
              "54",
              "A candle that can't be lit"
            ],
            [
              "55",
              "A miniature cage with no door"
            ],
            [
              "56",
              "An old key"
            ],
            [
              "57",
              "An indecipherable treasure map"
            ],
            [
              "58",
              "A hilt from a broken sword"
            ],
            [
              "59",
              "A rabbit's foot"
            ],
            [
              "60",
              "A glass eye"
            ],
            [
              "61",
              "A cameo of a hideous person"
            ],
            [
              "62",
              "A silver skull the size of a coin"
            ],
            [
              "63",
              "An alabaster mask"
            ],
            [
              "64",
              "A cone of sticky black incense that stinks"
            ],
            [
              "65",
              "A nightcap that gives you pleasant dreams when you wear it"
            ],
            [
              "66",
              "A single caltrop made from bone"
            ],
            [
              "67",
              "A gold monocle frame without the lens"
            ],
            [
              "68",
              "A 1-inch cube, each side a different color"
            ],
            [
              "69",
              "A crystal doorknob"
            ],
            [
              "70",
              "A packet filled with pink dust"
            ],
            [
              "71",
              "A fragment of a beautiful song, written as musical notes on two pieces of parchment"
            ],
            [
              "72",
              "A silver teardrop earring containing a real teardrop"
            ],
            [
              "73",
              "An eggshell painted with scenes of misery in disturbing detail"
            ],
            [
              "74",
              "A fan that, when unfolded, shows a sleepy cat"
            ],
            [
              "75",
              "A set of bone pipes"
            ],
            [
              "76",
              "A four-leaf clover pressed inside a book discussing manners and etiquette"
            ],
            [
              "77",
              "A sheet of parchment upon which is drawn a mechanical contraption"
            ],
            [
              "78",
              "An ornate scabbard that fits no blade you have found"
            ],
            [
              "79",
              "An invitation to a party where a murder happened"
            ],
            [
              "80",
              "A bronze pentacle with an etching of a rat's head in its center"
            ],
            [
              "81",
              "A purple handkerchief embroidered with the name of an archmage"
            ],
            [
              "82",
              "Half a floor plan for a temple, a castle, or another structure"
            ],
            [
              "83",
              "A bit of folded cloth that, when unfolded, turns into a stylish cap"
            ],
            [
              "84",
              "A receipt of deposit at a bank in a far-off city"
            ],
            [
              "85",
              "A diary with seven missing pages"
            ],
            [
              "86",
              "An empty silver snuffbox bearing the inscription \"dreams\" on its lid"
            ],
            [
              "87",
              "An iron holy symbol devoted to an unknown god"
            ],
            [
              "88",
              "A book about a legendary hero's rise and fall, with the last chapter missing"
            ],
            [
              "89",
              "A vial of dragon blood"
            ],
            [
              "90",
              "An ancient arrow of elven design"
            ],
            [
              "91",
              "A needle that never bends"
            ],
            [
              "92",
              "An ornate brooch of dwarven design"
            ],
            [
              "93",
              "An empty wine bottle bearing a pretty label that says, \"The Wizard of Wines Winery, Red Dragon Crush, 331422-W\""
            ],
            [
              "94",
              "A mosaic tile with a multicolored, glazed surface"
            ],
            [
              "95",
              "A petrified mouse"
            ],
            [
              "96",
              "A black pirate flag adorned with a dragon's skull and crossbones"
            ],
            [
              "97",
              "A tiny mechanical crab or spider that moves about when it's not being observed"
            ],
            [
              "98",
              "A glass jar containing lard with a label that reads, \"Griffon Grease\""
            ],
            [
              "99",
              "A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body"
            ],
            [
              "00",
              "A metal urn containing the ashes of a hero"
            ]
          ]
        }
      ],
      miscTags: [
        "TT"
      ],
      hasFluffImages: true
    },
    {
      name: "Truth Serum",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Truth Serum|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 15000,
      poison: true,
      entries: [
        "A creature subjected to this poison must succeed on a {@dc 11} Constitution saving throw or become {@condition poisoned} for 1 hour. The {@condition poisoned} creature can't knowingly speak a lie, as if under the effect of a {@spell zone of truth} spell."
      ],
      poisonTypes: [
        "ingested"
      ],
      attachedSpells: [
        "zone of truth"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Truth Serum",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 15000,
      poison: true,
      entries: [
        "A creature subjected to Truth Serum must succeed on a {@dc 11} Constitution saving throw or have the {@condition Poisoned|XPHB} condition for 1 hour. The {@condition Poisoned|XPHB} creature can't knowingly communicate a lie."
      ],
      poisonTypes: [
        "ingested"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Turquoise",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Turquoise|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 1000,
      entries: [
        "An opaque light blue-green gemstone."
      ]
    },
    {
      name: "Turquoise",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 1000,
      entries: [
        "A light blue green gemstone."
      ]
    },
    {
      name: "Turtle Ship",
      source: "AAG",
      page: 52,
      type: "SPC|AAG",
      rarity: "none",
      value: 4000000,
      crew: 16,
      vehAc: 19,
      vehHp: 300,
      vehDmgThresh: 15,
      vehSpeed: 3,
      capCargo: 30,
      entries: [
        "A turtle ship is encased in a protective metal shell, as befits its name, and bristles with weapons. In addition to its roomy quarters, it can carry a decent- sized payload, making it popular among traders and others who need a lot of cargo space. The ship can land on the ground, and it floats on water. Sliding panels can be closed to make the hull airtight, enabling the ship to travel underwater safely, even to great depths. If the ship takes damage while on or under the water, interior hatches can be sealed to prevent the ship from flooding completely.",
        "Standard weaponry on a turtle ship includes three forward-mounted ballistae and a rear-facing mangonel. These weapons can't be used while the ship is underwater."
      ],
      seeAlsoVehicle: [
        "Turtle Ship|AAG"
      ]
    },
    {
      name: "Two-Person Tent",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Tent|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 20,
      value: 200,
      entries: [
        "A simple and portable canvas shelter, a tent sleeps two."
      ]
    },
    {
      name: "Tyrant Ship",
      source: "AAG",
      page: 54,
      type: "SPC|AAG",
      rarity: "none",
      crew: 10,
      vehAc: 17,
      vehHp: 300,
      vehDmgThresh: 20,
      vehSpeed: 4.5,
      capCargo: 20,
      entries: [
        "Beholders carve tyrant ships out of stone using their disintegration rays and use these ships to wander the Astral Plane, looking for worlds to conquer and rival beholders to destroy. No two tyrant ships look alike, but they all have one or more features reminiscent of their creators, such as a bulbous shape and eyestalks.",
        "A spherical chamber on the ship's command deck functions as a spelljamming helm that only beholders can attune to. Any beholder that occupies this chamber can attune to it. Reducing a tyrant ship to 0 hit points not only destroys it but also destroys the ship's spelljamming helm and eyestalk cannons.",
        "A tyrant ship can't float on water, but it can safely land on the ground."
      ],
      seeAlsoVehicle: [
        "Tyrant Ship|AAG"
      ]
    },
    {
      name: "Velvet doublet with gold buttons (Legion of Dusk)",
      source: "PSX",
      page: 24,
      type: "$A|DMG",
      rarity: "none",
      value: 2500
    },
    {
      name: "Vial",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Vial|XPHB"
      ],
      type: "G",
      rarity: "none",
      value: 100,
      entries: [
        "A vial can hold up to 4 ounces of liquid."
      ]
    },
    {
      name: "Vial",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      value: 100,
      entries: [
        "A Vial holds up to 4 ounces."
      ],
      containerCapacity: {
        weight: [
          0.25
        ]
      }
    },
    {
      name: "Wagon",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Wagon|XPHB"
      ],
      type: "VEH",
      rarity: "none",
      weight: 400,
      value: 3500
    },
    {
      name: "Wagon",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "VEH|XPHB",
      rarity: "none",
      weight: 400,
      value: 3500
    },
    {
      name: "Warhorse",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Warhorse|XPHB"
      ],
      type: "MNT",
      rarity: "none",
      value: 40000,
      carryingCapacity: 540,
      speed: 60
    },
    {
      name: "Warhorse",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "MNT|XPHB",
      rarity: "none",
      value: 40000,
      carryingCapacity: 540,
      speed: 60
    },
    {
      name: "Warship",
      source: "DMG",
      page: 119,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Warship|XPHB"
      ],
      type: "SHP",
      rarity: "none",
      value: 2500000,
      crew: 60,
      vehAc: 15,
      vehHp: 500,
      vehDmgThresh: 20,
      vehSpeed: 2.5,
      capPassenger: 60,
      capCargo: 200,
      seeAlsoVehicle: [
        "Warship"
      ]
    },
    {
      name: "Warship",
      source: "XPHB",
      page: 230,
      freeRules2024: true,
      type: "SHP|XPHB",
      rarity: "none",
      value: 2500000,
      crew: 60,
      vehAc: 15,
      vehHp: 500,
      vehDmgThresh: 20,
      vehSpeed: 2.5,
      capPassenger: 60,
      capCargo: 200,
      seeAlsoVehicle: [
        "Warship"
      ]
    },
    {
      name: "Wasp Ship",
      source: "AAG",
      page: 56,
      type: "SPC|AAG",
      rarity: "none",
      value: 2000000,
      crew: 5,
      vehAc: 15,
      vehHp: 250,
      vehDmgThresh: 15,
      vehSpeed: 5.5,
      capCargo: 10,
      entries: [
        "Wasp ships are lightweight wooden vessels capable of landing safely on the ground, but not on water. They appeal to adventurers because they're affordable and don't require a large crew. Pirates like them because they're swift. Aristocrats are fond of using them as flying yachts because the ship's cargo hold can be easily converted into posh living quarters.",
        "The ship's raised back provides high ground for a weapon emplacement, which is typically equipped with a ballista."
      ],
      seeAlsoVehicle: [
        "Wasp Ship|AAG"
      ]
    },
    {
      name: "Waterskin",
      source: "PHB",
      page: 153,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Waterskin|XPHB"
      ],
      type: "G",
      rarity: "none",
      weight: 5,
      weightNote: "(full)",
      value: 20,
      entries: [
        "A waterskin can hold up to 4 pints of liquid."
      ]
    },
    {
      name: "Waterskin",
      source: "XPHB",
      page: 229,
      freeRules2024: true,
      type: "G|XPHB",
      rarity: "none",
      weight: 5,
      weightNote: "(full)",
      value: 20,
      entries: [
        "A Waterskin holds up to 4 pints. If you don't drink sufficient water, you risk dehydration."
      ],
      containerCapacity: {
        volume: [
          0.08
        ]
      }
    },
    {
      name: "Weaver's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 85
        }
      ],
      reprintedAs: [
        "Weaver's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 100,
      additionalEntries: [
        "Weaver's tools allow you to create cloth and tailor it into articles of clothing.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History",
          entries: [
            "Your expertise lends you additional insight when examining cloth objects, including cloaks and robes."
          ]
        },
        {
          type: "entries",
          name: "Investigation",
          entries: [
            "Using your knowledge of the process of creating cloth objects, you can spot clues and make deductions that others would overlook when you examine tapestries, upholstery, clothing, and other woven items."
          ]
        },
        {
          type: "entries",
          name: "Repair",
          entries: [
            "As part of a short rest, you can repair a single damaged cloth object."
          ]
        },
        {
          type: "entries",
          name: "Craft Clothing",
          entries: [
            "Assuming you have access to sufficient cloth and thread, you can create an outfit for a creature as part of a long rest."
          ]
        },
        {
          type: "table",
          caption: "Weaver's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Repurpose cloth",
              "10"
            ],
            [
              "Mend a hole in a piece of cloth",
              "10"
            ],
            [
              "Tailor an outfit",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Weaver's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Mend a tear in clothing ({@dc 10}), or sew a Tiny design ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Padded Armor|XPHB}, {@item Basket|XPHB}, {@item Bedroll|XPHB}, {@item Blanket|XPHB}, {@item Fine Clothes|XPHB}, {@item Net|XPHB}, {@item Robe|XPHB}, {@item Rope|XPHB}, {@item Sack|XPHB}, {@item String|XPHB}, {@item Tent|XPHB}, {@item Traveler's Clothes|XPHB}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Well-made tapestry that is 10 feet by 10 feet",
      source: "XDMG",
      page: 215,
      type: "$A|XDMG",
      rarity: "none",
      value: 25000
    },
    {
      name: "Wheat",
      source: "PHB",
      page: 157,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Wheat|XDMG"
      ],
      type: "TG",
      rarity: "none",
      weight: 1,
      value: 1
    },
    {
      name: "Wheat",
      source: "XDMG",
      page: 213,
      type: "TG|XDMG",
      rarity: "none",
      weight: 1,
      value: 1
    },
    {
      name: "Whetstone",
      source: "PHB",
      page: 150,
      srd: true,
      basicRules: true,
      type: "G",
      rarity: "none",
      weight: 1,
      value: 1
    },
    {
      name: "White Ghost Orchid Seed",
      source: "JttRC",
      page: 212,
      type: "G",
      rarity: "none",
      entries: [
        "More rarely, the orchids produce a smaller pod holding a single white seed. Among its various magical properties, if a white seed is ground and scattered over a dead body, the body is affected by the {@spell resurrection} spell. A white ghost orchid seed has no effect if consumed."
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Willowshade Oil",
      source: "EGW",
      page: 70,
      type: "G",
      rarity: "none",
      value: 3000,
      entries: [
        "A dark blue oil can be extracted from the rare fruit of the willowshade plant. A creature can use its action to apply the oil to another creature that has been {@condition petrified} for less than 1 minute, causing the {@condition petrified} condition on that creature to end at the start of what would be that creature's next turn."
      ]
    },
    {
      name: "Witherbloom Trinket",
      source: "SCC",
      page: 36,
      type: "G",
      rarity: "none",
      entries: [
        "When you make your character, you may roll once on the Witherbloom Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
        {
          caption: "Witherbloom Trinkets",
          colLabels: [
            "d6",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A black bird-shaped mask, trimmed with glowing green thread"
            ],
            [
              "2",
              "A set of rabbit bones"
            ],
            [
              "3",
              "A pair of thick knee-high waders, stained with muck and moss"
            ],
            [
              "4",
              "A slimy green tentacle, which occasionally wriggles"
            ],
            [
              "5",
              "A notebook containing waterproof paper"
            ],
            [
              "6",
              "A necklace of five small vials, each filled with luminescent white liquid"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Woodcarver's Tools",
      source: "PHB",
      page: 154,
      srd: true,
      basicRules: true,
      additionalSources: [
        {
          source: "XGE",
          page: 85
        }
      ],
      reprintedAs: [
        "Woodcarver's Tools|XPHB"
      ],
      type: "AT",
      rarity: "none",
      weight: 5,
      value: 100,
      additionalEntries: [
        "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows.",
        {
          type: "entries",
          name: "Components",
          entries: [
            "Woodcarver's tools consist of a knife, a gouge, and a small saw."
          ]
        },
        {
          type: "entries",
          name: "Arcana, History",
          entries: [
            "Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows."
          ]
        },
        {
          type: "entries",
          name: "Nature",
          entries: [
            "Your knowledge of wooden objects gives you some added insight when you examine trees."
          ]
        },
        {
          type: "entries",
          name: "Repair",
          entries: [
            "As part of a short rest, you can repair a single damaged wooden object."
          ]
        },
        {
          type: "entries",
          name: "Craft Arrows",
          entries: [
            "As part of a short rest, you can craft up to five arrows. As part of a long rest, you can craft up to twenty. You must have enough wood on hand to produce them."
          ]
        },
        {
          type: "table",
          caption: "Woodcarver's Tools",
          colLabels: [
            "Activity",
            "DC"
          ],
          colStyles: [
            "col-10",
            "col-2 text-center"
          ],
          rows: [
            [
              "Craft a small wooden figurine",
              "10"
            ],
            [
              "Carve an intricate pattern in wood",
              "15"
            ]
          ]
        }
      ]
    },
    {
      name: "Woodcarver's Tools",
      source: "XPHB",
      page: 221,
      freeRules2024: true,
      type: "AT|XPHB",
      rarity: "none",
      weight: 5,
      value: 100,
      entries: [
        {
          type: "list",
          style: "list-hang-notitle",
          items: [
            {
              name: "Ability:",
              type: "item",
              entries: [
                "Dexterity"
              ]
            },
            {
              name: "Utilize:",
              type: "item",
              entries: [
                "Carve a pattern in wood ({@dc 10})"
              ]
            },
            {
              name: "Craft:",
              type: "item",
              entries: [
                "{@item Club|XPHB}, {@item Greatclub|XPHB}, {@item Quarterstaff|XPHB}, Ranged weapons (except {@item Pistol|XPHB}, {@item Musket|XPHB}, and  {@item Sling|XPHB}), {@item Arcane Focus|XPHB}, {@item Arrows (20)|XPHB|Arrows}, {@item Bolts (20)|XPHB|Bolts}, {@item Druidic Focus|XPHB}, {@item Ink Pen|XPHB}, {@item Needles (50)|XPHB|Needles}"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Writing Kit",
      source: "TDCSR",
      page: 183,
      type: "G",
      rarity: "none",
      entries: [
        "Includes:",
        {
          type: "list",
          items: [
            "a {@item pouch|PHB|small pouch}",
            "a quill",
            "{@item Ink (1-ounce bottle)|PHB|ink}",
            "{@item Parchment (one sheet)|PHB|folded parchment}",
            "a penknife"
          ]
        }
      ],
      packContents: [
        "pouch|PHB",
        {
          special: "a quill"
        },
        "Ink (1-ounce bottle)|PHB",
        {
          item: "Parchment (one sheet)|PHB",
          quantity: 10
        },
        {
          special: "a penknife"
        }
      ]
    },
    {
      name: "Wyvern Poison",
      source: "DMG",
      page: 258,
      srd: true,
      reprintedAs: [
        "Wyvern Poison|XDMG"
      ],
      type: "G",
      rarity: "none",
      value: 120000,
      poison: true,
      entries: [
        "This poison must be harvested from a dead or {@condition incapacitated} {@creature wyvern}. A creature subjected to this poison must make a {@dc 15} Constitution saving throw, taking 24 ({@damage 7d6}) poison damage on a failed save, or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Wyvern Poison",
      source: "XDMG",
      page: 91,
      type: "G|XPHB",
      rarity: "none",
      value: 120000,
      poison: true,
      entries: [
        "A creature subjected to Wyvern Poison makes a {@dc 14} Constitution saving throw, taking 24 ({@damage 7d6}) Poison damage on a failed save or half as much damage on a successful one."
      ],
      poisonTypes: [
        "injury"
      ],
      miscTags: [
        "CNS"
      ]
    },
    {
      name: "Xen'drik Trinket",
      source: "ERLW",
      page: 140,
      type: "G",
      rarity: "none",
      entries: [
        {
          caption: "Trinkets from Xen'drik",
          colLabels: [
            "d8",
            "Trinket"
          ],
          colStyles: [
            "col-2 text-center",
            "col-10"
          ],
          rows: [
            [
              "1",
              "A punched ticket for a voyage from Sharn to Stormreach"
            ],
            [
              "2",
              "A scorpion's barb engraved with a single Elvish letter"
            ],
            [
              "3",
              "A copper coin so big you could use it as a dinner plate"
            ],
            [
              "4",
              "An image of an elf warrior engraved on a giant's tooth"
            ],
            [
              "5",
              "A single page from a giant wizard's spellbook, bearing an incomplete spell"
            ],
            [
              "6",
              "A scrap of parchment, part of a map of Stormreach"
            ],
            [
              "7",
              "A small book titled {@i Feersome Beests of Zendrik}"
            ],
            [
              "8",
              "A scrimshaw carving of a sahuagin"
            ]
          ],
          type: "table"
        }
      ],
      miscTags: [
        "TT"
      ]
    },
    {
      name: "Yahcha",
      source: "ToA",
      page: 205,
      type: "G",
      rarity: "none",
      value: 100,
      entries: [
        "A yahcha (pronounced YAH-chah) is a harmless, meaty beetle about the size of a human hand, which feeds on worms and maggots. It moves slowly (walking speed 10 feet) and is easy to catch. A creature with blue mist fever that eats a raw or cooked yahcha can immediately make a saving throw with advantage against that disease (see \"Diseases,\" page 40),"
      ]
    },
    {
      name: "Yellow Sapphire",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Yellow Sapphire|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A transparent fiery yellow or yellow-green gemstone."
      ]
    },
    {
      name: "Yellow Sapphire",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 100000,
      entries: [
        "A fiery yellow or yellow green gemstone."
      ]
    },
    {
      name: "Yew Wand",
      source: "PHB",
      page: 151,
      srd: true,
      basicRules: true,
      reprintedAs: [
        "Yew Wand|XPHB"
      ],
      type: "SCF",
      scfType: "druid",
      rarity: "none",
      weight: 1,
      value: 1000
    },
    {
      name: "Yew Wand",
      source: "XPHB",
      page: 225,
      freeRules2024: true,
      type: "SCF|XPHB",
      scfType: "druid",
      rarity: "none",
      weight: 1,
      value: 1000
    },
    {
      name: "Zabou",
      source: "ToA",
      page: 205,
      type: "G",
      rarity: "none",
      value: 1000,
      entries: [
        "Zabou mushrooms feed on offal and the rotting wood of dead trees. If handled carefully, a zabou can be picked or uprooted without causing it to release its spores. If crushed or struck, a zabou releases its spores in a 10-foot-radius sphere. A zabou can also be hurled up to 30 feet away or dropped like a grenade, releasing its cloud of spores on impact. Any creature in that area must succeed on a {@dc 10} Constitution saving throw or be {@condition poisoned} for 1 minute. The {@condition poisoned} creature's skin itches for the duration. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      ]
    },
    {
      name: "Zircon",
      source: "DMG",
      page: 134,
      reprintedAs: [
        "Zircon|XDMG"
      ],
      type: "$G|DMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A transparent pale blue-green gemstone."
      ]
    },
    {
      name: "Zircon",
      source: "XDMG",
      page: 214,
      type: "$G|XDMG",
      rarity: "none",
      value: 5000,
      entries: [
        "A pale blue green gemstone."
      ]
    }
  ] as unknown as Item[]);
}
