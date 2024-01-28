const renderElement = document.getElementById("render-element");

export const dom = {
  renderHomeMeals: (dataArray) => {
    renderElement.innerHTML = "";
    let storeBox = "";
    dataArray.map((ele) => {
      storeBox += `
            <div class="col-md-3">
            <div class="item rounded-3 overflow-hidden"  id="${ele?.idMeal}" >
              <img src=${ele?.strMealThumb} class="img-fluid" alt="" />
              <div class="title">${ele?.strMeal}</div>
              <div class="category-description"></div>
            </div>
          </div>
                  `;
    });
    renderElement.innerHTML += storeBox;
  },

  renderCategories: (dataArray) => {
    $(".search").hide();
    let storeBox = "";
    dataArray.map((ele) => {
      storeBox += `
      <div class="col-md-3">
      <div class="item-category rounded-3 overflow-hidden" id="${
        ele?.strCategory
      }" >
        <img src=${ele?.strCategoryThumb} class="img-fluid" alt="" />
        <div class="title flex-column align-items-start justify-content-center  ">
        <div class='title-text'>${ele?.strCategory}</div>
        <div class="category-description fs-6">${ele?.strCategoryDescription
          .split(" ")
          .slice(0, 15)
          .join(" ")}...</div>
        </div>
      </div>
    </div>
          `;
    });
    renderElement.innerHTML += storeBox;
  },

  renderArea: (dataArray) => {
    $(".search").hide();
    let storeBox = "";
    dataArray.map((ele) => {
      storeBox += `
        <div class="col-md-3">
        <div
          class="item-area rounded-3 w-100 h-100 overflow-hidden w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style='min-height: 300px' 
          id="${ele?.strArea}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="#fff"
            class="bi bi-house-door-fill mb-3"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
            />
          </svg>
    
          <h3 class="text-light">${ele?.strArea}</h3>
        </div>
      </div>
            `;
    });
    renderElement.innerHTML += storeBox;
  },

  renderIngredients: (dataArray) => {
    $(".search").hide();
    let storeBox = "";
    dataArray.map((ele) => {
      storeBox += `
        <div class="col-md-3">
        <div class="item-ingredients rounded-3 overflow-hidden w-100 h-100 d-flex flex-column align-items-center justify-content-center" style='min-height: 300px' id="${
          ele?.strIngredient
        }">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="110"
        fill="#fff"
        class="bi bi-cart2 mb-3"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </svg>
          <div class="title flex-column align-items-start justify-content-center text-light text-center ">
          
          <div class='title-text fw-bold '>${ele?.strIngredient}</div>
          
    
          <div class="category-description fs-6">${ele?.strDescription
            ?.split(" ")
            .slice(0, 15)
            .join(" ")}</div>
          
          </div>
         
        </div>
      </div>
            `;
    });
    renderElement.innerHTML += storeBox;
  },
  renderContact: () => {
    $(".search").hide();
    renderElement.innerHTML = `
    <div class="container d-flex flex-column align-items-center justify-content-center w-75 text-center" style='height: calc(100vh - 66px);'>
        <div class="row g-4">
          <div class="col-md-6">
            <input
              id="nameInput"
              name="name"
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
            />
            <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
              Special characters and numbers not allowed
            </div>
          </div>
          <div class="col-md-6">
            <input
              id="emailInput"
              name="email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
              Email not valid *exemple@yyy.zzz
            </div>
          </div>
          <div class="col-md-6">
            <input
              id="phoneInput"
              name="phone"
              type="tel"
              class="form-control"
              placeholder="Enter Your Phone"
            />
            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid Phone Number
            </div>
          </div>
          <div class="col-md-6">
            <input
              id="ageInput"
              name="age"
              type="number"
              class="form-control"
              placeholder="Enter Your Age"
            />
            <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid age
            </div>
          </div>
          <div class="col-md-6">
            <input
              id="passwordInput"
              name="password"
              type="password"
              class="form-control"
              placeholder="Enter Your Password"
            />
            <div
              id="passwordAlert"
              class="alert alert-danger w-100 mt-2 d-none"
            >
              Enter valid password *Minimum eight characters, at least one
              letter and one number:*
            </div>
          </div>
          <div class="col-md-6">
            <input
              id="repasswordInput"
              name="repassword"
              type="password"
              class="form-control"
              placeholder="Repassword"
            />
            <div
              id="repasswordAlert"
              class="alert alert-danger w-100 mt-2 d-none"
            >
              Enter valid repassword
            </div>
          </div>
        </div>
        <button
          id="submitBtn"
          disabled=""
          class="btn btn-outline-danger px-2 mt-3"
        >
          Submit
        </button>
      </div>
    `;
  },
  renderDetails: (ele) => {
    console.log("🚀 ~ ele:", ele);
    let badges = [];
    for (let i = 1; i < 21; i++) {
      badges.push(ele[`strMeasure${i}`] + ele[`strIngredient${i}`]);
    }

    const renderBadges = () => {
      let storeBox = "";
      badges.map((ele) => {
        if (ele.trim()) {
          storeBox += `
        <span class="badge rounded-pill bg-info text-dark">${ele}</span>
        `;
        }
      });
      return storeBox;
    };

    console.log("🚀 ~ badges:", badges);
    renderElement.innerHTML = `
    <div class="col-md-3">
    <div class="img-container mb-3 rounded-3 overflow-hidden">
      <img src=${ele?.strMealThumb} class="img-fluid" alt="" />
    </div>
    <h2 class="meal-name text-light">${ele?.strMeal}</h2>
  </div>
  <div class="col-md-9 text-light">
    <h2>Instructions</h2>
    <p class="meal-instructions">
      ${ele?.strInstructions}
    </p>
    <div class="info mb-2">
      <span class="h2 fw-bold">Area : </span
      ><span id="area-text">${ele?.strArea}</span>
    </div>
    <div class="info mb-2">
      <span class="h2 fw-bold">Category : </span
      ><span id="category-text">${ele?.strCategory}</span>
    </div>
    <div class="info mb-2">
      <span class="h2 fw-bold">Recipes : </span
      ><span id="recipes-text"></span>
    </div>
    <div class="badges" id="ingredients-badges">
    <span class="badge bg-info text-dark">1 cup Lentils</span>
      ${renderBadges()}
    </div>
    <div class="info mb-2">
      <span class="h2 fw-bold">Tags :  </span>
    </div>
    <div class="badges mb-3">
      <span class="badge bg-danger text-dark">${ele?.strCategory}</span>
    </div>
    <div class="actions">
      <a href=${ele?.strSource} class="btn btn-success">Source</a>
      <a href=${ele?.strYoutube} class="btn btn-danger">Youtube</a>
    </div>
  </div>
    `;
  },
};
