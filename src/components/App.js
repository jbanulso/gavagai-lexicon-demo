import React, { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';

import GlobalStyle from './GlobalStyle';
import PageContainer from './PageContainer';
import Header from './Header';
import SearchForm from './SearchForm';
import Spinner from './Spinner';
import List from './List';
import { getAvailableLanguages } from '../api';

const App = () => {
  const [words, setWords] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAvailableLanguages();
        setLanguages(
          response.map(lang => ({
            value: lang,
            label: ISO6391.getName(lang.toLowerCase())
          }))
        );
      } catch (e) {
        console.log('Error getting languages: ', e);
      }
    })();
  }, []);

  const handleSearchStarted = bool => {
    setLoading(bool);
    setWords(undefined);
  };

  const handleSearchResponse = res => {
    setLoading(false);
    setWords(res);
  };

  return (
    <PageContainer>
      <GlobalStyle />
      {languages && (
        <>
          <Header>Gavagai's Living Lexicon</Header>
          <SearchForm
            placeholder="Type a word"
            languages={languages}
            onSearchStarted={handleSearchStarted}
            onWordsSearched={handleSearchResponse}
          />
        </>
      )}
      {loading && <Spinner />}
      {words && !loading && (
        <>
          {words.length > 0 ? (
            <List words={words} />
          ) : (
            <em style={{ textAlign: 'center' }}>
              Could not find semantically similar terms. Try entering a
              different word
            </em>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default App;
