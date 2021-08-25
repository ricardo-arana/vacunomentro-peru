/* eslint-disable @next/next/no-img-element */

export default function ForkMeComponent() {
  // TODO: Mejorar por medio de media query el tamaño de la imagen forkme
  return (
    <div className="ForkMe">
      <a href="https://github.com/ricardo-arana/vacunomentro-peru">
        <img
          loading="lazy"
          src="./images/forkme.png"
          className="image"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </div>
  );
}
