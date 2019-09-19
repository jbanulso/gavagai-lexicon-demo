import { useEffect } from 'react';

export const getSemanticallySimilarWords = (word, lang) =>
  fetch(
    `https://api.gavagai.se/v3/lexicon/${lang}/${encodeURIComponent(
      word
    )}?apiKey=8c79736f393ab6eff4a864fcfa23344c&additionalFields=SEMANTICALLY_SIMILAR_WORDS`
  ).then(response => response.json());

export const getAvailableLanguages = () =>
  fetch(
    'https://api.gavagai.se/v3/languages/?apiKey=8c79736f393ab6eff4a864fcfa23344c&additionalFields=SEMANTICALLY_SIMILAR_WORDS'
  ).then(response => response.json());
