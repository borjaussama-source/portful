import { motion } from 'framer-motion';
import { Server, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export default function Highlights() {
    const services = [
        {
            icon: <Server size={32} className="text-gradient mb-4" />,
            title: "Private Cloud",
            description: "Infrastructure design & administration using OpenStack and VMware."
        },
        {
            icon: <ShieldCheck size={32} className="text-gradient mb-4" />,
            title: "Telecom Security",
            description: "Oracle SBC configuration, SIP, and VoIP infrastructure security."
        },
        {
            icon: <Cpu size={32} className="text-gradient mb-4" />,
            title: "Network Engineering",
            description: "Cisco-level engineering, subnetting, and connectivity solutions."
        },
        {
            icon: <Code2 size={32} className="text-gradient mb-4" />,
            title: "Frontend Dev",
            description: "Modern React development and seamless API integrations."
        }
    ];

    return (
        <section className="section" id="services">
            <div className="container">

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                    <div className="badge">
                        <div className="badge-dot"></div>
                        Services & Solutions
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 10
                }}>
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, borderColor: 'var(--accent-teal)' }}
                            style={{ padding: '2rem' }}
                        >
                            {service.icon}
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
