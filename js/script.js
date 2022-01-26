// // API Call
// const rainydaysAPI = async () => {
//     try {
//         document.querySelector('.loading').innerHTML = `
//         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" alt="loading-gif">
//         `;

//         const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wc/store/products');
//         const products = await response.json();
//         console.log(products);

//         products.forEach(element => {
//             document.querySelector('.jacket-list__container').innerHTML += `
//             <div class="jacket__card">
//                 <div class="jacket-card__img--container">
//                     <img class="jacket-card__img" src="./img/jacket-1.jpg"/>
//                 </div>
//                 <div class="jacket-card__info">
//                     <div class="jacket__name">
//                         <p class="jacket--card__description">
//                             <a href="jacket.html?id=${element.id}">${element.name}</a>
//                         </p>
//                         <i class="far fa-heart"></i>
//                     </div>
//                     <div class="price">
//                         <p class="card-jacket__price--text">€150</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });

//     } catch (error) {
//         document.querySelector('.alert').innerHTML = showAlert(
//             'An error occured',
//             'danger'
//         );
//         console.log(error);

//     } finally {
//         setTimeout(function () {
//             document.querySelector('.alert').innerHTML = ``;
//         }, 3000);
//         document.querySelector('.loading').innerHTML = ``;
//     }
// };

// rainydaysAPI()
