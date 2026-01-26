// import TopNav from "./topnav";
import styles from "./gra_tile.module.css"
import Image from "next/image"
// import { readFile } from "node:fs";

export interface GraInfo {
    name: string;
    bio: string;
    floor: string;
    image: string;
}

export default async function GraTile ({name, bio, floor, image} : GraInfo) {
    // const lowerName = name.toLowerCase();
    // const bioResponse = await fetch("./" + lowerName + ".txt")
    // string bio;// = bioResponse.text() // Check here first -> replace with .json?
    return (
        <main className={styles.gra_tile}>
            <h2>{floor} - {name}</h2>
            <div>
            <Image alt={name + " Image"} src={"/images/houseteam/" + image}
            />
            <p>{bio}</p>
            </div>
        </main>
    );
}

// export default GraTile;