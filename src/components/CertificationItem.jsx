import React from 'react'
import { certifications } from '../Data'
import { RiLink } from 'react-icons/ri'
import './certificates.css'

const CertificateItem = () => {
  return (
    <section className="certificate section">
        <div className="certificate-container container grid">
            {certifications.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
            ))}
        </div>
    </section>
  )
}

const CertificateCard = ({ cert }) => {
    return (
        <article className="certificate-card">
            <div className="certificate-img-wrapper">
                <img src={cert.image} alt={cert.title} className='certificate-img' />
            </div>

            <h3 className="certificate-title">{cert.title}</h3>

            <p className="certificate-description">
                {cert.description}
            </p>

            <div className="certificate-skills">
                <span className='issuer'>{cert.issuer}</span> 
                <span className='year'>{cert.year}</span>
            </div>
        </article>
    )
}

export default CertificateItem
