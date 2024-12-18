import { useState } from "react"
import Button from '@mui/material/Button';

const Collapsible = ({ children, contentDescriptor }) => {

    const [isHidden, setIsHidden] = useState(true)

    const toggleIsHidden = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <Button onClick={toggleIsHidden}>{
                     `${isHidden ? 'Show' : 'Hide'} ${contentDescriptor}`
                }</Button>
                {isHidden ? null: children}
        </div>
    )

}

export default Collapsible

