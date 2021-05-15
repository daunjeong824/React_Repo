import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
console.log('평균 값 계산 중 ... ')

if( numbers.length === 0 ) {
    return 0;
}

const sum = numbers.reduce((a,b) => a + b);
return sum / numbers.length;
};

const Average = () => {

    // setting var
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    // setting function & handler
    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    // setting useMemo
    const avg = useMemo(() => getAverage(list), [list]);

    // rendering
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            
            <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            </ul>
        
        <div>
                <b>평균값:</b> {avg}
        </div>
        </div>
    );

};

export default Average;