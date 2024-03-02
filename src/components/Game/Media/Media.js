import styles from "./Media.module.scss";
import { Button, Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared"
import { Gallery } from "./Gallery"
import { Video } from "./Video"

export function Media(props) {
    //hacemos el object estructuring

    const {video, screenshots} = props;
   // console.log(props);
  return (
    <Container>
        <h2>Visuales</h2>
        <Separator height={30}/>
        <Video video={video}/>
        <Separator height={30}/>
        <Gallery screenshots= {screenshots}/>
    </Container>
  )
}
