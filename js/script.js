import { dom } from "./modules/dom.module.js";
console.log("🚀 ~ dom:", dom);

let homeData;
let categoriesData;
let detailsData = [];
let ingredientsData;
let areaData;

const renderElement = document.getElementById("render-element");
// const renderDetailsElement = document.querySelector(".render-details");
const {
  renderHomeMeals,
  renderCategories,
  renderArea,
  renderIngredients,
  renderContact,
  renderDetails,
} = dom;

// $(".loader-layer").fadeIn();

$(".loader-layer").fadeOut(1000, () => {
  $(".loader-layer").remove();
});
$(window).ready(async () => {
  await getHomeData();
});

$(document).on("click", ".item", function () {
  $(".search").hide();
  var mealId = $(this).attr("id");
  getMealDetails(mealId);
});

$(document).on("click", ".item-category", async (e) => {
  getMealsByCategory(e.currentTarget.id);
});

$(document).on("click", ".item-area", async (e) => {
  getMealsByArea(e.currentTarget.id);
});

$(document).on("click", ".item-ingredients", async (e) => {
  getMealsByIngredients(e.currentTarget.id);
});

$(".open-btn").on("click", () => {
  $(".open-btn").fadeOut(200, () => {
    $(".close-btn").fadeIn(200);
    $(".navbar").animate({ left: "0px" }, 300, () => {
      for (let i = 0; i < 5; i++) {
        $(".navbar li a")
          .eq(i)
          .fadeIn((i + 5) * 200);
      }
    });
  });
});

const closeNav = () => {
  $(".close-btn").fadeOut(200, () => {
    $(".open-btn").fadeIn(200);
    $(".navbar").animate({ left: "-300px" }, 300, () => {
      for (let i = 0; i < 5; i++) {
        $(".navbar ul li a").eq(i).fadeOut();
      }
    });
  });
};

$(".close-btn").on("click", closeNav);

const getHomeData = () => {
  $.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
    data: {},
    dataType: "json",
    success: function (response) {
      homeData = response.meals;
      console.log("🚀 ~ homeData:", homeData);
      renderHomeMeals(homeData);
    },
  });
};

const getMealDetails = (id) => {
  $.ajax({
    type: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    data: {},
    dataType: "json",
    success: function (response) {
      detailsData = response.meals;
      console.log("🚀 ~ detailsData:", detailsData);
      renderDetails(detailsData[0]);
    },
  });
};

const getCategories = () => {
  $.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    data: {},
    dataType: "json",
    success: function (response) {
      categoriesData = response.categories;
      console.log("🚀 ~ categoriesData:", categoriesData);
    },
  });
};

const getArea = () => {
  $.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    data: {},
    dataType: "json",
    success: function (response) {
      areaData = response.meals;
      console.log("🚀 ~ areaData:", areaData);
    },
  });
};

const getIngredients = () => {
  $.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    data: {},
    dataType: "json",
    success: function (response) {
      console.log("🚀 ~ getIngredients ~ response:", response.meals);
      ingredientsData = response.meals.slice(0, 20);
      console.log("🚀 ~ ingredientsData:", ingredientsData);
      renderIngredients(ingredientsData);
    },
  });
};

const getMealsByCategory = (cat) => {
  console.log("🚀 ~ getMealsByCategory ~ cat:", cat);
  $.ajax({
    type: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`,
    data: {},
    dataType: "json",
    success: function (response) {
      console.log("🚀 ~ getMealsByCategory ~ response:", response);
      homeData = response.meals;
      console.log("🚀 ~ homeData:", homeData);
      renderHomeMeals(homeData.slice(0, 20));
    },
  });
};

const getMealsByArea = (area) => {
  $.ajax({
    type: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    data: {},
    dataType: "json",
    success: function (response) {
      console.log("🚀 ~ getMealsByCategory ~ response:", response);
      homeData = response.meals;
      console.log("🚀 ~ homeData:", homeData);
      renderHomeMeals(homeData?.slice(0, 20));
    },
  });
};

const getMealsByIngredients = (ingredient) => {
  $.ajax({
    type: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    data: {},
    dataType: "json",
    success: function (response) {
      console.log("🚀 ~ getMealsByCategory ~ response:", response);
      homeData = response.meals;
      console.log("🚀 ~ homeData:", homeData);
      renderHomeMeals(homeData?.slice(0, 20));
    },
  });
};

// search component
// id = search-btn

$("#search-btn").on("click", () => {
  $(".search.row").css({ display: "flex" });
  closeNav();
  renderElement.innerHTML = "";
});

let debounceTimer;

$("#searchByName").on("keyup", () => {
  // Clear the previous timer if it exists
  clearTimeout(debounceTimer);

  // Set a new timer to execute the function after a delay
  debounceTimer = setTimeout(() => {
    const name = $("#searchByName").val();

    if (name) {
      $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
        data: {},
        dataType: "json",
        success: function (response) {
          homeData = response.meals;
          console.log("🚀 ~ homeData:", homeData);
          renderElement.innerHTML = "";
          renderHomeMeals(homeData.slice(0, 20));
        },
      });
    }
  }, 500); // Set the delay time in milliseconds (adjust as needed)
});

$("#searchByFirstLitter").on("keyup", () => {
  let inputValue = $("#searchByFirstLitter").val();
  inputValue.length > 1
    ? $("#searchByFirstLitter").val(inputValue.substr(0, 1))
    : null;

  const firstLitter = inputValue.substr(0, 1);

  debounceTimer = setTimeout(() => {
    if (firstLitter) {
      $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLitter}`,
        data: {},
        dataType: "json",
        success: function (response) {
          homeData = response.meals;
          console.log("🚀 ~ homeData:", homeData);
          renderElement.innerHTML = "";
          renderHomeMeals(homeData.slice(0, 20));
        },
      });
    }
  }, 500);
});

// categories component

$("#categories-btn").on("click", async () => {
  closeNav();
  await getCategories();
  $("#render-element").slideUp(1000, () => {
    $("#render-element").html("");

    console.log("🚀 ~ $ ~ categoriesData:", categoriesData);
    renderCategories(categoriesData.slice(0, 20));
    $("#render-element").slideDown(1000);
  });
});

// area component

$("#area-btn").on("click", async () => {
  closeNav();
  await getArea();
  $("#render-element").slideUp(1000, () => {
    $("#render-element").html("");

    // console.log("🚀 ~ $ ~ areaData:", areaData.slice(0, 20));
    renderArea(areaData.slice(0, 20));
    $("#render-element").slideDown(1000);
  });
});

// ingredients component

$("#ingredients-btn").on("click", async () => {
  //   $(".categories.row").css({ display: "flex" });
  closeNav();
  await getIngredients();
  $("#render-element").slideUp(1000, () => {
    $("#render-element").html("");

    console.log("🚀 ~ $ ~ ingredientsData:", ingredientsData);
    renderIngredients(ingredientsData.slice(0, 20));
    $("#render-element").slideDown(1000);
  });
});

// contact component

$("#contact-btn").on("click", () => {
  closeNav();

  $("#render-element").slideUp(1000, () => {
    renderContact();

    $(".form-control").on("input", inputsValidation);

    $("#render-element").slideDown(1000);
  });
});

let submitValid = {
  name: false,
  email: false,
  phone: false,
  age: false,
  password: false,
  repassword: false,
};
const inputsValidation = (e) => {
  const inputRegex = {
    name: /^[a-zA-Z ]+$/,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
    repassword: /^\w{8,}$/,
  };

  const inputValue = e.target.value;
  console.log("🚀 ~ inputsValidation ~ inputValue:", inputValue);

  let inputName = e.target.name;
  if (inputRegex[inputName].test(inputValue)) {
    $(`#${inputName}Alert`).addClass("d-none");
    submitValid[inputName] = true;
  } else {
    $(`#${inputName}Alert`).removeClass("d-none");
    submitValid[inputName] = false;
  }

  console.log("submitValid", submitValid);

  if (
    submitValid.name &&
    submitValid.email &&
    submitValid.phone &&
    submitValid.age &&
    submitValid.password &&
    submitValid.repassword
  ) {
    $("#submitBtn").removeAttr("disabled");
  } else {
    $("#submitBtn").attr("disabled", "disabled");
  }
};
