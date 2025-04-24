export interface Project {
  id: number
  title: string
  descriptionEs: string
  descriptionEn: string
  images: string[]
  category: ('frontend' | 'backend' | 'uiux')[]
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  codeUrlBackend?: string
  codeUrlFrontend?: string
  figmaUrl?: string
  featuresEs?: string[]
  featuresEn?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ecuador Film Commission',
    descriptionEs:
      'Página web de la Comisión Fílmica de Ecuador, con información sobre locaciones, permisos, contactos para grabar en Ecuador. Además cuenta con un sistema para que que los usuarios puedan registrar locaciones y empresas de filmación a los catálogos que se encuentran en la página. La web en su totalidad cuenta con i18n para que se pueda ver en español y en inglés y el catálogo de locaciones cuenta con geolocalización para que los usuarios puedan ver las locaciones cercanas a su ubicación.',
    descriptionEn:
      'Website of the Ecuador Film Commission, with information about locations, permissions, contacts to film in Ecuador. It also has a system for users to register locations and film production companies to the catalogs that are on the page. The web in its entirety has i18n to be viewed in Spanish and in English and the location catalog has geolocation to allow users to view locations near their location.',
    images: ['/filmcommission-1.png', '/filmcommission-2.png', '/filmcommission-3.png', '/filmcommission-4.png'],
    category: ['frontend', 'backend'],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Express',
      'Redux',
      'Firebase',
      'CssModules',
      'Material-UI',
    ],
    demoUrl: 'https://ecuadorfilmcommission.com/',
    codeUrlBackend: 'https://github.com/attisDev92/API-FilmCommissionEC',
    codeUrlFrontend: 'https://github.com/attisDev92/Film_Commission_EC',
    featuresEs: [
      'Registro de usuarios',
      'Registro de locaciones',
      'Registro de empresas de filmación',
      'Catálogo de locaciones',
      'Catálogo de empresas de filmación',
      'Geolocalización para locaciones',
      'I18n para el contenido de la página',
    ],
    featuresEn: [
      'User registration',
      'Location registration',
      'Film production company registration',
      'Location catalog',
      'Film production company catalog',
      'Geolocation for locations',
      'I18n for page content',
    ],
  },
  {
    id: 2,
    title: 'CinemaEc',
    descriptionEs:
      'Catálogo de obras cinematográficas del Ecuador, con información sobre las películas, directores, actores, géneros, etc. La web cuenta con un sistema para que los usuarios puedan registrar películas y directores a los catálogos que se encuentran en la página. La web cuenta con un repositorio de todas las películas realizadas en Ecuador, además de un sistema de registro de usuarios y de solicitud de prestamo para gestionar la exhibición de las obras en espacios públicos. Además cuenta con un registro de proyectos cinematográficos para su promoción en mercados audiovisuales alreededor del mundo.',
    descriptionEn:
      'Catalog of Ecuadorian cinematographic works, with information about movies, directors, actors, genres, etc. The web has a system for users to register movies and directors to the catalogs that are on the page. The web has a repository of all the movies made in Ecuador, as well as a user registration system and a request system for managing the exhibition of works in public spaces. In addition, it has a register of cinematographic projects for their promotion in audiovisual markets around the world.',
    images: ['/cinemaec-1.png', '/cinemaec-2.png', '/cinemaec-3.png', '/cinemaec-4.png', '/cinemaec-5.png'],
    category: ['frontend', 'backend'],
    technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express', 'Redux', 'Firebase', 'Material-UI'],
    demoUrl: 'https://cinemaec.com/',
    codeUrlBackend: 'https://github.com/attisDev92/API-CinemaEC',
    codeUrlFrontend: 'https://github.com/attisDev92/cinemaec',
    featuresEs: [
      'Registro de usuarios',
      'Registro de películas',
      'Registro de proyectos cinematográficos',
      'Sistema de solicitud de exhibición',
      'Sistema de gestión de exhibiciones',
      'Sistema de retroalimentación de exibiciones',
      'Sistema de reproducción offline (En desarrollo)',
    ],
    featuresEn: [
      'User registration',
      'Movie registration',
      'Cinematographic project registration',
      'Exhibition request system',
      'Exhibition management system',
      'Exhibition feedback system',
      'Offline playback system (In development)',
    ],
  },
  {
    id: 3,
    title: 'Design System Maxinutri Ecuador',
    descriptionEs:
      'Sistema de diseño para la web de Maxinutri Ecuador, con un diseño moderno, responsivo y atractivo para la web de la empresa, pensado en la experiencia de usuario..',
    descriptionEn:
      "Design system for the Maxinutri Ecuador web, with a modern, responsive and attractive design for the company's web page, designed for user experience.",
    images: ['/maxinutri-1.png', '/maxinutri-2.png', '/maxinutri-3.png', '/maxinutri-4.png', '/maxinutri-5.png'],
    category: ['uiux'],
    technologies: ['Figma'],
    figmaUrl: 'https://www.figma.com/design/gyHXHzY49DGqKFhcmJeXyV/Maxinutri?node-id=0-1&p=f',
    featuresEs: ['Diseño moderno y atractivo', 'Responsivo', 'Experiencia de usuario'],
    featuresEn: ['Modern and attractive design', 'Responsive', 'User experience'],
  },
  {
    id: 4,
    title: 'Sam Marketing Landing Page',
    descriptionEs:
      'Landing page para la web de Sam Marketing, profesional de marketing digital, con un diseño moderno, responsivo y atractivo para la web, pensado en la experiencia de usuario y en el posicionamiento SEO.',
    descriptionEn:
      "Landing page for the Sam Marketing web, professional in digital marketing, with a modern, responsive and attractive design for the company's web page, designed for user experience and SEO positioning.",
    images: ['/Sam-mk-1.png', '/Sam-mk-2.png', '/Sam-mk-3.png'],
    category: ['frontend'],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Contentful'],
    demoUrl: 'https://marketingsam.netlify.app/',
    codeUrlFrontend: 'https://github.com/attisDev92/mk_sam',
    featuresEs: [
      'Itegración con Contentful',
      'I18n para el contenido de la página',
      'Diseño moderno y atractivo',
      'Responsivo',
      'Experiencia de usuario',
      'Posicionamiento SEO',
    ],
    featuresEn: [
      'Integration with Contentful',
      'I18n for page content',
      'Modern and attractive design',
      'Responsive',
      'User experience',
      'SEO positioning',
    ],
  },
  {
    id: 5,
    title: 'BlackBox App',
    descriptionEs:
      'Aplicación web y mobile para el intercambio, venta y donación de ropa usada y accesorios. La web cuenta con un sistema de registro de usuarios, un sistema de chat para la comunicación entre usuarios, un sistema de compra y venta de productos, un sistema de donación de productos y un sistema de seguimiento de envíos.',
    descriptionEn:
      'Web and mobile application for the exchange, sale and donation of used clothing and accessories. The web has a user registration system, a chat system for communication between users, a purchase and sale system, a donation system of products and a shipping tracking system.',
    images: [
      '/placeholder.svg?height=600&width=800&text=Components',
      '/placeholder.svg?height=600&width=800&text=Screen+Templates',
      '/placeholder.svg?height=600&width=800&text=Dark+Mode',
      '/placeholder.svg?height=600&width=800&text=Animation+Guide',
    ],
    category: ['backend'],
    technologies: ['Nest.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
    codeUrlBackend: 'https://github.com/attisDev92/BLACKBOX_API',
    featuresEs: [
      'Registro de usuarios',
      'Registro de productos',
      'Chat entre usuarios',
      'Sistema de compra y venta de productos',
      'Sistema de donación de productos',
      'Sistema de seguimiento de envíos',
    ],
    featuresEn: [
      'User registration',
      'Product registration',
      'User chat',
      'Purchase and sale system',
      'Donation system',
      'Shipping tracking system',
    ],
  },
  {
    id: 6,
    title: 'Endurence Run App',
    descriptionEs:
      'App Mobile donde los usuarios pueden ver eventos deportivos de competencia y entretenimeinto para deportes como running, cycling, triatlón, etc. La app cuenta con un sistema de registro de usuarios, un sistema de chat para la comunicación entre usuarios.',
    descriptionEn:
      'Mobile application where users can view sports events and entertainment competitions like running, cycling, triathlon, etc. The app has a user registration system, a chat system for communication between users.',
    images: [
      '/placeholder.svg?height=600&width=800&text=Architecture',
      '/placeholder.svg?height=600&width=800&text=Dashboard',
      '/placeholder.svg?height=600&width=800&text=Monitoring',
      '/placeholder.svg?height=600&width=800&text=Configuration',
    ],
    category: ['backend', 'frontend'],
    technologies: ['Nest.js', 'PostgreSQL', 'React Native', 'Expo', 'Next.js', 'TypeScript', 'Firebase', 'Storybook'],
    codeUrlFrontend: 'https://github.com/attisDev92/run-bike-app-API',
    featuresEs: [
      'Registro de usuarios',
      'Registro de eventos',
      'Chat entre usuarios',
      'Suscripción a eventos',
      'Envio de notificaciones',
    ],
    featuresEn: ['User registration', 'Event registration', 'User chat', 'Event subscription', 'Notification sending'],
  },
]
