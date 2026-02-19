import { motion } from 'framer-motion';
import client1 from '../assets/client_1.jpeg';
import client2 from '../assets/client_2.jpeg';
import client3 from '../assets/client_3.jpeg';
import client4 from '../assets/client_4.jpeg';
import client5 from '../assets/client_5.jpeg';
import client6 from '../assets/client_6.jpeg';
import './Clients.css';

const clients = [
    { id: 1, src: client1, alt: 'Client 1' },
    { id: 2, src: client2, alt: 'Client 2' },
    { id: 3, src: client3, alt: 'Client 3' },
    { id: 4, src: client4, alt: 'Client 4' },
    { id: 5, src: client5, alt: 'Client 5' },
    { id: 6, src: client6, alt: 'Client 6' },
];

export default function Clients() {
    return (
        <section className="clients section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Network</span>
                    <h2 className="section-title">Trusted By</h2>
                </motion.div>

                <div className="clients__carousel">
                    <motion.div
                        className="clients__track"
                        animate={{
                            x: ['0%', '-50%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 30,
                                ease: 'linear',
                            },
                        }}
                    >
                        {/* Double the list for infinite scroll effect */}
                        {[...clients, ...clients].map((client, index) => (
                            <div key={`${client.id}-${index}`} className="clients__item">
                                <img
                                    src={client.src}
                                    alt={client.alt}
                                    width="300"
                                    height="200"
                                    loading="lazy"
                                    className="clients__logo"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
