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

function The3D({ title }) {

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
        <div id='The3D' className='.all'>

            <div id="The3D-title">
                <h1>Créations 3D</h1>
            </div>

            {PresentationDesign && <DesignPresentation ImageBack={TheImage} parentCallback={callback} />}

            <div id='The3D-big-container'>
                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Collection "Morceaux du Sénégal": </span>
                        Ceci est ma première collection nommé "Morceaux Du Sénégal".
                        La collection contient actuellement 3 pièces mais je travaille toujours dessus. <br /> <br /> <a href="https://www.behance.net/gallery/146508665/Collection-Morceaux-du-Sngal" target="_blank">
                            <div className="network">
                                Voir l'intégrité du projet
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Interior Design: </span>
                        Création de visuels architecturales photorealistes.  <br /> <br /> <a href="https://www.behance.net/gallery/147021627/Interior-Design" target="_blank">
                            <div className="network">
                                Voir l'intégrité du projet
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Pharmacie Design: </span>
                        Création de visuels architecturales photorealistes. <br /> <br /> <a href="https://www.behance.net/gallery/146933773/Pharmacie-Design" target="_blank">
                            <div className="network">
                                Voir l'intégrité du projet
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Small House: </span>
                        Création de visuels architecturales photorealistes. <br /> <br /> <a href="https://www.behance.net/gallery/146931051/Small-House" target="_blank">
                            <div className="network">
                                Voir l'intégrité du projet
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Products Designes et PUB:  </span>
                        Création de visuels publicitaires et animations. <br /> <br /> <a href="https://www.behance.net/gallery/147131937/Style-%28Product-Design%29" target="_blank">
                            <div className="network">
                                Voir l'intégrité du projet
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default The3D