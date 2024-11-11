import React from 'react';

const Contacto = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe

        // Captura los datos del formulario
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        // Muestra los datos en la página
        const formDataDiv = document.getElementById('formData');
        formDataDiv.innerHTML = `
            <h3>Datos Ingresados:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        `;
    };

    return (
        <div class="container">
            <main>
                <h2>Contactanos</h2>

                <div>
                    <figure>

                    <img class='imagen_contacto' src='img/contacto.jpg'/>
                    
                    </figure>
                </div>
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar" className="buton" />
                    </div>
                </form>
                <div id="formData" className="form-data"></div>
            </main>
            <footer>
                <p>&copy; 2023 Tell me about you. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Contacto;