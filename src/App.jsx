import { useState } from 'react'



const platosDestacados = [

  {

    nombre: 'Ceviche',

    imagen: '/platos-destacados/ceviche-fondo.png',

  },

  {

    nombre: 'Leche de tigre',

    imagen: '/platos-destacados/leche-de-tigre.png',

  },

  {

    nombre: 'Causa rellena',

    imagen: '/platos-destacados/causa-rellena.jpg',

  },

  {

    nombre: 'Causa con langostinos',

    imagen: '/platos-destacados/causa-con-langostinos.jpg',

  },

]



// Las fotos de los platos son imágenes ilustrativas; se pueden sustituir por fotos reales del restaurante.

const categoriasCarta = {

  'Platos marinos': [

    {

      id: 'ceviche-pescado', nombre: 'Ceviche de pescado', descripcion: 'Personal acompañado de guarnición.',

      imagen: '/images/platos/ceviche-fondo.png',

      precios: { individual: 'S/ 20', fuentePersonal: 'S/ 30', mediana: 'S/ 40', grande: 'S/ 50' },

    },

    {

      id: 'ceviche-mixto-mixtura', nombre: 'Ceviche mixto: pescado y mixtura', descripcion: 'Pescado y mixtura de mariscos.',

      imagen: '/images/platos/ceviche-mixto-pescado-mixtura.png',

      precios: { individual: 'S/ 20' },

    },

    {

      id: 'ceviche-mixto-pota', nombre: 'Ceviche mixto: pescado y pota', descripcion: 'Combinación de pescado y pota.',

      imagen: '/images/platos/ceviche-mixto-pescado-pota.png',

      precios: { individual: 'S/ 20' },

    },

    {

      id: 'ceviche-pota', nombre: 'Ceviche de pota', descripcion: 'Acompañado con chicharrón de pota.',

      imagen: '/images/platos/ceviche-de-pota.png',

      precios: { individual: 'S/ 18', fuentePersonal: 'S/ 30', mediana: 'S/ 40', grande: 'S/ 50' },

    },

    {

      id: 'jalea-mixta', nombre: 'Jalea mixta', descripcion: 'Jalea mixta personal.',

      imagen: '/images/platos/jalea-mixta.png',

      precios: { individual: 'S/ 25', fuentePersonal: 'S/ 40', mediana: 'S/ 50' },

    },

    {

      id: 'sudado-trambollo', nombre: 'Sudado de trambollo', descripcion: 'Sudado de pescado.',

      imagen: '/images/platos/sudado-de-trambollo.png',

      precios: { individual: 'S/ 20' },

    },

    {

      id: 'sudado-cabrilla', nombre: 'Sudado de cabrilla', descripcion: 'Sudado de pescado.',

      imagen: '/images/platos/sudado-de-cabrilla.png',

      precios: { individual: 'S/ 25' },

    },

    {

      id: 'chaufa-mariscos', nombre: 'Arroz chaufa de mariscos', descripcion: 'Arroz salteado con mariscos.',

      imagen: '/images/platos/arroz-chaufa-de-mariscos.png',

      precios: { individual: 'S/ 20' },

    },

    {

      id: 'arroz-mariscos', nombre: 'Arroz con mariscos', descripcion: 'Preparación marina tradicional.',

      imagen: '/images/platos/arroz-con-mariscos.png',

      precios: { individual: 'S/ 20' },

    },

  ],

  'Sopas marinas': [

    {

      id: 'parihuela-tramboyo', nombre: 'Parihuela de tramboyo', descripcion: 'Sopa marina.',

      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',

      precios: { individual: 'S/ 25' },

    },

    {

      id: 'parihuela-cabrilla', nombre: 'Parihuela de cabrilla', descripcion: 'Sopa marina.',

      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',

      precios: { individual: 'S/ 30' },

    },

  ],

  Causas: [

    {

      id: 'causa-langostinos', nombre: 'Causa de langostinos', descripcion: 'Causa rellena.',

      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',

      precios: { individual: 'S/ 12' },

    },

    {

      id: 'causa-pollo', nombre: 'Causa de pollo', descripcion: 'Causa rellena.',

      imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',

      precios: { individual: 'S/ 8' },

    },

  ],

  Criollos: [],

  Tragos: [],

  Jugos: [],

  Bebidas: [],

}



const categorias = Object.keys(categoriasCarta)



const tamanos = [

  { id: 'individual', etiqueta: 'Individual' },

  { id: 'fuentePersonal', etiqueta: 'Fuente personal' },

  { id: 'mediana', etiqueta: 'Mediana' },

  { id: 'grande', etiqueta: 'Grande' },

]

export default function App() {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const [categoriaActiva, setCategoriaActiva] = useState('Platos marinos')

  const [tamanosSeleccionados, setTamanosSeleccionados] = useState({})



  const cerrarMenu = () => setMenuAbierto(false)



const numeroWhatsApp = '51928779442'

const enlaceWhatsApp = (mensaje = 'Hola, quiero hacer un pedido en El Muy Muy de Julito.') =>
  `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`





  return (

    <main className="min-h-screen overflow-x-hidden bg-[#fffaf0] text-[#102b49]">

      {/* PORTADA */}

      <section

        id="inicio"

        className="relative isolate min-h-[640px] overflow-hidden bg-[#21150d] text-white sm:min-h-[650px] lg:min-h-[670px]"

      >

        <img

          src="/ceviche-fondo1.png"

          alt="Ceviche peruano fresco servido en un plato"

          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] sm:object-center"

        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-black/5 sm:from-black/70 sm:via-black/25 sm:to-transparent" />



        {/* CABECERA Y NAVEGACIÓN */}

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-7 lg:px-10">

          <a href="#inicio" onClick={cerrarMenu} className="shrink-0" aria-label="Ir al inicio">

            <img

              src="/logo-muy-muy.png"

              alt="Logo El Muy Muy de Julito"

              className="h-[76px] w-[76px] object-contain sm:h-[100px] sm:w-[100px]"

            />

          </a>



          <nav className="hidden items-center gap-4 text-sm font-bold lg:flex xl:gap-7">

            <a href="#inicio" className="border-b border-white pb-1 transition hover:text-yellow-300">Inicio</a>

            <a href="#nosotros" className="transition hover:text-yellow-300">Nosotros</a>

            <a href="#carta" className="transition hover:text-yellow-300">Carta</a>

            <a href="#precios" className="transition hover:text-yellow-300">Precios</a>

            <a href="#contacto" className="transition hover:text-yellow-300">Contacto</a>

            <a href={enlaceWhatsApp('Hola, quiero hacer un pedido en El Muy Muy de Julito.')} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full bg-[#ed1728] px-5 py-3 font-extrabold shadow-lg transition hover:-translate-y-0.5 hover:bg-red-600">

              Haz tu pedido <span aria-hidden="true">↗</span>

            </a>

          </nav>



          <a

            href="#precios"

            className="ml-auto hidden whitespace-nowrap rounded-full bg-[#ed1728] px-4 py-3 text-xs font-extrabold shadow-lg transition hover:bg-red-600 sm:inline-flex lg:hidden"

          >

            Ver carta ↓

          </a>



          <button

            type="button"

            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/30 text-2xl text-white lg:hidden"

            onClick={() => setMenuAbierto((abierto) => !abierto)}

            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}

            aria-expanded={menuAbierto}

            aria-controls="menu-movil"

          >

            {menuAbierto ? '×' : '☰'}

          </button>

        </header>



        {menuAbierto && (

          <nav

            id="menu-movil"

            className="absolute left-4 right-4 top-[92px] z-30 flex flex-col gap-1 rounded-2xl border border-white/20 bg-[#17120e]/95 p-3 shadow-2xl backdrop-blur sm:left-auto sm:right-7 sm:w-72 lg:hidden"

          >

            {[

              ['Inicio', '#inicio'],

              ['Nosotros', '#nosotros'],

              ['Nuestros platos', '#carta'],

              ['Carta y precios', '#precios'],

              ['Contacto', '#contacto'],

            ].map(([label, href]) => (

              <a

                key={href}

                href={href}

                onClick={cerrarMenu}

                className="rounded-xl px-4 py-3 font-semibold transition hover:bg-white/10 hover:text-yellow-300"

              >

                {label}

              </a>

            ))}

            <a

              href="#precios"

              onClick={cerrarMenu}

              className="mt-1 rounded-full bg-[#ed1728] px-4 py-3 text-center font-extrabold text-white hover:bg-red-600"

            >

              Ver la carta

            </a>

          </nav>

        )}



        {/* TEXTO PRINCIPAL */}

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-7 px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:grid-cols-2 lg:gap-6 lg:px-10 lg:pb-20 lg:pt-2">

          <div className="max-w-[590px]">

            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-cyan-300 sm:text-sm sm:tracking-[0.38em]">

              C E V I C H E R Í A

            </p>



            <h1 className="font-serif text-[clamp(2.8rem,8vw,5.25rem)] font-black italic leading-[0.98] drop-shadow-lg">

              El Muy Muy

              <span className="mt-2 block text-[#ffd83d]">de Julito</span>

            </h1>



            <div className="mt-4 h-[7px] w-52 -rotate-2 rounded-full bg-[#ed1728] sm:w-80" />



            <h2 className="mt-5 text-lg font-extrabold italic sm:mt-6 sm:text-2xl">

              El sabor del mar, como en casa

            </h2>



            <p className="mt-3 max-w-lg text-sm leading-6 text-white drop-shadow-md sm:mt-4 sm:text-base sm:leading-7">

              Ceviche, leche de tigre, causas, chupe de camarones, arroz con mariscos y más... ¡Todo preparado con ingredientes frescos y el mejor sazón!

            </p>



            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">

              <a

                href={enlaceWhatsApp('Hola, quiero consultar la carta y hacer un pedido en El Muy Muy de Julito.')}

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#ed1728] px-6 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:bg-red-600 sm:px-7 sm:py-4 sm:text-base"

              >

                Ver nuestra carta <span className="text-xl">→</span>

              </a>

            </div>

          </div>



          <div className="hidden items-end justify-end self-end pb-6 lg:flex">

            <p className="max-w-[210px] rotate-3 text-right font-serif text-2xl font-black italic leading-tight text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] xl:text-3xl">

              Ceviche<br />siempre es<br />una buena<br />idea ♡

            </p>

          </div>

        </div>



        <div aria-hidden="true" className="pointer-events-none absolute bottom-3 right-5 hidden text-6xl font-black text-cyan-400 drop-shadow-lg lg:block">

          〰

        </div>

      </section>



      {/* FRANJA DE BENEFICIOS */}

      <section className="border-b border-[#e1d5bd] bg-[#fffaf0]">

        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#d8cdb8] px-5 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">

          <div className="flex items-center justify-center gap-3 py-3 sm:py-4 sm:px-3">

            <span className="text-3xl" aria-hidden="true">🐟</span>

            <span className="text-sm font-bold leading-snug">Ingredientes<br />frescos</span>

          </div>

          <div className="flex items-center justify-center gap-3 py-3 sm:py-4 sm:px-3">

            <span className="text-3xl" aria-hidden="true">👨‍🍳</span>

            <span className="text-sm font-bold leading-snug">Recetas<br />caseras</span>

          </div>

          <div className="flex items-center justify-center gap-3 py-3 sm:py-4 sm:px-3">

            <span className="text-3xl" aria-hidden="true">📍</span>

            <span className="text-sm font-bold leading-snug">Desde Lima<br />para ti</span>

          </div>

        </div>

      </section>



      {/* PLATOS DESTACADOS */}

      <section id="carta" className="scroll-mt-5 bg-[#fffaf0] px-5 py-10 sm:px-8 sm:py-14">

        <div className="mx-auto max-w-7xl">

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-7">

            <h2 className="flex items-center gap-2 font-serif text-3xl font-black italic sm:gap-3 sm:text-4xl">

              <span className="text-[#ed1728]">〰</span> Nuestros platos <span className="text-[#ed1728]">〰</span>

            </h2>

            <a href="#precios" className="text-sm font-extrabold text-[#ed1728] hover:underline">Ver precios ↓</a>

          </div>



          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

            {platosDestacados.map((plato) => (

              <a

                key={plato.nombre}

                href="#precios"

                className="group relative h-40 overflow-hidden rounded-xl bg-[#14202a] shadow-md focus:outline-none focus:ring-4 focus:ring-[#ed1728]/40 sm:h-52 lg:h-60"

              >

                <img

                  src={plato.imagen}

                  alt={plato.nombre}

                  loading="lazy"

                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

                <h3 className="absolute bottom-0 left-0 w-full p-3 text-sm font-extrabold text-white sm:p-4 sm:text-base">

                  {plato.nombre}

                </h3>

              </a>

            ))}

          </div>

        </div>

      </section>



      {/* CARTA Y PRECIOS */}

      <section id="precios" className="scroll-mt-4 bg-[#f6eedf] px-4 py-12 sm:px-8 sm:py-16 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">

            <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#ed1728] sm:text-sm sm:tracking-[0.25em]">

              Elige tu favorito

            </p>

            <h2 className="font-serif text-3xl font-black italic text-[#102b49] sm:text-5xl">

              Nuestra carta

            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base">

              Sabores marinos y opciones para disfrutar. Selecciona una categoría para consultar los platos y sus precios.

            </p>

          </div>



          {/* PESTAÑAS DESLIZABLES EN CELULARES */}

          <div className="mb-7 -mx-1 overflow-x-auto pb-3 sm:mb-9 sm:mx-0" aria-label="Categorías de la carta">

            <div className="flex min-w-max gap-2 px-1 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">

              {categorias.map((categoria) => {

                const activa = categoriaActiva === categoria

                return (

                  <button

                    key={categoria}

                    type="button"

                    onClick={() => setCategoriaActiva(categoria)}

                    aria-pressed={activa}

                    className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-bold transition sm:px-5 ${

                      activa

                        ? 'border-[#ed1728] bg-[#ed1728] text-white shadow-md'

                        : 'border-[#d8cdb8] bg-white text-[#102b49] hover:border-[#ed1728] hover:text-[#ed1728]'

                    }`}

                  >

                    {categoria}

                  </button>

                )

              })}

            </div>

          </div>



          {categoriasCarta[categoriaActiva].length > 0 ? (

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">

              {categoriasCarta[categoriaActiva].map((item) => {

                const tamanoSeleccionado = tamanosSeleccionados[item.id] || 'individual'

                const precioSeleccionado = item.precios[tamanoSeleccionado]

                return (

                  <article

                    key={item.id}

                    className="min-w-0 overflow-hidden rounded-2xl border border-[#e7dcc8] bg-white shadow-sm transition hover:border-[#ed1728]/50 hover:shadow-lg"

                  >

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5dac7]">

                      <img

                        src={item.imagen}

                        alt={item.nombre}

                        loading="lazy"

                        className="absolute inset-0 block h-full w-full max-w-full object-cover object-center transition duration-500 hover:scale-105"

                        onError={(event) => {

                          event.currentTarget.onerror = null

                          event.currentTarget.src = '/ceviche-fondo.png'

                        }}

                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-[#102b49]">

                        {categoriaActiva}

                      </span>

                    </div>



                    <div className="p-4 sm:p-5">

                      <h3 className="text-lg font-extrabold leading-snug text-[#102b49] sm:text-xl">

                        {item.nombre}

                      </h3>

                      <p className="mt-1 min-h-10 text-sm leading-5 text-gray-500">

                        {item.descripcion}

                      </p>



                      <p className="mt-4 text-xs font-black uppercase tracking-wide text-[#6e716f]">

                        Elige el tamaño

                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-2">

                        {tamanos.map((tamano) => {

                          const seleccionado = tamanoSeleccionado === tamano.id

                          const precio = item.precios[tamano.id]

                          return (

                            <button

                              key={tamano.id}

                              type="button"

                              onClick={() => setTamanosSeleccionados((actuales) => ({

                                ...actuales,

                                [item.id]: tamano.id,

                              }))}

                              aria-pressed={seleccionado}

                              className={`flex min-h-[52px] flex-col items-start justify-center rounded-xl border px-3 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-[#ed1728]/40 ${

                                seleccionado

                                  ? 'border-[#ed1728] bg-[#fff0ed] text-[#a91621]'

                                  : 'border-[#e6dfd2] bg-[#fffdf9] text-[#102b49] hover:border-[#ed1728]/70'

                              }`}

                            >

                              <span className="text-xs font-bold sm:text-sm">{tamano.etiqueta}</span>

                              <span className="mt-0.5 text-sm font-black">

                                {precio || 'Consultar precio'}

                              </span>

                            </button>

                          )

                        })}

                      </div>



                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#f0e8db] pt-4">

                        <div>

                          <span className="block text-xs text-gray-500">Precio seleccionado</span>

                          <strong className="text-xl font-black text-[#ed1728]">

                            {precioSeleccionado || 'Consultar'}

                          </strong>

                        </div>

                        <a

                          href={enlaceWhatsApp(`Hola, quiero consultar el precio y disponibilidad de ${item.nombre} en El Muy Muy de Julito.`)}

                          target="_blank"

                          rel="noopener noreferrer"

                          className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#ed1728] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-red-600"

                        >

                          Consultar

                        </a>

                      </div>

                    </div>

                  </article>

                )

              })}

            </div>

          ) : (

            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-[#d8cdb8] bg-white/70 px-5 py-10 text-center sm:px-8">

              <p className="text-3xl" aria-hidden="true">🍽️</p>

              <h3 className="mt-3 text-lg font-extrabold text-[#102b49]">{categoriaActiva}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">

                Estamos preparando esta parte de la carta. Pronto añadiremos los productos, sus fotografías y los precios confirmados.

              </p>

            </div>

          )}

          <p className="mt-6 text-center text-xs leading-5 text-gray-500 sm:mt-8 sm:text-sm">

            Los precios y tamaños se muestran según la lista proporcionada. Consulta la disponibilidad del día.

          </p>

        </div>

      </section>



      {/* NOSOTROS */}

      <section id="nosotros" className="scroll-mt-4 bg-[#102c49] px-6 py-14 text-white sm:py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ffd83d] sm:text-sm">

            Nuestra esencia

          </p>

          <h2 className="font-serif text-3xl font-black italic sm:text-5xl">El sabor que reúne a todos</h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-base">

            En Muy Muy de Julito celebramos los sabores marinos y el gusto por compartir una buena comida. Muy pronto te contaremos más sobre nuestra historia.

          </p>

        </div>

      </section>



      {/* PEDIDOS */}

      <section id="pedidos" className="scroll-mt-4 bg-[#fffaf0] px-5 py-14 text-center sm:px-6 sm:py-20">

        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ed1728] sm:text-sm">

          ¡Se te hizo agua la boca!

        </p>

        <h2 className="font-serif text-3xl font-black italic sm:text-5xl">Pide algo delicioso</h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4e5863] sm:text-base">

          Revisa la carta y consulta la disponibilidad de tus platos favoritos.

        </p>

        <a

          href={enlaceWhatsApp('Hola, quiero consultar la carta y hacer un pedido en El Muy Muy de Julito.')}

          target="_blank"

          rel="noopener noreferrer"

          className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#ed1728] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:bg-red-600 sm:mt-7"

        >

          Consultar la carta <span aria-hidden="true">→</span>

        </a>

      </section>



      {/* PIE DE PÁGINA */}

      <footer id="contacto" className="scroll-mt-4 bg-[#171b20] px-5 py-8 text-center text-sm text-white/70 sm:px-6">

        <p className="font-bold text-white">El Muy Muy de Julito</p>

        <p className="mt-2">Barra cevichera delivery · Lima, Perú</p>

        <a href="#inicio" className="mt-4 inline-block font-bold text-[#ffd83d] hover:underline">Volver arriba ↑</a>

        <p className="mt-4 text-xs">© {new Date().getFullYear()} Desarollado por Loading EOE SAC</p>

      </footer>

      <a
        href={enlaceWhatsApp('Hola, quiero hacer un pedido en El Muy Muy de Julito.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-extrabold text-white shadow-xl transition hover:scale-105"
      >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="h-7 w-7 shrink-0"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M20.52 3.48A11.79 11.79 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.43-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.03-1.37l-.36-.22-3.74.99 1-3.65-.24-.38a9.88 9.88 0 0 1-1.51-5.28c0-5.45 4.44-9.89 9.89-9.89a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
</svg>
        WhatsApp
      </a>

    </main>

  )

}
