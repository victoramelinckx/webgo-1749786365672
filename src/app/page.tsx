
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tu Negocio ¡Hoy Mismo!" subheadline="Para dueños de pequeños negocios, facilitamos la transición al comercio digital en menos de 24 horas con nuestro soporte constante." cta1="Comienza Ahora" />
<How step1Title="Describe tus necesidades" step1Desc="Nos cuentas sobre tu negocio y tu visión." step2Title="Desarrollo exprés" step2Desc="Diseñamos tu web de ventas en 24 horas." step3Title="Empieza a vender" step3Desc="Ahora puedes digitalizar tus ventas con facilidad." />
<Aboutus headline="WebGo: Digitalizando Pequeños Negocios Localmente" subheadline="Transformamos tu negocio físico en una maquinaria de ventas online, sin requerir tu tiempo." beneficiotitulo1="Ventas 24/7" beneficio1="Aumenta tus ingresos vendiendo sin horarios." beneficiotitulo2="Sin Esfuerzo Técnico" beneficio2="Nosotros manejamos toda la tecnología." />
<Services heading="Digitaliza Tus Ventas y Multiplica Tus Beneficios" description="Con WebGo, potenciamos tu pequeño negocio entregándote una plataforma de ventas en línea eficaz. Olvídate de la gestión técnica, nosotros nos encargamos." services={[{"name":"Diseño Web Rápido","icon":"clock","description":"Web de ventas lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para mantener tu negocio en línea."},{"name":"Optimización SEO","icon":"search","description":"Mejoramos tu visibilidad en buscadores."},{"name":"Gestión de Redes Sociales","icon":"users","description":"Conectamos tu negocio con tu audiencia."},{"name":"Automatización de Ventas","icon":"robot","description":"Procesos de venta eficientes y automatizados."},{"name":"Reportes de Desempeño","icon":"chart-bar","description":"Mide y mejora tu rendimiento en línea."}]} />
<BeforeAndAfter subheadline="Transformando ideas digitales en triunfos tangibles" />
<Faq faqs={[{"pregunta":"¿Es posible para un pequeño negocio como el mío empezar a vender en línea?","respuesta":"Absolutamente. En WebGo, hemos ayudado a muchos pequeños negocios a dar el salto a las ventas online. Independientemente del tamaño de tu negocio, nuestro servicio adad te permite generar ventas en línea de manera fácil, rápida y a un precio accesible."},{"pregunta":"Estoy muy ocupado gestionando mi negocio, ¿tengo que dedicar mucho tiempo para gestionar mi sitio web?","respuesta":"Entendemos que tu tiempo es muy valioso. Es por eso que nuestro servicio asdas está diseñado para ser de baja gestión. Nos ocupamos de todo el trabajo pesado para que puedas concentrarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"Solo he vendido por recomendación hasta ahora, ¿cómo puedo atraer clientes a mi nuevo sitio web?","respuesta":"Esa es una gran pregunta. Con nuestro servicio adad, implementamos estrategias de SEO para ayudar a mejorar la visibilidad de tu sitio web en los motores de búsqueda. De esta forma, clientes potenciales pueden encontrarte fácilmente cuando busquen los productos o servicios que ofreces."},{"pregunta":"¿Cómo puedo saber si la digitalización de mis ventas será rentable?","respuesta":"Es normal tener dudas al comienzo. Pero te aseguramos que la inversión vale la pena. Con nuestro servicio asdas, puedes rastrear todas las ventas y visitas a tu sitio web. Esto te permitirá ver el retorno de tu inversión en tiempo real."},{"pregunta":"¿Cómo puedo empezar a usar los servicios de WebGo?","respuesta":"Empezar a usar los servicios de WebGo es muy simple. Solo tienes que ponerte en contacto con nosotros, y nuestro equipo de expertos guiará a través del proceso. No necesitas conocimientos previos de tecnología, nosotros nos encargamos de todo."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio y Aumenta Tus Ventas" 
                      description="En WebGo, convertimos tus recomendaciones en ventas online. No te preocupes por el tiempo, nosotros nos encargamos de tu sitio web."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="nW2Uo5xtQygY9x2roYrvmKdao002"
                    />
<Footer />
    </main>
  );
}
