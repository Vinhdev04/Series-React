

function Menu({button,children,...props}) {
    return (
        <>
            <menu {...props}>
                {button}
            </menu>
            {children}
        </>
    );
}

export default Menu;