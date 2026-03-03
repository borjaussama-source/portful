import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Cloud, Network, Code, Shield } from 'lucide-react';

export default function Hero() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVars = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 50, damping: 12 }
        }
    };

    const expertise = [
        { icon: <Cloud size={18} />, text: "OpenStack Administration" },
        { icon: <Network size={18} />, text: "Network Engineering (CCNA)" },
        { icon: <Shield size={18} />, text: "Telecom Security (Oracle SBC)" },
        { icon: <Code size={18} />, text: "Frontend Development (React)" }
    ];

    return (
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
            <div className="container">
                <motion.div
                    className="glass-card"
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVars} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} className="text-gradient" /> Casablanca</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} className="text-gradient" /> 0631 550371</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} className="text-gradient" /> borja.ussama@gmail.com</span>
                    </motion.div>

                    <motion.h4 variants={itemVars} style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                        BORJA OUSSAMA
                    </motion.h4>

                    <motion.h1 variants={itemVars} style={{ marginBottom: '1rem' }}>
                        Cloud Infrastructure & <br />
                        <span className="text-gradient">Network Technician</span>
                    </motion.h1>

                    <motion.div variants={itemVars} className="subheadline" style={{ marginBottom: '2rem' }}>
                        Junior-Intermediate <span className="subheadline-dot">•</span> Multi-tenant Cloud <span className="subheadline-dot">•</span> Telecom Security
                    </motion.div>

                    <motion.div variants={itemVars} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                        {expertise.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                <span className="text-gradient" style={{ display: 'flex' }}>{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVars} className="terminal-block">
                        Technicien en infrastructure cloud hybride, réseau et logiciel
                    </motion.div>

                    <motion.div variants={itemVars} style={{ marginTop: '3rem' }}>
                        <a href="mailto:borja.ussama@gmail.com" className="btn btn-primary">
                            Hire Me for Cloud & Network Solutions
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
