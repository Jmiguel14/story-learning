export const LEARNING_RESOURCES = [
  {
    id: 1,
    code: "adjectives",
    title: "Adjetivos",
    description:
      "Un adjetivo es una palabra que describe o califica a un sustantivo, dándole alguna característica. Ejemplos: 'grande' (una casa grande).",
    htmlContent: `
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué es un adjetivo?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un adjetivo?</h1>
  <p>Los <strong>adjetivos</strong> son palabras que <strong>describen o califican a los sustantivos</strong>. Son esenciales porque nos permiten expresar cómo son las personas, los objetos o las situaciones. Además, enriquecen nuestra comunicación al hacerla más interesante y detallada.</p>

  <p>Imagina la frase: “El hombre se fue a dormir y escuchó un ruido.” Suena sencilla, ¿no? Pero si decimos: “El hombre cansado se fue a dormir y escuchó un ruido suave, débil y chillón”, la imagen es mucho más vívida. Las palabras <em>cansado</em>, <em>suave</em>, <em>débil</em> y <em>chillón</em> son adjetivos porque aportan detalles que describen al hombre y al ruido.</p>

  <p>El término <em>adjetivo</em> proviene del latín <em>adjectivum</em>, que significa “que se agrega a”. Su función es complementar el significado del sustantivo y puede colocarse antes o después de él. Además, debe coincidir en género y número (por ejemplo: <em>niño alto</em>, <em>niñas altas</em>).</p>

  <p>Ahora que conocemos su función, exploremos los <strong>principales tipos de adjetivos</strong> en español y algunos ejemplos.</p>

  <h2>Tipos principales de adjetivos</h2>

  <h3>1. Adjetivos calificativos</h3>
  <p>Describen cualidades o características del sustantivo, como tamaño, color o estado.</p>
  <div class="example">
    Ejemplos: bonito, feo, amable, rápido.<br>
    Oración: La niña estaba feliz.
  </div>

  <h3>2. Adjetivos indefinidos</h3>
  <p>Indican cantidad o grado, pero de manera imprecisa.</p>
  <div class="example">
    Ejemplos: algunos, varios, muchos, pocos.<br>
    Oración: Hay mucha gente en la fiesta.
  </div>

  <h3>3. Adjetivos posesivos</h3>
  <p>Expresan pertenencia o relación con alguien.</p>
  <div class="example">
    Ejemplos: mi, tu, su, nuestro.<br>
    Oración: Mi viaje fue divertido.
  </div>

  <h3>4. Adjetivos demostrativos</h3>
  <p>Señalan la ubicación o cercanía del sustantivo respecto al hablante.</p>
  <div class="example">
    Ejemplos: este, esa, aquellos, aquellas.<br>
    Oración: Esos libros son interesantes.
  </div>

  <h3>5. Adjetivos numerales</h3>
  <p>Expresan cantidad exacta u orden.</p>
  <div class="example">
    Ejemplos: uno, segundo, triple, mitad.<br>
    Oración: Quiero la mitad del pastel.
  </div>

  <h3>6. Adjetivos gentilicios</h3>
  <p>Indican el origen o nacionalidad del sustantivo.</p>
  <div class="example">
    Ejemplos: ecuatoriano, mexicano, francés, japonés.<br>
    Oración: Marta es una cantante española.
  </div>

  <h3>7. Adjetivos interrogativos y exclamativos</h3>
  <p>Se usan para hacer preguntas o expresar emociones, y siempre llevan tilde.</p>
  <div class="example">
    Ejemplos: qué, cuál, cuánto.<br>
    Oraciones: ¿Qué hora es? ¡Qué bonita está la mañana!
  </div>

  <h2>Tabla de ejemplos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Tipo de adjetivo</th>
        <th>Ejemplo 1</th>
        <th>Ejemplo 2</th>
        <th>Ejemplo 3</th>
        <th>Ejemplo 4</th>
      </tr>
      <tr>
        <td>Calificativos</td>
        <td>rápido</td>
        <td>feliz</td>
        <td>verde</td>
        <td>ordenado</td>
      </tr>
      <tr>
        <td>Indefinidos</td>
        <td>algunos</td>
        <td>pocos</td>
        <td>muchos</td>
        <td>varios</td>
      </tr>
      <tr>
        <td>Posesivos</td>
        <td>mi</td>
        <td>tu</td>
        <td>nuestro</td>
        <td>su</td>
      </tr>
      <tr>
        <td>Demostrativos</td>
        <td>este</td>
        <td>esa</td>
        <td>aquellos</td>
        <td>estas</td>
      </tr>
      <tr>
        <td>Numerales</td>
        <td>primero</td>
        <td>tercero</td>
        <td>doble</td>
        <td>mitad</td>
      </tr>
      <tr>
        <td>Gentilicios</td>
        <td>mexicano</td>
        <td>colombiano</td>
        <td>argentino</td>
        <td>español</td>
      </tr>
      <tr>
        <td>Interrogativos / Exclamativos</td>
        <td>qué</td>
        <td>cuánto</td>
        <td>cuáles</td>
        <td>cuánta</td>
      </tr>
    </table>
  </div>

</body>
</html>
`,
  },
  {
    id: 2,
    code: "verbs",
    title: "Verbos",
    description:
      "Un verbo es una palabra que indica una acción, estado o una condición. Ejemplo: 'correr' (acción: Juan corre rápido).",
    htmlContent: `
   <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué es un verbo?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un verbo?</h1>
  <p>Los <strong>verbos</strong> son palabras que expresan una <strong>acción, estado o existencia</strong> dentro de una oración. Indican qué hace o experimenta el sujeto y son esenciales para formar oraciones completas, ya que sin ellos no podríamos comunicar una idea completa.</p>

  <h2>Verbos en infinitivo y conjugados</h2>
  <p>Un <strong>verbo en infinitivo</strong> es la forma básica del verbo, sin indicar persona, tiempo ni modo. En español, los infinitivos terminan en <em>-ar</em>, <em>-er</em> o <em>-ir</em>, como <em>hablar</em>, <em>comer</em> y <em>vivir</em>. Cuando los adaptamos para mostrar quién realiza la acción o cuándo sucede, se convierten en <strong>verbos conjugados</strong>.</p>

  <h2>Accidentes verbales</h2>
  <p>Los verbos cambian su forma según distintos factores llamados <strong>accidentes gramaticales</strong>: persona, número, tiempo, aspecto, modo y voz.</p>

  <h3>Persona y número</h3>
  <p>El verbo debe coincidir con la persona (primera, segunda o tercera) y el número (singular o plural) del sujeto.</p>
  <div class="table-container">
    <table>
      <tr>
        <th>Persona</th>
        <th>Número</th>
        <th>Ejemplo</th>
      </tr>
      <tr><td>Primera</td><td>Singular</td><td>Yo juego en el parque.</td></tr>
      <tr><td>Primera</td><td>Plural</td><td>Nosotros jugamos en el parque.</td></tr>
      <tr><td>Segunda</td><td>Singular</td><td>Tú juegas en el parque.</td></tr>
      <tr><td>Segunda</td><td>Plural</td><td>Ustedes juegan en el parque.</td></tr>
      <tr><td>Tercera</td><td>Singular</td><td>Ella juega en el parque.</td></tr>
      <tr><td>Tercera</td><td>Plural</td><td>Ellas juegan en el parque.</td></tr>
    </table>
  </div>

  <h3>Tiempo y aspecto</h3>
  <p>El <strong>tiempo verbal</strong> indica cuándo ocurre la acción (pasado, presente o futuro), y el <strong>aspecto</strong> muestra si está completa o en desarrollo.</p>
  <div class="example">
    Presente: Yo juego al fútbol.<br>
    Pretérito perfecto: Ayer jugué al fútbol.<br>
    Futuro: Jugaré al fútbol más tarde.
  </div>

  <h3>Modos verbales</h3>
  <p>Los <strong>modos verbales</strong> expresan la actitud del hablante: <em>indicativo</em> (realidad), <em>imperativo</em> (orden o ruego) y <em>subjuntivo</em> (deseo o hipótesis).</p>

  <div class="example">
    <strong>Indicativo:</strong> María lee un cuento.<br>
    <strong>Imperativo:</strong> Come tus vegetales.<br>
    <strong>Subjuntivo:</strong> Ojalá estuviera comiendo tacos.
  </div>

  <h3>Voz activa y pasiva</h3>
  <p>En la <strong>voz activa</strong>, el sujeto realiza la acción; en la <strong>voz pasiva</strong>, la recibe.</p>
  <div class="example">
    Activa: Conduzco mi auto.<br>
    Pasiva: Esta carta fue escrita por mí.
  </div>

  <h2>Tipos de verbos</h2>

  <h3>Verbos regulares</h3>
  <p>Siguen un patrón constante de conjugación. Ejemplo de conjugación en presente:</p>
  <div class="table-container">
    <table>
      <tr>
        <th>Persona</th>
        <th>Cantar (-ar)</th>
        <th>Comer (-er)</th>
        <th>Vivir (-ir)</th>
      </tr>
      <tr><td>Yo</td><td>canto</td><td>como</td><td>vivo</td></tr>
      <tr><td>Tú</td><td>cantas</td><td>comes</td><td>vives</td></tr>
      <tr><td>Él / Ella</td><td>canta</td><td>come</td><td>vive</td></tr>
      <tr><td>Nosotros</td><td>cantamos</td><td>comemos</td><td>vivimos</td></tr>
      <tr><td>Vosotros</td><td>cantáis</td><td>coméis</td><td>vivís</td></tr>
      <tr><td>Ellos</td><td>cantan</td><td>comen</td><td>viven</td></tr>
    </table>
  </div>

  <h3>Verbos irregulares</h3>
  <p>No siguen un patrón de conjugación. Ejemplos: <em>ser, ir, tener, dormir, jugar</em>.</p>

  <h3>Verbos defectivos e impersonales</h3>
  <p>Los <strong>defectivos</strong> no se conjugan en todos los tiempos (ej. <em>abolir</em>), y los <strong>impersonales</strong> no tienen sujeto (ej. <em>llover, nevar</em>).</p>

  <h3>Verbos transitivos e intransitivos</h3>
  <p>Los <strong>transitivos</strong> necesitan un objeto directo, los <strong>intransitivos</strong> no.</p>
  <div class="example">
    Transitivo: Marta recogió las manzanas.<br>
    Intransitivo: Yo camino.
  </div>

  <h3>Verboides</h3>
  <p>Son formas no personales del verbo: <strong>infinitivo, gerundio y participio</strong>.</p>
  <div class="example">
    Infinitivo: Trabajar duro es importante.<br>
    Gerundio: Voy caminando a casa.<br>
    Participio: Estaba cansado después del partido.
  </div>

</body>
</html>
    `,
  },
  {
    id: 3,
    code: "synonyms",
    title: "¿Qué es un sinónimo?",
    description:
      "Un sinónimo es una palabra que tiene el mismo significado que otra. Por ejemplo: 'feliz' y 'contento' son sinónimos.",
    htmlContent: `
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué es un sinónimo?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    /* ===== Example Boxes (Cards) ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un sinónimo?</h1>
  <p>Los <strong>sinónimos</strong> son palabras o expresiones que se utilizan para sustituir a otra que tiene el mismo o similar significado. Ejemplos: <em>flaco/delgado</em>, <em>bailar/danzar</em>, <em>madre/mamá</em>.</p>

  <p>Los sinónimos son fundamentales porque permiten comunicarnos con más variedad y precisión, evitando repeticiones sin cambiar el sentido del mensaje. Además, conocer sus tipos y usos mejora nuestras habilidades lingüísticas.</p>

  <h2>Importancia de los sinónimos</h2>
  <p>Los sinónimos enriquecen el vocabulario y dan armonía a nuestras ideas, demostrando dominio del lenguaje y claridad en la expresión.</p>
  <div class="example">
    Ejemplo:<br>
    El cabello de mi amiga Marta es muy lindo.<br>
    Esta mañana tenía el pelo encrespado y se le notaba precioso.
  </div>

  <h2>Tipos de sinónimos</h2>

  <h3>1. Sinónimos totales o absolutos</h3>
  <p>Se aplican en cualquier contexto porque su significado es exactamente el mismo.</p>
  <div class="example">
    Ejemplo:<br>
    Rosario subió a la cima. / Rosario subió a la cumbre.
  </div>

  <h3>2. Sinónimos parciales o contextuales</h3>
  <p>Tienen significado similar, pero solo pueden usarse en determinados contextos.</p>
  <div class="example">
    Ejemplo:<br>
    Tenemos que caminar por el mismo camino. / Tenemos que caminar por la misma vía.
  </div>

  <h3>3. Sinónimos conceptuales</h3>
  <p>Transmiten la misma idea con diferentes palabras, reforzando la intensidad de la idea.</p>
  <div class="example">
    Ejemplo:<br>
    Pedro es millonario, además de rico de cuna.
  </div>

  <h3>4. Sinónimos referenciales</h3>
  <p>Se refieren a la misma cosa o concepto, aunque las palabras tengan significados diferentes.</p>
  <div class="example">
    Ejemplo:<br>
    Luisa recibió un anillo; dice que es su mejor regalo.
  </div>

  <h3>5. Sinónimos connotativos</h3>
  <p>Dan un matiz emocional o subjetivo, dependiendo del contexto.</p>
  <div class="example">
    Ejemplo:<br>
    Carlos encontró refugio en una casucha, que le sirvió de abrigo hasta que dejó de nevar.
  </div>

  <h3>6. Sinónimos con diferencia de grado</h3>
  <p>Tienen significados parecidos, pero difieren en la intensidad que expresan.</p>
  <div class="example">
    Ejemplo:<br>
    <em>Carcajear</em> y <em>reír</em> son sinónimos, pero el primero expresa mayor intensidad.
  </div>

  <h2>Sinónimos y antónimos</h2>
  <p>Los sinónimos tienen significados similares, mientras que los antónimos expresan lo opuesto.</p>
  <div class="example">
    Ejemplo:<br>
    amable / malo, despierto / dormido, feliz / triste
  </div>

  <h2>Ejemplos de sinónimos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Sustantivos</th>
        <th>Adjetivos</th>
        <th>Verbos</th>
      </tr>
      <tr>
        <td>lentes / gafas</td>
        <td>veloz / rápido</td>
        <td>sumar / incorporar</td>
      </tr>
      <tr>
        <td>burro / asno</td>
        <td>generoso / dadivoso</td>
        <td>ingresar / entrar</td>
      </tr>
      <tr>
        <td>hogar / casa</td>
        <td>bello / hermoso</td>
        <td>ver / mirar</td>
      </tr>
      <tr>
        <td>madre / mamá</td>
        <td>flaco / delgado</td>
        <td>bailar / danzar</td>
      </tr>
      <tr>
        <td>cuaderno / libreta</td>
        <td>costoso / caro</td>
        <td>beber / tomar</td>
      </tr>
    </table>
  </div>

  <h2>Oraciones con sinónimos</h2>
  <h3>Sinónimos totales o absolutos</h3>
  <div class="example">
    Siempre me ha gustado bailar. / Siempre me ha gustado danzar.<br>
    El coche se atoró en el barro. / Las ruedas se enterraron en el lodo.
  </div>

  <h3>Sinónimos parciales o contextuales</h3>
  <div class="example">
    Para preparar la torta debemos mezclar todos los ingredientes. / Ahora debemos unir los ingredientes.
  </div>

  <h3>Sinónimos conceptuales</h3>
  <div class="example">
    José tiene un abuelo que le da buenos consejos; es un sabio.
  </div>

  <h3>Sinónimos connotativos</h3>
  <div class="example">
    Carmela es muy linda. / Carmela es bella.
  </div>

  <h3>Sinónimos con diferencia de grado</h3>
  <div class="example">
    Juan tenía una gran tristeza; su aflicción lo va a enfermar.
  </div>

</body>
</html>
    `,
  },
  {
    id: 4,
    code: "common_nouns",
    title: "Sustantivos Comunes",
    description:
      "Los sustantivos comunes son palabras que nombran personas, animales, cosas o lugares de manera general. Ejemplo: 'perro' (animal común).",
    htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué son los sustantivos comunes?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    /* ===== Example Boxes (Cards) ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué son los sustantivos comunes?</h1>

  <p>Los <strong>sustantivos comunes</strong> son palabras que usamos para describir personas, lugares, cosas o ideas en general. Se diferencian de los sustantivos propios, que nombran algo específico. Se escriben en minúscula, a menos que inicien una oración.</p>

  <div class="example">
    Ejemplos: mesa, silla, casa, perro, gato, carro, ciudad, país.
  </div>

  <p>Los sustantivos comunes pueden ser concretos o abstractos, y también varían en género y número.</p>

  <div class="example">
    Concreto: El niño corrió en el parque.<br>
    Abstracto: La belleza está en el ojo del espectador.<br>
    Singular: Me senté a la mesa a hacer mi tarea.<br>
    Plural: Hay muchas mesas en la cafetería.
  </div>

  <h2>Sustantivos propios y comunes</h2>
  <p>Los sustantivos propios nombran algo específico: nombres, lugares, marcas, festividades, etc.</p>

  <div class="example">
    Ejemplos de sustantivos propios: Coca-Cola, París, Miguel, México, Navidad.
  </div>

  <h2>Ejemplos de sustantivos comunes</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Singular</th>
        <th>Plural</th>
      </tr>
      <tr><td>conejo</td><td>conejos</td></tr>
      <tr><td>camisa</td><td>camisas</td></tr>
      <tr><td>libro</td><td>libros</td></tr>
      <tr><td>computadora</td><td>computadoras</td></tr>
      <tr><td>silla</td><td>sillas</td></tr>
      <tr><td>reloj</td><td>relojes</td></tr>
      <tr><td>ventana</td><td>ventanas</td></tr>
      <tr><td>bicicleta</td><td>bicicletas</td></tr>
      <tr><td>manzana</td><td>manzanas</td></tr>
      <tr><td>hombre</td><td>hombres</td></tr>
      <tr><td>amigo</td><td>amigos</td></tr>
      <tr><td>tigre</td><td>tigres</td></tr>
      <tr><td>lápiz</td><td>lápices</td></tr>
      <tr><td>cama</td><td>camas</td></tr>
      <tr><td>canción</td><td>canciones</td></tr>
      <tr><td>sombrero</td><td>sombreros</td></tr>
      <tr><td>avión</td><td>aviones</td></tr>
      <tr><td>abrigo</td><td>abrigos</td></tr>
      <tr><td>película</td><td>películas</td></tr>
      <tr><td>suéter</td><td>suéteres</td></tr>
    </table>
  </div>

  <h2>Oraciones con sustantivos comunes</h2>
  <div class="example">
    La mesa es de madera.<br>
    El perro juega en el jardín.<br>
    La ciudad tiene muchos edificios altos.<br>
    El sol está muy caliente hoy.<br>
    El tren llega a las 3 de la tarde.<br>
    La televisión es muy grande.<br>
    El libro tiene muchas páginas.<br>
    La música suena muy bien.<br>
    La comida está deliciosa.<br>
    La pelota es redonda.<br>
    La niña corre en el parque.<br>
    La mesa de la cocina está sucia.<br>
    El niño juega con sus juguetes en el suelo.<br>
    El árbol tiene muchas hojas verdes.<br>
    La maestra explica la lección en la pizarra.
  </div>

</body>
</html>
    `,
    },
  {
    id: 5,
    code: "collective_nouns",
    title: "Sustantivos Colectivos",
    description:
      "Los sustantivos colectivos son palabras que nombran a un grupo de personas, animales, cosas o lugares de manera general. Ejemplo: 'equipo' (grupo de personas).",
    htmlContent: `
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué es un sustantivo colectivo?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    /* ===== Example Boxes (Cards) ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un sustantivo colectivo?</h1>

  <p>Un <strong>sustantivo colectivo</strong> se utiliza para referirse a un grupo de personas, animales, objetos u otras cosas que se consideran como un todo. Facilita la comunicación al referirse a un conjunto de elementos de forma conjunta.</p>

  <div class="example">
    Ejemplo: en lugar de decir “cinco pájaros”, podemos decir “bandada de pájaros”.
  </div>

  <p>Algunos ejemplos de sustantivos colectivos:</p>
  <div class="example">
    Manada: grupo de animales (elefantes, lobos, leones).<br>
    Multitud: grupo de personas reunidas.<br>
    Equipo: personas que trabajan juntas.<br>
    Familia: personas unidas por lazos de sangre o afecto.<br>
    Arboleda: grupo de árboles en un lugar.
  </div>

  <p>Los sustantivos colectivos pueden ser masculinos o femeninos, singulares o plurales:</p>
  <div class="example">
    Mi familia ve la televisión.<br>
    Todas las familias están invitadas al festival escolar.
  </div>

  <h2>Sustantivos individuales y colectivos</h2>
  <p>Los sustantivos colectivos se diferencian de los individuales, que se refieren a una sola cosa o ser.</p>
  <div class="example">
    Sustantivo individual: El hombre vio seis ciervos en el bosque.<br>
    Sustantivo colectivo: El hombre vio una manada de ciervos en el bosque.
  </div>

  <h2>Ejemplos de sustantivos colectivos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Sustantivo colectivo</th>
        <th>Definición</th>
      </tr>
      <tr><td>flota</td><td>Conjunto de vehículos o barcos</td></tr>
      <tr><td>enjambre</td><td>Conjunto de insectos</td></tr>
      <tr><td>tropa</td><td>Conjunto de soldados</td></tr>
      <tr><td>cardumen</td><td>Conjunto de peces</td></tr>
      <tr><td>rebaño</td><td>Conjunto de ovejas</td></tr>
      <tr><td>bandada</td><td>Conjunto de aves</td></tr>
      <tr><td>colmena</td><td>Conjunto de abejas</td></tr>
      <tr><td>manada</td><td>Conjunto de animales</td></tr>
      <tr><td>archipiélago</td><td>Conjunto de islas</td></tr>
      <tr><td>constelación</td><td>Conjunto de estrellas</td></tr>
      <tr><td>ejército</td><td>Conjunto de fuerzas militares</td></tr>
      <tr><td>archivo</td><td>Conjunto de documentos</td></tr>
      <tr><td>jauría</td><td>Conjunto de perros o lobos</td></tr>
      <tr><td>cosecha</td><td>Conjunto de frutos o productos agrícolas</td></tr>
      <tr><td>biblioteca</td><td>Conjunto de libros</td></tr>
      <tr><td>orquesta</td><td>Conjunto de músicos</td></tr>
    </table>
  </div>

  <h2>Oraciones con sustantivos colectivos</h2>
  <div class="example">
    La manada de elefantes se desplazaba por la selva.<br>
    El equipo de fútbol ganó el campeonato nacional.<br>
    El rebaño de ovejas pastaba en el campo.<br>
    La multitud de personas esperaba afuera del estadio.<br>
    El cardumen de peces se movía en el agua cristalina.<br>
    El pelotón de soldados marchaba en formación.<br>
    La bandada de gaviotas volaba sobre la playa.<br>
    La colonia de pingüinos se reunía en la costa de la Antártica.
  </div>

</body>
</html>
    `,
    },
  {
    id: 6,
    code: "nouns",
    title: "Sustantivos",
    description:
      "Un sustantivo es una palabra que nombra a una persona, animal, cosa o lugar. Ejemplo: 'perro' (animal).",
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¿Qué es un sustantivo?</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 {
      font-size: 1.8rem;
      margin-top: 0.5em;
    }

    h2 {
      font-size: 1.4rem;
      margin-top: 1.5em;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }

    p {
      margin-bottom: 1em;
      font-size: 1rem;
    }

    /* ===== Example Boxes (Cards) ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      th, td {
        font-size: 0.85rem;
        padding: 8px;
      }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un sustantivo?</h1>
  <p>Un <strong>sustantivo</strong> es una palabra que se usa para referirse a una persona, lugar, cosa o idea. Son fundamentales en cualquier oración para expresar significado y transmitir información de manera clara y precisa.</p>

  <div class="example">
    Ejemplos de sustantivos:<br>
    Las ranas saltan al lago.<br>
    La maestra calificó las pruebas.<br>
    Mi camiseta favorita es roja.<br>
    Juan corre en el parque.<br>
    La libertad es una idea principal de la democracia.
  </div>

  <h2>Tipos de sustantivos</h2>

  <h3>Sustantivos propios</h3>
  <div class="example">
    Denotan personas, lugares o cosas específicas: México, Colombia, Argentina, Juan, Héctor, María.<br>
    Ejemplos: Saturno, Navidad, Nintendo, McDonald's, Pedro, Uruguay.
  </div>

  <h3>Sustantivos comunes</h3>
  <div class="example">
    Se refieren de manera genérica a personas, lugares, cosas o ideas.<br>
    Ejemplos: perro, niña, hombre, felicidad, país, animal, calle, silla, computadora, justicia.
  </div>

  <h3>Sustantivos concretos</h3>
  <div class="example">
    Se pueden percibir por los sentidos.<br>
    Ejemplos: gato, plátano, camisa, agua, televisión, avión, mesero, mesa, cama.
  </div>

  <h3>Sustantivos abstractos</h3>
  <div class="example">
    Ideas y emociones que no existen físicamente.<br>
    Ejemplos: libertad, cristianismo, amor, odio, coraje, juicio, inteligencia, budismo.
  </div>

  <h3>Sustantivos contables</h3>
  <div class="example">
    Cosas que se pueden contar.<br>
    Ejemplos: tres ranas, un tenedor, un niño, cinco mujeres, un sombrero, diez monos.
  </div>

  <h3>Sustantivos incontables</h3>
  <div class="example">
    Cosas que no se pueden contar.<br>
    Ejemplos: leche, tristeza, aire, jugo de manzana, paciencia, dignidad.
  </div>

  <h3>Sustantivos compuestos</h3>
  <div class="example">
    Formados por la unión de dos o más palabras.<br>
    Ejemplos: telaraña, rompecabezas, bocacalle, cumpleaños, rascacielos, astronauta.
  </div>

  <h3>Sustantivos colectivos</h3>
  <div class="example">
    Se refieren a un conjunto o grupo como unidad.<br>
    Ejemplos: familia, flota, orquesta, equipo, rebaño, jauría, flora.
  </div>

  <h2>Género y número</h2>
  <div class="example">
    Masculino termina en -o, -ón, -r: libro, cuaderno, teatro, avión.<br>
    Femenino termina en -a, -ción, -sión, -dad, -tad: planta, casa, mesa, canción, verdad.<br>
    Género intercambiable: niño/niña, abuelo/abuela, profesor/profesora.
  </div>

  <div class="example">
    Plural de sustantivos:<br>
    1. Termina en vocal: chico → chicos, niña → niñas.<br>
    2. Termina en consonante: profesor → profesores, conductor → conductores.<br>
    3. Termina en z: pez → peces.
  </div>

  <h2>Funciones de los sustantivos en la oración</h2>

  <h3>Realizan acciones</h3>
  <div class="example">
    Carlos corrió en el parque. (Carlos = sustantivo, corrió = verbo)<br>
    La mujer horneó un pastel. (mujer = sustantivo, horneó = verbo)<br>
    Argentina ganó el torneo de fútbol. (Argentina = sustantivo, ganó = verbo)
  </div>

  <h3>Reciben acciones</h3>
  <div class="example">
    Mi amigo juega videojuegos. (videojuegos = sustantivo, juega = verbo)<br>
    Elena compró un vestido. (vestido = sustantivo, compró = verbo)<br>
    El maestro califica los exámenes. (exámenes = sustantivo, califica = verbo)
  </div>

  <h3>Redefinen otros sustantivos</h3>
  <div class="example">
    María es periodista. (periodista define a María)<br>
    El Sr. Ramos es mi maestro de ciencias. (maestro define al Sr. Ramos)<br>
    El perro se llama Pecas. (Pecas define al perro)
  </div>

  <h2>100 ejemplos de sustantivos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Ejemplos</th>
        <th>Ejemplos</th>
        <th>Ejemplos</th>
      </tr>
      <tr><td>gato</td><td>perros</td><td>oso</td></tr>
      <tr><td>Chile</td><td>Inglaterra</td><td>camisa</td></tr>
      <tr><td>canción</td><td>río</td><td>bosque</td></tr>
      <tr><td>abuelo</td><td>cuentos</td><td>orgullo</td></tr>
      <tr><td>inteligencia</td><td>conejos</td><td>elefante</td></tr>
      <tr><td>Buenos Aires</td><td>periódico</td><td>mesa</td></tr>
      <tr><td>familia</td><td>curiosidad</td><td>niño</td></tr>
      <tr><td>niñas</td><td>telaraña</td><td>astronauta</td></tr>
      <tr><td>leche</td><td>paciencia</td><td>dignidad</td></tr>
      <tr><td>mujere</td><td>sombrero</td><td>plátano</td></tr>
      <tr><td>agua</td><td>Jose</td><td>Navidad</td></tr>
      <tr><td>país</td><td>hombre</td><td>animal</td></tr>
      <tr><td>calle</td><td>Colombia</td><td>televisión</td></tr>
      <tr><td>avión</td><td>mesero</td><td>odio</td></tr>
      <tr><td>amor</td><td>cristianismo</td><td>leche</td></tr>
      <tr><td>cumpleaños</td><td>bocacalle</td><td>rascacielos</td></tr>
      <tr><td>flota</td><td>orquestra</td><td>equipo</td></tr>
      <tr><td>rebaño</td><td>jauría</td><td>flora</td></tr>
      <tr><td>juguetes</td><td>Teresa</td><td>Pablo</td></tr>
      <tr><td>pez</td><td>lapices</td><td>planta</td></tr>
      <tr><td>México</td><td>Nueva York</td><td>búho</td></tr>
      <tr><td>lagartos</td><td>montaña</td><td>España</td></tr>
      <tr><td>chocolate</td><td>uvas</td><td>zanahorias</td></tr>
      <tr><td>trenes</td><td>silla</td><td>bigote</td></tr>
      <tr><td>brazo</td><td>pierna</td><td>ojos</td></tr>
      <tr><td>tigre</td><td>Ramón</td><td>fiesta</td></tr>
      <tr><td>cantante</td><td>actriz</td><td>frijoles</td></tr>
      <tr><td>delfín</td><td>piso</td><td>cinturón</td></tr>
      <tr><td>libros</td><td>cama</td><td>Madrid</td></tr>
      <tr><td>maestra</td><td>autor</td><td>escritora</td></tr>
      <tr><td>lentes</td><td>pantalones</td><td>Honduras</td></tr>
      <tr><td>Costa Rica</td><td>nieve</td><td>fuego</td></tr>
      <tr><td>mar</td><td>juegos</td><td>estudiantes</td></tr>
      <tr><td>leones</td><td>esposo</td><td>fútbol</td></tr>
    </table>
  </div>

</body>
</html>
    `,
  },
  {
    id: 7,
    code: "infinitive_verbs",
    title: "Verbos en Infinitivo",
    description:
      "Un verbo en infinitivo es una forma del verbo que indica una acción, estado o una condición sin un sujeto. Ejemplo: 'correr' (acción: Juan corre rápido).",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verbos en infinitivo</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    /* ===== Base Layout ===== */
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }

    p { margin-bottom: 1em; font-size: 1rem; }

    /* ===== Example Boxes (Cards) ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    /* ===== Responsive Typography ===== */
    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué son los verbos en infinitivo?</h1>
  <p>Los verbos en infinitivo son la forma no personal de un verbo, es decir, la forma básica sin conjugar en ningún modo, tiempo o persona. Ejemplos: <strong>comer, hablar, perder</strong>.</p>

  <div class="example">
    En español, los verbos en infinitivo terminan en:<br>
    -ar (tocar)<br>
    -er (leer)<br>
    -ir (dormir)
  </div>

  <h2>Uso de los infinitivos en una oración</h2>
  
  <h3>Sujeto de una oración</h3>
  <div class="example">
    Los infinitivos pueden funcionar como sujetos.<br>
    Ejemplos:<br>
    Correr es bueno para la salud.<br>
    Leer es una actividad divertida.<br>
    Cantar es mi pasión.
  </div>

  <h3>Complemento verbal</h3>
  <div class="example">
    Complementan otros verbos.<br>
    Víctor necesita completar las actividades. (Complemento directo)<br>
    Todo lo que esperaba era tener una oportunidad. (Complemento indirecto)
  </div>

  <h3>Objeto verbal</h3>
  <div class="example">
    Funcionan como sustantivos que reciben acción.<br>
    Me encanta comer tacos.<br>
    Quiero hacer la tarea.<br>
    Espero llegar a la fiesta.
  </div>

  <h3>Objeto preposicional</h3>
  <div class="example">
    Usados como objeto de una preposición.<br>
    Marta usa anteojos para leer.<br>
    Recibí un premio por participar.<br>
    Héctor preparó la cena después de ver la película.
  </div>

  <h3>Comandos e instrucciones</h3>
  <div class="example">
    Se usan como instrucciones.<br>
    Abrir con cuidado.<br>
    No entrar.<br>
    Hornear durante treinta minutos.
  </div>

  <h3>Formando el tiempo futuro</h3>
  <div class="example">
    El infinitivo se usa en el futuro simple.<br>
    Juan estará cantando en la fiesta.<br>
    Teresa trabajará mañana.<br>
    También con “ir a + infinitivo”: Voy a estudiar más tarde.<br>
    Carlos va a visitar a su abuela.
  </div>

  <h2>Infinitivos simples y compuestos</h2>
  <div class="example">
    <strong>Simple:</strong> se usan solos, sin auxiliar.<br>
    Mi papá quiere comprar una camisa nueva.<br>
    <strong>Compuesto:</strong> usan el auxiliar “haber” + participio.<br>
    Mi hermana debería haber estudiado para el examen.
  </div>

  <h2>Ejemplos de verbos en infinitivo</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>terminando en -ar</th>
        <th>terminando en -er</th>
        <th>terminando en -ir</th>
      </tr>
      <tr><td>estar</td><td>comer</td><td>vivir</td></tr>
      <tr><td>dar</td><td>aprender</td><td>escribir</td></tr>
      <tr><td>llegar</td><td>beber</td><td>recibir</td></tr>
      <tr><td>pasar</td><td>vender</td><td>descubrir</td></tr>
      <tr><td>quedar</td><td>temer</td><td>existir</td></tr>
      <tr><td>hablar</td><td>ser</td><td>describir</td></tr>
      <tr><td>llevar</td><td>tener</td><td>abrir</td></tr>
      <tr><td>dejar</td><td>haber</td><td>admitir</td></tr>
      <tr><td>encontrar</td><td>hacer</td><td>unir</td></tr>
      <tr><td>llamar</td><td>conocer</td><td>subir</td></tr>
      <tr><td>pensar</td><td>entender</td><td>permitir</td></tr>
      <tr><td>tomar</td><td>leer</td><td></td></tr>
      <tr><td>dibujar</td><td>querer</td><td>compartir</td></tr>
      <tr><td>mirar</td><td>poner</td><td>cubrir</td></tr>
      <tr><td>contratar</td><td>volver</td><td>confundir</td></tr>
      <tr><td>empezar</td><td>traer</td><td>inferir</td></tr>
      <tr><td>esperar</td><td>saber</td><td>pedir</td></tr>
      <tr><td>buscar</td><td>ver</td><td>reír</td></tr>
      <tr><td>entrar</td><td>leer</td><td>interrumpir</td></tr>
      <tr><td>trabajar</td><td>caer</td><td>venir</td></tr>
      <tr><td>grabar</td><td>proteger</td><td>sentir</td></tr>
      <tr><td>terminar</td><td>caber</td><td>dormir</td></tr>
      <tr><td>comenzar</td><td>nacer</td><td>mentir</td></tr>
      <tr><td>sacar</td><td>correr</td><td>repetir</td></tr>
      <tr><td>necesitar</td><td>poder</td><td>construir</td></tr>
      <tr><td>resultar</td><td>oler</td><td>invertir</td></tr>
      <tr><td>cambiar</td><td>pretender</td><td>medir</td></tr>
      <tr><td>presentar</td><td>valer</td><td>seguir</td></tr>
      <tr><td>crear</td><td>entender</td><td>servir</td></tr>
      <tr><td>considerar</td><td>aparecer</td><td>sentir</td></tr>
    </table>
  </div>

  <h2>20 oraciones con verbos en infinitivo</h2>
  <div class="example">
    A Juan le gusta jugar con sus juguetes.<br>
    ¿Qué te gustaría pedir?<br>
    Necesito auriculares para escuchar música.<br>
    Maribel tiene que limpiar su dormitorio.<br>
    El Sr. González va a llegar más tarde hoy.<br>
    Mi padre usa lentes para leer.<br>
    Mi hermana quiere un crayón para colorear.<br>
    Fernando quiere comprar un suéter nuevo.<br>
    Ana espera tener todo listo para mañana.<br>
    Este fin de semana, Miguel va a plantar flores.<br>
    ¿Necesitas estudiar para el examen?<br>
    Miranda va a ver una película.<br>
    Miguel espera hacer nuevos amigos en el campamento de verano.<br>
    Julieta habla en voz alta para enfatizar su argumento.<br>
    Tomás va a invitar a sus amigos a la fiesta.<br>
    La Sra. López necesita huevos para hornear un pastel.<br>
    Luisa quiere tocar el piano.<br>
    A Paco le gusta hacer bromas.<br>
    Voy a completar mi tarea más tarde.<br>
    Este verano, Antonio va a viajar a España.
  </div>

</body>
</html>
    `,
  },
  {
    id: 8,
    code: "antonyms",
    title: "Antónimos",
    description:
      "Un antónimo es una palabra que tiene el significado contrario a otra. Por ejemplo: 'feliz' y 'triste' son antónimos.",
    htmlContent: `
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Antónimos</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }

    p { margin-bottom: 1em; font-size: 1rem; }

    /* ===== Example Cards ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 600px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un antónimo?</h1>
  <p>Los antónimos son palabras que tienen significados opuestos a otras palabras. Por ejemplo: <strong>grande / pequeño, feliz / triste, sano / enfermo</strong>.</p>

  <div class="example">
    Comprender los antónimos permite expresar ideas contrarias sin perder coherencia, enriqueciendo la comunicación entre emisor y receptor.
  </div>

  <h2>Importancia de los antónimos</h2>
  <div class="example">
    Usar antónimos ayuda a diversificar nuestro vocabulario y aporta estilo a la expresión de ideas. Al combinar términos opuestos correctamente, se mantiene la claridad y fuerza del mensaje.<br><br>
    Ejemplo:<br>
    Mario camina rápido a la escuela.<br>
    Mario camina lentamente a la escuela.
  </div>

  <h2>Tipos de antónimos</h2>
  <p>Los antónimos se clasifican según cómo se oponen los significados de las palabras:</p>

  <h3>Clasificación léxica</h3>
  <p>Se forma con palabras completamente diferentes.</p>

  <h4>Antonimia gradual (relativa)</h4>
  <div class="example">
    Palabras que no se contraponen de forma absoluta, aceptan grados intermedios.<br>
    Ejemplos:<br>
    joven / viejo (intermedios: infantil, anciano)<br>
    gordo / flaco (intermedios: grueso, magro)
  </div>

  <h4>Antonimia complementaria</h4>
  <div class="example">
    Dos palabras que se excluyen mutuamente, sin posibilidad de intermedio.<br>
    Ejemplos:<br>
    mortal / inmortal<br>
    salida / entrada
  </div>

  <h4>Antonimia recíproca</h4>
  <div class="example">
    Una palabra depende de la otra para tener sentido, formando pares complementarios.<br>
    Ejemplos:<br>
    esposo / esposa<br>
    padre / hijo<br>
    depredador / presa
  </div>

  <h3>Clasificación morfológica</h3>
  <div class="example">
    Se forman agregando prefijos o sufijos que indican lo opuesto.<br>
    Ejemplos:<br>
    justo / injusto<br>
    real / irreal<br>
    prudente / imprudente
  </div>

  <h2>Sinónimos y antónimos</h2>
  <div class="example">
    Los sinónimos son palabras con el mismo significado, mientras que los antónimos tienen significados opuestos. Ambos enriquecen la comunicación y evitan repeticiones innecesarias.<br>
    Ejemplos de sinónimos:<br>
    bailar / danzar<br>
    enorme / gigante<br>
    veloz / rápido
  </div>

  <h2>Ejemplos de antónimos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Antónimo 1</th>
        <th>Antónimo 2</th>
        <th>Antónimo 3</th>
      </tr>
      <tr><td>oscuro</td><td>claro</td><td>aceptar / rechazar</td></tr>
      <tr><td>invitado</td><td>anfitrión</td><td>legal / ilegal</td></tr>
      <tr><td>helado</td><td>caliente</td><td>apagado / encendido</td></tr>
      <tr><td>recibir</td><td>dar</td><td>moral / amoral</td></tr>
      <tr><td>flaco</td><td>gordo</td><td>salud / enfermedad</td></tr>
      <tr><td>subordinado</td><td>jefe</td><td>interés / desinterés</td></tr>
      <tr><td>poco</td><td>mucho</td><td>presente / ausente</td></tr>
      <tr><td>dormir</td><td>despertar</td><td>corto / largo</td></tr>
      <tr><td>vencido</td><td>vencedor</td><td>permeable / impermeable</td></tr>
      <tr><td>linda</td><td>fea</td><td>natural / artificial</td></tr>
      <tr><td>dueño</td><td>arrendador</td><td>hacer / deshacer</td></tr>
      <tr><td>amar</td><td>odiar</td><td>abierto / cerrado</td></tr>
      <tr><td>madre</td><td>hijo</td><td>simpático / antipático</td></tr>
      <tr><td>pequeño</td><td>grande</td><td>verdadero / falso</td></tr>
      <tr><td>cobrar</td><td>pagar</td><td>fallar / acertar</td></tr>
      <tr><td>entregar</td><td>tomar</td><td>conocido / desconocido</td></tr>
      <tr><td>luz</td><td>oscuridad</td><td>casado / soltero</td></tr>
    </table>
  </div>

  <h2>Oraciones con antónimos</h2>
  <div class="example">
    Camila prefiere los días cálidos a los fríos.<br>
    La función de teatro fue breve, mientras que la de danza fue mucho más extensa.<br>
    La biblioteca abre a las ocho de la mañana y cierra a las ocho de la noche.<br>
    En la fiesta había un buffet dulce y otro salado.<br>
    Para adquirir un coche nuevo, necesitamos vender algunas cosas.<br>
    La camisa azul me parece hermosa; la morada es fea.<br>
    Aníbal perdió su libro, pero su amigo Raúl lo encontró.<br>
    Ayer colgué un cuadro y descolgué algunas fotos.<br>
    El chocolate oscuro sabe más que el blanco.<br>
    Si estudian, aprobarán; si no, reprobán.<br>
    Mis padres permanecieron juntos en la salud y en la enfermedad.<br>
    Mantener mente y cuerpo activos evita el deterioro por inactividad.
  </div>

</body>
</html>
    `,
  },
  {
    id: 9,
    code: "concrete_nouns",
    title: "Sustantivos Concretos",
    description:
      "Los sustantivos concretos son palabras que nombran a una persona, animal, cosa o lugar de manera concreta. Ejemplo: 'perro' (animal concreto).",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sustantivos Concretos</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    body {
      font-family: "Segoe UI", Arial, sans-serif;
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }

    p { margin-bottom: 1em; font-size: 1rem; }

    /* ===== Example Cards ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 500px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un sustantivo concreto?</h1>
  <p>Los sustantivos concretos son palabras que nombran objetos, personas, animales o lugares que podemos percibir con los sentidos. Son los sustantivos más visibles y frecuentes en la comunicación diaria.</p>

  <div class="example">
    Se pueden <strong>ver, tocar, oír, oler o saborear</strong>. Además, al igual que otros sustantivos, pueden ser masculinos o femeninos, singulares o plurales.<br>
    Ejemplos: la mesa, los perros, el piano, las montañas, el árbol, la manzana.
  </div>

  <h2>Tipos de sustantivos concretos</h2>

  <h3>Sustantivos comunes</h3>
  <div class="example">
    Nombran personas, lugares u objetos de manera general.<br>
    Ejemplos: niño, maestra, ciudad, teatro
  </div>

  <h3>Sustantivos propios</h3>
  <div class="example">
    Denotan personas, lugares o cosas específicas y siempre se escriben con mayúscula.<br>
    Ejemplos: Marcos, Perú, Torre Eiffel, Buenos Aires
  </div>

  <h3>Sustantivos contables</h3>
  <div class="example">
    Nombran objetos o seres que se pueden contar, en singular o plural.<br>
    Ejemplos: libro, manzanas, escritorio, niñas
  </div>

  <h3>Sustantivos incontables</h3>
  <div class="example">
    Nombran objetos físicos que no se pueden contar, siempre en singular. Para medirlos se usan unidades como litros o kilos.<br>
    Ejemplos: aceite, agua, fuego, aire
  </div>

  <h3>Sustantivos colectivos</h3>
  <div class="example">
    Nombran un conjunto de personas, animales o cosas, y pueden ser singulares o plurales.<br>
    Ejemplos: manada, rebaño, equipo, familias
  </div>

  <h2>Sustantivos concretos vs abstractos</h2>
  <div class="example">
    Los sustantivos concretos se perciben con los sentidos, mientras que los abstractos nombran ideas, sentimientos o conceptos.<br>
    Ejemplos de abstractos: alegría, tristeza, libertad, belleza
  </div>

  <h2>Ejemplos de sustantivos concretos</h2>
  <div class="table-container">
    <table>
      <tr>
        <th>Sustantivo 1</th>
        <th>Sustantivo 2</th>
        <th>Sustantivo 3</th>
      </tr>
      <tr><td>casa</td><td>México</td><td>cielo</td></tr>
      <tr><td>gato</td><td>agua</td><td>playa</td></tr>
      <tr><td>maíz</td><td>perro</td><td>bosque</td></tr>
      <tr><td>montaña</td><td>escuela</td><td>tren</td></tr>
      <tr><td>césped</td><td>escritorio</td><td>pescado</td></tr>
      <tr><td>Canadá</td><td>leche</td><td>cebra</td></tr>
      <tr><td>jardín</td><td>taza</td><td>cama</td></tr>
      <tr><td>sol</td><td>flor</td><td>estrella</td></tr>
    </table>
  </div>

  <h2>Oraciones con sustantivos concretos</h2>
  <div class="example">
    La jauría estaba formada por quince perros.<br>
    Las familias se reunieron para celebrar.<br>
    El televisor no funciona.<br>
    ¿Quieres comer pescado?<br>
    No comas chocolates en exceso.<br>
    Voy a comprar verduras, frutas y un kilo de arroz.<br>
    El león fue expulsado de la manada.<br>
    ¡Las rosas están preciosas!<br>
    Había alrededor de quinientas personas en el concierto.<br>
    El equipo de fútbol consistía en cinco niñas y cuatro niños.
  </div>

</body>
</html>

    `,
  },
  {
    id: 10,
    code: "adverbs",
    title: "Adverbios",
    description:
      "Un adverbio es una palabra que describe o califica a un verbo, adjetivo o otro adverbio. Ejemplo: 'rápido' (adverbio: Juan corre rápido).",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adverbios</title>
  <style>
    /* ===== Base Light Theme ===== */
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }

    /* ===== Dark Mode Theme ===== */
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }

    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
      color: var(--heading-color);
      line-height: 1.3;
    }

    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }

    p { margin-bottom: 1em; font-size: 1rem; }

    /* ===== Example Cards ===== */
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* ===== Table Styles ===== */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      transition: background-color 0.3s;
      min-width: 500px;
    }

    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }

    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué es un adverbio?</h1>
  <p>Un adverbio es una palabra que describe o modifica un verbo, un adjetivo o incluso otro adverbio. Responden preguntas como cuándo, dónde, cómo o en qué medida se realiza la acción. Son palabras que dan más detalle a lo que se dice.</p>

  <div class="example">
    Ejemplos: rápido, tristemente, bueno, dulcemente, muy, a veces.
  </div>

  <h2>Características de los adverbios</h2>
  <div class="example">
    Los adverbios no cambian según el género ni el número. Se pueden colocar después de un verbo, antes de un adjetivo o adverbio, o al inicio de la oración.<br>
    Ejemplos:<br>
    - El perro ladra fuerte.<br>
    - Eres un chico muy inteligente.<br>
    - Héctor corre mucho más rápido que Carlos.<br>
    - A veces cenamos pizza.
  </div>

  <h2>Tipos de adverbios</h2>

  <h3>Adverbios de lugar</h3>
  <div class="example">
    Indican dónde ocurre la acción.<br>
    Ejemplos: aquí, encima, afuera, debajo, cerca.
  </div>

  <h3>Adverbios de tiempo</h3>
  <div class="example">
    Indican cuándo ocurre la acción.<br>
    Ejemplos: mañana, antes, siempre, mientras, anoche.
  </div>

  <h3>Adverbios de modo</h3>
  <div class="example">
    Señalan cómo se realiza la acción.<br>
    Ejemplos: rápidamente, bien, fácilmente, suavemente.
  </div>

  <h3>Adverbios de cantidad</h3>
  <div class="example">
    Expresan cuánto o en qué medida.<br>
    Ejemplos: mucho, poco, demasiado, tan, bastante.
  </div>

  <h3>Adverbios de afirmación</h3>
  <div class="example">
    Confirman que la acción se cumple.<br>
    Ejemplos: sí, claro, de hecho, por supuesto.
  </div>

  <h3>Adverbios de negación</h3>
  <div class="example">
    Niegan la acción.<br>
    Ejemplos: no, nunca, nada, ninguno.
  </div>

  <h3>Adverbios de duda</h3>
  <div class="example">
    Expresan incertidumbre sobre la acción.<br>
    Ejemplos: quizá, probablemente, a lo mejor, seguramente.
  </div>

  <h3>Adverbios interrogativos y exclamativos</h3>
  <div class="example">
    Se usan al inicio de preguntas o exclamaciones.<br>
    Ejemplos: ¿dónde?, ¿cuándo?, ¡qué!, ¿cuántos?
  </div>

  <h3>Locuciones adverbiales</h3>
  <div class="example">
    Expresiones de dos o más palabras que funcionan como un adverbio.<br>
    Ejemplos: de veras, por suerte, a diario, de pronto, por todas partes.
  </div>

  <h2>Grados del adverbio</h2>
  <div class="example">
    <strong>Grado absoluto:</strong> la forma básica.<br>
    Ejemplo: María corre rápido.<br>
    <strong>Grado comparativo:</strong> indica comparación entre dos cosas.<br>
    Ejemplos:<br>
    - María corre tan rápido como Juan.<br>
    - María corre más rápido que Juan.<br>
    - María corre menos rápido que Juan.<br>
    <strong>Grado superlativo absoluto:</strong> enfatiza sin comparar.<br>
    Ejemplo: María corre rapidísimo.
  </div>

  <h2>Ejemplos de adverbios</h2>
  <div class="table-container">
    <table>
      <tr><th>Adverbio 1</th><th>Adverbio 2</th><th>Adverbio 3</th></tr>
      <tr><td>rápido</td><td>tristemente</td><td>bueno</td></tr>
      <tr><td>dulcemente</td><td>muy</td><td>a veces</td></tr>
      <tr><td>aquí</td><td>encima</td><td>afuera</td></tr>
      <tr><td>debajo</td><td>ahí</td><td>cerca</td></tr>
      <tr><td>delante</td><td>dentro</td><td>entre</td></tr>
      <tr><td>enfrente</td><td>dónde</td><td>arriba</td></tr>
      <tr><td>mañana</td><td>antes</td><td>siempre</td></tr>
      <tr><td>mientras</td><td>anoche</td><td>ahora</td></tr>
      <tr><td>jamás</td><td>ayer</td><td>frecuentemente</td></tr>
      <tr><td>hoy</td><td>pronto</td><td>claro</td></tr>
      <tr><td>lento</td><td>mal</td><td>mejor</td></tr>
      <tr><td>igualmente</td><td>así</td><td>amable</td></tr>
      <tr><td>fácilmente</td><td>bien</td><td>suavemente</td></tr>
      <tr><td>bajo</td><td>actualmente</td><td>salvajemente</td></tr>
      <tr><td>nada</td><td>demasiada</td><td>mucho</td></tr>
      <tr><td>solo</td><td>poco</td><td>ojalá</td></tr>
      <tr><td>tan</td><td>bastante</td><td>casi</td></tr>
      <tr><td>todo</td><td>tanto</td><td>aproximadamente</td></tr>
      <tr><td>justo</td><td>algo</td><td>más</td></tr>
      <tr><td>menos</td><td>claro que</td><td>probablemente</td></tr>
      <tr><td>sí</td><td>de hecho</td><td>también</td></tr>
      <tr><td>por supuesto</td><td>obviamente</td><td>verdaderamente</td></tr>
      <tr><td>sin dudas</td><td>no</td><td>nunca</td></tr>
      <tr><td>nada</td><td>ninguno</td><td>jamás</td></tr>
      <tr><td>para nada</td><td>tampoco</td><td>ni</td></tr>
      <tr><td>quizás</td><td>a lo mejor</td><td>seguramente</td></tr>
      <tr><td>posiblemente</td><td>tal vez</td><td>acaso</td></tr>
      <tr><td>definitivamente</td><td>eventualmente</td><td>por ahí</td></tr>
      <tr><td>dónde</td><td>cuándo</td><td>qué</td></tr>
      <tr><td>cuántos</td><td>cuál</td><td>cómo</td></tr>
      <tr><td>quiénes</td><td>acá</td><td>peor</td></tr>
      <tr><td>ciertamente</td><td>indudablemente</td><td>regular</td></tr>
      <tr><td>últimamente</td><td>brillantemente</td><td>nuevamente</td></tr>
      <tr><td>formalmente</td><td>ligero</td><td>rápidamente</td></tr>
    </table>
  </div>

</body>
</html>
    `,
  },
  {
    id: 11,
    code: "homophones_words",
    title: "Palabras Homófonas",
    description:
      "Las palabras homófonas son palabras que se pronuncian igual pero tienen significados diferentes. Por ejemplo: 'mano' y 'mánana' son homófonas.",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Palabras Homófonas</title>
  <style>
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }
    h1, h2, h3 { color: var(--heading-color); line-height: 1.3; }
    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }
    p { margin-bottom: 1em; font-size: 1rem; }
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      min-width: 500px;
    }
    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }
    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }
    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué son las palabras homófonas?</h1>
  <p>Las palabras homófonas son aquellas que se pronuncian igual, pero tienen significados distintos. Su uso correcto depende del contexto de la oración.</p>

  <div class="example">
    Ejemplos:<br>
    - Se / sé<br>
    - Hecho / echo<br>
    - Vaso / baso / bazo
  </div>

  <h2>Homófonas y homógrafas</h2>
  <div class="example">
    Algunas homófonas se escriben diferente, otras tienen la misma escritura y se llaman homógrafas.<br>
    Ejemplo:<br>
    - Él fue amable. (verbo “estar”)<br>
    - Él fue a la tienda. (verbo “ir”)
  </div>

  <h2>Importancia de aprender palabras homófonas</h2>
  <div class="example">
    Aprender homófonas ayuda a:<br>
    - Ampliar el vocabulario.<br>
    - Mejorar la ortografía.<br>
    - Comprender el significado de palabras similares según el contexto.
  </div>

  <h2>Actividades para aprender palabras homófonas</h2>
  <div class="example">
    Ideas divertidas para practicar:<br>
    - Escribir oraciones graciosas usando pares de homófonas.<br>
      Ejemplo: "Cuando voy a la playa, digo 'hola' a las olas."<br>
    - Juego de memoria con tarjetas de palabras homófonas.<br>
    - Escondite homófono: busca palabras homófonas escondidas por la sala.
  </div>

  <h2>Ejemplos de palabras homófonas</h2>
  <div class="table-container">
    <table>
      <tr><th>Palabra 1</th><th>Palabra 2</th><th>Significados</th></tr>
      <tr><td>a</td><td>ha</td><td>preposición / forma de “haber”</td></tr>
      <tr><td>arrollo</td><td>arroyo</td><td>verbo / cuerpo de agua</td></tr>
      <tr><td>asar</td><td>azar</td><td>cocinar / casualidad</td></tr>
      <tr><td>abría</td><td>habría</td><td>verbo abrir / verbo haber</td></tr>
      <tr><td>Asia</td><td>hacia</td><td>continente / dirección</td></tr>
      <tr><td>asta</td><td>hasta</td><td>mástil / límite de acción</td></tr>
      <tr><td>barón</td><td>varón</td><td>nobleza / hombre</td></tr>
      <tr><td>basta</td><td>vasta</td><td>interjección / muy extenso</td></tr>
      <tr><td>bienes</td><td>vienes</td><td>propiedad / forma de venir</td></tr>
      <tr><td>calló</td><td>cayó</td><td>forma de callar / forma de caer</td></tr>
      <tr><td>callo</td><td>cayo</td><td>dureza piel / islote</td></tr>
      <tr><td>cerrar</td><td>serrar</td><td>no abrir / cortar madera</td></tr>
      <tr><td>cien</td><td>sien</td><td>número / parte de la cabeza</td></tr>
      <tr><td>ciento</td><td>siento</td><td>número / forma de sentir</td></tr>
      <tr><td>cocer</td><td>coser</td><td>cocinar / suturar</td></tr>
      <tr><td>el</td><td>él</td><td>artículo / pronombre</td></tr>
      <tr><td>esta</td><td>está</td><td>demostrativo / verbo estar</td></tr>
      <tr><td>halla</td><td>haya</td><td>verbo hallar / verbo haber</td></tr>
      <tr><td>hierba / yerba</td><td>hierva</td><td>planta / verbo hervir</td></tr>
      <tr><td>hierro</td><td>yerro</td><td>metal / error</td></tr>
      <tr><td>hola</td><td>ola</td><td>saludo / onda de agua</td></tr>
      <tr><td>mas</td><td>más</td><td>conjunción / cantidad extra</td></tr>
      <tr><td>rallar</td><td>rayar</td><td>desmenuzar / trazar rayas</td></tr>
      <tr><td>si</td><td>sí</td><td>conjunción / respuesta positiva</td></tr>
      <tr><td>se</td><td>sé</td><td>pronombre / saber</td></tr>
      <tr><td>sumo</td><td>zumo</td><td>grado más alto / líquido de frutas</td></tr>
      <tr><td>tasa</td><td>taza</td><td>precio / recipiente para beber</td></tr>
      <tr><td>tu</td><td>tú</td><td>posesivo / pronombre</td></tr>
      <tr><td>tubo</td><td>tuvo</td><td>cilíndrico / forma de tener</td></tr>
      <tr><td>uno</td><td>uno</td><td>número / forma de unir</td></tr>
      <tr><td>valla</td><td>vaya</td><td>cerca / verbo ir</td></tr>
    </table>
  </div>

  <h2>Oraciones con palabras homófonas</h2>
  <div class="example">
    Ejemplos de uso:<br>
    - Pablo es plomero y tuvo que comprar un tubo.<br>
    - Mi tía quiere que hierva la hierba medicinal para un jarabe.<br>
    - ¿Quieres que te sirva una taza de té?<br>
    - Yo me uno al grupo número uno.<br>
    - A él le encanta el fútbol.<br>
    - Cristina abría el mapa mientras pensaba cómo habría de llegar.<br>
    - Yo sé que mi tía se irá temprano.<br>
    - Tú estás equivocado, tu casa queda más lejos de la escuela.
  </div>

</body>
</html>
    `,
  },
  {
    id: 12,
    code: "proper_nouns",
    title: "Sustantivos Propios",
    description:
      "Los sustantivos propios son palabras que nombran a una persona, animal, cosa o lugar de manera propia. Ejemplo: 'Juan' (persona propia).",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sustantivos Propios</title>
  <style>
    :root {
      --text-color: #333;
      --heading-color: #1a5276;
      --accent-bg: #e8f4f8;
      --border-color: #ddd;
      --table-header-bg: #1a5276;
      --table-header-text: #fff;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }
    h1, h2, h3 { color: var(--heading-color); line-height: 1.3; }
    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }
    p { margin-bottom: 1em; font-size: 1rem; }
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      min-width: 500px;
    }
    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }
    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }
    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué son los sustantivos propios?</h1>
  <p>Los sustantivos propios se usan para nombrar personas, lugares o cosas específicas. Siempre comienzan con letra mayúscula. Por ejemplo, “México” es un sustantivo propio porque se refiere a un país en particular.</p>

  <div class="example">
    Ejemplos:<br>
    - Mañana se celebrará el Día del Árbol.<br>
    - El año pasado fuimos de vacaciones a Barcelona.<br>
    - Me encantan los libros de Agatha Christie.
  </div>

  <h2>Tipos de sustantivos propios</h2>
  <div class="example">
    Los sustantivos propios se pueden clasificar según lo que nombran:<br>
    <strong>Personas:</strong> Pedro, Eva, Juan, Mickey Mouse, Sherlock Holmes<br>
    <strong>Lugares:</strong> Argentina, Guadalajara, río Amazonas, océano Pacífico<br>
    <strong>Marcas:</strong> Pepsi, Nike, Microsoft, McDonald’s<br>
    <strong>Instituciones:</strong> Real Madrid, Organización de las Naciones Unidas, Universidad Autónoma<br>
    <strong>Eventos y festividades:</strong> Día de la Independencia, Fiesta de San Fermín, Día del Niño<br>
    <strong>Edificios y monumentos:</strong> Torre Eiffel, Estatua de la Libertad, Gran Pirámide de Guiza, Taj Mahal
  </div>

  <h2>Diferencia entre sustantivos propios y comunes</h2>
  <p>Los sustantivos propios nombran algo específico, mientras que los comunes se refieren a algo en general.</p>

  <div class="example">
    Ejemplos:<br>
    - El niño corrió en el parque. (común)<br>
    - Héctor corrió en el parque. (propio)
  </div>

  <h2>Ejemplos de sustantivos propios</h2>
  <div class="table-container">
    <table>
      <tr><th>Sustantivo propio</th><th>Descripción</th></tr>
      <tr><td>Chicago</td><td>ciudad</td></tr>
      <tr><td>Europa</td><td>continente</td></tr>
      <tr><td>Francisco</td><td>nombre de persona</td></tr>
      <tr><td>Mercedes</td><td>nombre de persona</td></tr>
      <tr><td>Perú</td><td>país</td></tr>
      <tr><td>Alemania</td><td>país</td></tr>
      <tr><td>William Shakespeare</td><td>autor</td></tr>
      <tr><td>Miguel</td><td>nombre de persona</td></tr>
      <tr><td>Atlántico</td><td>océano</td></tr>
      <tr><td>El Prado</td><td>museo</td></tr>
      <tr><td>Medellín</td><td>ciudad</td></tr>
      <tr><td>Gaudí</td><td>arquitecto</td></tr>
      <tr><td>Murcia</td><td>región</td></tr>
      <tr><td>San Juan</td><td>ciudad</td></tr>
      <tr><td>Federico</td><td>nombre de persona</td></tr>
      <tr><td>García Lorca</td><td>poeta</td></tr>
      <tr><td>Londres</td><td>ciudad</td></tr>
      <tr><td>Monte Rushmore</td><td>monumento</td></tr>
      <tr><td>Amazonas</td><td>río</td></tr>
      <tr><td>Sudamérica</td><td>continente</td></tr>
      <tr><td>El Greco</td><td>pintor</td></tr>
      <tr><td>Toledo</td><td>ciudad</td></tr>
      <tr><td>Ciudad Juárez</td><td>ciudad</td></tr>
      <tr><td>Mallorca</td><td>isla</td></tr>
      <tr><td>Lope de Vega</td><td>escritor</td></tr>
      <tr><td>Carlos V</td><td>rey</td></tr>
      <tr><td>La Mancha</td><td>región</td></tr>
      <tr><td>Dallas</td><td>ciudad</td></tr>
      <tr><td>Bilbao</td><td>ciudad</td></tr>
      <tr><td>Guggenheim</td><td>museo</td></tr>
      <tr><td>Alfonso</td><td>nombre de persona</td></tr>
      <tr><td>Isabel</td><td>nombre de persona</td></tr>
    </table>
  </div>

  <h2>Oraciones con sustantivos propios</h2>
  <div class="example">
    Ejemplos prácticos:<br>
    - Mi mejor amigo se llama Juan.<br>
    - El año pasado fui a Canadá de vacaciones.<br>
    - Mi cantante favorita es Shakira.<br>
    - La Gran Muralla China puede verse desde el espacio.<br>
    - Nintendo hace los mejores videojuegos.<br>
    - El equipo de fútbol favorito de mi hermano es el Real Madrid.<br>
    - El Océano Pacífico es el océano más grande del mundo.<br>
    - En mi familia, todos somos fanáticos de los Beatles.<br>
    - Me gusta ver dibujos animados con Mickey Mouse.<br>
    - ¿Quién crees que ganará la Copa del Mundo?
  </div>

</body>
</html>
    `,
  },
  {
    id: 13,
    code: "abstract_nouns",
    title: "Sustantivos Abstractos",
    description:
      "Los sustantivos abstractos son palabras que nombran a una idea, concepto, estado o cualidad de manera abstracta. Ejemplo: 'amor' (idea abstracta).",
  
    htmlContent: `
      <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sustantivos Abstractos</title>
  <style>
    :root {
      --text-color: #333;
      --heading-color: #2e4053;
      --accent-bg: #e8f0f2;
      --border-color: #ddd;
      --table-header-bg: #2e4053;
      --table-header-text: #fff;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --text-color: #e0e0e0;
        --heading-color: #5dade2;
        --accent-bg: #1f2a30;
        --border-color: #333;
        --table-header-bg: #5dade2;
        --table-header-text: #000;
      }
    }
    body {
      line-height: 1.7;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }
    h1, h2, h3 { color: var(--heading-color); line-height: 1.3; }
    h1 { font-size: 1.8rem; margin-top: 0.5em; }
    h2 { font-size: 1.4rem; margin-top: 1.5em; }
    h3 { font-size: 1.2rem; margin-top: 1em; }
    p { margin-bottom: 1em; font-size: 1rem; }
    .example {
      background-color: var(--accent-bg);
      padding: 10px 14px;
      border-left: 4px solid var(--heading-color);
      margin-bottom: 1em;
      font-style: italic;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--bg-color);
      min-width: 400px;
    }
    th, td {
      border: 1px solid var(--border-color);
      padding: 10px;
      text-align: center;
      font-size: 0.95rem;
    }
    th {
      background-color: var(--table-header-bg);
      color: var(--table-header-text);
    }
    @media (max-width: 600px) {
      h1 { font-size: 1.5rem; }
      h2 { font-size: 1.25rem; }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.95rem; }
      th, td { font-size: 0.85rem; padding: 8px; }
    }
  </style>
</head>
<body>

  <h1>¿Qué son los sustantivos abstractos?</h1>
  <p>Los sustantivos abstractos son palabras que representan ideas, emociones o conceptos que no podemos percibir con nuestros sentidos. Son fundamentales para expresar pensamientos y sentimientos de forma clara y precisa. Aunque parezcan intangibles, se usan con frecuencia en la comunicación diaria.</p>

  <div class="example">
    Ejemplos:<br>
    - La felicidad es muy importante en la vida.<br>
    - Hubo tristeza al escuchar las malas noticias.<br>
    - La inteligencia es una cualidad que admiro.
  </div>

  <h2>Tipos de sustantivos abstractos</h2>
  <div class="example">
    Los sustantivos abstractos se clasifican según lo que representan:<br>
    <strong>Sentimientos:</strong> emociones o estados de ánimo — amor, alegría, tristeza.<br>
    <strong>Cualidades:</strong> características de personas, animales o cosas — belleza, bondad, inteligencia.<br>
    <strong>Ideas:</strong> conceptos o abstracciones — democracia, libertad, justicia.<br>
    <strong>Procesos:</strong> acciones o cambios — crecimiento, desarrollo, evolución.<br>
    <strong>Estados:</strong> situaciones o condiciones — salud, enfermedad, muerte.<br>
    <strong>Eventos:</strong> sucesos importantes — boda, cumpleaños, graduación.<br>
    <strong>Tiempo:</strong> momentos o períodos — día, noche, mañana.
  </div>

  <h2>Diferencia entre sustantivos concretos y abstractos</h2>
  <p>Los <strong>sustantivos concretos</strong> representan cosas que percibimos con los sentidos: se pueden ver, tocar, oír, oler o saborear. En cambio, los <strong>sustantivos abstractos</strong> representan ideas, emociones o conceptos que no se pueden percibir directamente.</p>

  <div class="example">
    Ejemplos:<br>
    - Concretos: mesa, perro, lluvia.<br>
    - Abstractos: amor, libertad, tristeza
  </div>

  <h2>Ejemplos de sustantivos abstractos</h2>
  <div class="table-container">
    <table>
      <tr><th>Abstracto</th><th>Abstracto</th><th>Abstracto</th></tr>
      <tr><td>amor</td><td>libertad</td><td>alegría</td></tr>
      <tr><td>tristeza</td><td>belleza</td><td>creatividad</td></tr>
      <tr><td>paciencia</td><td>honestidad</td><td>sabiduría</td></tr>
      <tr><td>felicidad</td><td>democracia</td><td>paz</td></tr>
      <tr><td>justicia</td><td>solidaridad</td><td>generosidad</td></tr>
      <tr><td>valentía</td><td>humildad</td><td>integridad</td></tr>
      <tr><td>lealtad</td><td>respeto</td><td>confianza</td></tr>
      <tr><td>empatía</td><td>tolerancia</td><td>esperanza</td></tr>
    </table>
  </div>

  <h2>Oraciones con sustantivos abstractos</h2>
  <div class="example">
    Ejemplos prácticos:<br>
    - El amor es la fuerza más poderosa del universo.<br>
    - La libertad es un derecho fundamental de todos los seres humanos.<br>
    - La alegría se refleja en su rostro cada vez que habla de sus hijos.<br>
    - La tristeza invadió su corazón cuando perdió a su perro.<br>
    - La belleza de la naturaleza es impresionante.<br>
    - La paciencia es una virtud que no todos poseen.<br>
    - La honestidad es una de las cualidades más valoradas en una persona.<br>
    - La creatividad es esencial para resolver problemas.<br>
    - La sabiduría se adquiere con la experiencia y el tiempo.<br>
    - La felicidad es el objetivo de la mayoría de las personas.
  </div>

</body>
</html>
    `,
  },
];
