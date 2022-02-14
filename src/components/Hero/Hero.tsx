import LinkWrap from "../LinkWrap/LinkWrap";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h1>Next.JS, SSR & SSG</h1>
      <h3>С чем взаимодействовал?</h3>
      <LinkWrap
        link={`https://nextjs.org/docs`}
        linkTitle="Next.JS"
        title="https://nextjs.org/docs"
      />
      <LinkWrap
        link={`https://jsonplaceholder.typicode.com`}
        linkTitle="JSONPlaceholder"
        title="https://jsonplaceholder.typicode.com"
      />
      <LinkWrap
        link={`https://axios-http.com`}
        linkTitle="Axios"
        title="https://axios-http.com/"
      />
      <LinkWrap
        link={`https://swiperjs.com`}
        linkTitle="Swiper JS"
        title="https://swiperjs.com"
      />
      <LinkWrap
        link={`https://yandex.ru/dev/maps`}
        linkTitle="Yandex Maps"
        title="https://yandex.ru/dev/maps"
      />
      <h3>Другие ссылки:</h3>
      <LinkWrap
        link={`https://github.com/gluhenko-dv/nextJS`}
        linkTitle="Репозиторий проекта"
        title="https://github.com/gluhenko-dv/nextJS"
      />
    </section>
  );
};

export default Hero;
