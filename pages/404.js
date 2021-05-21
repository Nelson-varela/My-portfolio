import Layout from '../components/Layout'
import Link from 'next/Link'

const custom404 = () => (

    <Layout>
        <div className="text-center">
            <h1>404</h1>

            <p>You can reach me via email at any time to: xnelsonvsx@hotmail.com or  xnelsonvsx.nv@gmail.com.</p>
            <p>Please retrun to:
    <Link href="/">
                    <a > Home</a>
                </Link>
            </p>
        </div>

    </Layout>
)



export default custom404;   