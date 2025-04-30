import type {Item} from '../models/item.ts'
import connector from '../utils/5eConnector.ts'

class ItemService {
 public static async getLegendaryItem(): Promise<Item[]> {
   return connector.get_legendary_object()
 }
 public static async getCommonItem(): Promise<Item[]> {
   return connector.get_common_object()
 }
 public static async getNoneItem(): Promise<Item[]> {
   return connector.get_none_object()
 }
 public static async getUnknownMagicalItem(): Promise<Item[]> {
   return connector.get_unknown_magical_object()
 }
 public static async getRareItem(): Promise<Item[]> {
   return connector.get_rare_object()
 }
 public static async getUncommonItem(): Promise<Item[]> {
   return connector.get_uncommon_object()
 }
 public static async getVeryRareItem(): Promise<Item[]> {
   return connector.get_very_rare_object()
 }
 public static async getArtifactItem(): Promise<Item[]> {
   return connector.get_artifact_object()
 }
}

export default ItemService
