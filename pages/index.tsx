import Header from '../components/Header'
import Layout from '../components/Layout'
import { withRouter, SingletonRouter } from 'next/router'

interface Props {
    title?: any,
    router?: SingletonRouter
}

const Index = withRouter((props: Props) => (
    <div>
        <Layout>
            <Header />
            {props.router.query.title}
        </Layout>
    </div>
))

export default Index
