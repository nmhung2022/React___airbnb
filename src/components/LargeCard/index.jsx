import React from 'react';
import PropTypes from 'prop-types';
import styled from './LargeCard.module.css';

LargeCard.propTypes = {};

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className={styled.inner}>
      <div className={styled.wrapper__img}>
        <img src={img} alt={title} className={styled.img} />
      </div>
      <div className={styled.wrapper__text}>
        <h3 className={styled.title}>{title}</h3>
        <p className={styled.desc}>{description}</p>

        <button className={styled.btn}>{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;