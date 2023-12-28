import remoteConfig from "@react-native-firebase/remote-config"
import { REMOTE_KEYS } from "../configs/constants/remote-keys";

const MINIMUM_FETCH_INTERVAL_MILLIS = 30

export const setRemoteConfigfetchValues = async () => {
  try {
    await remoteConfig().setDefaults(REMOTE_KEYS);
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: MINIMUM_FETCH_INTERVAL_MILLIS
    })

    await remoteConfig().fetchAndActivate()
  } catch (error) {
    console.log(error)
  }
}