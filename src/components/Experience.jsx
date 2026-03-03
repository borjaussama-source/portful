import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, Star } from 'lucide-react';

export default function Experience() {
    const projects = [
        { title: "OpenStack Private Cloud", subtitle: "Multi-tenant with RBAC", badge: "Cloud" },
        { title: "Oracle SBC Telecom Security", subtitle: "Practical Project", badge: "Telecom" },
        { title: "Google Sheets API", subtitle: "React Frontend Integration", badge: "Dev" }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="grid-2">

                    {/* Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card"
                    >
                        <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Briefcase className="text-gradient" /> Professional Experience
                        </h2>

                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Media Technician | AV & Live Streaming Specialist</h3>
                                    <p style={{ color: 'var(--accent-teal)', fontWeight: 600, marginBottom: '0.5rem' }}>ISJM</p>
                                </div>
                                <span className="badge" style={{ margin: 0 }}>Oct 2022 - Jul 2023</span>
                            </div>

                            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Live video production & camera switching</li>
                                <li style={{ marginBottom: '0.5rem' }}>IT/AV equipment maintenance & repair</li>
                                <li style={{ marginBottom: '0.5rem' }}>OBS Studio advanced configuration</li>
                                <li style={{ marginBottom: '0.5rem' }}>Network connectivity & streaming reliability</li>
                                <li style={{ marginBottom: '0.5rem' }}>Student training in AV/IT best practices</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <FolderGit2 className="text-gradient" /> Featured Projects
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {projects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    className="glass-card"
                                    whileHover={{ x: 10, borderColor: 'var(--accent-teal)' }}
                                    style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    <div>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-teal)', fontWeight: 800, textTransform: 'uppercase' }}>{project.badge}</span>
                                        <h4 style={{ margin: '0.25rem 0' }}>{project.title}</h4>
                                        <p style={{ margin: 0, fontSize: '0.85rem' }}>{project.subtitle}</p>
                                    </div>
                                    <Star size={20} className="text-gradient" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
