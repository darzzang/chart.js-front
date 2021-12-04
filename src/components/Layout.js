import React from 'react'

function Layout(props) {
    const { children } = props;
    const layoutStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid rgba(232, 232, 232, 1)"
    };
    const myChildren = children.map((child) => {
        const childStyle = {
            border: "1px solid rgba(232, 232, 232, 1)"
        }
        return (
            <div style={childStyle}>
                {child}
            </div>
        )
    })
    return (
        <div style={layoutStyle}>
            {myChildren}
        </div>
    )
}

export default Layout