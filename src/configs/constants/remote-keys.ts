export type TRemoteKeys = "feature_1" | "feature_2" | "feature_3" | "feature_4" |"feature_5" |"feature_6" 

export const REMOTE_KEYS: {[key in TRemoteKeys] : boolean} = {
  feature_1: false,
  feature_2: false,
  feature_3: true,
  feature_4: false,
  feature_5: true,
  feature_6: false,
}