interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;

}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Alex',
        edad: 28,
        direccion: {
            pais: 'Ecuador',
            casaNo: 615
        }
    }

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)} {/*Transforma el objeto como si fuera un string y JSON.stringify(persona, ['nombre'], 2) permite representar ciertos parametros del objeto */}
                </pre>
            </code>
        </div>
    )
}
