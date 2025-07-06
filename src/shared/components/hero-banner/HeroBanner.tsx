import Image, { StaticImageData } from "next/image";
import { Container } from "../container/Container";
import styles from './heroBanner.module.css';

type Props = {
    title: string;
    subtitle: string;
    categories: string[];
    textLink: string;
    image: StaticImageData;
    altImage: string;
}

const HeroBanner = ({ title, subtitle, categories, textLink, image, altImage }:Props):JSX.Element => {
    return (
        <section className="relative overflow-hidden">
            <Container className={ styles.banner }>
                <article className={ styles.bannerContent }>
                    <h1 className={ styles.bannerTitle }>{ title }</h1>
                    <h2 className={ styles.bannerSubititle }>{ subtitle }</h2>
                    <div className={ styles.bannerFlex }>
                        <ul className={ styles.bannerCategories }>
                            {categories.map((data, index)=>(
                            <li key={index}>{ data }</li> 
                            ))}
                        </ul>
                        <div className={ styles.bannerLink }>
                            <a href="#">{ textLink }</a>
                        </div>
                    </div>
                </article>
            </Container>
            <section className={ styles.bannerImage }>
                <Image src={ image } alt={ altImage } />
            </section>
        </section>
    )
}

export { HeroBanner }