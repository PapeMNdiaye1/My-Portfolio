import { React, PropTypes, useState } from 'react'

const DesignPresentation = ({ ImageBack, parentCallback }) => {
    const onClickOnTab = () => {
        parentCallback()
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'block';
    }
    return (
        <div className="design-presentation-container">
            <div className="design-container">

                <div className="show-vertical-image" style={
                    { backgroundImage: ImageBack }
                }>
                </div>
                <button onClick={onClickOnTab} className="close-design">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </div >
    )
}



function Logos({ title }) {
    let [TheImage, setTheImage] = useState();
    let [PresentationDesign, setPresentationDesign] = useState(false);

    const callback = () => {
        setPresentationDesign(PresentationDesign => false)
    }

    const clickOnImage = (e) => {
        let thImg = e.target;
        let theImageUrl = getComputedStyle(thImg).backgroundImage;

        setPresentationDesign(PresentationDesign => true);
        setTheImage(TheImage => theImageUrl);
        console.log(PresentationDesign, TheImage);

        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'none';
    }


    return (
        <div id='TheLogos' className='.all'>
            <div id="logo-title">
                <h1>{title}</h1>
            </div>
            {PresentationDesign && <DesignPresentation ImageBack={TheImage} parentCallback={callback} />}

            <div id='Logos-big-container'>

                <div className='Logos-container'>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div className="Logos-container-part-text">
                        <span>Demande du client : </span>
                        Creation de Logo pour une photographe professionnel,
                        le logo devait être moderne et proche de la street culture.
                    </div>
                </div>
                <div className='Logos-container'>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div className="Logos-container-part-text">
                        <span>Demande du client : </span>
                        Création d'un logo pour une entreprise d'architecture et d'une signature digital pour le fondateur.</div>
                </div>
                <div className='Logos-container'>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div className="Logos-container-part-text">
                        <span>Demande du client : </span>
                        Création d'un logo et mise en place d'une charte graphique pour "ELLES" une oeuvre littéraire portant sur des grandes figures féminines.

                    </div>
                </div>
                <div className='Logos-container'>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="Logo-Smoll-container">
                    </div>
                    <div className="Logos-container-part-text">
                        <span>Demande du client : </span>
                        Création d'un logo pour un collectif de createur digital.
                    </div>
                </div>

            </div>
        </div>

    )
}





export default Logos