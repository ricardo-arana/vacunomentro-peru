import Image from "next/image";
import Style from '../../styles/ForkMe.module.css';


export default function ForkMeComponent() {
    // TODO: Mejorar por medio de media query el tamaño de la imagen forkme
    return (
        <div className={Style.ForkMe}>
        <a href="https://github.com/ricardo-arana/vacunomentro-peru">
            <Image loading="lazy" width="100"
             height="100"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png"
            className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" />
            </a>
        </div>
    );
}