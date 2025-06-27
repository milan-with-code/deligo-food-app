import AsyncStorage from "@react-native-async-storage/async-storage"

const ONBOARDING_KEY = 'onboarding_complete';

export const storage = {
  async set(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
      console.error(error)
    }
  },

  async get(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null
    } catch (error) {
      console.error(error)
    }
  },

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  },

  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(error)
    }
  },

  async completeOnBoardingScreen() {
    try {
      await this.set(ONBOARDING_KEY, "true");
    } catch (error) {
      console.error('Error saving onboarding status', error)
    }
  },

  async isComplete() {
    try {
      const value = await this.get(ONBOARDING_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error reading onboarding status:', error);
      return false;
    }
  },

  async resetOnBoardingStatus() {
    try {
      await this.remove(ONBOARDING_KEY)
    } catch (error) {
      console.error(error)
    }
  }
}
