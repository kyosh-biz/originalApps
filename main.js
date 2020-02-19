'use strict';

{
    const num = 10;

    const container = document.getElementById('container');

    for(let i = 0; i < num; i++){
        const div = document.createElement('div');
        div.classList.add('tbox');
        
        const img = document.createElement('img');
        img.setAttribute("src","https://github.com/kyosh-biz/originalApps/blob/master/%E5%AE%9D%E7%AE%B1.png?raw=true");
        img.classList.add('img');

        const item = document.createElement('span');
        item.classList.add('item');
        // item.textContent = "click";

        img.addEventListener('click',() =>{
            const n = Math.random();
        if(n < 0.07) {
            img.style.display = "none";
            const results = ['天空のつるぎ','天空のよろい','天空の盾','ルーンバックラー' , 'hogehogehogehogehogeのやり'];
            item.textContent = results[Math.floor(Math.random() * results.length)];
            div.classList.add('star5');
        }else if(n < 0.3) {
            img.style.display = "none";
            item.textContent = "☆4"
            div.classList.add('star4');
        }else {
            img.style.display = "none";
            item.textContent = "☆3"
            div.classList.add('star3');
        }
        });
        container.appendChild(div);
        div.appendChild(img);
        div.appendChild(item);
    }

    // const box = document.getElementById('box');
    // const item = document.getElementById('item');
    // box.addEventListener('click' , () => {
    //     const n = Math.random();
    //     if(n < 0.07) {
    //         const results = ['天空のつるぎ','天空のよろい','天空の盾','ルーンバックラー' , 'hogehogehogehogehogeのやり'];
    //         item.textContent = results[Math.floor(Math.random() * results.length)];
    //         box.classList.add('star5');
    //     }else if(n < 0.3) {
    //         item.textContent = "☆4"
    //         box.classList.add('star4');
    //     }else {
    //         item.textContent = "☆3"
    //         box.classList.add('star3');
    //     }
    // });
}
