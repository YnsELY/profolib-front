import { Zap, MousePointerClick, TrendingUp, Lock, Search, Calendar, UserCheck } from 'lucide-react';

export const FEATURES = [
  {
    icon: Zap,
    title: "Instantané",
    description: "Pas besoin de planifier à l'avance. Un professeur disponible en quelques minutes."
  },
  {
    icon: MousePointerClick,
    title: "Simple",
    description: "3 clics suffisent pour être en cours avec un professeur qualifié."
  },
  {
    icon: TrendingUp,
    title: "Efficace",
    description: "Des professeurs vérifiés et expérimentés pour des résultats concrets."
  },
  {
    icon: Lock,
    title: "Sécurisé",
    description: "Visioconférence sécurisée et données personnelles protégées."
  }
];

export const STEPS = [
  {
    id: 1,
    icon: Search,
    title: "Décrivez votre besoin",
    description: "Sélectionnez la matière, votre niveau et décrivez votre problème en quelques mots."
  },
  {
    id: 2,
    icon: UserCheck,
    title: "Un professeur accepte",
    description: "Votre demande est envoyée instantanément à tous les profs disponibles. Le premier qui répond prend le cours."
  },
  {
    id: 3,
    icon: Calendar,
    title: "Cours en visio immédiat",
    description: "Un lien de visioconférence est généré automatiquement. Rejoignez le cours en un clic."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    role: "Élève de Terminale",
    content: "J'avais un exercice de maths que je ne comprenais pas la veille du bac. En 10 minutes j'étais en visio avec un prof génial !",
    author: "Marie L.",
    rating: 5
  },
  {
    id: 2,
    role: "Professeur de Physique",
    content: "Une plateforme intuitive qui me permet d'aider des élèves quand j'ai du temps libre. Excellent concept !",
    author: "Thomas D.",
    rating: 5
  },
  {
    id: 3,
    role: "Parent d'élève",
    content: "Mon fils peut avoir de l'aide immédiate quand il bloque sur ses devoirs. C'est vraiment pratique !",
    author: "Sophie R.",
    rating: 5
  }
];