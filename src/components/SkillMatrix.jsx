import { motion } from 'framer-motion';
import { Award, Languages, Settings2 } from 'lucide-react';

export default function SkillMatrix() {
    const skillGroups = [
        { title: "Cloud & Virtualization", skills: ["OpenStack", "VMware", "KVM", "Docker"] },
        { title: "Networks & Telecom", skills: ["CCNA", "Oracle SBC", "SIP", "VoIP", "NFVIS"] },
        { title: "Systems", skills: ["Linux (Ubuntu)", "Windows", "RBAC"] },
        { title: "Development", skills: ["HTML", "CSS", "JavaScript", "React"] }
    ];

    const certs = [
        "CCNA 1 & CCNA 2 (Cisco)",
        "OpenStack Practical Projects",
        "Oracle SBC Practical Projects",
        "English Certificate (B2 Level)",
        "Technical Support Diploma - OFPPT"
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Technical <span className="text-gradient">Skills Matrix</span>
                </h2>

                <div className="grid-2">

                    {/* Skills Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card"
                                style={{ padding: '1.5rem' }}
                            >
                                <h4 style={{ color: 'var(--accent-teal)', marginBottom: '1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Settings2 size={14} /> {group.title}
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {group.skills.map((skill, j) => (
                                        <span key={j} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certs & Languages */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Award className="text-gradient" /> Certifications & Training
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {certs.map((cert, i) => (
                                    <div key={i} style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-teal)' }}></div>
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Languages className="text-gradient" /> Languages
                            </h3>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Arabic</span>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.5rem' }}>
                                        <div style={{ width: '95%', height: '100%', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>English</span>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.5rem' }}>
                                        <div style={{ width: '85%', height: '100%', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>French</span>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.5rem' }}>
                                        <div style={{ width: '65%', height: '100%', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
