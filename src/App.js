import 'primeicons/primeicons.css';
import './App.css';
import PaginaPrincipal from './Page/PaginaPrincipal';


function App() {
  return (
    <div>
      <div style={{ paddingLeft: "5%" }}>
        <div>
          <h1 style={{ fontSize: "65px", color:"#61E001" }}>Técnicas de Estudio</h1>
        </div>
        <div style={{ width: "90%" }}>
          <div style={{ padding: "0%" }} className="grid grid-cols-6 grid-rows-4 gap-5">
            <div style={{ padding: "15px", backgroundColor: "#61E001", width: "30%", height: "230px", borderRadius: "25px", color: "white" }} className="contenedor col-span-2 row-span-2">
              <h1>Mapa Mental</h1>
              <p className="texto" style={{ color: "white" }}>Es una herramienta de estudio bastante útil. Consiste en un diagrama que se utiliza para representar ideas, palabras, dibujos, imágenes, entre otros elementos que se relacionan a una idea o concepto central.</p>
            </div>
            <div style={{ padding: "15px", color: "white", backgroundColor: "#1EAFF7", width: "30%", height: "230px", borderRadius: "25px" }} className="contenedor col-span-2 row-span-2 col-start-3">              <h1>Los Resúmenes</h1>
              <p className="texto" style={{ color: "white" }}>Consisten en un escrito, generalmente breve, en el que se sintetizan los puntos de mayor relevancia de un texto de mayor complejidad, son una técnica bastante recomendable al momento de repasar o memorizar algún tema en particular</p>
            </div>
            <div style={{ padding: "15px", color: "white", backgroundColor: "#CD82FF", width: "30%", height: "230px", borderRadius: "25px" }} className="contenedor col-span-2 row-span-2 col-start-5">              <h1>Cuadros Comparativos</h1>
              <p className="texto" style={{ color: "white" }}>Son diagramas que permiten organizar visualmente conceptos, temas o categorías, suelen usar en estudios y análisis para resaltar similitudes, diferencias y relaciones entre los elementos comparados.</p>
            </div>
            <div style={{ padding: "15px", color: "white", backgroundColor: "#FEB201", width: "30%", height: "230px", borderRadius: "25px" }} className="contenedor col-span-2 row-span-2 row-start-3">              <h1>Resaltar las Ideas</h1>
              <p className="texto" style={{ color: "white" }}>El objetivo es marcar las ideas principales y los datos más importantes, de modo que después, para repasar, solo leas esas partes. Así, lo subrayado te permitirá recordar el contenido de dicho texto.</p>
            </div>
            <div style={{ padding: "15px", color: "white", backgroundColor: "#FE7777", width: "30%", height: "230px", borderRadius: "25px" }} className="contenedor col-span-2 row-span-2 col-start-3 row-start-3">              <h1>Técnica Pomodoro</h1>
              <p className="texto" style={{ color: "white" }}>Es un método de gestión del tiempo que consiste en trabajar en intervalos de 25 minutos separados por breves descansos, con el objetivo de mejorar la concentración, la productividad y la eficiencia en el trabajo o estudio.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "56%", margin: "80px auto 100px auto", textAlign: "center" }}>
        <p style={{ color: "black", fontSize: "20px" }}>
          <strong style={{ marginBottom: "65px" }}>Mejora tus habilidades de estudio con nuestras técnicas probadas</strong>
          <hr />
          En nuestra plataforma, te ofrecemos una amplia variedad de técnicas de estudio diseñadas para mejorar tu rendimiento académico. Desde la gestión del tiempo hasta estrategias de memorización, aquí encontrarás métodos que se adaptan a tu estilo de aprendizaje.
          Aprende a organizar tus horarios, optimizar la toma de apuntes, y maximizar tu concentración con recursos que han demostrado su efectividad. Todo ello de forma clara y práctica, para que puedas aplicarlo en tu día a día.
        </p>
      </div>

      <div style={{ width: "100%", height: "320px", backgroundColor: "#1FAEF7", marginTop:"30px",paddingTop:"20px" }}>
        <div style={{ width: "56%", paddingLeft: "2%",marginBottom:"72px" }}>
          <p style={{ color: "white", fontSize: "20px" }}>
            <strong style={{ marginBottom: "25px",marginTop:"30px"}}>¿Tienes dudas? ¡Nuestro Chatbot te ayudará!</strong>
            <hr />
            Sabemos que cada estudiante es único, por eso hemos implementado un Chatbot interactivo que está disponible para resolver todas tus consultas sobre técnicas de estudio. Solo tienes que hacer tu pregunta, y el bot te brindará respuestas rápidas y útiles, guiándote en el proceso de aprendizaje de manera personalizada.
          </p>
        </div>
        <footer style={{ marginBottom: "0", width: "100%", padding: "10px 0", textAlign: "center", color: "white", fontFamily: "'Times New Roman', serif", height: "50px", marginTop: "20px" }}>
          <p style={{ margin: 0, fontSize: "1rem" }}>&copy; {new Date().getFullYear()} Técnicas de Estudio. Todos los derechos reservados.</p>
        </footer>
      </div>

      {/* <div>
        <PaginaPrincipal />
      </div> */}






    </div>


  );
}

export default App;
