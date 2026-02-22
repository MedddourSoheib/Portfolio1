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
        icon: '🤖',
        title: 'NeuralChat — LLM Assistant',
        desc: 'Assistant conversationnel basé sur un LLM fine-tuné pour le domaine médical. Interface React + API FastAPI.',
        tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
        github: '#',
        demo: '#',
    },
    {
        icon: '👁️',
        title: 'VisionAI — Détection d\'objets',
        desc: "Système de détection d'objets en temps réel avec YOLOv8, déployé sur edge devices avec ONNX Runtime.",
        tech: ['Python', 'YOLOv8', 'OpenCV', 'ONNX'],
        github: '#',
        demo: '#',
    },
    {
        icon: '🎨',
        title: 'ArtGen — IA Générative',
        desc: "Pipeline de génération d'images artistiques utilisant Stable Diffusion avec interface web intuitive.",
        tech: ['Python', 'Diffusers', 'Gradio', 'CUDA'],
        github: '#',
        demo: '#',
    },
    {
        icon: '📊',
        title: 'DataViz 3D Dashboard',
        desc: 'Dashboard de visualisation de données ML interactif avec graphiques 3D et animations en temps réel.',
        tech: ['React', 'Three.js', 'D3.js', 'WebGL'],
        github: '#',
        demo: '#',
    },
    {
        icon: '🧬',
        title: 'BioML — Analyse Génomique',
        desc: 'Modèle de classification de séquences ADN avec transformers pour la prédiction de maladies génétiques.',
        tech: ['Python', 'HuggingFace', 'BioPython', 'Sklearn'],
        github: '#',
        demo: '#',
    },
    {
        icon: '🌐',
        title: 'Portfolio 3D',
        desc: 'Ce portfolio — construit avec React, Three.js, Framer Motion et GSAP pour une expérience immersive.',
        tech: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
        github: '#',
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
