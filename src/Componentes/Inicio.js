import React, { useState } from 'react';
import { mostrarSigno, mostrarMes, seleccionarPais, mostrarPais, mostrarEdad } from './funciones';

const Inicio = () => {
    const [pais, setPais] = useState('');
    const [mesNacimiento, setMesNacimiento] = useState('');
    const [signoZodiacal, setSignoZodiacal] = useState('');
    const [edad, setEdad] = useState('');
    const [resultados, setResultados] = useState({ pais: null, mes: null, signo: null, edad: null });

    const handlePaisClick = (event) => {
        const paisSeleccionado = event.target.alt.toLowerCase();
        setPais(paisSeleccionado);
    };

    const handleEnviarClick = () => {
        const paisResultado = mostrarPais(pais);
        const mesResultado = mostrarMes(mesNacimiento);
        const signoResultado = mostrarSigno(signoZodiacal);
        const edadResultado = mostrarEdad(edad);
        setResultados({ pais: paisResultado, mes: mesResultado, signo: signoResultado, edad: edadResultado });
    };

    return (
        <div className="container">
            <main>
                <form className="información" action="">
                    <div>
                        <label className="label" htmlFor="pais">Selecciona tu país de origen</label>
                        <div className="banderas">
                            <img className="img" src="img/argentina.png" alt="Argentina" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/brasil.png" alt="Brasil" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/peru.png" alt="Peru" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/ecuador.jpg" alt="Ecuador" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/bolivia.png" alt="Bolivia" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/chile.png" alt="Chile" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/paraguay.png" alt="Paraguay" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/uruguay.png" alt="Uruguay" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/colombia.png" alt="Colombia" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/venezuela.jpg" alt="Venezuela" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/guyana.png" alt="Guyana" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/surinam.png" alt="Surinam" onClick={(event) => seleccionarPais(event)} />
                            <img className="img" src="img/trinidad.png" alt="Trinidad y Tobago" onClick={(event) => seleccionarPais(event)} />
                            <input type="hidden" id="pais" name="pais" value={pais} />
                        </div>
                    </div>

                    <div>
                        <label className="label" htmlFor="mes_nacimiento">Selecciona tu mes de nacimiento</label>
                        <select id="mes_nacimiento" name="mes_nacimiento" value={mesNacimiento} onChange={(e) => setMesNacimiento(e.target.value)}>
                            <option value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Abril">Abril</option>
                            <option value="Mayo">Mayo</option>
                            <option value="Junio">Junio</option>
                            <option value="Julio">Julio</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Septiembre">Septiembre</option>
                            <option value="Octubre">Octubre</option>
                            <option value="Noviembre">Noviembre</option>
                            <option value="Diciembre">Diciembre</option>
                        </select>
                    </div>

                    <div>
                        <label className="label" htmlFor="signo_zodiacal">Selecciona tu signo zodiacal</label>
                        <select id="signo_zodiacal" name="signo_zodiacal" value={signoZodiacal} onChange={(e) => setSignoZodiacal(e.target.value)}>
                            <option value="Aries">Aries</option>
                            <option value="Tauro">Tauro</option>
                            <option value="Geminis">Géminis</option>
                            <option value="Cancer">Cáncer</option>
                            <option value="Leo">Leo</option>
                            <option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option>
                            <option value="Escorpio">Escorpio</option>
                            <option value="Sagitario">Sagitario</option>
                            <option value="Capricornio">Capricornio</option>
                            <option value="Acuario">Acuario</option>
                            <option value="Piscis">Piscis</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="label" htmlFor="edad"> Selecciona tu edad </label>
                        <select id="edad" name="edad-lista" value={edad} onChange={(e) => setEdad(e.target.value)}>
                            <option value="0-5">0-5</option>
                            <option value="6-12">6-12</option>
                            <option value="13-19">13-19</option>
                            <option value="20-40">20-40</option>
                        </select>
                    </div>

                    <input className="buton" type="button" value="Enviar" onClick={handleEnviarClick} />
                </form>

                <div className="resultados">
                    <ul id="paises-lista"></ul>
                    <ul id="meses-lista"></ul>
                    <ul id="signos-lista"></ul>
                    <ul id="edad-lista"></ul>
                </div>
            </main>

            <footer>
                <p>&copy; 2023 Tell me about you. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Inicio;