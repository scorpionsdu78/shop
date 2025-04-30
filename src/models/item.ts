export class Item {
  // Champs communs
  name: string;
  source: string;
  page: number;
  rarity: string;
  wondrous: boolean;

  // Champs optionnels
  freeRules2024?: boolean;
  reprintedAs?: string[];
  tier?: string;
  entries?: (
    | string
    | {
    type: string;
    name: string;
    entries: string[];
  }
    | {
    type: string;
    caption: string;
    colLabels: string[];
    colStyles: string[];
    rows: string[][];
  }
    )[];
  miscTags?: string[];
  lootTables?: string[];
  hasFluffImages?: boolean;
  reqAttune?: boolean;
  otherSources?: { source: string; page: number }[];
  weight?: number;
  recharge?: string;
  charges?: number;

  /**
   * Constructeur pour initialiser un objet `Item`.
   * Tous les champs peuvent être passés dans l'initialisation avec un objet partiel.
   */
  constructor(fields: {
    name: string;
    source: string;
    page: number;
    rarity: string;
    wondrous: boolean;
    freeRules2024?: boolean;
    reprintedAs?: string[];
    tier?: string;
    entries?: (
      | string
      | {
      type: string;
      name: string;
      entries: string[];
    }
      | {
      type: string;
      caption: string;
      colLabels: string[];
      colStyles: string[];
      rows: string[][];
    }
      )[];
    miscTags?: string[];
    lootTables?: string[];
    hasFluffImages?: boolean;
    reqAttune?: boolean;
    otherSources?: { source: string; page: number }[];
    weight?: number;
    recharge?: string;
    charges?: number;
  }) {
    this.name = fields.name;
    this.source = fields.source;
    this.page = fields.page;
    this.rarity = fields.rarity;
    this.wondrous = fields.wondrous;
    this.freeRules2024 = fields.freeRules2024;
    this.reprintedAs = fields.reprintedAs;
    this.tier = fields.tier;
    this.entries = fields.entries;
    this.miscTags = fields.miscTags;
    this.lootTables = fields.lootTables;
    this.hasFluffImages = fields.hasFluffImages;
    this.reqAttune = fields.reqAttune;
    this.otherSources = fields.otherSources;
    this.weight = fields.weight;
    this.recharge = fields.recharge;
    this.charges = fields.charges;
  }
}
