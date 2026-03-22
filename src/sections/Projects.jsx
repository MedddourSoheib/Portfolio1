import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
    }),
};

const PROJECTS = [
    {
        icon: '🚗',
        title: "Course Voitures Autonomes Paris Saclay (CoVAPSy) à l'ENS Paris-Saclay",
        desc: 'Description à remplacer...',
        tech: ['Python', 'ROS', 'C++'],
        github: 'https://sti.eduscol.education.fr/si-ens-paris-saclay/ressources_pedagogiques/covapsy-tp-autour-des-voitures-autonomes',
        demo: '#',
    },

    {
        icon: '🧠',
        title: 'Cliff Walking : SARSA et Q-Learning',
        desc: "Description à remplacer...",
        tech: ['Python', 'Reinforcement Learning', 'Numpy'],
        github: 'https://github.com/MedddourSoheib/RL-SARSA-Q-learning',
        demo: '#',
    },
    {
        icon: '🖼️',
        title: "Traitement d'image (La corrélation en C)",
        desc: "Description à remplacer...",
        tech: ['C', 'OpenCV', 'C++'],
        github: 'https://github.com/MedddourSoheib/Image-Processing',
        demo: '#',
    },

    {
        icon: '💡',
        title: 'Détecteur Automatisé de Source Lumineuse',
        desc: "Description à remplacer...",
        tech: ['Arduino', 'Électronique', 'C++'],
        github: 'https://github.com/MedddourSoheib/Automated-light-source-detector',
        demo: '#',
    },
    {
        icon: '⚙️',
        title: 'FPGA',
        desc: "Description à remplacer...",
        tech: ['VHDL', 'Verilog', 'Électronique Numérique'],
        github: 'https://github.com/MedddourSoheib/FPGA-VHDL-',
        demo: '#',
    },

];

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                >
                    Projets
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
                >
                    Des projets qui mêlent intelligence artificielle, design 3D et ingénierie logicielle.
                </motion.p>

                <div className="projects-grid">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2 + i}
                        >
                            <div className="project-image">
                                <div className="project-image-gradient" />
                                <div className="project-image-icon">{project.icon}</div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tech">
                                    {project.tech.map((t) => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project-actions">
                                    <a href={project.github} className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '13px' }}>
                                        GitHub
                                    </a>
                                    <a href={project.demo} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                                        Demo →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
