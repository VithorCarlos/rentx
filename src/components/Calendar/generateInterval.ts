// eachDayOfInterval- pegar as duas datas e gerar um intervalo, pega o dias e gera um intervalo
import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import theme from '../../screens/styles/theme';
import { getPlatformDate } from '../../utils/getPlatformDate';

export function generateInterval(start: DayProps, end: DayProps) {
  //personalizar quem e o primeiro, segundo..... ultimo dia. Desse jeito tem liberdade para configurar as datas do jeito q quiser
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        //se a data q to olhando agr na repeticao e a data de inicio, ou a final.
        // se for data inicial ou final fica com uma cor mais forte, mas se for qualquer outra do meio
        // fica com a cor mais clara
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,

        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });
  return interval;
}
