import React from 'react'

export default function Layout({ children }) {

    return <>
        <div className="d-flex flex-wrap justify-content-center align-items-top h-100 pl-5 pr-5t" style={{ overflowY: 'scroll' }}>
            {children}
        </div>
    </>
}

// const styles = {
//     bg: {
//         backgroundColor: 'springgreen',
//         width: '100%',
//         height: '100%',
//     },
//     showText: {
//         color: 'black',
//         backgroundColor: '',
//         borderRadius: '10px',
//         opacity: '.8',
//     },
//     blurText: {
//         color: 'gray',
//         backgroundColor: 'gray',
//         borderRadius: '10px',
//         opacity: '.8',
//     }
// }