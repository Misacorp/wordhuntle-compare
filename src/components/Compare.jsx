import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Compare = ({className}) => {
    const [wordLists, setWordLists] = React.useState([{id: uuid(), words: []}, {id: uuid(), words: []}]);

    const handleWordListChange = id => event => {
        const newWordLists = [...wordLists];
        const target = newWordLists.find((wordList) => wordList.id === id);
        target.words =  event.target.value.split('\n').filter((word) => word.length > 0);
        setWordLists(newWordLists)
    }

    const uniqueWords = React.useMemo(() => {
        const allWords = new Set();
        wordLists.forEach((list) => {
            list.words.forEach((word) => {
                allWords.add(word)
            })
        })

        return Array.from(allWords);
    }, [wordLists])

    const addWordList = () => {
        setWordLists([...wordLists, {id: uuid(), words: []}])
    }

    const removeWordList = (id) => () => {
        const newWordLists = wordLists.filter((wordList) => wordList.id !== id);
        setWordLists(newWordLists)
    }

    return (
        <div className={className}>
            {
                wordLists.map((wordList) => (
                    <div key={wordList.id}>
                        <textarea onChange={handleWordListChange(wordList.id)} rows="10" />

                        {wordLists.length > 1 && (
                            <button type="button" onClick={removeWordList(wordList.id)}>Remove this list</button>
                        )}

                        <p><b>{wordList.words.length} words</b></p>
                        <p>{uniqueWords.filter((word) => !wordList.words.includes(word)).length} words missing from this list:</p>
                        <pre>
                            {uniqueWords.filter((word) => !wordList.words.includes(word)).join('\n')}
                        </pre>
                    </div>
                ))
            }

            <button type="button" onClick={addWordList} >Add another word list</button>
        </div>
    )
};

export default styled(Compare)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  
  textarea {
    width: 100%;
  }
  
  & > button {
    padding: 1rem;
  }
`;
