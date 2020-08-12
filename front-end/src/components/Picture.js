import React from 'react';
import css from './picture.module.css';

export default function Picture({ source, description }) {
  return <img className={css.picture} src={source} alt={description} title={description} />;
}
