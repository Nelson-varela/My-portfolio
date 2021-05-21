import Navbar from './Navbar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import nprogress from 'nprogress'


const Layout =({children, footer = true, dark = false}) => {

    const router = useRouter();
     
    useEffect(() => {
        const handleRouteChange = url => {
            nprogress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange )
        router.events.on('routeChangeComplete', () => nprogress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
    <div className="bg-light">
    
    <Navbar/>
    
    <main className="container py-4">
    {children}
    </main>
    {
        footer && (
            <footer className="bg-primary text-light text-center">
        <div className="container p-4">
            <h1>&copy; Nelson Varela Portfolio</h1>
            <p>2020 - {new Date().getFullYear()}</p>
            <p>All rights reserved.</p>

        </div>
    </footer>
        ) 
    }
    </div> 
    )

}

export default Layout;