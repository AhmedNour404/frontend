import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
   <div className="center">
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
  <div className="wave" />
</div>

    </div>
  );
}
