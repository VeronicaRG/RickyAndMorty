import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FavoritesStore } from './types';
import { Character, Episode } from '@core-types/graphql';
import { DeepPartial } from '@core-types/global/utils';

const initialState: FavoritesStore = {
  characters: [],
  episodes: [],
};

export const favoritesStoreSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addCharacter: (state, { payload }: PayloadAction<DeepPartial<Character>>) => {
      const alreadyAdded = state.characters.find(character => character.id === payload.id);
      if (!alreadyAdded) state.characters.push(payload);
    },
    removeCharacter: (state, { payload }: PayloadAction<string>) => {
      state.characters = state.characters.filter(character => character.id !== payload);
    },
    addEpisode: (state, { payload }: PayloadAction<DeepPartial<Episode>>) => {
      state.episodes.push(payload);
    },
    removeEpisode: (state, { payload }: PayloadAction<string>) => {
      state.episodes = state.episodes.filter(episode => episode.id !== payload);
    },
  },
});

export const { addCharacter, removeCharacter, addEpisode, removeEpisode } =
  favoritesStoreSlice.actions;

export const { reducer: favoritesReducer } = favoritesStoreSlice;
