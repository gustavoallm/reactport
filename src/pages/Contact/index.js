import './contact.css';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.main
            className="bg-contact"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container-contact">
                <div className="content-contact">
                    <h1 className="title-home">Contact</h1>
                    <div className="contacts">
                        <a href="mailto:gustavo_allm@outlook.com">
                            <span>Gustavo_allm@outlook.com</span>
                        </a>
                        <a href="tel://+551999419-7044">
                            <span>+55 19 99419-7044</span>
                        </a>
                        <a href="https://goo.gl/maps/9n1gnKtCyUpi26Sy6" target="_blank">
                            <span>Americana SP, Brasil</span>
                        </a>
                    </div>
                </div>
            </div>
            <span>
                Photo by{' '}
                <a href="https://unsplash.com/@rodlong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Rod Long
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </span>
        </motion.main>
    );
}

export default Contact;
