import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

const TIMELINE = [
    {
        year: '2023 — Présent',
        title: 'Licence Intelligence Artificielle',
        company: 'Université Paris-Saclay',
        desc: 'Formation en machine learning, deep learning, traitement du langage naturel et vision par ordinateur.',
    },
    {
        year: '2022 — 2023',
        title: 'Baccalauréat Scientifique',
        company: 'Lycée — Mention Très Bien',
        desc: "Spécialité Mathématiques et Numérique & Sciences Informatiques. Passionné par l'algorithmique dès le lycée.",
    },
    {
        year: '2022- 2023',
        title: 'Baccalauréat Mathématique',
        company: 'Auto-formation',
        desc: 'Création de mes premiers modèles ML via Kaggle, Coursera et des projets personnels avec Python et TensorFlow.',
    },
];

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                >
                    À propos
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
                >
                    Étudiant passionné par l'IA, je conçois des solutions intelligentes mêlant algorithmes avancés et interfaces immersives.
                </motion.p>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
                    >
                        <p>
                            Passionné par le <strong style={{ color: 'var(--accent-secondary)' }}>machine learning</strong> et le{' '}
                            <strong style={{ color: 'var(--accent-secondary)' }}>traitement d'image</strong>, je conçois des algorithmes
                            intelligents avec rigueur et esprit analytique.
                        </p>
                        <p>
                            Curieux, rapide à apprendre et doté d'un bon sens de la communication, je suis motivé à
                            m'investir dans des <strong style={{ color: 'var(--accent-primary)' }}>projets techniques et innovants</strong>.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
                            {[
                                { label: 'Projets IA', value: '10+' },
                                { label: 'Années de code', value: '4+' },
                                { label: 'Contributeur Open Source', value: '✓' },
                            ].map((stat) => (
                                <div key={stat.label} style={{
                                    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                    borderRadius: 'var(--border-radius)', padding: '20px 24px', textAlign: 'center',
                                    backdropFilter: 'blur(20px)', flex: '1', minWidth: '100px',
                                }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-avatar"
                        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
                    >
                        <div className="about-avatar-inner">
                            <img
                                src="/photo.jpg"
                                alt="Soheib Meddour"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="timeline">
                    <motion.h3
                        className="timeline-header"
                        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
                    >
                        Parcours
                    </motion.h3>
                    <div className="timeline-items">
                        {TIMELINE.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="timeline-item"
                                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5 + i}
                            >
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-title">{item.title}</div>
                                <div className="timeline-company">{item.company}</div>
                                <div className="timeline-desc">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
