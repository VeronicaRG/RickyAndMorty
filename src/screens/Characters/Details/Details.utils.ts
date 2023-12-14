import { DeepPartial } from '@core-types/global/utils';
import { Character, Episode, GetCharacterDetailsQuery } from '@core-types/graphql';
import { i18n } from '@src/languages';
import { convertAirDateToDateString, formatDate } from '@src/utils/formatters';

export const createListProperties = (
  character: GetCharacterDetailsQuery['character'] | DeepPartial<Character>,
) => {
  if (!character) return [];
  const {
    status,
    gender,
    origin,
    species,
    location,
    episode: episodes = [{ id: '1' }, { id: '2' }, { id: '3' }] as Partial<Episode>[],
  } = character;

  const properties = {
    title: i18n.t('characterDetails:property'),
    testID: 'properties',
    data: [
      {
        id: 'genre',
        type: i18n.t('characterDetails:properties.type.gender'),
        value: i18n.t('characterDetails:properties.value.gender', {
          context: gender?.toLowerCase(),
        }),
      },
      {
        id: 'type',
        type: i18n.t('characterDetails:properties.type.specie'),
        value: i18n.t('characterDetails:properties.value.specie', {
          context: species?.toLowerCase(),
        }),
      },
      {
        id: 'status',
        type: i18n.t('characterDetails:properties.type.status'),
        value: i18n.t('characterDetails:properties.value.status', {
          context: status?.toLowerCase(),
        }),
      },
    ],
  };

  const whereabout = {
    title: i18n.t('characterDetails:whereabout'),
    testID: 'whereabout',
    data: [
      {
        id: 'origin',
        type: i18n.t('characterDetails:properties.type.origin'),
        value: i18n.t(
          [
            `characterDetails:properties.value.origin.${origin?.name}`,
            'characterDetails:properties.value.origin.know',
          ],
          { origin: origin?.name },
        ),
      },
      {
        id: 'status',
        type: i18n.t('characterDetails:properties.type.location'),
        value: i18n.t(
          [
            `characterDetails:properties.value.location.${location?.name}`,
            'characterDetails:properties.value.location.know',
          ],
          { location: location?.name },
        ),
      },
    ],
  };

  const chapters = {
    title: i18n.t('characterDetails:chapters'),
    testID: 'chapter',
    data: episodes.map(item => ({
      id: item?.id,
      type: item?.episode || '',
      value: formatDate({
        date: convertAirDateToDateString(item?.air_date),
        format: '[day] [month] [year]',
      }),
    })),
  };

  return [properties, whereabout, chapters];
};
