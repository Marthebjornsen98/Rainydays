const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function jacketId(id) {
    try {
        document.querySelector('.loading').innerHTML = `
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" alt="loading-gif">
        `;

        const jacketResponse = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wc/store/products/' + id);
        const jacket = await jacketResponse.json();

        document.title = jacket.name;
        document.querySelector('.raincoat-information').innerHTML += `
            ${jacket.name}
        `;

        document.querySelector('.price__jacket').innerHTML += `
            $ ${jacket.prices.price}
        `;

        document.querySelector('.raincoat__color').innerHTML += `
        <p class="raincoat__color--text"><span class="bold">Color:</span> ${jacket.tags[0].name}</p>
        `;

        document.querySelector('.raincoat__description').innerHTML += `
            <p>${jacket.description}</p>
        `

        document.querySelector('.jacket-big__container').innerHTML += `
            <img class="jacket-big__img" src="${jacket.images[0].src}">
        `;

        // for (let i = 0; i < jacket.length; i++) {
        //     if (jacket.on_sale) {

        //     }
        //     jacket[i];
        // }

    } catch (error) {
        // document.querySelector('.alert') = showAlert(
        //     'An error occured, please contact Noroff.no',
        //     'danger'
        // );

        console.log(error);

    } finally {
        // setTimeout(function () {
        //     document.querySelector('.alert').innerHTML = '';
        // }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    }
}

jacketId(id);