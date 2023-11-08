
let bookList = [];

const toggleModal = () => {
const basketModalEl = document.querySelector(".basket__modal");
basketModalEl.classList.toggle("active");
};

const getBooks = () => {
 fetch("./products.json")
 .then((res) => res.json())
 .then((books) => (bookList = books));  
};




getBooks();

const createBookStars = (starRate) => {
    let starRateHtml = "";
    for(let i = 1 ; i<= 5 ;i++ ){
      if(Math.round(starRate) >= i) starRateHtml +=  `<i class="bi bi-star-fill active"></i>`  
      else starRateHtml += `<i class="bi bi-star-fill"></i>`;
    }
    return starRateHtml;
};

const createBookItemsHtml = () => {
    const bookListEl = document.querySelector(".book__list");
    let bookListHtml ="";
    bookList.forEach((book, index) => {
        bookListHtml += `<div class="col-5 ${index % 2 == 0 && "offset-2" } my-5">
        <div class="row book__card">
          <div class="col-6">
            <img
              class="img-fluid shadow"
              width="258"
              height="400"
              src="${book.imgSource}"
              alt="1984"
            />
          </div>
          <div class="col-6 d-flex flex-column justify-content-between">
              <div class="book__detail">
                  <span class="fos gray fs-5">${book.author}</span> <br />
                  <span class="fs-4 fw-bold">${book.name}</span><br />
                  <span class="book__star-rate">
                      ${createBookStars(book.starRate)}
                      <span class="gray">${book.reviewCount} reviews</span>
                  </span>
                  
            </div>
            
              <p class="book__description fos gray">
                  ${book.description}
                  
              </p>

              <div>
                 <span class="black fw-bold fs-4 me-2" >${book.price}£</span> 
                 ${book.oldPrice 
                  ? `<span class=" fw-bold  fs-4 old__price">${book.oldPrice}£</span>`
                 : "" }
              </div>
              <button class="btn__purple">ADD BASKET</button>
            
          </div>
        </div>  
      </div>`  ;  
    });

    bookListEl.innerHTML = bookListHtml;
};

setTimeout(() => {
    createBookItemsHtml();
}, 100);


