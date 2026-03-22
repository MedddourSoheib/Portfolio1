import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

const SKILLS = [
    {
        category: '🧠 IA & Big Data',
        items: [
            { name: 'TensorFlow / PyTorch', level: 85 },
            { name: 'Scikit-Learn (ML)', level: 85 },
            { name: 'Pandas / Numpy / Spark', level: 80 },
            { name: 'OpenCV / Keras', level: 75 },
            { name: 'Matplotlib', level: 80 },
        ],
    },
    {
        category: '💻 Langages & BDD',
        items: [
            { name: 'Python', level: 95 },
            { name: 'C / C++', level: 80 },
            { name: 'SQL / MySQL', level: 75 },
            { name: 'Matlab / Simulink', level: 80 },
        ],
    },
    {
        category: '⚙️ DevOps & Systèmes',
        items: [
            { name: 'Git / GitHub', level: 85 },
            { name: 'Docker', level: 70 },
            { name: 'Linux / Windows', level: 85 },
            { name: 'VS Code / Quartus', level: 80 },
        ],
    },
    {
        category: '📝 Bureautique & Outils',
        items: [
            { name: 'LaTeX', level: 85 },
            { name: 'Excel', level: 90 },
            { name: 'Suite Microsoft Office', level: 85 },
        ],
    },
];

function SkillBar({ name, level, delay }) {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div ref={ref} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
                <span style={{ fontSize: '12px', color: 'var(--accent-secondary)', fontWeight: 600 }}>{level}%</span>
            </div>
            <div style={{
                height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden',
            }}>
                <motion.div
                    style={{
                        height: '100%', background: 'var(--accent-gradient)', borderRadius: '3px',
                        boxShadow: '0 0 8px var(--accent-glow)',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${level}%` : 0 }}
                    transition={{ duration: 1.2, delay: delay * 0.1, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                >
                    Compétences
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
                >
                    Un spectre large de compétences techniques, de l'IA au développement web en passant par la 3D.
                </motion.p>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px', marginTop: '60px',
                }}>
                    {SKILLS.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2 + gi}
                            style={{
                                background: 'var(--glass-bg)', backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)', borderRadius: 'var(--border-radius)',
                                padding: '28px',
                            }}
                        >
                            <h3 style={{
                                fontSize: '16px', fontWeight: 700, marginBottom: '24px',
                                color: 'var(--text-primary)',
                            }}>
                                {group.category}
                            </h3>
                            {group.items.map((skill, si) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 5 + si} />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
