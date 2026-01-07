import { ItemInventoryType } from "wow/wotlk/std/Item/ItemInventoryType";
import { DefaultProfession } from "wow/wotlk/std/Profession/ProfessionType";

export enum ToolType {
  NONE,
  FORGE,
  ANVIL,
  COOKINGFIRE,
  ALCHEMYLAB,
  HAMMER_ANVIL,
  HAMMER_SPANNER,
  HAMMER_SPANNER_ANVIL,
  SPANNER,
  SPANNER_SCREWDRIVER,
  SCREWDRIVER,
  BLACKANVIL_HAMMER,
  BLACKANVIL_SPANNER_HAMMER,
  BLACKFORGE,
  MOONWELL,
  ROD_COPPER,
  ROD_SILVER,
  ROD_GOLDEN,
  ROD_TRUESILVER,
  ROD_ARCANITE,
}

export type ProfessionRecipeData = {
  subclass: number;
  recipePrefix: string;
  craftingIconId?: number;
  craftingVisualId?: number;
  displayId?: number;
};

export type EnchantmentDisplayData = {
  enchantPrefix: string;
  enchantDesc: string;
  enchantItemInventoryType?: number;
  enchantItemClass?: number;
  enchantItemSubclass?: number;
};

export type RecipeProfessions = Exclude<
  DefaultProfession,
  "INSCRIPTION" | "MINING" | "SKINNING" | "HERBALISM" | "JEWELCRAFTING"
>;

export type EnchantmentSlots = Extract<
  ItemInventoryType,
  | ItemInventoryType.BACK
  | ItemInventoryType.CHEST
  | ItemInventoryType.FEET
  | ItemInventoryType.FINGER
  | ItemInventoryType.HANDS
  | ItemInventoryType.MAINHAND
  | ItemInventoryType.TWOHAND
  | ItemInventoryType.SHIELD
  | ItemInventoryType.WRISTS
  | ItemInventoryType.OFFHAND
  | ItemInventoryType.WEAPON
>;

export type ProfessionToolTypes = Exclude<ToolType, ToolType.HAMMER_SPANNER>;

export type ToolDisplayData = {
  visual: number;
  spellFocus?: number;
  totems?: number[];
};
