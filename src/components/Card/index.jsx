import React from 'react'

export default function Span({children, OnClick}) {
    return (
        <a onClick={OnClick}>
            <div>
                {children}
            </div>
        </a>
    )
}