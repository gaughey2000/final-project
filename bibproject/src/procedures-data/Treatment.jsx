import { useState } from "react"
import { types } from "../../../features/teatments/treatmentData"
import Type from "../../../features/teatments/Type"

const Treatment = () => {
    const [focus, setFocus] = useState(-1)
    return (<main>
        <h1>Treatment List</h1>
        {types.map((type, i) => <Type type={type} focus={i===focus} index={i} key={i} setFocus={setFocus}/>)}
    </main>)
}

export default Treatment