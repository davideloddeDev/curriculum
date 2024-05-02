/* eslint-disable react/prop-types */
import './css/footer.css'

export function AFooter({href, testo}) {

    

    return(
        <a className='aSx' href={href}>{testo}</a>
    )
}