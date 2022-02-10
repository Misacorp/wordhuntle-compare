import React from 'react';
import styled from 'styled-components';

const Compare = ({className}) => {
    const [wordLists, setWordLists] = React.useState([[], []]);

    const handleWordListChange = index => event => {
        const newWordLists = [...wordLists];
        newWordLists[index] = event.target.value.split('\n').filter((word) => word.length > 0);
        setWordLists(newWordLists)
    }

    const uniqueWords = React.useMemo(() => {
        const allWords = new Set();
        wordLists.forEach((list) => {
            list.forEach((word) => {
                allWords.add(word)
            })
        })

        return Array.from(allWords);
    }, [wordLists])

    const addWordList = () => {
        setWordLists([...wordLists, []])
    }

    return (
        <div className={className}>
            {
                wordLists.map((wordList, index) => (
                    <div>
                        <textarea onChange={handleWordListChange(index)} rows="10" />

                        <p><b>{wordList.length} words</b></p>
                        <p>Words missing from this list:</p>
                        <pre>
                            {uniqueWords.filter((word) => !wordList.includes(word)).join('\n')}
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
  
  button {
    padding: 1rem;
  }
`;
