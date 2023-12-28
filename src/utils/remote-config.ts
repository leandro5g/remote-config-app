import remoteConfig from "@react-native-firebase/remote-config"
import { TRemoteKeys } from "../configs/constants/remote-keys"

export const getRemoteFeatureValue = (key: TRemoteKeys) => {
  return remoteConfig().getValue(key).asBoolean()
}