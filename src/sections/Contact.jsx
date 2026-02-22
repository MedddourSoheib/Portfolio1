import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="section" id="contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    Contact
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={1}
                >
                    Vous avez un projet en tête ? N'hésitez pas à me contacter.
                </motion.p>

                <div className="contact-layout">
                    <motion.div
                        className="contact-info"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        <div className="contact-info-item">
                            <div className="contact-info-icon">📧</div>
                            <div className="contact-info-text">
                                <h4>Email</h4>
                                <p>pro.soheib@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">📍</div>
                            <div className="contact-info-text">
                                <h4>Localisation</h4>
                                <p>Massy, Paris</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">🟢</div>
                            <div className="contact-info-text">
                                <h4>Disponibilité</h4>
                                <p>Disponible pour des projets freelance</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={3}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Votre nom"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="votre@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Décrivez votre projet..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">
                            {sent ? '✅ Message envoyé !' : '🚀 Envoyer le message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
