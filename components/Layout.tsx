interface Props {
    children?: Element | any // don't do this !
}

const Layout = (props: Props) => <div>{props.children}</div>

export default Layout
