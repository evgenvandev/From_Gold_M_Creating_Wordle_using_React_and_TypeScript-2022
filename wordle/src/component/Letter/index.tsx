import { AccuracyEnum } from '../../utilities/accuracy.utils';

interface ILetterProps {
    position: number,
    value: string,
    accuracy: AccuracyEnum
}

export const Letter = ({position, value, accuracy}: ILetterProps) => {
    return (
        <>
            <button style={{ width: '50px', height: '50px'}}>
                {value}
            </button>
        </>
    )
}

export default Letter;
