import { AppHeader } from '../cmps/app-header.jsx'
import { Build } from '../cmps/build.jsx'
import { Deliver } from '../cmps/deliver.jsx'
import { Ready } from '../cmps/ready.jsx'

export function HomePage() {

    return <section className="home-page full">
        <AppHeader />
        <Build />
        <Deliver />
        <Ready />
    </section >
}