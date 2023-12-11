import { Maybe } from '@core-types/graphql';
import { DATE_LOCALES } from '@src/languages';
import { format, parse } from 'date-fns';
import i18next from 'i18next';

type DateFormats = '[day] [month] [year]';

type FormatDateParams = { date?: string; format: DateFormats };
export const formatDate = ({ date: stringDate, format: type }: FormatDateParams) => {
  if (!stringDate) return '';
  const date = new Date(stringDate);

  switch (type) {
    case '[day] [month] [year]':
      return format(date, 'd [1] MMMM [1] yyyy', {
        locale: DATE_LOCALES[i18next.t('common:locale') as keyof typeof DATE_LOCALES],
      }).replaceAll('[1]', i18next.t('common:from'));
    default:
      return stringDate;
  }
};

export const convertAirDateToDateString = (airDate?: Maybe<string>) => {
  if (!airDate) return '';
  return parse(airDate, 'MMMM d, yyyy', new Date()).toISOString();
};
