import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DropdownSelector from './DropdownSelector';
import SearchInput from './SearchInput';
import Button from './Button';
import { getSemanticallySimilarWords } from '../api';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  min-height: 3.5em;
  height: 3.5em;
  margin-bottom: 3em;
  background-color: white;
  border: 0;
  border-radius: 12px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 415px) {
    min-height: 4em;
    height: 4em;
  }
`;

const SearchForm = ({ languages, onSearchStarted, onWordsSearched }) => {
  const [word, setWord] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(undefined);

  useEffect(() => {
    const initLang = languages.filter(lang => lang.value === 'EN')[0];
    console.log(initLang);
    setSelectedLanguage(initLang);
  }, []);

  const handleInput = e => {
    setWord(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (word) {
        onSearchStarted(true);
        const res = await getSemanticallySimilarWords(
          word,
          selectedLanguage.value
        );
        const words = res.semanticallySimilarWords.map(element => element.word);
        onWordsSearched(words);
      }
    } catch (e) {
      onSearchStarted(false);
      console.log('Error getting words: ', e);
    }
  };

  return (
    <Container>
      <DropdownSelector
        options={languages}
        value={selectedLanguage}
        onChange={option => {
          setSelectedLanguage(option);
        }}
      />
      <SearchInput
        onChange={handleInput}
        onKeyPress={e => {
          if (e.which === 13) {
            handleSubmit();
          }
        }}
        placeholder="Type a word"
      />
      <Button onClick={handleSubmit}>Search</Button>
    </Container>
  );
};

export default SearchForm;
