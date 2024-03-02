import styles from "./Video.module.scss"
import ReactPlayer from "react-player";

// importamos el reproductor que traimos de yarnpkg el react-player
export function Video( props) {
    const {video} = props;
  return (
    <ReactPlayer url={video} 
        className={styles.video} 
        width="100%" 
        height={634}
        controls={true}
        
        />

        
  )
}
