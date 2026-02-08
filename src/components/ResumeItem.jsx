import React from 'react'
import parse from 'html-react-parser'

export const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resume-item">
        <div className="resume-icon">{icon}</div>
        <div className="resume-date">{year}</div>
        <div className="resume-subtitle">{parse(title)}</div>
        <div className="resume-description">{desc}</div>
    </div>
  )
}
