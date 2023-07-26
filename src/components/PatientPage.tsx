import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Diagnosis, Patient} from "../types";
import patients from "../services/patients";
import EntryCard from "./EntryCard";

const PatientPage = () => {
    const params = useParams()
    const [patient, setPatient] = useState<Patient>()
    const [diagnosis, setDiagnosis] = useState<Diagnosis[]>()
    useEffect(() => {
        const initializePatient = async () => {
            if(params.id){
                const p = await patients.getPatient(params.id)
                setPatient(p)
            }
        }
        void initializePatient()
    }, [params.id])

    useEffect(() => {
        const initializeDiagnosis = async () => {
            const d = await patients.getAllDiagnosis()
            setDiagnosis(d)
        }
        void initializeDiagnosis()
    }, [])

    if(!patient) return null

    return (
        <section>
            <h2>{patient.name}: {patient.gender}</h2>
            <p>
                ssn: {patient.ssn}<br/>
                occupation: {patient.occupation}
            </p>
            <section>
                <h3>entries</h3>
                {patient.entries.map(e => <EntryCard key={e.id} entry={e} diagnosis={diagnosis} />)}
            </section>
        </section>
    )
}

export default PatientPage