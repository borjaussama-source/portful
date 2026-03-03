export default function Footer() {
    const techs = ["OpenStack", "Cisco", "Oracle SBC", "React", "Linux", "VMware"];

    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border-color)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}>
            <div className="container">
                <div className="text-center">
                    <p className="footer-text mb-4" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Infrastructure Stack
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)'
                    }}>
                        {techs.map((t, i) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                {t}
                                {i < techs.length - 1 && <span style={{ opacity: 0.2 }}>|</span>}
                            </span>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: 0 }}>
                            © {new Date().getFullYear()} Borja Oussama. All rights reserved.
                        </p>
                        <p style={{ fontSize: '0.7rem', opacity: 0.3 }}>
                            Casablanca, Morocco
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
