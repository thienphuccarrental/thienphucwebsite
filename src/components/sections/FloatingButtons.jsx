export default function FloatingButtons() {
    return (
        <div className={`floating-buttons`}>

            <a
                href="tel:0978934334"
                target="_blank"
                className="float-btn"
            >
                <img title="Gọi ngay" src="/phone.webp" alt="Gọi điện" loading="lazy" />
            </a>

            <a
                href="https://wa.me/message/JU4ITOY7XVR3G1"
                target="_blank"
                className="float-btn"

            >
                <img title="Chat Whatapp" src="/whatapp.webp" alt="Chat Whatapp" loading="lazy" />
            </a>

            <a
                href="https://m.me/nobles.pauvres"
                target="_blank"
                className="float-btn"

            >
                <img title="Chat Messenger" src="/messenger.webp" alt="Chat Messenger" loading="lazy" />
            </a>

            <a
                href="https://zalo.me/0978934334"
                target="_blank"
                className="float-btn"
            >
                <img title="Chat Zalo" src="/zalo.webp" alt="Chat Zalo" loading="lazy" />
            </a>
        </div>
    );
}
