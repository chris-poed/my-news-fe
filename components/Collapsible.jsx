import { useState } from "react"

const Collapbsible = ({ children }) => {

    const [isHidden, setIsHidden] = useState(false)

    const toggleIsHidden = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <button onClick={toggleIsHidden}>{
                     `${isHidden ? 'Show' : 'Hide'} ${contentDescriptor}`
                }</button>
        </div>
    )

}

