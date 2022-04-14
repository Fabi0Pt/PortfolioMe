import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.springernature.com/w580h326/nature-cms/uploads/collections/AI_and_machine_learning-00afb90f3d21234fd0f207243f60aa8e.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
          Se eu pudesse me definir em 3 palavras, certamente seriam: otimista, perseverante e esforçado! :)
        </p>
        <p className="a-desc">
          Sou uma pessoa calma para lidar com situações incomuns e hiperativa para buscar soluções. Eu sou o Fábio, e com meus 30 anos penso que é preciso estarmos dispostos a encarar grandes adversidades para buscar o que realmente desejamos. Ficamos mais fortes a cada obstáculo enfrentado pelo caminho. Penso que esta visão tem contribuído para que hoje eu tenha uma bagagem diversificada - o que favorece minhas contribuições às equipes que me envolvo no mercado e grupos de estudos.
          Me considero ágil e consistente em aprender uma nova tecnologia e me adaptar à qualquer mudança, pronto para superar qualquer desafio!
          Se eu pudesse me definir em 3 palavras, certamente seriam: otimista, perseverante e esforçado! :)
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
