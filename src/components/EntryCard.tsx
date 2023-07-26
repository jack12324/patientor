import {Diagnosis, Entry} from "../types";
interface EntryProps{
    entry: Entry;
    diagnosis?: Diagnosis[];
}
const EntryCard = (props: EntryProps) => {
    return <section >
        <p>{props.entry.date} <i>{props.entry.description}</i></p>
        {props.entry.diagnosisCodes ?
            <ul>
                {props.entry.diagnosisCodes.map((diagnosisCode) => {
                    const description= props.diagnosis ? props.diagnosis.find(d => d.code === diagnosisCode)?.name : undefined
                    return (
                        <li>{diagnosisCode}{description ? <i> {description}</i>:null}</li>
                    )})}
            </ul>
            : null }
    </section>
}

export default EntryCard