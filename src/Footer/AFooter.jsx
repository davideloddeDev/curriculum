/* eslint-disable react/prop-types */
import './footer.css'

export function AFooter({href, testo}) {

    

    return(
        <a className='aSx' href={href}>{testo}</a>
    )
}