import styles from "./Gallery.module.scss"
import { useState } from "react"
import { Image } from "semantic-ui-react"
import { FullModal } from "@/components/Shared"
import { map } from "lodash"
import Slider from "react-slick"
import { ENV } from "@/utils"

export function Gallery( props) {
    const { screenshots } = props;
    const [show, setShow] = useState(false)

    const onOpenClose = () => setShow(prevState => !prevState)
    const screenshotsClone= [...screenshots];//este clona el array de imagenes con el iterator
    const principalImage=screenshotsClone.shift() //aca nos coge la primer imagen del array
    
    const settings ={
        dots: true,
        dotsClass: styles.dots,
        infinitive: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (index){
            return <Image src={`${ENV.SERVER_HOST}${screenshots[index].attributes.url}`}/>
        }

    };
   // console.log(screenshots);
    //console.log(principalImage);
    //console.log(screenshotsClone);

    

  return (
    <>
        <div className={styles.gallery}>
            <div className={styles.principal}>
                
                <Image src ={`${ENV.SERVER_HOST}${principalImage.attributes.url }`} onClick={onOpenClose}/>
            </div>
        

            <div className={styles.grid}>
                {map(screenshotsClone, (screenshot)=>(
                        <div key={screenshot.id}>
                            <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url }`} />
                        </div>
                ))}
            </div>
        </div>

        <FullModal show={show} onClose={onOpenClose}>
            <div className={styles.carouselContainer}>
                <Slider {...settings}>
                    {map(screenshots, (screenshot) => (
                        <div key={screenshot.id}>
                            <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url }`} onClick={onOpenClose}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </FullModal>
    </>
  )
}
