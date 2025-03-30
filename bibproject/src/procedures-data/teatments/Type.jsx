import TreatmentList from "./TreatmentList"

const Type = (props) => {
    const {type, focus, index, setFocus} = props
    const {name, list, info, promo} = type
    if(focus)
        return (<div>
            <h3>{name}</h3>
            <img src={promo.img} alt="promo"/>
            <TreatmentList list={list}/>
            <q>{info.short}</q>
            {info.full.map((para, i)=><p key={i}>{para}</p>)}
            {info.questions.map((question, i)=><div key={i}><strong>{question.q}</strong><p>{question.a}</p></div>)}
            <button onClick={()=>setFocus(-1)}>Hide</button>
        </div>)

    return (<div>
        <h3>{name}</h3>
        <img src={promo.img} alt="promo"/>
        <TreatmentList list={list}/>
        <button onClick={()=>setFocus(index)}>More info</button>
    </div>)
}

export default Type