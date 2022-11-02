// import './style.css';

import { GetStaticProps } from "next";

// const cards = [
//   {
//     id: 1,
//     title: "WDB",
//     description:
//       "Web Dev Brasil, site criado em grupo para TCC, uma empresa, Startup, focada em criação de sites e aplicativos.",
//     img: "wdb.png",
//     link: "http://wdb-c.epizy.com",
//   },
//   {
//     id: 2,
//     title: "PetWash",
//     description:
//       "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas.",
//     img: "pet.png",
//     link: "http://petwash.epizy.com",
//   },
//   {
//     id: 3,
//     title: "Dogs",
//     description:
//       "Uma rede social para Postar fotos de seus Pets. Criado com React.js utilizando uma API WordPress para cadastrar usuários e posts.",
//     img: "dogs.png",
//     link: "http://rede-cachorro.epizy.com",
//   },
//   {
//     id: 4,
//     title: "Notícia cidade",
//     description: "Seu portal de notícias diário! um blog otimizado e simplificado com WordPress.",
//     img: "portal.png",
//     link: "http://portalcidade.epizy.com/",
//   },
//   {
//     id: 5,
//     title: "WDB blog",
//     description:
//       "Web Dev Brasil, site criado em grupo para TCC, uma empresa Startup, transformado em um blog com WordPress.",
//     img: "wdb-blog.png",
//     link: "http://wdb.epizy.com/blog/",
//   },
// ];

const Home = () => {
  return (
    <div>
      page
      {/* <Header />

            <main className="background-img">
                <section className="container bg-white p-3">
                    <div className="container-line">
                        <div className="row p-4">
                            {cards.map((card) =>
                                <Card card={card} key={card.id}/>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
