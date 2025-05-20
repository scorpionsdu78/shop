import common_object from './functions/common_object.ts'
import legendary_object from './functions/legendary_object.ts'
import none_object from './functions/none_object.ts'
import unknown_magical_object from './functions/unknown_magical_object.ts'
import rare_object from './functions/rare_object.ts'
import uncommon_object from './functions/uncommon_object.ts'
import very_rare_object from './functions/very_rare_object.ts'
import artifact_object from './functions/artifact_object.ts'
import tgs_common_object from './functions/tgs/tgs_common_object.ts'
import tgs_legendary_object from './functions/tgs/tgs_legendary_object.ts'
import tgsRareObject from './functions/tgs/tgs_rare_object.ts'
import tgs_uncommon_object from './functions/tgs/tgs_uncommon_object.ts'
import tgs_very_rare_object from './functions/tgs/tgs_very_rare_object.ts'
import tgs_artifact_object from './functions/tgs/tgs_artifact_object.ts'

export default class Connector {
  static async get_common_object() {
    return common_object()
  }
  static async get_legendary_object() {
    return legendary_object()
  }
  static async get_none_object() {
    return none_object()
  }
  static async get_unknown_magical_object() {
    return unknown_magical_object()
  }
  static async get_rare_object() {
    return rare_object()
  }
  static async get_uncommon_object() {
    return uncommon_object()
  }
  static async get_very_rare_object() {
    return very_rare_object()
  }
  static async get_artifact_object() {
    return artifact_object()
  }
  static async get_tgs_common_object() {
    return tgs_common_object()
  }
  static async get_tgs_legendary_object() {
    return tgs_legendary_object()
  }
  static async get_tgs_rare_object() {
    return tgsRareObject()
  }
  static async get_tgs_uncommon_object() {
    return tgs_uncommon_object()
  }
  static async get_tgs_very_rare_object() {
    return tgs_very_rare_object()
  }
  static async get_tgs_artifact_object() {
    return tgs_artifact_object()
  }
}
