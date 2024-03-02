import {useState, useEffect, useReducer} from "react"
import{Image, Icon, Input} from "semantic-ui-react"
import {map} from "lodash"
import Link from "next/link";
import {useRouter} from "next/router";
import { Platform } from "@/api";
import classNames from "classnames";
import styles from "./Menu.module.scss"
import { ENV} from "@/utils"

const platformCtrl = new Platform();

export function Menu(props) {
    const {isOpenSearch} = props;
    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch]= useState(isOpenSearch)
    const router = useRouter();
    const [searchText, setSearchText] = useState("")




    const openCloseSearch = () => setShowSearch((prevState) => !prevState);
  //  console.log(platforms);

    useEffect(() => {
        (async() => {
            try {
            const response = await platformCtrl.getAll();
            setPlatforms(response.data);
            } catch (error) {
               console.error(error)
            }
        })();
    }, []);

    useEffect(() => {
        setSearchText(router.query.s || "")
    }, [])
    

    const onSearch = (text) => {
        setSearchText(text)
        router.replace(`/search?s=${text}`)
    }

  return (
    <div className={styles.platforms}>
        {map(platforms, (platform)=>(
            <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                <Image src= {`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}/>
                {platform.attributes.Title}
            </Link>

        ))}

        <button 
            className={styles.search} 
            onClick={openCloseSearch}>
            <Icon name="search"/>
        </button>

        <div className={classNames(styles.inputContainer, {
            [styles.active]: showSearch,
        })}>
            <Input 
                id="search-games" 
                placeholder="Buscador" 
                className={styles.input} 
                focus={true}
                value={searchText}
                onChange={(_,data)=> onSearch(data.value)} />
            <Icon 
                name="close" 
                className={styles.closeInput} 
                onClick={openCloseSearch}/>
        </div>

    </div>
  );
}
