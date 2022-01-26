// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// async function jacketId(id) {
//     try {
//         document.querySelector('.loading').innerHTML = `
//         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" alt="loading-gif">
//         `;

//         const jacketResponse = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wc/store/products/' + id);
//         const jacket = await jacketResponse.json();

//         console.log('jacket', jacket)

//         document.title = jacket.name;
//         document.querySelector('.raincoat-information').innerHTML += `
//             ${jacket.name}
//         `;

//         document.querySelector('.price__jacket').innerHTML += `
//             $ ${jacket.prices.price}
//         `;

//         document.querySelector('.raincoat__color').innerHTML += `
//         <p class="raincoat__color--text"><span class="bold">Color:</span> ${jacket.tags[0].name}</p>
//         `;

//         document.querySelector('.raincoat__description').innerHTML += `
//             <p>${jacket.description}</p>
//         `

//         document.querySelector('.jacket-big__container').innerHTML += `
//             <img class="jacket-big__img" src="./img/jacket-1.jpg">
//         `;

//     } catch (error) {
//         document.querySelector('.alert') = showAlert(
//             'An error occured, please contact Noroff.no',
//             'danger'
//         );

//         console.log(error);

//     } finally {
//         setTimeout(function () {
//             document.querySelector('.alert').innerHTML = '';
//         }, 3000);

//         document.querySelector('.loading').innerHTML = ``;
//     }
// }
// jacketId(id);

// const jacketOnSale = async () => {
//     try {
//         const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wc/store/products/');
//         const onSale = await response.json();
//         console.log(onSale);

//         onSale.forEach(value => {
//             if (value.on_sale) {
//                 document.querySelector('.suggestion__cards').innerHTML += `
//                     <div class="suggestion__card">
//                         <div class="suggestion__img--container">
//                             <img class="suggestion__img" src="./img/jacket-2.jpg"/>
//                         </div>
//                         <div class="card__box">
//                             <div class="card__favorites">
//                                 <i class="far fa-heart"></i>
//                             </div>
//                             <div class="card__price">
//                                 <p class="old__price">$ ${value.prices.regular_price}</p>
//                                 <p class="sale__price--text">$ ${value.prices.sale_price}</p>
//                             </div>
//                             <div class="card__description">
//                                 <p class="card__description--text">
//                                     <a href="jacket.html?id=375">Short Hooded Jacket</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     `;
//             };
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
// }

// jacketOnSale()
