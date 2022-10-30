import React, { Fragment, Suspense, useState, useEffect, componentWillUnmount } from 'react'


import LeftBare from './LeftBare'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

const Intro = React.lazy(() => import('./Pages/Intro'));
const Design = React.lazy(() => import('./Pages/Design'));
const Logos = React.lazy(() => import('./Pages/Logos'));
const The3D = React.lazy(() => import('./Pages/3D'));
const Work = React.lazy(() => import('./Pages/Work'));


function Home() {
    const [tabToShow, setTabToShow] = useState('Accueil')
    const changeTab = (newTab) => {
        setTabToShow(newTab)
        changeTheTab(tabToShow)
    }
    const changeTheTab = (theNewTab) => {
        switch (theNewTab) {
            case "Accueil": return <Intro ntitle='Pape Momar Ndiaye ' />;
            case "Tableaux": return <Design title='Tableaux' />;
            case "Logos": return <Logos title='Logos' />;
            case "3D": return <The3D title='3D' />;
            case "Web": return <Work />;
            case "Skills": return <Skills />;
            case "Contact": return <Contact />;
        }
    }

    return (
        <Fragment>
            <LeftBare onChangeTab={changeTab} />
            {/* ############################################### */}
            <div id='home-container'>
                <Suspense fallback={
                    <div class="Loaders">
                        <div class="a"><div></div><div></div></div>
                    </div>
                }>
                    {changeTheTab(tabToShow)}
                </Suspense>
            </div>
        </Fragment>
    )
}




export default Home