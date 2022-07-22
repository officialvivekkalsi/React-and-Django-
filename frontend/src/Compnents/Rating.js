import React from 'react';
import '../home.css'
function Rating({ value, color, text }) {
  return (
    <div>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
              //  far for empty star
          }
        ></i>
      </span>
      <br/  >
      <span>{text && text}</span>
      {/* if text exist then fill the text otherwise no */}
    </div>
  );
}

export default Rating;
