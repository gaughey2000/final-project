const TreatmentList = ({list}) => {
    return (<div>
        <h4>Price List</h4>
        <ul>
            {list.map((treatment, i)=><li key={i}>{treatment.name} || £{treatment.cost/100} || <button>Book</button></li>)}
        </ul>
    </div>)
}

export default TreatmentList