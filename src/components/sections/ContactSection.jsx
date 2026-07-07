import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="lien-he">
      <div className="container">
        <h2>{t('contactSection.title')}</h2>
        <div className="card">
          <div className="contact-box">
            <div className="contact-pill">
              <span>📞 {t('contactSection.phoneLabel')}</span>
              <a href="tel:0978934334">
                <strong>0978 934 334</strong>
              </a>
            </div>
            <a
              className="social-btn btn-messenger"
              href="https://m.me/yourpageid"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 {t('contactSection.messenger')}
            </a>
            <a
              className="social-btn btn-zalo"
              href="https://zalo.me/0978934334"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 {t('contactSection.zalo')}
            </a>
          </div>
          <p className="note-small" style={{ marginTop: '8px' }}>
            {t('contactSection.note')}
          </p>
        </div>
      </div>
    </section>
  );
}
