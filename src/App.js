import 'primeicons/primeicons.css';
import './App.css';
import PaginaPrincipal from './Page/PaginaPrincipal';


function App() {
  return (
    <div>
      <div style={{ backgroundColor: "#20488a", width: "100%", height: "90px", display: "flex", alignItems: "center", paddingLeft: "30px" }}>
        <i className='pi pi-pen-to-square' style={{ fontSize: '2rem', marginRight: '15px', color: "white" }}></i>
        <h1 style={{ margin: "0", fontSize: "1.8rem", fontWeight: "bold", color: "white", fontFamily: "'Times New Roman', serif" }}>Técnicas de Estudio</h1>
      </div>

      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "8%", display: 'flex', alignItems: "center", justifyContent: "center", border: "1px solid #bebebe", width: "80%", height: "400px", borderRadius: "13px", backgroundColor: "white" }}>
          <div style={{ fontSize: "35px", fontWeight: 'bold', color: "white", marginTop: "-460px" }} className='pi pi-user'></div>
        </div>
      </div> */}

      <div>
        <PaginaPrincipal />
      </div>
      <footer style={{ backgroundColor: "#20488a", width: "100%", padding: "10px 0", textAlign: "center", color: "white", fontFamily: "'Times New Roman', serif", height:"50px", marginTop:"20px" }}>
        <p style={{ margin: 0, fontSize: "1rem" }}>&copy; {new Date().getFullYear()} Técnicas de Estudio. Todos los derechos reservados.</p>
      </footer>
    </div>


  );
}

export default App;