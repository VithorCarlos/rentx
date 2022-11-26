import { addDays } from 'date-fns';
import { Platform } from 'react-native';

//tratamento para resolver problema de data -1 no ios
export function getPlatformDate(date: Date) {
  if (Platform.OS === 'ios') {
    return addDays(date, 1);
  } else {
    return addDays(date, 1);
  }
}
