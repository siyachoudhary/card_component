import React from 'react';
import './card.css';

const STYLES =[
    "card--left",
    "card--right"
]

const MODES =[
    "card--dark",
    "card--light"
]

export const Card =({
    img,
    cardStyle,
    name,
    placeType,
    linkPlace,
    desc,
    mode
})=>{

    const cardLayoutStyle = STYLES.includes(cardStyle)?cardStyle:STYLES[0]
    const image = img;
    const placeName = name;
    const typeOfPlace = placeType;
    const linkToPlace = linkPlace;
    const description = desc
    const colorMode = MODES.includes(mode)?mode:MODES[0]

    function display(imageName){
        document.getElementById(`popUp-${imageName}`).style.visibility="visible";
    }

    function close(imageName){
        document.getElementById(`popUp-${imageName}`).style.visibility="hidden"
    }

    return(
        <div className={`postcard ${colorMode}`}>
            {cardLayoutStyle === "card--left" ?
                <div className={'imageContainer'}>
                    <img src={image} className='postcard__img' alt={"location img"} data-original={image} onClick={() => display(image)}></img>
                </div>
            :""}
            <div className={`postcard__text ${cardLayoutStyle}`}>
                <h1 className={`postcard__title ${colorMode}--head`}><a href={linkToPlace}
                                                          target="blank">{placeName}</a></h1>
                <div className="postcard__subtitle">{typeOfPlace}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{description}</div>
            </div>
            {cardLayoutStyle === "card--right" ?
                <div className={'imageContainer'}>
                    <img src={image} className='postcard__img' alt={"location img"} data-original={image} onClick={() => display(image)}></img>
                </div>
                :""}
            <div id={`popUp-${image}`} className={"popUp"} style={{visibility:"hidden"}}>
                <img src={image} alt={"location img"} data-original={image} onClick={() => close(image)} className={'closeBtn'}></img>
                <p>{placeName}</p>
            </div>
        </div>
    )
}