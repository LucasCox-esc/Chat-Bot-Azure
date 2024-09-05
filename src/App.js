import 'primeicons/primeicons.css';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ backgroundColor: "#b81313", width: "100%", height: "90px", display: "flex", alignItems: "center", paddingLeft: "30px" }}>
        <i className='pi pi-pen-to-square' style={{ fontSize: '2rem', marginRight: '15px', color: "white" }}></i>
        <h1 style={{ margin: "0", fontSize: "1.8rem", fontWeight: "bold", color: "white", fontFamily: "'Times New Roman', serif" }}>Técnicas de Estudio</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "8%", display: 'flex', alignItems: "center", justifyContent: "center", border: "1px solid #bebebe", width: "80%", height: "400px", borderRadius: "13px", backgroundColor: "white" }}>
          <div style={{ fontSize: "35px", fontWeight: 'bold', color: "white", marginTop: "-460px" }} className='pi pi-user'></div>

        </div>
      </div>

    </div>

  );
}

export default App;
