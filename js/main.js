'use strict';

// dblclick：ダブルクリック
// document.getElementById('target').addEventListener('dblclick',() =>{
document.getElementById('target').addEventListener('click',() =>{
  // クリックするとピンクに変わる
  document.getElementById('target').style.background = 'pink';
  // クリックすると「〇」に変わる
  document.getElementById('target').style.borderRadius ='50%'
});